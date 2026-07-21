import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { brand, services } from "@/data/content";

export default function Footer() {
  return (
    <footer id="contact" className="relative border-t border-line bg-void">
      <div className="bg-grid-theme absolute inset-0 opacity-30 pointer-events-none" aria-hidden="true" />
      <div className="relative mx-auto max-w-7xl px-6 lg:px-10 pt-24 pb-10">
        <div className="grid gap-14 lg:grid-cols-[1.3fr_1fr_1fr]">
          <div>
            <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tight text-premium max-w-md">
              Your systems are still scattered. Let's fix that.
            </h2>
            <p className="mt-5 text-mist max-w-md leading-relaxed">
              Tell us what you're building or where things are breaking — we'll tell you exactly what it takes to fix it.
            </p>
            <a
              href={`mailto:${brand.email}`}
              className="btn-signal mt-8 inline-flex items-center gap-2 rounded-full px-7 py-3.5 font-display font-semibold"
            >
              {brand.email}
              <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>

          <div>
            <h3 className="font-display text-sm uppercase tracking-[0.2em] text-mist mb-5">Services</h3>
            <ul className="space-y-3">
              {services.map((s) => (
                <li key={s.slug}>
                  <Link to={`/services/${s.slug}`} className="text-sm text-fog hover:text-paper transition-colors">
                    {s.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-display text-sm uppercase tracking-[0.2em] text-mist mb-5">Contact</h3>
            <ul className="space-y-3 text-sm text-fog">
              <li>
                <a href={`mailto:${brand.email}`} className="hover:text-paper transition-colors">
                  {brand.email}
                </a>
              </li>
              <li>
                <a href={brand.phoneHref} className="hover:text-paper transition-colors">
                  {brand.phone}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-20 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-line pt-8">
          <span className="font-display text-sm text-mist">© {new Date().getFullYear()} Trafy AI. All rights reserved.</span>
          <span className="text-xs text-mist">Websites · Apps · ERP · CRM · Marketing · Social</span>
        </div>
      </div>
    </footer>
  );
}
