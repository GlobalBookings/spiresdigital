import { readFile, readdir } from 'node:fs/promises';
import { join, relative, sep } from 'node:path';

const root = new URL('../dist/', import.meta.url);
const site = 'https://spiresdigital.com';

async function walk(directory) {
  const entries = await readdir(directory, { withFileTypes: true });
  const nested = await Promise.all(entries.map(entry => entry.isDirectory() ? walk(join(directory, entry.name)) : [join(directory, entry.name)]));
  return nested.flat();
}

function routeFromFile(file) {
  const path = relative(root.pathname, file).split(sep).join('/');
  if (path === 'index.html') return '/';
  if (path.endsWith('/index.html')) return `/${path.slice(0, -10)}`;
  return `/${path}`;
}

function decode(value = '') {
  return value.replace(/&amp;/g, '&').replace(/&quot;/g, '"').replace(/&#39;/g, "'").replace(/&lt;/g, '<').replace(/&gt;/g, '>');
}

function match(html, expression) {
  return decode(html.match(expression)?.[1]?.trim() || '');
}

const files = (await walk(root.pathname)).filter(file => file.endsWith('.html'));
const pages = await Promise.all(files.map(async file => {
  const html = await readFile(file, 'utf8');
  return {
    file,
    route: routeFromFile(file),
    html,
    redirect: /http-equiv=["']refresh["']/i.test(html),
    noindex: /<meta\s+name=["']robots["'][^>]+content=["'][^"']*noindex/i.test(html),
    title: match(html, /<title>([\s\S]*?)<\/title>/i),
    description: match(html, /<meta\s+name="description"\s+content="([^"]*)"/i),
    canonical: match(html, /<link\s+rel="canonical"\s+href="([^"]+)"/i),
    h1s: (html.match(/<h1(?:\s[^>]*)?>/gi) || []).length,
    schemas: [...html.matchAll(/<script\s+type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/gi)].map(item => item[1]),
    missingAlt: [...html.matchAll(/<img\b[^>]*>/gi)].filter(item => !/\salt=("[^"]*"|'[^']*')/i.test(item[0])).length,
  };
}));

const routeSet = new Set(pages.map(page => page.route.replace(/index\.html$/, '')));
const indexable = pages.filter(page => !page.redirect && !page.noindex && page.route !== '/404.html');
const sitemapXml = await readFile(new URL('sitemap-0.xml', root), 'utf8');
const sitemapRoutes = new Set([...sitemapXml.matchAll(/<loc>https:\/\/spiresdigital\.com([^<]*)<\/loc>/g)].map(match => match[1] || '/'));
const errors = [];
const warnings = [];
const inbound = new Map(indexable.map(page => [page.route, new Set()]));

for (const source of indexable) {
  for (const hrefMatch of source.html.matchAll(/<a\s[^>]*href=["']([^"']+)["']/gi)) {
    const href = decode(hrefMatch[1]);
    if (!href.startsWith('/') || href.startsWith('//')) continue;
    const clean = href.split(/[?#]/)[0];
    if (!clean || /\.[a-z0-9]{2,5}$/i.test(clean)) continue;
    const target = clean === '/' ? '/' : clean.endsWith('/') ? clean : `${clean}/`;
    if (target !== source.route && inbound.has(target)) inbound.get(target).add(source.route);
  }
}

for (const page of indexable) {
  const expectedCanonical = `${site}${page.route}`;
  if (!page.title) errors.push(`${page.route}: missing title`);
  if (!page.description) errors.push(`${page.route}: missing meta description`);
  if (page.canonical !== expectedCanonical) errors.push(`${page.route}: canonical is ${page.canonical || 'missing'}; expected ${expectedCanonical}`);
  if (page.h1s !== 1) errors.push(`${page.route}: expected one H1; found ${page.h1s}`);
  if (page.missingAlt) errors.push(`${page.route}: ${page.missingAlt} image(s) missing an alt attribute`);
  if (!sitemapRoutes.has(page.route)) errors.push(`${page.route}: indexable page missing from sitemap`);
  if (page.title.length > 70) warnings.push(`${page.route}: title is ${page.title.length} characters`);
  if (page.description.length < 70 || page.description.length > 165) warnings.push(`${page.route}: description is ${page.description.length} characters`);
  if (page.route !== '/' && !(inbound.get(page.route)?.size)) warnings.push(`${page.route}: no internal links found from another indexable page`);
  for (const value of page.schemas) {
    try { JSON.parse(value); } catch { errors.push(`${page.route}: invalid JSON-LD`); }
  }

  for (const hrefMatch of page.html.matchAll(/<a\s[^>]*href=["']([^"']+)["']/gi)) {
    const href = decode(hrefMatch[1]);
    if (!href.startsWith('/') || href.startsWith('//')) continue;
    const clean = href.split(/[?#]/)[0];
    if (!clean || /\.[a-z0-9]{2,5}$/i.test(clean)) continue;
    const target = clean.endsWith('/') ? clean : `${clean}/`;
    if (!routeSet.has(target) && !routeSet.has(clean)) errors.push(`${page.route}: broken internal link to ${href}`);
  }
}

for (const [field, getter] of [['title', page => page.title], ['description', page => page.description]]) {
  const values = new Map();
  for (const page of indexable) {
    const value = getter(page);
    if (!value) continue;
    values.set(value, [...(values.get(value) || []), page.route]);
  }
  for (const routes of values.values()) if (routes.length > 1) errors.push(`duplicate ${field}: ${routes.join(', ')}`);
}

const retiredDomainPages = pages.filter(page => /spiresdigital\.gg/i.test(page.html));
if (retiredDomainPages.length) errors.push(`retired .gg domain found in: ${retiredDomainPages.map(page => page.route).join(', ')}`);

console.log(`SEO audit: ${pages.length} rendered pages; ${indexable.length} indexable; ${pages.filter(page => page.redirect).length} redirects.`);
console.log(`Sitemap: ${sitemapRoutes.size} URLs.`);
if (warnings.length) {
  console.log(`Warnings (${warnings.length}):`);
  warnings.forEach(warning => console.log(`- ${warning}`));
}
if (errors.length) {
  console.error(`Errors (${errors.length}):`);
  errors.forEach(error => console.error(`- ${error}`));
  process.exitCode = 1;
} else {
  console.log('Critical checks passed: metadata, canonicals, H1s, sitemap coverage, internal links and domain identity.');
}
