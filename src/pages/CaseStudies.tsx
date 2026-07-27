import { Link } from "react-router-dom";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { PageTransition } from "@/components/layout/PageTransition";
import { Reveal } from "@/components/Reveal";
import { CountUpStat } from "@/components/CountUpStat";
import { services } from "@/data/content";

function parseNumeric(raw: string): { value: number; suffix: string } | null {
  const match = /^(\d+(?:\.\d+)?)(\D*)$/.exec(raw.trim());
  if (!match) return null;
  return { value: Number(match[1]), suffix: match[2] };
}

export default function CaseStudies() {
  return (
    <PageTransition>
      <div className="pt-32 pb-section-lg px-gutter">
        <div className="mx-auto max-w-6xl">
          <Reveal className="max-w-2xl">
            <span className="text-caption uppercase tracking-[0.25em] text-signal">Case Studies</span>
            <h1 className="mt-4 font-display text-display-l text-foreground">
              Outcomes, not screenshots.
            </h1>
          </Reveal>

          <div className="mt-10 grid grid-cols-1 gap-8 lg:grid-cols-2">
            {services.map((service, i) => {
              const { caseStudy } = service;
              const metricsToShow = caseStudy.metrics.slice(0, 2);

              return (
                <Reveal key={service.slug} delay={(i % 2) * 0.1}>
                  <Link
                    to={`/solutions/${service.slug}#case-study`}
                    className="group flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-surface transition-colors hover:border-signal/60"
                  >
                    <img
                      src={service.image}
                      alt={`${service.name} case study`}
                      loading="lazy"
                      className="aspect-[4/3] w-full rounded-t-2xl object-cover"
                    />
                    <div className="flex flex-1 flex-col p-8">
                      <span className="text-caption uppercase tracking-wide text-muted-foreground">
                        {caseStudy.industry}
                      </span>
                      <h2 className="mt-3 font-display text-h2 text-foreground">{caseStudy.client}</h2>
                      <p className="mt-4 text-body text-muted-foreground">{caseStudy.summary}</p>

                      <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2">
                        {metricsToShow.map((metric) => {
                          const after = parseNumeric(metric.after);
                          return (
                            <div key={metric.label} className="border-l border-border pl-4">
                              <p className="text-caption uppercase tracking-wide text-muted-foreground">
                                {metric.label}
                              </p>
                              <div className="mt-2 flex items-baseline gap-2">
                                <span className="font-display text-body-lg text-muted-foreground opacity-60">
                                  {metric.before}
                                </span>
                                <ArrowRight className="h-3.5 w-3.5 shrink-0 text-muted-foreground" />
                                {after ? (
                                  <CountUpStat
                                    value={after.value}
                                    suffix={after.suffix}
                                    valueClassName="text-h3"
                                  />
                                ) : (
                                  <span className="font-display text-h3 text-signal">{metric.after}</span>
                                )}
                              </div>
                            </div>
                          );
                        })}
                      </div>

                      <blockquote className="mt-6 border-t border-border pt-5 text-body text-foreground italic">
                        &ldquo;{caseStudy.quote}&rdquo;
                      </blockquote>

                      <span className="mt-auto inline-flex items-center gap-2 pt-6 text-body-sm text-muted-foreground transition-colors group-hover:text-foreground">
                        Read the full story
                        <ArrowUpRight className="h-4 w-4" />
                      </span>
                    </div>
                  </Link>
                </Reveal>
              );
            })}
          </div>
        </div>
      </div>
    </PageTransition>
  );
}
