import { Reveal } from "@/components/Reveal";
import type { ServiceConfig } from "@/data/content/services";

export function ServiceTechnology({ config }: { config: ServiceConfig }) {
  const groups = config.technology.reduce<Record<string, string[]>>((acc, item) => {
    (acc[item.category] ??= []).push(item.name);
    return acc;
  }, {});

  return (
    <section className="px-gutter py-section" aria-labelledby="technology-heading">
      <div className="mx-auto max-w-5xl">
        <Reveal>
          <span className="block text-caption uppercase tracking-[0.25em] text-accent-element mb-5">
            Technology
          </span>
          <h2 id="technology-heading" className="font-display text-h2 text-foreground">
            The technology underneath.
          </h2>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {Object.entries(groups).map(([category, names], i) => (
            <Reveal key={category} delay={i * 0.08}>
              <div>
                <span className="text-caption uppercase tracking-[0.2em] text-muted-foreground">
                  {category}
                </span>
                <div className="mt-4 flex flex-wrap gap-2">
                  {names.map((name) => (
                    <span
                      key={name}
                      className="rounded-full border border-border px-4 py-1.5 text-body-sm text-foreground"
                    >
                      {name}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
