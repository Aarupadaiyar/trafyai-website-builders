export type ElementTheme = "water" | "air" | "earth" | "ice" | "fire" | "nature";

export type ServiceStep = { title: string; description: string };

export type FaqCategory =
  | "cost"
  | "time"
  | "risk"
  | "security"
  | "integration"
  | "support"
  | "ownership"
  | "scalability";

export type FaqItem = { question: string; answer: string; category: FaqCategory };

export type CaseStudyMetric = { label: string; before: string; after: string };

export type ServiceConfig = {
  slug: string;
  index: string;
  name: string;
  tagline: string;
  body: string;
  image: string;
  element: ElementTheme;
  hero: {
    eyebrow: string;
    headline: string;
    subhead: string;
    primaryCta: string;
    secondaryCta: string;
  };
  problem: { headline: string; body: string };
  costOfInaction: {
    headline: string;
    stats: { label: string; value: string }[];
  };
  whyOthersFail: {
    headline: string;
    genericAgency: string[];
    trafy: string[];
  };
  solution: { headline: string; steps: ServiceStep[] };
  capabilities: { title: string; description: string }[];
  technology: { name: string; category: string }[];
  caseStudy: {
    client: string;
    industry: string;
    summary: string;
    metrics: CaseStudyMetric[];
    quote: string;
  };
  resultsMetrics: { label: string; value: string }[];
  testimonials: { quote: string; author: string; role: string }[];
  faq: FaqItem[];
  finalCta: { headline: string; body: string; ctaLabel: string };
};

export const services: ServiceConfig[] = [
  {
    slug: "website-development",
    index: "01",
    name: "Website Development",
    tagline: "Sites built to convert, not just exist.",
    body: "Marketing sites, e-commerce, and web platforms engineered for speed, SEO, and motion-driven storytelling.",
    image: "https://images.unsplash.com/photo-1614741118887-7a4ee193a5fa?w=1600&q=80&fm=jpg&fit=crop&auto=format",
    element: "water",
    hero: {
      eyebrow: "Website Development",
      headline: "Build a Website That Grows Your Business. Not Your Maintenance Costs.",
      subhead:
        "Your website should be your best salesperson, working 24 hours a day to turn attention into revenue.",
      primaryCta: "Book Consultation",
      secondaryCta: "View Projects",
    },
    problem: {
      headline: "Most businesses think they need a new website.",
      body: "What they actually need is a digital experience that creates trust, generates leads, and accelerates sales. A website that looks good but doesn't convert is an expensive brochure, not a business asset.",
    },
    costOfInaction: {
      headline: "Every week without a working website is a week of lost pipeline.",
      stats: [
        { label: "Visitors who never return", value: "68%" },
        { label: "Slower load time vs. competitors", value: "3.2s" },
        { label: "Monthly leads lost to poor UX", value: "40+" },
      ],
    },
    whyOthersFail: {
      headline: "Why most agency websites stop working the day they launch.",
      genericAgency: ["Template", "Launch", "Invoice", "Goodbye"],
      trafy: ["Research", "Strategy", "Design", "Development", "SEO", "Optimisation"],
    },
    solution: {
      headline: "One system. Built to compound.",
      steps: [
        { title: "Discovery", description: "Understand your customers, competitors, and conversion goals before any design begins." },
        { title: "UX Architecture", description: "Map every path a visitor can take, and remove the ones that lead nowhere." },
        { title: "Interface Design", description: "Editorial layouts, real typography, and motion that earns its place." },
        { title: "Development", description: "Fast, accessible, and built on infrastructure that scales with traffic." },
        { title: "SEO Foundation", description: "Technical SEO and content structure built in from day one, not bolted on after." },
        { title: "Analytics & Optimisation", description: "Every page instrumented, so decisions after launch are based on data." },
      ],
    },
    capabilities: [
      { title: "Conversion-first design", description: "Every layout decision is tested against one question: does this move a visitor closer to a decision?" },
      { title: "Performance engineering", description: "Sub-2-second load times, even with rich motion and imagery." },
      { title: "Headless CMS", description: "Your team edits content without ever touching code." },
      { title: "SEO architecture", description: "Structured data, semantic HTML, and a sitemap built for how search actually works today." },
    ],
    technology: [
      { name: "React / Next.js", category: "Frontend" },
      { name: "TypeScript", category: "Frontend" },
      { name: "Tailwind CSS", category: "Design System" },
      { name: "Headless CMS", category: "Content" },
      { name: "Vercel / Edge Hosting", category: "Infrastructure" },
      { name: "GSAP", category: "Motion" },
    ],
    caseStudy: {
      client: "A regional logistics operator",
      industry: "Logistics",
      summary:
        "A 12-year-old logistics company was still running on a template site from 2016. We rebuilt their digital presence around one goal: convert enterprise buyers who were quietly comparing them to competitors online.",
      metrics: [
        { label: "Conversion rate", before: "0.8%", after: "3.4%" },
        { label: "Page load time", before: "5.6s", after: "1.4s" },
        { label: "Qualified leads / month", before: "12", after: "58" },
      ],
      quote:
        "We didn't just get a new website. We got a system that keeps producing leads without us thinking about it.",
    },
    resultsMetrics: [
      { label: "Average conversion lift", value: "3.1x" },
      { label: "Average load time", value: "< 1.5s" },
      { label: "Lighthouse performance score", value: "97" },
    ],
    testimonials: [
      {
        quote: "Our operations became 60% faster within three months of launch.",
        author: "Priya Raman",
        role: "COO, regional logistics operator",
      },
      {
        quote: "The team understood our business before they wrote a single line of code.",
        author: "Daniel Cho",
        role: "Founder, SaaS platform",
      },
    ],
    faq: [
      { question: "How long does a project take?", answer: "Most website engagements run 6–10 weeks from discovery to launch, depending on scope and content readiness.", category: "time" },
      { question: "What does this cost?", answer: "Every engagement is scoped to your goals, we quote a fixed project fee after discovery, not an hourly estimate.", category: "cost" },
      { question: "Do we own the code and content?", answer: "Yes. Everything we build is yours outright, no lock-in, no licensing fees to us.", category: "ownership" },
      { question: "Will it integrate with our existing tools?", answer: "We design around your CRM, analytics, and marketing stack from the start, not as an afterthought.", category: "integration" },
      { question: "What happens after launch?", answer: "Every project includes a support window, and ongoing optimisation is available as a standing engagement.", category: "support" },
      { question: "Can it handle growth?", answer: "Architecture decisions are made for where your business is heading, not just where it is today.", category: "scalability" },
    ],
    finalCta: {
      headline: "Build Your Digital Presence",
      body: "A website that works as hard as your best salesperson, designed, built, and optimised by one team.",
      ctaLabel: "Start Your Website",
    },
  },
  {
    slug: "app-development",
    index: "02",
    name: "App Development",
    tagline: "iOS, Android, and cross-platform, built to ship.",
    body: "Native-feel mobile apps and cross-platform products, from first wireframe to App Store, architected for scale.",
    image: "https://images.unsplash.com/photo-1512428559087-560fa5ceab42?w=1600&q=80&fm=jpg&fit=crop&auto=format",
    element: "air",
    hero: {
      eyebrow: "App Development",
      headline: "Don't Build Another App. Build One Customers Return To.",
      subhead:
        "The market doesn't need more apps. It needs experiences worth opening twice.",
      primaryCta: "Book Consultation",
      secondaryCta: "View Projects",
    },
    problem: {
      headline: "Businesses don't have an app problem.",
      body: "They have a retention problem. Most apps are downloaded once and never opened again, because they were built to launch, not to be used.",
    },
    costOfInaction: {
      headline: "The cost of a forgettable app is measured in churn.",
      stats: [
        { label: "Apps uninstalled within 30 days", value: "77%" },
        { label: "Users lost per confusing onboarding flow", value: "1 in 3" },
        { label: "Average review score of rushed launches", value: "2.9★" },
      ],
    },
    whyOthersFail: {
      headline: "Why most agency apps get deleted within a week.",
      genericAgency: ["Template", "Launch", "Invoice", "Goodbye"],
      trafy: ["Research", "Product Strategy", "Design", "Build", "Launch", "Retention"],
    },
    solution: {
      headline: "Product thinking, not just app-building.",
      steps: [
        { title: "Product Strategy", description: "Define what makes someone open this app on day 30, not just day one." },
        { title: "UX Prototyping", description: "Test the core flow with real users before committing to a single screen." },
        { title: "Native / Cross-Platform Build", description: "Engineered for the platform your users are actually on." },
        { title: "Backend & API", description: "Scalable services that stay fast as your user base grows." },
        { title: "App Store Launch", description: "Submission, review, and ASO handled end-to-end." },
        { title: "Retention Loops", description: "Push, notifications, and habit-forming design, built in from the start." },
      ],
    },
    capabilities: [
      { title: "Cross-platform engineering", description: "One codebase, native performance, on iOS and Android." },
      { title: "Offline-first architecture", description: "Your app stays usable even when connectivity doesn't." },
      { title: "Push & retention systems", description: "Notification strategy designed around real usage patterns, not spam." },
      { title: "App Store optimisation", description: "Listings and screenshots built to convert store visits into installs." },
    ],
    technology: [
      { name: "React Native", category: "Frontend" },
      { name: "Swift / Kotlin", category: "Native" },
      { name: "Node.js", category: "Backend" },
      { name: "PostgreSQL", category: "Database" },
      { name: "Firebase", category: "Infrastructure" },
      { name: "Framer Motion", category: "Motion" },
    ],
    caseStudy: {
      client: "A boutique fitness studio chain",
      industry: "Health & Fitness",
      summary:
        "A 6-location fitness chain needed a booking app that felt as premium as their studios. We rebuilt their member experience from onboarding to renewal.",
      metrics: [
        { label: "30-day retention", before: "18%", after: "54%" },
        { label: "Booking completion rate", before: "61%", after: "92%" },
        { label: "App Store rating", before: "3.1★", after: "4.8★" },
      ],
      quote: "Members stopped calling the front desk and started just using the app. That's the whole win.",
    },
    resultsMetrics: [
      { label: "Average retention lift", value: "3x" },
      { label: "Average App Store rating", value: "4.7★" },
      { label: "Crash-free sessions", value: "99.6%" },
    ],
    testimonials: [
      { quote: "They designed for the member, not just for the feature list.", author: "Meera Iyer", role: "Founder, fitness studio chain" },
      { quote: "The app finally matches how premium our brand actually is.", author: "Tom Alessi", role: "Operations Lead" },
    ],
    faq: [
      { question: "iOS, Android, or both?", answer: "We build cross-platform by default so you launch on both simultaneously, unless a native-only case makes more sense.", category: "scalability" },
      { question: "How long does app development take?", answer: "A focused MVP typically takes 10–14 weeks; full-featured products run longer depending on scope.", category: "time" },
      { question: "What does this cost?", answer: "Fixed project pricing after a scoping phase, no open-ended hourly billing.", category: "cost" },
      { question: "Who owns the app once it's built?", answer: "You do. Source code, design files, and App Store listings are all yours.", category: "ownership" },
      { question: "Is our user data secure?", answer: "We follow platform security guidelines and industry-standard encryption for data in transit and at rest.", category: "security" },
      { question: "What about post-launch bugs?", answer: "Every launch includes a stabilisation window, with ongoing support available afterward.", category: "support" },
    ],
    finalCta: {
      headline: "Build an App People Actually Open",
      body: "From first wireframe to App Store, a product built around retention, not just release.",
      ctaLabel: "Start Your App",
    },
  },
  {
    slug: "erp-solutions",
    index: "03",
    name: "ERP Solutions",
    tagline: "Every department, one source of truth.",
    body: "Custom ERP systems that unify inventory, finance, operations, and HR, replacing spreadsheets with one platform.",
    image: "https://images.unsplash.com/photo-1553413077-190dd305871c?w=1600&q=80&fm=jpg&fit=crop&auto=format",
    element: "earth",
    hero: {
      eyebrow: "ERP Solutions",
      headline: "One Operating System For Your Entire Business.",
      subhead:
        "You don't have an ERP problem. You have an operational complexity problem, and disconnected tools made it worse.",
      primaryCta: "Book Consultation",
      secondaryCta: "View Projects",
    },
    problem: {
      headline: "You don't need customer software.",
      body: "You need one place where inventory, finance, and operations finally agree with each other. Every disconnected spreadsheet is a decision made on outdated information.",
    },
    costOfInaction: {
      headline: "Disconnected systems cost more than the software you're avoiding buying.",
      stats: [
        { label: "Hours lost weekly to manual reconciliation", value: "22" },
        { label: "Of decisions made on stale data", value: "1 in 4" },
        { label: "Average inventory discrepancy", value: "8.6%" },
      ],
    },
    whyOthersFail: {
      headline: "Why off-the-shelf ERP rollouts stall.",
      genericAgency: ["Generic Template", "Forced Workflow", "Invoice", "Goodbye"],
      trafy: ["Research", "Process Mapping", "Design", "Build", "Migration", "Training"],
    },
    solution: {
      headline: "Built around how your business actually operates.",
      steps: [
        { title: "Process Mapping", description: "Document how work actually moves through your business today, not how it's supposed to." },
        { title: "System Architecture", description: "Design modules around your real departments: finance, inventory, HR, operations." },
        { title: "Build & Integrate", description: "Connect to your existing tools instead of forcing a rip-and-replace." },
        { title: "Data Migration", description: "Move years of records over without breaking historical reporting." },
        { title: "Team Training", description: "Your staff can use it confidently on day one, not after a six-month ramp." },
        { title: "Continuous Refinement", description: "Modules evolve as departments and headcount grow." },
      ],
    },
    capabilities: [
      { title: "Modular architecture", description: "Add finance, inventory, or HR modules independently as your business needs them." },
      { title: "Real-time reporting", description: "Every department sees the same numbers, at the same time." },
      { title: "Role-based access", description: "The right visibility for the right person, without exposing everything to everyone." },
      { title: "Legacy integration", description: "Works alongside the accounting and inventory tools you already depend on." },
    ],
    technology: [
      { name: "Node.js / NestJS", category: "Backend" },
      { name: "PostgreSQL", category: "Database" },
      { name: "React", category: "Frontend" },
      { name: "Docker / Kubernetes", category: "Infrastructure" },
      { name: "REST & GraphQL APIs", category: "Integration" },
      { name: "Role-based Access Control", category: "Security" },
    ],
    caseStudy: {
      client: "A mid-size manufacturing group",
      industry: "Manufacturing",
      summary:
        "A manufacturer running finance, inventory, and production on five disconnected tools needed one operational backbone. We unified their systems without stopping the production floor.",
      metrics: [
        { label: "Manual reconciliation hours / week", before: "26", after: "3" },
        { label: "Inventory accuracy", before: "91.2%", after: "99.4%" },
        { label: "Monthly close time", before: "9 days", after: "2 days" },
      ],
      quote: "For the first time, finance and operations are looking at the same numbers in real time.",
    },
    resultsMetrics: [
      { label: "Average admin time saved", value: "18 hrs/week" },
      { label: "Reporting accuracy improvement", value: "+8.2%" },
      { label: "Average close-time reduction", value: "72%" },
    ],
    testimonials: [
      { quote: "We finally trust the numbers in front of us.", author: "Ravi Menon", role: "CFO, manufacturing group" },
      { quote: "It replaced five tools with one, without disrupting production.", author: "Elena Popescu", role: "Operations Director" },
    ],
    faq: [
      { question: "Will this disrupt current operations during rollout?", answer: "We migrate module by module, alongside your existing systems, so nothing goes dark during the transition.", category: "risk" },
      { question: "How long does an ERP build take?", answer: "Typically 4–7 months depending on the number of modules and how much legacy data needs migrating.", category: "time" },
      { question: "What's the investment?", answer: "Scoped per module after process mapping, you invest in what your business needs, not a bloated all-in-one package.", category: "cost" },
      { question: "Can it scale with us?", answer: "The modular architecture means new departments or locations are added without rebuilding the core system.", category: "scalability" },
      { question: "Is our financial data secure?", answer: "Role-based access control and encryption at rest are standard on every deployment.", category: "security" },
      { question: "Do we own the system?", answer: "Yes, full ownership of the platform and your data, with no dependency on us to keep running.", category: "ownership" },
    ],
    finalCta: {
      headline: "Transform Your Operations",
      body: "One system, every department, one version of the truth.",
      ctaLabel: "Start Your ERP",
    },
  },
  {
    slug: "crm-solutions",
    index: "04",
    name: "CRM Solutions",
    tagline: "Every lead, every deal, tracked and worked.",
    body: "CRM platforms tailored to how your sales team actually sells, pipeline visibility, automation, and reporting.",
    image: "https://images.unsplash.com/photo-1766066014237-00645c74e9c6?w=1600&q=80&fm=jpg&fit=crop&auto=format",
    element: "ice",
    hero: {
      eyebrow: "CRM Solutions",
      headline: "Every Customer. Every Conversation. One Intelligent Relationship.",
      subhead:
        "You don't need customer software. You need stronger customer relationships, systemised, not left to memory.",
      primaryCta: "Book Consultation",
      secondaryCta: "View Projects",
    },
    problem: {
      headline: "Leads aren't disappearing. They're falling through cracks in your process.",
      body: "Most CRM failures aren't a software problem, they're a workflow mismatch. A CRM your team fights against will always lose to the spreadsheet they trust more.",
    },
    costOfInaction: {
      headline: "Every untracked lead is revenue with no owner.",
      stats: [
        { label: "Of leads never followed up", value: "35%" },
        { label: "Average response time to new leads", value: "42 hrs" },
        { label: "Deals lost to no clear pipeline owner", value: "1 in 5" },
      ],
    },
    whyOthersFail: {
      headline: "Why sales teams abandon their CRM within a year.",
      genericAgency: ["Generic Fields", "Forced Adoption", "Invoice", "Goodbye"],
      trafy: ["Research", "Sales Process Mapping", "Design", "Build", "Adoption", "Optimisation"],
    },
    solution: {
      headline: "Built around how your team actually sells.",
      steps: [
        { title: "Sales Process Mapping", description: "Document your real pipeline stages, not a generic template's." },
        { title: "Pipeline Design", description: "Structure deals, stages, and ownership around your sales motion." },
        { title: "Build & Automate", description: "Automate follow-ups and hand-offs so no lead waits on a person to remember." },
        { title: "Data Migration", description: "Bring existing contacts and deal history in cleanly." },
        { title: "Team Adoption", description: "Training built around daily use, not a feature tour." },
        { title: "Reporting & Optimisation", description: "Pipeline visibility that improves forecasting every quarter." },
      ],
    },
    capabilities: [
      { title: "Pipeline visibility", description: "Every deal stage visible to the people who need to act on it." },
      { title: "Automated follow-up", description: "No lead sits untouched because someone forgot." },
      { title: "Custom reporting", description: "Forecast accuracy built on real historical conversion rates." },
      { title: "Email & calendar sync", description: "Works inside the tools your team already lives in." },
    ],
    technology: [
      { name: "React", category: "Frontend" },
      { name: "Node.js", category: "Backend" },
      { name: "PostgreSQL", category: "Database" },
      { name: "Workflow Automation Engine", category: "Automation" },
      { name: "Email & Calendar APIs", category: "Integration" },
      { name: "Role-based Access Control", category: "Security" },
    ],
    caseStudy: {
      client: "A B2B SaaS sales team",
      industry: "SaaS",
      summary:
        "A 14-person sales team was tracking pipeline across three spreadsheets and a generic CRM nobody trusted. We rebuilt their pipeline around how deals actually moved.",
      metrics: [
        { label: "Lead response time", before: "38 hrs", after: "4 hrs" },
        { label: "Forecast accuracy", before: "58%", after: "89%" },
        { label: "Deals tracked without owner", before: "22%", after: "1%" },
      ],
      quote: "Our reps stopped avoiding the CRM. Now it's the first thing they open every morning.",
    },
    resultsMetrics: [
      { label: "Average response time improvement", value: "9x faster" },
      { label: "Average forecast accuracy gain", value: "+27%" },
      { label: "Adoption rate after 90 days", value: "96%" },
    ],
    testimonials: [
      { quote: "For the first time, our pipeline reflects reality.", author: "Sana Farooqi", role: "VP Sales, SaaS company" },
      { quote: "It automated the parts of the job nobody wanted to do manually.", author: "Marcus Webb", role: "Sales Director" },
    ],
    faq: [
      { question: "Will our sales team actually use it?", answer: "We design around your existing sales process, which is the single biggest driver of adoption, teams reject tools that fight how they already work.", category: "risk" },
      { question: "How long does implementation take?", answer: "Typically 6–9 weeks including data migration and team training.", category: "time" },
      { question: "What's the cost structure?", answer: "A fixed build fee, with optional ongoing optimisation as a monthly engagement.", category: "cost" },
      { question: "Does it integrate with our email and calendar?", answer: "Yes, two-way sync with the major email and calendar providers is standard.", category: "integration" },
      { question: "Is customer data secure?", answer: "Role-based access and encrypted storage are built in from day one.", category: "security" },
      { question: "Can it grow with our sales team?", answer: "Pipeline structures and automation scale as headcount and deal volume grow.", category: "scalability" },
    ],
    finalCta: {
      headline: "Strengthen Your Customer Relationships",
      body: "A CRM your sales team actually opens every morning, because it works the way they sell.",
      ctaLabel: "Start Your CRM",
    },
  },
  {
    slug: "digital-marketing",
    index: "05",
    name: "Digital Marketing",
    tagline: "Growth, measured in pipeline, not impressions.",
    body: "Performance marketing, SEO, and paid media run by a team that ships the website too, so strategy never disconnects.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1600&q=80&fm=jpg&fit=crop&auto=format",
    element: "fire",
    hero: {
      eyebrow: "Digital Marketing",
      headline: "Growth Engineered For Measurable Outcomes.",
      subhead:
        "Marketing isn't a campaign. It's a growth engine, built, measured, and improved like any other system.",
      primaryCta: "Book Consultation",
      secondaryCta: "View Projects",
    },
    problem: {
      headline: "Impressions don't pay invoices.",
      body: "Most marketing engagements optimise for metrics that look good in a report and mean nothing to your revenue. We build for pipeline, not vanity metrics.",
    },
    costOfInaction: {
      headline: "Every month without a growth system is a month competitors compound on you.",
      stats: [
        { label: "Of ad spend wasted on the wrong audience", value: "41%" },
        { label: "Average CAC increase without SEO foundation", value: "2.3x" },
        { label: "Leads lost to slow, disconnected landing pages", value: "1 in 3" },
      ],
    },
    whyOthersFail: {
      headline: "Why most marketing agencies plateau after month two.",
      genericAgency: ["Generic Campaign", "Vanity Report", "Invoice", "Goodbye"],
      trafy: ["Research", "Strategy", "Execution", "Attribution", "Iteration", "Compounding Growth"],
    },
    solution: {
      headline: "A system built to compound, not a campaign that resets.",
      steps: [
        { title: "Audience Research", description: "Understand exactly who converts, not just who clicks." },
        { title: "Channel Strategy", description: "Prioritise the channels your buyers actually use." },
        { title: "Creative & Content", description: "Assets built to convert, tested against real performance data." },
        { title: "Campaign Execution", description: "Paid, organic, and SEO run in coordination, not in silos." },
        { title: "Attribution & Reporting", description: "Every dollar traced to pipeline, not just clicks." },
        { title: "Iteration", description: "Monthly optimisation cycles that compound performance over time." },
      ],
    },
    capabilities: [
      { title: "Full-funnel strategy", description: "Awareness through conversion, built as one connected system." },
      { title: "SEO built by engineers", description: "Because the same team ships the website, technical SEO is never an afterthought." },
      { title: "Paid media management", description: "Budget allocated to what's proven to convert, reviewed weekly." },
      { title: "Revenue attribution", description: "See exactly which channel produced which closed deal." },
    ],
    technology: [
      { name: "Google Ads / Meta Ads", category: "Paid Media" },
      { name: "Google Analytics 4", category: "Analytics" },
      { name: "Search Console", category: "SEO" },
      { name: "HubSpot / Marketing Automation", category: "Automation" },
      { name: "Looker Studio", category: "Reporting" },
      { name: "A/B Testing Tools", category: "Experimentation" },
    ],
    caseStudy: {
      client: "A DTC consumer brand",
      industry: "Retail / E-commerce",
      summary:
        "A growing DTC brand had scaled ad spend without a matching lift in profitability. We rebuilt their funnel around margin, not just top-line revenue.",
      metrics: [
        { label: "Customer acquisition cost", before: "$62", after: "$29" },
        { label: "Organic traffic", before: "4,200/mo", after: "31,000/mo" },
        { label: "Marketing-sourced revenue", before: "$40K/mo", after: "$210K/mo" },
      ],
      quote: "We stopped guessing which channel worked. Now every dollar has a clear answer.",
    },
    resultsMetrics: [
      { label: "Average CAC reduction", value: "48%" },
      { label: "Average organic traffic growth", value: "6.4x" },
      { label: "Average pipeline attribution accuracy", value: "94%" },
    ],
    testimonials: [
      { quote: "Growth finally feels engineered, not improvised.", author: "Chloe Bennett", role: "Founder, DTC brand" },
      { quote: "They think about marketing the way our engineers think about product.", author: "Arjun Nair", role: "Head of Growth" },
    ],
    faq: [
      { question: "How soon will we see results?", answer: "Paid channels typically show movement within 30 days; SEO and organic compounding build over 3–6 months.", category: "time" },
      { question: "How is spend allocated?", answer: "Budget follows performance data weekly, underperforming channels are cut fast, not defended out of habit.", category: "cost" },
      { question: "Do you take over our existing ad accounts?", answer: "We can work within your existing accounts or rebuild them, whichever preserves more historical performance data.", category: "integration" },
      { question: "How do we know what's actually working?", answer: "Revenue attribution reporting traces every closed deal back to its originating channel.", category: "risk" },
      { question: "Is this a fixed-term contract?", answer: "Engagements run month-to-month after an initial 90-day ramp period, with no long-term lock-in.", category: "ownership" },
      { question: "Can this scale with paid budget increases?", answer: "Yes, the systems and reporting are built to handle 10x budget without a rebuild.", category: "scalability" },
    ],
    finalCta: {
      headline: "Accelerate Your Growth",
      body: "A growth engine built for pipeline, measured in revenue, not impressions.",
      ctaLabel: "Start Growing",
    },
  },
  {
    slug: "social-media-management",
    index: "06",
    name: "Social Media Management",
    tagline: "Content, community, and brand, run daily.",
    body: "Content calendars, creative production, and community management across platforms, without the in-house overhead.",
    image: "https://images.unsplash.com/photo-1724862936518-ae7fcfc052c1?w=1600&q=80&fm=jpg&fit=crop&auto=format",
    element: "nature",
    hero: {
      eyebrow: "Social Media Management",
      headline: "A Brand Voice That Shows Up Every Single Day.",
      subhead:
        "Consistency builds trust faster than any single viral post ever will.",
      primaryCta: "Book Consultation",
      secondaryCta: "View Projects",
    },
    problem: {
      headline: "Most brands don't have a content problem.",
      body: "They have a consistency problem. Sporadic posting from an overstretched internal team reads as absence, and absence erodes trust faster than imperfect content ever could.",
    },
    costOfInaction: {
      headline: "Every quiet week is a week competitors fill the silence.",
      stats: [
        { label: "Engagement drop after 2 weeks of silence", value: "34%" },
        { label: "Of brand messaging inconsistent across platforms", value: "58%" },
        { label: "Hours/week spent internally with no strategy", value: "12" },
      ],
    },
    whyOthersFail: {
      headline: "Why in-house social often burns out within a quarter.",
      genericAgency: ["Generic Calendar", "Stock Content", "Invoice", "Goodbye"],
      trafy: ["Research", "Voice & Strategy", "Production", "Publishing", "Community", "Reporting"],
    },
    solution: {
      headline: "Built as a system, run like a newsroom.",
      steps: [
        { title: "Brand Voice Definition", description: "Document how your brand actually sounds, so every post feels consistent." },
        { title: "Content Strategy", description: "A calendar built around what your audience engages with, not a generic template." },
        { title: "Creative Production", description: "Photography, video, and copy produced on a real cadence." },
        { title: "Publishing", description: "Platform-native formatting for every channel, not one asset stretched everywhere." },
        { title: "Community Management", description: "Real responses to real comments and messages, daily." },
        { title: "Reporting", description: "Engagement tied back to brand and pipeline goals, not just likes." },
      ],
    },
    capabilities: [
      { title: "Multi-platform strategy", description: "Native content for each platform's actual audience behaviour." },
      { title: "Content production", description: "Photography, video, and copy handled end-to-end." },
      { title: "Community management", description: "Comments and DMs handled daily, not batched weekly." },
      { title: "Performance reporting", description: "Clear reporting on what content actually drove engagement and reach." },
    ],
    technology: [
      { name: "Content Scheduling Platforms", category: "Publishing" },
      { name: "Adobe Creative Suite", category: "Production" },
      { name: "Analytics Dashboards", category: "Reporting" },
      { name: "Community Management Tools", category: "Engagement" },
      { name: "Brand Asset Libraries", category: "Content" },
    ],
    caseStudy: {
      client: "A hospitality group",
      industry: "Hospitality",
      summary:
        "A 4-property hospitality group had inconsistent posting across five platforms with no shared voice. We built one content system that runs across all of them.",
      metrics: [
        { label: "Monthly engagement rate", before: "1.2%", after: "5.8%" },
        { label: "Follower growth / month", before: "80", after: "2,100" },
        { label: "Content published on schedule", before: "40%", after: "100%" },
      ],
      quote: "Our brand finally sounds like one brand, everywhere it shows up.",
    },
    resultsMetrics: [
      { label: "Average engagement lift", value: "4.2x" },
      { label: "Average follower growth", value: "12x" },
      { label: "On-schedule publishing rate", value: "100%" },
    ],
    testimonials: [
      { quote: "We got our internal team's time back and better content at the same time.", author: "Isabelle Novak", role: "Marketing Director, hospitality group" },
      { quote: "The consistency alone changed how people perceive us.", author: "Femi Adeyemi", role: "Brand Manager" },
    ],
    faq: [
      { question: "Which platforms do you manage?", answer: "Instagram, TikTok, LinkedIn, Facebook, and X, scoped to wherever your actual audience is active.", category: "scalability" },
      { question: "How much creative do you produce?", answer: "Typically 12–20 pieces of content per month per platform, scoped during strategy.", category: "cost" },
      { question: "Who approves content before it's published?", answer: "You do, every post goes through an approval step before it goes live.", category: "risk" },
      { question: "How fast can this start?", answer: "Strategy and brand voice definition typically take 2 weeks before the first content goes live.", category: "time" },
      { question: "Do we own the content produced?", answer: "Yes, every asset produced is yours to keep and reuse.", category: "ownership" },
      { question: "How is success measured?", answer: "Engagement, follower growth, and where relevant, traffic and leads attributed back to social.", category: "support" },
    ],
    finalCta: {
      headline: "Build a Brand That Shows Up Daily",
      body: "Consistent, on-brand content and community management, without the in-house overhead.",
      ctaLabel: "Start Your Content Engine",
    },
  },
];

export const getServiceBySlug = (slug: string) => services.find((s) => s.slug === slug);
