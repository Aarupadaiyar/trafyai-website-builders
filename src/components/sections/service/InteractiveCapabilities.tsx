import { motion } from "framer-motion";
import { Reveal } from "@/components/Reveal";
import type { ServiceConfig } from "@/data/content/services";

export function InteractiveCapabilities({ config }: { config: ServiceConfig }) {
  return (
    <section className="px-gutter py-section" aria-labelledby="capabilities-heading">
      <div className="mx-auto max-w-5xl">
        <Reveal>
          <span className="block text-caption uppercase tracking-[0.25em] text-accent-element mb-5">
            Capabilities
          </span>
          <h2 id="capabilities-heading" className="font-display text-h2 text-foreground max-w-2xl">
            What this actually includes.
          </h2>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-6">
          {config.capabilities.map((capability, i) => (
            <Reveal key={capability.title} delay={i * 0.08}>
              <motion.div
                className="rounded-lg border border-border p-8 h-full"
                whileHover={{ y: -4, borderColor: "hsl(var(--accent-element))" }}
                transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              >
                <h3 className="font-display text-h3 text-foreground">{capability.title}</h3>
                <p className="mt-3 text-body-sm text-muted-foreground">{capability.description}</p>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
