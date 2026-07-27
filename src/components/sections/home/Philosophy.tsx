import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { Reveal } from "@/components/Reveal";
import { cn } from "@/lib/utils";
import { usePrefersReducedMotion } from "@/lib/usePrefersReducedMotion";
import { philosophy, services } from "@/data/content";

const RADIUS = 42; // percentage of the container

export function Philosophy() {
  const reducedMotion = usePrefersReducedMotion();
  const [activeSlug, setActiveSlug] = useState<string | null>(null);

  const nodes = useMemo(
    () =>
      services.map((service, i) => {
        const angle = (i / services.length) * 2 * Math.PI - Math.PI / 2;
        return {
          service,
          x: 50 + RADIUS * Math.cos(angle),
          y: 50 + RADIUS * Math.sin(angle),
        };
      }),
    []
  );

  return (
    <section
      id="philosophy"
      aria-labelledby="philosophy-heading"
      className="relative overflow-hidden bg-background px-gutter py-section-lg"
    >
      {/* Continuous slow orbit + counter-rotation so node content stays upright.
          Pure CSS (paused via :hover, frozen via prefers-reduced-motion) — scoped
          to this component only, no shared stylesheet edits required. */}
      <style>{`
        @keyframes philosophy-spin { to { transform: rotate(360deg); } }
        @keyframes philosophy-spin-reverse { to { transform: rotate(-360deg); } }
        .philosophy-ring { animation: philosophy-spin 55s linear infinite; }
        .philosophy-ring:hover { animation-play-state: paused; }
        .philosophy-node-inner { animation: philosophy-spin-reverse 55s linear infinite; }
        .philosophy-ring:hover .philosophy-node-inner { animation-play-state: paused; }
        @media (prefers-reduced-motion: reduce) {
          .philosophy-ring, .philosophy-node-inner { animation: none; }
        }
      `}</style>

      <div className="mx-auto grid max-w-6xl gap-14 lg:grid-cols-2 lg:items-center">
        <Reveal>
          <span className="text-caption uppercase tracking-[0.25em] text-signal">Our Philosophy</span>
          <h2 id="philosophy-heading" className="mt-4 font-display text-h1 text-foreground">
            {philosophy.headline}
          </h2>
          <p className="mt-6 max-w-lg text-body leading-relaxed text-muted-foreground">{philosophy.body}</p>
        </Reveal>

        <Reveal delay={0.15}>
          <div className="relative mx-auto aspect-square w-full max-w-[26rem]">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="flex h-28 w-28 flex-col items-center justify-center rounded-full border border-border bg-surface text-center shadow-e2">
                <span className="font-display text-body-lg text-foreground">Business</span>
              </div>
            </div>

            <div className={cn("absolute inset-0", !reducedMotion && "philosophy-ring")}>
              {nodes.map(({ service, x, y }) => (
                <div key={service.slug} className="absolute h-0 w-0" style={{ left: `${x}%`, top: `${y}%` }}>
                  <div
                    className={cn(
                      "relative -translate-x-1/2 -translate-y-1/2",
                      !reducedMotion && "philosophy-node-inner"
                    )}
                  >
                    <Link
                      to={`/solutions/${service.slug}`}
                      onMouseEnter={() => setActiveSlug(service.slug)}
                      onMouseLeave={() => setActiveSlug((current) => (current === service.slug ? null : current))}
                      onFocus={() => setActiveSlug(service.slug)}
                      onBlur={() => setActiveSlug((current) => (current === service.slug ? null : current))}
                      className="group flex h-14 w-14 items-center justify-center rounded-full border border-border bg-background text-center transition-colors hover:border-signal/60 hover:bg-secondary"
                    >
                      <span className="text-caption text-muted-foreground transition-colors group-hover:text-signal">
                        {service.index}
                      </span>
                    </Link>
                    <span
                      className={cn(
                        "pointer-events-none absolute left-1/2 top-full z-10 mt-2 w-40 -translate-x-1/2 rounded-md border border-border bg-background/95 px-3 py-2 text-center shadow-e2 opacity-0 transition-opacity duration-300",
                        activeSlug === service.slug && "opacity-100"
                      )}
                    >
                      <span className="block text-caption font-medium text-foreground">{service.name}</span>
                      <span className="mt-1 block text-caption text-muted-foreground">{service.tagline}</span>
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
