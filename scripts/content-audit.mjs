import { readFile } from 'node:fs/promises';
import { resolve } from 'node:path';

const root = resolve(new URL('..', import.meta.url).pathname);
const dataFiles = [
  'src/data/blogPosts.ts',
  'src/data/blogContent.ts',
  'src/data/blogContentPpc.ts',
  'src/data/blogContentPpc2.ts',
  'src/data/blogContentPpc3.ts',
  'src/data/blogContentMeta.ts',
  'src/data/blogContentMeta2.ts',
  'src/data/blogContentMixed.ts',
  'src/data/blogContentAffiliate.ts',
  'src/data/blogContentShopify.ts',
  'src/data/blogContentStrategy.ts',
];

const sources = await Promise.all(dataFiles.map(async file => ({ file, text: await readFile(resolve(root, file), 'utf8') })));
const metadata = [];
const content = new Map();

for (const { file, text } of sources) {
  for (const match of text.matchAll(/\{\s*slug:\s*'([^']+)'([\s\S]*?)readTime:\s*'[^']+'\s*,?\s*\}/g)) {
    const block = match[0];
    const readString = key => {
      const value = block.match(new RegExp(`${key}:\\s*(?:'((?:\\\\.|[^'])*)'|"((?:\\\\.|[^"])*)")`));
      return (value?.[1] || value?.[2] || '').replace(/\\'/g, "'").replace(/\\"/g, '"');
    };
    metadata.push({ file, slug: match[1], title: readString('title'), description: readString('description'), date: readString('date'), category: readString('category') });
  }
  for (const match of text.matchAll(/^\s*'([^']+)':\s*`([\s\S]*?)^\s*`,/gm)) {
    content.set(match[1], { file, html: match[2] });
  }
}

const errors = [];
const warnings = [];
const slugGroups = Map.groupBy(metadata, post => post.slug);
const titleGroups = Map.groupBy(metadata, post => post.title.toLowerCase().replace(/[^a-z0-9]+/g, ' ').trim());
const categories = new Map();

for (const [slug, posts] of slugGroups) {
  if (posts.length > 1) errors.push(`duplicate slug: ${slug}`);
  if (!content.has(slug)) errors.push(`missing article body: ${slug}`);
}

for (const posts of titleGroups.values()) {
  if (posts.length > 1) errors.push(`duplicate title: ${posts.map(post => post.slug).join(', ')}`);
}

for (const post of metadata) {
  categories.set(post.category, (categories.get(post.category) || 0) + 1);
  const body = content.get(post.slug)?.html || '';
  const datedTitle = post.title.match(/\b20\d{2}\b/)?.[0];
  if (datedTitle && datedTitle !== post.date.slice(0, 4)) warnings.push(`${post.slug}: title year ${datedTitle} differs from review year ${post.date.slice(0, 4)}`);
  if (!/(href="\/(?:services|tools|contact|seo-keyword-density-checker)|href="https?:\/\/)/.test(body)) warnings.push(`${post.slug}: no commercial or primary-source next link in body`);
}

const orphanBodies = [...content.keys()].filter(slug => !slugGroups.has(slug));
if (orphanBodies.length) warnings.push(`orphan article bodies: ${orphanBodies.join(', ')}`);

console.log(`Content audit: ${metadata.length} articles across ${categories.size} categories; ${content.size} article bodies.`);
console.log(`Categories: ${[...categories.entries()].sort().map(([category, count]) => `${category} ${count}`).join(', ')}.`);
if (warnings.length) {
  console.log(`Review queue (${warnings.length}):`);
  warnings.forEach(warning => console.log(`- ${warning}`));
}
if (errors.length) {
  console.error(`Errors (${errors.length}):`);
  errors.forEach(error => console.error(`- ${error}`));
  process.exitCode = 1;
} else {
  console.log('Critical checks passed: unique slugs, unique titles and complete article bodies.');
}
