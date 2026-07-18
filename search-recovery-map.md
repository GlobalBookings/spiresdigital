# Search Recovery Map

This is the public, maintainable route map created during Week 3. The underlying 16-month Google Search Console export and query-level analysis remain private and outside version control.

## Restored at the original URL

| Historical route | Search job now served |
|---|---|
| `/seo-keyword-density-checker/` | Private browser-based repetition, target-phrase and content analysis |
| `/can-google-adsense-pay-to-paypal/` | Current answer linked to official Google payment guidance |
| `/can-google-adsense-detect-vpn/` | Current, policy-safe explanation of AdSense invalid-traffic monitoring |
| `/what-is-the-facebook-ad-credit-code/` | Current Meta ad-credit, billing and payment troubleshooting guide |

## Consolidated with redirects

| Historical intent | Destination |
|---|---|
| Google Ads VAT variants | `/tools/google-ads-vat-guide/` |
| Old Lichfield agency article | `/locations/lichfield/` |
| Old service overview | `/services/` |
| Old web-development service | `/services/cro-shopify/` |
| Old email-automation articles | `/blog/shopify-email-marketing-klaviyo/` |
| Old Meta credit, charge and payment-failure articles | `/what-is-the-facebook-ad-credit-code/` |
| Old contact and audit routes | `/contact/` |

## Intentionally retired

Historical pages about obsolete AI model releases, general nonprofit software and unrelated environmental topics remain retired. Recreating them would attract demand outside the agency's ecommerce focus and weaken the site's topical structure.

## Release check

Run:

```bash
npm run build
npm run audit:seo
```

The audit checks rendered metadata, canonicals, H1s, sitemap coverage, internal links and accidental use of the retired `.gg` domain. Search Console indexing and canonical decisions still need to be reviewed in the live property after deployment.
