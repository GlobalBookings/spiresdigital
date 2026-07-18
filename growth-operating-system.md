# Spires Digital growth operating system

Started: 18 July 2026
Measurement property: `G-B7840X8QFQ`

## Data status

The supplied Search Console export is a 16-month historical baseline, not post-revamp evidence. It contains the top 1,000 query rows and 296 page rows exported on 18 July 2026. Search Console tables are capped and use different aggregation rules, so query and page totals must not be treated as a complete site total or added together.

The four-week Week 8 comparison becomes eligible four complete weeks after the Week 7/8 production deployment. Until then, the monthly dashboard should show unavailable fields as blank. It must not backfill zeros or invent a conversion rate.

## Monthly scorecard

| Layer | KPI | Source | Decision it supports |
| --- | --- | --- | --- |
| Search demand | Non-brand clicks and impressions | Search Console | Is the site reaching new problem-aware buyers? |
| Search opportunity | Queries/pages in average positions 4–20 | Search Console | Which existing page deserves the next refresh? |
| Commercial discovery | Service, industry and case-study landing sessions | GA4 | Is relevant search demand reaching buying pages? |
| Useful engagement | Tool views and `tool_complete` | GA4 | Which tool earns enough use to maintain and distribute? |
| Tool intent | `tool_result_action` by copy, print and share | GA4 | Which results help a visitor make or communicate a decision? |
| Journey quality | CTA clicks into services or contact | GA4 | Which page/offer creates the next useful step? |
| Lead delivery | `lead_submit_attempt` and `generate_lead` | GA4 | Is the form working and where does delivery fail? |
| Commercial outcome | Qualified consultations and accepted scopes | Enquiry log/CRM | Is website activity creating suitable agency opportunities? |

Do not optimise for impressions, tool completions or raw leads alone. The final measure is a qualified consultation that can be connected to a useful acquisition and decision journey.

## Experiment backlog

Impact, confidence and ease are scored from 1–10. The priority score is their average. Only one material conversion experiment runs at a time.

| Priority | Experiment | Hypothesis | Primary measure | Guardrail | I | C | E | Score | Status |
| ---: | --- | --- | --- | --- | ---: | ---: | ---: | ---: | --- |
| 1 | Google Ads audit tool journey | An interactive, ecommerce-specific audit will increase useful next-step actions from audit-intent visitors versus a generic PPC article journey | Audit completion → result action → PPC/contact CTA | No rise in misleading “free audit” expectations | 9 | 9 | 7 | 8.3 | Live after deployment |
| 2 | Profit-first homepage CTA order | Leading with the calculator for problem-aware visitors may create more qualified assisted consultations than leading with a generic plan | Calculator starts and assisted `generate_lead` | Overall consultation starts | 8 | 6 | 8 | 7.3 | Queued |
| 3 | VAT guide commercial bridge | A short “what an agency can and cannot help with” block may convert relevant advertisers without weakening the tax disclaimer | Guide → PPC service CTA | Tool completion and correction feedback | 6 | 8 | 8 | 7.3 | Queued |
| 4 | Keyword-tool ecommerce edit path | Ecommerce-specific result guidance may turn high-volume tool traffic into relevant SEO discovery | Tool complete → SEO service/article CTA | Tool completion rate | 6 | 7 | 8 | 7.0 | Queued |
| 5 | Case-study proof placement | Moving relevant evidence closer to service CTAs may increase qualified contact starts | Service proof CTA → `generate_lead` | Service-page engagement | 7 | 7 | 7 | 7.0 | Queued |
| 6 | Shorter first form step | Reducing visible optional context may improve completion without reducing qualification | Submit attempt → generated lead | Context completeness and qualified rate | 7 | 5 | 5 | 5.7 | Research first |

## Experiment 01 — ecommerce Google Ads audit

**Audience:** visitors landing on or moving through the Google Ads audit guide, PPC service or tools hub.
**Change:** add `/tools/google-ads-audit-checklist/`, route the audit article’s primary next step to it and connect the result to PPC consultation.
**Hypothesis:** visitors with audit intent will complete a structured self-assessment and take a useful result action more often than they selected the previous category-level budget-planner CTA.
**Primary measure:** unique users completing `google_ads_audit_checklist`, followed by `tool_result_action`, PPC service CTA or `lead_submit_attempt`.
**Quality measure:** qualified consultations where the source page, interest or supplied context identifies a Google Ads account review.
**Guardrails:** no claim that a checklist is a completed audit; no account data requested; no public price; no performance forecast.
**Decision window:** first read after 28 complete days or 100 audit starts, whichever is later. Confirm direction after 56 days before expanding the pattern.

## Weekly review

1. Check tracking and form delivery before interpreting performance.
2. Record Search Console changes by query family and canonical page.
3. Review tool views, completions, result actions and assisted lead events.
4. Read every lead for fit; exclude spam and non-commercial requests from the qualified count.
5. Record one learning and one next decision. Do not launch a second material test while the first is unresolved.

## 30-, 60- and 90-day reviews

### 30 days

- Confirm Search Console sitemap/indexing, canonical recognition and the new audit-tool URL.
- Compare impressions/clicks for the refreshed VAT, AdSense, Meta benchmark, AWIN and RSA journeys.
- Review audit-tool completion and next-step behaviour.
- Select one title/description or internal-link improvement from real low-CTR evidence.

### 60 days

- Confirm or reject Experiment 01 using engagement and lead-quality evidence.
- Review redirected legacy URLs for signal movement to their selected destinations.
- Compare non-brand commercial discovery with tool-led discovery.
- Launch the next highest-confidence experiment only after recording the first decision.

### 90 days

- Review qualified consultations, accepted scopes and the journeys that assisted them.
- Retire or redesign tools that attract volume without useful completion or commercial relevance.
- Refresh the highest-impression position 4–20 pages and consolidate new cannibalisation pairs.
- Re-score the backlog and set the next quarterly acquisition theme.

## Required account actions

- Confirm Search Console ownership and sitemap acceptance for `https://spiresdigital.com/sitemap-index.xml`.
- Register the custom dimensions listed in `measurement-plan.md` before expecting them in explorations.
- Create **Lead journey — weekly** and **Tool journey — weekly** explorations.
- Maintain a minimal enquiry log with date, source page, interest, qualification decision and outcome. Do not put sensitive lead data into the public repository.
