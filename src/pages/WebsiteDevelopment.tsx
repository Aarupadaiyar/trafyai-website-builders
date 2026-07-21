import { useRef } from "react";
import { Link } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";
import { Gauge, Search, LayoutTemplate, MousePointerClick, ArrowUpRight, Check } from "lucide-react";
import { BrowserScene } from "@/three/BrowserScene";
import { Spotlight } from "@/components/ui/spotlight";
import { Card } from "@/components/ui/card";
import { Reveal } from "@/components/Reveal";
import { services, brand } from "@/data/content";

const included = [
  {
    icon: LayoutTemplate,
    title: "Design & CMS",
    body: "Marketing sites, e-commerce, and content-managed platforms — built on a CMS your team can actually update without filing a ticket.",
  },
  {
    icon: Gauge,
    title: "Performance",
    body: "Sub-second loads, optimized assets, and clean rendering — engineered to pass Core Web Vitals, not just look fast in a demo.",
  },
  {
    icon: Search,
    title: "SEO Foundations",
    body: "Semantic markup, structured data, and a technical SEO base built in from day one — not bolted on after launch.",
  },
  {
    icon: MousePointerClick,
    title: "Motion & Interaction",
    body: "Scroll-driven storytelling, considered micro-interactions, and animation that supports the message instead of competing with it.",
  },
];

const otherServices = services.filter((s) => s.slug !== "website-development").slice(0, 3);

export default function WebsiteDevelopment() {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const sceneY = useTransform(scrollYProgress, [0, 1], ["0%", "16%"]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.85], [1, 0]);

  return (
    <div>
      {/* HERO */}
      <section ref={heroRef} className="relative min-h-screen overflow-hidden flex items-center pt-32 pb-20">
        <div className="bg-grid-theme absolute inset-0 pointer-events-none" aria-hidden="true" />
        <div className="film-grain" aria-hidden="true" />
        <div
          className="absolute -top-40 left-1/3 h-[600px] w-[900px] rounded-full opacity-25 blur-[120px] pointer-events-none"
          style={{ background: "radial-gradient(ellipse, rgba(197,254,55,0.35), transparent 70%)" }}
        />

        <motion.div style={{ opacity: heroOpacity }} className="relative z-10 mx-auto max-w-7xl w-full px-6 lg:px-10">
          <div className="grid lg:grid-cols-[1.05fr_0.95fr] gap-16 items-center">
            <div>
              <Link to="/" className="inline-flex items-center gap-2 text-sm text-mist hover:text-paper transition-colors mb-8">
                <ArrowUpRight className="h-4 w-4 rotate-[225deg]" />
                All Services
              </Link>

              <span className="text-xs uppercase tracking-[0.25em] text-signal-dark font-display">01 / Service</span>

              <h1 className="mt-4 font-display text-5xl sm:text-6xl lg:text-[4.6rem] font-bold tracking-tight leading-[1.02] text-3d-matte">
                Websites built to
                <br />
                <span className="text-premium">convert, not just exist.</span>
              </h1>

              <p className="mt-7 text-lg text-mist max-w-lg leading-relaxed">
                Marketing sites, e-commerce, and web platforms engineered for speed, SEO, and motion-driven
                storytelling — designed and shipped by one team, end to end.
              </p>

              <div className="mt-10 flex flex-wrap gap-4">
                <a href="/#contact" className="btn-signal inline-flex items-center gap-2 rounded-full px-7 py-3.5 font-display font-semibold">
                  Start a Website Project
                  <ArrowUpRight className="h-4 w-4" />
                </a>
                <a href="#included" className="btn-ghost inline-flex items-center gap-2 rounded-full px-7 py-3.5 font-display font-semibold">
                  What's Included
                </a>
              </div>

              <ul className="mt-12 grid grid-cols-2 gap-x-6 gap-y-3 max-w-md">
                {["Responsive by default", "CMS your team can use", "Built for Core Web Vitals", "Analytics wired in day one"].map((item) => (
                  <li key={item} className="flex items-center gap-2 text-sm text-fog">
                    <Check className="h-4 w-4 text-signal-dark shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <motion.div style={{ y: sceneY }} className="relative h-[420px] lg:h-[560px]">
              <Card className="w-full h-full bg-[#05060a] border-white/10 relative overflow-hidden rounded-[28px]">
                <div className="bg-grid-theme-dark absolute inset-0 opacity-60 pointer-events-none" aria-hidden="true" />
                <Spotlight className="-top-20 right-0 md:right-40" />
                <div className="absolute inset-0">
                  <BrowserScene className="w-full h-full" />
                </div>
                <div className="absolute top-6 left-6 right-6 flex items-start justify-between pointer-events-none">
                  <div className="floating-ui-badge rounded-xl px-4 py-2.5">
                    <p className="text-[10px] uppercase tracking-widest text-white/45">Lighthouse</p>
                    <p className="text-sm font-semibold text-white font-display">98 Performance</p>
                  </div>
                </div>
                <div className="absolute bottom-6 left-6 right-6 flex justify-between pointer-events-none">
                  <div className="floating-ui-badge rounded-xl px-4 py-2.5 flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-signal shadow-[0_0_8px_rgba(197,254,55,0.8)]" />
                    <span className="text-xs text-white font-medium">Live in Production</span>
                  </div>
                </div>
              </Card>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* WHAT'S INCLUDED */}
      <section id="included" className="relative py-28 lg:py-36 border-t border-line">
        <div className="bg-grid-theme absolute inset-0 opacity-40 pointer-events-none" aria-hidden="true" />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
          <Reveal className="max-w-2xl mb-16">
            <span className="text-xs uppercase tracking-[0.25em] text-signal-dark font-display">What's Included</span>
            <h2 className="mt-4 font-display text-4xl md:text-5xl font-bold tracking-tight text-premium">
              Every layer of a real website, not just a template.
            </h2>
          </Reveal>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {included.map((item, i) => (
              <Reveal key={item.title} delay={i * 0.1}>
                <div className="surface-card rounded-2xl p-7 h-full">
                  <item.icon className="h-6 w-6 text-signal-dark" />
                  <h3 className="mt-5 font-display text-lg font-semibold text-paper">{item.title}</h3>
                  <p className="mt-3 text-sm text-fog leading-relaxed">{item.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS STRIP */}
      <section className="relative py-24 border-t border-line">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <Reveal className="max-w-2xl mb-12">
            <span className="text-xs uppercase tracking-[0.25em] text-signal-dark font-display">How It Ships</span>
            <h2 className="mt-4 font-display text-3xl md:text-4xl font-bold tracking-tight text-premium">
              From sitemap to production, on one team's timeline.
            </h2>
          </Reveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { step: "01", title: "Sitemap & Content", body: "Structure and copy strategy, mapped before a single screen is designed." },
              { step: "02", title: "Design System", body: "Reusable components and a visual language that scales past launch." },
              { step: "03", title: "Build & QA", body: "Responsive build, cross-browser QA, and performance passes before go-live." },
              { step: "04", title: "Launch & Analytics", body: "DNS, hosting, and analytics wired in — so day one has real data, not guesses." },
            ].map((p, i) => (
              <Reveal key={p.step} delay={i * 0.08}>
                <div className="rounded-2xl border border-line p-6 h-full">
                  <span className="font-display text-2xl font-bold text-signal-dark/80">{p.step}</span>
                  <h3 className="mt-3 font-display text-base font-semibold text-paper">{p.title}</h3>
                  <p className="mt-2 text-sm text-fog leading-relaxed">{p.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* MORE SERVICES */}
      <section className="relative py-24 border-t border-line">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <Reveal className="mb-10">
            <span className="text-xs uppercase tracking-[0.25em] text-signal-dark font-display">More From {brand.name}</span>
          </Reveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {otherServices.map((s, i) => (
              <Reveal key={s.slug} delay={i * 0.08}>
                <Link
                  to={`/services/${s.slug}`}
                  className="surface-card group block rounded-2xl p-6 hover:border-signal-dark/40 transition-colors h-full"
                >
                  <span className="text-xs font-display" style={{ color: s.accent }}>
                    {s.index}
                  </span>
                  <h3 className="mt-3 font-display text-xl font-semibold text-paper group-hover:text-signal-dark transition-colors flex items-center gap-1.5">
                    {s.name}
                    <ArrowUpRight className="h-4 w-4 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                  </h3>
                  <p className="mt-2 text-sm text-mist">{s.tagline}</p>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
