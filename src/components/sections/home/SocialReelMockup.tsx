import type { CSSProperties } from "react";
import { Heart, MessageCircle, Share2, Bookmark } from "lucide-react";
import type { ServiceConfig } from "@/data/content";

const WEEK_SCHEDULE = [true, true, false, true, true, false, true];

export function SocialReelMockup({ service }: { service: ServiceConfig }) {
  const [engagementMetric, growthMetric, publishMetric] = service.resultsMetrics;

  return (
    <div style={{ "--accent-element": `var(--el-nature)` } as CSSProperties} className="relative">
      <style>{`
        @keyframes social-mock-float { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-8px); } }
        .social-mock-float { animation: social-mock-float 6s ease-in-out infinite; }
        .social-mock-float-delay { animation: social-mock-float 6s ease-in-out infinite 1.6s; }
        @media (prefers-reduced-motion: reduce) {
          .social-mock-float, .social-mock-float-delay { animation: none; }
        }
      `}</style>

      <div className="flex flex-col items-center gap-4 lg:relative lg:block lg:min-h-[560px]">
        {/* Reel card, full-bleed vertical video content card */}
        <div
          className="relative mx-auto aspect-[9/16] w-full max-w-[240px] overflow-hidden rounded-2xl shadow-e3 lg:absolute lg:top-0 lg:right-0 lg:mx-0 lg:w-[42%] lg:max-w-none"
          style={{
            background:
              "linear-gradient(160deg, hsl(var(--accent-element)) 0%, hsl(var(--accent-element) / 0.55) 55%, hsl(var(--accent-element) / 0.9) 100%)",
          }}
        >
          {/* Bottom scrim so caption and rail stay legible over the gradient */}
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-2/5 bg-gradient-to-t from-black/70 via-black/15 to-transparent" />

          {/* Vertical action rail */}
          <div className="absolute right-3 bottom-16 flex flex-col items-center gap-4">
            <div className="flex flex-col items-center gap-1">
              <Heart className="h-6 w-6 text-white drop-shadow" fill="white" strokeWidth={0} />
              <span className="text-caption font-semibold text-white drop-shadow">2.4K</span>
            </div>
            <div className="flex flex-col items-center gap-1">
              <MessageCircle className="h-6 w-6 text-white drop-shadow" strokeWidth={2} />
              <span className="text-caption font-semibold text-white drop-shadow">186</span>
            </div>
            <div className="flex flex-col items-center gap-1">
              <Share2 className="h-6 w-6 text-white drop-shadow" strokeWidth={2} />
              <span className="text-caption font-semibold text-white drop-shadow">94</span>
            </div>
            <Bookmark className="h-6 w-6 text-white drop-shadow" strokeWidth={2} />
          </div>

          {/* Caption overlay */}
          <div className="absolute inset-x-0 bottom-0 px-4 pb-4 pr-14">
            <p className="text-body-sm font-semibold text-white drop-shadow">New post is live</p>
            <p className="mt-1 text-caption text-white/85 drop-shadow">#brandvoice #dailyposting #onbrand</p>
          </div>
        </div>

        {/* Satellite: content calendar strip */}
        <div className="social-mock-float-delay w-full max-w-[240px] rounded-xl border border-border bg-surface p-3.5 shadow-e2 lg:absolute lg:top-16 lg:left-0 lg:w-52 lg:max-w-none">
          <span className="text-caption text-muted-foreground">Content Calendar</span>
          <div className="mt-2.5 flex items-center justify-between gap-1.5">
            {WEEK_SCHEDULE.map((scheduled, i) => (
              <span
                key={i}
                className={
                  scheduled
                    ? "h-2.5 w-2.5 rounded-full bg-accent-element"
                    : "h-2.5 w-2.5 rounded-full border border-border"
                }
              />
            ))}
          </div>
          <div className="mt-2.5 flex items-center justify-between">
            <span className="text-caption text-muted-foreground">On schedule</span>
            <span className="text-body-sm font-semibold text-accent-element">{publishMetric.value}</span>
          </div>
        </div>

        {/* Satellite: engagement stat chip */}
        <div className="social-mock-float w-full max-w-[240px] rounded-xl border border-border bg-surface p-4 shadow-e2 lg:absolute lg:bottom-8 lg:left-4 lg:w-52 lg:max-w-none">
          <span className="text-caption text-muted-foreground">{engagementMetric.label}</span>
          <p className="mt-1 font-display text-h3 text-foreground">{engagementMetric.value}</p>
          <p className="mt-1 text-caption font-medium text-accent-element">
            {growthMetric.label}: {growthMetric.value}
          </p>
        </div>
      </div>
    </div>
  );
}
