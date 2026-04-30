import { google } from 'googleapis';
import Anthropic from '@anthropic-ai/sdk';
import { getOAuth2Client } from '../core/google-auth.js';
import { createLogger } from '../core/logger.js';
import { sendSlack, slackHeader, slackSection, slackDivider } from '../core/slack.js';
import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';
import { fileURLToPath } from 'url';

const log = createLogger('content-refresher');
const __dirname = path.dirname(fileURLToPath(import.meta.url));
const WORK_DIR = path.join(__dirname, '..', '..', 'data', 'repo-checkout');
const SITE_URL = process.env.SEARCH_CONSOLE_SITE_URL || process.env.SITE_URL;
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

async function findDecliningPages() {
  const auth = getOAuth2Client();
  const searchconsole = google.searchconsole({ version: 'v1', auth });

  const endDate = new Date().toISOString().split('T')[0];
  const recentStart = new Date(Date.now() - 14 * 86400000).toISOString().split('T')[0];
  const prevStart = new Date(Date.now() - 42 * 86400000).toISOString().split('T')[0];
  const prevEnd = new Date(Date.now() - 14 * 86400000).toISOString().split('T')[0];

  const [recent, previous] = await Promise.all([
    searchconsole.searchanalytics.query({
      siteUrl: SITE_URL,
      requestBody: { startDate: recentStart, endDate, dimensions: ['page'], rowLimit: 100, type: 'web' },
    }),
    searchconsole.searchanalytics.query({
      siteUrl: SITE_URL,
      requestBody: { startDate: prevStart, endDate: prevEnd, dimensions: ['page'], rowLimit: 100, type: 'web' },
    }),
  ]);

  const prevMap = new Map();
  for (const row of (previous.data.rows || [])) {
    prevMap.set(row.keys[0], { clicks: row.clicks, impressions: row.impressions, position: row.position });
  }

  const declining = [];
  for (const row of (recent.data.rows || [])) {
    const prev = prevMap.get(row.keys[0]);
    if (prev && prev.clicks > 0) {
      const clickDrop = ((row.clicks - prev.clicks) / prev.clicks) * 100;
      if (clickDrop <= -20) {
        declining.push({
          page: row.keys[0],
          currentClicks: row.clicks,
          previousClicks: prev.clicks,
          clickDrop,
          currentPosition: row.position,
          previousPosition: prev.position,
        });
      }
    }
  }

  declining.sort((a, b) => a.clickDrop - b.clickDrop);
  return declining;
}

export async function run() {
  log.info('Content Refresher starting...');

  ensureRepoCheckout();
  const declining = await findDecliningPages();

  if (declining.length === 0) {
    log.info('No declining pages found');
    await sendSlack([slackSection(':white_check_mark: Content Refresher: no declining pages.')], 'Content Refresher');
    return { refreshed: 0 };
  }

  const anthropic = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY });
  const blocks = [
    slackHeader(`Content Refresher — ${declining.length} Declining Pages`),
    slackDivider(),
  ];

  for (const page of declining.slice(0, 5)) {
    const posChange = page.currentPosition - page.previousPosition;
    const posDir = posChange > 0 ? '\u2193' : '\u2191';

    const response = await anthropic.messages.create({
      model: 'claude-sonnet-4-20250514',
      max_tokens: 500,
      messages: [{
        role: 'user',
        content: `A digital marketing agency page at "${page.page}" has dropped ${Math.abs(page.clickDrop).toFixed(0)}% in clicks (${page.previousClicks} -> ${page.currentClicks}). Position moved from ${page.previousPosition.toFixed(1)} to ${page.currentPosition.toFixed(1)}.

Suggest 3 specific improvements to refresh this content and recover rankings. Be concise and actionable.`,
      }],
    });

    blocks.push(slackSection(
      `*${page.page}*\n` +
      `Clicks: ${page.previousClicks} -> ${page.currentClicks} (${page.clickDrop.toFixed(0)}%)\n` +
      `Position: ${page.previousPosition.toFixed(1)} -> ${page.currentPosition.toFixed(1)} ${posDir}\n\n` +
      `_Suggestions:_\n${response.content[0].text.slice(0, 600)}`
    ));
    blocks.push(slackDivider());
  }

  await sendSlack(blocks, `Content Refresher: ${declining.length} pages declining`);
  log.info(`Found ${declining.length} declining pages`);

  return { refreshed: declining.length };
}
