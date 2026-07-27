import { Reveal } from "@/components/Reveal";
import { CountUpStat } from "@/components/CountUpStat";
import type { ServiceConfig } from "@/data/content/services";

function parseLeadingNumber(raw: string): { value: number; suffix: string } | null {
  const match = raw.match(/^(\d+(?:\.\d+)?)(\D*)$/);
  if (!match) return null;
  return { value: parseFloat(match[1]), suffix: match[2] };
}

export function ServiceResults({ config }: { config: ServiceConfig }) {
  return (
    <section className="px-gutter py-section" aria-labelledby="results-heading">
      <div className="mx-auto max-w-5xl">
        <Reveal>
          <span className="block text-caption uppercase tracking-[0.25em] text-accent-element mb-5">
            Results
          </span>
          <h2 id="results-heading" className="font-display text-h2 text-foreground max-w-2xl">
            Results that speak for themselves.
          </h2>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-8">
          {config.resultsMetrics.map((metric, i) => {
            const parsed = parseLeadingNumber(metric.value);
            return (
              <Reveal key={metric.label} delay={i * 0.1}>
                {parsed ? (
                  <CountUpStat
                    value={parsed.value}
                    suffix={parsed.suffix}
                    label={metric.label}
                    valueClassName="text-accent-element"
                  />
                ) : (
                  <div>
                    <div className="font-display text-display-l text-accent-element leading-none">
                      {metric.value}
                    </div>
                    <div className="mt-3 text-body-sm text-muted-foreground">{metric.label}</div>
                  </div>
                )}
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
