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
    '/services-overview': '/services',
    '/contact-us': '/contact',
    '/services/web-development': '/services/cro-shopify',
    '/email-marketing-campaign-automation-tools': '/blog/shopify-email-marketing-klaviyo',
    '/email-marketing-campaign-automation-tools-5': '/blog/shopify-email-marketing-klaviyo',
    '/why-facebook-ads-payment-failed-2': '/what-is-the-facebook-ad-credit-code',
    '/why-facebook-ads-active-but-not-running': '/what-is-the-facebook-ad-credit-code',
    '/when-does-facebook-ads-charge': '/what-is-the-facebook-ad-credit-code',
    '/blog/affiliate-program-setup-guide': '/blog/how-to-launch-affiliate-program',
    '/12-call-to-action-examples-how-to-write-the-best-social-cta': '/blog/facebook-ad-copy-guide',
    '/measuring-content-performance-with-analytics-tools-5': '/blog/marketing-attribution-which-channels-work',
    '/unlocking-the-power-of-shared-budgets-in-google-ads-a-comprehensive-guide': '/blog/how-to-calculate-google-ads-budget',
    '/rewriting-titles-for-google-shopping-with-gtp-3-openai': '/blog/google-shopping-shopify-setup',
    '/seo-integration-in-content-strategy-for-higher-rankings-2': '/blog/shopify-seo-guide',
    '/why-facebook-ads-not-converting': '/blog/facebook-ads-ecommerce-full-funnel',
    '/are-facebook-ads-based-on-browsing-history': '/blog/facebook-ads-audience-targeting-2026',
    '/google-marketing': '/services/ppc-management',
    '/learn': '/blog',
    '/digital-marketing-guide': '/industries/ecommerce',
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
