import type { BlogPost } from './blogPosts';

export const ppc3BlogPosts: BlogPost[] = [
  {
    slug: 'how-to-track-phone-calls-google-ads',
    title: 'How to Track Phone Calls from Google Ads',
    description: 'Learn how to set up phone call tracking in Google Ads using call extensions, call-only ads, and third-party call tracking software integrated with GA4.',
    date: '2026-03-18',
    category: 'PPC',
    image: '',
    readTime: '9 min read',
  },
  {
    slug: 'google-ads-remarketing-guide',
    title: 'Google Ads Remarketing: Setup Guide and Best Practices',
    description: 'A complete guide to Google Ads remarketing covering audience creation, RLSA, display and video remarketing, frequency capping, and advanced strategies.',
    date: '2026-03-17',
    category: 'PPC',
    image: '',
    readTime: '8 min read',
  },
  {
    slug: 'youtube-ads-for-business',
    title: 'YouTube Ads for Business: A Beginner\'s Guide to Video Advertising',
    description: 'Everything you need to know about running YouTube ads for your business, from ad formats and targeting options to creative best practices and measurement.',
    date: '2026-03-16',
    category: 'PPC',
    image: '',
    readTime: '9 min read',
  },
  {
    slug: 'how-to-audit-google-ads-account',
    title: 'How to Audit a Google Ads Account in 30 Minutes',
    description: 'A fast, structured Google Ads audit checklist covering account structure, quality scores, search terms, extensions, conversion tracking, and wasted spend.',
    date: '2026-03-15',
    category: 'PPC',
    image: '',
    readTime: '8 min read',
  },
  {
    slug: 'google-ads-scripts-guide',
    title: 'Google Ads Scripts Every Advertiser Should Be Using',
    description: 'Essential Google Ads scripts for link checking, bid adjustments, quality score tracking, anomaly alerts, and budget pacing to automate your account management.',
    date: '2026-03-14',
    category: 'PPC',
    image: '',
    readTime: '9 min read',
  },
  {
    slug: 'demand-gen-campaigns-google-ads',
    title: 'Demand Gen Campaigns in Google Ads: What You Need to Know',
    description: 'How Demand Gen campaigns replaced Discovery ads and how to use them effectively across YouTube, Gmail, and Discover placements in 2026.',
    date: '2026-03-13',
    category: 'PPC',
    image: '',
    readTime: '8 min read',
  },
  {
    slug: 'local-ppc-google-ads-guide',
    title: 'Local PPC: How to Run Google Ads for a Local Business',
    description: 'A practical guide to running Google Ads for local businesses covering location targeting, local search ads, Google Business Profile integration, and call ads.',
    date: '2026-03-12',
    category: 'PPC',
    image: '',
    readTime: '8 min read',
  },
  {
    slug: 'google-ads-broad-match-2026',
    title: 'Broad Match in Google Ads: Is It Safe to Use in 2026?',
    description: 'How broad match keywords have evolved in Google Ads, when they are safe to use, essential guardrails, and how to combine them with smart bidding for better results.',
    date: '2026-03-11',
    category: 'PPC',
    image: '',
    readTime: '10 min read',
  },
];

export const ppc3BlogContent: Record<string, string> = {
  'how-to-track-phone-calls-google-ads': `
<p>For many businesses — especially those in professional services, healthcare, home improvement, and legal — phone calls are the most valuable conversion type. A single phone call can be worth hundreds or thousands of pounds. Yet a surprising number of Google Ads accounts have no phone call tracking in place, meaning they're flying blind on their most important metric.</p>

<p>This guide walks you through every method for tracking phone calls from Google Ads in 2026, from native Google features to advanced third-party integrations. By the end, you'll know exactly which calls came from which campaigns, keywords, and ads — giving you the data you need to optimise with confidence.</p>

<h2>Why Phone Call Tracking Matters</h2>

<p>Without call tracking, you can't answer fundamental questions about your Google Ads performance:</p>
<ul>
<li>Which campaigns are generating phone leads?</li>
<li>Which keywords trigger calls that convert into customers?</li>
<li>What's your true cost per lead when calls are included?</li>
<li>Are you bidding enough on keywords that drive high-value phone enquiries?</li>
</ul>

<p>Google's <a href="/blog/google-ads-conversion-tracking-setup">conversion tracking setup</a> covers form submissions and purchases, but calls require additional configuration. Without it, your automated bidding strategies are optimising on incomplete data — potentially starving your best campaigns of budget.</p>

<h2>Method 1: Google Ads Call Extensions</h2>

<p>Call extensions add your phone number directly to your search ads, making it easy for mobile users to tap and call. They're the simplest form of call tracking and work well as a starting point.</p>

<h3>How to Set Up Call Extensions</h3>
<ul>
<li>Navigate to <strong>Assets</strong> in your Google Ads account</li>
<li>Click the plus button and select <strong>Call</strong></li>
<li>Enter your business phone number</li>
<li>Enable <strong>Call reporting</strong> to track calls as conversions</li>
<li>Set a minimum call duration (typically 60 seconds) to filter out accidental dials</li>
</ul>

<p>When call reporting is enabled, Google uses a forwarding number to track calls. You'll see data on call duration, caller area code, and whether the call was answered. However, call extensions only track calls made directly from the ad — they won't track calls made after someone visits your website.</p>

<h3>Optimising Call Extension Performance</h3>
<p>Schedule call extensions to show only during business hours when someone can answer. There's nothing worse than generating a call at 11pm that goes to voicemail. Use bid adjustments to increase bids during your peak call hours — many B2B businesses find that Tuesday to Thursday mornings generate the highest-quality phone leads.</p>

<h2>Method 2: Call-Only Ads</h2>

<p>Call-only ads are specifically designed to drive phone calls on mobile devices. Instead of sending users to a landing page, clicking the ad initiates a phone call directly. These are ideal for businesses where the phone conversation <em>is</em> the conversion — think emergency plumbers, locksmiths, or medical appointments.</p>

<h3>When Call-Only Ads Work Best</h3>
<ul>
<li><strong>Urgent services:</strong> When the searcher needs immediate help and wants to speak to someone</li>
<li><strong>Complex purchases:</strong> When the product or service requires a conversation before buying</li>
<li><strong>Local businesses:</strong> When proximity matters and a quick call confirms availability</li>
<li><strong>High-value services:</strong> When the lifetime value of a customer justifies the higher CPC</li>
</ul>

<p>Call-only ads typically have higher CPCs than standard search ads, but if your phone team converts well, the cost per acquisition can be significantly lower. The key is tracking and optimising for call quality, not just call volume.</p>

<div class="tip-box"><strong>Pro Tip:</strong> Set your call-only ad schedule to match your staffing hours precisely. If your office closes at 5:30pm, don't run call-only ads until 6pm — every unanswered call is wasted spend and a frustrated potential customer.</div>

<h2>Method 3: Google Forwarding Numbers on Your Website</h2>

<p>Google can dynamically replace the phone number on your website with a Google forwarding number for visitors who arrived via Google Ads. This tracks calls made <em>after</em> someone clicks your ad and visits your site — capturing intent that call extensions miss.</p>

<h3>Setting Up Website Call Tracking</h3>
<ul>
<li>Create a <strong>Call from website</strong> conversion action in Google Ads</li>
<li>Install the provided JavaScript snippet on your website</li>
<li>Specify your business phone number in the tag configuration</li>
<li>Set the minimum call duration for conversion counting</li>
</ul>

<p>This method gives you campaign, ad group, and keyword-level attribution for website calls. However, it relies on a Google forwarding number, which means the number displayed on your site changes for Google Ads visitors. Some businesses prefer consistent branding with their own number, which is where third-party solutions come in.</p>

<h2>Method 4: Third-Party Call Tracking Software</h2>

<p>Dedicated call tracking platforms like CallRail, Infinity, Mediahawk, and ResponseTap offer advanced features that Google's native tools can't match. If phone calls are a significant revenue driver, investing in a third-party platform is almost always worthwhile.</p>

<h3>Key Features of Third-Party Platforms</h3>
<ul>
<li><strong>Dynamic number insertion:</strong> Unique tracking numbers per visitor session for granular attribution</li>
<li><strong>Call recording:</strong> Record calls for quality assurance and training</li>
<li><strong>Call scoring:</strong> Automatically categorise calls as leads, sales, or spam</li>
<li><strong>AI-powered transcription:</strong> Transcribe calls and extract keywords and intent signals</li>
<li><strong>Multi-touch attribution:</strong> See the full customer journey, not just the last click</li>
<li><strong>CRM integration:</strong> Push call data directly into Salesforce, HubSpot, or Pipedrive</li>
</ul>

<p>Third-party platforms typically cost between £30 and £200 per month depending on call volume and features. For businesses generating 50+ calls per month from paid ads, the ROI on this investment is substantial — the insights gained far outweigh the subscription cost.</p>

<h2>Integrating Call Tracking with GA4</h2>

<p>Whether you use Google's native call tracking or a third-party platform, connecting your call data to <a href="/blog/ga4-conversion-tracking-setup">GA4</a> gives you a complete picture of user behaviour. Here's how to set it up:</p>

<h3>Native Google Call Events</h3>
<p>Google Ads call conversions automatically sync with GA4 if your accounts are linked. You'll see call events alongside your other conversions, enabling proper attribution modelling across all conversion types.</p>

<h3>Third-Party Call Events via GTM</h3>
<ul>
<li>Create a custom event in Google Tag Manager that fires when a call tracking number is clicked</li>
<li>Pass dynamic parameters (call source, campaign, keyword) as event parameters</li>
<li>Register the event as a key event in GA4</li>
<li>Import the GA4 key event into Google Ads as a conversion action</li>
</ul>

<p>This creates a seamless loop: Google Ads sends the click, your call tracking platform records the call, GA4 logs the event, and Google Ads receives the conversion data for bidding optimisation.</p>

<div class="tip-box"><strong>Pro Tip:</strong> Create separate conversion actions for different call durations. A 30-second call and a 10-minute call have very different values. Set up a "qualified call" conversion at 90+ seconds and use that as your primary bidding signal rather than all calls.</div>

<h2>Optimising Campaigns Using Call Data</h2>

<p>Once tracking is in place, use your call data to make smarter decisions:</p>

<h3>Keyword-Level Optimisation</h3>
<p>Identify which keywords drive calls that convert into customers, not just calls that happen. Some keywords generate lots of short, low-quality calls while others produce fewer but longer, higher-converting conversations. Adjust bids accordingly — and consider creating dedicated <a href="/blog/google-ads-lead-generation-b2b">lead generation campaigns</a> for your top call-driving keywords.</p>

<h3>Ad Copy Testing for Calls</h3>
<p>Test ad copy variations that emphasise different reasons to call. "Speak to an expert today" might outperform "Call for a free quote" depending on your audience. Use call data to measure which messaging drives the longest and most productive conversations, not just the most dials.</p>

<h3>Landing Page Optimisation</h3>
<p>For campaigns where calls are the goal, optimise your landing pages for phone engagement. Make the number prominent, clickable on mobile, and consider adding a "request a callback" form as an alternative. Track both click-to-call events and form submissions to understand the full picture.</p>

<h2>Common Call Tracking Mistakes</h2>

<p>Avoid these pitfalls that undermine accurate call attribution:</p>
<ul>
<li><strong>Not setting minimum call duration:</strong> Without it, accidental 5-second calls count as conversions, inflating your numbers</li>
<li><strong>Ignoring call quality:</strong> Raw call volume is a vanity metric. Focus on calls that result in appointments, quotes, or sales</li>
<li><strong>Forgetting offline conversions:</strong> Import offline conversion data (customer signed up, deal closed) back into Google Ads for true ROAS measurement</li>
<li><strong>Using static tracking only:</strong> A single tracking number per campaign gives aggregate data but can't tell you which specific keyword drove each call</li>
<li><strong>Not recording calls:</strong> Without recordings, you can't assess lead quality or identify training opportunities for your sales team</li>
</ul>

<h2>Choosing the Right Call Tracking Setup</h2>

<p>Your ideal setup depends on call volume and business complexity:</p>
<ul>
<li><strong>Under 20 calls/month:</strong> Google's native call extensions and website call tracking are sufficient</li>
<li><strong>20–100 calls/month:</strong> Add a third-party platform for recording, scoring, and CRM integration</li>
<li><strong>100+ calls/month:</strong> Invest in enterprise call tracking with AI transcription, automated scoring, and multi-channel attribution</li>
</ul>

<p>At Spires Digital, we set up comprehensive call tracking for every client where phone leads matter. We ensure every call is attributed, recorded, and fed back into your bidding strategy so that Google's algorithms can optimise for the calls that actually drive revenue. <a href="/contact">Book a free call tracking audit via our Calendly</a> and we'll show you exactly how many phone leads your campaigns are generating — and how many you're currently missing.</p>

<details>
<summary>Can I track phone calls from Google Ads for free?</summary>
<div class="faq-answer"><p>Yes. Google Ads offers free call tracking through call extensions, call-only ads, and website call tracking using Google forwarding numbers. These cover basic attribution and call duration data. For advanced features like call recording, AI transcription, and CRM integration, you'll need a paid third-party platform.</p></div>
</details>

<details>
<summary>What is a good minimum call duration for conversion tracking?</summary>
<div class="faq-answer"><p>Most businesses find that 60 seconds is a reasonable minimum for counting a call as a conversion. This filters out accidental dials and very short calls that rarely lead to business. For high-value services where initial conversations tend to be longer, consider setting the threshold at 90 or even 120 seconds.</p></div>
</details>

<details>
<summary>Does call tracking affect my phone number or SEO?</summary>
<div class="faq-answer"><p>Dynamic number insertion shows a tracking number to visitors from paid ads while keeping your real number visible to organic visitors and in your site's structured data. This means your NAP consistency for local SEO is maintained. Reputable call tracking platforms handle this seamlessly without affecting your search rankings.</p></div>
</details>

<details>
<summary>How do I track calls from both Google Ads and Meta Ads?</summary>
<div class="faq-answer"><p>Third-party call tracking platforms like CallRail and Infinity support multi-channel attribution. They assign different tracking numbers to different traffic sources, so you can see which calls came from Google Ads, <a href="/services/meta-ads">Meta Ads</a>, organic search, or direct traffic. This gives you a complete cross-channel view of phone lead generation.</p></div>
</details>
`,

  'google-ads-remarketing-guide': `
<p>Remarketing is one of the most powerful tools in Google Ads, yet many advertisers either ignore it entirely or set it up poorly. The premise is simple: show ads to people who have already visited your website or interacted with your brand. Because these people already know you, remarketing campaigns consistently deliver lower CPAs and higher conversion rates than prospecting campaigns.</p>

<p>This guide covers everything you need to know about Google Ads remarketing in 2026 — from building your first audience to advanced strategies that turn window shoppers into loyal customers.</p>

<h2>How Google Ads Remarketing Works</h2>

<p>When someone visits your website, Google's tag (or GA4) adds them to a remarketing list. You can then target these users with ads across Google's vast network — including Search, Display, YouTube, Gmail, and Discover. The key advantage is intent: these users have already expressed interest in your products or services by visiting your site.</p>

<p>In 2026, remarketing relies on a combination of first-party data (your website visitors, customer lists) and Google's AI-powered audience signals. With third-party cookies being phased out, building strong first-party audiences has never been more important.</p>

<h2>Setting Up Your Remarketing Audiences</h2>

<h3>Installing the Google Ads Tag</h3>
<p>Before you can remarket, you need to collect audience data. Install the Google Ads remarketing tag across your entire website — not just landing pages. This ensures you capture every visitor, regardless of how they found you. Use Google Tag Manager for cleaner implementation and easier management.</p>

<h3>Essential Audience Segments</h3>
<p>Don't just create one "all visitors" audience. Segment your visitors based on behaviour and intent:</p>
<ul>
<li><strong>All visitors (last 30 days):</strong> Your broadest audience, useful for brand awareness remarketing</li>
<li><strong>Product/service page visitors:</strong> People who viewed specific offerings — high intent</li>
<li><strong>Cart or form abandoners:</strong> Users who started a conversion but didn't finish — highest intent</li>
<li><strong>Blog readers:</strong> Top-of-funnel visitors who need nurturing before they're ready to buy</li>
<li><strong>Past converters:</strong> Existing customers you can upsell, cross-sell, or reactivate</li>
<li><strong>High-value page visitors:</strong> Users who visited pricing pages or case studies — strong buying signals</li>
</ul>

<p>Each segment deserves different messaging, different offers, and different bid levels. Treating all remarketing audiences the same is one of the most common mistakes we see in account audits.</p>

<div class="tip-box"><strong>Pro Tip:</strong> Create audience duration variants for your key segments. A visitor from yesterday is far more likely to convert than one from 30 days ago. Set up 1-day, 7-day, and 30-day versions of your key audiences and bid more aggressively on the shorter durations.</div>

<h2>Remarketing Lists for Search Ads (RLSA)</h2>

<p>RLSA is arguably the most underused remarketing feature in Google Ads. It lets you adjust your search campaigns based on whether the searcher has previously visited your website. There are two powerful ways to use it:</p>

<h3>Strategy 1: Bid Adjustments on Existing Campaigns</h3>
<p>Add your remarketing audiences to your search campaigns in "observation" mode and apply positive bid adjustments. This means you'll bid more when a past visitor searches for your keywords — recognising that they're more likely to convert because they already know your brand.</p>
<p>We typically recommend a 30–50% bid increase for past visitors, but test your way to the right number. For cart abandoners, bid adjustments of 100% or more can be justified given their high conversion probability.</p>

<h3>Strategy 2: Broad Keyword Targeting for Known Users</h3>
<p>Create search campaigns that target broader keywords but restrict them to remarketing audiences only. You'd never bid on a generic term like "running shoes" for cold traffic — the competition is too fierce. But for someone who already viewed your running shoes collection last week? That broad keyword suddenly becomes highly relevant and cost-effective.</p>

<p>This strategy dramatically expands your reach without the budget waste that normally comes with broad targeting. It's a technique we use extensively at Spires Digital to squeeze more conversions out of existing traffic. For more on <a href="/blog/google-ads-campaign-structure">structuring campaigns effectively</a>, see our dedicated guide.</p>

<h2>Display Remarketing</h2>

<p>Display remarketing shows banner ads to past visitors across Google's Display Network — millions of websites, apps, and placements. It's the classic "that product is following me around the internet" experience, and it works because repeated exposure builds familiarity and trust.</p>

<h3>Creative Best Practices</h3>
<ul>
<li><strong>Use responsive display ads:</strong> They automatically adapt to any placement size and generally outperform static banners</li>
<li><strong>Show specific products:</strong> Dynamic remarketing pulls product images and prices from your feed, reminding visitors of exactly what they viewed</li>
<li><strong>Include a clear offer:</strong> Give people a reason to come back — free shipping, a discount code, or a time-limited bonus</li>
<li><strong>Maintain brand consistency:</strong> Your remarketing ads should look and feel like your website so visitors recognise you instantly</li>
</ul>

<h3>Frequency Capping</h3>
<p>This is crucial. Without frequency caps, your ads can show to the same person dozens of times per day, creating annoyance rather than interest. Set a cap of 3–5 impressions per user per day for display remarketing. Monitor view-through conversion rates — if they plateau or decline, you're likely overexposing your audience.</p>

<h2>Video Remarketing on YouTube</h2>

<p>YouTube remarketing lets you show video ads to people who've visited your website or engaged with your YouTube channel. It combines the persuasive power of video with the precision of audience targeting.</p>

<h3>Effective YouTube Remarketing Formats</h3>
<ul>
<li><strong>Skippable in-stream ads:</strong> Play before or during other videos. You only pay if the viewer watches 30 seconds or clicks</li>
<li><strong>Non-skippable in-stream ads (15 seconds):</strong> Guaranteed full views for concise messaging — use for strong brand recall</li>
<li><strong>Video discovery ads:</strong> Appear in YouTube search results and alongside related videos — good for educational content</li>
</ul>

<p>For remarketing, keep your video ads short and direct. These viewers already know your brand — you don't need a lengthy introduction. Focus on the value proposition, address common objections, and include a clear call to action. For businesses also running <a href="/services/meta-ads">Meta Ads</a>, you can create cohesive cross-platform remarketing that follows users from Facebook and Instagram to YouTube.</p>

<h2>Advanced Remarketing Strategies</h2>

<h3>Sequential Messaging</h3>
<p>Instead of showing the same ad repeatedly, create a sequence that moves prospects through your funnel. Day 1: remind them what they viewed. Day 3: share a customer testimonial. Day 7: offer a time-limited incentive. This approach respects the buyer's journey and provides fresh, relevant content at each stage.</p>

<h3>Customer Match</h3>
<p>Upload your customer email list to Google Ads to target existing customers across Search, YouTube, Gmail, and Display. This is powerful for upselling, cross-selling, and reactivation campaigns. Use similar audiences (now called "lookalike segments") based on your best customers to find new prospects who share their characteristics.</p>

<h3>Combining Remarketing with <a href="/blog/facebook-retargeting-strategy-guide">Facebook Retargeting</a></h3>
<p>Cross-platform remarketing amplifies your message. A prospect who sees your ad on Google, then Facebook, then YouTube perceives your brand as more established and trustworthy. Coordinate your messaging across platforms to create a unified experience rather than running isolated campaigns on each network.</p>

<h3>Exclusion Audiences</h3>
<p>Just as important as who you target is who you exclude. Remove recent converters from your remarketing audiences (unless upselling), exclude users who bounced in under 10 seconds (they weren't genuinely interested), and exclude existing customers from acquisition-focused campaigns.</p>

<div class="tip-box"><strong>Pro Tip:</strong> Create a "converter exclusion" audience with a 30-day window and apply it to all prospecting campaigns. This prevents wasting budget showing acquisition ads to people who already bought. For subscription businesses, shorten this to match your billing cycle.</div>

<h2>Measuring Remarketing Performance</h2>

<p>Remarketing performance should be measured differently from prospecting campaigns:</p>
<ul>
<li><strong>View-through conversions:</strong> Track people who saw your ad but converted later without clicking — remarketing often influences indirectly</li>
<li><strong>Assisted conversions:</strong> Check GA4's conversion paths to see how remarketing contributes to multi-touch journeys</li>
<li><strong>Incremental lift:</strong> Run controlled experiments to measure the true uplift remarketing provides versus doing nothing</li>
<li><strong>Frequency vs. conversion rate:</strong> Plot how conversion rate changes with ad frequency to find the optimal exposure level</li>
</ul>

<p>Remarketing should be a core pillar of every Google Ads strategy. At Spires Digital, we build layered remarketing systems that nurture prospects from first visit to final conversion, using tailored messaging at every stage. <a href="/contact">Book a free remarketing audit via our Calendly</a> to discover how much revenue you're leaving on the table by not remarketing effectively.</p>

<details>
<summary>How large does my remarketing audience need to be?</summary>
<div class="faq-answer"><p>Google requires a minimum of 1,000 users in a remarketing list for Search campaigns (RLSA) and 100 users for Display campaigns. For YouTube, the minimum is 1,000. If your website traffic is below these thresholds, focus on growing traffic first through search and social campaigns before investing in remarketing.</p></div>
</details>

<details>
<summary>How long should I remarket to someone?</summary>
<div class="faq-answer"><p>It depends on your sales cycle. For impulse purchases, 7–14 days is usually sufficient. For considered B2B purchases, 30–90 days may be appropriate. Set your audience membership duration to match your typical time-to-conversion, then test shorter and longer windows to find the sweet spot.</p></div>
</details>

<details>
<summary>Is remarketing still effective without third-party cookies?</summary>
<div class="faq-answer"><p>Yes. Google's remarketing in 2026 increasingly relies on first-party data (your website visitors, customer lists) and Google's own logged-in user data. Enhanced conversions, consent mode, and Customer Match all work without third-party cookies. The key is building strong first-party data assets — email lists, CRM data, and GA4 audiences.</p></div>
</details>

<details>
<summary>What's the difference between remarketing and retargeting?</summary>
<div class="faq-answer"><p>The terms are often used interchangeably. Technically, "remarketing" refers to Google's ecosystem (Google Ads remarketing) while "retargeting" is more commonly associated with display ad networks and <a href="/blog/facebook-retargeting-strategy-guide">Facebook/Meta retargeting</a>. The underlying principle is the same: showing ads to people who've already interacted with your brand.</p></div>
</details>
`,

  'youtube-ads-for-business': `
<p>YouTube is the world's second-largest search engine and the most-watched video platform on the planet. With over 2.5 billion monthly active users in 2026, it offers businesses an enormous opportunity to reach potential customers with engaging video content. Yet many advertisers — particularly small and mid-sized businesses — still treat YouTube as a "nice to have" rather than a serious performance channel.</p>

<p>This beginner's guide breaks down everything you need to know about running YouTube ads for your business, from choosing the right ad format to measuring real results.</p>

<h2>Why YouTube Ads Deserve Your Attention in 2026</h2>

<p>YouTube advertising has matured significantly. It's no longer just a brand awareness play — Google's improvements to targeting, bidding, and measurement mean YouTube can now drive measurable conversions and revenue. Here's why it matters:</p>
<ul>
<li><strong>Massive reach:</strong> YouTube reaches more 18–49 year olds than any single TV network in the UK</li>
<li><strong>Intent signals:</strong> YouTube viewers actively search for content, unlike passive social media scrolling</li>
<li><strong>Advanced targeting:</strong> Layer demographic, interest, in-market, and custom intent audiences</li>
<li><strong>Cost efficiency:</strong> CPVs (cost per view) remain significantly lower than CPMs on Meta platforms</li>
<li><strong>Full-funnel capability:</strong> From awareness-stage bumper ads to conversion-focused action campaigns</li>
</ul>

<h2>YouTube Ad Formats Explained</h2>

<h3>Skippable In-Stream Ads</h3>
<p>These play before, during, or after other YouTube videos. Viewers can skip after 5 seconds. You're charged when someone watches 30 seconds (or the full ad if shorter) or interacts with it. This is the most popular format and offers excellent value because you don't pay for people who aren't interested — they simply skip.</p>
<p><strong>Best for:</strong> Brand storytelling, product demonstrations, testimonials. Aim for 15–60 seconds for remarketing audiences and up to 2 minutes for in-market audiences who need more persuasion.</p>

<h3>Non-Skippable In-Stream Ads</h3>
<p>These 15-second ads must be watched in full before the viewer can continue to their chosen video. You're charged on a CPM (cost per thousand impressions) basis. They guarantee your full message is seen but can feel intrusive, so the creative must be tight and compelling.</p>
<p><strong>Best for:</strong> Short, punchy messages with high recall value. Ideal for promotions, event announcements, or reinforcing brand positioning. Use sparingly to avoid audience fatigue.</p>

<h3>Bumper Ads</h3>
<p>Six-second non-skippable ads that play before a video. Charged on CPM. Despite their brevity, bumper ads are remarkably effective for building frequency and brand recall. They work best as part of a broader campaign — for example, following up a longer in-stream ad with bumpers to reinforce the message.</p>
<p><strong>Best for:</strong> Brand awareness, campaign reinforcement, reaching audiences at scale with a single memorable message.</p>

<h3>In-Feed Video Ads (Discovery Ads)</h3>
<p>These appear alongside YouTube search results, on the homepage, and next to related videos. They look like organic video suggestions with a small "Ad" label. Viewers choose to click and watch, meaning engagement quality is high. You're charged when someone clicks to watch.</p>
<p><strong>Best for:</strong> Educational content, tutorials, product reviews. Excellent for capturing intent — people actively searching for topics related to your business.</p>

<div class="tip-box"><strong>Pro Tip:</strong> Don't try to repurpose your TV commercial for YouTube. Online viewers have different expectations. Your first 5 seconds must hook attention before the skip button appears — lead with the problem, the benefit, or something visually arresting. Save the brand logo reveal for later.</div>

<h2>Targeting Options for YouTube Ads</h2>

<p>YouTube's targeting capabilities are one of its biggest advantages over traditional video advertising. You can combine multiple targeting methods to reach precisely the right audience:</p>

<h3>Demographic Targeting</h3>
<p>Target by age, gender, household income, and parental status. Useful for broad campaigns but rarely sufficient on its own. Layer demographics with interest or intent signals for better results.</p>

<h3>Interest-Based Audiences</h3>
<ul>
<li><strong>Affinity audiences:</strong> People with long-term interests in specific topics (e.g., "outdoor enthusiasts," "tech savvy")</li>
<li><strong>In-market audiences:</strong> People actively researching or comparing products in your category — these are your warmest prospects</li>
<li><strong>Life events:</strong> People going through major changes (moving house, getting married, starting a business) — powerful for relevant industries</li>
</ul>

<h3>Custom Intent Audiences</h3>
<p>Build audiences based on specific Google search terms people have used recently. If someone searched for "best accounting software for small business" on Google last week, you can show them your YouTube ad for accounting software. This bridges search intent and video reach — it's one of the most powerful targeting methods available.</p>

<h3>Remarketing Audiences</h3>
<p>Show ads to people who've visited your website, watched your previous videos, or subscribed to your channel. <a href="/blog/google-ads-remarketing-guide">Remarketing</a> on YouTube is incredibly effective because video allows you to address objections and build trust in a way that text and display ads simply can't match.</p>

<h3>Placement and Topic Targeting</h3>
<p>Choose specific YouTube channels, videos, or topic categories where your ads will appear. This gives you contextual relevance — your fitness product ad appearing before a popular workout video, for example. However, be careful not to over-restrict placements, as this can severely limit reach and drive up costs.</p>

<h2>Creating Effective YouTube Ad Creative</h2>

<h3>The First 5 Seconds</h3>
<p>Everything hinges on your opening. With skippable ads, you have 5 seconds before the viewer can skip. Use this window to:</p>
<ul>
<li>State the problem your audience faces ("Tired of wasting money on ads that don't convert?")</li>
<li>Show something visually unexpected that stops the scroll</li>
<li>Address the viewer directly ("If you run an e-commerce store, watch this")</li>
<li>Lead with a bold claim or statistic</li>
</ul>

<h3>Structure for Conversion-Focused Ads</h3>
<p>Follow this proven structure for YouTube ads designed to drive action:</p>
<ul>
<li><strong>Hook (0–5s):</strong> Grab attention with the problem or a bold statement</li>
<li><strong>Problem (5–15s):</strong> Elaborate on the pain point your audience recognises</li>
<li><strong>Solution (15–30s):</strong> Introduce your product or service as the answer</li>
<li><strong>Proof (30–45s):</strong> Social proof — testimonials, results, case studies</li>
<li><strong>CTA (45–60s):</strong> Clear call to action — visit site, sign up, book a call</li>
</ul>

<h3>Production Quality</h3>
<p>You don't need a Hollywood budget. Some of the best-performing YouTube ads are shot on smartphones with good lighting and clear audio. Authenticity often outperforms polish, especially for B2B and service-based businesses. What matters most is the message, the hook, and the relevance to your audience.</p>

<h2>Bidding and Budget Strategies</h2>

<h3>Choosing Your Bidding Strategy</h3>
<ul>
<li><strong>Target CPV:</strong> Set the maximum you'll pay per view. Good for awareness campaigns where views are the goal</li>
<li><strong>Target CPA:</strong> Let Google optimise for conversions at your target cost per acquisition. Requires conversion tracking and sufficient data</li>
<li><strong>Maximise conversions:</strong> Google spends your budget to get as many conversions as possible. Best when you have a fixed daily budget and trust the algorithm</li>
<li><strong>Target ROAS:</strong> Optimise for revenue rather than volume. Ideal for e-commerce with reliable conversion value data</li>
</ul>

<p>For beginners, start with Target CPV to gather data and understand your audience's engagement patterns. Once you have 30+ conversions per month, switch to a conversion-based bidding strategy for better performance. If you're deciding between YouTube and other platforms, our <a href="/blog/google-ads-vs-meta-ads-2026">Google Ads vs Meta Ads comparison</a> covers where video budgets work hardest.</p>

<div class="tip-box"><strong>Pro Tip:</strong> Start with a small daily budget (£20–£50) and run your ads for at least two weeks before making judgements. YouTube's algorithm needs time to learn which audiences respond best to your creative. Cutting campaigns too early based on limited data is a common and costly mistake.</div>

<h2>Measuring YouTube Ad Performance</h2>

<p>YouTube metrics differ from search and display. Here's what to track and what the benchmarks look like:</p>
<ul>
<li><strong>View rate:</strong> Percentage of impressions that resulted in a view. Benchmark: 15–30% for skippable in-stream</li>
<li><strong>CPV (cost per view):</strong> How much you pay per view. UK average: £0.03–£0.10</li>
<li><strong>Watch time:</strong> How much of your ad people watch. Aim for 50%+ average percentage viewed</li>
<li><strong>Click-through rate:</strong> Percentage of viewers who click to your website. Benchmark: 0.5–2%</li>
<li><strong>Conversions:</strong> Leads, sales, or sign-ups attributed to your YouTube ads</li>
<li><strong>View-through conversions:</strong> People who saw your ad but converted later without clicking — crucial for understanding YouTube's true impact</li>
</ul>

<p>Don't judge YouTube purely on last-click conversions. Video advertising influences the buyer journey even when viewers don't click immediately. Review your view-through conversion data and look for lifts in branded search volume after launching YouTube campaigns — these are strong indicators that your ads are working. For <a href="/services/meta-ads">Meta Ads</a> users, compare view-through attribution windows across both platforms.</p>

<h2>Common Mistakes to Avoid</h2>

<ul>
<li><strong>Using TV-style creative:</strong> YouTube requires a faster hook and more direct messaging than broadcast television</li>
<li><strong>Ignoring mobile:</strong> Over 70% of YouTube watch time is on mobile devices — ensure your visuals work on small screens</li>
<li><strong>Too many audiences in one campaign:</strong> Split your audiences into separate ad groups so you can see what's working</li>
<li><strong>No frequency capping:</strong> Showing the same ad 20 times creates annoyance, not awareness</li>
<li><strong>Skipping the CTA:</strong> Every ad needs a clear next step — don't assume viewers will figure it out</li>
</ul>

<p>YouTube ads are a powerful and often underutilised channel for businesses of all sizes. At Spires Digital, we create and manage YouTube advertising campaigns that deliver measurable results, from awareness through to conversion. <a href="/contact">Book a free video advertising consultation via our Calendly</a> to discuss how YouTube can fit into your marketing strategy.</p>

<details>
<summary>How much do YouTube ads cost?</summary>
<div class="faq-answer"><p>YouTube ad costs vary by targeting and competition. Typical CPVs (cost per view) in the UK range from £0.03 to £0.10. For conversion campaigns, CPAs depend on your industry and offer. Most businesses can start testing YouTube ads effectively with a daily budget of £20–£50, scaling up once they find winning creative and audiences.</p></div>
</details>

<details>
<summary>Do I need professional video production for YouTube ads?</summary>
<div class="faq-answer"><p>No. While high-quality production can help for brand awareness campaigns, many successful YouTube ads are shot on smartphones with basic lighting and a microphone. The key factors are your message, hook, and targeting — not production value. Test simple videos first, then invest in production once you've validated your messaging.</p></div>
</details>

<details>
<summary>How long should my YouTube ad be?</summary>
<div class="faq-answer"><p>For skippable in-stream ads, 15–60 seconds works well for most objectives. Remarketing ads can be shorter (15–30 seconds) since the audience already knows you. Bumper ads are 6 seconds. In-feed/discovery ads can be longer (2–5 minutes) because viewers choose to watch them. Always front-load your message — the first 5 seconds are critical.</p></div>
</details>

<details>
<summary>Can YouTube ads drive direct sales?</summary>
<div class="faq-answer"><p>Yes, particularly for e-commerce and businesses with a clear online conversion path. Video action campaigns with Target CPA or Maximise Conversions bidding can drive direct purchases. For B2B and high-consideration services, YouTube typically drives leads and pipeline rather than immediate sales, but the impact on overall conversion rates is substantial.</p></div>
</details>
`,

  'how-to-audit-google-ads-account': `
<p>Whether you've inherited a Google Ads account, suspect your current agency isn't performing, or simply want a health check on your own campaigns, knowing how to audit an account quickly is an essential skill. A thorough audit can reveal thousands of pounds in wasted spend, missed opportunities, and structural issues that silently erode performance.</p>

<p>This guide gives you a structured 30-minute audit framework that covers the most impactful areas. You won't catch everything in half an hour, but you'll identify the biggest problems and quick wins that make the largest difference.</p>

<h2>Before You Start: Gather Your Benchmarks</h2>

<p>Before diving into the account, establish what "good" looks like for this business. Pull the following data for the last 90 days:</p>
<ul>
<li>Total spend vs. budget allocation</li>
<li>Overall CPA (cost per acquisition) or ROAS (return on ad spend)</li>
<li>Conversion volume and conversion rate</li>
<li>Impression share and lost impression share (budget vs. rank)</li>
</ul>

<p>Compare these against industry benchmarks and the business's own targets. This context frames everything you find during the audit — a 5% conversion rate might be excellent for one industry and terrible for another.</p>

<h2>Minutes 1–5: Account Structure</h2>

<p>Start with the big picture. A well-structured account is easier to manage, optimise, and scale. Look for these issues:</p>

<h3>Campaign Organisation</h3>
<ul>
<li><strong>Are campaigns logically grouped?</strong> Check that campaigns align with product lines, service areas, or customer segments — not random groupings</li>
<li><strong>Are Search and Display mixed?</strong> Search and Display should almost always be separate campaigns with separate budgets and strategies</li>
<li><strong>Is there a clear naming convention?</strong> Consistent naming (e.g., "Search | Brand | UK" or "Display | Remarketing | All Visitors") makes management dramatically easier</li>
<li><strong>How many campaigns are active?</strong> Too few suggests poor segmentation; too many suggests over-fragmentation that limits data and learning</li>
</ul>

<p>For a deeper dive into optimal structure, see our <a href="/blog/google-ads-campaign-structure">Google Ads campaign structure guide</a>.</p>

<h3>Ad Group Structure</h3>
<ul>
<li>Are ad groups tightly themed around specific keyword clusters?</li>
<li>Do ad groups contain 5–20 keywords each, or are they bloated with 50+?</li>
<li>Does each ad group have at least 2–3 active responsive search ads?</li>
</ul>

<div class="tip-box"><strong>Pro Tip:</strong> Check the "Ad Group" column and sort by impressions. If a small number of ad groups receive 90%+ of impressions, the rest are likely irrelevant or under-budgeted. Either fix them or pause them to focus budget where it matters.</div>

<h2>Minutes 5–10: Quality Score Analysis</h2>

<p>Quality Score directly impacts your CPCs and ad positions. Pull a keyword report with Quality Score columns visible and look for patterns:</p>
<ul>
<li><strong>What's the average Quality Score?</strong> Aim for 7+ on brand keywords and 5+ on non-brand</li>
<li><strong>Which component is weakest?</strong> Check Expected CTR, Ad Relevance, and Landing Page Experience separately</li>
<li><strong>Are high-spend keywords below 5?</strong> Low Quality Scores on your top keywords cost you the most — these should be priority fixes</li>
</ul>

<h3>Quick Fixes for Low Quality Scores</h3>
<ul>
<li><strong>Low Ad Relevance:</strong> The ad copy doesn't closely match the keyword. Rewrite headlines to include the exact keyword or close variants</li>
<li><strong>Low Expected CTR:</strong> The ad isn't compelling enough. Improve your value proposition, add numbers, and use stronger calls to action</li>
<li><strong>Low Landing Page Experience:</strong> The landing page doesn't deliver on the ad's promise. Ensure relevance, speed, and mobile-friendliness</li>
</ul>

<h2>Minutes 10–15: Search Terms Report</h2>

<p>The search terms report reveals what people actually searched for when your ads triggered. It's the single most revealing report in the entire account. Filter for the last 30 days and look for:</p>

<h3>Irrelevant Search Terms</h3>
<p>These are searches that triggered your ads but have nothing to do with your business. Common culprits include informational queries ("what is...", "how does..."), competitor names, job-related searches ("salary", "careers"), and geographic mismatches.</p>
<p>Every irrelevant click is wasted money. Add these as negative keywords immediately. If you find a large number of irrelevant terms, the keyword match types are probably too broad or negative keyword lists are inadequate. See our guide on <a href="/blog/reduce-wasted-ad-spend-google-ads">reducing wasted ad spend</a> for systematic approaches.</p>

<h3>High-Spend, No-Conversion Terms</h3>
<p>Sort search terms by cost (descending) and identify any terms that have spent significantly without converting. These might need to be added as negative keywords, or they might indicate a landing page or offer problem rather than a keyword problem.</p>

<h3>Missing Opportunities</h3>
<p>Look for converting search terms that aren't in your keyword lists. These are opportunities to create dedicated ad groups with tailored ads and landing pages, which will improve Quality Score and conversion rates.</p>

<h2>Minutes 15–20: Ad Assets and Extensions</h2>

<p>Ad extensions (now called "assets" in Google Ads) significantly improve CTR and ad real estate. Check that the account is using all relevant asset types:</p>
<ul>
<li><strong>Sitelink extensions:</strong> At least 4 sitelinks per campaign, linking to relevant pages</li>
<li><strong>Callout extensions:</strong> Highlighting USPs, offers, and trust signals</li>
<li><strong>Structured snippets:</strong> Categorised information about services, brands, or products</li>
<li><strong>Call extensions:</strong> Essential for businesses that want phone enquiries</li>
<li><strong>Image extensions:</strong> Visually enhance search ads — underused but effective</li>
<li><strong>Location extensions:</strong> Critical for businesses with physical locations</li>
</ul>

<p>Check for disapproved or underperforming assets. Google shows asset performance ratings (Best, Good, Low) — replace any rated "Low" with new variations.</p>

<h2>Minutes 20–25: Conversion Tracking</h2>

<p>This is arguably the most critical part of the audit. Faulty conversion tracking undermines everything else — your bidding, reporting, and optimisation decisions are all based on conversion data. If it's wrong, every decision built on it is wrong too.</p>

<h3>Verification Checklist</h3>
<ul>
<li><strong>Are the right actions being tracked?</strong> Ensure primary conversions reflect genuine business value (purchases, leads) not soft signals (page views, video plays)</li>
<li><strong>Is conversion counting correct?</strong> Leads should be "one per click" while sales can be "every"</li>
<li><strong>Are conversion values accurate?</strong> For e-commerce, check that dynamic values match actual order values</li>
<li><strong>Is the tracking tag firing correctly?</strong> Use Google Tag Assistant to verify tags fire only on actual conversions</li>
<li><strong>Are there duplicate conversions?</strong> Multiple tags tracking the same action inflate conversion numbers and mislead the algorithm</li>
<li><strong>Is enhanced conversions enabled?</strong> This improves measurement accuracy, especially with cookie restrictions</li>
</ul>

<p>Inaccurate conversion tracking is the single most common problem we find during audits at Spires Digital. It's often the root cause of apparently "mysterious" performance issues.</p>

<h2>Minutes 25–30: Wasted Spend Analysis</h2>

<p>Finally, look for the most obvious sources of wasted budget:</p>

<h3>Geographic Targeting</h3>
<p>Go to Locations and check both targeted locations and the "Matched location" report. Are you spending money in regions you don't serve? Is the setting on "Presence" (people physically in the location) or "Presence or interest" (the looser default that often wastes money)?</p>

<h3>Device Performance</h3>
<p>Check performance by device. If mobile has a significantly worse conversion rate but receives most of the budget, apply negative bid adjustments or create device-specific campaigns with tailored landing pages.</p>

<h3>Time of Day and Day of Week</h3>
<p>Review the ad schedule report. Are campaigns running 24/7 when conversions only happen during business hours? Apply bid adjustments to reduce spend during low-converting periods.</p>

<h3>Paused but Draining Campaigns</h3>
<p>Check for campaigns or ad groups that were paused but still accumulated spend due to shared budgets or scheduling errors.</p>

<div class="tip-box"><strong>Pro Tip:</strong> After your audit, prioritise fixes by estimated impact. A conversion tracking error that affects all campaigns is more urgent than a handful of missing negative keywords. Fix the foundations first — structure and tracking — before optimising creative and bids.</div>

<h2>What to Do After the Audit</h2>

<p>Create a prioritised action plan with three categories:</p>
<ul>
<li><strong>Urgent (fix this week):</strong> Conversion tracking errors, major wasted spend, broken landing pages</li>
<li><strong>Important (fix this month):</strong> Structural improvements, Quality Score fixes, extension gaps</li>
<li><strong>Optimisation (ongoing):</strong> Ad copy testing, bid adjustments, negative keyword expansion</li>
</ul>

<p>If the audit reveals significant issues, consider whether the account needs a full restructure rather than incremental fixes. Sometimes it's faster and more effective to rebuild from a clean foundation.</p>

<p>At Spires Digital, we offer complimentary Google Ads audits that go far deeper than a 30-minute check. We analyse every aspect of your account and provide a detailed action plan with projected impact. <a href="/contact">Book your free audit via our Calendly</a> and get an honest assessment of your account's health — no obligations, no sales pressure, just actionable insights.</p>

<details>
<summary>How often should I audit my Google Ads account?</summary>
<div class="faq-answer"><p>Perform a quick health check monthly and a thorough audit quarterly. If you've recently changed agencies, launched new campaigns, or noticed a performance shift, do an immediate audit. Regular audits prevent small issues from compounding into major problems over time.</p></div>
</details>

<details>
<summary>What's the biggest red flag in a Google Ads audit?</summary>
<div class="faq-answer"><p>Incorrect or missing conversion tracking. If conversions aren't being measured accurately, every other metric and optimisation decision is unreliable. The second biggest red flag is mixing Search and Display in the same campaign, as this almost always wastes significant budget on low-quality Display clicks.</p></div>
</details>

<details>
<summary>Can I audit someone else's Google Ads account?</summary>
<div class="faq-answer"><p>Yes, if you have the appropriate access level. You need at least "read-only" access to review performance data, search terms, and settings. For a full audit, you'll need access to conversion tracking setup (in both Google Ads and Google Tag Manager) and the connected GA4 property.</p></div>
</details>

<details>
<summary>Should I hire an agency to audit my account?</summary>
<div class="faq-answer"><p>An experienced agency will spot issues that even capable in-house teams miss, simply because they see dozens of accounts across industries. Many agencies, including <a href="/contact">Spires Digital</a>, offer free initial audits. Take advantage of these — even if you don't engage the agency, you'll get valuable insights into your account's strengths and weaknesses.</p></div>
</details>
`,

  'google-ads-scripts-guide': `
<p>Google Ads scripts are one of the most powerful yet underutilised tools available to advertisers. They let you automate routine tasks, monitor your account 24/7, and catch problems before they drain your budget. Written in JavaScript, scripts run directly within your Google Ads account and can read data, make changes, and send alerts without any external infrastructure.</p>

<p>This guide covers the most essential scripts every advertiser should be using in 2026, from basic monitoring to advanced automation. You don't need to be a developer to use these — most can be copied, configured with a few variables, and scheduled in minutes.</p>

<h2>Why Google Ads Scripts Matter</h2>

<p>Manual account management has limits. No human can check every landing page, monitor every bid, or catch every anomaly across a large account. Scripts fill this gap by:</p>
<ul>
<li><strong>Automating repetitive tasks:</strong> Free up time for strategic work instead of routine checks</li>
<li><strong>Running 24/7:</strong> Scripts monitor your account even when you're not online</li>
<li><strong>Reacting faster than humans:</strong> Catch and respond to performance anomalies in minutes, not days</li>
<li><strong>Maintaining consistency:</strong> Execute the same checks and rules reliably without human error</li>
<li><strong>Scaling across accounts:</strong> Apply the same logic to multiple campaigns or MCC accounts</li>
</ul>

<h2>Script 1: Link Checker</h2>

<p>Broken landing pages silently drain your budget. Every click to a 404 page is wasted money — and you might not notice for days if you're not checking manually. A link checker script crawls all your active ad URLs and alerts you immediately when one returns an error.</p>

<h3>What It Does</h3>
<ul>
<li>Checks all enabled ads' final URLs and sitelink URLs</li>
<li>Detects HTTP errors (404, 500, 503), redirects, and timeouts</li>
<li>Sends an email alert listing all broken URLs with campaign and ad group context</li>
<li>Optionally pauses ads with broken URLs to prevent further waste</li>
</ul>

<h3>Implementation Tips</h3>
<p>Schedule this script to run every 6 hours. Set the timeout threshold to 10 seconds — if a page takes longer than that, it's probably causing conversion issues regardless of whether it eventually loads. Include redirect detection because a redirect chain can slow down landing pages and affect Quality Score.</p>

<div class="tip-box"><strong>Pro Tip:</strong> Extend your link checker to also verify that conversion tracking tags are present on landing pages. A page that loads but has a missing or broken tracking tag is arguably worse than a 404 — you're paying for clicks and conversions you can't measure.</div>

<h2>Script 2: Automated Bid Adjustments</h2>

<p>While <a href="/blog/smart-bidding-strategies-explained">smart bidding</a> handles much of the bid optimisation, there are scenarios where scripts can add value — particularly for manual bidding campaigns or as guardrails for automated strategies.</p>

<h3>What It Does</h3>
<ul>
<li>Analyses performance by hour of day, day of week, or device</li>
<li>Applies bid adjustments based on conversion rate differentials</li>
<li>Increases bids during high-performing periods and decreases during low-performing ones</li>
<li>Logs all changes for audit trails</li>
</ul>

<h3>Practical Application</h3>
<p>Even with smart bidding, bid adjustment scripts can manage campaign-level device modifiers, geographic adjustments, and demographic adjustments that smart bidding doesn't fully control. For example, if mobile traffic consistently converts at 50% of desktop rates, a script can maintain a -30% mobile bid modifier across all campaigns automatically.</p>

<h2>Script 3: Quality Score Tracker</h2>

<p>Google doesn't provide historical Quality Score data in the interface — once it changes, the old value is gone. A Quality Score tracker script captures daily snapshots, giving you trend data that's invaluable for diagnosing performance changes.</p>

<h3>What It Does</h3>
<ul>
<li>Records Quality Score, Expected CTR, Ad Relevance, and Landing Page Experience for all keywords daily</li>
<li>Stores data in a Google Sheet for historical analysis</li>
<li>Highlights keywords with score drops in the last 7 days</li>
<li>Calculates impression-weighted average Quality Score by campaign</li>
</ul>

<h3>Why This Matters</h3>
<p>Quality Score trends correlate with CPC trends. If your average Quality Score drops from 7 to 5 over two months, your CPCs will rise significantly — potentially 30–50%. Catching this early lets you investigate root causes (landing page changes, competitor activity, ad fatigue) before the cost impact becomes severe.</p>

<p>Pair this script with regular <a href="/blog/google-ads-campaign-structure">campaign structure reviews</a> to maintain strong ad relevance scores.</p>

<h2>Script 4: Anomaly Detection and Alerts</h2>

<p>Anomaly detection scripts monitor your key metrics against historical baselines and alert you when something looks unusual. They're your early warning system for problems that might take days to notice through manual checking.</p>

<h3>What It Does</h3>
<ul>
<li>Compares today's spend, clicks, impressions, conversions, and CPA against the average of the last 7 or 14 days</li>
<li>Flags metrics that deviate by more than a configurable threshold (e.g., 30%)</li>
<li>Sends email or Slack alerts with the specific campaign, metric, and deviation details</li>
<li>Distinguishes between positive anomalies (unexpected improvement) and negative ones (potential problems)</li>
</ul>

<h3>Common Anomalies to Catch</h3>
<ul>
<li><strong>Spend spike:</strong> A campaign suddenly spending much faster than usual — could indicate a bidding error or a competitor dropping out (causing your ads to serve more)</li>
<li><strong>Conversion drop:</strong> Clicks are normal but conversions have stopped — often signals a tracking tag or landing page issue</li>
<li><strong>CTR collapse:</strong> A sudden CTR drop can indicate ad disapprovals, new competitors, or seasonal shifts</li>
<li><strong>CPC surge:</strong> Rapid CPC increases might mean increased competition or Quality Score declines</li>
</ul>

<div class="tip-box"><strong>Pro Tip:</strong> Set different sensitivity thresholds for different metrics. Spend and conversion anomalies should trigger alerts at a 20% deviation, while impression and click variations can tolerate 30–40% before warranting attention. This reduces alert fatigue without missing genuine problems.</div>

<h2>Script 5: Budget Pacing</h2>

<p>Budget pacing scripts ensure your campaigns spend their monthly budgets evenly throughout the month, preventing the common problem of running out of budget mid-month or having too much left at the end.</p>

<h3>What It Does</h3>
<ul>
<li>Calculates the ideal daily spend based on monthly budget and days remaining</li>
<li>Compares actual spend-to-date against the ideal pacing line</li>
<li>Adjusts daily budgets up or down to keep spending on track</li>
<li>Sends a daily summary showing pacing status for each campaign</li>
</ul>

<h3>Advanced Budget Pacing</h3>
<p>Basic pacing divides the monthly budget equally across all days. Advanced versions weight spending toward historically higher-performing days (e.g., weekdays for B2B) while maintaining the overall monthly target. Some versions also integrate with <a href="/blog/reduce-wasted-ad-spend-google-ads">waste reduction logic</a>, pulling budget from underperforming campaigns and redistributing to top performers.</p>

<h2>Bonus Scripts Worth Considering</h2>

<h3>N-Gram Analysis Script</h3>
<p>Analyses search terms by word combinations (bigrams, trigrams) to identify patterns in converting and non-converting traffic. This automates negative keyword discovery at scale — far more efficient than manually reviewing search terms.</p>

<h3>Ad Copy Performance Reporter</h3>
<p>Generates weekly reports comparing RSA headline and description performance, highlighting which assets Google is showing most frequently and which have the highest conversion rates.</p>

<h3>Competitor Monitoring</h3>
<p>Tracks your Auction Insights data daily and alerts you when new competitors appear or existing ones significantly change their impression share. This provides early intelligence on competitive shifts.</p>

<h2>How to Install and Schedule Scripts</h2>

<p>Setting up scripts in Google Ads is straightforward:</p>
<ul>
<li>Navigate to <strong>Tools &amp; Settings → Bulk Actions → Scripts</strong></li>
<li>Click the plus button to create a new script</li>
<li>Paste your script code and authorise it to access your account</li>
<li>Preview the script to test it without making changes</li>
<li>Set a schedule (hourly, daily, or weekly depending on the script's purpose)</li>
</ul>

<p>Always preview scripts before enabling them, especially any script that makes changes (pausing ads, adjusting bids). Start with monitoring-only scripts that send alerts, then graduate to automated actions once you trust the logic.</p>

<h2>Scripts vs. Rules vs. Smart Bidding</h2>

<p>Google Ads offers three automation layers, each with different strengths:</p>
<ul>
<li><strong>Automated rules:</strong> Simple if/then logic built into the interface. Good for basic actions but limited flexibility</li>
<li><strong>Scripts:</strong> Custom JavaScript that can handle complex logic, external data sources, and multi-step processes</li>
<li><strong>Smart bidding:</strong> Google's machine learning for bid optimisation. Excellent at what it does but operates as a black box</li>
</ul>

<p>Scripts complement smart bidding rather than replacing it. Use smart bidding for bid optimisation and scripts for monitoring, alerting, and managing the aspects that smart bidding doesn't cover — like link checking, budget pacing, and Quality Score tracking.</p>

<p>At Spires Digital, we deploy custom scripts across every client account to ensure nothing falls through the cracks. Our monitoring systems catch problems in minutes, not days — saving our clients thousands in wasted spend. <a href="/contact">Book a free account review via our Calendly</a> and we'll show you which scripts could make the biggest difference to your account performance.</p>

<details>
<summary>Do I need to know JavaScript to use Google Ads scripts?</summary>
<div class="faq-answer"><p>Not necessarily. Many useful scripts are available online and can be copied into your account with minimal configuration — typically just changing email addresses, thresholds, and account-specific values. However, basic JavaScript knowledge helps when customising scripts or troubleshooting errors. Google's documentation and communities like the Google Ads Script forums are excellent resources for beginners.</p></div>
</details>

<details>
<summary>Can scripts break my Google Ads account?</summary>
<div class="faq-answer"><p>Scripts that only read data and send alerts carry no risk. Scripts that make changes (pausing ads, adjusting bids) should be tested carefully using the "Preview" function before scheduling. Start with monitoring scripts, review their outputs for a week, and only then enable automated actions. All script changes are logged and reversible.</p></div>
</details>

<details>
<summary>How many scripts can I run on one account?</summary>
<div class="faq-answer"><p>Google Ads allows up to 100 scripts per account, with an execution time limit of 30 minutes per script. In practice, most accounts benefit from 5–10 core scripts covering link checking, anomaly detection, Quality Score tracking, budget pacing, and custom reporting. Running too many scripts with overlapping logic can create conflicts.</p></div>
</details>

<details>
<summary>Are Google Ads scripts free to use?</summary>
<div class="faq-answer"><p>Yes. Google Ads scripts are a built-in feature available at no additional cost to all Google Ads advertisers. The only potential costs are if your scripts interact with external services (like sending SMS alerts) or store data in Google Sheets that exceed free storage limits — but these are extremely rare scenarios.</p></div>
</details>
`,

  'demand-gen-campaigns-google-ads': `
<p>Demand Gen campaigns represent Google's biggest evolution in upper-funnel advertising since the launch of Discovery ads. Released as the successor to Discovery campaigns in 2023, Demand Gen has matured significantly by 2026 into a powerful tool for reaching new audiences across YouTube, Gmail, and Google Discover — all from a single campaign type.</p>

<p>This guide explains what Demand Gen campaigns are, how they differ from other campaign types, and how to use them effectively to generate awareness, interest, and ultimately conversions for your business.</p>

<h2>What Are Demand Gen Campaigns?</h2>

<p>Demand Gen campaigns are a Google Ads campaign type designed to reach and engage potential customers across Google's most visual, content-rich surfaces. They serve ads on:</p>
<ul>
<li><strong>YouTube:</strong> In-stream, in-feed, and Shorts placements</li>
<li><strong>Google Discover:</strong> The personalised content feed on Android devices and the Google app</li>
<li><strong>Gmail:</strong> The Promotions and Social tabs of Gmail</li>
</ul>

<p>Unlike Search campaigns that capture existing demand (people actively searching for your product), Demand Gen campaigns <em>create</em> demand by putting your brand in front of people who match your ideal customer profile but aren't yet actively searching for what you sell.</p>

<h2>How Demand Gen Replaced Discovery Campaigns</h2>

<p>Google retired Discovery campaigns and automatically upgraded them to Demand Gen in late 2023. The key improvements include:</p>
<ul>
<li><strong>YouTube placements:</strong> Discovery campaigns didn't serve on YouTube — Demand Gen does, massively expanding reach</li>
<li><strong>Video ad support:</strong> You can now use video creative alongside image ads within the same campaign</li>
<li><strong>Lookalike segments:</strong> Expanded audience tools that mirror Meta's lookalike audiences</li>
<li><strong>A/B creative testing:</strong> Built-in experiment tools for testing creative variations</li>
<li><strong>More bidding options:</strong> Including Maximise Clicks alongside conversion-focused strategies</li>
</ul>

<p>If you're comparing Demand Gen with <a href="/blog/performance-max-campaigns-guide">Performance Max campaigns</a>, the key difference is control. Performance Max automates everything across all Google channels. Demand Gen gives you more control over placements, audiences, and creative while still benefiting from Google's machine learning.</p>

<h2>When to Use Demand Gen Campaigns</h2>

<p>Demand Gen is most effective in these scenarios:</p>
<ul>
<li><strong>Brand awareness:</strong> Introducing your brand to new audiences who aren't searching for you yet</li>
<li><strong>Product launches:</strong> Creating buzz and interest around new products or services</li>
<li><strong>Top-of-funnel lead generation:</strong> Capturing email addresses and building remarketing audiences</li>
<li><strong>Competitive positioning:</strong> Reaching your competitors' audiences with compelling alternative messaging</li>
<li><strong>Supplementing search:</strong> Expanding beyond the limitations of intent-based search advertising</li>
</ul>

<p>Demand Gen works particularly well alongside a strong remarketing strategy. You use Demand Gen to introduce prospects to your brand, then <a href="/blog/youtube-ads-for-business">YouTube ads</a> and display remarketing to nurture them toward conversion.</p>

<div class="tip-box"><strong>Pro Tip:</strong> Don't evaluate Demand Gen campaigns on the same last-click CPA targets as your Search campaigns. These are upper-funnel campaigns that create demand rather than capture it. Measure success through assisted conversions, new user acquisition, and the lift in branded search volume after launch.</div>

<h2>Audience Targeting in Demand Gen</h2>

<p>Demand Gen's audience capabilities are its strongest feature and what differentiates it from other Google campaign types:</p>

<h3>Custom Segments</h3>
<p>Build audiences based on people's recent Google search activity, app usage, or website visits. For example, target people who searched for terms related to your product category in the last 14 days — bridging the gap between search intent and visual advertising.</p>

<h3>Lookalike Segments</h3>
<p>Similar to Meta's lookalike audiences, Google's lookalike segments find new users who share characteristics with your existing customers or website visitors. You can choose between narrow (top 2.5%), balanced (top 5%), and broad (top 10%) targeting, controlling the trade-off between precision and reach.</p>

<h3>In-Market and Affinity Audiences</h3>
<p>Layer Google's pre-built audience segments to reach people actively shopping in your category (in-market) or with long-term relevant interests (affinity). These work well as supplementary signals alongside custom segments.</p>

<h3>Customer Match and First-Party Data</h3>
<p>Upload your customer lists to target existing customers or create lookalike audiences based on your best customers. With first-party data becoming increasingly valuable as third-party cookies phase out, this is one of the most powerful features available. When comparing approach strategies, our <a href="/blog/google-ads-vs-meta-ads-2026">Google Ads vs Meta Ads guide</a> covers how audience targeting differs between platforms.</p>

<h2>Creative Best Practices for Demand Gen</h2>

<p>Demand Gen supports both image and video creative, and using both together typically outperforms either alone. Here's how to get the most from each format:</p>

<h3>Image Ads</h3>
<ul>
<li><strong>Use high-quality lifestyle imagery:</strong> Demand Gen placements are content-rich environments — your ads need to feel native, not disruptive</li>
<li><strong>Provide multiple aspect ratios:</strong> Square (1:1), landscape (1.91:1), and portrait (4:5) to ensure optimal display across all placements</li>
<li><strong>Test product-focused vs. lifestyle imagery:</strong> Different audiences respond to different visual approaches</li>
<li><strong>Include clear branding:</strong> Users may not click — make sure brand impression is conveyed even at a glance</li>
</ul>

<h3>Video Ads</h3>
<ul>
<li><strong>Keep it under 30 seconds:</strong> Shorter videos perform better in feed-based environments</li>
<li><strong>Design for sound-off:</strong> Many users browse with sound muted — use captions, text overlays, and visual storytelling</li>
<li><strong>Hook in the first 3 seconds:</strong> You're competing with organic content for attention</li>
<li><strong>End with a clear CTA:</strong> Tell viewers exactly what to do next</li>
</ul>

<h3>Ad Copy</h3>
<p>Provide multiple headlines and descriptions so Google can test combinations. Write copy that sparks curiosity or addresses a pain point — remember, these users aren't searching for you, so your messaging needs to interrupt and earn attention.</p>

<div class="tip-box"><strong>Pro Tip:</strong> Create separate ad groups for different audience segments and tailor your creative to each. An ad targeting in-market shoppers should emphasise your competitive advantages and offer, while one targeting lookalike audiences should focus on brand story and credibility. Generic one-size-fits-all creative underperforms personalised messaging by 20–40%.</div>

<h2>Bidding Strategies for Demand Gen</h2>

<p>Choose your bidding strategy based on your campaign objective:</p>
<ul>
<li><strong>Maximise Clicks:</strong> Best for driving traffic and building remarketing audiences. Use when you're starting out and need data</li>
<li><strong>Maximise Conversions:</strong> Let Google find users most likely to convert. Requires at least 50 conversions per month for reliable optimisation</li>
<li><strong>Target CPA:</strong> Set your target cost per conversion once you have enough data to establish a baseline</li>
<li><strong>Target ROAS:</strong> Optimise for revenue. Best for e-commerce with reliable conversion value tracking</li>
</ul>

<p>Start with Maximise Clicks to gather data, then transition to conversion-based bidding once you've accumulated enough conversion signals. Allow 2–4 weeks of learning before judging performance.</p>

<h2>Measuring Demand Gen Performance</h2>

<p>Traditional last-click metrics don't tell the full story for demand generation campaigns. Track these metrics instead:</p>
<ul>
<li><strong>View-through conversions:</strong> Users who saw your ad and later converted without clicking</li>
<li><strong>Assisted conversions in GA4:</strong> How often Demand Gen appears in multi-touch conversion paths</li>
<li><strong>New user percentage:</strong> What proportion of traffic from Demand Gen is first-time visitors</li>
<li><strong>Branded search lift:</strong> Monitor branded search volume before and after launching Demand Gen</li>
<li><strong>Audience growth:</strong> Track the size of your remarketing audiences — healthy growth indicates effective prospecting</li>
<li><strong>Engagement metrics:</strong> Video completion rates, click-through rates, and time on site after clicking</li>
</ul>

<h2>Demand Gen vs. Performance Max: Which Should You Use?</h2>

<p>Both campaign types use Google's AI, but they serve different purposes:</p>
<ul>
<li><strong>Use Demand Gen when:</strong> You want control over creative and audiences, you're focused on upper-funnel awareness, or you want to run campaigns specifically on YouTube, Gmail, and Discover</li>
<li><strong>Use Performance Max when:</strong> You want maximum reach across all Google surfaces including Search and Shopping, you're optimising for conversions with less concern about which placement drives them</li>
<li><strong>Use both:</strong> Demand Gen for prospecting and awareness, Performance Max for conversion-focused campaigns. They complement each other well</li>
</ul>

<h2>Common Demand Gen Mistakes</h2>

<ul>
<li><strong>Evaluating on last-click CPA:</strong> Demand Gen influences conversions that are attributed to other campaigns. Look at the full picture</li>
<li><strong>Under-investing in creative:</strong> This is a visual format — stock images and lazy copy won't cut it</li>
<li><strong>Too narrow audiences:</strong> Demand Gen needs audience scale to optimise. Start broader and narrow based on data</li>
<li><strong>No remarketing follow-up:</strong> Demand Gen fills the top of your funnel, but you need middle and bottom funnel campaigns to convert those prospects</li>
<li><strong>Killing campaigns too early:</strong> Allow 4–6 weeks for the algorithm to learn. Pausing after one week of mediocre results wastes the learning investment</li>
</ul>

<p>Demand Gen campaigns are essential for businesses looking to grow beyond the ceiling of search advertising. At Spires Digital, we build integrated campaign strategies that use Demand Gen to feed your entire marketing funnel. <a href="/contact">Book a free strategy consultation via our Calendly</a> to explore how Demand Gen can complement your existing Google Ads campaigns.</p>

<details>
<summary>How much budget do I need for Demand Gen campaigns?</summary>
<div class="faq-answer"><p>We recommend a minimum daily budget of £30–£50 to give the algorithm enough data to optimise. For meaningful results, plan for at least £1,000–£2,000 per month. Demand Gen benefits from scale — insufficient budgets lead to slow learning and inconsistent delivery.</p></div>
</details>

<details>
<summary>Can Demand Gen campaigns drive direct conversions?</summary>
<div class="faq-answer"><p>Yes, though typically at a higher CPA than Search campaigns. Demand Gen is most effective when measured holistically — the direct conversions it generates plus the assisted conversions it influences across other campaigns. Many businesses find their overall account CPA decreases when Demand Gen is added because it fills the remarketing funnel.</p></div>
</details>

<details>
<summary>What's the difference between Demand Gen and YouTube Ads campaigns?</summary>
<div class="faq-answer"><p>Dedicated YouTube campaigns (Video campaigns) offer more granular control over video-specific features like sequencing, companion banners, and detailed video metrics. Demand Gen includes YouTube as one of its placements alongside Gmail and Discover, with a focus on cross-platform reach and conversion optimisation. For pure video branding, use Video campaigns. For cross-platform demand generation, use Demand Gen.</p></div>
</details>

<details>
<summary>Should I use Demand Gen or Meta Ads for prospecting?</summary>
<div class="faq-answer"><p>Both have strengths. Meta Ads offer deeper social targeting and typically better creative testing tools. Google's Demand Gen leverages search intent signals and reaches users across YouTube, Gmail, and Discover. The best approach is usually both — running coordinated campaigns across Google and Meta to maximise reach. Read our <a href="/blog/google-ads-vs-meta-ads-2026">full comparison</a> for detailed guidance.</p></div>
</details>
`,

  'local-ppc-google-ads-guide': `
<p>Local businesses — from plumbers and solicitors to restaurants and dental practices — have unique advertising needs that generic Google Ads guides rarely address. Your customers are searching within a specific geographic area, often from mobile devices, and frequently need your service urgently. This requires a fundamentally different approach to campaign structure, targeting, and bidding.</p>

<p>This guide covers everything a local business needs to know about running profitable Google Ads campaigns in 2026, with practical strategies you can implement immediately.</p>

<h2>Why Google Ads Works for Local Businesses</h2>

<p>Local businesses benefit from one of the strongest advantages in digital advertising: <strong>high commercial intent combined with geographic precision</strong>. When someone searches "emergency plumber near me" or "dentist accepting new patients in Manchester," they're ready to buy — and they want a local provider. Google Ads puts you at the top of results for exactly these searches.</p>
<ul>
<li><strong>Immediate visibility:</strong> Appear above organic results for high-intent local searches from day one</li>
<li><strong>Geographic precision:</strong> Only show ads to people in your service area — no wasted spend on distant prospects</li>
<li><strong>Mobile dominance:</strong> Most local searches happen on mobile, and Google Ads dominates mobile SERPs</li>
<li><strong>Measurable results:</strong> Track every call, form submission, and direction request back to specific keywords</li>
</ul>

<h2>Location Targeting: Getting It Right</h2>

<p>Location targeting is the foundation of local PPC. Get this wrong and you'll waste budget on people you can't serve. Here's how to set it up properly:</p>

<h3>Radius Targeting</h3>
<p>The simplest approach: set a radius around your business location. A 10-mile radius works well for most local services, though this varies by industry and population density. A city-centre restaurant might use 3 miles; a specialist consultant might use 30.</p>
<p>Use bid adjustments within your radius to bid more aggressively for people closer to your location. Someone 2 miles away is more likely to visit than someone 15 miles away — adjust your bids to reflect this reality.</p>

<h3>Postcode and City Targeting</h3>
<p>For businesses with clearly defined service areas, target specific postcodes or cities rather than a radius. This is particularly useful when your service area isn't a neat circle — perhaps you serve three specific towns but not the rural areas between them.</p>

<h3>Critical Setting: Presence vs. Presence or Interest</h3>
<p>This is the single most important location setting and the one most often configured incorrectly. Google's default is "Presence or interest," which shows ads to people who are <em>interested in</em> your location — not just people physically there. A traveller in London researching "hotels in Birmingham" would see your Birmingham ads, even though they're currently in London.</p>
<p>For most local businesses, change this to <strong>"Presence: People in or regularly in your targeted locations"</strong>. This ensures you're only paying for clicks from people who are genuinely local.</p>

<div class="tip-box"><strong>Pro Tip:</strong> Add location exclusions for areas you don't serve. If you're a plumber covering South Manchester but not North Manchester, explicitly exclude the postcodes you can't reach. This prevents wasting budget on enquiries you'll have to turn away.</div>

<h2>Local Search Ads and Google Business Profile</h2>

<p>Local Search Ads appear in Google Maps results, making them essential for businesses with physical locations. They require a linked Google Business Profile (GBP) and Location Assets in your Google Ads account.</p>

<h3>Setting Up Location Assets</h3>
<ul>
<li>Link your Google Business Profile to your Google Ads account</li>
<li>Enable Location Assets at the campaign or account level</li>
<li>Your ads will now show your address, opening hours, and a "Directions" button</li>
<li>Map pin ads will appear when users search on Google Maps</li>
</ul>

<h3>Optimising Your Google Business Profile</h3>
<p>Your GBP directly impacts ad performance. Ensure it's fully optimised:</p>
<ul>
<li><strong>Complete all business information:</strong> Name, address, phone, website, hours, categories, and attributes</li>
<li><strong>Add high-quality photos:</strong> Businesses with photos receive 42% more requests for directions and 35% more website clicks</li>
<li><strong>Collect and respond to reviews:</strong> Review quantity and rating affect local ad prominence</li>
<li><strong>Post regular updates:</strong> Google favours active, well-maintained profiles</li>
<li><strong>Add products and services:</strong> Detailed listings help Google match your business to relevant searches</li>
</ul>

<h2>Call Ads for Local Businesses</h2>

<p>For service-based local businesses, phone calls are often the primary conversion type. Google offers several ways to drive and track calls:</p>

<h3>Call Extensions</h3>
<p>Add your phone number to search ads so mobile users can tap to call directly. Schedule these to show only during business hours. For a detailed setup guide, see our article on <a href="/blog/how-to-track-phone-calls-google-ads">tracking phone calls from Google Ads</a>.</p>

<h3>Call-Only Campaigns</h3>
<p>Dedicated campaigns where clicking the ad makes a phone call instead of visiting a website. Ideal for emergency services (plumbers, locksmiths, electricians) where the customer wants to speak to someone immediately. CPCs are higher but conversion rates are typically excellent because every click represents genuine intent to engage.</p>

<h3>Call Tracking and Measurement</h3>
<p>Install call tracking to attribute calls to specific keywords and campaigns. Without this data, you can't optimise effectively. Use Google's forwarding numbers as a minimum, and consider a third-party platform for call recording and quality scoring. You need to know not just <em>how many</em> calls you're getting, but <em>which ones</em> turn into customers.</p>

<h2>Campaign Structure for Local Businesses</h2>

<p>Keep your structure simple but strategic:</p>

<h3>Recommended Campaign Types</h3>
<ul>
<li><strong>Branded search campaign:</strong> Capture people searching for your business name — low cost, high conversion</li>
<li><strong>Service-based search campaigns:</strong> Separate campaigns for each major service (e.g., "Boiler Repair," "Central Heating Installation")</li>
<li><strong>Emergency/urgent campaign:</strong> Target urgent keywords ("emergency," "same day," "24 hour") with higher bids and call-focused ads</li>
<li><strong>Competitor campaign:</strong> Target competitor brand names to capture comparison shoppers</li>
<li><strong>Remarketing campaign:</strong> Re-engage website visitors who didn't convert on first visit</li>
</ul>

<h3>Keyword Strategy</h3>
<p>Focus on keywords with local and commercial intent:</p>
<ul>
<li><strong>Service + location:</strong> "electrician in Leeds," "dentist Nottingham"</li>
<li><strong>Service + modifier:</strong> "emergency plumber," "same day carpet cleaning"</li>
<li><strong>Service + qualifier:</strong> "affordable accountant," "best Italian restaurant"</li>
<li><strong>"Near me" terms:</strong> "plumber near me," "coffee shop near me"</li>
</ul>

<p>For accurate budgeting across these campaigns, our <a href="/blog/how-to-calculate-google-ads-budget">Google Ads budget calculator guide</a> walks through the numbers step by step.</p>

<div class="tip-box"><strong>Pro Tip:</strong> Create a separate ad group for "near me" keywords. These searches have extremely high intent — the person is actively looking for a nearby provider right now. Bid aggressively on these terms and ensure your Location Assets are active so your address appears in the ad.</div>

<h2>Ad Copy Tips for Local Businesses</h2>

<p>Local ad copy should emphasise proximity, availability, and trust:</p>
<ul>
<li><strong>Include location in headlines:</strong> "Trusted Plumber in South Manchester" performs better than generic "Professional Plumbing Services"</li>
<li><strong>Highlight availability:</strong> "Same Day Appointments," "Open 7 Days," "24/7 Emergency Service"</li>
<li><strong>Use social proof:</strong> "Rated 4.9 Stars on Google," "500+ 5-Star Reviews," "Serving Bristol Since 2010"</li>
<li><strong>Add urgency:</strong> "Free Quote Today," "Limited Availability This Week"</li>
<li><strong>Include a direct CTA:</strong> "Call Now," "Book Online in 60 Seconds," "Get Your Free Estimate"</li>
</ul>

<h2>Budgeting for Local PPC</h2>

<p>Local businesses can run effective Google Ads campaigns on surprisingly modest budgets because geographic targeting naturally limits competition and costs. Here are realistic benchmarks:</p>
<ul>
<li><strong>Minimum viable budget:</strong> £500–£1,000/month for a single-location business in a moderately competitive market</li>
<li><strong>Competitive budget:</strong> £1,500–£3,000/month for multiple service categories or competitive industries (legal, dental, home services)</li>
<li><strong>Aggressive growth:</strong> £3,000–£5,000+/month for multi-location businesses or highly competitive markets</li>
</ul>

<p>Start with your highest-intent, highest-value services and expand from there. It's better to dominate a narrow set of profitable keywords than to spread thin across everything you offer.</p>

<h2>Measuring Local PPC Success</h2>

<p>Track these metrics to understand your local campaign performance:</p>
<ul>
<li><strong>Phone calls (tracked):</strong> The most common conversion for local service businesses</li>
<li><strong>Direction requests:</strong> Via Location Assets — indicates foot traffic intent</li>
<li><strong>Form submissions:</strong> Quote requests, appointment bookings, contact forms</li>
<li><strong>Cost per lead:</strong> Total ad spend divided by total tracked conversions</li>
<li><strong>Customer acquisition cost:</strong> Factor in the close rate of your leads to calculate true acquisition cost</li>
</ul>

<p>If you serve a local area, Google Ads is one of the most cost-effective ways to reach customers who are actively searching for what you offer. At Spires Digital, we specialise in <a href="/industries/local-business">local business advertising</a> that drives real phone calls and walk-ins, not vanity metrics. <a href="/contact">Book a free local PPC consultation via our Calendly</a> and we'll show you exactly how many potential customers are searching for your services in your area every month.</p>

<details>
<summary>How much should a local business spend on Google Ads?</summary>
<div class="faq-answer"><p>Most local businesses can start seeing results with £500–£1,000 per month, though competitive industries like legal, dental, and home services may need £1,500–£3,000 or more. The right budget depends on your average customer value, close rate, and competition level. Start with your highest-value services and scale up as you prove ROI.</p></div>
</details>

<details>
<summary>Should I use Google Ads or SEO for my local business?</summary>
<div class="faq-answer"><p>Ideally, both. Google Ads delivers immediate visibility while SEO builds long-term organic presence. If you need leads today, start with Google Ads. Build your SEO strategy in parallel for sustainable growth. Many local businesses find that Google Ads provides the best ROI for high-intent commercial searches while SEO drives informational and discovery traffic.</p></div>
</details>

<details>
<summary>What is radius targeting in Google Ads?</summary>
<div class="faq-answer"><p>Radius targeting lets you show ads only to people within a specified distance from your business location — for example, 10 miles. You can set different bid adjustments at different distances, bidding more for people closer to your location. It's the most common targeting method for single-location local businesses.</p></div>
</details>

<details>
<summary>How do I track walk-in customers from Google Ads?</summary>
<div class="faq-answer"><p>Google offers Store Visit conversions for businesses that meet eligibility requirements (sufficient foot traffic data, linked Google Business Profile, and multiple locations). For smaller businesses, use proxy metrics like direction requests from Location Assets, call tracking, and post-visit surveys asking "How did you hear about us?" These methods together give a reasonable picture of ad-driven foot traffic.</p></div>
</details>
`,

  'google-ads-broad-match-2026': `
<p>Broad match keywords have a reputation problem. For years, "broad match" was synonymous with "wasted spend" — a match type that showed your ads for wildly irrelevant searches, burning through budgets without delivering conversions. But Google has fundamentally redesigned how broad match works, and in 2026, it's a genuinely useful tool when used correctly.</p>

<p>This guide explains how broad match has evolved, when it's safe to use, the guardrails you need in place, and how to combine it with smart bidding for results that outperform phrase and exact match in many scenarios.</p>

<h2>How Broad Match Has Changed</h2>

<p>The broad match of 2018 and the broad match of 2026 are almost unrecognisable. Here's what's different:</p>

<h3>Old Broad Match (Pre-2020)</h3>
<p>Old broad match was essentially keyword-adjacent guessing. A keyword like "running shoes" could trigger your ad for "shoe repair," "celebrity runners," or "walking boots." The matching was based on loose word associations rather than genuine intent signals. This made broad match a budget-draining liability for most advertisers.</p>

<h3>Modern Broad Match (2026)</h3>
<p>Google's current broad match algorithm uses AI and a deep understanding of search context to match your keywords with relevant searches. It considers:</p>
<ul>
<li><strong>User intent:</strong> What the searcher is actually trying to accomplish, not just the words they typed</li>
<li><strong>Landing page content:</strong> Your ad is matched to searches that align with what your page actually offers</li>
<li><strong>Other keywords in the ad group:</strong> Broad match uses your other keywords as context signals</li>
<li><strong>Previous search behaviour:</strong> The user's recent search history informs whether a match is relevant</li>
<li><strong>Location and language signals:</strong> Geographic and linguistic context improves matching accuracy</li>
</ul>

<p>The result is a broad match system that's dramatically more relevant than its predecessor. It still casts a wider net than phrase or exact match, but it does so with intelligence rather than brute force.</p>

<h2>When Broad Match Makes Sense in 2026</h2>

<p>Broad match isn't right for every situation. Here's when it works well and when you should stick to tighter match types:</p>

<h3>Good Candidates for Broad Match</h3>
<ul>
<li><strong>Accounts with strong conversion data:</strong> Smart bidding algorithms need conversion signals to work effectively with broad match. If you're getting 30+ conversions per month, broad match can find valuable queries you'd never think to target</li>
<li><strong>Discovery campaigns:</strong> When your goal is to find new converting search terms you haven't identified yet, broad match is a systematic way to explore</li>
<li><strong>Large accounts with established Quality Scores:</strong> The landing page and ad relevance signals that broad match uses are stronger when your account has a positive history</li>
<li><strong>Brand campaigns:</strong> Broad match on your brand name captures misspellings, related queries, and brand + product combinations efficiently</li>
</ul>

<h3>Poor Candidates for Broad Match</h3>
<ul>
<li><strong>New accounts with no conversion history:</strong> Without conversion data, smart bidding can't guide broad match effectively</li>
<li><strong>Very small budgets:</strong> Broad match explores more queries, which requires more budget to find what works</li>
<li><strong>Niche industries with specific terminology:</strong> If your business serves a highly specialised market, broad match may match too many general searches</li>
<li><strong>Manual bidding:</strong> Broad match without smart bidding is still risky — you need the algorithm to manage the wider query pool</li>
</ul>

<div class="tip-box"><strong>Pro Tip:</strong> The safest way to test broad match is to duplicate an existing high-performing exact match campaign, switch the keywords to broad match, and run both simultaneously. Compare CPAs over 4–6 weeks. If broad match delivers comparable or better CPAs at higher volume, you've validated the approach for that campaign.</div>

<h2>Essential Guardrails for Broad Match</h2>

<p>Even modern broad match needs guardrails. Here are the essential controls to put in place before activating broad match keywords:</p>

<h3>1. Smart Bidding Is Non-Negotiable</h3>
<p>Always pair broad match with a <a href="/blog/smart-bidding-strategies-explained">smart bidding strategy</a> — Target CPA, Target ROAS, or Maximise Conversions. Smart bidding evaluates each individual auction and adjusts your bid based on the likelihood of conversion. Without it, broad match will enter auctions for queries that might be relevant but unlikely to convert, and you'll pay full price for every click.</p>

<h3>2. Robust Negative Keywords</h3>
<p>Negative keywords are your first line of defence against irrelevant traffic. Before enabling broad match:</p>
<ul>
<li>Review your existing <a href="/blog/google-ads-negative-keywords-guide">negative keyword lists</a> and expand them</li>
<li>Add negatives for informational queries ("what is," "how does," "definition") unless you're targeting top-of-funnel</li>
<li>Exclude job-related terms ("salary," "career," "vacancy," "jobs")</li>
<li>Block free-seekers ("free," "cheap," "discount") if that's not your positioning</li>
<li>Add competitor names as negatives unless you intentionally target them</li>
</ul>

<h3>3. Weekly Search Terms Review</h3>
<p>Check your search terms report at least weekly when running broad match — daily for the first two weeks. Add new negatives for any irrelevant queries that slip through. Over time, your negative keyword list will mature and the volume of irrelevant matches will decrease.</p>

<h3>4. Conversion Tracking Must Be Accurate</h3>
<p>Smart bidding makes decisions based on conversion data. If your tracking is inaccurate — overcounting conversions, missing conversions, or tracking the wrong actions — broad match combined with smart bidding will optimise for the wrong signals. Audit your conversion tracking before enabling broad match.</p>

<h3>5. Adequate Budget</h3>
<p>Broad match generates more impressions and clicks than tighter match types. Ensure your daily budget can accommodate this increased volume without hitting budget caps early in the day. Budget-constrained broad match campaigns miss their best opportunities when budget runs out before peak converting hours.</p>

<h2>Combining Broad Match with Smart Bidding</h2>

<p>The combination of broad match and smart bidding is where the magic happens. Here's why they work so well together:</p>

<h3>How They Complement Each Other</h3>
<p>Broad match expands your keyword pool by matching to a wider range of queries. Smart bidding evaluates each query individually and bids appropriately. For a relevant, high-intent query, smart bidding bids strongly. For a marginally relevant query, it bids conservatively or opts not to enter the auction at all.</p>

<p>This means broad match with smart bidding doesn't blindly bid the same amount on every query — it's selectively aggressive, investing most of your budget in the queries most likely to convert while using minimal budget to test new opportunities.</p>

<h3>Best Practices for the Combination</h3>
<ul>
<li><strong>Start with Target CPA:</strong> Set your target CPA at or slightly above your current CPA to give the algorithm room to explore</li>
<li><strong>Allow a learning period:</strong> Google needs 2–4 weeks to calibrate smart bidding with broad match. Expect performance variability during this period</li>
<li><strong>Don't restrict too much:</strong> Avoid adding so many negatives that broad match can't explore. The goal is guided expansion, not locked-down targeting</li>
<li><strong>Monitor search query volume:</strong> Healthy broad match should generate 30–50% more unique search terms than phrase match</li>
</ul>

<h2>Broad Match vs. Phrase Match vs. Exact Match in 2026</h2>

<p>All three match types have evolved significantly. Here's how they compare today:</p>
<ul>
<li><strong>Exact match:</strong> Still provides the tightest control but now matches close variants, plurals, and implied intent. Best for your highest-value, most specific keywords where precise targeting is essential</li>
<li><strong>Phrase match:</strong> Matches searches that include the meaning of your keyword. The middle ground between control and reach. Good for most core campaigns</li>
<li><strong>Broad match:</strong> Matches searches related to the meaning of your keyword, using additional context signals. Best for discovery and scaling when paired with smart bidding</li>
</ul>

<p>Many advertisers now use a tiered approach: exact match for top-performing, proven keywords with tight CPAs; phrase match for core campaign coverage; and broad match for expansion and discovery. This layered <a href="/blog/google-ads-campaign-structure">campaign structure</a> balances control with growth.</p>

<div class="tip-box"><strong>Pro Tip:</strong> Check the "Search terms" report to see how broad match is interpreting your keywords. If broad match is finding converting queries you haven't targeted with exact or phrase match, add those as exact match keywords in their own ad group with tailored ad copy. This "harvesting" strategy gives you the best of both worlds — broad match discovery plus exact match precision.</div>

<h2>Real-World Results: What to Expect</h2>

<p>Based on our experience managing broad match transitions at Spires Digital, here's what typical results look like:</p>
<ul>
<li><strong>First 2 weeks:</strong> CPA may increase 10–20% as the system explores new queries. This is normal and expected</li>
<li><strong>Weeks 3–4:</strong> CPA stabilises as smart bidding learns which queries convert. Negative keyword additions from your search terms reviews reduce wasted spend</li>
<li><strong>Month 2+:</strong> Mature broad match campaigns typically deliver 20–40% more conversions at a similar or slightly higher CPA compared to phrase/exact only. The incremental volume often makes the slightly higher CPA worthwhile</li>
</ul>

<h2>Common Broad Match Mistakes</h2>

<ul>
<li><strong>Using broad match with manual bidding:</strong> Without smart bidding to regulate bids per query, you'll overpay for irrelevant traffic</li>
<li><strong>Not reviewing search terms:</strong> Broad match requires more active management than tighter match types. Weekly search terms reviews are essential</li>
<li><strong>Panicking during the learning period:</strong> Initial CPA increases are normal. Give the algorithm time before drawing conclusions</li>
<li><strong>Running out of budget:</strong> Broad match with insufficient budget hits limits early, missing your best traffic later in the day</li>
<li><strong>Ignoring negative keywords:</strong> Even smart broad match benefits enormously from well-maintained negative keyword lists</li>
</ul>

<h2>Is Broad Match Safe in 2026? The Verdict</h2>

<p>Yes — with the right conditions. Broad match in 2026 is a sophisticated, AI-powered tool that can significantly expand your reach and conversion volume. But it's not a set-and-forget match type. You need smart bidding, active negative keyword management, accurate conversion tracking, and adequate budget. When these guardrails are in place, broad match is not just safe — it's one of the most effective scaling levers available in Google Ads.</p>

<p>At Spires Digital, we strategically use broad match across client accounts to find converting queries that competitors miss. Our systematic approach to testing, monitoring, and optimising broad match campaigns has delivered significant volume increases without sacrificing efficiency. <a href="/contact">Book a free keyword strategy consultation via our Calendly</a> to discuss whether broad match is right for your campaigns.</p>

<details>
<summary>Will broad match waste my budget?</summary>
<div class="faq-answer"><p>Not if you use it correctly. Broad match paired with smart bidding and strong negative keyword lists is far more efficient than the old broad match system. Smart bidding ensures you're not overpaying for low-intent queries, and regular search terms reviews catch any irrelevant traffic. Start with a test campaign alongside your existing match types to compare performance before committing fully.</p></div>
</details>

<details>
<summary>Should I switch all my keywords to broad match?</summary>
<div class="faq-answer"><p>No. We recommend a gradual, tested approach. Keep your proven exact and phrase match keywords running while testing broad match in parallel. If broad match outperforms at similar CPAs with higher volume, gradually shift budget. Maintain exact match for your highest-value, most specific keywords where precision matters most.</p></div>
</details>

<details>
<summary>How many conversions do I need before using broad match?</summary>
<div class="faq-answer"><p>Google recommends at least 30 conversions per month per campaign for smart bidding to work effectively. Since broad match relies heavily on smart bidding, this is the practical minimum. Accounts with higher conversion volumes (50–100+ per month) see better broad match performance because the algorithm has more data to learn from.</p></div>
</details>

<details>
<summary>Can I use broad match for brand keywords?</summary>
<div class="faq-answer"><p>Yes, and it often works very well. Broad match on your brand name captures misspellings, abbreviations, and brand + product/service combinations that exact match might miss. Just ensure you have negative keywords to block irrelevant brand-adjacent queries and monitor the search terms report to maintain quality.</p></div>
</details>
`,
};
