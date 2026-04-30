import 'dotenv/config';
import { createLogger } from './core/logger.js';

const log = createLogger('runner');
const agent = process.argv[2];

if (!agent) {
  console.log('Usage: node src/run.js <agent-name>');
  console.log('  ga4-briefing       — Run GA4 Daily Briefing');
  console.log('  content-publisher  — Generate blog posts from content gaps');
  console.log('  rank-tracker       — Weekly GSC ranking report');
  console.log('  internal-linker    — Find under-linked pages');
  console.log('  content-refresher  — Refresh declining content');
  console.log('  blogger-outreach   — Draft outreach emails');
  console.log('  directory-tracker  — Monthly directory status');
  console.log('  lead-tracker       — Weekly lead report');
  console.log('  test               — Verify configuration');
  process.exit(1);
}

if (agent === 'test') {
  log.info('Testing agent configuration...');

  const checks = [
    ['GOOGLE_CLIENT_ID', process.env.GOOGLE_CLIENT_ID],
    ['GOOGLE_CLIENT_SECRET', process.env.GOOGLE_CLIENT_SECRET],
    ['GOOGLE_REFRESH_TOKEN', process.env.GOOGLE_REFRESH_TOKEN],
    ['GA4_PROPERTY_ID', process.env.GA4_PROPERTY_ID],
    ['SEARCH_CONSOLE_SITE_URL', process.env.SEARCH_CONSOLE_SITE_URL],
    ['SLACK_WEBHOOK_URL', process.env.SLACK_WEBHOOK_URL],
    ['ANTHROPIC_API_KEY', process.env.ANTHROPIC_API_KEY],
    ['GITHUB_TOKEN', process.env.GITHUB_TOKEN],
  ];

  let allGood = true;
  for (const [name, value] of checks) {
    const status = value ? 'OK' : 'MISSING';
    const icon = value ? '\u2713' : '\u2717';
    if (!value) allGood = false;
    console.log(`  ${icon} ${name}: ${status}`);
  }

  if (allGood) {
    log.info('All credentials configured. Testing Slack...');
    const { sendSlack, slackSection } = await import('./core/slack.js');
    await sendSlack([slackSection(':white_check_mark: Spires Digital Agent test — all systems go!')], 'Agent test');
    log.info('Slack test sent.');
  } else {
    log.warn('Some credentials are missing. See agents/.env.example for required values.');
  }

  process.exit(0);
}

const agents = {
  'ga4-briefing': () => import('./agents/ga4-briefing.js'),
  'content-publisher': () => import('./agents/content-publisher.js'),
  'rank-tracker': () => import('./agents/rank-tracker.js'),
  'internal-linker': () => import('./agents/internal-linker.js'),
  'content-refresher': () => import('./agents/content-refresher.js'),
  'blogger-outreach': () => import('./agents/blogger-outreach.js'),
  'directory-tracker': () => import('./agents/directory-tracker.js'),
  'lead-tracker': () => import('./agents/lead-tracker.js'),
};

const loader = agents[agent];
if (!loader) {
  log.error(`Unknown agent: ${agent}`);
  log.info(`Available: ${Object.keys(agents).join(', ')}`);
  process.exit(1);
}

try {
  log.info(`Running ${agent}...`);
  const start = Date.now();
  const mod = await loader();
  const result = await mod.run();
  const elapsed = ((Date.now() - start) / 1000).toFixed(1);
  log.info(`${agent} completed in ${elapsed}s`);
  if (result) log.info(`Result: ${JSON.stringify(result)}`);
} catch (err) {
  log.error(`${agent} failed: ${err.message}`);
  console.error(err.stack);
  process.exit(1);
}
