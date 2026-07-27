import type { JSX, MouseEvent } from "react";
import { Reveal } from "@/components/Reveal";
import { Button } from "@/components/ui/button";
import { getLenis } from "@/lib/useLenis";
import { brand, finalCta } from "@/data/content";

export function FinalCta(): JSX.Element {
  const handleScrollToProcess = (e: MouseEvent<HTMLAnchorElement>) => {
    const lenis = getLenis();
    if (lenis) {
      e.preventDefault();
      lenis.scrollTo("#process");
    }
  };

  return (
    <section
      id="final-cta"
      aria-labelledby="final-cta-heading"
      className="relative overflow-hidden py-section-lg px-gutter"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-1/2 h-[36rem] w-[36rem] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-30 blur-[120px]"
        style={{
          background:
            "radial-gradient(circle, hsl(var(--signal) / 0.5) 0%, hsl(var(--signal) / 0.15) 45%, transparent 70%)",
          animation: "final-cta-drift 14s ease-in-out infinite",
        }}
      />
      <style>{`
        @keyframes final-cta-drift {
          0%, 100% { transform: translate(-50%, -50%) scale(1); }
          50% { transform: translate(-48%, -53%) scale(1.12); }
        }
        @media (prefers-reduced-motion: reduce) {
          #final-cta [aria-hidden] { animation: none !important; }
        }
      `}</style>

      <div className="relative mx-auto max-w-3xl text-center">
        <Reveal>
          <span className="mb-4 block text-caption uppercase tracking-[0.25em] text-signal">Get Started</span>
          <h2 id="final-cta-heading" className="font-display text-display-l text-foreground">
            {finalCta.headline}
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-body-lg text-muted-foreground">{finalCta.body}</p>
        </Reveal>

        <Reveal delay={0.15} className="mt-10 flex flex-wrap items-center justify-center gap-5">
          <Button asChild variant="glass" size="lg">
            <a href={`mailto:${brand.email}`}>{finalCta.primaryCta}</a>
          </Button>
          <a
            href="#process"
            onClick={handleScrollToProcess}
            className="text-body text-foreground underline decoration-border underline-offset-4 transition-colors hover:decoration-signal"
          >
            {finalCta.secondaryCta}
          </a>
        </Reveal>
      </div>
    </section>
  );
}
