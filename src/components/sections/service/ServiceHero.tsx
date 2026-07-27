import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import type { ServiceConfig } from "@/data/content/services";

export function ServiceHero({ config }: { config: ServiceConfig }) {
  return (
    <section className="relative px-gutter pt-40 pb-section overflow-hidden">
      <div className="mx-auto max-w-[1400px] grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-16 items-center">
        <div>
          <span className="block text-caption uppercase tracking-[0.2em] text-accent-element mb-6">
            {config.hero.eyebrow}
          </span>
          <h1 className="font-display text-display-l text-foreground max-w-2xl">
            {config.hero.headline}
          </h1>
          <p className="mt-6 max-w-xl text-body-lg text-muted-foreground">
            {config.hero.subhead}
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-4">
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
          <div className="absolute inset-0 opacity-90">
            <div className="absolute inset-0 bg-gradient-to-br from-background/0 via-background/10 to-background/40" />
            <div className="absolute -top-1/4 -right-1/4 h-2/3 w-2/3 rounded-full bg-background/10 blur-3xl" />
            <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-background/20" />
            <svg
              className="absolute inset-0 h-full w-full opacity-30"
              viewBox="0 0 400 500"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="320" cy="80" r="140" stroke="hsl(var(--background))" strokeWidth="1" />
              <circle cx="60" cy="420" r="90" stroke="hsl(var(--background))" strokeWidth="1" />
              <line x1="0" y1="250" x2="400" y2="250" stroke="hsl(var(--background))" strokeWidth="0.5" />
            </svg>
          </div>
          <span className="absolute bottom-8 left-8 font-display text-h1 text-background/80">
            {config.index}
          </span>
        </motion.div>
      </div>
    </section>
  );
}
