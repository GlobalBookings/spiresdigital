export interface BlogPost {
  slug: string;
  title: string;
  description: string;
  date: string;
  category: string;
  image: string;
  readTime: string;
}

export const blogPosts: BlogPost[] = [
  {
    slug: 'google-ads-quality-score-guide',
    title: 'The Complete Guide to Google Ads Quality Score in 2026',
    description: 'Everything you need to know about Quality Score: what it is, how it affects your CPCs, and proven strategies to improve it.',
    date: '2026-03-10',
    category: 'PPC',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80',
    readTime: '8 min read',
  },
  {
    slug: 'meta-ads-creative-testing-framework',
    title: 'How to Build a Meta Ads Creative Testing Framework',
    description: 'A systematic approach to testing ad creative on Facebook and Instagram that eliminates guesswork and scales winners faster.',
    date: '2026-03-05',
    category: 'Meta Ads',
    image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&q=80',
    readTime: '7 min read',
  },
  {
    slug: 'seo-technical-audit-checklist',
    title: 'The Technical SEO Audit Checklist for 2026',
    description: 'A step-by-step technical SEO audit checklist covering crawlability, Core Web Vitals, schema markup, and everything in between.',
    date: '2026-02-28',
    category: 'SEO',
    image: 'https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=800&q=80',
    readTime: '10 min read',
  },
  {
    slug: 'performance-max-campaigns-guide',
    title: 'Performance Max Campaigns: A Practical Guide for E-Commerce',
    description: 'How to structure, launch, and optimise Performance Max campaigns to drive profitable e-commerce growth on Google Ads.',
    date: '2026-02-20',
    category: 'PPC',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80',
    readTime: '9 min read',
  },
  {
    slug: 'affiliate-program-setup-guide',
    title: 'How to Launch a Profitable Affiliate Program',
    description: 'From choosing the right network to recruiting partners and setting commission structures — everything you need to launch an affiliate program.',
    date: '2026-02-15',
    category: 'Affiliate Marketing',
    image: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=800&q=80',
    readTime: '8 min read',
  },
  {
    slug: 'ga4-conversion-tracking-setup',
    title: 'GA4 Conversion Tracking: Complete Setup Guide',
    description: 'How to set up proper conversion tracking in GA4 and Google Ads to make data-driven decisions about your marketing spend.',
    date: '2026-02-10',
    category: 'Analytics',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80',
    readTime: '7 min read',
  },
];
