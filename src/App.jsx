import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import GsapPageTransition from "./components/GsapPageTransition";
import { useEffect, lazy, Suspense } from "react";
import Navbar from "./components/Navbar";
import CTA from "./components/homeComponents/CTA";
import Footer from "./components/Footer";
import FixedCTA from "./components/FixedCTA";
import ServiceDetails from "./pages/ServiceDetails";
import DigitalServices from "./components/homeComponents/Digital-services";
import DigitalServiceDetails from "./pages/DigitalServiceDetails";


// Lazy load page components
const Home = lazy(() => import("./pages/Home"));
const About = lazy(() => import("./pages/About"));
const Services = lazy(() => import("./pages/Services"));
const ClientSection = lazy(() => import("./pages/ClientSection"));
const Contact = lazy(() => import("./pages/Contact"));

// This component handles the scroll logic
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Disable browser's automatic scroll restoration
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }

    // Force scroll to top instantly
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant",
    });
  }, [pathname]);

  return null;
};

// Global Loading Component
const PageLoader = () => (
  <div className="fixed inset-0 bg-white flex items-center justify-center z-50">
    <div className="w-12 h-12 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
  </div>
);

const App = () => {
  return (
    <BrowserRouter>
      <div className="overflow-x-hidden w-full relative">
        <ScrollToTop />
        <Navbar />
        <div className="mt-16">
          <Suspense fallback={<PageLoader />}>
            <Routes>
              <Route path="/" element={<GsapPageTransition><Home /></GsapPageTransition>} />
              <Route path="/about" element={<GsapPageTransition><About /></GsapPageTransition>} />
              <Route path="/services" element={<GsapPageTransition><Services /></GsapPageTransition>} />
              <Route path="/services/:serviceName" element={<ServiceDetails />} />
              <Route path="/digital-services" element={<DigitalServices />} />
              <Route
                path="/digital-services/:slug"
                element={<DigitalServiceDetails />}
              />
              <Route path="/ClientSection" element={<GsapPageTransition><ClientSection /></GsapPageTransition>} />
              <Route path="/contact" element={<GsapPageTransition><Contact /></GsapPageTransition>} />

            </Routes>
          </Suspense>
        </div>
        <CTA />
        <Footer />
        <FixedCTA />
      </div>
    </BrowserRouter>
  );
};

export default App;

