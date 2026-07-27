import { useState } from "react";
import type { JSX } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Plus } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { techCategories } from "@/data/content";
import { cn } from "@/lib/utils";

export function TechnologyShowcase(): JSX.Element {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section aria-labelledby="technology-heading" className="py-section px-gutter">
      <div className="mx-auto max-w-5xl">
        <Reveal className="mb-12 max-w-2xl">
          <span className="text-caption uppercase tracking-[0.25em] text-signal">Technology</span>
          <h2 id="technology-heading" className="mt-4 font-display text-h1 text-foreground">
            The tools behind the systems we build.
          </h2>
        </Reveal>

        <div className="flex flex-wrap items-start gap-4">
          {techCategories.map((category, i) => {
            const isOpen = openIndex === i;
            return (
              <motion.div
                key={category.name}
                layout
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                className={cn(
                  "rounded-lg border px-6 py-4 transition-colors",
                  isOpen ? "border-signal bg-secondary/60" : "border-border bg-secondary/20 hover:border-muted-foreground"
                )}
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center justify-between gap-6 text-left"
                >
                  <motion.span layout="position" className="font-display text-h3 text-foreground">
                    {category.name}
                  </motion.span>
                  <motion.span
                    animate={{ rotate: isOpen ? 45 : 0 }}
                    transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                    className="shrink-0 text-muted-foreground"
                  >
                    <Plus aria-hidden="true" className="h-4 w-4" />
                  </motion.span>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.ul
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                      className="mt-3 space-y-1.5 overflow-hidden"
                    >
                      {category.items.map((item) => (
                        <li key={item} className="text-body-sm text-muted-foreground">
                          {item}
                        </li>
                      ))}
                    </motion.ul>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
