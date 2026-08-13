import { CheckCircle2, Circle, TrendingUp, Zap } from "lucide-react";

const KPIS = [
  { label: "Inventory Accuracy", value: "99.2%", delta: "+7.4%" },
  { label: "Automation Coverage", value: "88%", delta: "+12%" },
  { label: "Cost Reclaimed", value: "$32K", delta: "+$18K" },
];

const MODULES = [
  { title: "Inventory Restock — PO-2291", status: "Approved", progress: 100, tag: "Warehouse A" },
  { title: "Finance Ledger Sync", status: "Complete", progress: 100, tag: "Q3 Close" },
  { title: "HR Onboarding Batch #12", status: "In Progress", progress: 64, tag: "Batch #12" },
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
        <div className="absolute top-0 right-0 w-[90%] overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04] shadow-2xl backdrop-blur-md">
          <div className="flex items-center justify-between border-b border-white/10 px-5 py-3.5">
            <span className="text-body-sm font-medium text-white/90">Operations Overview</span>
            <span className="rounded-full bg-[#c7fb3f]/15 px-3 py-1 text-caption font-semibold text-[#c7fb3f]">
              Live
            </span>
          </div>

          <div className="grid grid-cols-3 gap-px bg-white/10">
            {KPIS.map((kpi) => (
              <div key={kpi.label} className="bg-[#0b0c0d] px-4 py-3.5">
                <p className="text-caption text-white/40">{kpi.label}</p>
                <p className="mt-1 font-display text-h3 text-white/90">{kpi.value}</p>
                <p className="mt-0.5 flex items-center gap-1 text-caption font-medium text-[#c7fb3f]">
                  <TrendingUp className="h-3 w-3" strokeWidth={2} />
                  {kpi.delta}
                </p>
              </div>
            ))}
          </div>

          <div className="flex flex-col gap-3 px-5 py-4">
            {MODULES.map((item) => (
              <div key={item.title} className="rounded-lg border border-white/10 p-3">
                <div className="flex items-start justify-between gap-3">
                  <p className="text-body-sm font-medium leading-snug text-white/85">{item.title}</p>
                  <span className="shrink-0 text-caption text-white/40">{item.progress}%</span>
                </div>
                <div className="mt-2 h-1.5 w-full overflow-hidden rounded-full bg-white/10">
                  <div className="h-full rounded-full bg-[#c7fb3f]" style={{ width: `${item.progress}%` }} />
                </div>
                <div className="mt-2 flex items-center justify-between">
                  <span className="text-caption text-white/40">{item.status}</span>
                  <span className="text-caption font-medium text-white/60">{item.tag}</span>
                </div>
              </div>
            ))}
          </div>

          <div className="flex items-center gap-3 border-t border-white/10 px-5 py-3.5">
            {ROLLOUT.map((step, i) => (
              <div key={step.label} className="flex items-center gap-1.5">
                {step.done ? (
                  <CheckCircle2 className="h-3.5 w-3.5 text-[#c7fb3f]" strokeWidth={2} />
                ) : (
                  <Circle className="h-3.5 w-3.5 text-white/25" strokeWidth={2} />
                )}
                <span className={`text-caption ${step.done ? "text-white/80" : "text-white/40"}`}>{step.label}</span>
                {i < ROLLOUT.length - 1 && <span className="ml-1.5 h-px w-3 bg-white/15" />}
              </div>
            ))}
          </div>
        </div>

        {/* Floating: Automation Trend */}
        <div className="hero-mock-float-delay absolute top-12 -left-2 w-52 rounded-xl border border-white/10 bg-[#111213]/95 p-3.5 shadow-xl backdrop-blur-md">
          <div className="flex items-center justify-between">
            <span className="text-caption text-white/40">Automation Trend</span>
            <span className="flex items-center gap-1 text-caption font-semibold text-[#c7fb3f]">
              <TrendingUp className="h-3 w-3" strokeWidth={2} />
              34% MoM
            </span>
          </div>
          <div className="mt-2 flex h-10 items-end gap-1">
            {CHART_BARS.map((h, i) => (
              <div
                key={i}
                className="flex-1 rounded-sm"
                style={{ height: `${h}%`, background: i === CHART_BARS.length - 1 ? "#c7fb3f" : "rgba(255,255,255,0.12)" }}
              />
            ))}
          </div>
        </div>

        {/* Floating: System Health */}
        <div className="hero-mock-float absolute bottom-24 -left-4 w-56 rounded-xl border border-white/10 bg-[#111213]/95 p-4 shadow-xl backdrop-blur-md">
          <span className="text-caption text-white/40">System Health</span>
          <div className="mt-2 flex flex-col gap-1.5">
            <div className="flex items-center justify-between">
              <span className="text-caption text-white/60">Uptime</span>
              <span className="text-body-sm font-semibold text-[#c7fb3f]">99.98%</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-caption text-white/60">Sync Latency</span>
              <span className="text-body-sm font-semibold text-white/85">1.2s</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-caption text-white/60">Active Modules</span>
              <span className="text-body-sm font-semibold text-white/85">6</span>
            </div>
          </div>
        </div>

        {/* Floating: Module Synced */}
        <div className="hero-mock-float-delay-2 absolute bottom-4 right-4 w-48 rounded-xl border border-white/10 bg-[#111213]/95 p-3.5 shadow-xl backdrop-blur-md">
          <span className="flex items-center gap-1.5 text-caption text-white/40">
            <Zap className="h-3 w-3 text-[#c7fb3f]" strokeWidth={2} />
            Modules Synced
          </span>
          <p className="mt-1 text-body-sm font-semibold text-white/90">Finance ↔ Inventory</p>
          <p className="mt-1 text-caption text-white/40">Real-time sync</p>
          <p className="mt-1 text-caption font-medium text-[#c7fb3f]">Zero conflicts</p>
        </div>
      </div>
    </div>
  );
}
