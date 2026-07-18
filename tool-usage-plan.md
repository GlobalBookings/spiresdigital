# Tool acquisition and repeat-use plan

This is the Week 5 operating plan for the six browser-based tools. It defines what a useful visit means, the next decision each result should support and where the tool should be distributed.

## Tool jobs and journeys

| Tool | User job | Completion signal | Follow-on decision | Primary distribution |
| --- | --- | --- | --- | --- |
| Profit & break-even ROAS calculator | Set a commercially viable ROAS, MER, CAC and media ceiling | `tool_complete`: `profit_calculator` | Validate cost definitions, then compare blended and new-customer performance | Tools hub, analytics service, related-tool navigation |
| Channel budget planner | Work backwards from a revenue target into orders, sessions and spend | `tool_complete`: `channel_budget_planner` | Stress-test conversion rate, CPC, margin and channel capacity | Tools hub, related-tool navigation, paid acquisition conversations |
| Store growth assessment | Identify the first acquisition, conversion, retention or measurement constraint to investigate | `tool_complete`: `growth_assessment` | Validate the weakest score against commercial impact and implementation effort | Tools hub, related-tool navigation, cross-service consultations |
| Google Ads VAT guide | Identify the invoice, profile and adviser checks relevant to the billing setup | `tool_complete`: `google_ads_vat_guide` | Confirm the actual invoice and tax treatment with the appropriate adviser | Tools hub, related-tool navigation, Google Ads billing searches |
| Paid media waste estimator | Estimate which part of media spend needs stronger evidence and control | `tool_complete`: `paid_media_waste_estimator` | Audit measurement and the highest-risk control before changing budget | Tools hub, related-tool navigation, PPC service journey |
| Ecommerce Google Ads audit checklist | Score the account controls across measurement, economics, Shopping, demand, structure and conversion | `tool_complete`: `google_ads_audit_checklist` | Validate the first priority against account and store evidence | Google Ads audit guide, tools hub, PPC service journey |
| Keyword density & content analyser | Spot repeated language and target-phrase usage without uploading a draft | `tool_complete`: `keyword_density_checker` | Edit for clarity and search intent, then review the wider SEO structure | Exact search landing page, tools hub, ecommerce SEO service, Shopify SEO checklist |

## Result actions

Every completed result exposes the same three optional actions:

1. **Copy summary** creates a compact plain-text record for a brief or working document.
2. **Print / save PDF** prints only the result panel, not the full calculator page.
3. **Discuss this result** stores the generated summary temporarily in the current browser session and opens the consultation page.

The contact page displays a preview and requires a second explicit action before the summary is inserted into the message. No calculator input is sent automatically, there is no email gate and GA4 receives only the tool name and action type. The keyword tool never includes the pasted draft in its summary.

## Weekly measurement view

Create a GA4 exploration named **Tool journey — weekly** using page path, event name, tool name, result type and result action.

- Use page views for the seven tool URLs as the starting population.
- Divide `tool_complete` users by tool-page users for the completion rate.
- Compare page users without `tool_complete` to identify the largest pre-result exits.
- Compare `copy`, `print` and `share` values on `tool_result_action` to understand repeat-use intent.
- Follow `share` into `lead_submit_attempt` and `generate_lead`; do not treat a share click as a lead.
- Compare the latest seven days with the previous seven days, but wait for enough consented traffic before drawing conclusions.

The implementation supplies the event contract. Actual completion and exit rates require clean post-launch GA4 data and access to the property; they should not be inferred from Search Console clicks.
