import { useEffect, useRef, useState } from "react";
import { Reveal } from "@/components/Reveal";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { gsap, useScrollTrigger } from "@/lib/useScrollTrigger";
import { usePrefersReducedMotion } from "@/lib/usePrefersReducedMotion";
import { realityCheck } from "@/data/content";

// A full-height scroll-jacked pin is a poor fit for small touch screens, so we
// fall back to the same static end-state used for prefers-reduced-motion.
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

type Shape = { top: string; left: string; x: number; y: number; rotate: number; size: number };

const SHAPES: Shape[] = [
  { top: "18%", left: "14%", x: -160, y: -70, rotate: -14, size: 72 },
  { top: "14%", left: "78%", x: 190, y: -90, rotate: 16, size: 56 },
  { top: "68%", left: "10%", x: -200, y: 110, rotate: 10, size: 60 },
  { top: "72%", left: "82%", x: 220, y: 90, rotate: -18, size: 44 },
  { top: "10%", left: "46%", x: 10, y: -150, rotate: 8, size: 40 },
];

export function RealityCheck() {
  const scope = useRef<HTMLDivElement>(null);
  const reducedMotion = usePrefersReducedMotion();
  const isSmallScreen = useIsSmallScreen();
  const skipPin = reducedMotion || isSmallScreen;

  useScrollTrigger(
    () => {
      if (skipPin) return; // static end-state is rendered instead, see below

      gsap.set(".rc-shape", {
        x: (i: number) => SHAPES[i].x,
        y: (i: number) => SHAPES[i].y,
        rotate: (i: number) => SHAPES[i].rotate,
      });
      gsap.set([".rc-second", ".rc-body", ".rc-cta"], { opacity: 0, y: 24 });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: scope.current,
          start: "top top",
          end: "+=120%",
          pin: true,
          scrub: 1,
        },
      });

      tl.to(".rc-shape", { x: 0, y: 0, rotate: 0, stagger: 0.06, duration: 1, ease: "power2.out" }, 0)
        .to(".rc-second", { opacity: 1, y: 0, duration: 0.6 }, 0.35)
        .to(".rc-body", { opacity: 1, y: 0, duration: 0.6 }, 0.62)
        .to(".rc-cta", { opacity: 1, y: 0, duration: 0.4 }, 0.88);
    },
    { scope, dependencies: [skipPin] }
  );

  return (
    <section
      ref={scope}
      id="reality-check"
      aria-labelledby="reality-check-heading"
      className={cn(
        "relative flex items-center overflow-hidden bg-background py-section",
        !skipPin && "min-h-screen"
      )}
    >
      <div className="pointer-events-none absolute inset-0">
        {SHAPES.map((shape, i) => (
          <div
            key={i}
            className="rc-shape absolute rounded-xl border border-border bg-secondary/60"
            style={{
              top: shape.top,
              left: shape.left,
              width: shape.size,
              height: shape.size,
              transform: skipPin ? undefined : `translate(${shape.x}px, ${shape.y}px) rotate(${shape.rotate}deg)`,
            }}
          />
        ))}
      </div>

      <div className="relative mx-auto max-w-3xl px-gutter text-center">
        {skipPin ? (
          <>
            <Reveal>
              <span className="mb-4 block text-caption uppercase tracking-[0.25em] text-signal">Reality Check</span>
              <h2 id="reality-check-heading" className="font-display text-h1 text-foreground">
                {realityCheck.headline}
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="mt-2 font-display text-h1 text-muted-foreground">{realityCheck.secondHeadline}</h2>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="mt-8 text-body-lg text-muted-foreground">{realityCheck.body}</p>
            </Reveal>
            <Reveal delay={0.3} className="mt-10">
              <Button variant="ghost">{realityCheck.cta}</Button>
            </Reveal>
          </>
        ) : (
          <>
            <span className="mb-4 block text-caption uppercase tracking-[0.25em] text-signal">Reality Check</span>
            <h2 id="reality-check-heading" className="rc-headline font-display text-h1 text-foreground">
              {realityCheck.headline}
            </h2>
            <h2 className={cn("rc-second mt-2 font-display text-h1 text-muted-foreground")}>
              {realityCheck.secondHeadline}
            </h2>
            <p className="rc-body mt-8 text-body-lg text-muted-foreground">{realityCheck.body}</p>
            <div className="rc-cta mt-10">
              <Button variant="ghost">{realityCheck.cta}</Button>
            </div>
          </>
        )}
      </div>
    </section>
  );
}
