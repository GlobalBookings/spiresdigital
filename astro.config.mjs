// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://spiresdigital.com',
  output: 'static',
  trailingSlash: 'always',
  redirects: {
    '/about-us': '/about',
    '/affiliate-marketing-services': '/services/affiliate-management',
    '/free-marketing-audit': '/contact',
    '/roi-calculator': '/tools/ecommerce-profit-calculator',
    '/are-google-ads-vatable': '/tools/google-ads-vat-guide',
    '/are-google-ads-vatable-uk': '/tools/google-ads-vat-guide',
    '/do-google-ads-charge-vat': '/tools/google-ads-vat-guide',
    '/understanding-vat-on-google-ads-what-you-need-to-know': '/tools/google-ads-vat-guide',
    '/digital-marketing-agency-in-lichfield-the-importance-of-digital': '/locations/lichfield',
    '/services/shopify-builds': '/services/cro-shopify',
  },
  integrations: [
    sitemap({
      filter: (page) => !page.includes('/404') && !page.includes('/thank-you'),
      serialize(item) {
        if (item.url === 'https://spiresdigital.com/') {
          item.priority = 1.0;
        } else if (item.url.includes('/services/') && !item.url.endsWith('/services/')) {
          item.priority = 0.9;
        } else if (item.url.endsWith('/services/')) {
          item.priority = 0.95;
        } else if (item.url.includes('/tools/')) {
          item.priority = 0.85;
        } else if (item.url.includes('/industries/')) {
          item.priority = 0.85;
        } else if (item.url.includes('/locations/')) {
          item.priority = 0.7;
        } else if (item.url.endsWith('/blog/')) {
          item.priority = 0.9;
        } else if (item.url.includes('/blog/')) {
          item.priority = 0.8;
        } else if (item.url.includes('/case-studies')) {
          item.priority = 0.8;
        } else if (item.url.includes('/contact')) {
          item.priority = 0.8;
        } else if (item.url.includes('/how-we-work')) {
          item.priority = 0.75;
        } else if (item.url.includes('/about')) {
          item.priority = 0.6;
        } else if (item.url.includes('/privacy') || item.url.includes('/terms')) {
          item.priority = 0.3;
        }
        return item;
      },
    }),
  ],
});
