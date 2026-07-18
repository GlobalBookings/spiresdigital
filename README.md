# Spires Digital website

Static Astro website for [spiresdigital.com](https://spiresdigital.com), deployed from `main` to DigitalOcean App Platform.

## Safe build and verification

The production build is pinned to Node 22 and the committed npm lockfile.

```sh
npm ci
npm run build
npm run audit:content
npm run audit:seo
npm audit --omit=dev
```

The SEO audit checks rendered metadata, canonicals, H1s, sitemap coverage, internal links, redirects and domain identity. The content audit checks article completeness and duplicate slugs or titles.

## Production configuration

- Canonical domain: `https://spiresdigital.com`
- Analytics measurement ID: `G-B7840X8QFQ`
- Indexable URLs: generated in `dist/sitemap-index.xml`
- Legacy URL mapping: `astro.config.mjs`
- DigitalOcean routing, permanent redirects, domain aliases and deployment alerts: `app-spec.yaml`
- Lead form: FormSubmit, delivered to `jack@spiresdigital.com`
- Call booking: Calendly

DigitalOcean deploy-on-push rebuilds the static site, but it does not automatically apply repository changes to `app-spec.yaml`. If that file changes, update the app spec in DigitalOcean separately. The checked-in spec includes the `www` alias and server-side `301` rules for all legacy URLs; the `www` DNS record must also point to the DigitalOcean app.

## Maintenance handover

The site was fully reviewed on 18 July 2026. If it is left unattended, the next useful review is January 2027 or sooner if a platform, service, domain or contact detail changes.

At that review:

1. Run the five commands above and update dependencies only after a clean local build.
2. Crawl the live sitemap and confirm every listed URL returns `200` with its self-referencing canonical.
3. Confirm legacy URLs return a server-side `301`, not only an HTML meta refresh.
4. Confirm both the root and `www` domains resolve to the canonical HTTPS domain.
5. Submit one real test enquiry and verify email delivery; then confirm the Calendly booking URL still works.
6. Review articles with `2026` in the title or URL and recheck platform costs, tax guidance, benchmarks and official-source links.
7. Review Google Search Console and GA4 before deleting, redirecting or materially retitling pages that already receive impressions.

Spires Digital does not publish a standard service rate. Commercial pages should continue to request a consultation before a written scope and quote.
