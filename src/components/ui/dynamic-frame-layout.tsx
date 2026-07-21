import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

export interface Frame {
  id: number;
  media: string;
  href: string;
  index: string;
  title: string;
  tagline: string;
  accent: string;
  defaultPos: { x: number; y: number; w: number; h: number };
  mediaSize?: number;
}

interface FrameComponentProps extends Frame {
  isHovered: boolean;
  onEnter: () => void;
  onLeave: () => void;
}

const isVideo = (src: string) => /\.(mp4|webm|mov)$/i.test(src);

function FrameComponent({ media, href, index, title, tagline, accent, mediaSize = 1, isHovered, onEnter, onLeave }: FrameComponentProps) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (!videoRef.current) return;
    if (isHovered) videoRef.current.play().catch(() => {});
    else videoRef.current.pause();
  }, [isHovered]);

  return (
    <Link
      to={href}
      onMouseEnter={onEnter}
      onMouseLeave={onLeave}
      className="group relative block w-full h-full overflow-hidden rounded-2xl border border-white/8 bg-void"
    >
      <div className="absolute inset-0 overflow-hidden">
        <div
          className="w-full h-full"
          style={{ transform: `scale(${isHovered ? mediaSize * 1.08 : mediaSize})`, transition: "transform 0.6s cubic-bezier(0.25,1,0.5,1)" }}
        >
          {isVideo(media) ? (
            <video ref={videoRef} className="w-full h-full object-cover" src={media} loop muted playsInline />
          ) : (
            <img className="w-full h-full object-cover" src={media} alt={title} loading="lazy" />
          )}
        </div>
      </div>

      <div
        className="absolute inset-0 transition-opacity duration-500"
        style={{
          background: `linear-gradient(180deg, rgba(5,6,10,0.15) 0%, rgba(5,6,10,0.55) 55%, rgba(5,6,10,0.92) 100%)`,
          opacity: isHovered ? 1 : 0.85,
        }}
      />

      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{ boxShadow: `inset 0 0 0 1.5px ${accent}66, inset 0 0 60px -10px ${accent}55` }}
      />

      <div className="relative z-10 flex h-full flex-col justify-between p-5 md:p-6">
        <div className="flex items-start justify-between">
          <span className="font-display text-xs tracking-[0.2em] text-white/60">{index}</span>
          <span
            className="flex h-8 w-8 items-center justify-center rounded-full border border-white/15 bg-white/5 opacity-0 -translate-y-1 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-400"
            style={{ color: accent }}
          >
            <ArrowUpRight className="h-4 w-4" />
          </span>
        </div>
        <div>
          <h3 className="font-display text-xl md:text-2xl font-semibold text-white tracking-tight">{title}</h3>
          <p className="mt-1 text-sm text-white/70 opacity-0 max-h-0 group-hover:opacity-100 group-hover:max-h-12 transition-all duration-400 overflow-hidden">
            {tagline}
          </p>
        </div>
      </div>
    </Link>
  );
}

interface DynamicFrameLayoutProps {
  frames: Frame[];
  className?: string;
  hoverSize?: number;
  gapSize?: number;
}

export function DynamicFrameLayout({ frames, className, hoverSize = 6, gapSize = 12 }: DynamicFrameLayoutProps) {
  const [hovered, setHovered] = useState<{ row: number; col: number } | null>(null);

  const getRowSizes = () => {
    if (hovered === null) return "1fr 1fr";
    const { row } = hovered;
    const nonHoveredSize = (12 - hoverSize) / 1;
    return [0, 1].map((r) => (r === row ? `${hoverSize}fr` : `${nonHoveredSize}fr`)).join(" ");
  };

  const getColSizes = () => {
    if (hovered === null) return "1fr 1fr 1fr";
    const { col } = hovered;
    const nonHoveredSize = (12 - hoverSize) / 2;
    return [0, 1, 2].map((c) => (c === col ? `${hoverSize}fr` : `${nonHoveredSize}fr`)).join(" ");
  };

  return (
    <div
      className={cn("relative w-full", className)}
      style={{
        display: "grid",
        gridTemplateRows: getRowSizes(),
        gridTemplateColumns: getColSizes(),
        gap: `${gapSize}px`,
        transition: "grid-template-rows 0.5s cubic-bezier(0.25,1,0.5,1), grid-template-columns 0.5s cubic-bezier(0.25,1,0.5,1)",
      }}
    >
      {frames.map((frame) => {
        const row = Math.floor(frame.defaultPos.y / 4);
        const col = Math.floor(frame.defaultPos.x / 4);

        return (
          <motion.div
            key={frame.id}
            className="relative h-[220px] md:h-[280px]"
            style={{ transition: "transform 0.5s ease" }}
          >
            <FrameComponent
              {...frame}
              isHovered={hovered?.row === row && hovered?.col === col}
              onEnter={() => setHovered({ row, col })}
              onLeave={() => setHovered(null)}
            />
          </motion.div>
        );
      })}
    </div>
  );
}
