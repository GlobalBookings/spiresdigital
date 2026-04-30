import 'dotenv/config';
import { schedule, listJobs } from './core/scheduler.js';
import { createLogger } from './core/logger.js';
import { sendSlack, slackHeader, slackSection } from './core/slack.js';
import { startApprovalServer } from './core/approval.js';
import { run as runGA4 } from './agents/ga4-briefing.js';
import { run as runContent } from './agents/content-publisher.js';
import { run as runRankTracker } from './agents/rank-tracker.js';
import { run as runInternalLinker } from './agents/internal-linker.js';
import { run as runContentRefresher } from './agents/content-refresher.js';
import { run as runBloggerOutreach } from './agents/blogger-outreach.js';
import { run as runDirectories } from './agents/directory-tracker.js';
import { run as runLeadTracker } from './agents/lead-tracker.js';

const log = createLogger('main');

log.info('Spires Digital Agent System starting...');

const { registerTrigger } = startApprovalServer();

registerTrigger('ga4-briefing', runGA4);
registerTrigger('content-publisher', runContent);
registerTrigger('rank-tracker', runRankTracker);
registerTrigger('internal-linker', runInternalLinker);
registerTrigger('content-refresher', runContentRefresher);
registerTrigger('blogger-outreach', runBloggerOutreach);
registerTrigger('directory-tracker', runDirectories);
registerTrigger('lead-tracker', runLeadTracker);

schedule('GA4 Briefing',       '0 9 * * *',   runGA4);            // 9 AM GMT daily
schedule('Lead Tracker',       '0 9 * * 1',   runLeadTracker);    // Monday 9 AM
schedule('Rank Tracker',       '30 9 * * 1',  runRankTracker);    // Monday 9:30 AM
schedule('Content Publisher',  '0 12 * * *',  runContent);         // 12 PM GMT daily
schedule('Content Refresher',  '0 11 * * 2',  runContentRefresher);// Tuesday 11 AM
schedule('Internal Linker',    '0 13 * * 4',  runInternalLinker);  // Thursday 1 PM
schedule('Blogger Outreach',   '0 10 * * 3',  runBloggerOutreach); // Wednesday 10 AM
schedule('Directory Tracker',  '0 10 1 * *',  runDirectories);     // 1st of month 10 AM

const jobs = listJobs();
log.info(`${jobs.length} agents scheduled:`);
jobs.forEach(j => log.info(`  ${j.name} -> ${j.schedule}`));

await sendSlack([
  slackHeader('Spires Digital Agents Online'),
  slackSection(
    jobs.map(j => `\u2022 *${j.name}* -> \`${j.schedule}\``).join('\n') +
    '\n\n_Server running on port 3100. Manual triggers available._'
  ),
], 'Agent system started');

log.info('Agent system running. Press Ctrl+C to stop.');
