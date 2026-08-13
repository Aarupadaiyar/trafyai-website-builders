import type { CSSProperties } from "react";
import { ArrowUpRight, Gauge, Lock, TrendingUp, Users } from "lucide-react";
import type { ServiceConfig } from "@/data/content";

const TOP_PAGES = [
  { path: "/pricing", visits: "2,481" },
  { path: "/case-studies", visits: "1,904" },
  { path: "/blog/seo-guide", visits: "1,320" },
];

// Rising traffic trend, plotted as an SVG area/line chart.
const TRAFFIC_POINTS = [18, 24, 20, 32, 30, 42, 46, 40, 54, 60, 58, 72, 78, 74, 90];

function buildAreaPath(points: number[], width: number, height: number): { line: string; area: string } {
  const step = width / (points.length - 1);
  const coords = points.map((p, i) => {
    const x = i * step;
    const y = height - (p / 100) * height;
    return [x, y] as const;
  });
  const line = coords.map(([x, y], i) => `${i === 0 ? "M" : "L"} ${x.toFixed(1)} ${y.toFixed(1)}`).join(" ");
  const area = `${line} L ${width} ${height} L 0 ${height} Z`;
  return { line, area };
}

function parseScore(value: string): number {
  const match = value.match(/\d+/);
  return match ? Number(match[0]) : 0;
}

export function WebAnalyticsMockup({ service }: { service: ServiceConfig }) {
  const [liftMetric, loadMetric, scoreMetric] = service.resultsMetrics;
  const seoScore = scoreMetric ? parseScore(scoreMetric.value) : 97;
  const gaugeCircumference = 2 * Math.PI * 34;
  const gaugeOffset = gaugeCircumference * (1 - seoScore / 100);

  const loadTimeMetric = service.caseStudy.metrics.find((m) => /load time/i.test(m.label));
  const conversionMetric = service.caseStudy.metrics.find((m) => /conversion/i.test(m.label));

  const chartWidth = 280;
  const chartHeight = 88;
  const { line, area } = buildAreaPath(TRAFFIC_POINTS, chartWidth, chartHeight);

  return (
    <div
      style={{ "--accent-element": `var(--el-${service.element})` } as CSSProperties}
      className="relative"
    >
      <style>{`
        @keyframes web-mock-float { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-8px); } }
        .web-mock-float { animation: web-mock-float 6s ease-in-out infinite; }
        .web-mock-float-delay { animation: web-mock-float 6s ease-in-out infinite 1.6s; }
        @keyframes web-mock-pulse { 0%, 100% { opacity: 1; transform: scale(1); } 50% { opacity: 0.4; transform: scale(1.4); } }
        .web-mock-pulse { animation: web-mock-pulse 1.8s ease-in-out infinite; }
        @media (prefers-reduced-motion: reduce) {
          .web-mock-float, .web-mock-float-delay, .web-mock-pulse { animation: none; }
        }
      `}</style>

      <div className="flex flex-col gap-4 lg:relative lg:block lg:min-h-[540px]">
        {/* Browser chrome window */}
        <div className="w-full overflow-hidden rounded-2xl border border-border bg-surface shadow-e3 lg:absolute lg:top-0 lg:right-0 lg:w-[90%]">
          {/* Traffic-light title bar */}
          <div className="flex items-center gap-3 border-b border-border bg-background px-4 py-3">
            <div className="flex items-center gap-1.5">
              <span className="h-2.5 w-2.5 rounded-full bg-[hsl(0_65%_75%)]" />
              <span className="h-2.5 w-2.5 rounded-full bg-[hsl(45_70%_72%)]" />
              <span className="h-2.5 w-2.5 rounded-full bg-[hsl(146_40%_70%)]" />
            </div>
            <div className="flex flex-1 items-center gap-1.5 rounded-full border border-border bg-surface px-3 py-1.5">
              <Lock className="h-3 w-3 shrink-0 text-muted-foreground" strokeWidth={2} />
              <span className="truncate text-caption text-muted-foreground">stat6.io/analytics</span>
            </div>
          </div>

          {/* Headline KPI strip, sourced from service.resultsMetrics */}
          <div className="grid grid-cols-3 gap-px bg-border">
            {service.resultsMetrics.map((metric) => (
              <div key={metric.label} className="bg-surface px-4 py-3.5">
                <p className="text-caption leading-snug text-muted-foreground">{metric.label}</p>
                <p className="mt-1 font-display text-h3 text-foreground">{metric.value}</p>
              </div>
            ))}
          </div>

          {/* Analytics viewport: traffic graph + SEO gauge */}
          <div className="flex flex-col gap-4 px-5 py-4 sm:flex-row">
            <div className="flex-1 rounded-lg border border-border p-3.5">
              <div className="flex items-center justify-between">
                <span className="text-caption text-muted-foreground">Organic traffic</span>
                {conversionMetric && (
                  <span className="flex items-center gap-1 text-caption font-semibold text-accent-element">
                    <TrendingUp className="h-3 w-3" strokeWidth={2} />
                    {conversionMetric.before} to {conversionMetric.after}
                  </span>
                )}
              </div>
              <svg
                viewBox={`0 0 ${chartWidth} ${chartHeight}`}
                className="mt-3 h-20 w-full"
                preserveAspectRatio="none"
                aria-hidden="true"
              >
                <defs>
                  <linearGradient id="web-mock-area-fill" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="hsl(var(--accent-element))" stopOpacity="0.28" />
                    <stop offset="100%" stopColor="hsl(var(--accent-element))" stopOpacity="0" />
                  </linearGradient>
                </defs>
                <path d={area} fill="url(#web-mock-area-fill)" />
                <path d={line} fill="none" stroke="hsl(var(--accent-element))" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>

            <div className="flex shrink-0 flex-col items-center justify-center rounded-lg border border-border p-3.5 sm:w-36">
              <span className="text-caption text-muted-foreground">SEO score</span>
              <div className="relative mt-2 h-20 w-20">
                <svg viewBox="0 0 80 80" className="h-20 w-20 -rotate-90">
                  <circle cx="40" cy="40" r="34" fill="none" stroke="hsl(var(--border))" strokeWidth="7" />
                  <circle
                    cx="40"
                    cy="40"
                    r="34"
                    fill="none"
                    stroke="hsl(var(--accent-element))"
                    strokeWidth="7"
                    strokeLinecap="round"
                    strokeDasharray={gaugeCircumference}
                    strokeDashoffset={gaugeOffset}
                  />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="font-display text-h3 text-foreground">{seoScore}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Top pages mini list */}
          <div className="flex flex-col gap-2 border-t border-border px-5 py-4">
            <span className="text-caption text-muted-foreground">Top pages</span>
            {TOP_PAGES.map((page) => (
              <div key={page.path} className="flex items-center justify-between">
                <span className="text-body-sm font-medium text-foreground">{page.path}</span>
                <span className="text-caption text-muted-foreground">{page.visits} visits</span>
              </div>
            ))}
          </div>
        </div>

        {/* Floating: Page load time */}
        {loadTimeMetric && (
          <div className="web-mock-float w-full rounded-xl border border-border bg-surface p-3.5 shadow-e2 lg:absolute lg:top-16 lg:left-0 lg:w-48">
            <span className="flex items-center gap-1.5 text-caption text-muted-foreground">
              <Gauge className="h-3 w-3 text-accent-element" strokeWidth={2} />
              Page load time
            </span>
            <p className="mt-1.5 font-display text-h3 text-foreground">{loadTimeMetric.after}</p>
            <p className="mt-0.5 flex items-center gap-1 text-caption font-medium text-accent-element">
              <ArrowUpRight className="h-3 w-3 rotate-180" strokeWidth={2} />
              down from {loadTimeMetric.before}
            </p>
          </div>
        )}

        {/* Floating: live visitors pill */}
        <div className="web-mock-float-delay flex w-full items-center gap-2 rounded-full border border-border bg-surface px-4 py-2.5 shadow-e2 lg:absolute lg:bottom-6 lg:left-6 lg:w-auto">
          <span className="relative flex h-2 w-2">
            <span className="web-mock-pulse absolute inline-flex h-full w-full rounded-full bg-accent-element" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-accent-element" />
          </span>
          <Users className="h-3.5 w-3.5 text-muted-foreground" strokeWidth={2} />
          <span className="text-body-sm font-medium text-foreground">182 live visitors</span>
        </div>
      </div>
    </div>
  );
}
