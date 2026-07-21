import { useRef } from "react";
import { Link } from "react-router-dom";
import { motion, useScroll, useTransform, useInView, animate } from "framer-motion";
import { useEffect, useState } from "react";
import { ArrowUpRight, Sparkles as SparklesIcon, Check } from "lucide-react";
import { NetworkScene } from "@/three/NetworkScene";
import { Reveal } from "@/components/Reveal";
import { Spotlight } from "@/components/ui/spotlight";
import { Card } from "@/components/ui/card";
import { DynamicFrameLayout, type Frame } from "@/components/ui/dynamic-frame-layout";
import { GlobeClients } from "@/components/ui/globe-clients";
import { brand, services, stats, process, clientCities } from "@/data/content";

function StatCounter({ value, suffix, label }: { value: number; suffix: string; label: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const controls = animate(0, value, {
      duration: 1.6,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: (v) => setDisplay(Math.round(v)),
    });
    return () => controls.stop();
  }, [inView, value]);

  return (
    <div className="text-center sm:text-left">
      <div className="font-display text-4xl md:text-5xl font-bold text-premium">
        <span ref={ref}>{display}</span>
        {suffix}
      </div>
      <div className="mt-1 text-sm text-mist">{label}</div>
    </div>
  );
}

const serviceFrames: Frame[] = services.map((s, i) => ({
  id: i + 1,
  media: s.media,
  href: `/services/${s.slug}`,
  index: s.index,
  title: s.name,
  tagline: s.tagline,
  accent: s.accent,
  defaultPos: { x: (i % 3) * 4, y: Math.floor(i / 3) * 4, w: 4, h: 4 },
}));

export default function Landing() {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });

  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const sceneY = useTransform(scrollYProgress, [0, 1], ["0%", "18%"]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const heroScale = useTransform(scrollYProgress, [0, 1], [1, 0.94]);

  return (
    <div>
      {/* HERO */}
      <section ref={heroRef} className="relative min-h-screen overflow-hidden flex items-center pt-32 pb-20">
        <motion.div style={{ y: bgY }} className="bg-grid-theme absolute inset-0 pointer-events-none" aria-hidden="true" />
        <div className="film-grain" aria-hidden="true" />
        <div
          className="absolute -top-40 left-1/2 -translate-x-1/2 h-[600px] w-[900px] rounded-full opacity-25 blur-[120px] pointer-events-none"
          style={{ background: "radial-gradient(ellipse, rgba(197,254,55,0.35), transparent 70%)" }}
        />

        <motion.div style={{ opacity: heroOpacity, scale: heroScale }} className="relative z-10 mx-auto max-w-7xl w-full px-6 lg:px-10">
          <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-16 items-center">
            <div>
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 }}
                className="inline-flex items-center gap-2 rounded-full border border-paper/10 bg-paper/4 px-4 py-1.5 text-xs text-fog mb-8"
              >
                <SparklesIcon className="h-3.5 w-3.5 text-signal-dark" />
                End-to-end digital execution, one team
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                className="font-display text-5xl sm:text-6xl lg:text-[5.2rem] font-bold tracking-tight leading-[0.98] text-3d-matte"
              >
                We build the
                <br />
                <span className="text-premium">systems your company</span>
                <br />
                runs on.
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="mt-7 text-lg text-mist max-w-lg leading-relaxed"
              >
                Websites, apps, ERP, CRM, digital marketing, and social media — designed and shipped end-to-end by
                {" "}
                <span className="text-paper font-medium">{brand.name}</span>. One accountable team, every system.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.55 }}
                className="mt-10 flex flex-wrap gap-4"
              >
                <a href="#contact" className="btn-signal inline-flex items-center gap-2 rounded-full px-7 py-3.5 font-display font-semibold">
                  Start a Project
                  <ArrowUpRight className="h-4 w-4" />
                </a>
                <a href="#services" className="btn-ghost inline-flex items-center gap-2 rounded-full px-7 py-3.5 font-display font-semibold">
                  Explore Services
                </a>
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.75 }}
                className="mt-16 grid grid-cols-3 gap-6 max-w-md"
              >
                {stats.map((s) => (
                  <StatCounter key={s.label} {...s} />
                ))}
              </motion.div>
            </div>

            <motion.div style={{ y: sceneY }} className="relative h-[420px] lg:h-[560px]">
              <Card className="w-full h-full bg-[#05060a] border-white/10 relative overflow-hidden rounded-[28px]">
                <div className="bg-grid-theme-dark absolute inset-0 opacity-60 pointer-events-none" aria-hidden="true" />
                <Spotlight className="-top-20 left-0 md:left-40" />
                <div className="absolute inset-0">
                  <NetworkScene className="w-full h-full" />
                </div>
                <div className="absolute top-6 left-6 right-6 flex items-start justify-between pointer-events-none">
                  <div className="floating-ui-badge rounded-xl px-4 py-2.5">
                    <p className="text-[10px] uppercase tracking-widest text-white/45">Live Systems</p>
                    <p className="text-sm font-semibold text-white font-display">6 Services · 1 Team</p>
                  </div>
                </div>
                <div className="absolute bottom-6 left-6 right-6 flex justify-between pointer-events-none">
                  <div className="floating-ui-badge rounded-xl px-4 py-2.5 flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-signal shadow-[0_0_8px_rgba(197,254,55,0.8)]" />
                    <span className="text-xs text-white font-medium">Actively Shipping</span>
                  </div>
                </div>
              </Card>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* SERVICES */}
      <section id="services" className="relative py-28 lg:py-36">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <Reveal className="max-w-2xl mb-14">
            <span className="text-xs uppercase tracking-[0.25em] text-signal-dark font-display">What We Build</span>
            <h2 className="mt-4 font-display text-4xl md:text-5xl font-bold tracking-tight text-premium">
              Every service your business needs. One accountable team.
            </h2>
            <p className="mt-5 text-mist leading-relaxed">
              No stitching together five vendors. Trafy AI designs, builds, and runs the full stack — web, mobile,
              internal systems, and growth — under one roof.
            </p>
          </Reveal>

          <Reveal delay={0.15}>
            <DynamicFrameLayout frames={serviceFrames} hoverSize={6.5} gapSize={12} />
          </Reveal>
        </div>
      </section>

      {/* PROCESS */}
      <section id="work" className="relative py-28 lg:py-36 border-t border-line">
        <div className="bg-grid-theme absolute inset-0 opacity-40 pointer-events-none" aria-hidden="true" />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
          <Reveal className="max-w-2xl mb-16">
            <span className="text-xs uppercase tracking-[0.25em] text-signal-dark font-display">How We Work</span>
            <h2 className="mt-4 font-display text-4xl md:text-5xl font-bold tracking-tight text-premium">
              From brief to shipped, without the handoffs.
            </h2>
          </Reveal>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {process.map((p, i) => (
              <Reveal key={p.step} delay={i * 0.1}>
                <div className="surface-card rounded-2xl p-7 h-full">
                  <span className="font-display text-3xl font-bold text-signal-dark/80">{p.step}</span>
                  <h3 className="mt-4 font-display text-xl font-semibold text-paper">{p.title}</h3>
                  <p className="mt-3 text-sm text-fog leading-relaxed">{p.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CLIENTS / GLOBE */}
      <section id="clients" className="relative py-28 lg:py-36 border-t border-line">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <Reveal>
              <span className="text-xs uppercase tracking-[0.25em] text-signal-dark font-display">Where Our Clients Are</span>
              <h2 className="mt-4 font-display text-4xl md:text-5xl font-bold tracking-tight text-premium">
                Chennai to Mumbai, Bangalore to the world.
              </h2>
              <p className="mt-5 text-mist leading-relaxed max-w-md">
                Trafy AI works with companies across India's fastest-growing cities — and beyond. Drag the globe to
                explore.
              </p>
              <ul className="mt-8 space-y-3">
                {["Full-stack teams embedded with yours", "Weekly delivery checkpoints, no black boxes", "Support that continues after launch"].map(
                  (item) => (
                    <li key={item} className="flex items-center gap-3 text-sm text-fog">
                      <Check className="h-4 w-4 text-signal-dark shrink-0" />
                      {item}
                    </li>
                  )
                )}
              </ul>
            </Reveal>

            <Reveal delay={0.15}>
              <GlobeClients markers={clientCities} className="max-w-md mx-auto" />
            </Reveal>
          </div>

          <Reveal delay={0.2} className="mt-16 flex flex-wrap justify-center gap-3">
            {clientCities.map((c) => (
              <div key={c.id} className="flex items-center gap-2 rounded-full border border-line bg-void pl-1.5 pr-4 py-1.5">
                <img src={c.image} alt="" className="h-7 w-7 rounded-full object-cover" loading="lazy" />
                <span className="text-xs font-medium text-fog">{c.caption}</span>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-28 lg:py-36 border-t border-line">
        <div className="bg-grid-theme absolute inset-0 opacity-40 pointer-events-none" aria-hidden="true" />
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[500px] w-[800px] rounded-full opacity-20 blur-[130px] pointer-events-none"
          style={{ background: "radial-gradient(ellipse, rgba(197,254,55,0.4), transparent 70%)" }}
        />
        <Reveal className="relative mx-auto max-w-4xl px-6 text-center">
          <h2 className="font-display text-4xl md:text-6xl font-bold tracking-tight text-premium">
            Ready to build the system that runs your business?
          </h2>
          <p className="mt-6 text-lg text-mist max-w-xl mx-auto">
            Tell us what you're building — we'll scope it, design it, and ship it, end to end.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <a href={`mailto:${brand.email}`} className="btn-signal inline-flex items-center gap-2 rounded-full px-8 py-4 font-display font-semibold">
              {brand.email}
              <ArrowUpRight className="h-4 w-4" />
            </a>
            <Link to="/services/website-development" className="btn-ghost inline-flex items-center gap-2 rounded-full px-8 py-4 font-display font-semibold">
              See Our Services
            </Link>
          </div>
        </Reveal>
      </section>
    </div>
  );
}
