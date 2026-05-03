import type { BlogPost } from './blogPosts';

export const ppc2BlogPosts: BlogPost[] = [
  {
    slug: 'google-ads-conversion-tracking-setup',
    title: 'How to Set Up Google Ads Conversion Tracking Properly',
    description: 'A step-by-step guide to setting up Google Ads conversion tracking with GA4, Google Tag Manager, enhanced conversions, and offline conversion imports.',
    date: '2026-03-28',
    category: 'PPC',
    image: '',
    readTime: '8 min read',
  },
  {
    slug: 'google-ads-copy-that-converts',
    title: 'How to Write Google Ads Copy That Actually Converts',
    description: 'Proven frameworks for writing Google Ads headlines, descriptions, and CTAs that drive clicks and conversions — not just impressions.',
    date: '2026-03-27',
    category: 'PPC',
    image: '',
    readTime: '7 min read',
  },
  {
    slug: 'responsive-search-ads-best-practices',
    title: 'Responsive Search Ads Best Practices for 2026',
    description: 'How to structure, test, and optimise responsive search ads in 2026 — covering pin strategies, asset reporting, and headline combinations.',
    date: '2026-03-26',
    category: 'PPC',
    image: '',
    readTime: '7 min read',
  },
  {
    slug: 'google-ads-negative-keywords-guide',
    title: 'Google Ads Negative Keywords: The Complete Guide',
    description: 'Everything you need to know about negative keywords in Google Ads — from match types and shared lists to common mistakes that waste budget.',
    date: '2026-03-25',
    category: 'PPC',
    image: '',
    readTime: '7 min read',
  },
  {
    slug: 'google-ads-campaign-structure',
    title: 'How to Structure Google Ads Campaigns for Maximum ROI',
    description: 'A practical guide to Google Ads campaign structure covering account hierarchy, ad group strategies, naming conventions, and match type segmentation.',
    date: '2026-03-24',
    category: 'PPC',
    image: '',
    readTime: '7 min read',
  },
  {
    slug: 'google-shopping-ads-guide',
    title: 'Google Shopping Ads: Setup and Optimisation Guide',
    description: 'How to set up and optimise Google Shopping Ads from Merchant Centre configuration and product feeds to bidding strategies and custom labels.',
    date: '2026-03-23',
    category: 'PPC',
    image: '',
    readTime: '7 min read',
  },
  {
    slug: 'smart-bidding-strategies-explained',
    title: 'Smart Bidding Strategies Explained: When to Use Each One',
    description: 'A clear breakdown of every Google Ads Smart Bidding strategy — Target CPA, Target ROAS, Maximise Conversions, and more — with guidance on when each works best.',
    date: '2026-03-22',
    category: 'PPC',
    image: '',
    readTime: '8 min read',
  },
  {
    slug: 'reduce-wasted-ad-spend-google-ads',
    title: 'How to Reduce Wasted Ad Spend in Google Ads',
    description: 'Practical strategies to cut wasted Google Ads spend through search term audits, negative keywords, audience exclusions, and schedule adjustments.',
    date: '2026-03-21',
    category: 'PPC',
    image: '',
    readTime: '7 min read',
  },
  {
    slug: 'landing-page-optimisation-ppc',
    title: 'Landing Page Optimisation for PPC: What Actually Moves the Needle',
    description: 'Data-backed landing page optimisation tactics for PPC campaigns — covering speed, message match, form design, social proof, and mobile experience.',
    date: '2026-03-20',
    category: 'PPC',
    image: '',
    readTime: '8 min read',
  },
  {
    slug: 'google-ads-lead-generation-b2b',
    title: 'Google Ads for Lead Generation: B2B Campaign Structure Guide',
    description: 'How to structure Google Ads campaigns for B2B lead generation — covering audience targeting, lead forms, CRM integration, and lead quality optimisation.',
    date: '2026-03-19',
    category: 'PPC',
    image: '',
    readTime: '8 min read',
  },
];

export const ppc2BlogContent: Record<string, string> = {
  'google-ads-conversion-tracking-setup': `
<p>Conversion tracking is the foundation of every profitable Google Ads account. Without it, you are flying blind — spending budget with no way to measure what is actually driving revenue. Yet a surprising number of accounts we audit at Spires Digital have tracking that is either broken, incomplete, or misconfigured. This guide walks you through setting up Google Ads conversion tracking properly in 2026, covering GA4 integration, Google Tag Manager, enhanced conversions, and offline conversion imports.</p>

<h2>Why Proper Conversion Tracking Matters</h2>

<p>Google Ads Smart Bidding algorithms rely entirely on conversion data to make optimisation decisions. If your tracking is inaccurate, the algorithm optimises towards the wrong signals — and your campaigns suffer. Common symptoms of poor tracking include:</p>

<ul>
<li><strong>Inflated conversion numbers</strong> that do not match actual sales or leads</li>
<li><strong>Duplicate conversions</strong> from page refreshes or multiple tags firing</li>
<li><strong>Missing conversions</strong> due to tag implementation errors</li>
<li><strong>Attribution gaps</strong> where cross-device and cross-browser journeys are lost</li>
</ul>

<p>Before you touch bidding strategies, ad copy, or campaign structure, get your conversion tracking right. Everything else depends on it. For a deeper dive into analytics setup, see our <a href="/blog/ga4-conversion-tracking-setup">GA4 conversion tracking guide</a>.</p>

<h2>Step 1: Define Your Conversion Actions</h2>

<p>Start by identifying every meaningful action a user can take on your website. Not every action deserves to be a primary conversion. Google Ads distinguishes between <strong>primary conversions</strong> (used for bidding) and <strong>secondary conversions</strong> (observed for reporting only).</p>

<h3>Primary Conversions</h3>
<ul>
<li>Purchase completions (e-commerce)</li>
<li>Form submissions (lead generation)</li>
<li>Phone calls over 60 seconds</li>
<li>Qualified booking confirmations</li>
</ul>

<h3>Secondary Conversions</h3>
<ul>
<li>Add-to-cart events</li>
<li>PDF downloads</li>
<li>Video views past 50%</li>
<li>Newsletter sign-ups</li>
</ul>

<p>Getting this hierarchy right is critical. If you set newsletter sign-ups as a primary conversion alongside purchases, Smart Bidding will optimise for the cheapest conversion — which is almost certainly <em>not</em> a purchase.</p>

<h2>Step 2: Set Up Google Tag Manager</h2>

<p>Google Tag Manager (GTM) is the industry standard for managing tracking tags without editing website code directly. If you are still hardcoding tags into your site, you are making tracking harder to maintain and debug.</p>

<h3>GTM Implementation Checklist</h3>
<ul>
<li>Install the GTM container snippet on every page (head and body sections)</li>
<li>Create a GA4 Configuration tag with your Measurement ID</li>
<li>Set up a Google Ads Conversion Tracking tag for each primary conversion</li>
<li>Configure triggers based on specific events rather than page views where possible</li>
<li>Use the GTM Preview mode to test every tag before publishing</li>
</ul>

<div class="tip-box"><strong>Pro Tip:</strong> Use GTM's built-in tag sequencing to ensure your GA4 config tag fires before any event tags. This prevents data loss from race conditions where event tags fire before the GA4 session is initialised.</div>

<h3>Data Layer Best Practices</h3>

<p>For e-commerce sites, push transaction data into the data layer rather than scraping it from the page. This approach is more reliable and gives you access to variables like transaction ID, revenue, and product details for enhanced reporting.</p>

<p>A properly structured data layer push for a purchase event should include the transaction ID, total value, currency, and an array of purchased items with their individual prices and quantities.</p>

<h2>Step 3: GA4 and Google Ads Integration</h2>

<p>Linking GA4 to Google Ads unlocks several powerful features that improve both tracking accuracy and campaign performance:</p>

<ul>
<li><strong>Audience sharing:</strong> Create audiences in GA4 based on behaviour and import them directly into Google Ads for targeting</li>
<li><strong>Conversion import:</strong> Use GA4 conversions in Google Ads bidding, benefiting from GA4's cross-device modelling</li>
<li><strong>Attribution insights:</strong> Access data-driven attribution models that account for the full customer journey</li>
</ul>

<h3>How to Link the Accounts</h3>

<p>In GA4, navigate to Admin, then Product Links, and select Google Ads Links. Click Link, choose your Google Ads account, and enable personalised advertising. In Google Ads, confirm the link under Tools and Settings, then Linked Accounts. Once linked, import your GA4 conversions into Google Ads by going to Goals, then Conversions, selecting Import, and choosing Google Analytics 4 properties.</p>

<p>Our <a href="/blog/ga4-conversion-tracking-setup">complete GA4 setup guide</a> covers the linking process in more detail, including common errors and troubleshooting steps.</p>

<h2>Step 4: Enhanced Conversions</h2>

<p>Enhanced conversions improve tracking accuracy by sending hashed first-party customer data (like email addresses) alongside your conversion tags. This helps Google match conversions to ad clicks even when cookies are blocked or users switch devices.</p>

<h3>Why Enhanced Conversions Matter in 2026</h3>

<p>With third-party cookies being phased out and browser privacy features becoming more aggressive, standard conversion tracking misses an increasing percentage of conversions. Enhanced conversions recover a significant portion of these lost signals.</p>

<h3>Implementation Options</h3>
<ul>
<li><strong>Google Tag Manager:</strong> Enable enhanced conversions in your Google Ads conversion tag settings and map user-provided data fields</li>
<li><strong>Google Ads API:</strong> Send conversion data server-side for maximum control and accuracy</li>
<li><strong>Google tag (gtag.js):</strong> Add enhanced conversion parameters directly to your global site tag</li>
</ul>

<p>At Spires Digital, we typically recommend the GTM approach for most businesses. It strikes the right balance between implementation complexity and data accuracy. For larger e-commerce operations, the API approach provides the most reliable tracking.</p>

<h2>Step 5: Offline Conversion Imports</h2>

<p>If your business has a sales cycle that extends beyond the website — phone calls that close deals, in-store visits, or sales that require follow-up — offline conversion imports are essential. They feed real revenue data back to Google Ads so Smart Bidding can optimise for outcomes that actually matter to your business.</p>

<h3>Setting Up Offline Conversion Imports</h3>

<ul>
<li>Capture the Google Click ID (GCLID) when a user submits a form or calls your business</li>
<li>Store the GCLID in your CRM alongside the lead record</li>
<li>When the lead converts to a sale, upload the GCLID and conversion value back to Google Ads</li>
<li>Automate this process using the Google Ads API or a tool like Zapier for smaller volumes</li>
</ul>

<p>For businesses tracking phone calls, see our guide on <a href="/blog/how-to-track-phone-calls-google-ads">tracking phone calls in Google Ads</a> for specific implementation steps.</p>

<div class="tip-box"><strong>Pro Tip:</strong> Set your offline conversion upload window to match your typical sales cycle. If most leads close within 14 days, upload conversion data weekly to ensure Smart Bidding receives timely signals without waiting for stragglers.</div>

<h2>Step 6: Testing and Validation</h2>

<p>After implementation, validate everything before trusting the data:</p>

<ul>
<li>Use GTM Preview mode to confirm tags fire on the correct triggers</li>
<li>Check the Google Ads Tag Assistant for errors or warnings</li>
<li>Compare Google Ads conversion data against your CRM or e-commerce platform for at least seven days</li>
<li>Monitor the GA4 DebugView in real time to verify events are being received</li>
<li>Test across multiple browsers and devices, including Safari with Intelligent Tracking Prevention</li>
</ul>

<h2>Common Tracking Mistakes to Avoid</h2>

<h3>Counting Every Conversion as Primary</h3>
<p>This inflates your conversion count and misleads Smart Bidding. Only actions with direct business value should be primary conversions.</p>

<h3>Ignoring Consent Mode</h3>
<p>In 2026, Consent Mode v2 is not optional. Implement it correctly to ensure your tracking respects user privacy while still collecting modelled conversion data from users who decline cookies.</p>

<h3>Not De-duplicating Across Platforms</h3>
<p>If you track the same conversion in both GA4 and the Google Ads tag, importing both will double-count. Choose one source of truth and stick with it.</p>

<h2>Frequently Asked Questions</h2>

<details>
<summary>How long does it take for conversion data to appear in Google Ads?</summary>
<div class="faq-answer"><p>Most online conversions appear in Google Ads within 24 hours, though it can take up to 72 hours for all data to finalise due to attribution modelling and cross-device reconciliation. Offline conversion imports appear after your scheduled upload runs.</p></div>
</details>

<details>
<summary>Should I use GA4 conversions or the Google Ads tag for tracking?</summary>
<div class="faq-answer"><p>For most accounts, using the Google Ads conversion tag as your primary tracking method provides the most accurate data for Smart Bidding. GA4 conversions work well as a secondary source and are excellent for cross-channel reporting. Avoid importing both for the same action to prevent double-counting.</p></div>
</details>

<details>
<summary>Do I need enhanced conversions if I already have standard tracking?</summary>
<div class="faq-answer"><p>Yes. With increasing browser privacy restrictions and the phase-out of third-party cookies, enhanced conversions recover a meaningful percentage of conversions that standard tracking misses. Google reports that enhanced conversions can recover up to 5% of otherwise lost conversions.</p></div>
</details>

<details>
<summary>What is Consent Mode and do I need it?</summary>
<div class="faq-answer"><p>Consent Mode adjusts how Google tags behave based on a user's cookie consent choices. In 2026, it is required for advertisers in the UK and EU. Even outside those regions, implementing Consent Mode ensures your tracking is future-proof and privacy-compliant while still enabling modelled conversions.</p></div>
</details>

<p>Getting conversion tracking right is not glamorous, but it is the single most impactful thing you can do for your Google Ads performance. If you want expert help setting up or auditing your tracking, <a href="/contact">get in touch with Spires Digital</a> or <a href="/contact">book a free strategy call via Calendly</a> — we will review your setup and identify exactly what needs fixing. Explore our full <a href="/services/ppc-management">PPC management services</a> to see how we can help.</p>
`,

  'google-ads-copy-that-converts': `
<p>Your Google Ads campaign can have perfect targeting, generous budgets, and flawless tracking — but if your ad copy does not compel people to click, none of it matters. Ad copy is the bridge between search intent and conversion, and most advertisers treat it as an afterthought. This guide breaks down how to write Google Ads copy that genuinely converts, covering headlines, descriptions, calls to action, ad extensions, and dynamic keyword insertion.</p>

<h2>Understanding the Psychology Behind High-Converting Ad Copy</h2>

<p>Before diving into tactics, it helps to understand why certain ads get clicked over others. Searchers on Google are in a <strong>task-completion mindset</strong> — they have a problem and want to solve it quickly. Your ad copy needs to accomplish three things in a fraction of a second:</p>

<ul>
<li><strong>Relevance:</strong> Prove you have what they are looking for</li>
<li><strong>Differentiation:</strong> Show why you are better than the other results</li>
<li><strong>Motivation:</strong> Give them a reason to click <em>now</em></li>
</ul>

<p>Every headline, every description line, and every extension should serve at least one of these purposes.</p>

<h2>Writing Headlines That Stop the Scroll</h2>

<p>Headlines are the most important element of your ad. Google displays up to three headlines in a responsive search ad, and the first two carry the most weight since the third headline does not always appear.</p>

<h3>Headline Frameworks That Work</h3>

<ul>
<li><strong>Keyword + Benefit:</strong> "Premium PPC Management — Grow Revenue 3x Faster"</li>
<li><strong>Question + Promise:</strong> "Wasting Ad Budget? — We Fix That in 30 Days"</li>
<li><strong>Social Proof + Offer:</strong> "Trusted by 200+ Brands — Free PPC Audit"</li>
<li><strong>Urgency + Value:</strong> "Limited Spots — Book Your Strategy Call Today"</li>
</ul>

<p>Include your primary keyword in at least two headlines. This improves <a href="/blog/google-ads-quality-score-guide">Quality Score</a> and signals relevance to both Google and the searcher. Our guide to Quality Score explains exactly how ad relevance impacts your cost per click.</p>

<h3>Headline Mistakes to Avoid</h3>

<ul>
<li>Using your brand name as the only headline (unless you have strong brand recognition)</li>
<li>Writing headlines that only make sense when read together — each should stand alone</li>
<li>Using all caps or excessive punctuation (Google may disapprove the ad)</li>
<li>Being vague — "Great Services" tells the searcher nothing</li>
</ul>

<div class="tip-box"><strong>Pro Tip:</strong> Write your headlines in pairs that work independently. Google's responsive search ads will combine headlines in different orders, so "50% Off First Month" needs to make sense next to any of your other headlines, not just the one you originally paired it with.</div>

<h2>Crafting Descriptions That Close the Click</h2>

<p>Descriptions are where you expand on your headline promise and give searchers the confidence to click. You have up to 90 characters per description line — use them wisely.</p>

<h3>Description Best Practices</h3>

<ul>
<li>Lead with your strongest benefit or differentiator</li>
<li>Include specific numbers: "Managed £2M+ in ad spend" outperforms "Experienced team"</li>
<li>Address objections proactively: "No long-term contracts" removes a common hesitation</li>
<li>End with a clear call to action</li>
</ul>

<p>For <a href="/blog/responsive-search-ads-best-practices">responsive search ads</a>, write at least four distinct descriptions that each highlight a different selling point. This gives Google more combinations to test and improves overall ad performance.</p>

<h2>Calls to Action That Drive Conversions</h2>

<p>A weak CTA is one of the most common reasons ads underperform. "Learn More" and "Click Here" are passive and generic. Strong CTAs are specific, action-oriented, and aligned with the searcher's intent.</p>

<h3>CTA Examples by Intent</h3>

<ul>
<li><strong>High intent (ready to buy):</strong> "Get Your Free Quote Today" / "Start Your Free Trial"</li>
<li><strong>Mid intent (comparing options):</strong> "Compare Our Plans" / "See Pricing"</li>
<li><strong>Low intent (researching):</strong> "Download the Free Guide" / "Watch the Demo"</li>
</ul>

<p>Match your CTA to the searcher's stage in the buying journey. Someone searching "best PPC agency UK" is comparing — "See Why 200+ Brands Choose Us" works better than "Buy Now."</p>

<h2>Ad Extensions That Amplify Your Message</h2>

<p>Ad extensions (now called assets in Google Ads) increase your ad's real estate on the search results page and provide additional reasons to click. They also improve your Quality Score and Ad Rank, which can lower your cost per click.</p>

<h3>Essential Extensions</h3>

<ul>
<li><strong>Sitelink extensions:</strong> Link to specific pages like pricing, case studies, or contact</li>
<li><strong>Callout extensions:</strong> Highlight key benefits like "No Setup Fees" or "24/7 Support"</li>
<li><strong>Structured snippets:</strong> List service categories or product types</li>
<li><strong>Call extensions:</strong> Add a clickable phone number for mobile users</li>
<li><strong>Image extensions:</strong> Add relevant visuals that make your ad stand out</li>
</ul>

<p>Use a minimum of four sitelinks, four callouts, and two structured snippets per ad group. More assets give Google more combinations to test, improving performance over time.</p>

<h2>Dynamic Keyword Insertion: When and How to Use It</h2>

<p>Dynamic keyword insertion (DKI) automatically inserts the searcher's query into your ad copy, making the ad feel more relevant. It works by using the syntax <strong>{KeyWord:Default Text}</strong> in your headlines or descriptions.</p>

<h3>When DKI Works Well</h3>
<ul>
<li>Tightly themed ad groups with closely related keywords</li>
<li>E-commerce ads where product names vary (e.g., "Buy {KeyWord:Running Shoes}")</li>
<li>Local service ads where location varies</li>
</ul>

<h3>When to Avoid DKI</h3>
<ul>
<li>Broad match keyword groups where queries can be unpredictable</li>
<li>Competitor keyword campaigns (your ad would display their brand name)</li>
<li>Sensitive industries where certain query terms could be inappropriate</li>
</ul>

<div class="tip-box"><strong>Pro Tip:</strong> Always set a strong default text in your DKI tags. If the searcher's query is too long to fit in the character limit, Google will display your default text instead. Make sure it is compelling on its own.</div>

<h2>Testing and Iterating Your Ad Copy</h2>

<p>Writing great ad copy is not a one-time exercise. The best-performing accounts at Spires Digital run ongoing ad copy tests with clear hypotheses and measurement criteria.</p>

<h3>A Structured Testing Approach</h3>

<ul>
<li>Test one variable at a time (headline angle, CTA, offer)</li>
<li>Run tests for at least two weeks or 100 conversions before drawing conclusions</li>
<li>Use ad variations in Google Ads to run controlled experiments</li>
<li>Document what you test and what you learn to build an institutional knowledge base</li>
</ul>

<p>Focus on metrics that matter: conversion rate and cost per conversion, not just click-through rate. An ad with a lower CTR but higher conversion rate is almost always the better choice.</p>

<h2>Frequently Asked Questions</h2>

<details>
<summary>How many headlines should I write for a responsive search ad?</summary>
<div class="faq-answer"><p>Google allows up to 15 headlines per responsive search ad. We recommend using at least 10 to 12 unique headlines that cover different angles — keyword relevance, benefits, social proof, CTAs, and offers. This gives Google's machine learning enough variety to find winning combinations.</p></div>
</details>

<details>
<summary>Does ad copy affect Quality Score?</summary>
<div class="faq-answer"><p>Yes. Ad relevance is one of the three main components of Quality Score, alongside expected click-through rate and landing page experience. Copy that closely matches the searcher's intent and includes relevant keywords will score higher, lowering your cost per click and improving ad position. See our <a href="/blog/google-ads-quality-score-guide">Quality Score guide</a> for more detail.</p></div>
</details>

<details>
<summary>Should I use the same ad copy across all ad groups?</summary>
<div class="faq-answer"><p>No. Each ad group should have ad copy tailored to its specific keywords and audience intent. Using generic copy across all ad groups reduces relevance, lowers Quality Score, and typically increases your cost per click. Take the time to write unique copy for each ad group.</p></div>
</details>

<details>
<summary>How often should I refresh my ad copy?</summary>
<div class="faq-answer"><p>Review ad performance monthly and refresh underperforming assets. Even high-performing ads can suffer from creative fatigue over time, particularly in competitive industries. A good rule is to update at least 20-30% of your ad assets every quarter.</p></div>
</details>

<p>Great ad copy is the difference between campaigns that drain budget and campaigns that drive profitable growth. If you need help crafting ads that actually convert, <a href="/contact">get in touch with Spires Digital</a> or <a href="/contact">book a free strategy call via Calendly</a> — we will audit your current ads and show you exactly where the opportunities are. Learn more about our <a href="/services/ppc-management">PPC management services</a>.</p>
`,

  'responsive-search-ads-best-practices': `
<p>Responsive search ads (RSAs) are now the default ad format in Google Ads, and for good reason — they give Google's machine learning the flexibility to test thousands of headline and description combinations automatically. But that flexibility is a double-edged sword. Without a thoughtful strategy, you end up with ads that feel disjointed, off-brand, or irrelevant. This guide covers the RSA best practices that actually move performance in 2026.</p>

<h2>How Responsive Search Ads Work</h2>

<p>RSAs allow you to provide up to 15 headlines and 4 descriptions. Google then tests different combinations to find the best-performing pairings for each search query, device, and audience. Over time, the algorithm learns which combinations drive the highest click-through and conversion rates.</p>

<p>The key difference from the old expanded text ads (ETAs) is that you do not control exactly which headlines appear together. This makes asset quality and strategic pinning essential.</p>

<h2>Asset Quantity and Quality</h2>

<h3>How Many Assets to Provide</h3>

<p>Google recommends providing the maximum number of assets, but more is not always better if quality suffers. Here is what we recommend at Spires Digital:</p>

<ul>
<li><strong>Headlines:</strong> Provide 11-15 unique headlines. Below 10 limits Google's testing ability. Above 10 gives meaningful variety.</li>
<li><strong>Descriptions:</strong> Provide all 4 descriptions. Each should highlight a different selling point.</li>
</ul>

<h3>Asset Diversity Framework</h3>

<p>Spread your headlines across these categories to ensure Google has variety to work with:</p>

<ul>
<li><strong>Keyword-focused (3-4 headlines):</strong> Include primary keywords for relevance and Quality Score</li>
<li><strong>Benefit-focused (3-4 headlines):</strong> Highlight outcomes like "Increase Revenue by 40%"</li>
<li><strong>Social proof (2-3 headlines):</strong> "Trusted by 200+ UK Brands" or "5-Star Rated Agency"</li>
<li><strong>CTA-focused (2-3 headlines):</strong> "Get Your Free Audit" or "Book a Strategy Call"</li>
<li><strong>Differentiator (1-2 headlines):</strong> "No Long-Term Contracts" or "Dedicated Account Manager"</li>
</ul>

<div class="tip-box"><strong>Pro Tip:</strong> Write every headline as if it could appear in position 1, alone. Google may only show one or two headlines on mobile devices, so each one must be compelling independently — not reliant on context from another headline.</div>

<h2>Pin Strategies That Work</h2>

<p>Pinning forces a specific headline or description to always appear in a particular position. Used sparingly, pinning ensures your most important messages are always visible. Overused, it defeats the purpose of RSAs.</p>

<h3>When to Pin</h3>

<ul>
<li><strong>Brand name:</strong> Pin to headline position 1 if brand awareness is important</li>
<li><strong>Legal disclaimers:</strong> Pin required disclosures to ensure they always show</li>
<li><strong>Primary keyword:</strong> Pin one keyword-rich headline to position 1 or 2 for relevance</li>
</ul>

<h3>When Not to Pin</h3>

<ul>
<li>Do not pin all three headline positions — this eliminates Google's ability to test</li>
<li>Do not pin a single headline to a position — pin 2-3 options to the same position to maintain testing flexibility</li>
<li>Avoid pinning descriptions unless legally required</li>
</ul>

<p>If you pin a single headline to each position, you have essentially recreated an expanded text ad with none of RSA's benefits. The ideal approach is to pin 2-3 headlines to position 1 (ensuring your best messages always lead) while leaving positions 2 and 3 unpinned.</p>

<h2>Writing Headlines That Work in Any Combination</h2>

<p>The biggest RSA mistake is writing headlines that only make sense as a sequence. Since Google combines them randomly, every headline must work alongside any other headline.</p>

<h3>Avoid Redundancy</h3>

<p>If three of your headlines say essentially the same thing — "Expert PPC Management," "Professional PPC Services," "Top PPC Agency" — Google is choosing between three weak variations instead of testing genuinely different messages. Write headlines that each contribute a unique piece of information.</p>

<p>For more on writing effective ad copy, see our guide on <a href="/blog/google-ads-copy-that-converts">Google Ads copy that converts</a>.</p>

<h2>Asset Reporting and Performance Analysis</h2>

<p>Google rates each asset as Learning, Low, Good, or Best based on its relative performance. Use these ratings to guide your optimisation:</p>

<ul>
<li><strong>Best:</strong> Keep these assets and create variations that explore similar angles</li>
<li><strong>Good:</strong> Maintain these — they are performing above average</li>
<li><strong>Low:</strong> Replace after the asset has had sufficient impressions (at least 5,000)</li>
<li><strong>Learning:</strong> Wait — Google needs more data before making a judgment</li>
</ul>

<h3>Combination Reports</h3>

<p>Beyond individual asset ratings, check the Combinations report to see which specific headline-description pairings Google shows most often. This reveals what the algorithm considers your best messaging and can inform your broader marketing copy.</p>

<h2>Testing Approach for RSAs</h2>

<p>Testing RSAs requires a different approach than testing the old ETAs. You cannot simply A/B test two complete ads because the combinations within each RSA are already being tested internally.</p>

<h3>Recommended Testing Framework</h3>

<ul>
<li>Run one RSA per ad group to give it maximum data</li>
<li>Test different <em>themes</em> rather than individual headlines — create two RSAs with fundamentally different angles (e.g., price-focused vs. quality-focused)</li>
<li>Allow at least 30 days and 100+ conversions before evaluating results</li>
<li>Use Google's ad variation experiments for controlled testing at scale</li>
</ul>

<p>Review asset performance alongside broader campaign metrics. A headline rated "Best" in a campaign with poor conversion rates might be driving clicks that do not convert. Always tie asset performance back to <a href="/blog/google-ads-quality-score-guide">Quality Score</a> and conversion data.</p>

<h2>Optimising RSAs for Negative Keywords</h2>

<p>Your <a href="/blog/google-ads-negative-keywords-guide">negative keyword strategy</a> directly impacts RSA performance. If irrelevant search terms trigger your ads, Google's machine learning receives noisy data that reduces its ability to optimise headline combinations effectively. Run regular search term reports and maintain comprehensive negative keyword lists to keep your RSA data clean.</p>

<h2>RSA Ad Strength Score</h2>

<p>Google assigns an Ad Strength rating from Poor to Excellent. While this metric is directional, do not treat it as a performance indicator. An "Excellent" Ad Strength does not guarantee high performance — it simply means you have provided enough diverse assets for Google to test.</p>

<p>Focus on actual performance metrics — conversion rate, cost per conversion, and ROAS — rather than chasing a perfect Ad Strength score.</p>

<h2>Frequently Asked Questions</h2>

<details>
<summary>How many responsive search ads should I have per ad group?</summary>
<div class="faq-answer"><p>Google recommends one RSA per ad group for most cases. This concentrates all impression data into a single ad, giving the algorithm more data to optimise headline combinations. If you want to test different angles, create a second RSA temporarily and compare performance over 30+ days.</p></div>
</details>

<details>
<summary>Does pinning hurt RSA performance?</summary>
<div class="faq-answer"><p>Strategic pinning does not hurt performance when done correctly. Pinning 2-3 headlines to position 1 ensures your key message always appears while still giving Google flexibility. Pinning a single headline to every position essentially creates a static ad and removes the RSA's testing advantages.</p></div>
</details>

<details>
<summary>What is a good Ad Strength score?</summary>
<div class="faq-answer"><p>Aim for "Good" or "Excellent," but do not obsess over it. Ad Strength measures asset diversity and quantity, not actual ad performance. We have seen "Average" rated RSAs outperform "Excellent" ones in terms of conversion rate and ROAS. Use it as a guide for asset coverage, not a performance benchmark.</p></div>
</details>

<details>
<summary>How long should I wait before optimising RSA assets?</summary>
<div class="faq-answer"><p>Allow at least 2-4 weeks for assets to accumulate enough impressions for reliable ratings. Replacing assets too quickly prevents Google from learning which combinations work best. Once an asset has at least 5,000 impressions and is rated "Low," it is safe to replace.</p></div>
</details>

<p>Responsive search ads reward advertisers who combine creative thinking with disciplined testing. If you want help building RSAs that consistently outperform, <a href="/contact">get in touch with Spires Digital</a> or <a href="/contact">book a free strategy call via Calendly</a> — we will review your current ads and identify quick wins to improve performance.</p>
`,

  'google-ads-negative-keywords-guide': `
<p>Negative keywords are one of the most powerful — and most underused — tools in Google Ads. They prevent your ads from showing for irrelevant searches, protecting your budget and improving campaign performance. Yet most accounts we audit at Spires Digital have either no negative keyword strategy at all, or a list that has not been updated in months. This guide covers everything you need to know about negative keywords, from match types and lists to common mistakes that silently drain budget.</p>

<h2>What Are Negative Keywords?</h2>

<p>Negative keywords tell Google Ads which search terms you do <em>not</em> want your ads to appear for. If you sell premium accounting software and someone searches "free accounting software," showing your ad wastes a click. Adding "free" as a negative keyword prevents that.</p>

<p>The impact is significant. Across our client portfolio, properly maintained negative keyword lists typically reduce wasted spend by 15-25% in the first month alone.</p>

<h2>Negative Keyword Match Types</h2>

<p>Like regular keywords, negative keywords have match types — but they work differently from standard match types. Understanding these differences is critical.</p>

<h3>Negative Broad Match</h3>
<p>Your ad will not show if the search contains all the negative keyword terms, in any order. The search can include additional words and still be blocked. This is the default match type for negatives.</p>
<ul>
<li>Negative keyword: <strong>free trial</strong></li>
<li>Blocked: "free accounting trial," "trial software free"</li>
<li>Not blocked: "free accounting software" (missing "trial")</li>
</ul>

<h3>Negative Phrase Match</h3>
<p>Your ad will not show if the search contains the exact negative keyword phrase in order. Additional words before or after the phrase are still blocked.</p>
<ul>
<li>Negative keyword: <strong>"free trial"</strong></li>
<li>Blocked: "free trial accounting software," "best free trial"</li>
<li>Not blocked: "free accounting trial" (words not in order)</li>
</ul>

<h3>Negative Exact Match</h3>
<p>Your ad will not show only if the search is exactly the negative keyword, with no additional words.</p>
<ul>
<li>Negative keyword: <strong>[free trial]</strong></li>
<li>Blocked: "free trial" only</li>
<li>Not blocked: "free trial software," "best free trial"</li>
</ul>

<div class="tip-box"><strong>Pro Tip:</strong> Unlike regular keywords, negative keywords do not match to close variants, synonyms, or misspellings. If you want to block "cheep" as well as "cheap," you need to add both as separate negatives. This is a common oversight that lets irrelevant traffic slip through.</div>

<h2>Building Your Initial Negative Keyword List</h2>

<p>Do not wait for wasted spend to tell you what to exclude. Build a proactive negative keyword list before launching any campaign.</p>

<h3>Universal Negatives</h3>
<p>These terms are almost always irrelevant for commercial campaigns:</p>
<ul>
<li><strong>Job-related:</strong> jobs, careers, salary, hiring, internship, recruitment</li>
<li><strong>Education-related:</strong> course, training, certification, university, degree, tutorial</li>
<li><strong>Free-seekers:</strong> free, cheap, discount, coupon, deal (unless you offer these)</li>
<li><strong>DIY/Self-service:</strong> DIY, how to, template, example, sample</li>
<li><strong>Competitor brands:</strong> Names of competitors you do not want to bid on</li>
</ul>

<h3>Industry-Specific Negatives</h3>
<p>Think about terms that are relevant to your industry but not to your specific offering. A B2B software company might negative "personal," "home," "student," and "hobby" versions of their product keywords.</p>

<p>For more on structuring your account to support negative keyword strategies, see our guide to <a href="/blog/google-ads-campaign-structure">Google Ads campaign structure</a>.</p>

<h2>Search Term Analysis: Your Ongoing Gold Mine</h2>

<p>The search terms report in Google Ads shows exactly what people searched before clicking your ad. Reviewing this report regularly is the single most important maintenance task for any Google Ads account.</p>

<h3>How to Conduct a Search Term Audit</h3>

<ul>
<li>Review search terms at least weekly for new campaigns, fortnightly for established ones</li>
<li>Sort by cost or impressions to find the biggest sources of waste first</li>
<li>Look for patterns — if you see multiple variations of an irrelevant theme, add the root term as a negative</li>
<li>Check search terms across all campaigns, not just your highest-spend ones</li>
</ul>

<h3>What to Look For</h3>

<ul>
<li><strong>Irrelevant queries:</strong> Searches with no commercial intent for your business</li>
<li><strong>Low-quality queries:</strong> Searches that get clicks but never convert</li>
<li><strong>Cannibalisation:</strong> Searches that should be handled by a different campaign</li>
<li><strong>Brand confusion:</strong> Searches for similarly-named competitors or products</li>
</ul>

<h2>Shared Negative Keyword Lists</h2>

<p>Shared negative keyword lists apply to multiple campaigns at once, saving you from maintaining duplicates. They are managed at the account level under Tools and Settings, then Shared Library.</p>

<h3>Recommended Shared List Structure</h3>

<ul>
<li><strong>Universal negatives:</strong> Terms that should be excluded from every campaign (jobs, free, etc.)</li>
<li><strong>Brand negatives:</strong> Competitor names excluded from non-competitor campaigns</li>
<li><strong>Product negatives:</strong> Product lines excluded from campaigns targeting different products</li>
<li><strong>Geographic negatives:</strong> Location terms for areas you do not serve</li>
</ul>

<p>Apply your universal negatives list to every campaign as soon as it is created. This prevents the inevitable waste that comes from new campaigns running without protection.</p>

<h2>Common Negative Keyword Mistakes</h2>

<h3>Using Too Many Exact Match Negatives</h3>
<p>Adding every irrelevant search term as an exact match negative is a never-ending game. Instead, identify the root theme and add it as a broad or phrase match negative. One well-chosen phrase match negative can block dozens of irrelevant queries.</p>

<h3>Not Reviewing the Hidden Terms</h3>
<p>Google now hides a significant percentage of search terms for privacy reasons. While you cannot see every query, the terms that are shown represent the most common ones. Use them to identify patterns and extrapolate negatives for terms you cannot see.</p>

<h3>Accidentally Blocking Relevant Traffic</h3>
<p>Be careful with broad match negatives. Adding "management" as a negative might block "PPC management services" alongside "anger management." Always check whether a potential negative could conflict with your target keywords.</p>

<h3>Set-and-Forget Lists</h3>
<p>Your negative keyword list should be a living document. Search behaviour changes, new competitors appear, and your own product offerings evolve. Schedule monthly reviews at minimum.</p>

<div class="tip-box"><strong>Pro Tip:</strong> Keep a "negative keyword log" spreadsheet where you record every negative added, the date, and the reason. This prevents future team members from accidentally removing negatives without understanding why they were added in the first place.</div>

<h2>Negative Keywords and Smart Bidding</h2>

<p>Smart Bidding strategies like Target CPA and Target ROAS rely on conversion data to optimise bids. Irrelevant clicks that never convert introduce noise into the algorithm, potentially degrading bidding performance across your entire campaign. A strong negative keyword strategy keeps your conversion data clean and helps Smart Bidding work more effectively.</p>

<h2>Frequently Asked Questions</h2>

<details>
<summary>How many negative keywords should I have?</summary>
<div class="faq-answer"><p>There is no magic number. A well-managed account might have 100-500 negatives across shared lists and individual campaigns. Focus on quality over quantity — a few well-chosen phrase match negatives can be more effective than hundreds of exact match ones. The goal is to block irrelevant traffic without accidentally restricting relevant searches.</p></div>
</details>

<details>
<summary>Do negative keywords affect Quality Score?</summary>
<div class="faq-answer"><p>Indirectly, yes. By preventing your ads from showing for irrelevant searches, negative keywords improve your click-through rate (CTR) among relevant queries. Since expected CTR is a component of Quality Score, a cleaner query profile can positively influence your scores over time.</p></div>
</details>

<details>
<summary>Can I use negative keywords with Performance Max campaigns?</summary>
<div class="faq-answer"><p>Yes, Google now allows account-level negative keywords that apply to Performance Max campaigns. You can also request campaign-level negatives through your Google Ads representative. This was a major limitation that has been addressed in 2025-2026 updates.</p></div>
</details>

<details>
<summary>Should I negative my own brand terms in non-brand campaigns?</summary>
<div class="faq-answer"><p>Generally, yes. Adding your brand name as a negative keyword in non-brand campaigns prevents them from capturing branded searches, which should be handled by a dedicated brand campaign with its own budget and bidding strategy. This gives you cleaner data and better control over budget allocation.</p></div>
</details>

<p>A disciplined negative keyword strategy is one of the fastest ways to improve Google Ads performance. If you want help auditing your search terms and building a comprehensive negative keyword framework, <a href="/contact">get in touch with Spires Digital</a> or <a href="/contact">book a free strategy call via Calendly</a>. See our full <a href="/services/ppc-management">PPC management services</a> for more details on how we help clients cut waste and grow profitably.</p>
`,

  'google-ads-campaign-structure': `
<p>Your Google Ads campaign structure is the blueprint that determines how efficiently your budget is spent, how relevant your ads are, and how effectively Smart Bidding can optimise your account. A well-structured account makes everything else — ad copy, bidding, targeting — work better. A poorly structured one undermines even the best strategies. This guide covers how to structure Google Ads campaigns for maximum ROI in 2026.</p>

<h2>Understanding the Account Hierarchy</h2>

<p>Google Ads uses a three-level hierarchy that determines how budget, targeting, and bidding flow through your account:</p>

<ul>
<li><strong>Account:</strong> Your top-level container, linked to billing and user access</li>
<li><strong>Campaigns:</strong> Control budget, bidding strategy, network targeting, and geographic settings</li>
<li><strong>Ad groups:</strong> Contain keywords, ads, and audiences — determining when and what ads show</li>
</ul>

<p>The relationship between these levels matters. Budgets are set at the campaign level, so campaigns should represent distinct strategic objectives or budget allocations. Ad groups should contain tightly themed keywords that share a common intent, allowing you to write highly relevant ad copy.</p>

<h2>Campaign Segmentation Strategies</h2>

<p>How you split your campaigns depends on your business model, budget, and goals. Here are the most common segmentation approaches:</p>

<h3>By Intent</h3>
<ul>
<li><strong>Brand campaigns:</strong> Capture searches for your brand name with dedicated budget</li>
<li><strong>Non-brand high-intent:</strong> Target keywords indicating purchase readiness</li>
<li><strong>Non-brand research:</strong> Capture top-of-funnel searches with informational intent</li>
<li><strong>Competitor campaigns:</strong> Bid on competitor brand names (where appropriate)</li>
</ul>

<h3>By Product or Service</h3>
<ul>
<li>Separate campaigns for each major product line or service category</li>
<li>Allows independent budget allocation based on product margin and volume</li>
<li>Enables product-specific bidding strategies and conversion goals</li>
</ul>

<h3>By Geography</h3>
<ul>
<li>Separate campaigns for different regions if performance varies significantly</li>
<li>Particularly important for businesses with different offers or pricing by location</li>
<li>Allows location-specific ad copy and landing pages</li>
</ul>

<div class="tip-box"><strong>Pro Tip:</strong> Start with fewer, broader campaigns and split them only when you have data showing that performance varies enough to justify separate budgets and bidding strategies. Over-segmentation starves campaigns of data and prevents Smart Bidding from learning effectively.</div>

<h2>Ad Group Strategies: SKAG vs Themed</h2>

<p>One of the longest-running debates in PPC is whether to use Single Keyword Ad Groups (SKAGs) or themed ad groups. In 2026, the answer is clear for most accounts.</p>

<h3>Single Keyword Ad Groups (SKAGs)</h3>

<p>SKAGs contain one keyword per ad group, allowing perfectly matched ad copy. They were popular when exact match was truly exact. In 2026, they are largely outdated because:</p>

<ul>
<li>Google's close variant matching means exact match keywords already trigger for related queries</li>
<li>SKAGs create thousands of ad groups, making management extremely time-consuming</li>
<li>They fragment conversion data, starving Smart Bidding of the volume it needs to optimise</li>
</ul>

<h3>Themed Ad Groups (Recommended)</h3>

<p>Group 5-15 closely related keywords by theme and intent. This approach:</p>

<ul>
<li>Concentrates conversion data for more effective Smart Bidding</li>
<li>Reduces management overhead significantly</li>
<li>Allows sufficiently relevant ad copy without fragmenting data</li>
<li>Works naturally with responsive search ads, which test multiple headline combinations</li>
</ul>

<p>The key is ensuring all keywords in a themed ad group share the same intent so your ad copy remains relevant. "PPC agency London" and "PPC management London" can share an ad group. "PPC agency London" and "what is PPC" should not.</p>

<h2>Naming Conventions</h2>

<p>A clear naming convention saves hours of management time and makes reporting far easier. Use a consistent structure like:</p>

<p><strong>Campaign:</strong> [Network] | [Intent/Type] | [Product/Service] | [Location]</p>
<p><strong>Ad Group:</strong> [Theme] | [Match Type]</p>

<h3>Examples</h3>
<ul>
<li>Campaign: Search | Non-Brand | PPC Management | UK</li>
<li>Campaign: Search | Brand | Spires Digital | National</li>
<li>Campaign: Shopping | Standard | Electronics | UK</li>
<li>Ad Group: PPC Agency Services | Mixed Match</li>
<li>Ad Group: Google Ads Management | Mixed Match</li>
</ul>

<p>Consistent naming makes it easy to filter, report, and identify campaigns at a glance. It also makes handovers between team members seamless.</p>

<h2>Match Type Strategy for 2026</h2>

<p>Match types have evolved significantly, and your strategy should reflect the current reality:</p>

<h3>Broad Match</h3>
<p>Now powered by machine learning, broad match can work well <em>when paired with Smart Bidding and strong negative keyword lists</em>. Google uses signals like user intent, landing page content, and other keywords in the ad group to determine relevance. Use broad match in campaigns with sufficient conversion data (at least 30 conversions per month).</p>

<h3>Phrase Match</h3>
<p>Captures searches that include the meaning of your keyword. This is the workhorse match type for most campaigns — more controlled than broad, more flexible than exact. Ideal for campaigns building toward Smart Bidding thresholds.</p>

<h3>Exact Match</h3>
<p>Despite its name, exact match now includes close variants, plurals, and implied words. Use it for your highest-value keywords where you want maximum control and are willing to accept lower volume.</p>

<p>Pair your match type strategy with a robust <a href="/blog/google-ads-negative-keywords-guide">negative keyword strategy</a> to control the queries that broad and phrase match attract.</p>

<h2>Performance Max Integration</h2>

<p>If you run <a href="/blog/performance-max-campaigns-guide">Performance Max campaigns</a> alongside search campaigns, structure matters even more. Ensure your search campaigns have clear keyword themes and adequate negative keywords to prevent Performance Max from cannibalising your high-intent search traffic.</p>

<h2>Budget Allocation Framework</h2>

<p>How you allocate budget across campaigns should reflect their strategic value:</p>

<ul>
<li><strong>Brand campaigns (10-15% of budget):</strong> High conversion rate, low CPC — protect your branded searches</li>
<li><strong>High-intent non-brand (50-60%):</strong> Your primary growth driver</li>
<li><strong>Mid-funnel research (15-20%):</strong> Building pipeline for future conversions</li>
<li><strong>Competitor campaigns (5-10%):</strong> Expensive but can capture switch intent</li>
<li><strong>Testing (5-10%):</strong> New keywords, audiences, or campaign types</li>
</ul>

<p>Review allocation monthly based on performance data. If a campaign consistently hits its targets, consider scaling its budget by reducing allocation from underperformers.</p>

<h2>Frequently Asked Questions</h2>

<details>
<summary>How many campaigns should I have in a Google Ads account?</summary>
<div class="faq-answer"><p>There is no universal answer, but most small to medium businesses perform best with 5-15 campaigns. Each campaign should represent a distinct budget allocation, geographic target, or product category. More campaigns mean thinner data per campaign, which can impair Smart Bidding. Only split campaigns when you have a clear strategic reason to do so.</p></div>
</details>

<details>
<summary>Should I separate campaigns by match type?</summary>
<div class="faq-answer"><p>In 2026, separating campaigns by match type is generally unnecessary. Google's Smart Bidding adjusts bids at the query level regardless of match type, so mixing phrase and exact match in the same campaign is fine. If you use broad match, keep it in campaigns with strong conversion data and robust negative keyword lists.</p></div>
</details>

<details>
<summary>How do I prevent campaigns from competing with each other?</summary>
<div class="faq-answer"><p>Use negative keywords to prevent overlap between campaigns. For example, add your brand name as a negative keyword in non-brand campaigns. Cross-reference keyword lists between campaigns to identify potential conflicts. Google's auction system handles same-account competition through Ad Rank, but clean segmentation gives you better data and control.</p></div>
</details>

<details>
<summary>Is it better to have one large campaign or several smaller ones?</summary>
<div class="faq-answer"><p>Fewer, larger campaigns generally perform better with Smart Bidding because they accumulate conversion data faster. However, if different product lines require different budgets, bidding strategies, or geographic targeting, splitting is warranted. The decision should be driven by strategic need, not organisational preference. Review our <a href="/blog/google-ads-quality-score-guide">Quality Score guide</a> for more on how structure affects performance.</p></div>
</details>

<p>Campaign structure is not exciting, but it is foundational. Get it right and everything else in your Google Ads account becomes easier and more effective. If you need help restructuring your account for better performance, <a href="/contact">get in touch with Spires Digital</a> or <a href="/contact">book a free strategy call via Calendly</a> to discuss your specific situation.</p>
`,

  'google-shopping-ads-guide': `
<p>Google Shopping Ads put your products directly in front of buyers with images, prices, and reviews — right at the moment they are searching. For e-commerce businesses, Shopping Ads consistently deliver some of the highest return on ad spend (ROAS) of any Google Ads format. But getting there requires proper setup, a well-optimised product feed, and smart bidding. This guide covers the full process from Merchant Centre setup to advanced optimisation.</p>

<h2>Setting Up Google Merchant Centre</h2>

<p>Google Merchant Centre is where your product data lives. Every Shopping Ad starts here, so getting it right is essential.</p>

<h3>Account Setup Checklist</h3>

<ul>
<li>Create a Merchant Centre account and verify your website</li>
<li>Set your business information, including shipping and tax settings</li>
<li>Link your Google Ads account to Merchant Centre</li>
<li>Configure your return policy (now a factor in ad placement)</li>
<li>Enable automatic item updates to catch price and availability changes</li>
</ul>

<h3>Merchant Centre Next</h3>

<p>In 2026, Google has fully transitioned to Merchant Centre Next, which streamlines the interface and adds features like automatic product detection from your website. If you are still on the classic version, migration is now mandatory. The new interface provides better diagnostics, clearer product status reporting, and integrated performance insights.</p>

<h2>Product Feed Optimisation</h2>

<p>Your product feed is the single most important factor in Shopping Ads performance. The quality of your feed data directly determines which searches your products appear for and how they are displayed.</p>

<h3>Essential Feed Attributes</h3>

<ul>
<li><strong>Title:</strong> Include brand, product type, key attributes (colour, size, material). Front-load the most important terms. "Nike Air Max 90 Men's Running Shoes Black Size 10" outperforms "Running Shoes."</li>
<li><strong>Description:</strong> Detailed product descriptions with relevant keywords. Google uses this to match products to searches.</li>
<li><strong>Google Product Category:</strong> Use the most specific category available. "Apparel > Shoes > Athletic Shoes > Running Shoes" gives Google better matching context.</li>
<li><strong>Product Type:</strong> Your own category hierarchy. This attribute is invaluable for campaign segmentation.</li>
<li><strong>GTIN/MPN:</strong> Include wherever possible. Products with GTINs receive priority in auctions.</li>
<li><strong>Images:</strong> High-quality, white-background product images. Avoid watermarks, promotional text, or cluttered backgrounds.</li>
</ul>

<div class="tip-box"><strong>Pro Tip:</strong> Optimise your product titles the same way you would optimise ad headlines. Include the search terms your customers actually use, not just your internal product names. If customers search for "wireless noise-cancelling headphones," your title should include those exact terms — not just your model number.</div>

<h2>Feed Management and Supplemental Feeds</h2>

<p>Your primary feed comes from your e-commerce platform (Shopify, WooCommerce, etc.). Supplemental feeds let you override or add data without changing your primary feed — perfect for optimisation without affecting your website.</p>

<h3>Uses for Supplemental Feeds</h3>

<ul>
<li><strong>Custom labels:</strong> Add performance-based labels (bestseller, high margin, clearance) for campaign segmentation</li>
<li><strong>Title optimisation:</strong> Override platform-generated titles with search-optimised versions</li>
<li><strong>Promotional pricing:</strong> Add sale prices without modifying your main feed</li>
<li><strong>Category corrections:</strong> Fix incorrect Google product categories in bulk</li>
</ul>

<p>For Shopify stores, the native Google channel app provides a solid primary feed. Use a supplemental feed via Google Sheets for the optimisations above. Learn more about optimising your Shopify store in our <a href="/services/shopify-builds">Shopify builds service</a> page.</p>

<h2>Custom Labels Strategy</h2>

<p>Custom labels are free-form attributes (custom_label_0 through custom_label_4) that you can use to segment products in Google Ads. This is where strategic thinking meets Shopping Ads management.</p>

<h3>Recommended Custom Label Framework</h3>

<ul>
<li><strong>Custom Label 0 — Margin:</strong> High, Medium, Low</li>
<li><strong>Custom Label 1 — Performance:</strong> Bestseller, Average, Underperformer</li>
<li><strong>Custom Label 2 — Season:</strong> Spring/Summer, Autumn/Winter, Evergreen</li>
<li><strong>Custom Label 3 — Price Band:</strong> Under £25, £25-£75, £75-£150, Over £150</li>
<li><strong>Custom Label 4 — Lifecycle:</strong> New Arrival, Core Range, Clearance</li>
</ul>

<p>These labels allow you to create separate campaigns or ad groups for high-margin bestsellers versus low-margin clearance items, applying different bidding strategies and budgets to each.</p>

<h2>Bidding Strategies for Shopping Ads</h2>

<p>Shopping Ads bidding has evolved significantly with Smart Bidding. Here is when to use each approach:</p>

<h3>Manual CPC</h3>
<p>Useful for new accounts or products without conversion history. Set bids at the product group level based on margin and competition. Transition to Smart Bidding once you have 30+ conversions per month.</p>

<h3>Target ROAS</h3>
<p>The ideal Smart Bidding strategy for established Shopping campaigns. Set your target return on ad spend based on product margins. A product with 50% margins can sustain a 400% ROAS target, while a product with 20% margins needs 600%+.</p>

<h3>Maximise Conversion Value</h3>
<p>Useful when you want to maximise revenue within a fixed budget without setting a specific ROAS target. Good for scaling phases where you are willing to accept variable returns. For a deeper comparison, see our <a href="/blog/smart-bidding-strategies-explained">Smart Bidding strategies guide</a>.</p>

<h2>Standard Shopping vs Performance Max</h2>

<p>In 2026, most Google Shopping traffic runs through <a href="/blog/performance-max-campaigns-guide">Performance Max campaigns</a>. However, Standard Shopping campaigns still have their place:</p>

<ul>
<li><strong>Standard Shopping:</strong> Better control over search terms, bid adjustments, and product group segmentation. Ideal for accounts that prioritise granular control.</li>
<li><strong>Performance Max:</strong> Broader reach across Google's network (Search, Display, YouTube, Discover). Ideal for accounts seeking maximum volume with automated optimisation.</li>
</ul>

<p>Many successful accounts run both — using Standard Shopping for core products with proven performance and Performance Max for broader discovery and new product launches.</p>

<h2>Feed Diagnostics and Troubleshooting</h2>

<p>Merchant Centre provides diagnostic reports that flag issues with your product data. Common issues include:</p>

<ul>
<li><strong>Disapproved products:</strong> Missing required attributes, policy violations, or landing page mismatches</li>
<li><strong>Limited performance:</strong> Low-quality images, missing GTINs, or incomplete descriptions</li>
<li><strong>Price mismatches:</strong> Feed price not matching website price (enable automatic item updates to fix)</li>
<li><strong>Inventory issues:</strong> Out-of-stock products still showing in feed</li>
</ul>

<p>Check diagnostics weekly and address disapprovals immediately — every disapproved product is lost revenue.</p>

<h2>Frequently Asked Questions</h2>

<details>
<summary>How much does it cost to run Google Shopping Ads?</summary>
<div class="faq-answer"><p>Google Shopping Ads use the same auction system as search ads — you only pay when someone clicks. Average CPCs vary by industry but typically range from £0.20 to £1.50 for most e-commerce categories. The key is not what you spend per click but what return you get. A well-optimised Shopping campaign should deliver a 400-800% ROAS for most product categories.</p></div>
</details>

<details>
<summary>Do I need a Shopify store to run Google Shopping Ads?</summary>
<div class="faq-answer"><p>No. Google Shopping Ads work with any e-commerce platform that can generate a product feed, including WooCommerce, Magento, BigCommerce, and custom platforms. Shopify has the most streamlined integration through its Google channel app, but the results are platform-agnostic.</p></div>
</details>

<details>
<summary>How long does it take for Shopping Ads to start performing?</summary>
<div class="faq-answer"><p>After initial setup, products typically go through a review period of 1-3 business days. Once approved, expect 2-4 weeks of learning as the algorithm gathers performance data. Smart Bidding usually stabilises after 30+ conversions. Budget enough for this learning period without making major changes.</p></div>
</details>

<details>
<summary>Can I control which search terms trigger my Shopping Ads?</summary>
<div class="faq-answer"><p>You cannot add positive keywords to Shopping campaigns, but you can use negative keywords to block irrelevant searches. Your product feed titles and descriptions determine which queries your products match. Optimising feed titles is the most effective way to influence which searches trigger your Shopping Ads.</p></div>
</details>

<p>Google Shopping Ads are a revenue engine for e-commerce businesses when set up and optimised properly. If you need help with feed optimisation, campaign structure, or scaling your Shopping Ads profitably, <a href="/contact">get in touch with Spires Digital</a> or <a href="/contact">book a free strategy call via Calendly</a> — we specialise in helping e-commerce brands grow through paid search.</p>
`,

  'smart-bidding-strategies-explained': `
<p>Google Ads Smart Bidding uses machine learning to set bids automatically at auction time, accounting for signals like device, location, time of day, audience, and dozens of other factors that manual bidding simply cannot process. But choosing the right Smart Bidding strategy — and setting it up correctly — is the difference between scalable growth and expensive mistakes. This guide explains every Smart Bidding strategy, when to use each one, and the common pitfalls that trip up advertisers.</p>

<h2>What Is Smart Bidding?</h2>

<p>Smart Bidding is a subset of Google's automated bidding that specifically optimises for conversions or conversion value. Unlike simple automated strategies like Maximise Clicks, Smart Bidding uses real-time auction signals to predict the likelihood of a conversion and sets bids accordingly.</p>

<p>The available Smart Bidding strategies in 2026 are:</p>

<ul>
<li><strong>Target CPA</strong> (Target Cost Per Acquisition)</li>
<li><strong>Target ROAS</strong> (Target Return On Ad Spend)</li>
<li><strong>Maximise Conversions</strong></li>
<li><strong>Maximise Conversion Value</strong></li>
</ul>

<p>Each serves a different objective, and using the wrong one for your situation can waste significant budget.</p>

<h2>Target CPA: Controlling Your Cost Per Lead</h2>

<p>Target CPA tells Google to get as many conversions as possible at or below your specified cost per acquisition. The algorithm adjusts bids for each auction based on the predicted conversion probability.</p>

<h3>When to Use Target CPA</h3>
<ul>
<li>Lead generation campaigns where each lead has roughly equal value</li>
<li>Service businesses with a known cost-per-lead threshold</li>
<li>Campaigns with at least 30 conversions in the past 30 days</li>
</ul>

<h3>Setting Your Target</h3>
<p>Start with a target CPA 10-20% above your current average CPA. This gives the algorithm room to learn without overspending. Gradually reduce the target as the algorithm stabilises, but never drop it by more than 15-20% at a time — aggressive changes cause the algorithm to reset its learning.</p>

<div class="tip-box"><strong>Pro Tip:</strong> If you are launching a new campaign without historical data, start with Maximise Conversions (no target) for the first 2-4 weeks to build conversion data. Once you have 30+ conversions, switch to Target CPA with a target based on the data you have collected.</div>

<h2>Target ROAS: Optimising for Revenue</h2>

<p>Target ROAS tells Google to maximise conversion value while maintaining your specified return on ad spend. If you set a 500% target ROAS, Google aims to generate £5 in revenue for every £1 spent.</p>

<h3>When to Use Target ROAS</h3>
<ul>
<li>E-commerce campaigns where conversion values vary (different product prices)</li>
<li>Campaigns with at least 50 conversions in the past 30 days (higher data requirements than Target CPA)</li>
<li>Accounts with accurate conversion value tracking in place</li>
</ul>

<h3>Setting Your Target</h3>
<p>Calculate your minimum viable ROAS based on your product margins and business costs. If your average margin is 40%, you need at least a 250% ROAS to break even — then add your desired profit margin on top. Start with a target 10% below your current ROAS to avoid restricting volume.</p>

<h2>Maximise Conversions: Volume First</h2>

<p>Maximise Conversions tells Google to get as many conversions as possible within your daily budget, without a specific cost target. The algorithm will spend your full budget every day.</p>

<h3>When to Use Maximise Conversions</h3>
<ul>
<li>New campaigns that need to build conversion history</li>
<li>Campaigns where hitting a budget ceiling matters more than efficiency</li>
<li>Promotional periods where you want maximum volume regardless of cost</li>
</ul>

<h3>Important Considerations</h3>
<p>Without a CPA target, Maximise Conversions will spend your entire budget — even if CPAs rise dramatically. Always monitor cost per conversion closely and be prepared to add a target CPA once you have enough data.</p>

<p>This strategy pairs well with sound <a href="/blog/google-ads-campaign-structure">campaign structure</a> that ensures budget flows to the right keywords and ad groups.</p>

<h2>Maximise Conversion Value: Revenue Focus Without a Target</h2>

<p>Similar to Maximise Conversions but optimises for total conversion value rather than conversion count. Google prioritises high-value conversions over low-value ones within your budget.</p>

<h3>When to Use Maximise Conversion Value</h3>
<ul>
<li>E-commerce campaigns with variable order values</li>
<li>New campaigns building toward Target ROAS</li>
<li>Accounts where revenue growth is the priority over efficiency</li>
</ul>

<h2>Portfolio Bidding Strategies</h2>

<p>Portfolio bidding applies a single Smart Bidding strategy across multiple campaigns, allowing the algorithm to optimise budget and bids across the entire portfolio. This is particularly powerful when individual campaigns do not have enough conversion data to optimise effectively on their own.</p>

<h3>When Portfolio Bidding Excels</h3>
<ul>
<li>Multiple campaigns targeting similar audiences or products</li>
<li>Campaigns with individually low conversion volumes that together meet Smart Bidding thresholds</li>
<li>Situations where you want a single CPA or ROAS target across related campaigns</li>
</ul>

<h3>Portfolio Bidding Setup</h3>
<p>Create portfolio strategies in Google Ads under Tools and Settings, then Bid Strategies. Apply the portfolio strategy to the relevant campaigns. Set shared budgets if appropriate to allow Google to shift spend between campaigns based on opportunity.</p>

<h2>Data Requirements and the Learning Period</h2>

<p>Every Smart Bidding strategy goes through a learning period when first applied or after significant changes. During this period, performance may fluctuate as the algorithm tests different bid levels.</p>

<h3>Minimum Data Thresholds</h3>
<ul>
<li><strong>Target CPA / Maximise Conversions:</strong> 30 conversions in the past 30 days (recommended)</li>
<li><strong>Target ROAS / Maximise Conversion Value:</strong> 50 conversions in the past 30 days (recommended)</li>
<li><strong>Portfolio strategies:</strong> Combined volume across all campaigns in the portfolio</li>
</ul>

<p>You <em>can</em> use Smart Bidding with less data, but expect higher variance and longer learning periods. For accounts with limited data, see our guide on <a href="/blog/google-ads-benchmarks-by-industry-2026">industry benchmarks</a> to set realistic initial targets.</p>

<h2>Common Smart Bidding Mistakes</h2>

<h3>Changing Targets Too Aggressively</h3>
<p>Dropping your Target CPA by 30% overnight forces the algorithm to relearn, causing performance dips. Make gradual adjustments of 10-15% and allow 1-2 weeks between changes.</p>

<h3>Not Enough Conversion Data</h3>
<p>Smart Bidding with fewer than 15 conversions per month is unreliable. Consider using micro-conversions (like add-to-cart) as secondary signals, or consolidate campaigns to increase data density.</p>

<h3>Ignoring Conversion Quality</h3>
<p>Smart Bidding optimises for whatever you tell it to optimise for. If your conversion tracking counts low-quality form submissions alongside genuine leads, the algorithm will happily deliver more low-quality submissions. Ensure your conversion tracking reflects real business value.</p>

<div class="tip-box"><strong>Pro Tip:</strong> Use Google's bid strategy reports to understand how your Smart Bidding strategies are performing against their targets. These reports show actual vs. target CPA/ROAS over time and help you identify when adjustments are needed — rather than relying on gut feeling.</div>

<h2>Choosing the Right Strategy: A Decision Framework</h2>

<p>Use this framework to select the right Smart Bidding strategy for your situation:</p>

<ul>
<li><strong>New campaign, no data?</strong> Start with Maximise Conversions, then transition to Target CPA after 30+ conversions</li>
<li><strong>Lead generation with fixed lead values?</strong> Target CPA</li>
<li><strong>E-commerce with variable order values?</strong> Target ROAS or Maximise Conversion Value</li>
<li><strong>Multiple low-volume campaigns?</strong> Portfolio bidding with a shared target</li>
<li><strong>Scaling phase, budget is the constraint?</strong> Maximise Conversions or Maximise Conversion Value</li>
</ul>

<p>If you run <a href="/blog/performance-max-campaigns-guide">Performance Max campaigns</a>, Smart Bidding is mandatory. Understanding these strategies helps you set appropriate targets for PMax, which uses the same underlying algorithms.</p>

<h2>Frequently Asked Questions</h2>

<details>
<summary>Can I switch between Smart Bidding strategies?</summary>
<div class="faq-answer"><p>Yes, but every switch triggers a new learning period. Avoid switching strategies frequently. If you need to change, time it during a low-impact period and allow 2-3 weeks for the new strategy to stabilise before evaluating results.</p></div>
</details>

<details>
<summary>Does Smart Bidding work for small budgets?</summary>
<div class="faq-answer"><p>It can, but the learning period is longer and performance variance is higher with small budgets and low conversion volumes. If you spend less than £500/month on a campaign, consider using Enhanced CPC (a lighter form of automation) or consolidating campaigns to increase data density. Portfolio bidding across small campaigns can also help.</p></div>
</details>

<details>
<summary>Should I use Target CPA or Target ROAS?</summary>
<div class="faq-answer"><p>Use Target CPA when all conversions have roughly the same value (e.g., lead generation). Use Target ROAS when conversion values vary significantly (e.g., e-commerce with products at different price points). If you are unsure, start with Target CPA — it is simpler and requires less data to work effectively.</p></div>
</details>

<details>
<summary>What happens if I set my targets too aggressively?</summary>
<div class="faq-answer"><p>Setting targets that are too aggressive (very low CPA or very high ROAS) causes Google to significantly reduce your ad spend because it cannot find enough auction opportunities that meet your target. Your impression share will drop, and you will lose volume. Set targets that are realistic based on historical data and adjust gradually.</p></div>
</details>

<p>Smart Bidding is a powerful tool, but it requires thoughtful setup and ongoing management. If you want help selecting and optimising the right bidding strategy for your campaigns, <a href="/contact">get in touch with Spires Digital</a> or <a href="/contact">book a free strategy call via Calendly</a> — we will analyse your account data and recommend the approach that drives the best results.</p>
`,

  'reduce-wasted-ad-spend-google-ads': `
<p>Every Google Ads account wastes money. The question is how much. Even well-managed accounts typically have 10-15% of spend going to searches, audiences, and placements that will never convert. Poorly managed accounts? That figure can exceed 40%. This guide covers the practical strategies that Spires Digital uses to systematically identify and eliminate wasted ad spend — from search term audits and negative keywords to audience exclusions and schedule adjustments.</p>

<h2>Search Term Audits: Your First Line of Defence</h2>

<p>The search terms report reveals exactly what people searched before clicking your ads. It is the most valuable report in Google Ads for identifying waste, yet many advertisers check it only occasionally — or not at all.</p>

<h3>How to Conduct an Effective Search Term Audit</h3>

<ul>
<li>Pull search terms for the past 30 days, filtered by cost (highest first)</li>
<li>Identify terms that received clicks but zero conversions</li>
<li>Flag terms with conversions but at a CPA well above your target</li>
<li>Look for patterns — recurring themes often indicate systematic waste</li>
<li>Check branded terms appearing in non-brand campaigns (cannibalisation)</li>
</ul>

<h3>The Hidden Search Terms Problem</h3>

<p>Google now hides a growing percentage of search terms for privacy reasons. In many accounts, 30-50% of clicks come from terms marked "Other search terms." While you cannot see these individual queries, you can:</p>

<ul>
<li>Use the visible terms to identify patterns and create proactive negatives</li>
<li>Cross-reference your search terms data with GA4 landing page reports to identify underperforming pages</li>
<li>Monitor performance at the ad group level — sudden CPA spikes often indicate hidden irrelevant queries</li>
</ul>

<div class="tip-box"><strong>Pro Tip:</strong> Export your search terms data to a spreadsheet monthly and build a running database. Over time, this becomes your most valuable optimisation asset — revealing seasonal patterns, emerging irrelevant queries, and keyword opportunities that the Google Ads interface alone cannot show you.</div>

<h2>Negative Keywords: Systematic Waste Prevention</h2>

<p>A comprehensive <a href="/blog/google-ads-negative-keywords-guide">negative keyword strategy</a> is the most effective way to reduce wasted spend. But most accounts apply negatives reactively — adding them only after money has been wasted.</p>

<h3>Proactive Negative Keyword Approach</h3>

<ul>
<li>Build a universal negative list before launching any campaign (jobs, free, DIY, tutorials, etc.)</li>
<li>Create industry-specific negatives based on your business model</li>
<li>Use shared negative keyword lists applied at the account level</li>
<li>Add brand negatives to non-brand campaigns to prevent cannibalisation</li>
<li>Review and update weekly for the first month, fortnightly thereafter</li>
</ul>

<p>A single well-placed phrase match negative can block dozens of irrelevant queries that would otherwise cost you money indefinitely.</p>

<h2>Audience Exclusions: Cutting the Right Traffic</h2>

<p>Not all traffic is equal. Audience exclusions prevent your ads from showing to people who are unlikely to convert, even if their search query is relevant.</p>

<h3>Audiences to Consider Excluding</h3>

<ul>
<li><strong>Existing customers:</strong> If your goal is new customer acquisition, exclude converters from the past 90-180 days</li>
<li><strong>Job seekers:</strong> Exclude the "Job seekers" in-market audience from commercial campaigns</li>
<li><strong>Students:</strong> If you sell to businesses, exclude education-related affinity audiences</li>
<li><strong>Remarketing exclusions:</strong> Exclude recent website visitors from cold prospecting campaigns to avoid paying twice for the same user</li>
</ul>

<h3>Observation vs Targeting Mode</h3>

<p>Before excluding an audience entirely, set it to "Observation" mode to see how it performs. If the audience consistently underperforms (high CPA, low conversion rate), then add it as an exclusion. Data-driven exclusions are always better than assumptions.</p>

<h2>Ad Schedule Adjustments</h2>

<p>Not every hour of the day and day of the week performs equally. Analysing performance by time allows you to reduce bids or pause ads during low-converting periods.</p>

<h3>How to Identify Waste by Schedule</h3>

<ul>
<li>Pull a day-of-week and hour-of-day report from Google Ads</li>
<li>Compare conversion rates and CPAs across different time segments</li>
<li>For B2B campaigns, weekends and evening hours often have significantly worse performance</li>
<li>For e-commerce, late-night hours may have high bounce rates with few purchases</li>
</ul>

<h3>Implementation</h3>
<ul>
<li>Use bid adjustments to reduce spend during underperforming hours (not eliminate entirely)</li>
<li>Start with a -25% to -50% adjustment for consistently poor time slots</li>
<li>Review monthly and adjust based on seasonal patterns</li>
<li>With Smart Bidding, the algorithm handles time-of-day adjustments automatically — but ad scheduling (turning ads off entirely) still works</li>
</ul>

<h2>Placement Reports for Display and Video</h2>

<p>If you run Display or YouTube campaigns (or Performance Max with display assets), the placement report shows exactly where your ads appeared. This is often where the biggest waste hides.</p>

<h3>Common Placement Waste</h3>

<ul>
<li><strong>Mobile app placements:</strong> Accidental clicks from games and utility apps</li>
<li><strong>Low-quality content sites:</strong> Made-for-advertising sites with no real audience</li>
<li><strong>Children's content:</strong> YouTube channels or websites with audiences that will never convert</li>
<li><strong>Parked domains:</strong> Expired domain sites with no genuine traffic</li>
</ul>

<h3>Cleaning Up Placements</h3>

<ul>
<li>Exclude the mobile app category entirely from most Display campaigns</li>
<li>Review placement reports weekly and exclude poor-performing sites</li>
<li>Create a shared placement exclusion list for sites you never want to appear on</li>
<li>Use content suitability settings to avoid sensitive or inappropriate content</li>
</ul>

<div class="tip-box"><strong>Pro Tip:</strong> For Display campaigns, exclude the placement category "adsenseformobileapps.com" (or the equivalent in the new system) to eliminate accidental clicks from mobile apps. This single exclusion can reduce wasted Display spend by 20-30% in many accounts.</div>

<h2>Geographic Performance Analysis</h2>

<p>If you target a broad area, some locations will significantly outperform others. Analysing performance by geography lets you focus budget where it works best.</p>

<ul>
<li>Pull geographic reports at the region, city, or postcode level</li>
<li>Identify locations with high spend but low conversion rates</li>
<li>Apply negative bid adjustments (-20% to -50%) for underperforming areas</li>
<li>Exclude locations that consistently waste budget with zero conversions</li>
<li>Consider creating separate campaigns for your best-performing regions</li>
</ul>

<h2>Device Performance Optimisation</h2>

<p>Desktop, mobile, and tablet traffic often convert at very different rates. While Smart Bidding accounts for device differences, you can still make manual adjustments.</p>

<ul>
<li>Review conversion rates by device across all campaigns</li>
<li>If mobile conversion rates are significantly lower, check your mobile landing page experience</li>
<li>For B2B campaigns, desktop often outperforms mobile significantly — consider bid adjustments</li>
<li>For lead generation with phone calls, mobile may outperform — adjust accordingly</li>
</ul>

<p>For more on budgeting effectively, see our guide on <a href="/blog/how-to-calculate-google-ads-budget">calculating your Google Ads budget</a>.</p>

<h2>Building a Waste Reduction Routine</h2>

<p>Reducing wasted spend is not a one-time project — it is an ongoing discipline. Here is the routine we follow at Spires Digital for every client account:</p>

<ul>
<li><strong>Weekly:</strong> Search term review, placement review, conversion tracking verification</li>
<li><strong>Fortnightly:</strong> Audience performance analysis, negative keyword updates</li>
<li><strong>Monthly:</strong> Geographic analysis, device analysis, ad schedule review</li>
<li><strong>Quarterly:</strong> Full account audit, <a href="/blog/smart-bidding-strategies-explained">bidding strategy review</a>, campaign structure assessment</li>
</ul>

<h2>Frequently Asked Questions</h2>

<details>
<summary>How much of my Google Ads budget is being wasted?</summary>
<div class="faq-answer"><p>Industry studies suggest the average Google Ads account wastes 20-30% of its budget on irrelevant clicks. Well-managed accounts reduce this to 5-10%. The best way to find out is to conduct a thorough search term audit and placement review — the waste is usually hiding in plain sight once you know where to look.</p></div>
</details>

<details>
<summary>Can Smart Bidding reduce wasted spend automatically?</summary>
<div class="faq-answer"><p>Smart Bidding reduces waste by lowering bids for queries it predicts are unlikely to convert. However, it cannot exclude irrelevant queries entirely — that requires negative keywords. And it cannot prevent your ads from appearing on poor-quality placements — that requires placement exclusions. Smart Bidding and manual waste prevention work together, not as substitutes.</p></div>
</details>

<details>
<summary>How often should I review search terms?</summary>
<div class="faq-answer"><p>Weekly for new campaigns or campaigns running broad match keywords. Fortnightly for established campaigns with mature negative keyword lists. Never less than monthly. Set a recurring calendar reminder — consistency matters more than the frequency you choose.</p></div>
</details>

<p>Cutting wasted spend is often the fastest path to better Google Ads performance — faster than new ad copy, new landing pages, or increased budgets. If you want a professional audit of your account's waste, <a href="/contact">get in touch with Spires Digital</a> or <a href="/contact">book a free strategy call via Calendly</a> — we will show you exactly where your budget is being wasted and how to fix it.</p>
`,

  'landing-page-optimisation-ppc': `
<p>You can run the most perfectly targeted Google Ads campaign in the world, but if your landing page does not convert, you are paying for clicks that lead nowhere. Landing page optimisation is the most overlooked lever in PPC — and often the highest-impact one. A 20% improvement in landing page conversion rate has the same effect on your bottom line as a 20% reduction in CPC, but it is usually easier to achieve. This guide covers the specific optimisations that actually move the needle for PPC landing pages.</p>

<h2>Page Speed: The Silent Conversion Killer</h2>

<p>Page speed is the first thing to fix because it affects everything else. A page that takes more than three seconds to load loses over half its visitors before they even see your content.</p>

<h3>Speed Benchmarks for PPC Landing Pages</h3>
<ul>
<li><strong>Target LCP (Largest Contentful Paint):</strong> Under 2.5 seconds</li>
<li><strong>Target FID (First Input Delay):</strong> Under 100 milliseconds</li>
<li><strong>Target CLS (Cumulative Layout Shift):</strong> Under 0.1</li>
</ul>

<h3>Quick Speed Wins</h3>
<ul>
<li>Compress and properly size all images (use WebP format)</li>
<li>Minimise JavaScript and defer non-critical scripts</li>
<li>Use a Content Delivery Network (CDN) for faster global delivery</li>
<li>Enable browser caching for returning visitors</li>
<li>Remove unnecessary third-party scripts and tracking pixels</li>
</ul>

<p>Page speed also directly impacts your <a href="/blog/google-ads-quality-score-guide">Quality Score</a> — specifically the landing page experience component. Faster pages lead to lower CPCs and better ad positions, creating a compounding benefit.</p>

<div class="tip-box"><strong>Pro Tip:</strong> Run your landing page through Google PageSpeed Insights and Lighthouse. Fix every issue flagged as "Avoid" or "Minimise" before doing anything else. We have seen Quality Scores jump from 5 to 8 purely from page speed improvements, cutting CPCs by 30-40%.</div>

<h2>Message Match: Delivering on the Ad's Promise</h2>

<p>Message match means your landing page immediately confirms what your ad promised. If your ad says "Free PPC Audit — Get Results in 48 Hours" and your landing page headline says "Welcome to Our Digital Marketing Agency," you have a disconnect that kills conversions.</p>

<h3>Elements to Align</h3>

<ul>
<li><strong>Headline:</strong> Should echo the key phrase or promise from your ad</li>
<li><strong>Subheadline:</strong> Should expand on the benefit or offer mentioned in the ad</li>
<li><strong>Visual hierarchy:</strong> The first thing a visitor sees should relate to why they clicked</li>
<li><strong>CTA:</strong> Should match the action implied by the ad (if the ad says "Get a Quote," the page should have a quote form, not a "Learn More" button)</li>
</ul>

<p>For campaigns with multiple ad groups targeting different keywords, consider using dynamic landing page elements that change the headline based on the referring ad group or keyword. This dramatically improves message match at scale.</p>

<h2>Social Proof: Building Trust Fast</h2>

<p>PPC visitors are often encountering your brand for the first time. They need reasons to trust you — fast. Social proof elements reduce perceived risk and increase conversion confidence.</p>

<h3>High-Impact Social Proof Elements</h3>

<ul>
<li><strong>Customer testimonials:</strong> Include name, company, and photo where possible. Specific results ("Increased our ROAS by 340%") outperform vague praise ("Great service")</li>
<li><strong>Client logos:</strong> Display recognisable brand logos of current or past clients</li>
<li><strong>Review scores:</strong> Aggregate ratings from Google, Trustpilot, or industry-specific platforms</li>
<li><strong>Case study snippets:</strong> Brief outcome statements linked to full case studies</li>
<li><strong>Certifications and awards:</strong> Industry certifications, Google Partner status, relevant accreditations</li>
</ul>

<p>Place at least one social proof element above the fold. Visitors who see evidence of trust before they scroll are significantly more likely to engage with your form or CTA.</p>

<h2>Form Design: Reducing Friction</h2>

<p>Your form is where conversions happen — or die. Every additional field, every unnecessary question, and every confusing label reduces completion rates.</p>

<h3>Form Optimisation Principles</h3>

<ul>
<li><strong>Minimise fields:</strong> Ask only for information you absolutely need at this stage. Name, email, and one qualifying question is usually enough for initial contact</li>
<li><strong>Use progressive disclosure:</strong> Show additional fields only after initial ones are completed</li>
<li><strong>Single-column layout:</strong> Multi-column forms confuse users and reduce completion rates</li>
<li><strong>Clear labels:</strong> Use descriptive labels above each field, not placeholder text that disappears</li>
<li><strong>Smart defaults:</strong> Pre-fill fields where possible (country, phone format)</li>
<li><strong>Prominent submit button:</strong> Use a descriptive CTA ("Get My Free Audit") not a generic "Submit"</li>
</ul>

<h3>Form Placement</h3>
<p>For lead generation pages, place the form above the fold or in a sticky sidebar. For e-commerce, ensure the add-to-cart button is immediately visible without scrolling. Every second a visitor spends searching for how to convert is a second they might leave.</p>

<div class="tip-box"><strong>Pro Tip:</strong> Add a line of microcopy below your submit button that reduces anxiety. "No credit card required," "We respond within 2 hours," or "Your data is protected by 256-bit encryption" can lift form completion rates by 10-25%.</div>

<h2>A/B Testing: What to Test First</h2>

<p>Landing page optimisation is iterative. You will not nail it on the first attempt, and what works for one audience may not work for another. A/B testing provides the data to make confident decisions.</p>

<h3>Priority Testing Order</h3>

<ol>
<li><strong>Headline:</strong> Test different value propositions and angles (feature-focused vs. benefit-focused vs. social proof-led)</li>
<li><strong>CTA:</strong> Test button text, colour, size, and placement</li>
<li><strong>Form length:</strong> Test shorter vs. longer forms (fewer fields vs. more qualified leads)</li>
<li><strong>Social proof placement:</strong> Test above-fold testimonials vs. below-fold</li>
<li><strong>Page layout:</strong> Test long-form vs. short-form page designs</li>
</ol>

<h3>Testing Rules</h3>
<ul>
<li>Test one variable at a time to isolate what is causing the change</li>
<li>Run tests until you reach statistical significance (minimum 100 conversions per variant)</li>
<li>Document every test, including losers — knowing what does not work is equally valuable</li>
<li>Re-test winners periodically; audience preferences change over time</li>
</ul>

<p>Connect your testing insights back to your <a href="/blog/google-ads-copy-that-converts">ad copy strategy</a>. If a headline angle wins on your landing page, test a similar angle in your ads for consistent messaging throughout the funnel.</p>

<h2>Mobile Optimisation: Non-Negotiable in 2026</h2>

<p>Over 60% of Google Ads clicks now come from mobile devices. If your landing page is not optimised for mobile, you are wasting the majority of your ad spend.</p>

<h3>Mobile-Specific Optimisations</h3>

<ul>
<li><strong>Touch-friendly buttons:</strong> Minimum 44x44 pixel touch targets with adequate spacing</li>
<li><strong>Simplified navigation:</strong> Remove unnecessary navigation that distracts from the conversion goal</li>
<li><strong>Click-to-call:</strong> Add a prominent phone button for users who prefer to call</li>
<li><strong>Autofill support:</strong> Enable browser autofill for form fields to reduce typing on mobile</li>
<li><strong>Thumb-zone design:</strong> Place key CTAs and form fields in the natural thumb reach area</li>
</ul>

<p>Test your landing page on actual mobile devices, not just browser emulators. Real-world mobile experience often differs from desktop previews. Our <a href="/services/shopify-builds">Shopify builds service</a> always prioritises mobile-first design because conversion rates depend on it.</p>

<h2>Landing Page Quality Score Impact</h2>

<p>Google evaluates landing page experience as part of your Quality Score. Pages that are relevant, transparent, fast, and easy to navigate score higher — resulting in lower CPCs and better ad positions. Key factors include:</p>

<ul>
<li>Content relevance to the ad and keywords</li>
<li>Page load speed across all devices</li>
<li>Mobile usability and responsiveness</li>
<li>Transparent business information and privacy policy</li>
<li>Original, useful content that fulfils the searcher's intent</li>
</ul>

<h2>Frequently Asked Questions</h2>

<details>
<summary>Should I use my homepage as a PPC landing page?</summary>
<div class="faq-answer"><p>Almost never. Your homepage serves multiple audiences and purposes, which dilutes the message for any specific ad group. Dedicated landing pages with a single CTA aligned to your ad copy consistently outperform homepages for PPC conversions. The exception is brand campaigns where searchers specifically want to visit your main site.</p></div>
</details>

<details>
<summary>How many landing pages do I need?</summary>
<div class="faq-answer"><p>At minimum, one per major ad group theme. Ideally, create landing pages that match the specific intent behind each keyword cluster. A campaign with five ad groups targeting different service areas should have five corresponding landing pages. The investment in dedicated pages pays for itself through improved conversion rates and Quality Scores.</p></div>
</details>

<details>
<summary>What is a good landing page conversion rate for PPC?</summary>
<div class="faq-answer"><p>Average PPC landing page conversion rates range from 2-5% across most industries. Top-performing pages achieve 10-15%. The "right" rate depends on your industry, offer, and traffic quality. Focus on continuous improvement — a 1% increase in conversion rate on a high-traffic page can translate to significant revenue growth.</p></div>
</details>

<details>
<summary>Should I remove navigation from PPC landing pages?</summary>
<div class="faq-answer"><p>For dedicated conversion pages, yes — removing main navigation reduces distractions and keeps visitors focused on converting. Keep your logo (linking to your homepage) and essential trust elements, but remove menu bars that invite visitors to browse elsewhere. This approach typically improves conversion rates by 10-20%.</p></div>
</details>

<p>Your landing page is where clicks become customers — or bounce. If you want help building high-converting PPC landing pages, <a href="/contact">get in touch with Spires Digital</a> or <a href="/contact">book a free strategy call via Calendly</a>. We will review your current pages and identify the changes that will have the biggest impact on your conversion rates.</p>
`,

  'google-ads-lead-generation-b2b': `
<p>B2B lead generation through Google Ads requires a fundamentally different approach than B2C or e-commerce campaigns. Longer sales cycles, multiple decision-makers, higher ticket values, and the critical distinction between lead <em>volume</em> and lead <em>quality</em> all demand a more nuanced strategy. This guide covers the campaign structures, targeting approaches, and optimisation tactics that drive genuinely qualified B2B leads — not just form fills that never become revenue.</p>

<h2>B2B vs B2C: Why the Approach Must Differ</h2>

<p>Before diving into tactics, it is important to understand why B2B campaigns need their own playbook:</p>

<ul>
<li><strong>Longer sales cycles:</strong> B2B purchases often take weeks or months, not minutes. Your campaigns must nurture, not just capture.</li>
<li><strong>Multiple stakeholders:</strong> The person clicking your ad may not be the final decision-maker. Your messaging needs to resonate at multiple levels of an organisation.</li>
<li><strong>Higher CPCs:</strong> B2B keywords tend to be more expensive due to higher customer lifetime values and competitive bidding.</li>
<li><strong>Lead quality matters more than volume:</strong> Ten qualified leads that become customers are worth more than a thousand form fills from students and job seekers.</li>
</ul>

<h2>Campaign Structure for B2B Lead Generation</h2>

<p>Your <a href="/blog/google-ads-campaign-structure">campaign structure</a> should reflect the B2B buying journey, not just keyword themes.</p>

<h3>Recommended Campaign Architecture</h3>

<ul>
<li><strong>Brand campaign:</strong> Protect your brand terms and capture high-intent branded searches</li>
<li><strong>High-intent solution campaigns:</strong> Target keywords indicating active buying intent ("enterprise CRM software," "managed IT services London")</li>
<li><strong>Problem-aware campaigns:</strong> Target keywords describing problems your product solves ("reduce employee turnover," "automate invoice processing")</li>
<li><strong>Competitor campaigns:</strong> Bid on competitor brand names when strategically valuable</li>
<li><strong>Remarketing campaigns:</strong> Re-engage website visitors and nurture them through the funnel</li>
</ul>

<h3>Ad Group Segmentation</h3>

<p>Within each campaign, create ad groups around specific use cases or buyer personas rather than generic keyword themes. "CRM for financial services" deserves a different ad group and landing page than "CRM for manufacturing" — even though both relate to CRM.</p>

<div class="tip-box"><strong>Pro Tip:</strong> Create separate campaigns for different stages of the buying funnel and assign different conversion actions to each. Your high-intent campaigns should optimise for demo requests or sales calls, while problem-aware campaigns can optimise for content downloads or webinar registrations. This prevents Smart Bidding from conflating a whitepaper download with a qualified sales lead.</div>

<h2>Audience Targeting for B2B</h2>

<p>B2B audience targeting in Google Ads has improved significantly. Layering audience signals on top of keyword targeting allows you to bid more aggressively for searches from your ideal customers.</p>

<h3>Key Audience Types</h3>

<ul>
<li><strong>In-market audiences:</strong> Google identifies users actively researching B2B categories like "Business Technology," "Enterprise Software," and "Marketing Services"</li>
<li><strong>Custom audiences:</strong> Create audiences based on keywords your target buyers search for, URLs they visit, or apps they use</li>
<li><strong>Customer match:</strong> Upload your CRM contact list to target (or exclude) existing contacts and create lookalike audiences</li>
<li><strong>Company targeting:</strong> Target specific company sizes, industries, or even individual companies through custom audiences</li>
</ul>

<h3>Audience Layering Strategy</h3>

<p>Add audiences in "Observation" mode first to see how they perform without restricting reach. Once you identify audiences that consistently outperform, increase bid adjustments for them. If certain audiences consistently underperform, exclude them to reduce waste.</p>

<h2>Lead Forms: In-Ad vs Landing Page</h2>

<p>Google Ads lead form extensions allow prospects to submit their information directly from the ad, without visiting your website. This can be powerful for B2B, but comes with trade-offs.</p>

<h3>Lead Form Extensions: Pros</h3>
<ul>
<li>Reduce friction — no landing page load time or navigation required</li>
<li>Higher volume — easier to fill out means more submissions</li>
<li>Mobile-friendly — pre-filled from Google account data</li>
</ul>

<h3>Lead Form Extensions: Cons</h3>
<ul>
<li>Lower quality — ease of submission attracts more unqualified leads</li>
<li>Less information — limited fields compared to a full landing page form</li>
<li>No qualifying content — prospects skip your website's value proposition</li>
</ul>

<h3>Our Recommendation</h3>
<p>Use lead forms for top-of-funnel offers (guides, webinars, newsletters) where volume matters. For high-intent conversions (demo requests, consultation bookings), send users to a dedicated landing page where your full value proposition and social proof can do the qualifying work.</p>

<h2>CRM Integration: Closing the Loop</h2>

<p>The most important — and most overlooked — element of B2B Google Ads is feeding conversion data back from your CRM. Without this loop, Google Ads optimises for form fills, not revenue.</p>

<h3>Setting Up CRM Integration</h3>

<ul>
<li><strong>Capture the GCLID:</strong> Store the Google Click ID with every lead that enters your CRM via a hidden form field</li>
<li><strong>Track lead stages:</strong> Define stages like MQL (Marketing Qualified Lead), SQL (Sales Qualified Lead), Opportunity, and Closed Won</li>
<li><strong>Import conversions:</strong> Upload offline conversions to Google Ads when leads reach key stages, including the conversion value</li>
<li><strong>Automate the process:</strong> Use native integrations (HubSpot, Salesforce) or tools like Zapier to automate GCLID capture and conversion uploads</li>
</ul>

<p>Once CRM data flows back to Google Ads, you can switch to Smart Bidding strategies that optimise for qualified leads or actual revenue — not just form submissions. This single change often improves lead quality by 30-50% while maintaining or reducing cost per qualified lead.</p>

<div class="tip-box"><strong>Pro Tip:</strong> Assign different conversion values to different lead stages. An SQL might be worth £50, while a Closed Won deal is worth £5,000. When Google Ads can see these values, it learns to bid more aggressively for the types of clicks that lead to high-value outcomes — transforming your campaign economics.</div>

<h2>Lead Quality Optimisation</h2>

<p>Volume means nothing if your sales team wastes time on unqualified leads. Here is how to shift the balance toward quality:</p>

<h3>On the Campaign Side</h3>
<ul>
<li>Use <a href="/blog/google-ads-copy-that-converts">ad copy</a> that pre-qualifies — mention pricing tiers, company size requirements, or industry focus to deter poor-fit prospects</li>
<li>Add negative keywords for job seekers, students, and freebie hunters</li>
<li>Layer audience targeting to reach decision-makers in your target industries</li>
<li>Optimise for downstream conversions (SQLs or revenue) rather than form fills</li>
</ul>

<h3>On the Landing Page Side</h3>
<ul>
<li>Include qualifying questions in your form (company size, budget range, timeline)</li>
<li>Display pricing information or "starting from" figures to set expectations</li>
<li>Use case studies from your target industry to attract similar prospects</li>
<li>Clearly state who your service is for (and who it is not for)</li>
</ul>

<h2>B2B Remarketing Strategies</h2>

<p>B2B sales cycles are long, and most prospects will not convert on their first visit. Remarketing keeps your brand visible throughout the decision-making process.</p>

<h3>Remarketing Segments for B2B</h3>

<ul>
<li><strong>High-intent visitors:</strong> Users who visited pricing or demo pages (bid aggressively)</li>
<li><strong>Content engagers:</strong> Users who downloaded resources or attended webinars (nurture with next-stage content)</li>
<li><strong>Cart/form abandoners:</strong> Users who started but did not complete a conversion (retarget with urgency messaging)</li>
<li><strong>Blog readers:</strong> Users who engaged with educational content (move them toward consideration-stage offers)</li>
</ul>

<p>Create different remarketing ads for each segment, matching the message to their stage in the buying journey. A visitor who read a blog post needs different messaging than one who abandoned a demo request form.</p>

<h2>Industry-Specific Considerations</h2>

<p>B2B Google Ads strategy varies by industry. For <a href="/industries/saas">SaaS companies</a>, free trial offers typically outperform demo requests for lower-ticket products, while enterprise SaaS benefits from consultative CTAs. Professional services firms should emphasise expertise and case studies, while manufacturing and industrial businesses often see strong results from Search campaigns targeting specific product specifications or part numbers.</p>

<h2>Frequently Asked Questions</h2>

<details>
<summary>What is a good cost per lead for B2B Google Ads?</summary>
<div class="faq-answer"><p>B2B cost per lead varies enormously by industry and deal size. SaaS companies typically see CPLs of £30-£150, while professional services might range from £50-£300. The right benchmark is your customer acquisition cost (CAC) relative to customer lifetime value (LTV). If your average deal is worth £50,000, a £200 CPL is excellent. Focus on cost per qualified lead and cost per closed deal rather than raw CPL.</p></div>
</details>

<details>
<summary>Should I use broad match keywords for B2B campaigns?</summary>
<div class="faq-answer"><p>Broad match can work for B2B when paired with Smart Bidding and strong negative keyword lists, but use it cautiously. B2B keywords often have consumer-oriented variants that broad match will pick up. Start with phrase and exact match for high-intent campaigns and test broad match in separate ad groups with close monitoring of search terms.</p></div>
</details>

<details>
<summary>How do I track leads that convert offline or over the phone?</summary>
<div class="faq-answer"><p>Capture the Google Click ID (GCLID) in a hidden form field and store it in your CRM. When a lead progresses through your sales pipeline, import the offline conversion data back to Google Ads via manual upload or API integration. For phone calls, use Google Ads call tracking or a third-party call tracking solution that captures the GCLID.</p></div>
</details>

<details>
<summary>Is Performance Max suitable for B2B lead generation?</summary>
<div class="faq-answer"><p>Performance Max can work for B2B, but requires careful setup. The key challenges are ensuring lead quality (PMax optimises for volume by default) and the lack of search term visibility. If you use PMax for B2B, feed it offline conversion data so it optimises for qualified leads, and maintain strong brand and audience signals in your asset groups.</p></div>
</details>

<p>B2B lead generation through Google Ads demands precision, patience, and a commitment to lead quality over volume. If you want help building a B2B campaign structure that delivers qualified pipeline — not just form fills — <a href="/contact">get in touch with Spires Digital</a> or <a href="/contact">book a free strategy call via Calendly</a>. We specialise in helping B2B businesses turn Google Ads into a predictable source of qualified leads.</p>
`,
};
