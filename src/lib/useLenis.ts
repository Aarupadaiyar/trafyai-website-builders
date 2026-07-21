import { useEffect } from "react";
import Lenis from "lenis";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { scrollStore, notifyScrollStore } from "./scrollStore";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

let lenisInstance: Lenis | null = null;

export function getLenis() {
  return lenisInstance;
}

export function useLenis() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.1,
      easing: (t: number) => Math.min(1, 1 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      touchMultiplier: 1.3,
    });
    lenisInstance = lenis;

    lenis.on("scroll", (e: { scroll: number; limit: number; velocity: number }) => {
      const { scroll, limit, velocity } = e;
      scrollStore.progress = limit > 0 ? scroll / limit : 0;
      scrollStore.velocity = velocity;

      const heroEl = document.getElementById("hero");
      if (heroEl) {
        const heroHeight = heroEl.offsetHeight;
        scrollStore.heroProgress = Math.min(1, Math.max(0, scroll / heroHeight));
      }
      notifyScrollStore();
      ScrollTrigger.update();
    });

    const tickerFn = (time: number) => {
      lenis.raf(time * 1000);
    };
    gsap.ticker.add(tickerFn);
    gsap.ticker.lagSmoothing(0);

    return () => {
      gsap.ticker.remove(tickerFn);
      lenis.destroy();
      lenisInstance = null;
    };
  }, []);
}
