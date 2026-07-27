import { useEffect, useRef, type JSX } from "react";
import { animate, useInView, useMotionValue, useMotionValueEvent } from "framer-motion";
import { usePrefersReducedMotion } from "@/lib/usePrefersReducedMotion";
import { cn } from "@/lib/utils";

type CountUpStatProps = {
  value: number;
  suffix?: string;
  label?: string;
  duration?: number;
  className?: string;
  valueClassName?: string;
};

function formatCount(raw: number) {
  return Math.round(raw).toLocaleString();
}

/**
 * Shared primitive: animates a number from 0 to `value` once, the moment it
 * scrolls into view. One-shot viewport trigger (Framer Motion `useInView`,
 * `once: true`), never GSAP, this has no scrubbing/pinning need.
 */
export function CountUpStat({
  value,
  suffix = "",
  label,
  duration = 1.6,
  className,
  valueClassName,
}: CountUpStatProps): JSX.Element {
  const containerRef = useRef<HTMLDivElement>(null);
  const digitRef = useRef<HTMLSpanElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-80px" });
  const reducedMotion = usePrefersReducedMotion();
  const count = useMotionValue(reducedMotion ? value : 0);
  const hasRun = useRef(false);

  useMotionValueEvent(count, "change", (latest) => {
    if (digitRef.current) digitRef.current.textContent = formatCount(latest);
  });

  useEffect(() => {
    if (!isInView || hasRun.current) return;
    hasRun.current = true;

    if (reducedMotion) {
      count.set(value);
      return;
    }

    const controls = animate(count, value, { duration, ease: [0.16, 1, 0.3, 1] });
    return () => controls.stop();
  }, [isInView, reducedMotion, value, duration, count]);

  return (
    <div ref={containerRef} className={cn("inline-flex flex-col items-start", className)}>
      <span className={cn("tabular-nums font-display text-display-l text-foreground leading-none", valueClassName)}>
        <span ref={digitRef}>{formatCount(reducedMotion ? value : 0)}</span>
        {suffix}
      </span>
      {label ? <span className="mt-1 text-body-sm text-muted-foreground">{label}</span> : null}
    </div>
  );
}
