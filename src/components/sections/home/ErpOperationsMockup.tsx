import type { CSSProperties } from "react";
import { CheckCircle2, Circle, Database } from "lucide-react";
import type { ServiceConfig } from "@/data/content";

type RowStatus = "Complete" | "In Progress" | "Pending";

type TableRow = {
  department: string;
  detail: string;
  status: RowStatus;
  value: string;
};

const STATUS_STYLES: Record<RowStatus, string> = {
  Complete: "bg-accent-element/15 text-accent-element",
  "In Progress": "bg-foreground/10 text-foreground",
  Pending: "bg-muted-foreground/10 text-muted-foreground",
};

const TABLE_ROWS: TableRow[] = [
  { department: "Finance Ledger", detail: "Monthly close", status: "Complete", value: "2 day close" },
  { department: "Inventory Control", detail: "Warehouse A to C", status: "Complete", value: "99.4% accy" },
  { department: "Production Tracking", detail: "Line 3 batch sync", status: "In Progress", value: "58%" },
  { department: "HR Onboarding", detail: "Batch #12", status: "In Progress", value: "64%" },
  { department: "Procurement", detail: "Vendor migration", status: "Pending", value: "12%" },
  { department: "Reporting & Analytics", detail: "Cross-department feed", status: "Complete", value: "Real-time" },
];

export function ErpOperationsMockup({ service }: { service: ServiceConfig }) {
  const steps = service.solution.steps.slice(0, 6);

  return (
    <div
      style={{ "--accent-element": `var(--el-${service.element})` } as CSSProperties}
      className="relative"
    >
      <style>{`
        @keyframes erp-mock-float { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-8px); } }
        .erp-mock-float { animation: erp-mock-float 6s ease-in-out infinite; }
        .erp-mock-float-delay { animation: erp-mock-float 6s ease-in-out infinite 1.6s; }
        @media (prefers-reduced-motion: reduce) {
          .erp-mock-float, .erp-mock-float-delay { animation: none; }
        }
      `}</style>

      <div className="flex flex-col gap-4 lg:relative lg:block lg:min-h-[560px]">
        {/* Main console card */}
        <div className="w-full overflow-hidden rounded-2xl border border-border bg-surface shadow-e2 lg:absolute lg:top-0 lg:right-0 lg:w-[92%] lg:shadow-e3">
          <div className="flex items-center justify-between border-b border-border px-5 py-3.5">
            <span className="flex items-center gap-2 text-body-sm font-medium text-foreground">
              <Database className="h-3.5 w-3.5 text-accent-element" strokeWidth={2} />
              {service.name} Console
            </span>
            <span className="rounded-full bg-accent-element/15 px-3 py-1 text-caption font-semibold text-accent-element">
              {service.resultsMetrics[1]?.value ?? "Synced"}
            </span>
          </div>

          {/* KPI strip */}
          <div className="grid grid-cols-3 gap-px bg-border">
            {service.resultsMetrics.map((kpi) => (
              <div key={kpi.label} className="bg-surface px-4 py-3.5">
                <p className="text-caption leading-snug text-muted-foreground">{kpi.label}</p>
                <p className="mt-1 font-display text-h3 text-foreground">{kpi.value}</p>
              </div>
            ))}
          </div>

          {/* Data table */}
          <div className="px-5 py-4">
            <div className="w-full overflow-x-auto rounded-lg border border-border">
              <table className="w-full min-w-[420px] border-collapse text-left">
                <thead>
                  <tr className="border-b border-border bg-background/60">
                    <th className="px-3 py-2 text-caption font-medium text-muted-foreground">Department</th>
                    <th className="px-3 py-2 text-caption font-medium text-muted-foreground">Status</th>
                    <th className="px-3 py-2 text-right text-caption font-medium text-muted-foreground">Value</th>
                  </tr>
                </thead>
                <tbody>
                  {TABLE_ROWS.map((row, i) => (
                    <tr key={row.department} className={i !== TABLE_ROWS.length - 1 ? "border-b border-border" : ""}>
                      <td className="px-3 py-2.5">
                        <p className="text-body-sm font-medium leading-snug text-foreground">{row.department}</p>
                        <p className="text-caption text-muted-foreground">{row.detail}</p>
                      </td>
                      <td className="px-3 py-2.5">
                        <span className={`inline-flex items-center rounded-full px-2.5 py-1 text-caption font-semibold ${STATUS_STYLES[row.status]}`}>
                          {row.status}
                        </span>
                      </td>
                      <td className="px-3 py-2.5 text-right text-body-sm font-semibold text-foreground">{row.value}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Rollout stepper */}
          <div className="flex flex-wrap items-center gap-x-3 gap-y-2 border-t border-border px-5 py-3.5">
            {steps.map((step, i) => (
              <div key={step.title} className="flex items-center gap-1.5">
                {i < 3 ? (
                  <CheckCircle2 className="h-3.5 w-3.5 text-accent-element" strokeWidth={2} />
                ) : (
                  <Circle className="h-3.5 w-3.5 text-muted-foreground/30" strokeWidth={2} />
                )}
                <span className={`text-caption ${i < 3 ? "text-foreground" : "text-muted-foreground"}`}>
                  {step.title}
                </span>
                {i < steps.length - 1 && <span className="ml-1.5 hidden h-px w-3 bg-border sm:inline-block" />}
              </div>
            ))}
          </div>
        </div>

        {/* Floating: reconciliation stat */}
        <div className="erp-mock-float w-full rounded-xl border border-border bg-surface p-3.5 shadow-e2 lg:absolute lg:top-16 lg:left-0 lg:w-52">
          <span className="text-caption text-muted-foreground">Reconciliation Hours</span>
          <div className="mt-2 flex items-end justify-between">
            <p className="font-display text-h3 text-foreground">3</p>
            <span className="text-caption font-semibold text-accent-element">was 26 hrs/week</span>
          </div>
        </div>

        {/* Floating: sync health */}
        <div className="erp-mock-float-delay w-full rounded-xl border border-border bg-surface p-4 shadow-e2 lg:absolute lg:bottom-6 lg:left-6 lg:w-56">
          <span className="text-caption text-muted-foreground">System Sync</span>
          <div className="mt-2 flex flex-col gap-1.5">
            <div className="flex items-center justify-between">
              <span className="text-caption text-muted-foreground">Modules live</span>
              <span className="text-body-sm font-semibold text-foreground">6 / 6</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-caption text-muted-foreground">Data conflicts</span>
              <span className="text-body-sm font-semibold text-accent-element">0</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-caption text-muted-foreground">Last sync</span>
              <span className="text-body-sm font-semibold text-foreground">12s ago</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
