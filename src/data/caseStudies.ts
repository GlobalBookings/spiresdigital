export interface CaseStudy {
  slug: string;
  title: string;
  description: string;
  challenge: string;
  timeframe: string;
  evidence: string;
  limitations: string;
  industry: string;
  service: string;
  stats: { value: string; label: string }[];
}

export const caseStudies: CaseStudy[] = [
  {
    slug: 'ecommerce-roas-250-percent',
    title: 'E-Commerce Brand Achieves 250% ROAS Improvement',
    description: 'Restructured Google Shopping campaigns and implemented Performance Max to dramatically increase return on ad spend for a UK fashion retailer.',
    challenge: 'A growing e-commerce brand was spending heavily on Google Ads but seeing diminishing returns with a ROAS below 2x. Campaign structure was messy with overlapping audiences.',
    timeframe: 'Compared across the post-restructure trading period; exact dates are withheld under the client agreement.',
    evidence: 'Google Ads conversion reporting was reconciled with the retailer’s ecommerce revenue reporting during the engagement.',
    limitations: 'Platform attribution, product demand, promotions, seasonality and budget changes can all influence ROAS and revenue.',
    industry: 'E-Commerce',
    service: 'PPC Management',
    stats: [
      { value: '250%', label: 'ROAS Increase' },
      { value: '68%', label: 'CPA Reduction' },
      { value: '3.2x', label: 'Revenue Growth' },
    ],
  },
  {
    slug: 'lead-gen-saas-company',
    title: 'SaaS Company Triples Qualified Leads',
    description: 'Multi-channel PPC strategy across Google and Meta platforms generated a 3x increase in demo bookings for a B2B SaaS platform.',
    challenge: 'A B2B SaaS company was struggling to generate qualified leads. Their existing campaigns had high CPCs and low conversion rates with no proper tracking.',
    timeframe: 'Measured across the agreed post-launch comparison period; exact dates are commercially confidential.',
    evidence: 'Advertising conversion data and the client’s demo and pipeline reporting were used to assess lead volume and quality.',
    limitations: 'Qualification definitions, sales-cycle length, channel overlap and changes to the offer can affect lead and pipeline comparisons.',
    industry: 'SaaS / Tech',
    service: 'PPC + Meta Ads',
    stats: [
      { value: '3x', label: 'Lead Increase' },
      { value: '45%', label: 'CPC Reduction' },
      { value: '2.8x', label: 'Pipeline Growth' },
    ],
  },
  {
    slug: 'local-business-seo-growth',
    title: 'Local Business Dominates Search in 6 Months',
    description: 'Technical SEO overhaul and local optimisation strategy drove a local service business to the top of search results.',
    challenge: 'A local service business was invisible in search results despite having a well-established reputation. Their website had critical technical issues.',
    timeframe: 'Six months from the technical and local search work beginning.',
    evidence: 'Organic analytics, local search visibility and lead reporting available to the business were reviewed together.',
    limitations: 'Local search demand, proximity, competitor activity, site changes and lead tracking quality can affect reported growth.',
    industry: 'Local Services',
    service: 'SEO',
    stats: [
      { value: '340%', label: 'Organic Traffic' },
      { value: '#1', label: 'Local Rankings' },
      { value: '180%', label: 'Lead Increase' },
    ],
  },
  {
    slug: 'affiliate-program-launch',
    title: 'Affiliate Program Generates 25% of Revenue',
    description: 'Built and launched an affiliate program on AWIN that became a significant revenue channel within the first year.',
    challenge: 'An online retailer was entirely dependent on paid advertising. They needed a diversified acquisition strategy with lower marginal costs.',
    timeframe: 'The first 12 months after the affiliate programme launched.',
    evidence: 'AWIN programme reporting and the retailer’s commercial reporting were used to monitor partners, revenue contribution and programme return.',
    limitations: 'Affiliate attribution, commission, product margin, partner mix and overlap with other channels influence programme ROI.',
    industry: 'Retail',
    service: 'Affiliate Management',
    stats: [
      { value: '25%', label: 'Revenue Share' },
      { value: '120+', label: 'Active Partners' },
      { value: '8.5x', label: 'Program ROI' },
    ],
  },
  {
    slug: 'shopify-migration-conversion',
    title: 'Shopify Migration Doubles Conversion Rate',
    description: 'Migrated a legacy e-commerce store to Shopify with custom optimisation, resulting in significantly improved conversion rates.',
    challenge: 'An established brand was running on an outdated platform with slow load times, a clunky checkout, and no mobile optimisation.',
    timeframe: 'Compared before and after the Shopify migration over the client’s agreed trading periods.',
    evidence: 'Store analytics, ecommerce revenue reporting and site performance tests were reviewed after launch.',
    limitations: 'Product mix, promotions, trading season, traffic quality and simultaneous merchandising changes can influence conversion and revenue.',
    industry: 'E-Commerce',
    service: 'Shopify Build',
    stats: [
      { value: '2.1x', label: 'Conversion Rate' },
      { value: '65%', label: 'Faster Load Time' },
      { value: '40%', label: 'Revenue Increase' },
    ],
  },
  {
    slug: 'meta-ads-dpc-brand',
    title: 'DTC Brand Scales to 5x ROAS on Meta',
    description: 'Full-funnel Meta advertising strategy with creative testing framework delivered exceptional returns for a direct-to-consumer brand.',
    challenge: 'A DTC brand had plateaued on Meta with rising CPMs and creative fatigue. They needed a systematic testing approach to break through.',
    timeframe: 'Measured across the controlled testing and subsequent scaling period; exact dates remain confidential.',
    evidence: 'Meta campaign reporting and the brand’s ecommerce conversion and revenue data were assessed together.',
    limitations: 'Attribution settings, creative, offer strength, stock, seasonality and changes in spend can influence ROAS and CPA.',
    industry: 'DTC / E-Commerce',
    service: 'Meta Ads',
    stats: [
      { value: '5x', label: 'ROAS' },
      { value: '42%', label: 'Lower CPA' },
      { value: '4x', label: 'Ad Spend Scaled' },
    ],
  },
];
