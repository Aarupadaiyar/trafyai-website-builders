import type { CSSProperties } from "react";
import { CheckCircle2, Circle, TrendingUp, Zap } from "lucide-react";

const KPIS = [
  { label: "Inventory Accuracy", value: "99.2%", delta: "+7.4%", element: "water" },
  { label: "Automation Coverage", value: "88%", delta: "+12%", element: "fire" },
  { label: "Cost Reclaimed", value: "$32K", delta: "+$18K", element: "nature" },
];

const MODULES = [
  { title: "Inventory Restock — PO-2291", status: "Approved", progress: 100, tag: "Warehouse A", element: "water" },
  { title: "Finance Ledger Sync", status: "Complete", progress: 100, tag: "Q3 Close", element: "earth" },
  { title: "HR Onboarding Batch #12", status: "In Progress", progress: 64, tag: "Batch #12", element: "ice" },
];

const ROLLOUT = [
  { label: "Discover", done: true },
  { label: "Migrate", done: true },
  { label: "Integrate", done: true },
  { label: "Automate", done: false },
  { label: "Live", done: false },
];

const CHART_BARS = [38, 52, 44, 61, 58, 70, 66, 78, 74, 85, 90, 96];

export function HeroProductMockup() {
  return (
    <div aria-hidden="true" className="relative hidden h-full w-full lg:block">
      <style>{`
        @keyframes hero-mock-float { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-10px); } }
        .hero-mock-float { animation: hero-mock-float 6s ease-in-out infinite; }
        .hero-mock-float-delay { animation: hero-mock-float 6s ease-in-out infinite 1.4s; }
        .hero-mock-float-delay-2 { animation: hero-mock-float 6s ease-in-out infinite 2.8s; }
        @media (prefers-reduced-motion: reduce) {
          .hero-mock-float, .hero-mock-float-delay, .hero-mock-float-delay-2 { animation: none; }
        }
      `}</style>

      <div className="relative h-full min-h-[480px] w-full lg:min-h-[560px]">
        {/* Main dashboard card */}
        <div className="absolute top-0 right-0 w-[90%] overflow-hidden rounded-2xl border border-border bg-surface shadow-e3">
          <div className="flex items-center justify-between border-b border-border px-5 py-3.5">
            <span className="text-body-sm font-medium text-foreground">Operations Overview</span>
            <span className="rounded-full bg-signal px-3 py-1 text-caption font-semibold text-background">
              Live
            </span>
          </div>

          <div className="grid grid-cols-3 gap-px bg-border">
            {KPIS.map((kpi) => (
              <div
                key={kpi.label}
                style={{ "--accent-element": `var(--el-${kpi.element})` } as CSSProperties}
                className="bg-surface px-4 py-3.5"
              >
                <p className="text-caption text-muted-foreground">{kpi.label}</p>
                <p className="mt-1 font-display text-h3 text-foreground">{kpi.value}</p>
                <p className="mt-0.5 flex items-center gap-1 text-caption font-medium text-accent-element">
                  <TrendingUp className="h-3 w-3" strokeWidth={2} />
                  {kpi.delta}
                </p>
              </div>
            ))}
          </div>

          <div className="flex flex-col gap-3 px-5 py-4">
            {MODULES.map((item) => (
              <div
                key={item.title}
                style={{ "--accent-element": `var(--el-${item.element})` } as CSSProperties}
                className="rounded-lg border border-border p-3"
              >
                <div className="flex items-start justify-between gap-3">
                  <p className="text-body-sm font-medium leading-snug text-foreground">{item.title}</p>
                  <span className="shrink-0 text-caption text-muted-foreground">{item.progress}%</span>
                </div>
                <div className="mt-2 h-1.5 w-full overflow-hidden rounded-full bg-border">
                  <div className="h-full rounded-full bg-accent-element" style={{ width: `${item.progress}%` }} />
                </div>
                <div className="mt-2 flex items-center justify-between">
                  <span className="text-caption text-muted-foreground">{item.status}</span>
                  <span className="text-caption font-medium text-muted-foreground">{item.tag}</span>
                </div>
              </div>
            ))}
          </div>

          <div className="flex items-center gap-3 border-t border-border px-5 py-3.5">
            {ROLLOUT.map((step, i) => (
              <div key={step.label} className="flex items-center gap-1.5">
                {step.done ? (
                  <CheckCircle2 className="h-3.5 w-3.5 text-[hsl(146_62%_36%)]" strokeWidth={2} />
                ) : (
                  <Circle className="h-3.5 w-3.5 text-muted-foreground/30" strokeWidth={2} />
                )}
                <span className={`text-caption ${step.done ? "text-foreground" : "text-muted-foreground"}`}>{step.label}</span>
                {i < ROLLOUT.length - 1 && <span className="ml-1.5 h-px w-3 bg-border" />}
              </div>
            ))}
          </div>
        </div>

        {/* Floating: Automation Trend */}
        <div
          style={{ "--accent-element": "var(--el-water)" } as CSSProperties}
          className="hero-mock-float-delay absolute top-12 -left-2 w-52 rounded-xl border border-border bg-surface p-3.5 shadow-e3"
        >
          <div className="flex items-center justify-between">
            <span className="text-caption text-muted-foreground">Automation Trend</span>
            <span className="flex items-center gap-1 text-caption font-semibold text-accent-element">
              <TrendingUp className="h-3 w-3" strokeWidth={2} />
              34% MoM
            </span>
          </div>
          <div className="mt-2 flex h-10 items-end gap-1">
            {CHART_BARS.map((h, i) => (
              <div
                key={i}
                className="flex-1 rounded-sm bg-border"
                style={
                  i === CHART_BARS.length - 1
                    ? { height: `${h}%`, background: "hsl(var(--accent-element))" }
                    : { height: `${h}%` }
                }
              />
            ))}
          </div>
        </div>

        {/* Floating: System Health */}
        <div className="hero-mock-float absolute bottom-24 -left-4 w-56 rounded-xl border border-border bg-surface p-4 shadow-e3">
          <span className="text-caption text-muted-foreground">System Health</span>
          <div className="mt-2 flex flex-col gap-1.5">
            <div className="flex items-center justify-between">
              <span className="text-caption text-muted-foreground">Uptime</span>
              <span className="text-body-sm font-semibold text-[hsl(146_62%_36%)]">99.98%</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-caption text-muted-foreground">Sync Latency</span>
              <span className="text-body-sm font-semibold text-foreground">1.2s</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-caption text-muted-foreground">Active Modules</span>
              <span className="text-body-sm font-semibold text-foreground">6</span>
            </div>
          </div>
        </div>

        {/* Floating: Module Synced */}
        <div
          style={{ "--accent-element": "var(--el-earth)" } as CSSProperties}
          className="hero-mock-float-delay-2 absolute bottom-4 right-4 w-48 rounded-xl border border-border bg-surface p-3.5 shadow-e3"
        >
          <span className="flex items-center gap-1.5 text-caption text-muted-foreground">
            <Zap className="h-3 w-3 text-accent-element" strokeWidth={2} />
            Modules Synced
          </span>
          <p className="mt-1 text-body-sm font-semibold text-foreground">Finance ↔ Inventory</p>
          <p className="mt-1 text-caption text-muted-foreground">Real-time sync</p>
          <p className="mt-1 text-caption font-medium text-accent-element">Zero conflicts</p>
        </div>
      </div>
    </div>
  );
}
