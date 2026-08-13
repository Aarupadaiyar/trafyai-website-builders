import type { CSSProperties } from "react";
import {
  BatteryFull,
  Bell,
  Calendar,
  CheckCircle2,
  Home,
  Search,
  Signal,
  Star,
  User,
  Wifi,
} from "lucide-react";
import type { ServiceConfig } from "@/data/content";

function findMetric(metrics: { label: string; value: string }[], keyword: string, fallbackIndex: number) {
  return (
    metrics.find((m) => m.label.toLowerCase().includes(keyword))?.value ??
    metrics[fallbackIndex]?.value ??
    ""
  );
}

const FEED_ROWS = [
  { icon: Calendar, title: "Next Class", subtitle: "Vinyasa Flow, 6:00 PM", trailing: "Today" },
  { icon: CheckCircle2, title: "Booking Status", subtitle: "Confirmed, spot reserved", trailing: "" },
  { icon: User, title: "Membership", subtitle: "Active, renews in 12 days", trailing: "" },
];

export function AppDashboardMockup({ service }: { service: ServiceConfig }) {
  const ratingValue = findMetric(service.resultsMetrics, "rating", 1).replace("★", "");
  const retentionValue = findMetric(service.resultsMetrics, "retention", 0);
  const crashFreeValue = findMetric(service.resultsMetrics, "crash", 2);

  return (
    <div
      style={{ "--accent-element": `var(--el-${service.element})` } as CSSProperties}
      className="relative"
    >
      <style>{`
        @keyframes app-mock-float { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-8px); } }
        .app-mock-float { animation: app-mock-float 6s ease-in-out infinite; }
        .app-mock-float-delay { animation: app-mock-float 6s ease-in-out infinite 1.6s; }
        @media (prefers-reduced-motion: reduce) {
          .app-mock-float, .app-mock-float-delay { animation: none; }
        }
      `}</style>

      <div className="flex flex-col items-center gap-4 lg:relative lg:block lg:min-h-[560px]">
        {/* Phone frame */}
        <div className="mx-auto w-full max-w-[220px] shrink-0 lg:absolute lg:top-0 lg:left-1/2 lg:max-w-none lg:w-[45%] lg:-translate-x-[58%]">
          <div className="rounded-[2.5rem] border border-border bg-foreground p-2.5 shadow-e3">
            {/* Notch */}
            <div className="relative flex h-5 items-center justify-center">
              <div className="h-4 w-20 rounded-full bg-foreground" />
              <div className="absolute h-2.5 w-14 rounded-full bg-background/10" />
            </div>

            {/* Screen */}
            <div className="overflow-hidden rounded-[1.75rem] bg-background">
              {/* Status bar */}
              <div className="flex items-center justify-between px-4 pt-2 pb-1">
                <span className="text-caption font-semibold text-foreground">9:41</span>
                <div className="flex items-center gap-1 text-foreground">
                  <Signal className="h-3 w-3" strokeWidth={2.25} />
                  <Wifi className="h-3 w-3" strokeWidth={2.25} />
                  <BatteryFull className="h-3.5 w-3.5" strokeWidth={2.25} />
                </div>
              </div>

              {/* App header */}
              <div className="flex items-center justify-between px-4 py-3">
                <div>
                  <p className="text-caption text-muted-foreground">Good evening</p>
                  <p className="font-display text-h3 leading-none text-foreground">Pulse Studio</p>
                </div>
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-accent-element/15">
                  <Bell className="h-4 w-4 text-accent-element" strokeWidth={2} />
                </div>
              </div>

              {/* Feed rows */}
              <div className="flex flex-col gap-2 px-3 pb-3">
                {FEED_ROWS.map((row) => (
                  <div
                    key={row.title}
                    className="flex items-center gap-2.5 rounded-xl border border-border bg-surface px-3 py-2.5"
                  >
                    <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-accent-element/15">
                      <row.icon className="h-3.5 w-3.5 text-accent-element" strokeWidth={2} />
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="truncate text-caption font-medium leading-snug text-foreground">
                        {row.title}
                      </p>
                      <p className="truncate text-caption leading-snug text-muted-foreground">
                        {row.subtitle}
                      </p>
                    </div>
                    {row.trailing ? (
                      <span className="shrink-0 text-caption text-muted-foreground">{row.trailing}</span>
                    ) : null}
                  </div>
                ))}
              </div>

              {/* Bottom tab bar */}
              <div className="flex items-center justify-around border-t border-border px-4 py-3">
                <Home className="h-4 w-4 text-accent-element" strokeWidth={2.25} />
                <Search className="h-4 w-4 text-muted-foreground/50" strokeWidth={2.25} />
                <Calendar className="h-4 w-4 text-muted-foreground/50" strokeWidth={2.25} />
                <User className="h-4 w-4 text-muted-foreground/50" strokeWidth={2.25} />
              </div>
            </div>
          </div>
        </div>

        {/* Floating: App Store rating */}
        <div className="app-mock-float w-full max-w-[220px] rounded-xl border border-border bg-surface p-3.5 shadow-e2 lg:absolute lg:top-6 lg:right-0 lg:w-52 lg:max-w-none">
          <div className="flex items-center gap-1">
            <Star className="h-4 w-4 fill-accent-element text-accent-element" strokeWidth={2} />
            <span className="font-display text-h3 leading-none text-foreground">{ratingValue}</span>
          </div>
          <p className="mt-1 text-caption text-muted-foreground">App Store rating, 2,400+ reviews</p>
          <p className="mt-2 text-caption font-medium text-accent-element">{retentionValue} retention lift</p>
        </div>

        {/* Floating: push notification toast */}
        <div className="app-mock-float-delay w-full max-w-[220px] rounded-2xl border border-border bg-surface p-3 shadow-e2 lg:absolute lg:bottom-8 lg:right-4 lg:w-60 lg:max-w-none">
          <div className="flex items-start gap-2.5">
            <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-accent-element">
              <Bell className="h-4 w-4 text-background" strokeWidth={2} />
            </div>
            <div className="min-w-0 flex-1">
              <div className="flex items-center justify-between gap-2">
                <span className="text-caption font-semibold text-foreground">Pulse Studio</span>
                <span className="shrink-0 text-caption text-muted-foreground">now</span>
              </div>
              <p className="mt-0.5 text-caption leading-snug text-muted-foreground">
                Your class starts in 15 minutes. Tap to check in.
              </p>
            </div>
          </div>
          <p className="mt-2 border-t border-border pt-2 text-caption text-muted-foreground">
            {crashFreeValue} crash-free sessions, {service.tagline}
          </p>
        </div>
      </div>
    </div>
  );
}
