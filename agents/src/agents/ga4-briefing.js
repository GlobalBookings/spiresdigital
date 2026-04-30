import { google } from 'googleapis';
import { getOAuth2Client } from '../core/google-auth.js';
import { createLogger } from '../core/logger.js';
import { sendSlack, slackHeader, slackSection, slackDivider, slackFields } from '../core/slack.js';

const log = createLogger('ga4-briefing');
const PROPERTY_ID = process.env.GA4_PROPERTY_ID;

function fmtNum(n) { return Number(n || 0).toLocaleString('en-GB'); }
function fmtPct(n) { return (Number(n || 0) * 100).toFixed(1) + '%'; }

function delta(current, previous) {
  if (!previous || previous === 0) return '';
  const change = ((current - previous) / previous) * 100;
  const arrow = change > 0 ? '\u2191' : change < 0 ? '\u2193' : '\u2192';
  return ` ${arrow}${Math.abs(change).toFixed(0)}%`;
}

async function runReport(analytics, config) {
  const res = await analytics.properties.runReport({
    property: `properties/${PROPERTY_ID}`,
    requestBody: config,
  });
  return res.data;
}

async function getOverview(analytics) {
  const today = await runReport(analytics, {
    dateRanges: [{ startDate: '1daysAgo', endDate: '1daysAgo' }],
    metrics: [
      { name: 'sessions' }, { name: 'totalUsers' }, { name: 'screenPageViews' },
      { name: 'bounceRate' }, { name: 'averageSessionDuration' }, { name: 'newUsers' },
    ],
  });

  const prev = await runReport(analytics, {
    dateRanges: [{ startDate: '2daysAgo', endDate: '2daysAgo' }],
    metrics: [
      { name: 'sessions' }, { name: 'totalUsers' }, { name: 'screenPageViews' },
      { name: 'bounceRate' }, { name: 'averageSessionDuration' }, { name: 'newUsers' },
    ],
  });

  const t = today.rows?.[0]?.metricValues || [];
  const p = prev.rows?.[0]?.metricValues || [];

  return {
    sessions: { val: Number(t[0]?.value || 0), prev: Number(p[0]?.value || 0) },
    users: { val: Number(t[1]?.value || 0), prev: Number(p[1]?.value || 0) },
    pageviews: { val: Number(t[2]?.value || 0), prev: Number(p[2]?.value || 0) },
    bounceRate: { val: Number(t[3]?.value || 0), prev: Number(p[3]?.value || 0) },
    avgDuration: { val: Number(t[4]?.value || 0), prev: Number(p[4]?.value || 0) },
    newUsers: { val: Number(t[5]?.value || 0), prev: Number(p[5]?.value || 0) },
  };
}

async function getSources(analytics) {
  const data = await runReport(analytics, {
    dateRanges: [{ startDate: '1daysAgo', endDate: '1daysAgo' }],
    dimensions: [{ name: 'sessionDefaultChannelGroup' }],
    metrics: [{ name: 'sessions' }, { name: 'totalUsers' }],
    orderBys: [{ metric: { metricName: 'sessions' }, desc: true }],
    limit: 10,
  });

  return (data.rows || []).map(r => ({
    channel: r.dimensionValues[0].value,
    sessions: Number(r.metricValues[0].value),
    users: Number(r.metricValues[1].value),
  }));
}

async function getTopPages(analytics) {
  const data = await runReport(analytics, {
    dateRanges: [{ startDate: '1daysAgo', endDate: '1daysAgo' }],
    dimensions: [{ name: 'pagePath' }],
    metrics: [{ name: 'screenPageViews' }, { name: 'sessions' }],
    orderBys: [{ metric: { metricName: 'screenPageViews' }, desc: true }],
    limit: 10,
  });

  return (data.rows || []).map(r => ({
    path: r.dimensionValues[0].value,
    pageviews: Number(r.metricValues[0].value),
    sessions: Number(r.metricValues[1].value),
  }));
}

async function getLeadEvents(analytics) {
  const data = await runReport(analytics, {
    dateRanges: [{ startDate: '1daysAgo', endDate: '1daysAgo' }],
    dimensions: [{ name: 'eventName' }],
    metrics: [{ name: 'eventCount' }],
    dimensionFilter: {
      filter: {
        fieldName: 'eventName',
        inListFilter: {
          values: ['generate_lead', 'form_submit', 'contact_form', 'phone_click', 'email_click'],
        },
      },
    },
    orderBys: [{ metric: { metricName: 'eventCount' }, desc: true }],
  });

  return (data.rows || []).map(r => ({
    event: r.dimensionValues[0].value,
    count: Number(r.metricValues[0].value),
  }));
}

async function getGeo(analytics) {
  const data = await runReport(analytics, {
    dateRanges: [{ startDate: '1daysAgo', endDate: '1daysAgo' }],
    dimensions: [{ name: 'country' }],
    metrics: [{ name: 'sessions' }],
    orderBys: [{ metric: { metricName: 'sessions' }, desc: true }],
    limit: 5,
  });

  return (data.rows || []).map(r => ({
    country: r.dimensionValues[0].value,
    sessions: Number(r.metricValues[0].value),
  }));
}

export async function run() {
  log.info('GA4 Daily Briefing starting...');

  if (!PROPERTY_ID) {
    log.warn('GA4_PROPERTY_ID not set, skipping briefing');
    return;
  }

  const auth = getOAuth2Client();
  const analytics = google.analyticsdata({ version: 'v1beta', auth });

  const [overview, sources, topPages, leadEvents, geo] = await Promise.all([
    getOverview(analytics),
    getSources(analytics),
    getTopPages(analytics),
    getLeadEvents(analytics).catch(() => []),
    getGeo(analytics),
  ]);

  const blocks = [];
  const yesterday = new Date(Date.now() - 86400000).toLocaleDateString('en-GB', {
    timeZone: 'Europe/London', weekday: 'long', day: 'numeric', month: 'long',
  });

  blocks.push(slackHeader(`Spires Digital Briefing — ${yesterday}`));

  const o = overview;
  blocks.push(slackFields([
    ['Sessions', `${fmtNum(o.sessions.val)}${delta(o.sessions.val, o.sessions.prev)}`],
    ['Users', `${fmtNum(o.users.val)}${delta(o.users.val, o.users.prev)}`],
    ['Pageviews', `${fmtNum(o.pageviews.val)}${delta(o.pageviews.val, o.pageviews.prev)}`],
    ['Bounce Rate', `${fmtPct(o.bounceRate.val)}`],
  ]));

  blocks.push(slackDivider());

  if (sources.length > 0) {
    const totalSessions = sources.reduce((s, r) => s + r.sessions, 0);
    const sourceLines = sources.map(s => {
      const pct = totalSessions > 0 ? ((s.sessions / totalSessions) * 100).toFixed(0) : 0;
      return `• *${s.channel}*: ${fmtNum(s.sessions)} (${pct}%)`;
    }).join('\n');
    blocks.push(slackSection(`:signal_strength: *Traffic Sources*\n${sourceLines}`));
    blocks.push(slackDivider());
  }

  if (topPages.length > 0) {
    const pageLines = topPages.slice(0, 8).map((p, i) =>
      `${i + 1}. \`${p.path}\` — ${fmtNum(p.pageviews)} views`
    ).join('\n');
    blocks.push(slackSection(`:bar_chart: *Top Pages*\n${pageLines}`));
    blocks.push(slackDivider());
  }

  if (leadEvents.length > 0) {
    const totalLeads = leadEvents.reduce((s, r) => s + r.count, 0);
    const leadLines = leadEvents.map(e => `• ${e.event}: ${e.count}`).join('\n');
    blocks.push(slackSection(`:incoming_envelope: *Lead Events* (${totalLeads} total)\n${leadLines}`));
    blocks.push(slackDivider());
  }

  if (geo.length > 0) {
    const geoLine = geo.map(g => `${g.country}: ${fmtNum(g.sessions)}`).join('  •  ');
    blocks.push(slackSection(`:earth_americas: *Top Countries:* ${geoLine}`));
  }

  await sendSlack(blocks, 'Spires Digital Daily Briefing');
  log.info(`Briefing sent: ${overview.sessions.val} sessions`);

  return { sessions: overview.sessions.val };
}
