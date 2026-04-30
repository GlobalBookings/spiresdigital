import { google } from 'googleapis';
import Anthropic from '@anthropic-ai/sdk';
import { getOAuth2Client } from '../core/google-auth.js';
import { createLogger } from '../core/logger.js';
import { sendSlack, slackHeader, slackSection, slackDivider } from '../core/slack.js';
import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';
import { fileURLToPath } from 'url';

const log = createLogger('content-publisher');
const __dirname = path.dirname(fileURLToPath(import.meta.url));
const WORK_DIR = path.join(__dirname, '..', '..', 'data', 'repo-checkout');
const SITE_URL = process.env.SEARCH_CONSOLE_SITE_URL || process.env.SITE_URL;
const POSTS_PER_RUN = 2;
const GH_TOKEN = process.env.GITHUB_TOKEN;
const GH_REPO = process.env.GITHUB_REPO || 'GlobalBookings/spiresdigital';

function getRepoPaths() {
  return {
    root: WORK_DIR,
    blogData: path.join(WORK_DIR, 'src', 'data', 'blogPosts.ts'),
    blogContent: path.join(WORK_DIR, 'src', 'data', 'blogContent.ts'),
    blogPage: path.join(WORK_DIR, 'src', 'pages', 'blog', '[slug].astro'),
  };
}

const CATEGORIES = ['PPC', 'SEO', 'Meta Ads', 'Analytics', 'E-Commerce', 'Affiliate Marketing', 'Strategy', 'Conversion Optimisation'];

function ensureRepoCheckout() {
  if (!GH_TOKEN) throw new Error('GITHUB_TOKEN not set');

  const repoUrl = `https://x-access-token:${GH_TOKEN}@github.com/${GH_REPO}.git`;

  if (fs.existsSync(path.join(WORK_DIR, '.git'))) {
    log.info('Pulling latest from main...');
    execSync('git fetch origin main && git reset --hard origin/main', { cwd: WORK_DIR, stdio: 'pipe' });
  } else {
    log.info('Cloning repo...');
    fs.mkdirSync(WORK_DIR, { recursive: true });
    execSync(`git clone --depth 1 ${repoUrl} "${WORK_DIR}"`, { stdio: 'pipe' });
  }

  execSync('git config user.email "agent@spiresdigital.com"', { cwd: WORK_DIR, stdio: 'pipe' });
  execSync('git config user.name "Spires Agent"', { cwd: WORK_DIR, stdio: 'pipe' });
}

function getExistingSlugs() {
  const { blogData } = getRepoPaths();
  const content = fs.readFileSync(blogData, 'utf8');
  const slugs = [...content.matchAll(/slug:\s*'([^']+)'/g)].map(m => m[1]);
  return new Set(slugs);
}

async function findContentGaps() {
  const auth = getOAuth2Client();
  const searchconsole = google.searchconsole({ version: 'v1', auth });

  const endDate = new Date().toISOString().split('T')[0];
  const startDate = new Date(Date.now() - 28 * 86400000).toISOString().split('T')[0];

  const res = await searchconsole.searchanalytics.query({
    siteUrl: SITE_URL,
    requestBody: {
      startDate,
      endDate,
      dimensions: ['query'],
      rowLimit: 500,
      type: 'web',
    },
  });

  const rows = res.data.rows || [];
  const existingSlugs = getExistingSlugs();
  const gaps = [];

  for (const row of rows) {
    const query = row.keys[0].toLowerCase();
    if (query.length < 8) continue;
    if (query.includes('spiresdigital') || query.includes('spires digital')) continue;

    const querySlug = query.replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
    const alreadyCovered = [...existingSlugs].some(slug => {
      const slugWords = slug.split('-');
      const queryWords = querySlug.split('-');
      const overlap = queryWords.filter(w => slugWords.includes(w) && w.length > 3);
      return overlap.length >= 2;
    });

    if (!alreadyCovered && row.impressions >= 2) {
      gaps.push({ query, impressions: row.impressions, clicks: row.clicks, position: row.position });
    }
  }

  const BOOKING_SIGNALS = ['agency', 'service', 'hire', 'cost', 'pricing', 'management',
    'consultant', 'freelancer', 'help', 'improve', 'increase', 'boost', 'strategy',
    'audit', 'review', 'setup', 'how to'];
  const DEPRIORITIZE = ['meaning', 'wiki', 'definition', 'what is', 'salary', 'job', 'career'];

  for (const gap of gaps) {
    const words = gap.query.toLowerCase();
    let score = gap.impressions;
    if (BOOKING_SIGNALS.some(s => words.includes(s))) score *= 3;
    if (DEPRIORITIZE.some(s => words.includes(s))) score *= 0.3;
    gap._score = score;
  }

  gaps.sort((a, b) => b._score - a._score);

  const deduped = [];
  for (const gap of gaps) {
    const words = gap.query.split(/\s+/).filter(w => w.length > 3);
    const isDuplicate = deduped.some(existing => {
      const existingWords = existing.query.split(/\s+/).filter(w => w.length > 3);
      const overlap = words.filter(w => existingWords.includes(w));
      return overlap.length >= 2;
    });
    if (!isDuplicate) deduped.push(gap);
  }

  log.info(`Found ${gaps.length} raw gaps, ${deduped.length} unique topics`);
  return deduped;
}

async function generatePost(topic, relatedQueries) {
  const anthropic = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY });

  const slug = topic.query
    .replace(/[^a-z0-9\s]/g, '')
    .trim()
    .replace(/\s+/g, '-')
    .slice(0, 60);

  const queryContext = relatedQueries
    .map(q => `"${q.query}" (${q.impressions} impressions, position ${q.position.toFixed(0)})`)
    .join('\n');

  const currentYear = new Date().getFullYear();
  const currentDate = new Date().toISOString().split('T')[0];

  const prompt = `Write a comprehensive, SEO-optimized blog post for SpiresDigital.com — a data-driven digital marketing agency based in Lichfield, UK, specialising in PPC, SEO, Meta Ads, affiliate management, and Shopify builds.

TODAY'S DATE: ${currentDate}
CURRENT YEAR: ${currentYear}

TARGET KEYWORD: "${topic.query}"

RELATED SEARCHES TO NATURALLY INCORPORATE:
${queryContext}

REQUIREMENTS:
1. Write 1200-1800 words of genuinely helpful, expert-level digital marketing content
2. Use HTML formatting: <h2>, <h3>, <p>, <ul>/<li>, <strong>, <em>
3. Start with an engaging intro paragraph (no <h1>, the page template adds it)
4. Include 4-6 <h2> sections with practical, actionable information
5. Include a <div class="tip-box"><strong>Pro Tip:</strong> ...</div> somewhere
6. INTERNAL LINKS — Include 2-4 links to other Spires Digital pages:
   - Service pages: <a href="/services/ppc-management">PPC management</a>, <a href="/services/seo">SEO services</a>, <a href="/services/meta-ads">Meta Ads</a>, <a href="/services/affiliate-management">affiliate management</a>, <a href="/services/shopify-builds">Shopify builds</a>
   - Contact: <a href="/contact">get in touch</a> or <a href="/contact">free audit</a>
   - Case studies: <a href="/case-studies">case studies</a>
   - Blog posts: link to any relevant existing blog post slugs
7. All information must be accurate and reflect current best practices
8. Write in a knowledgeable, approachable tone — like a trusted marketing consultant sharing expertise
9. CRITICAL: This is ${currentYear}. Reference current platform features and best practices.
10. End with a natural CTA encouraging readers to contact Spires Digital

CRITICAL: Return ONLY the HTML content, no markdown, no code fences. Start with <p> and end with </p>.`;

  const response = await anthropic.messages.create({
    model: 'claude-sonnet-4-20250514',
    max_tokens: 4000,
    messages: [{ role: 'user', content: prompt }],
  });

  let html = response.content[0].text.trim();
  html = html.replace(/^```html?\n?/i, '').replace(/\n?```$/i, '').trim();

  let category = 'Strategy';
  const q = topic.query.toLowerCase();
  if (q.includes('ppc') || q.includes('google ads') || q.includes('bing ads') || q.includes('adwords')) category = 'PPC';
  else if (q.includes('seo') || q.includes('search engine') || q.includes('organic') || q.includes('ranking')) category = 'SEO';
  else if (q.includes('facebook') || q.includes('instagram') || q.includes('meta') || q.includes('social')) category = 'Meta Ads';
  else if (q.includes('analytics') || q.includes('ga4') || q.includes('tracking') || q.includes('conversion')) category = 'Analytics';
  else if (q.includes('shopify') || q.includes('ecommerce') || q.includes('e-commerce') || q.includes('store')) category = 'E-Commerce';
  else if (q.includes('affiliate') || q.includes('partner') || q.includes('commission')) category = 'Affiliate Marketing';
  else if (q.includes('cro') || q.includes('conversion rate') || q.includes('landing page') || q.includes('a/b test')) category = 'Conversion Optimisation';

  const titlePrompt = `Generate a click-worthy blog title for a digital marketing article about "${topic.query}".
Current year: ${currentYear}. Include the year if it benefits SEO.
Return ONLY the title text, 50-65 characters.`;

  const titleResponse = await anthropic.messages.create({
    model: 'claude-sonnet-4-20250514',
    max_tokens: 100,
    messages: [{ role: 'user', content: titlePrompt }],
  });

  const title = titleResponse.content[0].text.trim().replace(/^["']|["']$/g, '');

  const descPrompt = `Write a 150-160 character meta description for a digital marketing article titled "${title}".
Return ONLY the description text.`;

  const descResponse = await anthropic.messages.create({
    model: 'claude-sonnet-4-20250514',
    max_tokens: 100,
    messages: [{ role: 'user', content: descPrompt }],
  });

  const description = descResponse.content[0].text.trim().replace(/^["']|["']$/g, '');

  const wordCount = html.replace(/<[^>]*>/g, '').split(/\s+/).length;
  const readTime = `${Math.max(5, Math.ceil(wordCount / 200))} min read`;

  return { slug, title, description, date: new Date().toISOString().split('T')[0], category, image: '', readTime, html };
}

function writePostsToCodebase(posts) {
  const { blogData, blogContent } = getRepoPaths();

  let blogDataContent = fs.readFileSync(blogData, 'utf8');
  let blogContentData = fs.readFileSync(blogContent, 'utf8');

  for (const post of posts) {
    const entry = `  {
    slug: '${post.slug}',
    title: '${post.title.replace(/'/g, "\\'")}',
    description: '${post.description.replace(/'/g, "\\'")}',
    date: '${post.date}',
    category: '${post.category}',
    image: '${post.image}',
    readTime: '${post.readTime}',
  },`;

    blogDataContent = blogDataContent.replace(
      'export const blogPosts: BlogPost[] = [',
      `export const blogPosts: BlogPost[] = [\n${entry}`
    );

    const sanitizedHtml = post.html
      .replace(/`/g, '\\`')
      .replace(/\$\{/g, '\\${');

    blogContentData = blogContentData.replace(
      'export const blogContent: Record<string, string> = {',
      `export const blogContent: Record<string, string> = {\n  '${post.slug}': \`\n${sanitizedHtml}\n\`,`
    );
  }

  fs.writeFileSync(blogData, blogDataContent);
  fs.writeFileSync(blogContent, blogContentData);
  log.info(`Added ${posts.length} posts to data files`);
}

function gitCommitAndPush(posts) {
  const { root } = getRepoPaths();
  const titles = posts.map(p => p.title).join(', ');
  const message = `Auto-publish ${posts.length} blog posts: ${titles.slice(0, 200)}`;

  try {
    execSync('git add src/data/blogPosts.ts src/data/blogContent.ts', { cwd: root, stdio: 'pipe' });
    execSync(`git commit -m "${message.replace(/"/g, '\\"')}"`, { cwd: root, stdio: 'pipe' });
    execSync('git push origin main', { cwd: root, stdio: 'pipe' });
    log.info('Pushed to GitHub — site rebuild triggered');
    return true;
  } catch (err) {
    log.error(`Git push failed: ${err.message}`);
    return false;
  }
}

export async function run() {
  log.info('Content Auto-Publisher starting...');

  ensureRepoCheckout();
  const gaps = await findContentGaps();

  if (gaps.length === 0) {
    log.info('No content gaps found');
    await sendSlack(
      [slackSection(':white_check_mark: Content Publisher: no gaps found today. All queries covered.')],
      'Content Publisher'
    );
    return { published: 0 };
  }

  log.info(`Top gaps: ${gaps.slice(0, 10).map(g => `"${g.query}" (${g.impressions} impr)`).join(', ')}`);

  const postsToWrite = [];
  const existingSlugs = getExistingSlugs();

  for (const gap of gaps.slice(0, POSTS_PER_RUN * 2)) {
    if (postsToWrite.length >= POSTS_PER_RUN) break;

    const related = gaps.filter(g =>
      g !== gap && g.query.split(' ').some(w => gap.query.includes(w) && w.length > 3)
    ).slice(0, 3);

    try {
      const post = await generatePost(gap, [gap, ...related]);
      if (existingSlugs.has(post.slug)) {
        log.warn(`Slug "${post.slug}" already exists, skipping`);
        continue;
      }
      postsToWrite.push(post);
      existingSlugs.add(post.slug);
      log.info(`Generated: "${post.title}" (${post.readTime})`);
    } catch (err) {
      log.error(`Failed to generate post for "${gap.query}": ${err.message}`);
    }
  }

  if (postsToWrite.length === 0) return { published: 0 };

  writePostsToCodebase(postsToWrite);
  const pushed = gitCommitAndPush(postsToWrite);

  const blocks = [
    slackHeader(`Content Publisher — ${postsToWrite.length} Posts Published`),
    slackDivider(),
  ];

  for (const post of postsToWrite) {
    blocks.push(slackSection(
      `*${post.title}*\n` +
      `/blog/${post.slug} | ${post.category} | ${post.readTime}\n` +
      `_"${post.description.slice(0, 80)}..."_`
    ));
  }

  blocks.push(slackDivider());
  blocks.push(slackSection(
    pushed
      ? ':rocket: Pushed to GitHub — site rebuild triggered automatically.'
      : ':warning: Posts written locally but git push failed.'
  ));

  await sendSlack(blocks, `Published ${postsToWrite.length} blog posts`);
  return { published: postsToWrite.length };
}
