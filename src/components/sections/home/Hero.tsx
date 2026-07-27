import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { WordsPullUp } from "@/components/WordsPullUp";
import { usePrefersReducedMotion } from "@/lib/usePrefersReducedMotion";
import { hero } from "@/data/content";

const EASE = [0.16, 1, 0.3, 1] as const;

export function Hero() {
  const reducedMotion = usePrefersReducedMotion();

  return (
    <section
      id="top"
      aria-labelledby="hero-heading"
      className="h-screen w-full bg-black p-4 md:p-6"
      style={{ fontFamily: "'Almarai', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif" }}
    >
      <div className="relative h-full w-full overflow-hidden rounded-2xl md:rounded-[2rem]">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 h-full w-full object-cover"
          src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260405_170732_8a9ccda6-5cff-4628-b164-059c500a2b41.mp4"
        />
        <div className="noise-overlay pointer-events-none absolute inset-0 opacity-[0.7] mix-blend-overlay" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/60" />

        <div className="absolute inset-x-0 bottom-0 grid grid-cols-12 items-end gap-4 p-6 md:p-10">
          <h1 id="hero-heading" className="col-span-12 md:col-span-8">
            <WordsPullUp
              text="Trafy"
              className="block font-medium leading-[0.85] tracking-[-0.07em] text-[26vw] text-[#E1E0CC] sm:text-[24vw] md:text-[22vw] lg:text-[20vw] xl:text-[19vw] 2xl:text-[20vw]"
            />
            <span className="sr-only">: {hero.headline}</span>
          </h1>

          <div className="col-span-12 flex flex-col gap-6 md:col-span-4 md:pb-[1.5vw]">
            <motion.span
              initial={reducedMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: reducedMotion ? 0 : 0.35, ease: EASE }}
              className="text-caption uppercase tracking-[0.25em] text-signal"
            >
              {hero.eyebrow}
            </motion.span>
            <motion.p
              initial={reducedMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: reducedMotion ? 0 : 0.5, ease: EASE }}
              className="text-sm leading-[1.3] text-[#DEDBC8]/70 sm:text-base md:text-lg"
            >
              {hero.subhead}
            </motion.p>

            <motion.div
              initial={reducedMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: reducedMotion ? 0 : 0.7, ease: EASE }}
              className="flex flex-wrap items-center gap-4"
            >
              <Link
                to="/#final-cta"
                className="group inline-flex items-center gap-2 rounded-full bg-[#DEDBC8] py-2 pl-7 pr-1.5 text-base font-medium text-black transition-[gap] duration-300 hover:gap-3 sm:text-lg"
              >
                {hero.primaryCta}
                <span
                  aria-hidden="true"
                  className="flex h-9 w-9 items-center justify-center rounded-full bg-black transition-transform duration-300 group-hover:scale-110 sm:h-10 sm:w-10"
                >
                  <ArrowRight className="h-4 w-4 text-[#E1E0CC]" />
                </span>
              </Link>
              <Link
                to="/#process"
                className="text-sm text-[#DEDBC8]/80 underline-offset-4 transition-colors hover:text-[#E1E0CC] hover:underline sm:text-base"
              >
                {hero.secondaryCta}
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
