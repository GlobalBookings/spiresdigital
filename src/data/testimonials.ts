export interface Testimonial {
  quote: string;
  name: string;
  role: string;
  company: string;
  service: string;
}

export const testimonials: Testimonial[] = [
  {
    quote: 'Spires Digital completely turned around our Google Ads performance. ROAS went from 1.8x to over 5x in three months. The transparency is refreshing -- we can see exactly where every penny goes.',
    name: 'Sarah T.',
    role: 'Marketing Director',
    company: 'UK Fashion Retailer',
    service: 'PPC Management',
  },
  {
    quote: 'After years of being invisible on Google, we now rank on the first page for our key terms. The technical audit alone uncovered issues three other agencies had missed.',
    name: 'James M.',
    role: 'Managing Director',
    company: 'Channel Islands Services Company',
    service: 'SEO',
  },
  {
    quote: 'The no lock-in contract policy gave us confidence to try them. Six months later, we have no intention of leaving. Our Meta campaigns are generating leads at half the cost of our previous agency.',
    name: 'Rachel K.',
    role: 'Founder',
    company: 'DTC Beauty Brand',
    service: 'Meta Ads',
  },
  {
    quote: 'They launched our affiliate program from scratch and it now accounts for 25% of our revenue. The partner recruitment and management has been excellent.',
    name: 'David P.',
    role: 'E-Commerce Manager',
    company: 'Online Retailer',
    service: 'Affiliate Management',
  },
  {
    quote: 'Our Shopify migration was seamless. The new store loads three times faster and our conversion rate doubled within the first month. The ongoing support has been brilliant.',
    name: 'Emma L.',
    role: 'Owner',
    company: 'Artisan Gift Shop',
    service: 'Shopify Builds',
  },
  {
    quote: 'What sets Spires Digital apart is the honesty. They told us to reduce spend on one channel because the data showed it wasn\'t working, and redirected budget to what was. That saved us thousands.',
    name: 'Mark W.',
    role: 'CEO',
    company: 'B2B SaaS Platform',
    service: 'PPC Management',
  },
];
