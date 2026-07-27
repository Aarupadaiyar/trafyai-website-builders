import { Navigate, Link, useParams } from "react-router-dom";
import { PageTransition } from "@/components/layout/PageTransition";
import { Reveal } from "@/components/Reveal";
import { CountUpStat } from "@/components/CountUpStat";
import { Button } from "@/components/ui/button";
import { getIndustryBySlug, services } from "@/data/content";

/** Matches a value that is entirely a leading number plus a trailing
 * non-numeric suffix (e.g. "44%", "9x faster"), so it can safely be
 * animated with CountUpStat. Anything messier falls back to plain styled text. */
function parseLeadingNumber(raw: string): { value: number; suffix: string } | null {
  const match = raw.match(/^(\d+(?:\.\d+)?)(\D*)$/);
  if (!match) return null;
  return { value: parseFloat(match[1]), suffix: match[2] };
}

export default function IndustryPage() {
  const { slug } = useParams<{ slug: string }>();
  const industry = slug ? getIndustryBySlug(slug) : undefined;

  if (!industry) return <Navigate to="/industries" replace />;

  const relevantServices = services.filter((service) =>
    industry.relevantServiceSlugs.includes(service.slug)
  );

  return (
    <PageTransition>
      <div className="min-h-screen">
        {/* Hero */}
        <section aria-labelledby="industry-hero-heading" className="px-gutter pb-section pt-32">
          <div className="mx-auto max-w-4xl">
            <Reveal>
              <span className="text-caption uppercase tracking-[0.25em] text-signal">Industry</span>
              <h1 id="industry-hero-heading" className="mt-4 font-display text-display-l text-foreground">
                {industry.name}
              </h1>
              <p className="mt-6 text-body-lg text-muted-foreground">{industry.tagline}</p>
            </Reveal>

            <Reveal delay={0.1} className="mt-8">
              <div className="aspect-[16/9] w-full overflow-hidden rounded-xl shadow-e3">
                <img
                  src={industry.image}
                  alt={industry.name}
                  loading="lazy"
                  className="h-full w-full object-cover"
                />
              </div>
            </Reveal>
          </div>
        </section>

        {/* Description */}
        <section aria-labelledby="industry-overview-heading" className="px-gutter py-section">
          <div className="mx-auto max-w-4xl">
            <Reveal>
              <span className="text-caption uppercase tracking-[0.25em] text-signal">Overview</span>
              <h2 id="industry-overview-heading" className="sr-only">
                {industry.name} overview
              </h2>
              <p className="mt-4 text-body-lg leading-relaxed text-foreground">
                {industry.description}
              </p>
            </Reveal>
          </div>
        </section>

        {/* Challenges */}
        <section aria-labelledby="industry-challenges-heading" className="bg-secondary/40 px-gutter py-section">
          <div className="mx-auto max-w-4xl">
            <Reveal className="mb-8 max-w-2xl">
              <span className="text-caption uppercase tracking-[0.25em] text-signal">
                What we see
              </span>
              <h2 id="industry-challenges-heading" className="mt-4 font-display text-h2 text-foreground">
                Where {industry.name.toLowerCase()} businesses lose ground.
              </h2>
            </Reveal>

            <div className="space-y-4">
              {industry.challenges.map((challenge, i) => (
                <Reveal key={challenge} delay={i * 0.08}>
                  <div className="flex items-start gap-5 rounded-lg border border-border bg-surface p-6">
                    <span className="font-display text-h3 leading-none text-signal">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <p className="text-body text-foreground">{challenge}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* Relevant Services */}
        {relevantServices.length > 0 && (
          <section aria-labelledby="industry-services-heading" className="px-gutter py-section">
            <div className="mx-auto max-w-4xl">
              <Reveal className="mb-8 max-w-2xl">
                <span className="text-caption uppercase tracking-[0.25em] text-signal">
                  Where we help
                </span>
                <h2 id="industry-services-heading" className="mt-4 font-display text-h2 text-foreground">
                  Relevant services for {industry.name.toLowerCase()}.
                </h2>
              </Reveal>

              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                {relevantServices.map((service, i) => (
                  <Reveal key={service.slug} delay={i * 0.07}>
                    <Link
                      to={`/solutions/${service.slug}`}
                      className="block h-full"
                      aria-label={`Learn more about our ${service.name} service`}
                    >
                      <div className="h-full rounded-lg border border-border bg-surface p-6 transition-colors duration-300 hover:border-signal/30">
                        <span className="text-caption text-muted-foreground">{service.index}</span>
                        <h3 className="mt-2 font-display text-h3 text-foreground">{service.name}</h3>
                        <p className="mt-3 text-body-sm text-muted-foreground">{service.tagline}</p>
                      </div>
                    </Link>
                  </Reveal>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Metrics */}
        <section aria-labelledby="industry-metrics-heading" className="bg-secondary/40 px-gutter py-section">
          <div className="mx-auto max-w-4xl">
            <Reveal className="mb-8 max-w-2xl">
              <span className="text-caption uppercase tracking-[0.25em] text-signal">
                The results
              </span>
              <h2 id="industry-metrics-heading" className="mt-4 font-display text-h2 text-foreground">
                Numbers that hold up.
              </h2>
            </Reveal>

            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              {industry.metrics.map((metric, i) => {
                const parsed = parseLeadingNumber(metric.value);
                return (
                  <Reveal key={metric.label} delay={i * 0.1}>
                    {parsed ? (
                      <CountUpStat
                        value={parsed.value}
                        suffix={parsed.suffix}
                        label={metric.label}
                        valueClassName="text-foreground"
                      />
                    ) : (
                      <div>
                        <div className="font-display text-display-l leading-none text-foreground">
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

        {/* CTA */}
        <section aria-labelledby="industry-cta-heading" className="px-gutter py-section-lg">
          <Reveal className="mx-auto max-w-2xl text-center">
            <span className="text-caption uppercase tracking-[0.25em] text-signal">Get started</span>
            <h2 id="industry-cta-heading" className="mt-4 font-display text-h1 text-foreground">
              Let's talk about {industry.name.toLowerCase()}.
            </h2>
            <p className="mt-6 text-body-lg text-muted-foreground">
              Tell us where the friction is — we'll show you how we'd build around it.
            </p>
            <div className="mt-8 flex justify-center">
              <Button variant="glass" size="lg" asChild>
                <Link to="/contact">Talk to us about {industry.name}</Link>
              </Button>
            </div>
          </Reveal>
        </section>
      </div>
    </PageTransition>
  );
}
