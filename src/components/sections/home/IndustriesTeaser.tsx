import type { JSX } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Reveal } from "@/components/Reveal";
import { industries } from "@/data/content";

export function IndustriesTeaser(): JSX.Element {
  return (
    <section id="industries" className="py-section px-gutter">
      <div className="mx-auto max-w-6xl">
        <Reveal className="mb-10 max-w-2xl">
          <span className="text-caption uppercase tracking-[0.25em] text-signal">Industries</span>
          <h2 className="mt-4 font-display text-h1 text-foreground">
            Built for the businesses we understand best.
          </h2>
        </Reveal>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {industries.map((industry, i) => (
            <Reveal key={industry.slug} delay={i * 0.06}>
              <Link to={`/industries/${industry.slug}`} className="block h-full">
                <motion.div
                  whileHover={{ y: -4 }}
                  transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                  className="h-full overflow-hidden rounded-lg border border-border bg-secondary/40 shadow-e1 transition-colors duration-300 hover:border-signal/30"
                >
                  <div className="relative h-40 w-full overflow-hidden">
                    <img
                      src={industry.image}
                      alt={industry.name}
                      loading="lazy"
                      className="h-full w-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/70 via-background/0 to-background/0" />
                  </div>
                  <div className="p-6">
                    <h3 className="font-display text-h3 text-foreground">{industry.name}</h3>
                    <p className="mt-3 text-body-sm text-muted-foreground">{industry.tagline}</p>
                  </div>
                </motion.div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
