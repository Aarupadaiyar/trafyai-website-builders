import { useEffect, useRef, useState } from "react";
import type { JSX } from "react";
import { Reveal } from "@/components/Reveal";
import { usePrefersReducedMotion } from "@/lib/usePrefersReducedMotion";
import { useScrollTrigger, ScrollTrigger } from "@/lib/useScrollTrigger";
import { processStages } from "@/data/content";
import { cn } from "@/lib/utils";

type ProcessTimelineProps = { variant: "pinned" | "compact"; id?: string };

const STAGE_SCROLL_VH = 62;

// A full-height scroll-jacked pin doesn't translate well to small touch
// screens, so below the `md` breakpoint we render the same static, stacked
// list used for prefers-reduced-motion instead of pinning the section.
function useIsSmallScreen() {
  const [isSmall, setIsSmall] = useState(() =>
    typeof window !== "undefined" ? window.matchMedia("(max-width: 767px)").matches : false
  );

  useEffect(() => {
    const mql = window.matchMedia("(max-width: 767px)");
    const onChange = () => setIsSmall(mql.matches);
    mql.addEventListener("change", onChange);
    return () => mql.removeEventListener("change", onChange);
  }, []);

  return isSmall;
}

function getStageVisualState(delta: number) {
  const absDelta = Math.abs(delta);
  const isActive = absDelta <= 0.5;
  const isPast = delta < -0.5;
  const isFuture = delta > 0.5;

  const opacity = isActive
    ? 1
    : isPast
      ? Math.max(0.2, 1 - absDelta * 0.55)
      : Math.max(0.22, 1 - absDelta * 0.45);
  const scale = isActive ? 1.03 : Math.max(0.9, 1 - absDelta * 0.06);
  const blur = isFuture ? Math.min(absDelta * 2.5, 6) : 0;

  return { opacity, scale, blur, isActive, isPast, isFuture };
}

export function ProcessTimeline({ variant, id }: ProcessTimelineProps): JSX.Element {
  if (variant === "compact") {
    return <CompactProcessTimeline id={id} />;
  }
  return <PinnedProcessTimeline id={id} />;
}

function CompactProcessTimeline({ id }: { id?: string }) {
  return (
    <section id={id} aria-labelledby="process-heading" className="py-section px-gutter">
      <div className="mx-auto max-w-6xl">
        <Reveal className="mb-10 max-w-2xl">
          <span className="text-caption uppercase tracking-[0.25em] text-signal">Our Process</span>
          <h2 id="process-heading" className="mt-4 font-display text-h1 text-foreground">
            How we get it done.
          </h2>
        </Reveal>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-6">
          {processStages.map((stage, i) => (
            <Reveal key={stage.index} delay={i * 0.06}>
              <div className="border-l border-border pl-5">
                <span className="font-display text-h3 text-signal">{stage.index}</span>
                <h3 className="mt-2 font-display text-h3 text-foreground">{stage.name}</h3>
                <p className="mt-2 text-body-sm text-muted-foreground">{stage.description}</p>
                <ul className="mt-4 space-y-1">
                  {stage.deliverables.map((d) => (
                    <li key={d} className="text-caption text-muted-foreground/80">
                      {d}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function PinnedProcessTimeline({ id }: { id?: string }) {
  const prefersReducedMotion = usePrefersReducedMotion();
  const isSmallScreen = useIsSmallScreen();
  const skipPin = prefersReducedMotion || isSmallScreen;
  const sectionRef = useRef<HTMLElement | null>(null);
  const [progress, setProgress] = useState(0);

  const n = processStages.length;
  const rawPosition = progress * (n - 1);

  useScrollTrigger(
    () => {
      if (skipPin || !sectionRef.current) return;

      const trigger = ScrollTrigger.create({
        trigger: sectionRef.current,
        start: "top top",
        end: `+=${STAGE_SCROLL_VH * n}%`,
        pin: true,
        scrub: 1,
        onUpdate: (self) => setProgress(self.progress),
      });

      return () => trigger.kill();
    },
    { scope: sectionRef, dependencies: [skipPin, n] }
  );

  if (skipPin) {
    return (
      <section id={id} aria-labelledby="process-heading" className="py-section-lg px-gutter">
        <div className="mx-auto max-w-3xl space-y-16">
          <Reveal>
            <span className="text-caption uppercase tracking-[0.25em] text-signal">Our Process</span>
            <h2 id="process-heading" className="mt-4 font-display text-h1 text-foreground">
              How we get it done.
            </h2>
          </Reveal>
          {processStages.map((stage, i) => (
            <Reveal key={stage.index} delay={i * 0.06}>
              <StageContent stage={stage} active />
            </Reveal>
          ))}
        </div>
      </section>
    );
  }

  return (
    <section
      id={id}
      ref={sectionRef}
      aria-label="Our Process"
      className="relative flex min-h-screen items-center py-section-lg px-gutter"
    >
      <div className="mx-auto w-full max-w-3xl">
        {processStages.map((stage, i) => {
          const { opacity, scale, blur, isActive } = getStageVisualState(i - rawPosition);
          return (
            <div
              key={stage.index}
              className="origin-left"
              style={{
                opacity,
                transform: `scale(${scale})`,
                filter: blur ? `blur(${blur}px)` : "none",
              }}
            >
              <StageContent stage={stage} active={isActive} />
            </div>
          );
        })}
      </div>
    </section>
  );
}

function StageContent({
  stage,
  active,
}: {
  stage: (typeof processStages)[number];
  active: boolean;
}) {
  return (
    <div
      className={cn(
        "border-l-2 pl-6 transition-[padding] duration-300 ease-out md:pl-8",
        active ? "border-signal py-7" : "border-border py-3"
      )}
    >
      <div className="flex items-baseline gap-4">
        <span className={cn("font-display text-h3", active ? "text-signal" : "text-muted-foreground")}>
          {stage.index}
        </span>
        <h3
          className={cn(
            "font-display text-foreground transition-all duration-300",
            active ? "text-h1" : "text-h3"
          )}
        >
          {stage.name}
        </h3>
      </div>

      {active && (
        <div className="mt-3 pl-0">
          <p className="max-w-xl text-body-lg text-muted-foreground">{stage.description}</p>
          <ul className="mt-4 flex flex-wrap gap-x-6 gap-y-1">
            {stage.deliverables.map((d) => (
              <li key={d} className="text-caption uppercase tracking-wide text-muted-foreground/70">
                {d}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
