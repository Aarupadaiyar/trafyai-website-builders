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
    <section className="px-gutter py-section">
      <div className="mx-auto max-w-5xl grid grid-cols-1 sm:grid-cols-3 gap-10">
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
    </section>
  );
}
