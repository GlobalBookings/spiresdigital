import { createLogger } from '../core/logger.js';
import { sendSlack, slackHeader, slackSection, slackDivider } from '../core/slack.js';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const log = createLogger('directory-tracker');
const __dirname = path.dirname(fileURLToPath(import.meta.url));
const STATUS_FILE = path.join(__dirname, '..', '..', 'data', 'directory-status.json');

const DIRECTORIES = [
  { name: 'Google Business Profile', url: 'https://business.google.com', category: 'Essential', status: 'pending' },
  { name: 'Bing Places', url: 'https://www.bingplaces.com', category: 'Essential', status: 'pending' },
  { name: 'Yell.com', url: 'https://www.yell.com', category: 'UK Directory', status: 'pending' },
  { name: 'FreeIndex', url: 'https://www.freeindex.co.uk', category: 'UK Directory', status: 'pending' },
  { name: 'Thomson Local', url: 'https://www.thomsonlocal.com', category: 'UK Directory', status: 'pending' },
  { name: 'Scoot', url: 'https://www.scoot.co.uk', category: 'UK Directory', status: 'pending' },
  { name: 'Clutch', url: 'https://clutch.co', category: 'Agency Directory', status: 'pending' },
  { name: 'The Manifest', url: 'https://themanifest.com', category: 'Agency Directory', status: 'pending' },
  { name: 'DesignRush', url: 'https://www.designrush.com', category: 'Agency Directory', status: 'pending' },
  { name: 'GoodFirms', url: 'https://www.goodfirms.co', category: 'Agency Directory', status: 'pending' },
  { name: 'Agency Spotter', url: 'https://www.agencyspotter.com', category: 'Agency Directory', status: 'pending' },
  { name: 'Sortlist', url: 'https://www.sortlist.co.uk', category: 'Agency Directory', status: 'pending' },
  { name: 'Bark', url: 'https://www.bark.com', category: 'Lead Gen', status: 'pending' },
  { name: 'Approved Index', url: 'https://www.approvedindex.co.uk', category: 'UK Directory', status: 'pending' },
  { name: 'Hotfrog', url: 'https://www.hotfrog.co.uk', category: 'UK Directory', status: 'pending' },
  { name: 'Cylex', url: 'https://www.cylex-uk.co.uk', category: 'UK Directory', status: 'pending' },
  { name: 'Yelp', url: 'https://www.yelp.co.uk', category: 'Reviews', status: 'pending' },
  { name: 'Trustpilot', url: 'https://www.trustpilot.com', category: 'Reviews', status: 'pending' },
];

function loadStatus() {
  if (fs.existsSync(STATUS_FILE)) {
    return JSON.parse(fs.readFileSync(STATUS_FILE, 'utf8'));
  }
  return {};
}

function saveStatus(status) {
  fs.mkdirSync(path.dirname(STATUS_FILE), { recursive: true });
  fs.writeFileSync(STATUS_FILE, JSON.stringify(status, null, 2));
}

export async function run() {
  log.info('Directory Tracker starting...');

  const status = loadStatus();
  const pending = [];
  const submitted = [];
  const live = [];

  for (const dir of DIRECTORIES) {
    const s = status[dir.name] || { status: 'pending' };
    if (s.status === 'live') live.push({ ...dir, ...s });
    else if (s.status === 'submitted') submitted.push({ ...dir, ...s });
    else pending.push(dir);
  }

  const blocks = [
    slackHeader('Monthly Directory Status'),
    slackDivider(),
  ];

  if (live.length > 0) {
    blocks.push(slackSection(
      `:white_check_mark: *Live (${live.length})*\n` +
      live.map(d => `• ${d.name} (${d.category})`).join('\n')
    ));
    blocks.push(slackDivider());
  }

  if (submitted.length > 0) {
    blocks.push(slackSection(
      `:hourglass: *Submitted / Pending Review (${submitted.length})*\n` +
      submitted.map(d => `• ${d.name} — submitted ${d.submittedDate || 'unknown'}`).join('\n')
    ));
    blocks.push(slackDivider());
  }

  if (pending.length > 0) {
    blocks.push(slackSection(
      `:memo: *Not Yet Submitted (${pending.length})*\n` +
      pending.map(d => `• <${d.url}|${d.name}> (${d.category})`).join('\n')
    ));
  }

  blocks.push(slackDivider());
  blocks.push(slackSection(
    `*Summary:* ${live.length} live, ${submitted.length} pending, ${pending.length} not started\n` +
    `_To update: POST /trigger/directory-tracker with body {"name":"Dir Name","status":"submitted|live"}_`
  ));

  await sendSlack(blocks, 'Monthly Directory Report');
  log.info(`Directory report: ${live.length} live, ${submitted.length} pending, ${pending.length} todo`);

  return { live: live.length, submitted: submitted.length, pending: pending.length };
}
