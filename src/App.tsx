import { Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { useLenis, getLenis } from "./lib/useLenis";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Loader from "./components/Loader";
import Landing from "./pages/Landing";
import ServicePage from "./pages/ServicePage";
import AppDevelopment from "./pages/AppDevelopment";
import WebsiteDevelopment from "./pages/WebsiteDevelopment";

function ScrollReset() {
  const { pathname } = useLocation();
  useEffect(() => {
    const lenis = getLenis();
    if (lenis) lenis.scrollTo(0, { immediate: true });
    else window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export default function App() {
  useLenis();

  return (
    <div className="bg-ink min-h-screen">
      <Loader />
      <ScrollReset />
      <Nav />
      <main>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/services/app-development" element={<AppDevelopment />} />
          <Route path="/services/website-development" element={<WebsiteDevelopment />} />
          <Route path="/services/:slug" element={<ServicePage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}
