import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { RevealText } from "@/components/ui/reveal-text";

const SESSION_KEY = "trafy-intro-played";

const letterImages = [
  "https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&q=60",
  "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=600&q=60",
  "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=600&q=60",
  "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=600&q=60",
  "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=600&q=60",
  "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=600&q=60",
  "https://images.unsplash.com/photo-1526628953301-3e589a6a8b74?w=600&q=60",
  "https://images.unsplash.com/photo-1526378722484-bd91ca387e72?w=600&q=60",
];

export default function Loader() {
  const [visible, setVisible] = useState(() => sessionStorage.getItem(SESSION_KEY) !== "1");

  useEffect(() => {
    if (!visible) return;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, [visible]);

  const handleComplete = () => {
    sessionStorage.setItem(SESSION_KEY, "1");
    setVisible(false);
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          key="loader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, filter: "blur(20px)" }}
          transition={{ duration: 0.7, ease: "easeInOut" }}
          className="fixed inset-0 z-[200] flex items-center justify-center bg-ink"
        >
          <div className="film-grain" aria-hidden="true" />
          <div className="bg-grid-theme absolute inset-0 opacity-40 pointer-events-none" aria-hidden="true" />
          <RevealText
            text="TRAFY AI"
            textColor="text-paper"
            overlayColor="text-signal-dark"
            fontSize="text-[56px] sm:text-[90px] md:text-[130px] lg:text-[160px]"
            letterDelay={0.07}
            overlayDelay={0.045}
            overlayDuration={0.35}
            springDuration={500}
            letterImages={letterImages}
            onComplete={handleComplete}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
