export const hero = {
  eyebrow: "Business Transformation Studio",
  headline: "We Don't Build Software. We Build Momentum.",
  emphasis: "Momentum.",
  subhead:
    "One team engineering the websites, apps, ERP, and CRM systems ambitious companies actually run on. Built fast. Built right. Built to scale.",
  pills: ["Web & App Dev", "ERP Systems", "CRM & Automation", "Digital Growth"],
  primaryCta: "See Our Work",
  secondaryCta: "Book a Call",
  stats: [
    { value: "120+", label: "Projects Delivered" },
    { value: "4,200+", label: "Hours Automated Monthly" },
    { value: "8+", label: "Years Building" },
  ],
};

export const realityCheck = {
  headline: "Most businesses don't need more software.",
  secondHeadline: "They need better systems.",
  body: "Businesses spend thousands on software. Yet their teams still copy data between spreadsheets. Still answer repetitive emails. Still lose leads. Still waste time. Technology isn't the problem. Disconnected thinking is.",
  cta: "See How We Solve This",
};

export type Challenge = { title: string; stat: string; description: string };

export const challenges: Challenge[] = [
  { title: "Slow Operations", stat: "22 hrs/week", description: "Lost weekly to manual work that should have been automated years ago." },
  { title: "Low Conversion", stat: "0.8%", description: "The average conversion rate of a website built to look good instead of perform." },
  { title: "Disconnected Teams", stat: "5 tools", description: "The average number of disconnected systems a mid-size business runs on." },
  { title: "Manual Processes", stat: "35%", description: "Of leads that fall through the cracks with no clear process owner." },
  { title: "Poor Customer Experience", stat: "68%", description: "Of visitors who leave and never return after one bad experience." },
  { title: "No Business Visibility", stat: "1 in 4", description: "Decisions made on data that's already out of date by the time it's seen." },
];

export const whyTechFails = {
  quote: "Technology doesn't fail. Poor implementation does.",
  genericAgency: ["Build website", "Invoice", "Leave"],
  trafy: ["Research", "Strategy", "Development", "Automation", "Support", "Growth"],
};

export const philosophy = {
  headline: "Every Business Is An Ecosystem.",
  body: "Businesses aren't collections of tools. They're living systems. Every disconnected process costs money. Every unnecessary click wastes time. Every delay slows growth. Our job isn't to build software. Our job is to engineer ecosystems.",
};

export type FeaturedCaseStudy = {
  client: string;
  industry: string;
  serviceSlug: string;
  summary: string;
  image: string;
  metrics: { label: string; before: string; after: string }[];
};

export const caseStudiesFeatured: FeaturedCaseStudy[] = [
  {
    client: "A regional logistics operator",
    industry: "Logistics",
    serviceSlug: "website-development",
    summary: "A 12-year-old logistics company rebuilt their entire digital presence around converting enterprise buyers.",
    image: "https://images.unsplash.com/photo-1616432043562-3671ea2e5242?w=1600&q=80&fm=jpg&fit=crop&auto=format",
    metrics: [
      { label: "Conversion rate", before: "0.8%", after: "3.4%" },
      { label: "Qualified leads / month", before: "12", after: "58" },
    ],
  },
  {
    client: "A mid-size manufacturing group",
    industry: "Manufacturing",
    serviceSlug: "erp-solutions",
    summary: "Five disconnected tools became one operational backbone, without stopping the production floor.",
    image: "https://images.unsplash.com/photo-1554070211-e3953a3de374?w=1600&q=80&fm=jpg&fit=crop&auto=format",
    metrics: [
      { label: "Manual hours / week", before: "26", after: "3" },
      { label: "Monthly close time", before: "9 days", after: "2 days" },
    ],
  },
  {
    client: "A B2B SaaS sales team",
    industry: "SaaS",
    serviceSlug: "crm-solutions",
    summary: "A 14-person sales team replaced three spreadsheets and a CRM nobody trusted with one clear pipeline.",
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1600&q=80&fm=jpg&fit=crop&auto=format",
    metrics: [
      { label: "Lead response time", before: "38 hrs", after: "4 hrs" },
      { label: "Forecast accuracy", before: "58%", after: "89%" },
    ],
  },
];

export type TechCategory = { name: string; items: string[] };

export const techCategories: TechCategory[] = [
  { name: "Frontend", items: ["React", "Next.js", "TypeScript", "Tailwind CSS"] },
  { name: "Backend", items: ["Node.js", "NestJS", "PostgreSQL", "GraphQL"] },
  { name: "Automation & AI", items: ["Workflow Engines", "LLM Integrations", "Custom Agents"] },
  { name: "Infrastructure", items: ["Docker", "Kubernetes", "Vercel", "AWS"] },
  { name: "Analytics", items: ["GA4", "Looker Studio", "Custom Dashboards"] },
];

export const testimonials = [
  { quote: "Our operations became 60% faster within three months.", author: "Priya Raman", role: "COO, Logistics", industry: "Logistics" },
  { quote: "For the first time, finance and operations are looking at the same numbers.", author: "Ravi Menon", role: "CFO, Manufacturing", industry: "Manufacturing" },
  { quote: "Our reps stopped avoiding the CRM. Now it's the first thing they open.", author: "Sana Farooqi", role: "VP Sales, SaaS", industry: "SaaS" },
];

export const liveMetrics = [
  { label: "Projects Delivered", value: 120, suffix: "+" },
  { label: "Hours Automated Monthly", value: 4200, suffix: "+" },
  { label: "Client Industries Served", value: 11, suffix: "" },
  { label: "Years of Experience", value: 8, suffix: "+" },
];

export const finalCta = {
  headline: "Ready To Build Something Extraordinary?",
  body: "Let's design systems that grow your business for years, not just launch another project.",
  primaryCta: "Book Discovery Call",
  secondaryCta: "View Our Process",
};
