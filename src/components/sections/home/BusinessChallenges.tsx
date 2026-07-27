import { motion } from "framer-motion";
import { Reveal } from "@/components/Reveal";
import { challenges } from "@/data/content";

export function BusinessChallenges() {
  return (
    <section aria-labelledby="business-challenges-heading" className="relative bg-background px-gutter py-section">
      <div className="mx-auto max-w-6xl">
        <Reveal className="mb-12 max-w-2xl">
          <span className="text-caption uppercase tracking-[0.25em] text-signal">The Reality</span>
          <h2 id="business-challenges-heading" className="mt-4 font-display text-h1 text-foreground">
            Where growth quietly leaks out.
          </h2>
        </Reveal>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {challenges.map((challenge, i) => (
            <Reveal key={challenge.title} delay={i * 0.07}>
              <motion.div
                whileHover={{ y: -6, scale: 1.015 }}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                className="h-full rounded-lg border border-border bg-surface p-8 transition-shadow duration-300 hover:border-signal/30 hover:shadow-glow-signal"
              >
                <p className="font-display text-display-l text-foreground">{challenge.stat}</p>
                <h3 className="mt-4 text-h3 font-display text-foreground">{challenge.title}</h3>
                <p className="mt-3 text-body-sm leading-relaxed text-muted-foreground">{challenge.description}</p>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
