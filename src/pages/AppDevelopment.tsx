import { Link } from "react-router-dom";
import { Smartphone, Server, ShieldCheck, Rocket, ArrowUpRight } from "lucide-react";
import { CinematicHero } from "@/components/ui/cinematic-hero";
import { services } from "@/data/content";
import { Reveal } from "@/components/Reveal";

const included = [
  {
    icon: Smartphone,
    title: "iOS, Android & Cross-Platform",
    body: "Native Swift/Kotlin when performance demands it, React Native or Flutter when speed-to-market does — chosen per project, not by default.",
  },
  {
    icon: Server,
    title: "Backend & APIs",
    body: "Scalable backend architecture, REST/GraphQL APIs, and data models built to support the app for years, not just the demo.",
  },
  {
    icon: ShieldCheck,
    title: "QA & Compliance",
    body: "Device testing, accessibility passes, and App Store / Play Store review requirements handled before submission — not after rejection.",
  },
  {
    icon: Rocket,
    title: "Launch & Beyond",
    body: "Store listing, release management, crash monitoring, and a support window after launch so day-one bugs don't become week-one fires.",
  },
];

const otherServices = services.filter((s) => s.slug !== "app-development").slice(0, 3);

export default function AppDevelopment() {
  return (
    <div>
      <CinematicHero />

      <section className="relative py-28 lg:py-36 border-t border-line">
        <div className="bg-grid-theme absolute inset-0 opacity-30 pointer-events-none" aria-hidden="true" />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
          <Reveal className="max-w-2xl mb-16">
            <span className="text-xs uppercase tracking-[0.25em] text-signal-dark font-display">What's Included</span>
            <h2 className="mt-4 font-display text-4xl md:text-5xl font-bold tracking-tight text-premium">
              Every layer of a real app, not just a prototype.
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

      <section className="relative py-24 border-t border-line">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <Reveal className="mb-10">
            <span className="text-xs uppercase tracking-[0.25em] text-signal-dark font-display">More From Trafy AI</span>
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
