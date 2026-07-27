import { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence, LayoutGroup } from "framer-motion";
import { useLenis, getLenis } from "@/lib/useLenis";
import { ScrollTrigger } from "@/lib/gsap";
import { Nav } from "./Nav";
import { Footer } from "./Footer";
import Home from "@/pages/Home";
import ServicePage from "@/pages/ServicePage";
import NotFound from "@/pages/NotFound";

export function RootLayout() {
  const location = useLocation();
  useLenis();

  useEffect(() => {
    const lenis = getLenis();
    if (location.hash) {
      const id = window.setTimeout(() => {
        const target = document.querySelector(location.hash);
        if (target) {
          lenis
            ? lenis.scrollTo(target as HTMLElement, { offset: -80 })
            : target.scrollIntoView({ behavior: "smooth" });
        }
      }, 120);
      return () => window.clearTimeout(id);
    }

    lenis ? lenis.scrollTo(0, { immediate: true }) : window.scrollTo(0, 0);
    const id = window.setTimeout(() => ScrollTrigger.refresh(), 150);
    return () => window.clearTimeout(id);
  }, [location.pathname, location.hash]);

  return (
    <LayoutGroup id="solutions">
      <div className="relative w-full bg-background">
        <Nav />
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Home />} />
            <Route path="/solutions/:slug" element={<ServicePage />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </AnimatePresence>
        <Footer />
      </div>
    </LayoutGroup>
  );
}
