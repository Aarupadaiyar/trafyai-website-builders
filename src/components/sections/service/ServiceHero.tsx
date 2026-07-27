import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import type { ServiceConfig } from "@/data/content/services";

export function ServiceHero({ config }: { config: ServiceConfig }) {
  return (
    <section
      className="relative px-gutter pt-24 pb-section overflow-hidden"
      aria-labelledby="hero-heading"
    >
      <div className="mx-auto max-w-[1400px] grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-10 items-center">
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
              <a href={`mailto:hello@trafy.ai?subject=${encodeURIComponent(config.name)}`}>
                {config.hero.primaryCta}
              </a>
            </Button>
            <Button variant="ghost" size="lg" asChild>
              <a href="#case-study">{config.hero.secondaryCta}</a>
            </Button>
          </div>
        </div>

        <motion.div
          layoutId={`solution-panel-${config.slug}`}
          className="bg-accent-element relative aspect-[4/5] w-full rounded-xl overflow-hidden shadow-glow-element"
        >
          <img
            src={config.image}
            alt={config.name}
            loading="lazy"
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-accent-element/80 via-accent-element/25 to-accent-element/10" />
          <span className="absolute bottom-8 left-8 font-display text-h1 text-background/90">
            {config.index}
          </span>
        </motion.div>
      </div>
    </section>
  );
}
