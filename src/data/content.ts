export const brand = {
  name: "Trafy AI",
  short: "Trafy",
  tagline: "One team. Every system your company runs on.",
  email: "hello@trafy.ai",
  phone: "+91 95009 36383",
  phoneHref: "tel:+919500936383",
};

export const nav = [
  { label: "Services", href: "/#services" },
  { label: "Work", href: "/#work" },
  { label: "Clients", href: "/#clients" },
  { label: "Contact", href: "/#contact" },
];

export type Service = {
  slug: string;
  index: string;
  name: string;
  shortName: string;
  tagline: string;
  body: string;
  media: string;
  accent: string;
  heroKeyword: string;
};

export const services: Service[] = [
  {
    slug: "website-development",
    index: "01",
    name: "Website Development",
    shortName: "Websites",
    tagline: "Sites built to convert, not just exist.",
    body: "Marketing sites, e-commerce, and web platforms engineered for speed, SEO, and motion-driven storytelling — designed and shipped by one team.",
    media: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=1200&q=80",
    accent: "#c5fe37",
    heroKeyword: "Websites",
  },
  {
    slug: "app-development",
    index: "02",
    name: "App Development",
    shortName: "Apps",
    tagline: "iOS, Android, and cross-platform — built to ship.",
    body: "Native-feel mobile apps and cross-platform products, from first wireframe to App Store — architected for scale, not just a demo.",
    media: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=1200&q=80",
    accent: "#c5fe37",
    heroKeyword: "Apps",
  },
  {
    slug: "erp-solutions",
    index: "03",
    name: "ERP Solutions",
    shortName: "ERP",
    tagline: "Every department, one source of truth.",
    body: "Custom ERP systems that unify inventory, finance, operations, and HR — replacing spreadsheets and disconnected tools with one platform.",
    media: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1200&q=80",
    accent: "#c5fe37",
    heroKeyword: "ERP",
  },
  {
    slug: "crm-solutions",
    index: "04",
    name: "CRM Solutions",
    shortName: "CRM",
    tagline: "Every lead, every deal, tracked and worked.",
    body: "CRM platforms tailored to how your sales team actually sells — pipeline visibility, automation, and reporting that leadership trusts.",
    media: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200&q=80",
    accent: "#c5fe37",
    heroKeyword: "CRM",
  },
  {
    slug: "digital-marketing",
    index: "05",
    name: "Digital Marketing",
    shortName: "Marketing",
    tagline: "Growth, measured in pipeline — not impressions.",
    body: "Performance marketing, SEO, and paid media run by a team that ships the website too — so strategy and execution never disconnect.",
    media: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&q=80",
    accent: "#c5fe37",
    heroKeyword: "Marketing",
  },
  {
    slug: "social-media-management",
    index: "06",
    name: "Social Media Management",
    shortName: "Social",
    tagline: "Content, community, and brand — run daily.",
    body: "Content calendars, creative production, and community management across platforms — consistent brand presence without the in-house overhead.",
    media: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=1200&q=80",
    accent: "#c5fe37",
    heroKeyword: "Social",
  },
];

export const stats = [
  { value: 120, suffix: "+", label: "Products Shipped" },
  { value: 40, suffix: "+", label: "Companies Served" },
  { value: 6, suffix: "", label: "Services, One Team" },
];

export const process = [
  {
    step: "01",
    title: "Discovery",
    body: "We map your business, your stack, and where systems are breaking down — before we design anything.",
  },
  {
    step: "02",
    title: "Design",
    body: "Architecture, UI, and data models planned together, so design decisions hold up in production.",
  },
  {
    step: "03",
    title: "Build",
    body: "One team ships the full stack — front end, back end, integrations — with weekly checkpoints.",
  },
  {
    step: "04",
    title: "Grow",
    body: "Launch, then iterate — marketing, analytics, and support keep compounding after go-live.",
  },
];

export type ClientCity = {
  id: string;
  location: [number, number];
  image: string;
  caption: string;
  rotate: number;
};

export const clientCities: ClientCity[] = [
  { id: "chennai", location: [13.0827, 80.2707], image: "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?w=120&h=120&fit=crop", caption: "Chennai", rotate: -5 },
  { id: "mumbai", location: [19.076, 72.8777], image: "https://images.unsplash.com/photo-1595658658481-d53d3f999875?w=120&h=120&fit=crop", caption: "Mumbai", rotate: 4 },
  { id: "bangalore", location: [12.9716, 77.5946], image: "https://images.unsplash.com/photo-1596176530529-78163a4f7af2?w=120&h=120&fit=crop", caption: "Bangalore", rotate: -3 },
  { id: "delhi", location: [28.6139, 77.209], image: "https://images.unsplash.com/photo-1587474260584-136574528ed5?w=120&h=120&fit=crop", caption: "Delhi", rotate: 5 },
  { id: "hyderabad", location: [17.385, 78.4867], image: "https://images.unsplash.com/photo-1621570166316-1cadeb5ab24d?w=120&h=120&fit=crop", caption: "Hyderabad", rotate: -4 },
  { id: "sf", location: [37.78, -122.44], image: "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?w=120&h=120&fit=crop", caption: "San Francisco", rotate: -5 },
  { id: "nyc", location: [40.71, -74.01], image: "https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?w=120&h=120&fit=crop", caption: "New York", rotate: 4 },
  { id: "dubai", location: [25.2048, 55.2708], image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=120&h=120&fit=crop", caption: "Dubai", rotate: -3 },
  { id: "singapore", location: [1.3521, 103.8198], image: "https://images.unsplash.com/photo-1525625293386-3f8f99389edd?w=120&h=120&fit=crop", caption: "Singapore", rotate: 3 },
  { id: "london", location: [51.51, -0.13], image: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=120&h=120&fit=crop", caption: "London", rotate: 3 },
];

export const cta = {
  title: "Your systems are still scattered. Let's fix that.",
  body: "Tell us what you're building or where things are breaking — we'll tell you exactly what it takes to fix it.",
};
