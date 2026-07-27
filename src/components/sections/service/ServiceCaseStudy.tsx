import { Reveal } from "@/components/Reveal";
import { CountUpStat } from "@/components/CountUpStat";
import type { ServiceConfig } from "@/data/content/services";

function parseLeadingNumber(raw: string): { value: number; suffix: string } | null {
  const match = raw.match(/^(\d+(?:\.\d+)?)(\D*)$/);
  if (!match) return null;
  return { value: parseFloat(match[1]), suffix: match[2] };
}

export function ServiceCaseStudy({ config }: { config: ServiceConfig }) {
  const { caseStudy } = config;

  return (
    <section id="case-study" className="px-gutter py-section bg-secondary/40" aria-labelledby="case-study-heading">
      <div className="mx-auto max-w-5xl">
        <Reveal>
          <span className="block text-caption uppercase tracking-[0.25em] text-accent-element">
            Case Study: {caseStudy.industry}
          </span>
          <h2 id="case-study-heading" className="mt-4 font-display text-h2 text-foreground max-w-2xl">
            {caseStudy.client}
          </h2>
          <p className="mt-6 max-w-2xl text-body-lg text-muted-foreground">{caseStudy.summary}</p>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-8">
          {caseStudy.metrics.map((metric, i) => {
            const after = parseLeadingNumber(metric.after);
            return (
              <Reveal key={metric.label} delay={i * 0.1}>
                <div>
                  <div className="flex items-baseline gap-3">
                    <span className="text-body text-muted-foreground/60 line-through">
                      {metric.before}
                    </span>
                    <span className="text-muted-foreground/40">&rarr;</span>
                  </div>
                  {after ? (
                    <CountUpStat
                      value={after.value}
                      suffix={after.suffix}
                      label={metric.label}
                      valueClassName="text-accent-element"
                    />
                  ) : (
                    <div>
                      <div className="font-display text-display-l text-accent-element leading-none">
                        {metric.after}
                      </div>
                      <div className="mt-3 text-body-sm text-muted-foreground">{metric.label}</div>
                    </div>
                  )}
                </div>
              </Reveal>
            );
          })}
        </div>

        <Reveal delay={0.2}>
          <blockquote className="mt-12 max-w-2xl border-l-2 border-accent-element pl-6 font-display text-h3 text-foreground">
            &ldquo;{caseStudy.quote}&rdquo;
          </blockquote>
        </Reveal>
      </div>
    </section>
  );
}
