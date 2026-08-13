import { useState } from "react";
import { Link } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, Plus } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { cn } from "@/lib/utils";
import { philosophy, services } from "@/data/content";

export function Philosophy() {
  const [openSlug, setOpenSlug] = useState<string | null>(null);

  return (
    <section
      id="philosophy"
      aria-labelledby="philosophy-heading"
      className="relative overflow-hidden bg-background px-gutter py-section-lg"
    >
      <div className="mx-auto grid max-w-6xl gap-14 lg:grid-cols-2 lg:items-center">
        <Reveal>
          <span className="text-caption uppercase tracking-[0.25em] text-signal">Our Philosophy</span>
          <h2 id="philosophy-heading" className="mt-4 font-display text-h1 text-foreground">
            {philosophy.headline}
          </h2>
          <p className="mt-6 max-w-lg text-body leading-relaxed text-muted-foreground">{philosophy.body}</p>
        </Reveal>

        {/* Interactive service grid — tap/click any card to reveal what it does.
            One consistent interaction at every screen size, no hover dependency. */}
        <Reveal delay={0.15}>
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2" role="list" aria-label="Our services">
            {services.map((service, i) => {
              const isOpen = openSlug === service.slug;
              return (
                <div
                  key={service.slug}
                  role="listitem"
                  className={cn(
                    "overflow-hidden rounded-lg border bg-surface transition-colors duration-300",
                    isOpen ? "border-signal/50" : "border-border"
                  )}
                >
                  <button
                    type="button"
                    aria-expanded={isOpen}
                    onClick={() => setOpenSlug(isOpen ? null : service.slug)}
                    className="flex w-full items-center gap-4 px-4 py-4 text-left"
                  >
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-border text-caption text-muted-foreground">
                      {service.index}
                    </span>
                    <span className="flex-1 text-body font-medium text-foreground">{service.name}</span>
                    <Plus
                      aria-hidden="true"
                      className={cn(
                        "h-4 w-4 shrink-0 text-signal transition-transform duration-300",
                        isOpen && "rotate-45"
                      )}
                    />
                  </button>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                        className="overflow-hidden"
                      >
                        <div className="px-4 pb-4 pl-[3.25rem]">
                          <p className="text-body-sm text-muted-foreground">{service.tagline}</p>
                          <Link
                            to={`/solutions/${service.slug}`}
                            className="mt-2 inline-flex items-center gap-1 text-caption text-signal"
                          >
                            View service
                            <ArrowRight className="h-3 w-3" strokeWidth={2} />
                          </Link>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
