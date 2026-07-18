# Spires Digital Growth Delivery Plan

This is the working sequence after the ecommerce site revamp is deployed. Each week ends with something measurable, reviewable and safe to release. The order matters: measurement and lead handling come before traffic growth so that later decisions are based on useful evidence.

## Foundation completed

- Ecommerce-focused positioning across acquisition, conversion, retention and measurement
- Seven service pages, six interactive tools and a consolidated lead journey
- GA4 tag `G-B7840X8QFQ`, consent controls, attribution capture and core lead/tool events
- Canonical `spiresdigital.com` identity, redirects, sitemap, structured data and `llms.txt`
- Consultation-first pricing; no public Spires Digital rate card

## Week 1 — Deploy, measure and establish the baseline

**Outcome:** a trustworthy post-launch baseline and a short list of issues that need immediate attention.

- [x] Merge and deploy the current website pull request
- [x] Test contact-form validation, the thank-you route, Calendly and email destinations, and all five live tool result states
- [x] Verify consent gating: no Google tag before consent; `G-B7840X8QFQ` is injected only after acceptance
- [ ] Confirm `cta_click`, `tool_complete`, `generate_lead` and `lead_confirmation_view` in GA4 DebugView
- [x] Confirm the public sitemap, robots file, homepage canonical and primary production URLs
- [ ] Confirm Search Console ownership, sitemap acceptance and post-launch indexing status in the property
- [x] Save the private 16-month Search Console baseline outside version control
- [x] Create a launch annotation using the deployment date and merge commit
- [x] Recover the highest-clicking legacy URL that returned a 404 after launch
- [ ] Send and receive one live test lead through the production form
- [ ] Configure and validate a `www.spiresdigital.com` alias; the apex domain and HTTP-to-HTTPS redirect already work

**18 July 2026 checkpoint:** the revamp is live from merge commit `bcc5a73`; public routes, form validation, consent gating and all five tools pass. The remaining checks require GA4/Search Console account access or a real form submission. Search Console export files and the detailed baseline workbook are intentionally excluded from the public repository.

**Done when:** one live test lead is received, expected GA4 events are visible, the sitemap is accepted and the baseline is saved.

## Week 2 — Improve the lead journey

**Outcome:** fewer dead ends and clearer evidence about which pages create qualified conversations.

- [x] Review the homepage, service pages, tools and articles as separate paths into contact
- [x] Preserve landing page, source page, service/tool interest, referring domain and campaign context through the enquiry
- [x] Show retained context on the form and preselect the most relevant growth constraint where the journey provides a strong signal
- [x] Keep the visible form length unchanged while deriving constraint summary and context-completeness fields from existing answers
- [x] Separate submission attempts from confirmed `generate_lead` events and remove duplicate/pre-consent event queuing
- [x] Verify the FormSubmit endpoint is reachable and add an eight-second direct-email recovery path without clearing typed answers
- [x] Document the GA4 custom dimensions and weekly lead report by landing page, source page, interest and acquisition source
- [ ] Send and receive a production enquiry to confirm the final email-delivery hop

**Week 2 checkpoint:** local rendered tests cover service-to-contact and campaign-to-tool-to-contact journeys, automatic constraint context, hidden attribution, native validation, submission-state handling and the delivery fallback. The remaining production submission is intentionally held for explicit approval because it sends a real email.

**Done when:** every enquiry can be traced to its originating journey and categorised by commercial need.

## Week 3 — Search Console recovery and technical SEO

**Outcome:** protect existing demand and concentrate authority on the correct pages.

- [x] Compare the 16-month Search Console export with post-launch URLs
- [x] Check redirects for historical URLs with clicks or meaningful impressions
- [x] Restore the strongest useful legacy tool and two factual legacy answers at their original URLs
- [x] Consolidate obsolete service, contact, email and Meta billing URLs with explicit redirects
- [x] Review titles and descriptions for high-impression, low-CTR commercial queries
- [x] Strengthen the Lichfield landing page around its demonstrated query family without claiming a local office
- [x] Validate internal links, canonicals, metadata, sitemap coverage and broken-page references in the rendered site

**Week 3 checkpoint:** the private 16-month export was mapped against the current site. Useful historical demand now has an intentional live page or redirect, while unrelated AI and nonprofit articles remain retired rather than diluting the ecommerce focus. The repeatable technical audit covers every rendered HTML page and the public search-recovery map excludes raw Search Console data.

**Done when:** valuable historical URLs have a valid destination and the priority indexation issues have owners and fixes.

## Week 4 — Service-page conversion and proof

**Outcome:** each service page answers the questions a qualified ecommerce buyer needs before booking a consultation.

- [x] Review every service across the acquire, convert, retain and measure families
- [x] State who each service is built for and when it is not the right starting point
- [x] Add client inputs, delivery boundaries and realistic time-to-learning statements
- [x] Connect each service to the closest honest public evidence and explain the limitations of anonymised outcomes
- [x] Make the absence of a direct public retention case study explicit instead of stretching unrelated proof
- [x] Replace generic hero and final CTAs with service-specific consultation wording and event names
- [x] Add focused-first-phase, cross-service diagnosis and consultation-first pricing objections to every FAQ set
- [x] Validate all seven page variants, proof anchors, FAQ interaction, contact attribution and rendered SEO

**Week 4 checkpoint:** all seven service pages now answer the practical pre-consultation questions: audience, poor-fit conditions, deliverables, required access, separate scope, evidence window, proof limitations and next action. Each page contains three delivery expectations, four client inputs, three written boundaries and seven FAQs. Public proof is linked only where the context is relevant; the retention evidence gap remains visible until a suitable case can be published with permission.

**Done when:** each service page has a clear audience, problem, deliverable, evidence path and consultation CTA.

## Week 5 — Make the tools earn repeat use

**Outcome:** the tools become useful acquisition assets rather than one-off calculators.

- Analyse completion rate and exit points for each tool
- Add printable or copyable result summaries where useful
- Improve recommendations so outputs lead to a clear next decision
- Create focused landing content and internal links for the strongest tool-search queries
- Test a voluntary result-sharing route without gating the calculator

**Done when:** each tool has a defined user job, completion event, follow-on action and distribution plan.

## Week 6 — Content consolidation and refresh

**Outcome:** fewer competing pages, better commercial relevance and a maintainable editorial library.

- Group articles by query intent and identify cannibalisation
- Refresh high-impression pages sitting just outside the strongest positions
- Consolidate or redirect thin, overlapping and outdated posts
- Review factual claims, dates, platform changes and unsupported performance language
- Strengthen links from informational articles into relevant tools and services

**Done when:** every retained article has a distinct search job, current evidence and an intentional next step.

## Week 7 — Trust and authority

**Outcome:** visitors can verify experience and understand why Spires Digital is credible without inflated claims.

- Expand case studies with problem, baseline, intervention, timeframe and limitations
- Add named testimonials or references when permission is available
- Strengthen author, certification, methodology and editorial information
- Build a digital PR and partnership list around original tools and ecommerce insight
- Review location language so Guernsey is the operating base and other areas are service coverage only

**Done when:** major commercial claims have evidence, context or a clear qualification.

## Week 8 — Experiments and operating rhythm

**Outcome:** the site moves from a project into a measurable growth system.

- Review four weeks of clean behavioural and lead data
- Rank experiments by impact, confidence and effort
- Launch one meaningful test at a time across CTA, proof, form or tool journeys
- Create a monthly dashboard for search, engagement, leads and qualified consultations
- Set 30-, 60- and 90-day review points for content, tools and technical health

**Done when:** the next experiment has a hypothesis and success measure, and the monthly review cadence is documented.

## Weekly review format

At the end of each week, record:

1. What shipped
2. What changed in the data
3. What was learned
4. What is blocked or needs a business decision
5. What moves into the next week
