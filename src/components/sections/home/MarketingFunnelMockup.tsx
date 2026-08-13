import type { CSSProperties } from "react";
import { Filter, Target, TrendingDown } from "lucide-react";
import type { ServiceConfig } from "@/data/content";

type FunnelStage = { label: string; value: string; pct: number };

const FUNNEL_STAGES: FunnelStage[] = [
  { label: "Visitors", value: "128.4K", pct: 100 },
  { label: "Leads", value: "19.3K", pct: 68 },
  { label: "Qualified", value: "6.1K", pct: 44 },
  { label: "Customers", value: "1.2K", pct: 24 },
];

// Literal opacity classes (kept static so Tailwind's scanner can find them).
const STAGE_FILL = ["bg-accent-element/90", "bg-accent-element/70", "bg-accent-element/50", "bg-accent-element/30"];

type Channel = { name: string; spend: string; metricLabel: string; metricValue: string; widthPct: number };

const CHANNELS: Channel[] = [
  { name: "Google Ads", spend: "$18.4K", metricLabel: "ROAS", metricValue: "4.2x", widthPct: 100 },
  { name: "Meta Ads", spend: "$11.2K", metricLabel: "ROAS", metricValue: "3.6x", widthPct: 61 },
  { name: "Organic Search", spend: "$2.1K", metricLabel: "CAC", metricValue: "$6", widthPct: 11 },
];

// Trapezoid inset (percent from each edge) for a given visible width percent.
function inset(pct: number): number {
  return (100 - pct) / 2;
}

export function MarketingFunnelMockup({ service }: { service: ServiceConfig }) {
  const cac = service.caseStudy.metrics[0];
  const pipelineAccuracy = service.resultsMetrics[2] ?? service.resultsMetrics[0];

  return (
    <div style={{ "--accent-element": `var(--el-${service.element})` } as CSSProperties} className="relative">
      <style>{`
        @keyframes mkt-mock-float { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-8px); } }
        .mkt-mock-float { animation: mkt-mock-float 6s ease-in-out infinite; }
        .mkt-mock-float-delay { animation: mkt-mock-float 6s ease-in-out infinite 1.5s; }
        .mkt-mock-float-delay-2 { animation: mkt-mock-float 6s ease-in-out infinite 3s; }
        @media (prefers-reduced-motion: reduce) {
          .mkt-mock-float, .mkt-mock-float-delay, .mkt-mock-float-delay-2 { animation: none; }
        }
      `}</style>

      <div className="flex flex-col gap-4 lg:relative lg:block lg:min-h-[580px]">
        {/* Main card: KPI strip + funnel visualization */}
        <div className="w-full overflow-hidden rounded-2xl border border-border bg-surface shadow-e2 lg:absolute lg:top-0 lg:left-0 lg:w-[60%]">
          <div className="flex items-center justify-between border-b border-border px-5 py-3.5">
            <span className="flex items-center gap-1.5 text-body-sm font-medium text-foreground">
              <Filter className="h-3.5 w-3.5 text-accent-element" strokeWidth={2} />
              Growth Funnel
            </span>
            <span className="rounded-full bg-accent-element/15 px-3 py-1 text-caption font-semibold text-accent-element">
              This Month
            </span>
          </div>

          <div className="grid grid-cols-3 gap-px bg-border">
            {service.resultsMetrics.map((kpi) => (
              <div key={kpi.label} className="bg-surface px-4 py-3.5">
                <p className="text-caption leading-snug text-muted-foreground">{kpi.label}</p>
                <p className="mt-1 font-display text-h3 text-foreground">{kpi.value}</p>
              </div>
            ))}
          </div>

          <div className="px-5 py-4">
            <p className="mb-2 text-caption text-muted-foreground">Visitors to closed customers</p>
            <div className="flex flex-col gap-1">
              {FUNNEL_STAGES.map((stage, i) => (
                <div key={stage.label} className="flex items-center gap-3">
                  <span className="w-16 shrink-0 text-caption text-muted-foreground">{stage.label}</span>
                  <div className="relative h-11 flex-1">
                    <div
                      className={`absolute inset-0 ${STAGE_FILL[i] ?? STAGE_FILL[STAGE_FILL.length - 1]}`}
                      style={{
                        clipPath: `polygon(${inset(stage.pct)}% 0%, ${100 - inset(stage.pct)}% 0%, ${
                          100 - inset(FUNNEL_STAGES[i + 1]?.pct ?? stage.pct - 6)
                        }% 100%, ${inset(FUNNEL_STAGES[i + 1]?.pct ?? stage.pct - 6)}% 100%)`,
                      }}
                    />
                  </div>
                  <span className="w-14 shrink-0 text-right text-body-sm font-semibold text-foreground">
                    {stage.value}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="flex items-center justify-between border-t border-border px-5 py-3.5">
            <span className="text-caption text-muted-foreground">Visitor to customer conversion</span>
            <span className="flex items-center gap-1 text-caption font-semibold text-accent-element">
              <Target className="h-3 w-3" strokeWidth={2} />
              0.97%
            </span>
          </div>
        </div>

        {/* Floating: channel spend */}
        <div className="mkt-mock-float-delay w-full rounded-xl border border-border bg-surface p-4 shadow-e2 lg:absolute lg:top-6 lg:right-0 lg:w-64">
          <span className="text-caption text-muted-foreground">Channel Spend</span>
          <div className="mt-2.5 flex flex-col gap-2.5">
            {CHANNELS.map((ch) => (
              <div key={ch.name}>
                <div className="flex items-center justify-between gap-2">
                  <span className="text-caption font-medium text-foreground">{ch.name}</span>
                  <span className="text-caption font-semibold text-accent-element">
                    {ch.metricLabel} {ch.metricValue}
                  </span>
                </div>
                <div className="mt-1 flex items-center gap-2">
                  <div className="h-1.5 flex-1 overflow-hidden rounded-full bg-border">
                    <div className="h-full rounded-full bg-accent-element" style={{ width: `${ch.widthPct}%` }} />
                  </div>
                  <span className="shrink-0 text-caption text-muted-foreground">{ch.spend}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Floating: CAC trend */}
        <div className="mkt-mock-float w-full rounded-xl border border-border bg-surface p-3.5 shadow-e2 lg:absolute lg:bottom-24 lg:right-3 lg:w-56">
          <div className="flex items-center justify-between">
            <span className="text-caption text-muted-foreground">{cac?.label ?? "Customer acquisition cost"}</span>
            <span className="flex items-center gap-1 text-caption font-semibold text-accent-element">
              <TrendingDown className="h-3 w-3" strokeWidth={2} />
              -53%
            </span>
          </div>
          <p className="mt-1 font-display text-h3 text-foreground">{cac?.after ?? "$29"}</p>
          <p className="text-caption text-muted-foreground">from {cac?.before ?? "$62"} last quarter</p>
          <svg viewBox="0 0 100 32" className="mt-2 h-8 w-full" preserveAspectRatio="none">
            <polyline
              points="0,6 12,9 24,8 36,14 48,13 60,19 72,18 84,24 100,27"
              fill="none"
              stroke="hsl(var(--accent-element))"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>

        {/* Floating: pipeline attribution highlight */}
        <div className="mkt-mock-float-delay-2 w-full rounded-xl border border-border bg-surface p-3.5 shadow-e2 lg:absolute lg:bottom-0 lg:left-10 lg:w-52">
          <span className="flex items-center gap-1.5 text-caption text-muted-foreground">
            <Target className="h-3 w-3 text-accent-element" strokeWidth={2} />
            {pipelineAccuracy.label}
          </span>
          <p className="mt-1 font-display text-h3 text-foreground">{pipelineAccuracy.value}</p>
          <p className="mt-1 text-caption font-medium text-accent-element">{service.tagline}</p>
        </div>
      </div>
    </div>
  );
}
