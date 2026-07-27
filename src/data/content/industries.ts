export type IndustryConfig = {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  challenges: string[];
  relevantServiceSlugs: string[];
  metrics: { label: string; value: string }[];
};

export const industries: IndustryConfig[] = [
  {
    slug: "healthcare",
    name: "Healthcare",
    tagline: "Compliance, patient experience, and operational efficiency.",
    description:
      "Healthcare businesses carry a higher bar than most: every system has to hold up to compliance scrutiny while still feeling human to the patient on the other end. We build for both at once — never trading one for the other.",
    challenges: [
      "Patient records scattered across incompatible systems",
      "Booking and intake processes that frustrate patients before they've even been seen",
      "Compliance requirements that slow every new system down",
    ],
    relevantServiceSlugs: ["erp-solutions", "crm-solutions", "website-development"],
    metrics: [
      { label: "Average intake time reduction", value: "44%" },
      { label: "Patient record accuracy", value: "99.2%" },
    ],
  },
  {
    slug: "retail",
    name: "Retail",
    tagline: "Conversion, customer journey, and inventory intelligence.",
    description:
      "Retail margins are won or lost in the details — a slow checkout, an out-of-sync inventory count, a customer journey that doesn't carry across channels. We build the systems that close those gaps.",
    challenges: [
      "Inventory counts that disagree between the store and the website",
      "Checkout flows that lose customers at the last step",
      "Marketing and sales data that never quite line up",
    ],
    relevantServiceSlugs: ["website-development", "digital-marketing", "erp-solutions"],
    metrics: [
      { label: "Average conversion lift", value: "2.8x" },
      { label: "Inventory accuracy improvement", value: "+7.4%" },
    ],
  },
  {
    slug: "manufacturing",
    name: "Manufacturing",
    tagline: "Operations, automation, and reliability at scale.",
    description:
      "On a production floor, disconnected systems don't just cost time — they cost output. We unify finance, inventory, and operations into one operating system built around how manufacturing actually runs.",
    challenges: [
      "Finance, inventory, and production running on separate, disagreeing systems",
      "Manual reconciliation eating hours every week",
      "Reporting that arrives too late to act on",
    ],
    relevantServiceSlugs: ["erp-solutions", "crm-solutions"],
    metrics: [
      { label: "Manual reconciliation time saved", value: "88%" },
      { label: "Monthly close-time reduction", value: "72%" },
    ],
  },
  {
    slug: "finance",
    name: "Finance",
    tagline: "Security, trust, and accuracy in every transaction.",
    description:
      "In finance, trust is the product. Every system we build here is designed around accuracy and security first — then usability, never the other way around.",
    challenges: [
      "Legacy systems that are trusted but hard to extend",
      "Manual processes standing in for real automation, quietly, for years",
      "Customer-facing experiences that feel a decade behind the brand's actual standards",
    ],
    relevantServiceSlugs: ["erp-solutions", "website-development", "crm-solutions"],
    metrics: [
      { label: "Process automation coverage", value: "76%" },
      { label: "Client onboarding time reduction", value: "61%" },
    ],
  },
  {
    slug: "saas",
    name: "SaaS",
    tagline: "Retention, onboarding, and product-led growth.",
    description:
      "For a SaaS business, churn is the enemy and onboarding is the front line. We build the pipeline, retention, and growth systems that keep customers past their first thirty days.",
    challenges: [
      "Leads falling through the cracks between marketing and sales",
      "Onboarding flows that lose users before they see the product's value",
      "Growth channels that can't be attributed back to actual revenue",
    ],
    relevantServiceSlugs: ["crm-solutions", "digital-marketing", "app-development"],
    metrics: [
      { label: "Average forecast accuracy gain", value: "+27%" },
      { label: "Average CAC reduction", value: "48%" },
    ],
  },
  {
    slug: "real-estate",
    name: "Real Estate",
    tagline: "Lead conversion and end-to-end client experience.",
    description:
      "Real estate is a relationship business running on a deadline. We build the systems that keep every lead followed up, every listing presented well, and every client experience consistent from first click to closing.",
    challenges: [
      "Leads going cold because follow-up depends on memory, not process",
      "Listing sites that don't reflect the quality of the properties they're selling",
      "Client communication scattered across email, text, and phone with no shared record",
    ],
    relevantServiceSlugs: ["crm-solutions", "website-development", "social-media-management"],
    metrics: [
      { label: "Lead response time improvement", value: "9x faster" },
      { label: "Average listing-to-close time reduction", value: "31%" },
    ],
  },
];

export const getIndustryBySlug = (slug: string) => industries.find((i) => i.slug === slug);
