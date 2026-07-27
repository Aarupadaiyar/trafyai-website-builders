import { Reveal } from "@/components/Reveal";
import { CountUpStat } from "@/components/CountUpStat";
import type { ServiceConfig } from "@/data/content/services";

/** Matches a value that is entirely a leading number plus a trailing
 * non-numeric suffix (e.g. "68%", "3.2s", "40+"), so it can safely be
 * animated with CountUpStat. Anything messier ("1 in 4", "9 days") falls
 * back to plain styled text. */
function parseLeadingNumber(raw: string): { value: number; suffix: string } | null {
  const match = raw.match(/^(\d+(?:\.\d+)?)(\D*)$/);
  if (!match) return null;
  return { value: parseFloat(match[1]), suffix: match[2] };
}

export function CostOfInaction({ config }: { config: ServiceConfig }) {
  return (
    <section className="px-gutter py-section bg-secondary/40" aria-labelledby="cost-heading">
      <div className="mx-auto max-w-5xl">
        <Reveal>
          <span className="block text-caption uppercase tracking-[0.25em] text-accent-element mb-5">
            The Cost
          </span>
          <h2 id="cost-heading" className="font-display text-h2 text-foreground max-w-2xl">
            {config.costOfInaction.headline}
          </h2>
        </Reveal>
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-8">
          {config.costOfInaction.stats.map((stat, i) => {
            const parsed = parseLeadingNumber(stat.value);
            return (
              <Reveal key={stat.label} delay={i * 0.1}>
                {parsed ? (
                  <CountUpStat
                    value={parsed.value}
                    suffix={parsed.suffix}
                    label={stat.label}
                    valueClassName="text-accent-element"
                  />
                ) : (
                  <div>
                    <div className="font-display text-display-l text-accent-element leading-none">
                      {stat.value}
                    </div>
                    <div className="mt-3 text-body-sm text-muted-foreground">{stat.label}</div>
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
