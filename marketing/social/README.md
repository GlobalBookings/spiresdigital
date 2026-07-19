# Spires Digital social media plan — Q3 2026 reactivation

## Outcome

Run a four-week social campaign that reintroduces Spires Digital through useful ecommerce decisions, sends qualified visitors into free tools and expert guides, and creates a clear path to a consultation without publishing service rates.

Campaign dates: **21 July–15 August 2026**  
Primary site: **spiresdigital.com**  
Channels: Instagram, X, Threads, Facebook and LinkedIn  
Scheduled posts: **52**

## Positioning and audience

Primary audience:

- ecommerce founders and commercial leads who are spending on growth but lack a joined-up profit view;
- marketing leads responsible for paid media, SEO, Shopify/CRO, retention, affiliates or attribution;
- UK and Guernsey businesses actively diagnosing inefficient acquisition or unclear measurement.

Core position: **Spires Digital identifies the commercial constraint before recommending channel activity.** The voice is experienced, calm and specific. It avoids hype, guarantees, unexplained benchmarks and generic “scale your brand” language.

## Content system

The campaign follows a 70/20/10 balance:

- **70% useful action:** free calculators, audits and planning tools;
- **20% experienced point of view:** evidence-led guidance across PPC, Meta, affiliate, SEO, retention and attribution;
- **10% commercial invitation:** consultation-first growth review with written scope and quote only after context is understood.

Weekly cadence:

- **Tuesday:** visual, tool-led post on all five channels;
- **Thursday:** experienced point-of-view post on LinkedIn, Facebook, X and Threads;
- **Saturday:** practical guide or decision aid on LinkedIn, Facebook, X and Threads.

Publishing is staggered by network in Europe/Guernsey time. The Buffer file stores UTC timestamps because the API requires ISO 8601 UTC times.

## Four-week calendar

| Date | Theme | Destination | Media |
|---|---|---|---|
| 21 Jul | Revenue is not profit | Ecommerce profit calculator | Profit-system artwork |
| 23 Jul | Diagnose the constraint first | Growth assessment | Text |
| 25 Jul | Budget as a commercial hypothesis | Channel budget planner | Text |
| 28 Jul | Audits should produce decisions | Google Ads audit checklist | Paid-media audit artwork |
| 30 Jul | Meta creative testing that compounds learning | Creative testing guide | Text |
| 1 Aug | Launching an affiliate programme responsibly | Affiliate launch guide | Text |
| 4 Aug | One connected ecommerce growth system | Ecommerce industry page | Full-funnel artwork |
| 6 Aug | Shopify SEO is not a plugin | Shopify SEO guide | Text |
| 8 Aug | Retention responds to behaviour | Email and retention service | Text |
| 11 Aug | Paid-media waste is not only bidding | Waste estimator | Growth-diagnostic artwork |
| 13 Aug | Reporting is not measurement | Attribution guide | Text |
| 15 Aug | Consultation-first growth review | Contact page | Text |

Each outbound link includes `utm_source`, `utm_medium=social`, `utm_campaign=q3_2026_reactivation` and a content identifier. Instagram captions use a memorable direct path because caption links are not clickable.

## Measurement

Primary measures:

1. Engaged sessions from `q3_2026_reactivation` in GA4.
2. Tool starts and completed results from social visitors.
3. Visits from tools or guides into `/contact/`.
4. Qualified enquiries where `utm_source` and `lead_interest` identify the originating channel and content.

Secondary measures: saves, replies, profile visits, link clicks and meaningful comments. Raw impressions are context, not the success definition.

## Community and lead handling

- Check replies and comments on publishing days.
- Answer useful questions in public when no private account information is involved.
- Move commercially sensitive details to email or the consultation form.
- Do not quote service prices in comments or direct messages; understand the scope first.
- Record repeated questions as candidates for the next tool, guide or FAQ.

## Files

- `buffer-campaign-2026-q3.mjs`: final channel copy, tracked links, timestamps and media URLs.
- `schedule-buffer.mjs`: validation and idempotent Buffer scheduling script. It requires `BUFFER_API_KEY` at runtime and never stores the key.
- `public/images/social/`: four square campaign graphics.

Dry-run validation:

```sh
node marketing/social/schedule-buffer.mjs
```

Scheduling is an explicit operation:

```sh
BUFFER_API_KEY=... node marketing/social/schedule-buffer.mjs --apply
```
