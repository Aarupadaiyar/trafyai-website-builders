import type { JSX } from "react";
import { motion } from "framer-motion";
import { Reveal } from "@/components/Reveal";
import { industriesTeaser } from "@/data/content";

export function IndustriesTeaser(): JSX.Element {
  return (
    <section id="industries" className="py-section px-gutter">
      <div className="mx-auto max-w-6xl">
        <Reveal className="mb-14 max-w-2xl">
          <span className="text-caption uppercase tracking-[0.25em] text-signal">Industries</span>
          <h2 className="mt-4 font-display text-h1 text-foreground">
            Built for the businesses we understand best.
          </h2>
        </Reveal>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {industriesTeaser.map((industry, i) => (
            <Reveal key={industry.name} delay={i * 0.06}>
              <motion.div
                whileHover={{ y: -4 }}
                transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                className="h-full rounded-lg border border-border bg-secondary/40 p-6 shadow-e1"
              >
                <h3 className="font-display text-h3 text-foreground">{industry.name}</h3>
                <p className="mt-3 text-body-sm text-muted-foreground">{industry.description}</p>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
