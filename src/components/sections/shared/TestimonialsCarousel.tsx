import { useEffect, useState } from "react";
import type { JSX } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { usePrefersReducedMotion } from "@/lib/usePrefersReducedMotion";
import { cn } from "@/lib/utils";

export type TestimonialItem = { quote: string; author: string; role: string };
type TestimonialsCarouselProps = { items: TestimonialItem[] };

const AUTO_ADVANCE_MS = 7000;

export function TestimonialsCarousel({ items }: TestimonialsCarouselProps): JSX.Element {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    if (paused || prefersReducedMotion || items.length <= 1) return;
    const timer = setInterval(() => {
      setIndex((i) => (i + 1) % items.length);
    }, AUTO_ADVANCE_MS);
    return () => clearInterval(timer);
  }, [paused, prefersReducedMotion, items.length]);

  if (items.length === 0) {
    return <></>;
  }

  const current = items[index];

  return (
    <div
      className="relative mx-auto flex min-h-[40vh] max-w-4xl flex-col items-center justify-center text-center"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <AnimatePresence mode="wait">
        <motion.div
          key={index}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <p className="font-display text-h1 leading-tight text-foreground md:text-display-l">
            &ldquo;{current.quote}&rdquo;
          </p>
          <div className="mt-8">
            <p className="text-body text-foreground">{current.author}</p>
            <p className="mt-1 text-body-sm text-muted-foreground">{current.role}</p>
          </div>
        </motion.div>
      </AnimatePresence>

      {items.length > 1 && (
        <div className="mt-12 flex items-center gap-3">
          {items.map((item, i) => (
            <button
              key={item.author}
              type="button"
              aria-label={`Show testimonial from ${item.author}`}
              onClick={() => setIndex(i)}
              className={cn(
                "h-1.5 rounded-full transition-all duration-300",
                i === index ? "w-8 bg-signal" : "w-1.5 bg-border"
              )}
            />
          ))}
        </div>
      )}
    </div>
  );
}
