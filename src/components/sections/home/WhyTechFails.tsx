import { Reveal } from "@/components/Reveal";
import { whyTechFails } from "@/data/content";

export function WhyTechFails() {
  return (
    <section aria-labelledby="why-tech-fails-heading" className="relative bg-foreground px-gutter py-section-lg">
      <div className="mx-auto max-w-5xl">
        <Reveal>
          <span className="mb-4 block text-center text-caption uppercase tracking-[0.25em] text-signal">
            Why Tech Fails
          </span>
          <h2
            id="why-tech-fails-heading"
            className="mx-auto max-w-3xl text-center font-display text-display-l text-background"
          >
            &ldquo;{whyTechFails.quote}&rdquo;
          </h2>
        </Reveal>

        <div className="mt-16 grid gap-12 md:grid-cols-2 md:gap-16">
          <Reveal delay={0.1}>
            <div>
              <span className="text-caption uppercase tracking-[0.25em] text-background/60">Typical Agency</span>
              <ol className="mt-6 flex flex-wrap items-center gap-x-3 gap-y-2 text-body text-background/70">
                {whyTechFails.genericAgency.map((step, i) => (
                  <li key={step} className="flex items-center gap-3">
                    <span>{step}</span>
                    {i < whyTechFails.genericAgency.length - 1 && (
                      <span className="text-background/30">&mdash;</span>
                    )}
                  </li>
                ))}
              </ol>
            </div>
          </Reveal>

          <div>
            <span className="text-caption uppercase tracking-[0.25em] text-signal">Trafy</span>
            <ol className="mt-6 border-l border-background/20 pl-6">
              {whyTechFails.trafy.map((step, i) => (
                <Reveal key={step} delay={0.15 + i * 0.08}>
                  <li className="relative pb-6 last:pb-0">
                    <span className="absolute -left-6 top-1.5 h-2.5 w-2.5 -translate-x-1/2 rounded-full bg-signal shadow-glow-signal" />
                    <span className="text-body text-background">{step}</span>
                  </li>
                </Reveal>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}
