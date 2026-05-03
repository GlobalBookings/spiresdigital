// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://spiresdigital.com',
  output: 'static',
  integrations: [
    sitemap({
      changefreq: 'weekly',
      priority: 0.7,
      lastmod: new Date(),
      filter: (page) => !page.includes('/404'),
      serialize(item) {
        if (item.url === 'https://spiresdigital.com/') {
          item.priority = 1.0;
          item.changefreq = 'daily';
        } else if (item.url.includes('/services/') && !item.url.endsWith('/services/')) {
          item.priority = 0.9;
          item.changefreq = 'monthly';
        } else if (item.url.endsWith('/services/')) {
          item.priority = 0.95;
          item.changefreq = 'weekly';
        } else if (item.url.includes('/industries/')) {
          item.priority = 0.85;
          item.changefreq = 'monthly';
        } else if (item.url.endsWith('/blog/')) {
          item.priority = 0.9;
          item.changefreq = 'daily';
        } else if (item.url.includes('/blog/')) {
          item.priority = 0.8;
          item.changefreq = 'weekly';
        } else if (item.url.includes('/case-studies')) {
          item.priority = 0.8;
          item.changefreq = 'monthly';
        } else if (item.url.includes('/contact')) {
          item.priority = 0.8;
          item.changefreq = 'monthly';
        } else if (item.url.includes('/how-we-work')) {
          item.priority = 0.75;
          item.changefreq = 'monthly';
        } else if (item.url.includes('/about')) {
          item.priority = 0.6;
          item.changefreq = 'monthly';
        } else if (item.url.includes('/privacy') || item.url.includes('/terms')) {
          item.priority = 0.3;
          item.changefreq = 'yearly';
        }
        return item;
      },
    }),
  ],
});
