export interface ServiceConversionDefinition {
  audience: string;
  notFor: string;
  ctaLabel: string;
  timing: { value: string; label: string }[];
  inputs: string[];
  boundaries: string[];
  proof: {
    label: string;
    title: string;
    text: string;
    href: string;
    cta: string;
    note: string;
  };
}

export const serviceConversion: Record<string, ServiceConversionDefinition> = {
  'ppc-management': {
    audience: 'Ecommerce teams already investing in Google Ads—or preparing to—with enough demand, stock and margin to make structured testing commercially useful.',
    notFor: 'A poor fit when the offer is still unproven, stock is unreliable or the store cannot fulfil incremental demand. In those cases, paid search usually amplifies the underlying constraint.',
    ctaLabel: 'Discuss your Google Ads account',
    timing: [
      { value: 'First 10 working days', label: 'Economics, tracking, feed and account priorities documented once access is complete' },
      { value: 'Several conversion cycles', label: 'The minimum useful window for judging bidding and structural changes' },
      { value: 'Weekly controls', label: 'Search terms, feeds, budgets and anomalies reviewed; commercial direction reviewed monthly' },
    ],
    inputs: ['Google Ads, Merchant Centre, GA4 and ecommerce-platform access', 'Product margin, returns, fulfilment and new-customer definitions', 'Stock, promotion and merchandising context', 'A named approver for feed, tracking, creative and landing-page decisions'],
    boundaries: ['Media spend is paid directly by you from accounts your business owns.', 'Landing-page development and major tracking rebuilds are agreed explicitly rather than assumed inside media management.', 'Performance depends on demand, price, stock, competition and the store experience; no ROAS or revenue outcome is guaranteed.'],
    proof: {
      label: 'Closest public example',
      title: 'Google Shopping account restructuring',
      text: 'An anonymised ecommerce example connects a weak account structure and overlapping demand with feed, Shopping and Performance Max changes.',
      href: '/case-studies#ecommerce-roas-250-percent',
      cta: 'Read the selected outcome',
      note: 'The public summary contains selected reported outcomes, not the full baseline, margin model or account history. It is evidence of the type of work—not a forecast for another store.',
    },
  },
  'meta-ads': {
    audience: 'Ecommerce brands with a proven offer, viable contribution margin and the ability to produce or approve fresh creative consistently.',
    notFor: 'A poor fit when the business expects targeting settings to compensate for weak product demand, an unclear offer or no sustainable creative-production capacity.',
    ctaLabel: 'Discuss your Meta growth plan',
    timing: [
      { value: 'First 10 working days', label: 'Offer, signal quality, catalogue and creative-testing priorities mapped after access' },
      { value: 'Multiple creative batches', label: 'Useful learning comes from repeated hooks and formats—not one launch week' },
      { value: 'Weekly learning review', label: 'Creative, delivery and spend decisions recorded against store and new-customer signals' },
    ],
    inputs: ['Meta Business, ad-account, Pixel, catalogue and analytics access', 'Product economics, offer history and new-customer targets', 'Existing brand assets, customer language and previous creative results', 'A sustainable route to approve or produce new creative'],
    boundaries: ['Media spend stays in your business-owned ad account.', 'UGC shoots, creator fees and high-volume production are separately agreed when required.', 'Meta attribution is reviewed alongside store and analytics data; platform-reported ROAS is not treated as guaranteed incremental revenue.'],
    proof: {
      label: 'Closest public example',
      title: 'Creative testing for a DTC ecommerce brand',
      text: 'An anonymised case summary shows how creative fatigue and rising acquisition cost were addressed through a structured full-funnel testing system.',
      href: '/case-studies#meta-ads-dpc-brand',
      cta: 'Read the selected outcome',
      note: 'The published metrics are selected account outcomes. Spend level, creative volume, attribution settings and the wider commercial baseline affect what another brand can learn or achieve.',
    },
  },
  'ecommerce-seo': {
    audience: 'Ecommerce teams that can implement technical and merchandising changes and want non-paid demand tied to valuable categories, products and buying decisions.',
    notFor: 'A poor fit when the goal is bulk publishing without implementation access, product expertise or a distinct reason for customers to choose the store.',
    ctaLabel: 'Discuss your ecommerce SEO roadmap',
    timing: [
      { value: 'First 15 working days', label: 'Technical, category and implementation priorities assembled after crawl and data access' },
      { value: 'Crawl to several months', label: 'Technical fixes may be seen quickly; meaningful ranking and revenue change usually takes longer' },
      { value: 'Monthly priority review', label: 'Indexation, implementation, content and commercial landing-page movement reviewed together' },
    ],
    inputs: ['Search Console, analytics, ecommerce-platform and crawl access', 'Catalogue structure, margin priorities and merchandising plans', 'Developer or theme access for agreed technical implementation', 'Product expertise and an approver for category or editorial changes'],
    boundaries: ['Developer implementation and content production responsibilities are named in the written scope.', 'Rankings, traffic and revenue depend on competition, authority, implementation and search-engine decisions; positions are never guaranteed.', 'Unrelated high-volume topics are not pursued simply to inflate impressions.'],
    proof: {
      label: 'Relevant methodology example',
      title: 'Technical SEO and search-visibility recovery',
      text: 'The current public SEO example is an anonymised local-services engagement rather than an ecommerce store. It demonstrates the technical diagnosis and prioritisation method, not an ecommerce outcome benchmark.',
      href: '/case-studies#local-business-seo-growth',
      cta: 'Review the SEO example',
      note: 'Sector, search demand, authority and conversion path differ materially. A relevant ecommerce baseline must be established from your own Search Console, catalogue and implementation capacity.',
    },
  },
  'cro-shopify': {
    audience: 'Shopify and ecommerce teams with qualified traffic, a measurable purchase journey and the ability to release changes in small, controlled increments.',
    notFor: 'A poor fit when the underlying offer has not converted anywhere yet or when every decision must be a full redesign before customer evidence can be collected.',
    ctaLabel: 'Discuss your Shopify conversion plan',
    timing: [
      { value: 'First 10–15 working days', label: 'Research themes and a prioritised opportunity backlog after data and theme access' },
      { value: 'One release or test cycle', label: 'The first useful evidence point; statistical testing time depends on traffic and conversion volume' },
      { value: 'Fortnightly release rhythm', label: 'Small, quality-assured changes where the stack and approval process support it' },
    ],
    inputs: ['Shopify, analytics, theme and relevant research-tool access', 'Customer reviews, support themes, returns and merchandising context', 'Brand, accessibility and technical constraints', 'A product owner able to approve hypotheses and releases'],
    boundaries: ['Theme licences, paid apps, specialist integrations and third-party fees are approved separately.', 'A/B testing is used only when traffic supports a defensible read; lower-volume stores use research-led releases.', 'Major migrations, brand redesign and ongoing CRO are separate delivery shapes with their own acceptance criteria.'],
    proof: {
      label: 'Closest public example',
      title: 'Shopify migration and conversion improvement',
      text: 'An anonymised ecommerce summary connects platform friction, mobile experience and performance work with selected post-migration outcomes.',
      href: '/case-studies#shopify-migration-conversion',
      cta: 'Read the selected outcome',
      note: 'Migration and conversion results depend on the starting platform, traffic quality, seasonality and release scope. The summary is not a guarantee that a redesign will improve conversion.',
    },
  },
  'email-retention': {
    audience: 'Ecommerce brands with a real customer base, permissioned first-party data and a product category where education, replenishment or repeat purchase can create value.',
    notFor: 'A poor fit when the list source is unclear, consent is unreliable or the product has no credible repeat, cross-sell or lifecycle opportunity.',
    ctaLabel: 'Discuss your retention opportunity',
    timing: [
      { value: 'First 10 working days', label: 'Lifecycle, data, consent and priority-flow map after platform access' },
      { value: 'At least one buying cycle', label: 'A more useful evaluation window than immediate attributed revenue' },
      { value: 'Monthly cohort review', label: 'Repeat purchase, time to second order and campaign or flow learning reviewed together' },
    ],
    inputs: ['Klaviyo or lifecycle-platform, store and analytics access', 'Consent sources, list history and current deliverability context', 'Purchase-cycle, product relationship and margin information', 'Brand assets, campaign calendar and a reliable approval route'],
    boundaries: ['Ongoing campaign production, advanced design and specialist deliverability remediation are agreed by scope.', 'Discount cost and broad attribution windows are considered before email revenue is treated as incremental.', 'The service cannot repair a weak product or acquisition promise through sending frequency alone.'],
    proof: {
      label: 'Public evidence gap',
      title: 'No direct retention case study is currently published',
      text: 'The results library does not yet contain a retention-only example with enough context to present responsibly. We would rather make that gap clear than relabel a paid-media or Shopify result.',
      href: '/case-studies',
      cta: 'See the current evidence standard',
      note: 'Where confidentiality permits, the consultation can cover a closer anonymised example and the exact definitions that would be used to measure your repeat-purchase opportunity.',
    },
  },
  'affiliate-management': {
    audience: 'Established ecommerce brands with healthy margin, a clear partner proposition and the patience to recruit, activate and develop valuable publisher relationships.',
    notFor: 'A poor fit when the expectation is immediate revenue from passive network approval or when commission cannot support the partners needed to influence demand.',
    ctaLabel: 'Discuss your affiliate programme',
    timing: [
      { value: 'First 10–15 working days', label: 'Programme economics, tracking, partner mix and priority actions reviewed after access' },
      { value: 'Several months', label: 'A realistic period for recruitment, content production, activation and partner learning' },
      { value: 'Monthly partner review', label: 'Recruitment, activation, compliance and incremental value assessed together' },
    ],
    inputs: ['Network, ecommerce, analytics and existing programme access', 'Margin, new-customer value and commission constraints', 'Product feed, promotional calendar and partner-facing assets', 'A route to approve partners, samples, content and commercial terms'],
    boundaries: ['Network fees, publisher commission and agreed tenancy are paid directly by the advertiser.', 'Partner content timelines and editorial decisions are not controlled by the agency.', 'Revenue is reviewed for incrementality, code leakage and customer quality before scale is recommended.'],
    proof: {
      label: 'Closest public example',
      title: 'AWIN programme launch and partner activation',
      text: 'An anonymised retail example shows a programme built from network setup through active-partner recruitment and first-year channel contribution.',
      href: '/case-studies#affiliate-program-launch',
      cta: 'Read the selected outcome',
      note: 'The public summary does not expose commission, tenancy, margin or attribution details. Those inputs materially affect whether an affiliate programme creates profitable incremental revenue.',
    },
  },
  'analytics-attribution': {
    audience: 'Ecommerce teams making material growth decisions from conflicting platform, store and analytics data—or preparing for a tracking, consent or platform change.',
    notFor: 'A poor fit when the goal is a dashboard with every available metric but no named decisions, owners or willingness to agree shared commercial definitions.',
    ctaLabel: 'Discuss your measurement plan',
    timing: [
      { value: 'First 10 working days', label: 'Measurement questions, data-chain risks and implementation priorities documented after access' },
      { value: 'One to two clean cycles', label: 'Post-release data should be validated before it becomes a decision baseline' },
      { value: 'Weekly implementation QA', label: 'Followed by a monthly commercial scorecard and data-quality review' },
    ],
    inputs: ['GA4, tag manager, ecommerce platform, consent and channel access', 'Definitions for revenue, customers, returns, margin and primary conversions', 'Developer access or an implementation owner for the relevant stack', 'Named decisions the measurement system needs to improve'],
    boundaries: ['Consent, legal and tax decisions remain with your qualified advisers; implementation follows the approved policy.', 'Platform licences, server-side hosting and material developer work are agreed explicitly.', 'Attribution cannot observe every influence. The deliverable is better decision confidence, not a claim of perfect truth.'],
    proof: {
      label: 'Relevant measurement example',
      title: 'Tracking repair within a multi-channel acquisition programme',
      text: 'The closest current public example is a B2B lead-generation engagement where weak conversion tracking was part of the commercial constraint.',
      href: '/case-studies#lead-gen-saas-company',
      cta: 'Review the measurement context',
      note: 'This is not an ecommerce attribution benchmark. Lead quality, sales-cycle and pipeline definitions differ; the transferable evidence is the decision-led measurement approach.',
    },
  },
};
