import type { JSX } from "react";
import { Reveal } from "@/components/Reveal";
import { CountUpStat } from "@/components/CountUpStat";
import { liveMetrics } from "@/data/content";

export function LiveMetrics(): JSX.Element {
  return (
    <section aria-labelledby="live-metrics-heading" className="py-section px-gutter">
      <div className="mx-auto max-w-6xl">
        <Reveal className="mb-10 max-w-2xl">
          <span className="text-caption uppercase tracking-[0.25em] text-signal">Live Metrics</span>
          <h2 id="live-metrics-heading" className="mt-4 font-display text-h1 text-foreground">
            The numbers behind the work.
          </h2>
        </Reveal>

        <div className="grid grid-cols-2 gap-8 lg:grid-cols-4">
          {liveMetrics.map((metric, i) => (
            <Reveal key={metric.label} delay={i * 0.08} className="text-center lg:text-left">
              <CountUpStat
                value={metric.value}
                suffix={metric.suffix}
                label={metric.label}
                className="font-display text-display-l text-foreground"
              />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
