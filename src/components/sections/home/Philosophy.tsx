import { useState, type CSSProperties } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Boxes, Globe, Share2, Smartphone, TrendingUp, Users, type LucideIcon } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { cn } from "@/lib/utils";
import { philosophy, services } from "@/data/content";
import { DASHBOARD_MOCKUPS } from "./dashboardMockups";

const TAB_ICONS: Record<string, LucideIcon> = {
  "website-development": Globe,
  "app-development": Smartphone,
  "erp-solutions": Boxes,
  "crm-solutions": Users,
  "digital-marketing": TrendingUp,
  "social-media-management": Share2,
};

export function Philosophy() {
  const [activeSlug, setActiveSlug] = useState(services[0].slug);
  const active = services.find((service) => service.slug === activeSlug) ?? services[0];
  const DashboardMockup = DASHBOARD_MOCKUPS[active.slug];

  return (
    <section
      id="philosophy"
      aria-labelledby="philosophy-heading"
      className="relative overflow-hidden bg-warm-surface px-gutter py-section-lg"
    >
      <div className="mx-auto max-w-6xl">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="text-caption uppercase tracking-[0.25em] text-signal">Our Philosophy</span>
          <h2 id="philosophy-heading" className="mt-4 font-display text-h1 text-foreground">
            {philosophy.headline}
          </h2>
          <p className="mt-5 text-body leading-relaxed text-muted-foreground">{philosophy.body}</p>
        </Reveal>

        <Reveal delay={0.1} className="mt-12">
          <div role="tablist" aria-label="Explore our services" className="flex flex-wrap justify-center gap-2">
            {services.map((service) => {
              const Icon = TAB_ICONS[service.slug];
              const isActive = service.slug === activeSlug;
              return (
                <button
                  key={service.slug}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => setActiveSlug(service.slug)}
                  style={{ "--accent-element": `var(--el-${service.element})` } as CSSProperties}
                  className={cn(
                    "flex shrink-0 items-center gap-2 rounded-full border px-4 py-2.5 text-body-sm font-medium transition-colors duration-300",
                    isActive
                      ? "border-accent-element/40 bg-accent-element/15 text-foreground"
                      : "border-border text-muted-foreground hover:border-accent-element/30 hover:text-foreground"
                  )}
                >
                  <Icon className={cn("h-4 w-4", isActive ? "text-accent-element" : "text-muted-foreground")} strokeWidth={2} />
                  {service.name}
                </button>
              );
            })}
          </div>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 gap-10 lg:grid-cols-2 lg:items-center lg:gap-16">
          <div
            key={`text-${active.slug}`}
            className="animate-fade-rise"
            style={{ "--accent-element": `var(--el-${active.element})` } as CSSProperties}
          >
            <span className="text-caption font-medium text-accent-element">{active.tagline}</span>
            <h3 className="mt-3 font-display text-h2 text-foreground">{active.hero.headline}</h3>
            <p className="mt-5 max-w-md text-body-sm leading-relaxed text-muted-foreground">{active.body}</p>
            <Link
              to={`/solutions/${active.slug}`}
              className="mt-7 inline-flex items-center gap-2 rounded-full bg-foreground px-5 py-3 text-body-sm font-medium text-background transition-transform duration-300 hover:scale-[1.03]"
            >
              Explore {active.name}
              <ArrowRight className="h-4 w-4" strokeWidth={2} />
            </Link>
          </div>

          <div key={`dashboard-${active.slug}`} className="animate-fade-rise">
            <DashboardMockup service={active} />
          </div>
        </div>
      </div>
    </section>
  );
}
