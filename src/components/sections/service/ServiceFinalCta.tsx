import { Reveal } from "@/components/Reveal";
import { Button } from "@/components/ui/button";
import { brand } from "@/data/content";
import type { ServiceConfig } from "@/data/content/services";

export function ServiceFinalCta({ config }: { config: ServiceConfig }) {
  return (
    <section className="px-gutter py-section-lg">
      <Reveal className="mx-auto max-w-2xl text-center">
        <h2 className="font-display text-h1 text-foreground">{config.finalCta.headline}</h2>
        <p className="mt-6 text-body-lg text-muted-foreground">{config.finalCta.body}</p>
        <div className="mt-10 flex justify-center">
          <Button variant="glass" size="lg" asChild>
            <a href={`mailto:${brand.email}?subject=${encodeURIComponent(config.name)}`}>
              {config.finalCta.ctaLabel}
            </a>
          </Button>
        </div>
      </Reveal>
    </section>
  );
}
