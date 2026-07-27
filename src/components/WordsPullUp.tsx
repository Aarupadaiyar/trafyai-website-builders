import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { usePrefersReducedMotion } from "@/lib/usePrefersReducedMotion";

type WordsPullUpProps = {
  text: string;
  className?: string;
  showAsterisk?: boolean;
  staggerDelay?: number;
};

/**
 * Splits `text` into words and pulls each one up from y:20 → 0 with a
 * staggered delay, triggered once when scrolled into view. `showAsterisk`
 * pins a superscript "*" to the last character of the final word.
 */
export function WordsPullUp({ text, className = "", showAsterisk = false, staggerDelay = 0.08 }: WordsPullUpProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const reducedMotion = usePrefersReducedMotion();
  const words = text.split(" ");
  const shouldShow = isInView || reducedMotion;

  return (
    <span ref={ref} className={className}>
      {words.map((word, i) => {
        const isLast = i === words.length - 1;
        return (
          <motion.span
            key={`${word}-${i}`}
            className="relative inline-block mr-[0.22em] last:mr-0"
            initial={reducedMotion ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
            animate={shouldShow ? { y: 0, opacity: 1 } : undefined}
            transition={{ duration: 0.7, delay: reducedMotion ? 0 : i * staggerDelay, ease: [0.16, 1, 0.3, 1] }}
          >
            {word}
            {isLast && showAsterisk && (
              <span className="absolute top-[0.65em] -right-[0.3em] text-[0.31em]" aria-hidden="true">
                *
              </span>
            )}
          </motion.span>
        );
      })}
    </span>
  );
}
