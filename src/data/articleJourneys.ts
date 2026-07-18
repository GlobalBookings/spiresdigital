export interface ArticleJourney {
  eyebrow: string;
  title: string;
  primaryHref: string;
  primaryLabel: string;
  secondaryHref: string;
  secondaryLabel: string;
}

const categoryJourneys: Record<string, ArticleJourney> = {
  PPC: {
    eyebrow: 'Make the numbers useful',
    title: 'Check the economics, then decide what deserves more budget.',
    primaryHref: '/tools/channel-budget-planner',
    primaryLabel: 'Plan channel budget',
    secondaryHref: '/services/ppc-management',
    secondaryLabel: 'Discuss PPC management',
  },
  'Meta Ads': {
    eyebrow: 'Move from platform metrics to profit',
    title: 'Model the result your store needs before changing the campaign.',
    primaryHref: '/tools/ecommerce-profit-calculator',
    primaryLabel: 'Model store economics',
    secondaryHref: '/services/meta-ads',
    secondaryLabel: 'Discuss Meta ads',
  },
  'Affiliate Marketing': {
    eyebrow: 'Turn the guide into a programme decision',
    title: 'Map the commercial case, partner mix and management needed next.',
    primaryHref: '/services/affiliate-management',
    primaryLabel: 'Explore affiliate management',
    secondaryHref: '/contact',
    secondaryLabel: 'Request a consultation',
  },
  Shopify: {
    eyebrow: 'Find the next store constraint',
    title: 'Assess where acquisition, conversion or retention is limiting growth.',
    primaryHref: '/tools/growth-assessment',
    primaryLabel: 'Run the growth assessment',
    secondaryHref: '/services/cro-shopify',
    secondaryLabel: 'Explore Shopify growth',
  },
  'E-Commerce': {
    eyebrow: 'Find the next store constraint',
    title: 'Assess where acquisition, conversion or retention is limiting growth.',
    primaryHref: '/tools/growth-assessment',
    primaryLabel: 'Run the growth assessment',
    secondaryHref: '/services/cro-shopify',
    secondaryLabel: 'Explore Shopify growth',
  },
  SEO: {
    eyebrow: 'Turn search demand into a useful next step',
    title: 'Check the page, then connect the finding to a commercial search journey.',
    primaryHref: '/seo-keyword-density-checker',
    primaryLabel: 'Check page copy',
    secondaryHref: '/services/ecommerce-seo',
    secondaryLabel: 'Explore ecommerce SEO',
  },
  Analytics: {
    eyebrow: 'Make the measurement actionable',
    title: 'Clarify the decision first, then repair the data needed to make it.',
    primaryHref: '/services/analytics-attribution',
    primaryLabel: 'Explore analytics support',
    secondaryHref: '/contact',
    secondaryLabel: 'Request a consultation',
  },
  Strategy: {
    eyebrow: 'Choose the next commercial decision',
    title: 'Use a structured assessment to prioritise the constraint worth solving.',
    primaryHref: '/tools/growth-assessment',
    primaryLabel: 'Run the growth assessment',
    secondaryHref: '/contact',
    secondaryLabel: 'Request a consultation',
  },
};

const journeyOverrides: Record<string, Partial<ArticleJourney>> = {
  'facebook-ads-benchmarks-2026': {
    title: 'Calculate your break-even CPA and ROAS before comparing the account with anyone else.',
    primaryHref: '/tools/ecommerce-profit-calculator',
    primaryLabel: 'Calculate profit targets',
  },
  'how-to-calculate-google-ads-budget': {
    primaryHref: '/tools/channel-budget-planner',
    primaryLabel: 'Build a budget scenario',
  },
  'reduce-wasted-ad-spend-google-ads': {
    primaryHref: '/tools/paid-media-waste-estimator',
    primaryLabel: 'Estimate paid-media waste',
  },
  'how-to-launch-affiliate-program': {
    title: 'Pressure-test the programme case before choosing a network or commission structure.',
  },
  'shopify-seo-guide': {
    primaryHref: '/seo-keyword-density-checker',
    primaryLabel: 'Check page copy',
    secondaryHref: '/services/ecommerce-seo',
    secondaryLabel: 'Explore ecommerce SEO',
  },
};

const fallbackJourney: ArticleJourney = {
  eyebrow: 'Apply the thinking',
  title: 'Turn the article into a clear next commercial decision.',
  primaryHref: '/tools',
  primaryLabel: 'Use a free tool',
  secondaryHref: '/contact',
  secondaryLabel: 'Request a consultation',
};

export function getArticleJourney(slug = '', category = ''): ArticleJourney {
  const categoryJourney = categoryJourneys[category] || fallbackJourney;
  return { ...categoryJourney, ...(journeyOverrides[slug] || {}) };
}
