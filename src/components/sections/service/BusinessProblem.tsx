import { Reveal } from "@/components/Reveal";
import type { ServiceConfig } from "@/data/content/services";

export function BusinessProblem({ config }: { config: ServiceConfig }) {
  return (
    <section className="px-gutter py-section">
      <Reveal className="mx-auto max-w-3xl text-center">
        <h2 className="font-display text-h2 text-foreground">{config.problem.headline}</h2>
        <p className="mt-6 text-body-lg text-muted-foreground">{config.problem.body}</p>
      </Reveal>
    </section>
  );
}
