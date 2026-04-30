export interface CaseStudy {
  slug: string;
  title: string;
  description: string;
  challenge: string;
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
    industry: 'DTC / E-Commerce',
    service: 'Meta Ads',
    stats: [
      { value: '5x', label: 'ROAS' },
      { value: '42%', label: 'Lower CPA' },
      { value: '4x', label: 'Ad Spend Scaled' },
    ],
  },
];
