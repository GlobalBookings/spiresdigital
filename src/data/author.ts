export const founder = {
  name: 'Jack Chittenden',
  shortName: 'Jack',
  role: 'Founder and lead ecommerce growth strategist',
  email: 'jack@spiresdigital.com',
  location: 'Guernsey, Channel Islands',
  profileUrl: '/about/jack-chittenden',
  linkedinUrl: 'https://www.linkedin.com/in/jackchittenden',
  summary: 'Jack Chittenden is the founder of Spires Digital. He leads ecommerce growth strategy across paid media, affiliate marketing, conversion, retention and measurement.',
  experience: [
    { value: '15+', label: 'years in digital growth', context: 'Hands-on work across paid media, ecommerce, content and performance marketing.' },
    { value: '£10m+', label: 'advertising spend managed', context: 'Cumulative media spend overseen across client engagements and platforms.' },
    { value: '150+', label: 'campaigns delivered', context: 'Campaigns across acquisition, remarketing, affiliate and ecommerce growth.' },
  ],
  expertise: [
    'Google Ads and Shopping',
    'Meta advertising',
    'Affiliate programme strategy and AWIN',
    'Shopify growth and conversion',
    'Ecommerce SEO and content architecture',
    'GA4, attribution and commercial measurement',
  ],
  credentials: [
    {
      name: 'Shopify Partner',
      image: '/images/partners/shopify-partner.jpg',
      description: 'Partner-platform experience supporting Shopify builds, migrations, conversion work and ongoing ecommerce optimisation.',
      programmeUrl: 'https://help.shopify.com/en/partners/partner-program/about',
    },
    {
      name: 'AWIN Certified Agency',
      image: '/images/partners/awin-certified.png',
      description: 'Agency certification supporting affiliate programme setup, tracking, partner recruitment, activation and commercial management.',
      programmeUrl: 'https://www.awin.com/us/agency',
    },
    {
      name: 'Meta Business Partner',
      image: '/images/partners/meta-business-partner.avif',
      description: 'Platform experience across Meta campaign architecture, creative testing, catalogue advertising and measurement.',
      programmeUrl: 'https://www.facebook.com/business/marketing-partners',
    },
    {
      name: 'Microsoft Advertising Partner',
      image: '/images/partners/bing-partner.png',
      description: 'Search advertising experience across Microsoft Ads, including campaign, query and conversion optimisation.',
      programmeUrl: 'https://about.ads.microsoft.com/',
    },
  ],
};

export const founderSchema = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  '@id': 'https://spiresdigital.com/about/jack-chittenden/#person',
  name: founder.name,
  url: 'https://spiresdigital.com/about/jack-chittenden/',
  email: founder.email,
  jobTitle: founder.role,
  description: founder.summary,
  homeLocation: { '@type': 'Place', name: founder.location },
  worksFor: { '@id': 'https://spiresdigital.com/#organisation' },
  sameAs: [founder.linkedinUrl],
  knowsAbout: founder.expertise,
};
