import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { services } from "@/data/content";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 ${
          scrolled ? "py-3" : "py-6"
        }`}
      >
        <div className="mx-auto max-w-7xl px-6 lg:px-10 flex items-center justify-between">
          <div
            className={`flex items-center justify-between w-full rounded-2xl px-5 transition-all duration-500 ${
              scrolled ? "py-2.5 bg-void/80 backdrop-blur-xl border border-paper/8 shadow-[0_20px_60px_-24px_rgba(20,23,13,0.25)]" : "py-1 border border-transparent"
            }`}
          >
            <Link to="/" className="flex items-center gap-2 group">
              <span className="relative flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-signal-light to-signal-dark shadow-[0_4px_16px_-4px_rgba(148,197,24,0.6)]">
                <span className="h-2.5 w-2.5 rounded-full bg-paper" />
              </span>
              <span className="font-display text-lg font-bold tracking-tight text-paper">
                Trafy <span className="text-signal-light">AI</span>
              </span>
            </Link>

            <nav className="hidden lg:flex items-center gap-8">
              <div className="group relative">
                <button className="text-sm text-fog hover:text-paper transition-colors flex items-center gap-1">Services</button>
                <div className="absolute left-1/2 -translate-x-1/2 top-full pt-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 translate-y-1 group-hover:translate-y-0">
                  <div className="w-[560px] rounded-2xl border border-paper/8 bg-void backdrop-blur-2xl p-3 shadow-[0_30px_80px_-24px_rgba(20,23,13,0.25)] grid grid-cols-2 gap-1">
                    {services.map((s) => (
                      <Link
                        key={s.slug}
                        to={`/services/${s.slug}`}
                        className="flex items-start gap-3 rounded-xl px-3 py-3 hover:bg-panel transition-colors"
                      >
                        <span className="mt-0.5 h-1.5 w-1.5 rounded-full" style={{ background: s.accent }} />
                        <span>
                          <span className="block text-sm font-medium text-paper">{s.name}</span>
                          <span className="block text-xs text-mist mt-0.5">{s.tagline}</span>
                        </span>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
              <a href="/#work" className="text-sm text-fog hover:text-paper transition-colors">
                Work
              </a>
              <a href="/#clients" className="text-sm text-fog hover:text-paper transition-colors">
                Clients
              </a>
              <a href="/#contact" className="text-sm text-fog hover:text-paper transition-colors">
                Contact
              </a>
            </nav>

            <a href="/#contact" className="hidden lg:flex btn-signal items-center gap-1.5 rounded-full px-5 py-2.5 text-sm font-display font-semibold">
              Start a Project
              <ArrowUpRight className="h-3.5 w-3.5" />
            </a>

            <button className="lg:hidden text-paper" onClick={() => setOpen((o) => !o)} aria-label="Toggle menu">
              {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[90] bg-ink/98 backdrop-blur-2xl lg:hidden flex flex-col justify-center px-8"
          >
            <nav className="flex flex-col gap-6">
              {services.map((s, i) => (
                <motion.div
                  key={s.slug}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.05 }}
                >
                  <Link to={`/services/${s.slug}`} className="font-display text-3xl font-semibold text-paper flex items-center gap-3">
                    <span className="text-sm text-mist font-body">{s.index}</span> {s.name}
                  </Link>
                </motion.div>
              ))}
              <a href="/#contact" className="btn-signal mt-6 inline-flex w-fit items-center gap-1.5 rounded-full px-6 py-3 text-sm font-display font-semibold">
                Start a Project <ArrowUpRight className="h-3.5 w-3.5" />
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
