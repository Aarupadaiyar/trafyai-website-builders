import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { PageTransition } from "@/components/layout/PageTransition";
import { Reveal } from "@/components/Reveal";
import { industries } from "@/data/content";

export default function Industries() {
  return (
    <PageTransition>
      <section
        aria-labelledby="industries-heading"
        className="min-h-screen px-gutter pb-section-lg pt-32"
      >
        <div className="mx-auto max-w-6xl">
          <Reveal className="max-w-2xl">
            <span className="text-caption uppercase tracking-[0.25em] text-signal">Industries</span>
            <h1 id="industries-heading" className="mt-4 font-display text-display-l text-foreground">
              Built for the businesses we understand best.
            </h1>
            <p className="mt-6 text-body-lg text-muted-foreground">
              Every industry runs on its own pressures. We build systems around the ones that
              actually shape how your business operates, not a generic template stretched to fit.
            </p>
          </Reveal>

          <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {industries.map((industry, i) => (
              <Reveal key={industry.slug} delay={i * 0.07}>
                <Link
                  to={`/industries/${industry.slug}`}
                  className="block h-full"
                  aria-label={`View the ${industry.name} industry page`}
                >
                  <motion.div
                    whileHover={{ y: -6, scale: 1.015 }}
                    transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                    className="h-full overflow-hidden rounded-lg border border-border bg-surface transition-shadow duration-300 hover:border-signal/30 hover:shadow-glow-signal"
                  >
                    <div className="relative h-44 w-full overflow-hidden">
                      <img
                        src={industry.image}
                        alt={industry.name}
                        loading="lazy"
                        className="h-full w-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-background/70 via-background/0 to-background/0" />
                    </div>
                    <div className="p-6 sm:p-8">
                      <h2 className="font-display text-h3 text-foreground">{industry.name}</h2>
                      <p className="mt-3 text-body-sm text-signal">{industry.tagline}</p>
                      <p className="mt-4 text-body-sm leading-relaxed text-muted-foreground">
                        {industry.description.split(".")[0]}.
                      </p>
                    </div>
                  </motion.div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </PageTransition>
  );
}
