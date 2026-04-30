import { google } from 'googleapis';
import { getOAuth2Client } from '../core/google-auth.js';
import { createLogger } from '../core/logger.js';
import { sendSlack, slackHeader, slackSection, slackDivider, slackFields } from '../core/slack.js';

const log = createLogger('lead-tracker');
const PROPERTY_ID = process.env.GA4_PROPERTY_ID;

export async function run() {
  log.info('Lead Tracker starting...');

  if (!PROPERTY_ID) {
    log.warn('GA4_PROPERTY_ID not set');
    return;
  }

  const auth = getOAuth2Client();
  const analytics = google.analyticsdata({ version: 'v1beta', auth });

  const endDate = new Date().toISOString().split('T')[0];
  const startDate = new Date(Date.now() - 7 * 86400000).toISOString().split('T')[0];
  const prevStart = new Date(Date.now() - 14 * 86400000).toISOString().split('T')[0];
  const prevEnd = new Date(Date.now() - 7 * 86400000).toISOString().split('T')[0];

  const [thisWeek, prevWeek] = await Promise.all([
    analytics.properties.runReport({
      property: `properties/${PROPERTY_ID}`,
      requestBody: {
        dateRanges: [{ startDate, endDate }],
        dimensions: [{ name: 'eventName' }],
        metrics: [{ name: 'eventCount' }],
        dimensionFilter: {
          filter: {
            fieldName: 'eventName',
            inListFilter: {
              values: ['generate_lead', 'form_submit', 'contact_form', 'phone_click', 'email_click', 'schedule_consultation'],
            },
          },
        },
      },
    }),
    analytics.properties.runReport({
      property: `properties/${PROPERTY_ID}`,
      requestBody: {
        dateRanges: [{ startDate: prevStart, endDate: prevEnd }],
        dimensions: [{ name: 'eventName' }],
        metrics: [{ name: 'eventCount' }],
        dimensionFilter: {
          filter: {
            fieldName: 'eventName',
            inListFilter: {
              values: ['generate_lead', 'form_submit', 'contact_form', 'phone_click', 'email_click', 'schedule_consultation'],
            },
          },
        },
      },
    }),
  ]);

  const thisWeekTotal = (thisWeek.data.rows || []).reduce((s, r) => s + Number(r.metricValues[0].value), 0);
  const prevWeekTotal = (prevWeek.data.rows || []).reduce((s, r) => s + Number(r.metricValues[0].value), 0);
  const change = prevWeekTotal > 0 ? ((thisWeekTotal - prevWeekTotal) / prevWeekTotal * 100).toFixed(0) : 'N/A';

  const sourceReport = await analytics.properties.runReport({
    property: `properties/${PROPERTY_ID}`,
    requestBody: {
      dateRanges: [{ startDate, endDate }],
      dimensions: [{ name: 'sessionDefaultChannelGroup' }],
      metrics: [{ name: 'eventCount' }],
      dimensionFilter: {
        filter: {
          fieldName: 'eventName',
          inListFilter: { values: ['generate_lead', 'form_submit', 'contact_form'] },
        },
      },
      orderBys: [{ metric: { metricName: 'eventCount' }, desc: true }],
      limit: 5,
    },
  });

  const landingReport = await analytics.properties.runReport({
    property: `properties/${PROPERTY_ID}`,
    requestBody: {
      dateRanges: [{ startDate, endDate }],
      dimensions: [{ name: 'landingPage' }],
      metrics: [{ name: 'eventCount' }],
      dimensionFilter: {
        filter: {
          fieldName: 'eventName',
          inListFilter: { values: ['generate_lead', 'form_submit', 'contact_form'] },
        },
      },
      orderBys: [{ metric: { metricName: 'eventCount' }, desc: true }],
      limit: 5,
    },
  });

  const blocks = [
    slackHeader('Weekly Lead Report'),
    slackFields([
      ['This Week', `${thisWeekTotal} leads`],
      ['Last Week', `${prevWeekTotal} leads`],
      ['Change', `${change}%`],
    ]),
    slackDivider(),
  ];

  const sources = (sourceReport.data.rows || []);
  if (sources.length > 0) {
    const sourceLines = sources.map(r =>
      `• *${r.dimensionValues[0].value}*: ${r.metricValues[0].value} leads`
    ).join('\n');
    blocks.push(slackSection(`:signal_strength: *Lead Sources*\n${sourceLines}`));
    blocks.push(slackDivider());
  }

  const landings = (landingReport.data.rows || []);
  if (landings.length > 0) {
    const landingLines = landings.map(r =>
      `• \`${r.dimensionValues[0].value}\`: ${r.metricValues[0].value} leads`
    ).join('\n');
    blocks.push(slackSection(`:door: *Top Lead Pages*\n${landingLines}`));
  }

  await sendSlack(blocks, `Weekly Lead Report: ${thisWeekTotal} leads`);
  log.info(`Lead report: ${thisWeekTotal} this week, ${prevWeekTotal} last week`);

  return { thisWeek: thisWeekTotal, prevWeek: prevWeekTotal };
}
