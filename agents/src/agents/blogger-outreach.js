import Anthropic from '@anthropic-ai/sdk';
import { Resend } from 'resend';
import { createLogger } from '../core/logger.js';
import { sendSlack, slackHeader, slackSection, slackDivider } from '../core/slack.js';

const log = createLogger('blogger-outreach');
const FROM_EMAIL = process.env.OUTREACH_FROM_EMAIL || 'hello@spiresdigital.com';
const REPLY_TO = process.env.OUTREACH_REPLY_TO || 'jack@spiresdigital.com';

const OUTREACH_TARGETS = [
  { niche: 'digital marketing blogs', topics: ['PPC tips', 'SEO strategies', 'marketing automation'] },
  { niche: 'small business blogs', topics: ['growth marketing', 'digital advertising basics', 'ROI improvement'] },
  { niche: 'e-commerce blogs', topics: ['Shopify optimisation', 'conversion rate improvement', 'Google Shopping'] },
  { niche: 'startup and SaaS blogs', topics: ['B2B marketing', 'lead generation', 'paid advertising'] },
  { niche: 'UK business publications', topics: ['digital transformation', 'SME marketing', 'Staffordshire business'] },
];

export async function run() {
  log.info('Blogger Outreach starting...');

  const anthropic = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY });

  const target = OUTREACH_TARGETS[Math.floor(Math.random() * OUTREACH_TARGETS.length)];
  const topic = target.topics[Math.floor(Math.random() * target.topics.length)];

  const response = await anthropic.messages.create({
    model: 'claude-sonnet-4-20250514',
    max_tokens: 1500,
    messages: [{
      role: 'user',
      content: `Draft a professional guest post pitch email for SpiresDigital.com (a UK digital marketing agency based in Lichfield with 15+ years experience).

TARGET: ${target.niche} blogs
TOPIC: ${topic}

Write a concise, personalised email that:
1. Has a compelling subject line
2. Opens with something specific about the target blog (leave [BLOG NAME] and [SPECIFIC ARTICLE] as placeholders)
3. Proposes a specific, valuable article topic with 3-4 bullet points of what it would cover
4. Mentions our credentials briefly (15+ years, Google Partner, managed GBP2.5M+ in ad spend)
5. Is professional but warm, not salesy
6. Is under 200 words

Format as:
SUBJECT: ...
BODY: ...`,
    }],
  });

  const draft = response.content[0].text;

  const blocks = [
    slackHeader('Blogger Outreach — Draft Ready'),
    slackDivider(),
    slackSection(
      `*Niche:* ${target.niche}\n*Topic:* ${topic}\n\n` +
      `\`\`\`${draft.slice(0, 2500)}\`\`\`\n\n` +
      `_Review and personalise before sending. Replace [BLOG NAME] and [SPECIFIC ARTICLE] placeholders._`
    ),
  ];

  await sendSlack(blocks, 'Blogger Outreach draft ready');
  log.info(`Outreach draft generated for ${target.niche} / ${topic}`);

  return { niche: target.niche, topic };
}
