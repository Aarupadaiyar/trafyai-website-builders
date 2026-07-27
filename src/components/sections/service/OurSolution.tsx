import { Reveal } from "@/components/Reveal";
import type { ServiceConfig } from "@/data/content/services";

export function OurSolution({ config }: { config: ServiceConfig }) {
  return (
    <section className="px-gutter py-section">
      <div className="mx-auto max-w-5xl">
        <Reveal>
          <h2 className="font-display text-h2 text-foreground max-w-2xl">
            {config.solution.headline}
          </h2>
        </Reveal>

        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-12">
          {config.solution.steps.map((step, i) => (
            <Reveal key={step.title} delay={(i % 3) * 0.1}>
              <div className="border-t border-border pt-5">
                <span className="text-caption text-accent-element">{String(i + 1).padStart(2, "0")}</span>
                <h3 className="mt-2 font-display text-h3 text-foreground">{step.title}</h3>
                <p className="mt-3 text-body-sm text-muted-foreground">{step.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
