import type { CSSProperties } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Reveal } from "@/components/Reveal";
import { cn } from "@/lib/utils";
import { services } from "@/data/content";

// Asymmetric editorial grid — a 12-col track with one large feature tile.
const SPANS = [
  "md:col-span-7 md:row-span-2",
  "md:col-span-5 md:row-span-1",
  "md:col-span-5 md:row-span-1",
  "md:col-span-4 md:row-span-1",
  "md:col-span-4 md:row-span-1",
  "md:col-span-4 md:row-span-1",
];

export function SolutionsShowcase() {
  return (
    <section id="solutions" className="relative bg-background px-gutter py-section-lg">
      <div className="mx-auto max-w-6xl">
        <Reveal className="mb-14 max-w-2xl">
          <span className="text-caption uppercase tracking-[0.25em] text-signal">What We Build</span>
          <h2 className="mt-4 font-display text-h1 text-foreground">Six disciplines. One connected system.</h2>
        </Reveal>

        <div className="grid grid-cols-1 gap-4 md:auto-rows-[13rem] md:grid-cols-12">
          {services.map((service, i) => (
            <Reveal key={service.slug} delay={i * 0.05} className={cn("h-full", SPANS[i])}>
              <Link to={`/solutions/${service.slug}`} className="group block h-full">
                <motion.div
                  layoutId={`solution-panel-${service.slug}`}
                  style={{ "--accent-element": `var(--el-${service.element})` } as CSSProperties}
                  className="relative flex h-full min-h-[13rem] flex-col justify-between overflow-hidden rounded-xl border border-border bg-accent-element/[0.06] p-8 transition-colors duration-500 group-hover:bg-accent-element/[0.16]"
                >
                  <div className="flex items-start justify-between">
                    <span className="text-caption text-accent-element">{service.index}</span>
                    <span className="h-2 w-2 rounded-full bg-accent-element opacity-60 transition-opacity duration-500 group-hover:opacity-100" />
                  </div>
                  <div>
                    <h3 className="font-display text-h2 text-foreground">{service.name}</h3>
                    <p className="mt-3 max-w-xs translate-y-2 text-body-sm text-muted-foreground opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                      {service.tagline}
                    </p>
                  </div>
                  <span className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-accent-element/0 transition-all duration-500 group-hover:ring-accent-element/40" />
                </motion.div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
