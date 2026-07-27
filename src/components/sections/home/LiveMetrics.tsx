import type { JSX } from "react";
import { Reveal } from "@/components/Reveal";
import { CountUpStat } from "@/components/CountUpStat";
import { liveMetrics } from "@/data/content";

export function LiveMetrics(): JSX.Element {
  return (
    <section className="py-section px-gutter">
      <div className="mx-auto max-w-6xl">
        <div className="grid grid-cols-2 gap-10 lg:grid-cols-4">
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
