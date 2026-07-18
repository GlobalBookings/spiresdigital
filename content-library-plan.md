# Content library operating plan

Updated: 18 July 2026
Source window: 16-month Google Search Console export supplied for spiresdigital.com

## What the evidence says

The export contains 1,000 query rows and 296 page rows. The strongest opportunities are concentrated rather than spread evenly across the library:

| Search job | Impressions | Current decision |
| --- | ---: | --- |
| Check keyword density | 11,095 across 34 query variants | Keep one tool-led journey at `/seo-keyword-density-checker/`; strengthen links from SEO content and service pages |
| Find a digital marketing or SEO agency serving Lichfield | 8,257 across 43 variants | Keep `/locations/lichfield/` as service coverage, with Guernsey clearly stated as the operating base |
| Understand Meta ad credits, failed billing or non-delivery | 1,869 across 38 variants | Keep the consolidated explainer at `/what-is-the-facebook-ad-credit-code/` |
| Understand VAT on Google Ads | 1,681 across 22 variants | Keep the sourced guide at `/tools/google-ads-vat-guide/`; retain the four legacy redirects |
| Find out whether AdSense pays through PayPal | 1,342 across 14 variants | Refresh the existing answer against current Google guidance; distinguish PayPal Hyperwallet and UK availability |

The library has broad coverage, but search demand rewards a smaller number of clear, maintained answers. New articles should not be published simply to fill a calendar.

## Week 6 decisions

| Existing route or cluster | Action | Destination or rationale |
| --- | --- | --- |
| `/blog/affiliate-program-setup-guide/` | Merge and redirect | Consolidated into the more complete `/blog/how-to-launch-affiliate-program/` |
| Facebook Ads benchmark article | Retain and materially refresh | Replaced unsupported industry averages with break-even CPA, ROAS and diagnostic formulas |
| Responsive search ads article | Retain and materially refresh | Rewritten against current Google guidance; arbitrary time and impression thresholds removed |
| AWIN setup article | Retain and refresh priority sections | Corrected MasterTag and server-side tracking language; removed stale fee and approval estimates |
| AdSense PayPal answer | Retain and correct | Google now supports PayPal Hyperwallet in limited countries; UK-specific answer added |
| Old social CTA article | Redirect | `/blog/facebook-ad-copy-guide/` |
| Old content analytics article | Redirect | `/blog/marketing-attribution-which-channels-work/` |
| Old Google Ads shared-budget article | Redirect | `/blog/how-to-calculate-google-ads-budget/` |
| Old GPT-generated Shopping-title article | Redirect | `/blog/google-shopping-shopify-setup/` |
| Old SEO/content strategy article | Redirect | `/blog/shopify-seo-guide/` |
| Old Facebook conversion article | Redirect | `/blog/facebook-ads-ecommerce-full-funnel/` |
| Old Facebook browsing-history article | Redirect | `/blog/facebook-ads-audience-targeting-2026/` |
| `/google-marketing/`, `/learn/`, `/digital-marketing-guide/` | Redirect | PPC service, blog hub and ecommerce industry hub respectively |
| Old GPT model news, certification, carbon-offset and nonprofit posts | Retire without a forced redirect | No close equivalent search job; redirecting these to generic commercial pages would create a poor match |

## The rule for every retained article

Each article keeps one primary search job, expressed by its title and description. Its category supplies a relevant next step, with page-level overrides where a specific tool is the better action:

- PPC → budget planner and PPC management
- Meta Ads → ecommerce profit calculator and Meta Ads management
- Affiliate Marketing → affiliate management and consultation
- Shopify and ecommerce → growth assessment and CRO/Shopify support
- SEO → keyword-density checker and ecommerce SEO
- Analytics → analytics and attribution support
- Strategy → growth assessment and consultation

The site now renders these next steps from one maintained mapping rather than a generic tools/contact block on every article.

## Ongoing editorial review

Run `npm run audit:content` whenever article metadata or bodies change. It blocks duplicate slugs, duplicate titles and missing bodies, and prints the review queue for dated titles or articles without a useful in-body path.

Use this order for monthly refresh work:

1. Search Console pages with high impressions and positions 4–20.
2. Pages where platform or legal facts have changed.
3. Pages with unsupported numerical claims, invented benchmarks or absolute promises.
4. Overlapping articles that serve the same search job.
5. Articles with traffic but no relevant tool, service or decision path.

Record the source and review date inside platform-sensitive articles. A title year is not evidence that a page is current.

## Measurement checkpoint

Compare the following after 28 and 56 days:

- clicks and average position for the refreshed Meta benchmark, RSA, AWIN and AdSense pages;
- impressions moving from redirected legacy URLs to the selected destination;
- article-next-step clicks by category and article slug;
- consultation starts assisted by an article;
- new cannibalisation pairs in Search Console query/page exports.

Do not reverse a consolidation based on a few days of volatility. Investigate indexing, redirect recognition and query-to-page movement before changing course.
