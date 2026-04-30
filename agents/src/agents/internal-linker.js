import Anthropic from '@anthropic-ai/sdk';
import { createLogger } from '../core/logger.js';
import { sendSlack, slackHeader, slackSection, slackDivider } from '../core/slack.js';
import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';
import { fileURLToPath } from 'url';

const log = createLogger('internal-linker');
const __dirname = path.dirname(fileURLToPath(import.meta.url));
const WORK_DIR = path.join(__dirname, '..', '..', 'data', 'repo-checkout');
const GH_TOKEN = process.env.GITHUB_TOKEN;
const GH_REPO = process.env.GITHUB_REPO || 'GlobalBookings/spiresdigital';

function ensureRepoCheckout() {
  if (!GH_TOKEN) throw new Error('GITHUB_TOKEN not set');

  const repoUrl = `https://x-access-token:${GH_TOKEN}@github.com/${GH_REPO}.git`;

  if (fs.existsSync(path.join(WORK_DIR, '.git'))) {
    execSync('git fetch origin main && git reset --hard origin/main', { cwd: WORK_DIR, stdio: 'pipe' });
  } else {
    fs.mkdirSync(WORK_DIR, { recursive: true });
    execSync(`git clone --depth 1 ${repoUrl} "${WORK_DIR}"`, { stdio: 'pipe' });
  }

  execSync('git config user.email "agent@spiresdigital.com"', { cwd: WORK_DIR, stdio: 'pipe' });
  execSync('git config user.name "Spires Agent"', { cwd: WORK_DIR, stdio: 'pipe' });
}

function getPages() {
  const pagesDir = path.join(WORK_DIR, 'src', 'pages');
  const pages = [];

  function scan(dir, prefix = '') {
    for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
      if (entry.isDirectory()) {
        scan(path.join(dir, entry.name), `${prefix}/${entry.name}`);
      } else if (entry.name.endsWith('.astro') && !entry.name.startsWith('[')) {
        const slug = entry.name === 'index.astro' ? prefix || '/' : `${prefix}/${entry.name.replace('.astro', '')}`;
        const content = fs.readFileSync(path.join(dir, entry.name), 'utf8');
        pages.push({ path: slug, filePath: path.join(dir, entry.name), content });
      }
    }
  }

  scan(pagesDir);
  return pages;
}

function countInternalLinks(content, targetPath) {
  const regex = new RegExp(`href=["']${targetPath}["']`, 'gi');
  return (content.match(regex) || []).length;
}

export async function run() {
  log.info('Internal Linker starting...');

  ensureRepoCheckout();

  const pages = getPages();
  const blogContent = path.join(WORK_DIR, 'src', 'data', 'blogContent.ts');
  const blogContentText = fs.existsSync(blogContent) ? fs.readFileSync(blogContent, 'utf8') : '';

  const allContent = pages.map(p => p.content).join('\n') + '\n' + blogContentText;

  const underlinked = pages.filter(p => {
    if (p.path === '/') return false;
    const linkCount = countInternalLinks(allContent, p.path);
    return linkCount < 2;
  });

  if (underlinked.length === 0) {
    log.info('All pages have sufficient internal links');
    await sendSlack([slackSection(':white_check_mark: Internal Linker: all pages well-linked.')], 'Internal Linker');
    return { suggestions: 0 };
  }

  const anthropic = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY });

  const pageList = underlinked.map(p => `- ${p.path}`).join('\n');
  const allPagesList = pages.map(p => `- ${p.path}`).join('\n');

  const response = await anthropic.messages.create({
    model: 'claude-sonnet-4-20250514',
    max_tokens: 2000,
    messages: [{
      role: 'user',
      content: `You're an internal linking specialist for a digital marketing agency website (spiresdigital.com).

These pages have fewer than 2 internal links pointing to them:
${pageList}

All available pages on the site:
${allPagesList}

For each under-linked page, suggest 2-3 specific places on other pages where a natural internal link could be added. Format as:

PAGE: /path
- Link from /other-page: "suggested anchor text" (add in the section about X)

Be specific and natural — links should fit contextually.`,
    }],
  });

  const suggestions = response.content[0].text;

  const blocks = [
    slackHeader(`Internal Linker — ${underlinked.length} Under-Linked Pages`),
    slackDivider(),
    slackSection(suggestions.slice(0, 2900)),
  ];

  await sendSlack(blocks, `Internal Linker: ${underlinked.length} pages need links`);
  log.info(`Found ${underlinked.length} under-linked pages`);

  return { suggestions: underlinked.length };
}
