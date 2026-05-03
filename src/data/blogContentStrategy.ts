import type { BlogPost } from './blogPosts';

export const strategyBlogPosts: BlogPost[] = [
  {
    slug: 'first-90-days-digital-marketing-agency',
    title: 'The First 90 Days with a Digital Marketing Agency: What to Expect',
    description: 'A week-by-week breakdown of what happens when you partner with a digital marketing agency — from onboarding and audits through to optimisation and scaling.',
    date: '2026-01-22',
    category: 'Strategy',
    image: '',
    readTime: '10 min read',
  },
  {
    slug: 'digital-marketing-guernsey-channel-islands',
    title: 'Digital Marketing for Guernsey and Channel Islands Businesses',
    description: 'How Guernsey, Jersey, and Channel Islands businesses can leverage PPC, Meta Ads, affiliate marketing, and Shopify to grow locally and internationally.',
    date: '2026-01-21',
    category: 'Strategy',
    image: '',
    readTime: '10 min read',
  },
  {
    slug: 'marketing-attribution-which-channels-work',
    title: 'Marketing Attribution: How to Know Which Channels Are Actually Working',
    description: 'A practical guide to marketing attribution models, cross-channel measurement, GA4 data-driven attribution, and incrementality testing for performance marketers.',
    date: '2026-01-20',
    category: 'Strategy',
    image: '',
    readTime: '10 min read',
  },
];

export const strategyBlogContent: Record<string, string> = {

  'first-90-days-digital-marketing-agency': `
<p>Signing with a digital marketing agency is a significant decision — and the first 90 days set the tone for the entire partnership. Whether you're investing in <a href="/services/ppc-management">PPC management</a>, <a href="/services/meta-ads">Meta Ads</a>, <a href="/services/affiliate-management">affiliate marketing</a>, or <a href="/services/shopify-builds">Shopify development</a>, understanding what happens during those critical first three months helps you evaluate progress, set realistic expectations, and get the most from your investment.</p>
<p>Too many businesses sign with an agency expecting instant results, then feel disappointed when month one is spent on audits and strategy rather than scaling. That frustration is almost always a communication gap — not a performance gap. This guide walks you through exactly what should happen, week by week, so you can hold your agency accountable to the right milestones at the right times.</p>

<h2>Weeks 1–2: Onboarding and Discovery</h2>
<p>The first fortnight is all about knowledge transfer. A good agency will invest heavily in understanding your business before touching a single campaign. Here's what should happen during onboarding:</p>

<h3>The Kickoff Call</h3>
<p>Your agency should schedule a structured kickoff meeting covering your business model, target audience, competitive landscape, historical performance, and short-term and long-term goals. This isn't a casual chat — it's a strategic discovery session that informs every decision for the next 90 days and beyond.</p>
<p>At Spires Digital, our kickoff calls typically run 60–90 minutes and cover everything from your customer acquisition costs and lifetime value to your seasonal patterns and margin structures. We need to understand your business as well as you do to make intelligent decisions with your budget.</p>

<h3>Access and Account Setup</h3>
<p>During the first week, expect to provide access to your Google Ads, Meta Ads Manager, Google Analytics (GA4), Google Search Console, Shopify admin (if applicable), and any affiliate network dashboards. A professional agency will use their own manager accounts whilst ensuring you retain full ownership of every asset.</p>
<p>If your agency doesn't ask for GA4 access on day one, that's a red flag. As we cover in our <a href="/blog/what-to-expect-google-ads-management">Google Ads management expectations guide</a>, data access is the foundation of every meaningful optimisation.</p>

<h3>Stakeholder Alignment</h3>
<p>The agency should identify key stakeholders, establish communication channels, and agree on reporting cadence. Weekly check-ins during the first month are standard practice — these can shift to fortnightly or monthly once the relationship is established and performance is stable.</p>

<div class="tip-box"><strong>Pro Tip:</strong> Create a shared document during onboarding that captures your brand guidelines, tone of voice, competitor list, and any previous marketing learnings. This saves weeks of back-and-forth and ensures your agency hits the ground running with accurate context.</div>

<h2>Month 1: Audit, Analysis, and Strategy</h2>
<p>The first full month is diagnostic. Your agency should be auditing everything — your existing campaigns, tracking setup, website performance, and competitive positioning. This is where the real value starts compounding.</p>

<h3>The Comprehensive Audit</h3>
<p>A thorough audit covers every channel you're investing in:</p>
<ul>
<li><strong>PPC audit:</strong> Account structure, keyword relevance, Quality Scores, bid strategies, negative keyword coverage, ad copy effectiveness, landing page alignment, and conversion tracking accuracy</li>
<li><strong>Meta Ads audit:</strong> Campaign objectives, audience targeting, creative performance, pixel configuration, attribution settings, and frequency management</li>
<li><strong>Affiliate audit:</strong> Programme terms, commission structures, publisher quality, attribution windows, and fraud detection measures</li>
<li><strong>Website audit:</strong> Page speed, mobile experience, conversion rate optimisation opportunities, and technical SEO foundations</li>
</ul>
<p>This audit should result in a written document with prioritised recommendations — not a vague verbal summary. If your agency can't produce a structured audit report, they likely don't have a structured process.</p>

<h3>Tracking and Measurement Setup</h3>
<p>Before any campaign changes, your agency must verify (or fix) your conversion tracking. This includes GA4 event configuration, Google Ads conversion actions, Meta pixel events, and any server-side tracking requirements. Getting this right in month one prevents months of optimising against bad data.</p>

<h3>Strategy Development</h3>
<p>Based on the audit findings, your agency should present a 90-day strategy document covering:</p>
<ul>
<li><strong>Quick wins:</strong> Immediate changes that can improve performance within weeks (pausing wasteful spend, fixing tracking gaps, adjusting bid strategies)</li>
<li><strong>Medium-term initiatives:</strong> Structural improvements that take 4–8 weeks to implement and measure (campaign restructuring, audience testing, creative overhaul)</li>
<li><strong>Long-term growth plays:</strong> Strategic investments that compound over 3–6 months (brand building, affiliate programme expansion, <a href="/services/shopify-builds">Shopify store optimisation</a>)</li>
</ul>

<h3>What Results to Expect in Month 1</h3>
<p>Honestly? Don't expect dramatic performance improvements in month one. The primary deliverables should be clarity, structure, and a data-informed plan. If your agency is promising 50% improvement in week three, they're either sandbagging the setup period or making promises they can't keep.</p>
<p>That said, quick wins from the audit — such as pausing irrelevant keywords or fixing broken conversion tracking — can sometimes deliver immediate savings or improved data quality.</p>

<h2>Month 2: Implementation and Testing</h2>
<p>Month two is where strategy becomes action. Your agency should be implementing the recommendations from the audit and running structured tests across channels.</p>

<h3>Campaign Restructuring</h3>
<p>If the audit identified structural issues — and it almost always does — month two is when campaigns get rebuilt properly. For <a href="/services/ppc-management">PPC</a>, this might mean restructuring ad groups around tighter keyword themes, implementing proper SKAG or STAG structures, or migrating to Performance Max where appropriate. For <a href="/services/meta-ads">Meta Ads</a>, it could involve consolidating fragmented campaigns, building proper funnel structures, or implementing Advantage+ campaigns.</p>

<h3>Creative Testing</h3>
<p>Good agencies run systematic creative tests rather than making gut-feel changes. In month two, expect to see A/B tests on ad copy, headlines, creative formats, and calls to action. Each test should have a clear hypothesis, controlled variables, and defined success criteria.</p>
<p>This is where the difference between <a href="/blog/facebook-ads-agency-vs-diy">hiring an agency versus managing ads yourself</a> becomes most apparent. Systematic testing requires discipline, patience, and statistical literacy that most in-house teams struggle to maintain alongside other responsibilities.</p>

<h3>Audience Development</h3>
<p>Month two should include building and testing new audience segments. For PPC, this means refining keyword lists and testing new match types. For Meta Ads, it involves lookalike audience creation, interest-based testing, and custom audience development from your CRM data. For <a href="/services/affiliate-management">affiliate marketing</a>, it means identifying and recruiting new publisher partners aligned with your target customer profile.</p>

<h3>Reporting Cadence</h3>
<p>By the end of month two, your reporting structure should be fully established. You should receive weekly performance snapshots and a comprehensive monthly report with analysis, insights, and recommendations. The monthly report should directly reference the 90-day strategy and track progress against agreed KPIs.</p>

<div class="tip-box"><strong>Pro Tip:</strong> Ask your agency to include a "lessons learned" section in every monthly report. This demonstrates they're actively learning from your account data and adjusting their approach — not just running the same playbook on autopilot.</div>

<h2>Month 3: Optimisation and Scaling</h2>
<p>By month three, your agency should have enough data to make confident optimisation decisions. This is where performance should start improving measurably.</p>

<h3>Data-Driven Optimisation</h3>
<p>With two months of clean data under controlled conditions, your agency can now optimise with confidence. This includes adjusting bid strategies based on actual conversion data, reallocating budget from underperforming campaigns to proven winners, refining audience targeting based on conversion patterns, and scaling winning creative variations.</p>

<h3>Cross-Channel Integration</h3>
<p>If you're running multiple channels — and most serious businesses should be — month three is when cross-channel synergies should start emerging. Your PPC and Meta campaigns should be coordinated rather than siloed. Your affiliate programme should complement rather than cannibalise your paid media. Your <a href="/services/shopify-builds">Shopify store</a> should be optimised for the traffic your campaigns are driving.</p>
<p>This integrated approach is central to <a href="/how-we-work">how we work</a> at Spires Digital. Operating from our offices in Guernsey and Lichfield, we manage all channels under one roof — which means your PPC manager and your Meta Ads strategist are literally sitting next to each other, sharing insights in real time.</p>

<h3>The 90-Day Review</h3>
<p>At the end of month three, your agency should present a comprehensive review covering:</p>
<ul>
<li><strong>Performance vs baseline:</strong> How key metrics have changed since day one</li>
<li><strong>Strategy execution:</strong> What was planned, what was delivered, and any variances</li>
<li><strong>Key learnings:</strong> What the data has revealed about your audience, messaging, and channel effectiveness</li>
<li><strong>Next quarter plan:</strong> An updated strategy for months 4–6 based on three months of real data</li>
</ul>

<h3>Scaling Decisions</h3>
<p>Month three is typically when scaling conversations begin. If the first 90 days have delivered positive unit economics, your agency should recommend controlled budget increases with clear projections. If results are mixed, they should present a diagnosis and revised approach — not excuses. And if results are genuinely poor despite a solid process, an honest agency will tell you so and help you understand why.</p>

<h2>Red Flags During the First 90 Days</h2>
<p>Watch for these warning signs that your agency engagement isn't on track:</p>
<ul>
<li><strong>No audit or strategy document:</strong> If your agency skips the diagnostic phase and jumps straight to "optimising," they're guessing, not strategising</li>
<li><strong>Radio silence:</strong> If you're chasing your agency for updates rather than receiving proactive communication, their account management is understaffed</li>
<li><strong>No access to accounts:</strong> You should have full transparency into every platform at all times. No exceptions</li>
<li><strong>Vanity metrics in reports:</strong> If reports focus on impressions and clicks rather than conversions, revenue, and ROAS, your agency is hiding behind noise</li>
<li><strong>No testing framework:</strong> If changes are made without hypotheses or controlled conditions, results are luck rather than strategy</li>
</ul>

<h2>What Good Looks Like: Setting Realistic Expectations</h2>
<p>A strong first 90 days with a digital marketing agency should deliver clarity on what's working and what isn't, a clean data foundation for future decision-making, early performance improvements from quick wins and structural fixes, a tested and validated strategy for scaling, and a relationship built on trust, transparency, and shared goals.</p>
<p>At Spires Digital, our growth partnership model — £1,200/month plus 5% of profitable revenue — means our success is directly tied to yours from day one. As a Google Partner, Bing Ads accredited, Shopify Partner, and AWIN Certified agency, we bring cross-channel expertise from the first kickoff call through to long-term scaling. We don't need three months to prove our process works; we need three months to prove it works <em>for your specific business</em>.</p>
<p>If you're considering working with an agency — or you're unhappy with your current one — <a href="/contact">book a free consultation via Calendly</a>. We'll walk you through exactly what our first 90 days together would look like and give you a clear roadmap before you commit to anything.</p>

<details>
<summary>How long before I see results from a new digital marketing agency?</summary>
<div class="faq-answer"><p>Most businesses see meaningful performance improvements by month two or three, with month one focused on auditing, strategy, and fixing foundational issues like tracking. Quick wins from the initial audit — such as pausing wasteful spend or fixing conversion tracking — can deliver immediate improvements, but sustained growth requires the full 90-day foundation period.</p></div>
</details>

<details>
<summary>What should I prepare before my agency kickoff?</summary>
<div class="faq-answer"><p>Gather access credentials for all marketing platforms (Google Ads, Meta, GA4, Shopify), prepare a summary of previous marketing activities and results, document your target audience profiles, clarify your budget expectations, and list your top 3–5 business goals for the next 12 months. The more context you provide upfront, the faster your agency can move from discovery to delivery.</p></div>
</details>

<details>
<summary>Is it normal for performance to dip during the first month?</summary>
<div class="faq-answer"><p>A small, temporary dip can be normal — especially if your agency is restructuring campaigns, pausing underperforming elements, or resetting bid strategies. However, a dramatic decline without explanation is a concern. Your agency should communicate any expected disruptions in advance and provide a clear rationale for structural changes that might temporarily affect performance.</p></div>
</details>

<details>
<summary>How do I know if my agency is the right fit after 90 days?</summary>
<div class="faq-answer"><p>Evaluate three things: process (did they follow a structured approach?), communication (were they proactive, transparent, and responsive?), and trajectory (is performance trending in the right direction, even if absolute numbers are still improving?). A good agency might not have transformed your results in 90 days, but they should have built a solid foundation and demonstrated a clear path to growth.</p></div>
</details>
`,

  'digital-marketing-guernsey-channel-islands': `
<p>Running a business in Guernsey, Jersey, or anywhere across the Channel Islands comes with unique advantages — and unique marketing challenges. A small but affluent population, cross-border trading complexities, a thriving financial services sector, and a seasonal tourism economy all demand a digital marketing approach that's fundamentally different from what works on the UK mainland.</p>
<p>At Spires Digital, we understand these nuances intimately. We're based in Guernsey and Lichfield, which means we combine deep local knowledge of the Channel Islands market with the broader UK and international perspective that ambitious island businesses need to grow beyond their shores.</p>

<h2>The Channel Islands Digital Marketing Landscape</h2>
<p>The Channel Islands represent a fascinating marketing environment. With a combined population of roughly 170,000 across Guernsey and Jersey, the total addressable market is small — but purchasing power per capita is significantly above the UK average. This creates both constraints and opportunities that most mainland agencies simply don't understand.</p>

<h3>Small Market, High Competition</h3>
<p>In a market this size, everyone knows everyone. Reputation travels fast, both positively and negatively. Digital marketing for Channel Islands businesses isn't just about driving clicks — it's about building and protecting a brand within a tight-knit community. This means your <a href="/services/meta-ads">Meta Ads</a> creative needs to feel authentic rather than corporate, your <a href="/services/ppc-management">PPC campaigns</a> need precision targeting to avoid wasting budget on irrelevant audiences, and your overall digital presence needs to reflect the values of the community you serve.</p>

<h3>Cross-Border Complexity</h3>
<p>Channel Islands businesses often operate across multiple jurisdictions — selling to local customers, UK customers, and sometimes EU or international markets. Each jurisdiction has different tax implications, shipping considerations, and regulatory requirements. Your digital marketing strategy must account for these complexities, from geo-targeted ad campaigns to jurisdiction-specific landing pages on your <a href="/services/shopify-builds">Shopify store</a>.</p>
<p>For e-commerce businesses, the Low Value Consignment Relief (LVCR) changes and ongoing customs arrangements mean that pricing, shipping messaging, and purchase journey optimisation all need careful attention. Getting this wrong doesn't just cost you conversions — it costs you customer trust.</p>

<h2>Local PPC for Channel Islands Businesses</h2>
<p>Pay-per-click advertising in the Channel Islands requires a fundamentally different approach to mainland campaigns. The search volumes are smaller, the competition dynamics are different, and the geo-targeting needs are precise.</p>

<h3>Geo-Targeting Strategy</h3>
<p>Google Ads geo-targeting for Guernsey and Jersey requires careful configuration. Unlike targeting a UK city, island targeting has specific radius considerations and the audience pool is inherently limited. For detailed guidance on local geo-targeting, see our <a href="/blog/local-ppc-google-ads-guide">local PPC guide</a>.</p>
<p>Effective geo-targeting for Channel Islands businesses typically involves three tiers:</p>
<ul>
<li><strong>Tier 1 — Local island targeting:</strong> Campaigns focused on your home island (Guernsey or Jersey) for services that require physical proximity — restaurants, retail, tradespeople, professional services</li>
<li><strong>Tier 2 — Cross-island targeting:</strong> Campaigns reaching both Guernsey and Jersey for businesses serving the whole Channel Islands market — specialist services, e-commerce, financial products</li>
<li><strong>Tier 3 — UK and international targeting:</strong> Campaigns reaching the UK mainland and beyond for businesses with no geographical constraints — online services, tourism, specialist exports</li>
</ul>

<h3>Budget Efficiency in Small Markets</h3>
<p>The good news about <a href="/services/ppc-management">PPC in the Channel Islands</a> is that budgets can be remarkably efficient. Lower search volumes mean lower competition for many keywords, and cost-per-click rates are often significantly below UK mainland averages for local service terms. A well-structured campaign can dominate local search results with a fraction of the budget required in a mainland city.</p>
<p>However, this efficiency comes with a ceiling. When you've captured the available local search demand, growth requires either expanding geographically or diversifying channels. This is where a multi-channel approach combining PPC, Meta Ads, and <a href="/services/affiliate-management">affiliate marketing</a> becomes essential.</p>

<div class="tip-box"><strong>Pro Tip:</strong> For Guernsey and Jersey businesses, don't overlook Microsoft Advertising (Bing Ads). The Channel Islands' demographics — older, more affluent, and with a significant finance sector workforce — tend to over-index on Bing usage compared to the UK average. As a Bing Ads accredited agency, we consistently see strong ROI from Microsoft Advertising for island clients.</div>

<h2>Meta Ads for Island Businesses</h2>
<p>Facebook and Instagram advertising is particularly powerful for Channel Islands businesses because of the community-driven nature of island life. People in Guernsey and Jersey are highly engaged on social media, and the platforms' targeting capabilities allow you to reach the island population with remarkable precision.</p>

<h3>Community-First Creative</h3>
<p>The most effective <a href="/services/meta-ads">Meta Ads creative</a> for Channel Islands businesses feels local and genuine. Stock photography of generic cityscapes won't resonate with an audience that recognises every street corner. Use local imagery, reference island events and landmarks, and speak in a tone that reflects the community. Authenticity isn't just a nice-to-have in a small market — it's a competitive necessity.</p>

<h3>Tourism Marketing</h3>
<p>For tourism-related businesses — hotels, restaurants, activity providers, and attractions — Meta Ads offers powerful tools for reaching potential visitors before they book. Lookalike audiences built from previous visitors, interest-based targeting around Channel Islands tourism, and seasonal campaign structures can drive significant booking volume during peak periods.</p>
<p>The key is starting early. Tourism campaigns for the summer season should begin in January and February, building awareness and intent well before booking decisions are made. Retargeting campaigns then nurture prospects through the consideration phase until they convert.</p>

<h3>Financial Services Marketing</h3>
<p>Guernsey and Jersey's financial services sectors are significant economic drivers, and digital marketing for regulated financial businesses requires specialist knowledge. Meta Ads policies around financial products are strict, and the compliance requirements for Channel Islands financial services add another layer of complexity.</p>
<p>Successful financial services marketing in the Channel Islands typically combines thought leadership content (distributed via Meta Ads), highly targeted <a href="/services/ppc-management">PPC campaigns</a> for specific financial products, and a professional <a href="/services/shopify-builds">website presence</a> that instils confidence and meets regulatory requirements for disclosures and disclaimers.</p>

<h2>Channel Islands Regulations and Compliance</h2>
<p>Marketing in the Channel Islands isn't just about what works — it's about what's permitted. The islands have their own data protection frameworks, advertising standards, and industry-specific regulations that differ from UK law.</p>

<h3>Data Protection</h3>
<p>Guernsey operates under The Data Protection (Bailiwick of Guernsey) Law, 2017, which is closely aligned with GDPR but has its own nuances. Jersey has The Data Protection (Jersey) Law 2018. Both require explicit consent for marketing communications, proper data processing agreements, and transparent privacy policies. Your digital marketing campaigns, email lists, and tracking implementations must comply with the relevant island's data protection framework — not just the UK's.</p>

<h3>Financial Services Regulation</h3>
<p>The Guernsey Financial Services Commission (GFSC) and Jersey Financial Services Commission (JFSC) regulate financial promotions in their respective jurisdictions. Any digital advertising for regulated financial products must meet the relevant commission's requirements for accuracy, balance, and prominence of risk warnings. An agency without experience in this area can inadvertently create compliance issues that carry serious consequences.</p>

<h3>Advertising Standards</h3>
<p>While the Channel Islands broadly follow ASA guidelines, enforcement and interpretation can vary. Local businesses need to be particularly mindful of claims in a small market where misleading advertising is quickly noticed and reported.</p>

<h2>Industry-Specific Strategies</h2>

<h3>Hospitality and Tourism</h3>
<p>The Channel Islands' hospitality sector faces unique seasonality challenges. Digital marketing strategies need to account for peak summer demand, quieter winter months, and the shoulder seasons where marginal marketing spend can have outsized impact. Multi-channel campaigns combining Google Ads for intent-based searches, Meta Ads for inspiration and awareness, and <a href="/services/affiliate-management">affiliate partnerships</a> with travel content creators can smooth seasonal revenue curves significantly.</p>

<h3>Professional Services</h3>
<p>Law firms, accountancy practices, and consultancies in Guernsey and Jersey compete in a concentrated market where differentiation is crucial. <a href="/services/ppc-management">PPC campaigns</a> targeting specific service terms, combined with LinkedIn advertising and content marketing, help professional services firms establish authority and generate qualified enquiries from both local and international clients.</p>

<h3>Retail and E-Commerce</h3>
<p>Local retailers expanding online face the cross-border shipping and customs challenges unique to the Channel Islands. A well-optimised <a href="/services/shopify-builds">Shopify store</a> with clear shipping policies, accurate duty and tax information, and a seamless checkout experience is essential. For businesses with <a href="/industries/local-business">local business</a> roots looking to serve both island customers and mainland UK buyers, a dual-audience strategy keeps campaigns efficient and messaging relevant.</p>

<h2>Why Choose a Channel Islands-Based Agency</h2>
<p>Most mainland UK agencies treat Channel Islands businesses like any other regional client — applying the same templates, assumptions, and strategies they'd use for a business in Birmingham or Bristol. The result is wasted budget, irrelevant targeting, and campaigns that don't account for the unique dynamics of island commerce.</p>
<p>At Spires Digital, we're different because we're <em>from</em> here. Based in Guernsey and Lichfield, we understand the Channel Islands market from the inside out. We know the seasonal patterns, the competitive landscape, the regulatory environment, and the community dynamics that shape consumer behaviour on the islands.</p>
<p>As a Google Partner, Bing Ads accredited, Shopify Partner, and AWIN Certified agency, we bring enterprise-level expertise to Channel Islands businesses at a scale that makes sense. Our growth partnership model — £1,200/month plus 5% of profitable revenue — means you get dedicated, senior-level attention without the overhead of a large mainland agency.</p>

<div class="tip-box"><strong>Pro Tip:</strong> When evaluating digital marketing agencies for your Channel Islands business, ask them to name three Guernsey or Jersey-specific challenges they'd account for in your campaign strategy. If they can't, they don't understand your market well enough to manage your budget effectively.</div>

<p>Whether you're a Guernsey retailer looking to expand online, a Jersey financial services firm seeking qualified leads, or a Channel Islands tourism business maximising seasonal revenue, we'd love to discuss how a locally-informed, multi-channel digital marketing strategy can accelerate your growth. <a href="/contact">Book a free consultation via Calendly</a> and let's explore what's possible for your Channel Islands business.</p>

<details>
<summary>Can I target just Guernsey or Jersey with Google Ads?</summary>
<div class="faq-answer"><p>Yes, Google Ads supports geo-targeting for both Guernsey and Jersey individually. You can set radius targeting around each island or use location targeting at the territory level. However, the small audience sizes mean you may need to adjust bidding strategies and match types to ensure sufficient impression volume. A specialist agency can configure this properly from the outset.</p></div>
</details>

<details>
<summary>Is digital marketing more or less expensive in the Channel Islands?</summary>
<div class="faq-answer"><p>For locally-targeted campaigns, cost-per-click rates are generally lower than UK mainland equivalents due to less competition. However, the total addressable market is smaller, which limits scaling potential. The most cost-effective approach for ambitious Channel Islands businesses is combining efficient local campaigns with broader UK or international targeting where the business model supports it.</p></div>
</details>

<details>
<summary>Do Channel Islands businesses need GDPR compliance for digital marketing?</summary>
<div class="faq-answer"><p>The Channel Islands have their own data protection laws — Guernsey's Data Protection (Bailiwick of Guernsey) Law 2017 and Jersey's Data Protection (Jersey) Law 2018. Both are closely aligned with GDPR and require similar standards of consent, data processing, and privacy protection. If you're also marketing to UK or EU customers, you'll need to comply with those jurisdictions' requirements as well.</p></div>
</details>

<details>
<summary>Should Channel Islands businesses focus on local or national marketing?</summary>
<div class="faq-answer"><p>It depends entirely on your business model. Service businesses with a physical delivery requirement (restaurants, tradespeople, retail) should prioritise local targeting. Businesses that can serve customers remotely (e-commerce, consulting, financial services) should build a strong local foundation and then expand to UK and international audiences. The most successful Channel Islands businesses we work with maintain dual strategies — protecting their local market share whilst actively growing their off-island revenue.</p></div>
</details>
`,

  'marketing-attribution-which-channels-work': `
<p>You're running <a href="/services/ppc-management">Google Ads</a>, investing in <a href="/services/meta-ads">Meta Ads</a>, building an <a href="/services/affiliate-management">affiliate programme</a>, and optimising your <a href="/services/shopify-builds">Shopify store</a>. Revenue is growing — but which channel is actually driving that growth? Which deserves more budget, and which is quietly costing you money? Welcome to the attribution problem, and it's the single most important analytical challenge in modern digital marketing.</p>
<p>Marketing attribution is the process of identifying which touchpoints — ads, emails, organic search visits, social interactions — contribute to a conversion. Get it right, and you make confident budget decisions that compound growth. Get it wrong, and you systematically over-invest in channels that take credit for conversions they didn't create whilst under-investing in the channels that actually drive them.</p>

<h2>Why Attribution Matters More Than Ever</h2>
<p>The average customer journey in 2026 involves 6–8 touchpoints across multiple devices and channels before a purchase. A customer might discover your brand through a Meta Ad, research your product via Google Search, read a review on an affiliate partner's site, and finally convert after clicking a retargeting ad. Every one of those channels will claim credit for the sale — and without proper attribution, you'll believe all of them.</p>

<h3>The Real Cost of Bad Attribution</h3>
<p>Poor attribution doesn't just waste money — it actively misleads your strategy:</p>
<ul>
<li><strong>Last-click bias:</strong> You over-invest in bottom-funnel channels (branded PPC, retargeting) that capture demand without creating it, whilst under-investing in the awareness channels that actually fill your funnel</li>
<li><strong>Channel cannibalisation:</strong> Multiple channels claim the same conversion, making your combined ROI look better than it actually is</li>
<li><strong>False scaling signals:</strong> You increase budget on a channel that appears to be performing well, but the incremental conversions don't materialise because the channel was taking credit for conversions that would have happened anyway</li>
<li><strong>Affiliate fraud exposure:</strong> Without proper attribution, you may be paying <a href="/services/affiliate-management">affiliate commissions</a> on sales that were already guaranteed through other channels</li>
</ul>

<h2>Attribution Models Explained</h2>
<p>Before diving into solutions, let's understand the models available and what each one tells you — and what it doesn't.</p>

<h3>Last-Click Attribution</h3>
<p>The simplest and most misleading model. Last-click gives 100% credit to the final touchpoint before conversion. It's the default in many platforms and the reason so many businesses over-invest in branded search and retargeting. If a customer's journey involved five touchpoints, last-click ignores four of them entirely.</p>
<p>When it's useful: understanding which channels close sales. When it's dangerous: making budget allocation decisions, because it systematically undervalues awareness and consideration channels.</p>

<h3>First-Click Attribution</h3>
<p>The opposite extreme — giving all credit to the first interaction. First-click helps you understand which channels introduce new customers to your brand, but it ignores everything between discovery and purchase. Useful for evaluating prospecting campaigns; dangerous when used for budget allocation.</p>

<h3>Linear Attribution</h3>
<p>Divides credit equally across all touchpoints. A five-touchpoint journey gives each touchpoint 20% credit. More balanced than single-touch models, but treats every interaction as equally important — which is rarely true.</p>

<h3>Time-Decay Attribution</h3>
<p>Gives increasing credit to touchpoints closer to the conversion, which is reasonable for e-commerce businesses with shorter consideration windows.</p>

<h3>Position-Based (U-Shaped) Attribution</h3>
<p>Assigns 40% credit to the first touchpoint, 40% to the last, and distributes the remaining 20% across middle interactions. A strong starting point for businesses new to multi-touch attribution.</p>

<div class="tip-box"><strong>Pro Tip:</strong> Don't agonise over finding the "perfect" attribution model. Any multi-touch model is dramatically better than last-click for budget decisions. Start with position-based or data-driven attribution and refine as you gather more data. The goal is to be directionally right, not precisely wrong.</div>

<h2>GA4 Data-Driven Attribution</h2>
<p>Google Analytics 4 introduced data-driven attribution (DDA) as its default model, and it represents a significant leap forward from the rule-based models above. For a full guide on setting this up correctly, see our <a href="/blog/ga4-conversion-tracking-setup">GA4 conversion tracking setup guide</a>.</p>

<h3>How DDA Works</h3>
<p>Rather than applying predetermined rules, GA4's data-driven model uses machine learning to analyse your actual conversion paths and determine how much credit each touchpoint deserves based on its statistical impact on conversion probability. It compares paths that led to conversions against paths that didn't, identifying which touchpoints genuinely increase the likelihood of a sale.</p>

<h3>Requirements and Limitations</h3>
<p>DDA needs sufficient data — Google recommends at least 400 conversions per conversion action over 30 days. Businesses with lower volumes may find DDA produces volatile results, in which case position-based attribution is more stable. Beyond data volume, GA4 DDA has real limitations:</p>
<ul>
<li><strong>Walled garden blindness:</strong> GA4 can't see what happens inside Meta's ecosystem, and Meta can't see what happens in Google's. Each platform's attribution model operates in its own silo</li>
<li><strong>Cookie deprecation impact:</strong> As third-party cookies continue their decline, cross-device and cross-browser tracking becomes less reliable, creating gaps in attribution paths</li>
<li><strong>Consent-based data loss:</strong> Privacy regulations and cookie consent requirements mean a portion of your customer journeys are invisible to analytics, with opt-out rates varying by region and audience</li>
<li><strong>Offline blindness:</strong> GA4 can't attribute conversions influenced by offline touchpoints — word of mouth, events, or brand awareness that doesn't involve a trackable click</li>
</ul>

<h2>Cross-Channel Measurement</h2>
<p>The biggest attribution challenge for businesses running multiple channels — <a href="/services/ppc-management">PPC</a>, <a href="/services/meta-ads">Meta Ads</a>, <a href="/services/affiliate-management">affiliate</a>, and organic — is that each platform quis its own attribution. For a deeper dive into Meta-specific attribution challenges, read our <a href="/blog/meta-ads-attribution-guide">Meta Ads attribution guide</a>.</p>

<h3>The Double-Counting Problem</h3>
<p>A customer clicks a Meta Ad on Monday, searches your brand on Google on Wednesday, and buys through an affiliate link on Friday. Meta claims the sale (7-day click attribution). Google Ads claims the sale (last click). Your affiliate network claims the sale (last click). Three "attributed" sales — one actual purchase.</p>
<p>Understanding how affiliate attribution interacts with other channels is critical. Our <a href="/blog/affiliate-attribution-models">affiliate attribution models guide</a> covers this in detail, including how to prevent affiliates from cannibalising your paid media conversions.</p>

<h3>Building a Unified View</h3>
<p>True cross-channel measurement requires stepping outside any single platform's reporting. Here are the approaches that work:</p>
<ul>
<li><strong>GA4 as the source of truth:</strong> Use GA4 with consistent UTM tagging as your primary attribution source, understanding its limitations but benefiting from its cross-channel visibility</li>
<li><strong>Platform-reported vs GA4 comparison:</strong> Regularly compare what each platform reports against what GA4 attributes to that channel. The gaps reveal where platforms are over-claiming</li>
<li><strong>Custom attribution dashboards:</strong> Build dashboards (in Looker Studio or similar) that show GA4 attributed conversions alongside platform-reported conversions, making over-claiming immediately visible</li>
</ul>

<h2>Incrementality Testing</h2>
<p>Incrementality testing answers the fundamental attribution question: would this conversion have happened anyway without this marketing touchpoint? It's the gold standard for understanding true channel impact, and every serious marketing operation should be running incrementality tests regularly.</p>

<h3>How Incrementality Tests Work</h3>
<p>The concept is simple: divide your audience into a test group (who see your ads) and a control group (who don't), then compare conversion rates between the two groups. The difference represents the true incremental impact of your advertising.</p>

<h3>Types of Incrementality Tests</h3>
<ul>
<li><strong>Geo-based holdouts:</strong> Pause advertising in specific regions whilst maintaining it in comparable regions, then compare conversion rates</li>
<li><strong>Audience holdouts:</strong> Both Meta and Google offer built-in conversion lift studies that hold out a portion of your target audience as a control group</li>
<li><strong>Channel-level tests:</strong> Pause an entire channel for a defined period and measure the impact on total conversions</li>
<li><strong>Budget variation tests:</strong> Significantly increase or decrease spend on a channel and measure whether the conversion impact is proportional</li>
</ul>

<div class="tip-box"><strong>Pro Tip:</strong> Start your incrementality testing with your most expensive channel. If you're spending £10,000/month on Meta Ads, understanding the true incremental value of that spend should be your first priority. Even a 10% improvement in allocation based on incrementality data saves £1,000/month — or reallocates it to where it genuinely drives growth.</div>

<h2>Media Mix Modelling (MMM)</h2>
<p>Media Mix Modelling uses regression analysis to determine the relationship between marketing spend and business outcomes. Unlike digital attribution, MMM incorporates offline channels, seasonality, and competitor activity. It's most valuable for businesses spending significant budgets across multiple channels, requiring 2–3 years of historical data for reliability.</p>
<p>For smaller businesses, the combination of GA4 data-driven attribution and regular incrementality testing provides sufficient insight. Tools like Google's open-source Meridian and Meta's Robyn have made lightweight MMM accessible to growing businesses without dedicated analytics teams.</p>

<h2>Building Your Attribution Framework</h2>
<p>For most businesses running <a href="/services/ppc-management">PPC</a>, <a href="/services/meta-ads">Meta Ads</a>, <a href="/services/affiliate-management">affiliate programmes</a>, and <a href="/services/shopify-builds">e-commerce</a>, we recommend a layered attribution approach:</p>
<ul>
<li><strong>Foundation layer:</strong> GA4 data-driven attribution with proper UTM tagging and conversion tracking as your day-to-day reporting source</li>
<li><strong>Validation layer:</strong> Quarterly incrementality tests on your top 2–3 channels to validate that GA4 attribution aligns with true incremental impact</li>
<li><strong>Strategic layer:</strong> Annual or semi-annual media mix analysis to inform high-level budget allocation across channels</li>
<li><strong>Platform layer:</strong> Monitor each platform's native attribution for campaign-level optimisation, but never use platform-reported numbers for cross-channel budget decisions</li>
</ul>

<h2>Practical Steps You Can Take This Week</h2>
<p>Start with these immediate actions:</p>
<ul>
<li><strong>Audit your UTM tagging:</strong> Ensure every paid campaign, email, and social post uses consistent UTM parameters</li>
<li><strong>Check GA4 attribution settings:</strong> Confirm data-driven attribution is enabled and conversion events are properly configured</li>
<li><strong>Compare platform vs GA4 numbers:</strong> Pull last month's conversions from each ad platform and compare against GA4 — the discrepancy reveals your double-counting</li>
<li><strong>Set up a basic dashboard:</strong> Create a Looker Studio dashboard showing GA4 attributed conversions alongside platform-reported numbers</li>
</ul>

<p>At Spires Digital, attribution isn't an afterthought — it's central to how we manage multi-channel campaigns from our offices in Guernsey and Lichfield. As a Google Partner, Bing Ads accredited, Shopify Partner, and AWIN Certified agency, we work across all major performance channels and understand how they interact, overlap, and — critically — how to measure their true contribution. Our growth partnership model (£1,200/month + 5% of profitable revenue) means we're as invested in accurate attribution as you are — because our revenue depends on genuinely driving yours, not just claiming credit for it.</p>
<p>If you're unsure whether your marketing budget is allocated to the channels that actually drive growth, <a href="/contact">book a free attribution audit via Calendly</a>. We'll review your current measurement setup, identify attribution gaps, and recommend a practical framework that gives you confidence in your channel decisions.</p>

<details>
<summary>Which attribution model should I use for my business?</summary>
<div class="faq-answer"><p>For most e-commerce businesses, GA4's data-driven attribution is the best starting point — provided you have at least 400 monthly conversions per conversion action. For lower-volume businesses, position-based attribution offers a good balance between simplicity and accuracy. The most important step is moving away from last-click attribution, which systematically distorts budget decisions regardless of your business type.</p></div>
</details>

<details>
<summary>Why do Google Ads and Meta Ads report different conversion numbers for the same period?</summary>
<div class="faq-answer"><p>Each platform uses its own attribution model and window. Google Ads defaults to last-click within a 30-day window, while Meta uses a 7-day click / 1-day view window. When a customer interacts with both platforms before converting, both claim the sale. This is normal — the solution isn't to make the platforms agree, but to use an independent measurement source (GA4 or a third-party tool) as your cross-channel source of truth.</p></div>
</details>

<details>
<summary>How often should I run incrementality tests?</summary>
<div class="faq-answer"><p>We recommend quarterly incrementality tests on your largest spending channels and whenever you're considering a significant budget change (increase or decrease of 25% or more). Annual tests are sufficient for smaller channels. The key is treating incrementality testing as an ongoing practice, not a one-off exercise — channel effectiveness changes over time as audiences, competition, and platform algorithms evolve.</p></div>
</details>

<details>
<summary>Is marketing attribution even possible with cookie deprecation and privacy regulations?</summary>
<div class="faq-answer"><p>Perfect attribution has never been possible, and yes, privacy changes make it harder. However, the combination of GA4 data-driven attribution, server-side tracking, conversion API integrations, incrementality testing, and media mix modelling gives you directionally accurate measurement that's more than sufficient for confident budget decisions. The businesses that succeed aren't the ones with perfect data — they're the ones with better data than their competitors and the discipline to act on it.</p></div>
</details>
`,
};
