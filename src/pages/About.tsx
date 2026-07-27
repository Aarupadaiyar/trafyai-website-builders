import { Link } from "react-router-dom";
import { PageTransition } from "@/components/layout/PageTransition";
import { Reveal } from "@/components/Reveal";
import { Button } from "@/components/ui/button";
import { about } from "@/data/content";

export default function About() {
  const pillars = [about.vision, about.mission, about.philosophy];

  return (
    <PageTransition>
      <div className="pt-32 pb-section-lg px-gutter">
        <div className="mx-auto max-w-5xl">
          {/* Hero */}
          <Reveal className="max-w-3xl">
            <span className="text-caption uppercase tracking-[0.25em] text-signal">
              {about.hero.eyebrow}
            </span>
            <h1 className="mt-4 font-display text-display-l text-foreground">
              {about.hero.headline}
            </h1>
            <p className="mt-6 max-w-2xl text-body-lg text-muted-foreground">
              {about.hero.subhead}
            </p>
          </Reveal>

          {/* Hero photograph */}
          <Reveal delay={0.1} className="mt-10">
            <img
              src={about.hero.image}
              alt="Trafy workspace"
              loading="lazy"
              className="aspect-[21/9] w-full rounded-xl object-cover"
            />
          </Reveal>

          {/* Vision / Mission / Philosophy */}
          <div className="mt-16 grid grid-cols-1 gap-10 border-t border-border pt-12 md:grid-cols-3 md:gap-8">
            {pillars.map((pillar, i) => (
              <Reveal key={pillar.headline} delay={i * 0.1}>
                <h2 className="font-display text-h2 text-foreground">{pillar.headline}</h2>
                <p className="mt-4 text-body-lg text-muted-foreground">{pillar.body}</p>
              </Reveal>
            ))}
          </div>

          {/* How We Work */}
          <div className="mt-16 border-t border-border pt-12">
            <Reveal>
              <h2 className="font-display text-h2 text-foreground">How We Work</h2>
            </Reveal>
            <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-3">
              {about.approach.map((item, i) => (
                <Reveal key={item.title} delay={i * 0.1}>
                  <div className="h-full rounded-2xl border border-border bg-surface p-8">
                    <span className="font-display text-h3 text-muted-foreground opacity-50">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <h3 className="mt-4 font-display text-h3 text-foreground">{item.title}</h3>
                    <p className="mt-3 text-body text-muted-foreground">{item.body}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>

          {/* Closing CTA */}
          <Reveal className="mt-16 border-t border-border pt-12 text-center">
            <h2 className="mx-auto max-w-xl font-display text-h2 text-foreground">
              Let's talk about where your business is headed.
            </h2>
            <div className="mt-6">
              <Button variant="glass" size="lg" asChild>
                <Link to="/contact">Get in Touch</Link>
              </Button>
            </div>
          </Reveal>
        </div>
      </div>
    </PageTransition>
  );
}
