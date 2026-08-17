import { Link } from "react-router-dom";
import { brand, footerColumns, services } from "@/data/content";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative bg-background border-t border-border">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-16 lg:py-20 grid grid-cols-2 md:grid-cols-4 gap-10">
        <div className="col-span-2 md:col-span-2">
          <span className="text-2xl tracking-tighter font-brand font-semibold text-foreground uppercase">{brand.name}</span>
          <p className="mt-4 max-w-xs text-base text-muted-foreground leading-relaxed">{brand.statement}</p>
        </div>

        <div>
          <span className="text-sm uppercase tracking-wider text-muted-foreground">Explore</span>
          <ul className="mt-4 space-y-3">
            {footerColumns.explore.map((item) => (
              <li key={item.label}>
                <Link to={item.href} className="text-base text-foreground/80 hover:text-foreground transition-colors">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <span className="text-sm uppercase tracking-wider text-muted-foreground">Solutions</span>
          <ul className="mt-4 space-y-3">
            {services.map((service) => (
              <li key={service.slug}>
                <Link
                  to={`/solutions/${service.slug}`}
                  className="text-base text-foreground/80 hover:text-foreground transition-colors"
                >
                  {service.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-border">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-sm text-muted-foreground">
          <a href={`mailto:${brand.email}`} className="hover:text-foreground transition-colors">
            {brand.email}
          </a>
          <span>
            © {year} {brand.fullName}. All rights reserved.
          </span>
        </div>
      </div>
    </footer>
  );
}
