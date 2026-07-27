export const brand = {
  name: "Trafy",
  fullName: "Trafy AI",
  statement: "We don't build software. We build business momentum.",
  email: "hello@trafy.ai",
};

export type NavAnchor = { label: string; href: string };

export const navAnchors: NavAnchor[] = [
  { label: "Industries", href: "/industries" },
  { label: "Work", href: "/case-studies" },
  { label: "About", href: "/about" },
];

export const footerColumns = {
  explore: [
    { label: "Home", href: "/" },
    { label: "Our Philosophy", href: "/#philosophy" },
    { label: "Process", href: "/#process" },
    { label: "Case Studies", href: "/case-studies" },
  ],
  company: [
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
  ],
};

export const about = {
  hero: {
    eyebrow: "About Trafy",
    headline: "We don't build software. We build momentum.",
    subhead:
      "Trafy is a business transformation studio, a small team that treats every website, product, and system as infrastructure for growth, not a one-off deliverable.",
    image: "https://images.unsplash.com/photo-1556761175-b413da4baf72?w=1600&q=80&fm=jpg&fit=crop&auto=format",
  },
  vision: {
    headline: "Vision",
    body: "A future where every business, regardless of size, runs on systems built as thoughtfully as the products they sell, where technology compounds instead of accumulating as debt.",
  },
  mission: {
    headline: "Mission",
    body: "To engineer measurable business transformation through design, engineering, automation, and growth, treating technology as leverage, never as the product itself.",
  },
  philosophy: {
    headline: "Philosophy",
    body: "Every business is an ecosystem, not a collection of disconnected tools. Our job isn't to hand over software and leave. It's to understand how a business actually runs, then build the systems that let it run better.",
  },
  approach: [
    {
      title: "Research before recommendation",
      body: "We don't propose a solution before we understand the problem. Every engagement starts with discovery, not a pitch.",
    },
    {
      title: "One team, end to end",
      body: "The same team that designs your system builds it, ships it, and stays accountable for how it performs after launch.",
    },
    {
      title: "Outcomes over deliverables",
      body: "Success is measured in the business result, more revenue, more automation, better decisions, never just a shipped feature.",
    },
  ],
};

export const contact = {
  headline: "Let's Build Something Extraordinary.",
  subhead:
    "Tell us about your business and where it's headed. We'll reply personally, not with an automated sequence.",
  formCtaLabel: "Send via Email",
};
