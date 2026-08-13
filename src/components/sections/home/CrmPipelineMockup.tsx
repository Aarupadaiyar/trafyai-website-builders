import type { CSSProperties } from "react";
import { CheckCircle2, Clock, TrendingUp } from "lucide-react";
import type { ServiceConfig } from "@/data/content";

type Deal = {
  company: string;
  initials: string;
  value: string;
  days: number;
};

type Column = {
  name: string;
  count: number;
  total: string;
  won?: boolean;
  deals: Deal[];
};

const COLUMNS: Column[] = [
  {
    name: "Qualified",
    count: 4,
    total: "$86K",
    deals: [
      { company: "Nova Retail Co", initials: "NR", value: "$18,400", days: 3 },
      { company: "Brightline Media", initials: "BM", value: "$12,900", days: 1 },
      { company: "Anchor Freight", initials: "AF", value: "$9,200", days: 6 },
    ],
  },
  {
    name: "Proposal",
    count: 3,
    total: "$142K",
    deals: [
      { company: "Fenwick Health", initials: "FH", value: "$54,000", days: 2 },
      { company: "Origin Labs", initials: "OL", value: "$38,500", days: 4 },
    ],
  },
  {
    name: "Negotiation",
    count: 2,
    total: "$196K",
    deals: [
      { company: "Beacon Systems", initials: "BS", value: "$118,000", days: 5 },
      { company: "Cursive Studio", initials: "CS", value: "$78,400", days: 2 },
    ],
  },
  {
    name: "Won",
    count: 2,
    total: "$94K",
    won: true,
    deals: [
      { company: "Halcyon Partners", initials: "HP", value: "$61,000", days: 0 },
      { company: "Meridian Foods", initials: "MF", value: "$33,000", days: 0 },
    ],
  },
];

export function CrmPipelineMockup({ service }: { service: ServiceConfig }) {
  const responseAfter =
    service.caseStudy.metrics.find((m) => m.label.toLowerCase().includes("response"))?.after ?? "4 hrs";
  const responseImprovement =
    service.resultsMetrics.find((m) => m.label.toLowerCase().includes("response"))?.value ?? "9x faster";

  return (
    <div
      style={{ "--accent-element": `var(--el-${service.element})` } as CSSProperties}
      className="relative"
    >
      <style>{`
        @keyframes crm-mock-float { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-8px); } }
        .crm-mock-float { animation: crm-mock-float 6s ease-in-out infinite; }
        @media (prefers-reduced-motion: reduce) {
          .crm-mock-float { animation: none; }
        }
      `}</style>

      <div className="flex flex-col gap-4 lg:relative lg:block lg:min-h-[560px]">
        {/* Main kanban board card */}
        <div className="w-full overflow-hidden rounded-2xl border border-border bg-surface shadow-e2 lg:absolute lg:top-0 lg:left-0 lg:w-[88%]">
          <div className="flex items-center justify-between border-b border-border px-5 py-3.5">
            <span className="text-body-sm font-medium text-foreground">Deal Pipeline</span>
            <span className="rounded-full bg-accent-element/15 px-3 py-1 text-caption font-semibold text-accent-element">
              Live
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

          <div className="grid grid-cols-1 gap-3 px-5 py-4 sm:grid-cols-2 lg:grid-cols-4">
            {COLUMNS.map((col) => (
              <div key={col.name} className="rounded-lg bg-muted p-2.5">
                <div className="flex items-center justify-between px-0.5">
                  <span className="flex items-center gap-1.5 text-body-sm font-medium text-foreground">
                    {col.won && <CheckCircle2 className="h-3.5 w-3.5 text-accent-element" strokeWidth={2} />}
                    {col.name}
                  </span>
                  <span className="text-caption text-muted-foreground">{col.count}</span>
                </div>
                <p className="px-0.5 text-caption font-semibold text-accent-element">{col.total}</p>

                <div className="mt-2 flex flex-col gap-2">
                  {col.deals.map((deal) => (
                    <div key={deal.company} className="rounded-md border border-border bg-surface p-2.5 shadow-e1">
                      <div className="flex items-center gap-2">
                        <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-accent-element/15 text-[10px] font-semibold text-accent-element">
                          {deal.initials}
                        </span>
                        <span className="truncate text-caption font-medium text-foreground">{deal.company}</span>
                      </div>
                      <div className="mt-1.5 flex items-center justify-between">
                        <span className="text-body-sm font-semibold text-foreground">{deal.value}</span>
                        {col.won ? (
                          <span className="text-caption font-medium text-accent-element">Closed</span>
                        ) : (
                          <span className="text-caption text-muted-foreground">{deal.days}d in stage</span>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Floating: response time satellite card */}
        <div className="crm-mock-float w-full max-w-xs rounded-xl border border-border bg-surface p-4 shadow-e2 lg:absolute lg:right-0 lg:bottom-6 lg:w-52">
          <span className="flex items-center gap-1.5 text-caption text-muted-foreground">
            <Clock className="h-3 w-3 text-accent-element" strokeWidth={2} />
            Avg. Response Time
          </span>
          <p className="mt-1 font-display text-h3 text-foreground">{responseAfter}</p>
          <p className="mt-1 flex items-center gap-1 text-caption font-medium text-accent-element">
            <TrendingUp className="h-3 w-3" strokeWidth={2} />
            {responseImprovement}
          </p>
        </div>
      </div>
    </div>
  );
}
