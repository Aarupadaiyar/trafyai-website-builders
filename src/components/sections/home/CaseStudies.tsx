import { useEffect, useState } from "react";
import type { JSX } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, ArrowUpRight, ChevronLeft, ChevronRight } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { CountUpStat } from "@/components/CountUpStat";
import { usePrefersReducedMotion } from "@/lib/usePrefersReducedMotion";
import { caseStudiesFeatured } from "@/data/content";
import { cn } from "@/lib/utils";

const AUTO_ADVANCE_MS = 8000;

function parseNumeric(raw: string): { value: number; suffix: string } | null {
  const match = /^(\d+(?:\.\d+)?)(%?)$/.exec(raw.trim());
  if (!match) return null;
  return { value: Number(match[1]), suffix: match[2] };
}

export function CaseStudies(): JSX.Element {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const prefersReducedMotion = usePrefersReducedMotion();
  const total = caseStudiesFeatured.length;

  useEffect(() => {
    if (paused || prefersReducedMotion || total <= 1) return;
    const timer = setInterval(() => setIndex((i) => (i + 1) % total), AUTO_ADVANCE_MS);
    return () => clearInterval(timer);
  }, [paused, prefersReducedMotion, total]);

  const current = caseStudiesFeatured[index];

  return (
    <section id="work" className="py-section-lg px-gutter">
      <div className="mx-auto max-w-5xl">
        <Reveal className="mb-14 max-w-2xl">
          <span className="text-caption uppercase tracking-[0.25em] text-signal">Case Studies</span>
          <h2 className="mt-4 font-display text-h1 text-foreground">
            Outcomes, not screenshots.
          </h2>
        </Reveal>

        <div
          className="relative"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            >
              <span className="text-caption uppercase tracking-wide text-muted-foreground">
                {current.industry}
              </span>
              <h3 className="mt-3 font-display text-h2 text-foreground">{current.client}</h3>
              <p className="mt-4 max-w-2xl text-body-lg text-muted-foreground">{current.summary}</p>

              <div className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
                {current.metrics.map((metric) => {
                  const before = parseNumeric(metric.before);
                  const after = parseNumeric(metric.after);
                  return (
                    <div key={metric.label} className="border-l border-border pl-5">
                      <p className="text-caption uppercase tracking-wide text-muted-foreground">
                        {metric.label}
                      </p>
                      {before && after ? (
                        <div className="mt-2 flex items-baseline gap-3">
                          <span className="font-display text-h3 text-muted-foreground opacity-60">
                            {before.value}
                            {before.suffix}
                          </span>
                          <ArrowRight className="h-4 w-4 shrink-0 text-muted-foreground" />
                          <CountUpStat value={after.value} suffix={after.suffix} />
                        </div>
                      ) : (
                        <div className="mt-2 flex items-baseline gap-3 font-display">
                          <span className="text-h3 text-muted-foreground opacity-60">{metric.before}</span>
                          <ArrowRight className="h-4 w-4 shrink-0 text-muted-foreground" />
                          <span className="text-h1 text-signal">{metric.after}</span>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>

              <Link
                to={`/solutions/${current.serviceSlug}`}
                className="mt-10 inline-flex items-center gap-2 text-body text-foreground underline decoration-border underline-offset-4 transition-colors hover:decoration-signal"
              >
                View service
                <ArrowUpRight className="h-4 w-4" />
              </Link>
            </motion.div>
          </AnimatePresence>

          {total > 1 && (
            <div className="mt-14 flex items-center gap-4">
              <button
                type="button"
                aria-label="Previous case study"
                onClick={() => setIndex((i) => (i - 1 + total) % total)}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-border transition-colors hover:border-signal"
              >
                <ChevronLeft className="h-4 w-4" />
              </button>
              <button
                type="button"
                aria-label="Next case study"
                onClick={() => setIndex((i) => (i + 1) % total)}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-border transition-colors hover:border-signal"
              >
                <ChevronRight className="h-4 w-4" />
              </button>
              <div className="ml-2 flex items-center gap-2">
                {caseStudiesFeatured.map((cs, i) => (
                  <span
                    key={cs.client}
                    className={cn(
                      "h-1.5 rounded-full transition-all duration-300",
                      i === index ? "w-8 bg-signal" : "w-1.5 bg-border"
                    )}
                  />
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
