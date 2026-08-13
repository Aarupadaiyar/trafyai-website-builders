import { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { getLenis } from "@/lib/useLenis";
import { cn } from "@/lib/utils";
import { brand, navAnchors, services } from "@/data/content";

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [solutionsOpen, setSolutionsOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setSolutionsOpen(false);
  }, [location.pathname]);

  const goToFinalCta = () => {
    if (location.pathname === "/") {
      const el = document.querySelector("#final-cta");
      if (el) getLenis()?.scrollTo(el as HTMLElement, { offset: -40 });
    } else {
      navigate("/#final-cta");
    }
  };

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-colors duration-500",
        scrolled ? "bg-background/80 backdrop-blur-md border-b border-border" : "bg-transparent"
      )}
    >
      <nav className="flex items-center justify-between px-6 lg:px-10 py-5 max-w-7xl mx-auto">
        <Link to="/" className="flex items-center" onClick={() => setMobileOpen(false)}>
          <span className="text-2xl tracking-tighter text-foreground font-brand uppercase">{brand.name}</span>
        </Link>

        <div className="hidden md:flex items-center gap-9">
          <div
            className="relative"
            onMouseEnter={() => setSolutionsOpen(true)}
            onMouseLeave={() => setSolutionsOpen(false)}
          >
            <button className="text-base text-muted-foreground hover:text-foreground transition-colors">
              Solutions
            </button>
            <AnimatePresence>
              {solutionsOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 8 }}
                  transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
                  className="absolute left-1/2 -translate-x-1/2 top-full pt-4 w-[560px]"
                >
                  <div className="grid grid-cols-2 gap-1 rounded-lg border border-border bg-background/95 backdrop-blur-md p-3 shadow-e3">
                    {services.map((service) => (
                      <Link
                        key={service.slug}
                        to={`/solutions/${service.slug}`}
                        className="group rounded-md px-4 py-3 hover:bg-secondary transition-colors"
                      >
                        <div className="flex items-baseline gap-2">
                          <span className="text-sm text-muted-foreground">{service.index}</span>
                          <span className="text-base text-foreground">{service.name}</span>
                        </div>
                        <p className="mt-1 text-sm text-muted-foreground line-clamp-1">{service.tagline}</p>
                      </Link>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {navAnchors.map((item) => (
            <Link
              key={item.label}
              to={item.href}
              className="text-base text-muted-foreground hover:text-foreground transition-colors"
            >
              {item.label}
            </Link>
          ))}
        </div>

        <div className="hidden md:block">
          <Button variant="glass" size="default" onClick={goToFinalCta}>
            Let's Build
          </Button>
        </div>

        <button
          className="md:hidden text-foreground p-2"
          aria-label="Toggle menu"
          onClick={() => setMobileOpen((v) => !v)}
        >
          <span className="block w-6 h-px bg-foreground mb-1.5" />
          <span className="block w-6 h-px bg-foreground mb-1.5" />
          <span className="block w-4 h-px bg-foreground" />
        </button>
      </nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="md:hidden bg-background border-t border-border overflow-hidden"
          >
            <div className="flex flex-col gap-1 px-6 py-6">
              <span className="text-sm uppercase tracking-wider text-muted-foreground mb-1">Solutions</span>
              {services.map((service) => (
                <Link
                  key={service.slug}
                  to={`/solutions/${service.slug}`}
                  className="py-2 text-foreground"
                  onClick={() => setMobileOpen(false)}
                >
                  {service.name}
                </Link>
              ))}
              <div className="h-px bg-border my-3" />
              {navAnchors.map((item) => (
                <Link key={item.label} to={item.href} className="py-2 text-foreground" onClick={() => setMobileOpen(false)}>
                  {item.label}
                </Link>
              ))}
              <Button variant="glass" size="default" className="mt-4" onClick={goToFinalCta}>
                Let's Build
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
