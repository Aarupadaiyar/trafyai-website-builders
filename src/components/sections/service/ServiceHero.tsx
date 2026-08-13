import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { brand } from "@/data/content";
import type { ServiceConfig } from "@/data/content/services";
import { DASHBOARD_MOCKUPS } from "@/components/sections/home/dashboardMockups";

export function ServiceHero({ config }: { config: ServiceConfig }) {
  const DashboardMockup = DASHBOARD_MOCKUPS[config.slug];

  return (
    <section
      className="relative px-gutter pt-24 pb-section overflow-hidden"
      aria-labelledby="hero-heading"
    >
      <div className="mx-auto max-w-[1400px] grid grid-cols-1 lg:grid-cols-[1fr_1fr] gap-14 items-center">
        <div>
          <span className="block text-caption uppercase tracking-[0.25em] text-accent-element mb-5">
            {config.hero.eyebrow}
          </span>
          <h1 id="hero-heading" className="font-display text-display-l text-foreground max-w-2xl">
            {config.hero.headline}
          </h1>
          <p className="mt-5 max-w-xl text-body-lg text-muted-foreground">
            {config.hero.subhead}
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <Button variant="glass" size="lg" asChild>
              <a href={`mailto:${brand.email}?subject=${encodeURIComponent(config.name)}`}>
                {config.hero.primaryCta}
              </a>
            </Button>
            <Button variant="ghost" size="lg" asChild>
              <a href="#case-study">{config.hero.secondaryCta}</a>
            </Button>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <DashboardMockup service={config} />
        </motion.div>
      </div>
    </section>
  );
}
