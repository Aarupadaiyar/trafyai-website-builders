import { useParams, Link, Navigate } from "react-router-dom";
import { ArrowUpRight, ArrowLeft } from "lucide-react";
import { services, brand } from "@/data/content";
import { Reveal } from "@/components/Reveal";

export default function ServicePage() {
  const { slug } = useParams();
  const service = services.find((s) => s.slug === slug);

  if (!service) return <Navigate to="/" replace />;

  const others = services.filter((s) => s.slug !== slug);

  return (
    <div>
      <section className="relative min-h-[80vh] overflow-hidden flex items-end pt-40 pb-20">
        <div className="bg-grid-theme absolute inset-0 pointer-events-none" aria-hidden="true" />
        <div className="film-grain" aria-hidden="true" />
        <div
          className="absolute -top-20 right-0 h-[500px] w-[700px] rounded-full opacity-25 blur-[120px] pointer-events-none"
          style={{ background: `radial-gradient(ellipse, ${service.accent}, transparent 70%)` }}
        />
        <div className="absolute inset-0">
          <img src={service.media} alt="" className="w-full h-full object-cover opacity-20" />
          <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/80 to-ink/40" />
        </div>

        <div className="relative z-10 mx-auto max-w-7xl w-full px-6 lg:px-10">
          <Link to="/" className="inline-flex items-center gap-2 text-sm text-mist hover:text-paper transition-colors mb-8">
            <ArrowLeft className="h-4 w-4" />
            All Services
          </Link>
          <span className="font-display text-sm tracking-[0.25em]" style={{ color: service.accent }}>
            {service.index} / SERVICE
          </span>
          <h1 className="mt-4 font-display text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-premium max-w-3xl">
            {service.name}
          </h1>
          <p className="mt-6 text-xl text-mist max-w-xl">{service.tagline}</p>
        </div>
      </section>

      <section className="relative py-24 border-t border-line">
        <div className="mx-auto max-w-4xl px-6 lg:px-10">
          <Reveal>
            <p className="text-lg text-fog leading-relaxed">{service.body}</p>
          </Reveal>
          <Reveal delay={0.15} className="mt-14">
            <a
              href="/#contact"
              className="btn-signal inline-flex items-center gap-2 rounded-full px-8 py-4 font-display font-semibold"
            >
              Start a {service.shortName} Project
              <ArrowUpRight className="h-4 w-4" />
            </a>
          </Reveal>
        </div>
      </section>

      <section className="relative py-24 border-t border-line">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <Reveal className="mb-10">
            <span className="text-xs uppercase tracking-[0.25em] text-signal-dark font-display">More From {brand.name}</span>
          </Reveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {others.slice(0, 3).map((s, i) => (
              <Reveal key={s.slug} delay={i * 0.08}>
                <Link
                  to={`/services/${s.slug}`}
                  className="surface-card group block rounded-2xl p-6 hover:border-signal-dark/40 transition-colors h-full"
                >
                  <span className="text-xs font-display" style={{ color: s.accent }}>
                    {s.index}
                  </span>
                  <h3 className="mt-3 font-display text-xl font-semibold text-paper group-hover:text-signal-dark transition-colors">
                    {s.name}
                  </h3>
                  <p className="mt-2 text-sm text-mist">{s.tagline}</p>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
