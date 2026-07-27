import { Reveal } from "@/components/Reveal";
import type { ServiceConfig } from "@/data/content/services";

export function BusinessProblem({ config }: { config: ServiceConfig }) {
  return (
    <section className="px-gutter py-section" aria-labelledby="problem-heading">
      <Reveal className="mx-auto max-w-3xl text-center">
        <span className="block text-caption uppercase tracking-[0.25em] text-accent-element mb-5">
          The Problem
        </span>
        <h2 id="problem-heading" className="font-display text-h2 text-foreground">
          {config.problem.headline}
        </h2>
        <p className="mt-6 text-body-lg text-muted-foreground">{config.problem.body}</p>
      </Reveal>
    </section>
  );
}
