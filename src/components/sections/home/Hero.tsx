import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { HeroProductMockup } from "./HeroProductMockup";
import { usePrefersReducedMotion } from "@/lib/usePrefersReducedMotion";
import { hero } from "@/data/content";

const EASE = [0.16, 1, 0.3, 1] as const;

export function Hero() {
  const reducedMotion = usePrefersReducedMotion();
  const headlineParts = hero.headline.split(hero.emphasis);

  return (
    <section
      id="top"
      aria-labelledby="hero-heading"
      className="w-full bg-black px-gutter pt-28 pb-16 lg:pt-32 lg:pb-24"
    >
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-12">
        {/* Left: who we are, what we do, why us */}
        <div>
          <motion.span
            initial={reducedMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: EASE }}
            className="inline-block text-caption uppercase tracking-[0.25em] text-signal"
          >
            {hero.eyebrow}
          </motion.span>

          <motion.h1
            id="hero-heading"
            initial={reducedMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: reducedMotion ? 0 : 0.1, ease: EASE }}
            className="mt-5 font-display text-display-l leading-[1.02] text-white"
          >
            {headlineParts[0]}
            <span className="text-signal">{hero.emphasis}</span>
            {headlineParts[1]}
          </motion.h1>

          <motion.p
            initial={reducedMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: reducedMotion ? 0 : 0.2, ease: EASE }}
            className="mt-6 max-w-xl text-body-lg text-white/70"
          >
            {hero.subhead}
          </motion.p>

          <motion.div
            initial={reducedMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: reducedMotion ? 0 : 0.3, ease: EASE }}
            className="mt-6 flex flex-wrap gap-2"
          >
            {hero.pills.map((pill) => (
              <span
                key={pill}
                className="rounded-full border border-white/15 px-3 py-1.5 text-caption font-medium text-white/80"
              >
                {pill}
              </span>
            ))}
          </motion.div>

          <motion.div
            initial={reducedMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: reducedMotion ? 0 : 0.4, ease: EASE }}
            className="mt-8 flex flex-wrap items-center gap-4"
          >
            <Link
              to="/solutions"
              className="liquid-glass group inline-flex items-center gap-2 rounded-full py-3 pl-6 pr-2 text-body-sm font-medium text-white transition-[gap] duration-300 hover:gap-3 hover:shadow-glow-signal"
            >
              {hero.primaryCta}
              <span
                aria-hidden="true"
                className="flex h-8 w-8 items-center justify-center rounded-full bg-signal transition-transform duration-300 group-hover:scale-110"
              >
                <ArrowRight className="h-3.5 w-3.5 text-black" />
              </span>
            </Link>
            <Link
              to="/contact"
              className="rounded-full border border-white/20 px-6 py-3 text-body-sm font-medium text-white transition-colors hover:border-signal hover:text-signal"
            >
              {hero.secondaryCta}
            </Link>
          </motion.div>

          <motion.div
            initial={reducedMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: reducedMotion ? 0 : 0.5, ease: EASE }}
            className="mt-10 flex flex-wrap gap-8 border-t border-white/10 pt-6"
          >
            {hero.stats.map((stat) => (
              <div key={stat.label}>
                <p className="font-display text-h3 text-white">{stat.value}</p>
                <p className="text-caption text-white/50">{stat.label}</p>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Right: animated ERP software dashboard */}
        <HeroProductMockup />
      </div>
    </section>
  );
}
