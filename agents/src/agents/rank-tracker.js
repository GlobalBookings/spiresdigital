import { google } from 'googleapis';
import { getOAuth2Client } from '../core/google-auth.js';
import { createLogger } from '../core/logger.js';
import { sendSlack, slackHeader, slackSection, slackDivider } from '../core/slack.js';

const log = createLogger('rank-tracker');
const SITE_URL = process.env.SEARCH_CONSOLE_SITE_URL || process.env.SITE_URL;

export async function run() {
  log.info('Rank Tracker starting...');

  const auth = getOAuth2Client();
  const searchconsole = google.searchconsole({ version: 'v1', auth });

  const endDate = new Date().toISOString().split('T')[0];
  const thisWeekStart = new Date(Date.now() - 7 * 86400000).toISOString().split('T')[0];
  const prevWeekStart = new Date(Date.now() - 14 * 86400000).toISOString().split('T')[0];
  const prevWeekEnd = new Date(Date.now() - 7 * 86400000).toISOString().split('T')[0];

  const [thisWeek, prevWeek] = await Promise.all([
    searchconsole.searchanalytics.query({
      siteUrl: SITE_URL,
      requestBody: {
        startDate: thisWeekStart, endDate,
        dimensions: ['query'],
        rowLimit: 500,
        type: 'web',
      },
    }),
    searchconsole.searchanalytics.query({
      siteUrl: SITE_URL,
      requestBody: {
        startDate: prevWeekStart, endDate: prevWeekEnd,
        dimensions: ['query'],
        rowLimit: 500,
        type: 'web',
      },
    }),
  ]);

  const prevMap = new Map();
  for (const row of (prevWeek.data.rows || [])) {
    prevMap.set(row.keys[0], { position: row.position, clicks: row.clicks, impressions: row.impressions });
  }

  const movers = [];
  const drops = [];
  const opportunities = [];

  for (const row of (thisWeek.data.rows || [])) {
    const query = row.keys[0];
    const prev = prevMap.get(query);

    if (prev) {
      const posChange = prev.position - row.position;
      if (posChange >= 3) {
        movers.push({ query, position: row.position, change: posChange, clicks: row.clicks, impressions: row.impressions });
      } else if (posChange <= -3) {
        drops.push({ query, position: row.position, change: posChange, clicks: row.clicks, impressions: row.impressions });
      }
    }

    if (row.position > 5 && row.position <= 20 && row.impressions >= 10) {
      opportunities.push({ query, position: row.position, impressions: row.impressions, clicks: row.clicks });
    }
  }

  movers.sort((a, b) => b.change - a.change);
  drops.sort((a, b) => a.change - b.change);
  opportunities.sort((a, b) => b.impressions - a.impressions);

  const blocks = [slackHeader('Weekly Rank Tracker Report')];

  if (movers.length > 0) {
    const moverLines = movers.slice(0, 8).map(m =>
      `• *"${m.query}"* — pos ${m.position.toFixed(0)} (\u2191${m.change.toFixed(0)}) | ${m.clicks} clicks`
    ).join('\n');
    blocks.push(slackSection(`:chart_with_upwards_trend: *Biggest Movers (${movers.length} total)*\n${moverLines}`));
  }

  blocks.push(slackDivider());

  if (drops.length > 0) {
    const dropLines = drops.slice(0, 8).map(d =>
      `• *"${d.query}"* — pos ${d.position.toFixed(0)} (\u2193${Math.abs(d.change).toFixed(0)}) | ${d.clicks} clicks`
    ).join('\n');
    blocks.push(slackSection(`:chart_with_downwards_trend: *Drops (${drops.length} total)*\n${dropLines}`));
  }

  blocks.push(slackDivider());

  if (opportunities.length > 0) {
    const oppLines = opportunities.slice(0, 8).map(o =>
      `• *"${o.query}"* — pos ${o.position.toFixed(0)} | ${o.impressions} impr, ${o.clicks} clicks`
    ).join('\n');
    blocks.push(slackSection(`:dart: *Opportunities (position 5-20, high impressions)*\n${oppLines}`));
  }

  await sendSlack(blocks, 'Weekly Rank Tracker');
  log.info(`Report sent: ${movers.length} movers, ${drops.length} drops, ${opportunities.length} opportunities`);

  return { movers: movers.length, drops: drops.length, opportunities: opportunities.length };
}
