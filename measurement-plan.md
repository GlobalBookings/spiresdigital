# Spires Digital Lead Measurement Plan

This is the Week 2 reporting contract for the enquiry journey. It keeps personal and free-text form data in the delivered enquiry while sending only non-identifying journey dimensions to GA4.

## Events

| Event | Trigger | Reporting job |
| --- | --- | --- |
| `cta_click` | A labelled website CTA is selected after analytics consent | Compare CTA placement and destination |
| `tool_complete` | A visitor produces a result in one of the seven tools | Measure useful tool engagement |
| `tool_result_action` | A completed result is copied, printed or explicitly carried to the contact page | Measure repeat-use and voluntary handoff intent |
| `lead_submit_attempt` | A valid growth-review form begins submission | Diagnose form delivery drop-off |
| `generate_lead` | FormSubmit returns the visitor to `/thank-you/` with pending lead context | Count confirmed form journeys |
| `lead_confirmation_view` | `/thank-you/` is viewed | Validate confirmation-page delivery; direct visits are labelled separately |

`generate_lead` no longer fires on the initial submit click. This prevents an attempted submission from being counted as a confirmed lead when the delivery service or connection fails.

## Non-identifying event parameters

Register these as event-scoped custom dimensions in GA4 where a matching predefined dimension is not already available:

| Display name | Event parameter | Purpose |
| --- | --- | --- |
| Source page | `source_page` | Last useful page or tool before contact |
| Landing page | `landing_page` | First page in the current browser session |
| Lead interest | `lead_interest` | Service, tool, industry or article context |
| Acquisition source | `acquisition_source` | UTM source, referring domain or `direct` |
| Constraint group | `constraint_group` | Acquire, convert, retain or measure selections |
| Ecommerce platform | `platform` | Optional platform band selected in the form |
| Revenue band | `revenue_band` | Optional range selected in the form |
| Context completeness | `context_completeness` | `basic`, `useful` or `detailed`; never the message itself |
| CTA name | `cta_name` | Stable identifier for the selected CTA |
| Destination path | `destination_path` | Where a measured CTA leads |
| Tool name | `tool_name` | Calculator or diagnostic completed |
| Result type | `result_type` | Coarse, non-sensitive result category |
| Result action | `result_action` | `copy`, `print` or `share`; never the result content |

Do not send names, email addresses, companies, store URLs, free-text answers or exact revenue figures to GA4.

For tool reporting, use tool-page views as the denominator for `tool_complete`, then compare completion with `tool_result_action`. A `share` action is an assisted journey signal, not a lead; only `generate_lead` confirms the form journey.

## Lead report

Create a GA4 free-form exploration named **Lead journey — weekly**.

- Rows: `Landing page` → `Source page` → `Lead interest`
- Optional breakdowns: `Acquisition source`, `Constraint group`, `Ecommerce platform`, `Revenue band`
- Columns: `Event name`
- Values: `Event count`
- Filter: event name exactly matches `lead_submit_attempt`, `generate_lead` or `lead_confirmation_view`
- Date comparison: current seven days against the previous seven days

Read the report in this order:

1. `generate_lead` is the confirmed lead count.
2. Compare `lead_submit_attempt` with `generate_lead` to spot delivery loss.
3. Use landing page and source page to separate acquisition from the page that persuaded the visitor to enquire.
4. Use lead interest and constraint group to route the conversation and prioritise service-page improvements.
5. Review revenue and platform bands only as voluntarily supplied context, not as an automatic qualification decision.

[Google's GA4 guidance](https://support.google.com/analytics/answer/14239696?hl=en) explains how to register event-scoped custom dimensions and advises allowing roughly 24–48 hours after collection and registration before expecting them in reporting. Create the definitions before judging the first weekly report. Use a [free-form exploration](https://support.google.com/analytics/answer/9327972?hl=en) for the weekly table described above.

## Enquiry email fields

FormSubmit receives the visible form answers plus:

- `source_page`
- `landing_page`
- `lead_interest`
- `referrer_domain`
- `acquisition_source`
- any present UTM parameters or `gclid`
- `constraint_summary`
- `context_completeness`

If submission does not navigate within eight seconds, the form is re-enabled and a direct-email fallback is shown without clearing the visitor's answers.
