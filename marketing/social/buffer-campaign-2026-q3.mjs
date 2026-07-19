export const campaign = {
  id: 'spires_q3_2026_reactivation',
  name: 'Useful ecommerce growth — four-week reactivation',
  organizationId: '68c6e98a9ba97de1ceff81f4',
  timezone: 'Europe/Guernsey',
};

export const channels = {
  instagram: { id: '68c6ea49139f4ffdd6e7e75e', name: '@spiresdigitaluk' },
  twitter: { id: '68c6ebe3139f4ffdd6e7e7c7', name: '@SpiresDigitalUK' },
  threads: { id: '68ca84c3139f4ffdd6e8cb68', name: '@spiresdigitaluk' },
  facebook: { id: '68c6e9d0139f4ffdd6e7e734', name: 'Spires Digital' },
  linkedin: { id: '68c6ea17139f4ffdd6e7e74d', name: 'Spires Digital' },
};

const mediaRoot = 'https://raw.githubusercontent.com/GlobalBookings/spiresdigital/f91eed5c3a9703a224062c7bbdad26269e9a029f/public/images/social';

const media = {
  profit: `${mediaRoot}/ecommerce-profit-system.jpg`,
  diagnostic: `${mediaRoot}/growth-diagnostic.jpg`,
  system: `${mediaRoot}/full-funnel-system.jpg`,
  audit: `${mediaRoot}/paid-media-audit.jpg`,
};

const postingTimesUtc = {
  hero: {
    linkedin: '07:15',
    twitter: '08:05',
    threads: '08:15',
    facebook: '11:15',
    instagram: '17:30',
  },
  insight: {
    linkedin: '07:15',
    twitter: '11:05',
    threads: '11:15',
    facebook: '17:05',
  },
  weekend: {
    linkedin: '08:30',
    twitter: '09:00',
    threads: '09:10',
    facebook: '09:30',
  },
};

const moments = [
  {
    id: 'profit_calculator',
    date: '2026-07-21',
    slot: 'hero',
    path: '/tools/ecommerce-profit-calculator/',
    image: media.profit,
    long: `Revenue is not profit.

Before increasing spend, model the commercial floor: break-even ROAS, target ROAS, maximum CAC and the ad budget your target margin can support.

Our free ecommerce profit calculator runs in your browser. No signup and no generic benchmark pretending every store has the same economics.

{link}

#Ecommerce #PaidMedia`,
    threads: `Revenue is not profit.

Model break-even ROAS, target ROAS, maximum CAC and the ad budget your margin can support with our free ecommerce calculator. No signup; just your own numbers.

{link}

#Ecommerce`,
    twitter: `Revenue is not profit. Model break-even ROAS, target ROAS, maximum CAC and the ad budget your margin can support with our free calculator. No signup.

{link} #Ecommerce`,
    instagram: `Revenue is not profit.

Before increasing spend, calculate the break-even ROAS, target ROAS and maximum CAC your own margins can support.

The free calculator runs in your browser with no signup:
spiresdigital.com/tools/ecommerce-profit-calculator/

#Ecommerce #PaidMedia #ROAS #EcommerceGrowth`,
  },
  {
    id: 'growth_assessment',
    date: '2026-07-23',
    slot: 'insight',
    path: '/tools/growth-assessment/',
    long: `Most growth plans start with a channel. Better ones start with the constraint.

Is the next opportunity in acquisition, conversion, retention or measurement? Our free assessment turns a few honest answers into a prioritised decision map.

It takes minutes, runs in your browser and asks for no signup.

{link}

#EcommerceGrowth #MarketingStrategy`,
    threads: `Most growth plans start with a channel. Better ones start with the constraint.

Use our free assessment to identify whether acquisition, conversion, retention or measurement deserves attention first.

{link}`,
    twitter: `Most growth plans start with a channel. Better ones start with the constraint. Find whether acquisition, conversion, retention or measurement deserves attention first.

{link}`,
  },
  {
    id: 'channel_budget_planner',
    date: '2026-07-25',
    slot: 'weekend',
    path: '/tools/channel-budget-planner/',
    long: `A channel budget should be a commercial hypothesis—not last month’s spend with 10% added.

Our free planner helps compare channel roles, confidence and constraints before you allocate the next pound. It is designed for ecommerce teams deciding across paid search, paid social, SEO, retention and affiliates.

{link}

#MarketingBudget #Ecommerce`,
    threads: `A channel budget should be a commercial hypothesis—not last month’s spend with 10% added.

Compare channel roles, confidence and constraints with our free planner.

{link}`,
    twitter: `A channel budget should be a commercial hypothesis—not last month’s spend with 10% added. Compare channel roles, confidence and constraints with our free planner.

{link}`,
  },
  {
    id: 'google_ads_audit',
    date: '2026-07-28',
    slot: 'hero',
    path: '/tools/google-ads-audit-checklist/',
    image: media.audit,
    long: `A Google Ads audit should produce decisions, not a 70-page export.

Our free checklist examines demand control, feed health, conversion tracking, landing-page evidence and commercial measurement—then separates strong foundations from partial controls and real gaps.

No login. Your answers stay in your browser.

{link}

#GoogleAds #PPC`,
    threads: `A Google Ads audit should produce decisions, not a 70-page export.

Check demand control, feed health, tracking, landing pages and commercial measurement with our free browser-based checklist.

{link}

#GoogleAds`,
    twitter: `A Google Ads audit should produce decisions, not a 70-page export. Check demand control, feed health, tracking, landing pages and commercial measurement.

{link} #GoogleAds`,
    instagram: `A useful Google Ads audit should produce decisions, not a 70-page export.

Check demand control, feed health, conversion tracking, landing pages and commercial measurement with our free browser-based checklist.

spiresdigital.com/tools/google-ads-audit-checklist/

#GoogleAds #PPC #EcommerceMarketing`,
  },
  {
    id: 'meta_creative_testing',
    date: '2026-07-30',
    slot: 'insight',
    path: '/blog/meta-ads-creative-testing-framework/',
    long: `“Test more creative” is not a testing strategy.

A useful Meta Ads programme records the variable being tested, the audience and placement context, the decision window and what happens next. That makes learning cumulative instead of producing a folder full of unexplained winners and losers.

Our practical framework:
{link}

#MetaAds #CreativeTesting`,
    threads: `“Test more creative” is not a testing strategy.

Record the variable, context, decision window and next action so every Meta Ads test adds to what you know.

Our framework: {link}`,
    twitter: `“Test more creative” is not a testing strategy. Record the variable, context, decision window and next action so every Meta Ads test adds to what you know.

{link} #MetaAds`,
  },
  {
    id: 'affiliate_launch',
    date: '2026-08-01',
    slot: 'weekend',
    path: '/blog/how-to-launch-affiliate-program/',
    long: `Affiliate growth does not begin with adding hundreds of publishers.

It begins with margin-safe commission rules, reliable tracking, a clear partner proposition, approval standards and a recruitment plan for partners your customers actually trust.

This guide lays out the launch sequence.

{link}

#AffiliateMarketing #Ecommerce`,
    threads: `Affiliate growth starts with margin-safe commissions, reliable tracking, a clear proposition and partners your customers trust—not the largest possible publisher count.

Launch guide: {link}`,
    twitter: `Affiliate growth starts with margin-safe commissions, reliable tracking, a clear proposition and partners customers trust—not the largest publisher count.

{link} #AffiliateMarketing`,
  },
  {
    id: 'full_funnel_system',
    date: '2026-08-04',
    slot: 'hero',
    path: '/industries/ecommerce/',
    image: media.system,
    long: `Acquisition, conversion, retention and measurement are one commercial system.

If paid media brings the wrong customer, CRO cannot repair the economics. If retention is weak, acquisition has to work too hard. If measurement is inconsistent, every channel can appear to be the hero.

That joined-up view is how we approach ecommerce growth.

{link}

#EcommerceGrowth #DigitalStrategy`,
    threads: `Acquisition, conversion, retention and measurement are one commercial system.

Weak retention makes acquisition work too hard. Weak measurement lets every channel claim the sale. Joined-up decisions beat isolated optimisation.

{link}`,
    twitter: `Acquisition, conversion, retention and measurement are one commercial system. Weak retention makes acquisition work too hard; weak measurement lets every channel claim the sale.

{link}`,
    instagram: `Acquisition, conversion, retention and measurement are one commercial system.

Weak retention makes acquisition work too hard. Weak measurement lets every channel claim the sale. Joined-up decisions beat isolated optimisation.

Explore the approach at spiresdigital.com/industries/ecommerce/

#EcommerceGrowth #DigitalStrategy #EcommerceMarketing`,
  },
  {
    id: 'shopify_seo',
    date: '2026-08-06',
    slot: 'insight',
    path: '/blog/shopify-seo-guide/',
    long: `Shopify SEO is not a plugin installation.

It is technical accessibility, collection architecture, product information, internal linking, search-intent coverage and a store experience that helps the visitor complete the job they searched for.

Our practical guide covers the system rather than isolated “SEO tweaks”.

{link}

#ShopifySEO #EcommerceSEO`,
    threads: `Shopify SEO is not a plugin installation.

It combines technical accessibility, collection architecture, product information, internal linking and a store experience that satisfies the search.

{link}`,
    twitter: `Shopify SEO is not a plugin installation. It combines technical accessibility, collection architecture, product information, internal linking and a store experience that satisfies the search.

{link}`,
  },
  {
    id: 'email_retention',
    date: '2026-08-08',
    slot: 'weekend',
    path: '/services/email-retention/',
    long: `Email automation is most valuable when it responds to customer behaviour—not when it simply sends more messages.

The useful questions are commercial: which lifecycle moments deserve intervention, what margin is available, how should frequency change by customer state, and what counts as incremental revenue?

Our retention approach:
{link}

#EmailMarketing #CustomerRetention`,
    threads: `Email automation is valuable when it responds to customer behaviour—not when it simply sends more messages.

Start with lifecycle moments, margin, frequency and incremental revenue.

{link}`,
    twitter: `Email automation is valuable when it responds to customer behaviour—not when it simply sends more messages. Start with lifecycle moments, margin, frequency and incremental revenue.

{link}`,
  },
  {
    id: 'waste_estimator',
    date: '2026-08-11',
    slot: 'hero',
    path: '/tools/paid-media-waste-estimator/',
    image: media.diagnostic,
    long: `Not every inefficient account needs lower bids.

Waste can come from weak search-term control, an unhealthy product feed, poor creative rotation, missing exclusions, unreliable conversion signals or a landing page that cannot convert the demand you paid to acquire.

Use our free estimator to identify where to investigate first.

{link}

#PaidMedia #Ecommerce`,
    threads: `Paid-media waste is not always a bidding problem.

It can begin with query control, feed health, creative rotation, exclusions, conversion signals or the landing page. Use our free estimator to find where to investigate first.

{link}`,
    twitter: `Paid-media waste is not always a bidding problem. It can begin with query control, feed health, creative rotation, exclusions, tracking or the landing page.

Free estimator: {link}`,
    instagram: `Paid-media waste is not always a bidding problem.

It can begin with query control, feed health, creative rotation, exclusions, tracking or the landing page.

Use the free estimator at:
spiresdigital.com/tools/paid-media-waste-estimator/

#PaidMedia #GoogleAds #MetaAds #Ecommerce`,
  },
  {
    id: 'marketing_attribution',
    date: '2026-08-13',
    slot: 'insight',
    path: '/blog/marketing-attribution-which-channels-work/',
    long: `When every platform claims the conversion, reporting is not the same as measurement.

Useful attribution starts with consistent definitions, blended commercial outcomes and an honest account of what the available evidence cannot prove. Platform reporting still matters; it just should not be mistaken for the full causal answer.

Our guide:
{link}

#MarketingAttribution #Analytics`,
    threads: `When every platform claims the conversion, reporting is not the same as measurement.

Start with consistent definitions, blended outcomes and an honest account of what the evidence cannot prove.

{link}`,
    twitter: `When every platform claims the conversion, reporting is not the same as measurement. Start with consistent definitions, blended outcomes and what the evidence cannot prove.

{link}`,
  },
  {
    id: 'growth_review',
    date: '2026-08-15',
    slot: 'weekend',
    path: '/contact/',
    long: `If ecommerce growth feels busy but not clearer, the useful next step may be a diagnosis—not another disconnected tactic.

Spires Digital reviews the commercial model, current channel mix, conversion and retention constraints, and the quality of the measurement behind the decisions.

We price only after a consultation and a written scope. Start with the context; there is no obligation to proceed.

{link}`,
    threads: `If ecommerce growth feels busy but not clearer, the useful next step may be a diagnosis—not another disconnected tactic.

Share the context with Spires Digital. Pricing follows a consultation and written scope, with no obligation to proceed.

{link}`,
    twitter: `If ecommerce growth feels busy but not clearer, the next step may be a diagnosis—not another tactic. Share the context with Spires Digital. Pricing follows a consultation and written scope.

{link}`,
  },
];

function trackedLink(path, service, content) {
  const url = new URL(path, 'https://spiresdigital.com');
  url.searchParams.set('utm_source', service === 'twitter' ? 'x' : service);
  url.searchParams.set('utm_medium', 'social');
  url.searchParams.set('utm_campaign', 'q3_2026_reactivation');
  url.searchParams.set('utm_content', content);
  return url.href;
}

function dueAt(moment, service) {
  const time = postingTimesUtc[moment.slot][service];
  if (!time) return null;
  return `${moment.date}T${time}:00.000Z`;
}

export const campaignPosts = moments.flatMap(moment =>
  Object.keys(postingTimesUtc[moment.slot]).map(service => {
    const copyKey = service === 'instagram'
      ? 'instagram'
      : service === 'twitter'
        ? 'twitter'
        : service === 'threads'
          ? 'threads'
          : 'long';
    const template = moment[copyKey];
    if (!template) throw new Error(`Missing ${copyKey} copy for ${moment.id}`);
    const text = template.replace('{link}', trackedLink(moment.path, service, moment.id));
    return {
      key: `${moment.id}:${service}`,
      campaignMoment: moment.id,
      service,
      channelId: channels[service].id,
      dueAt: dueAt(moment, service),
      text,
      assets: moment.image ? [{ image: { url: moment.image } }] : [],
    };
  }),
);

export function validateCampaign(now = new Date()) {
  const errors = [];
  if (campaignPosts.length !== 52) errors.push(`Expected 52 posts; found ${campaignPosts.length}`);
  const keys = new Set();
  for (const post of campaignPosts) {
    if (keys.has(post.key)) errors.push(`Duplicate key: ${post.key}`);
    keys.add(post.key);
    if (new Date(post.dueAt) <= now) errors.push(`Past dueAt: ${post.key} ${post.dueAt}`);
    if (post.text.includes('spires.gg')) errors.push(`Legacy domain in ${post.key}`);
    if (!post.text.includes('spiresdigital.com')) errors.push(`Missing canonical domain in ${post.key}`);
    if (post.service === 'instagram' && post.assets.length === 0) errors.push(`Instagram post lacks media: ${post.key}`);
    if (post.service === 'twitter') {
      const weightedLength = post.text.replace(/https?:\/\/\S+/g, 'x'.repeat(23)).length;
      if (weightedLength > 280) errors.push(`X weighted length ${weightedLength}: ${post.key}`);
    }
  }
  return errors;
}

