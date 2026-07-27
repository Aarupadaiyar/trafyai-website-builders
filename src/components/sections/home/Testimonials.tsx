import type { JSX } from "react";
import { TestimonialsCarousel } from "@/components/sections/shared/TestimonialsCarousel";
import { testimonials } from "@/data/content";

export function Testimonials(): JSX.Element {
  const items = testimonials.map(({ quote, author, role }) => ({ quote, author, role }));

  return (
    <section className="py-section-lg px-gutter">
      <TestimonialsCarousel items={items} />
    </section>
  );
}
