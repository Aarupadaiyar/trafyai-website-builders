import { Reveal } from "@/components/Reveal";
import type { ServiceConfig } from "@/data/content/services";

export function WhyOthersFail({ config }: { config: ServiceConfig }) {
  return (
    <section className="px-gutter py-section" aria-labelledby="why-others-fail-heading">
      <div className="mx-auto max-w-5xl">
        <Reveal>
          <span className="block text-caption uppercase tracking-[0.25em] text-accent-element mb-5 text-center">
            The Difference
          </span>
          <h2
            id="why-others-fail-heading"
            className="font-display text-h2 text-foreground max-w-2xl mx-auto text-center"
          >
            {config.whyOthersFail.headline}
          </h2>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-[1fr_auto_1fr] gap-8 md:gap-6 items-start">
          <Reveal delay={0.1}>
            <div>
              <span className="text-caption uppercase tracking-[0.25em] text-muted-foreground">
                Typical Agency
              </span>
              <ol className="mt-6 space-y-4">
                {config.whyOthersFail.genericAgency.map((step, i) => (
                  <li key={step} className="flex items-center gap-4 text-body text-muted-foreground/80">
                    <span className="text-caption text-muted-foreground/50">{String(i + 1).padStart(2, "0")}</span>
                    {step}
                  </li>
                ))}
              </ol>
            </div>
          </Reveal>

          <div className="hidden md:block w-px h-full bg-border mx-auto" />

          <Reveal delay={0.2}>
            <div>
              <span className="text-caption uppercase tracking-[0.25em] text-accent-element">
                Stat6
              </span>
              <ol className="mt-6 space-y-4">
                {config.whyOthersFail.trafy.map((step, i) => (
                  <li key={step} className="flex items-center gap-4 text-body text-foreground">
                    <span className="text-caption text-accent-element">{String(i + 1).padStart(2, "0")}</span>
                    {step}
                  </li>
                ))}
              </ol>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
