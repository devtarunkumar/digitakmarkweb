import { useEffect, useState, useCallback, useRef } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const desktopSlides = [
  "../src/assets/Hero1.jpg", // desktop Slide 1
  "../src/assets/Hero2.jpg", //   desktop Slide 2
  "../src/assets/Hero3.jpg", //     desktop Slide 3
];

const mobileSlides = [
  "../src/assets/Hero1.jpg", // Mobile Slide 1
  "../src/assets/Hero2.jpg", // Mobile Slide 2
  "../src/assets/Hero3.jpg", // Mobile Slide 3
];

const HeroSlider = () => {
  const [current, setCurrent] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  // Detect screen size
  useEffect(() => {
    const checkScreen = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkScreen(); // initial
    window.addEventListener("resize", checkScreen);
    return () => window.removeEventListener("resize", checkScreen);
  }, []);

  const slides = isMobile ? mobileSlides : desktopSlides;

  const next = useCallback(() => {
    setCurrent((prev) => (prev + 1) % slides.length);
  }, [slides.length]);

  const prev = useCallback(() => {
    setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  }, [slides.length]);

  // Auto slide
  useEffect(() => {
    const timer = setInterval(next, 6000);
    return () => clearInterval(timer);
  }, [next]);

  const contentRef = useRef(null);

  useGSAP(() => {
    if (contentRef.current) {
      gsap.fromTo(
        contentRef.current,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 1, delay: 0.5, ease: "power3.out" }
      );
    }
  }, { scope: contentRef });

  return (
    <section className="relative w-full overflow-hidden h-95 md:h-screen lg:h-screen bg-black">
      {/* Dynamic Theme Overlays */}
      <div className="absolute inset-0 z-20 bg-linear-to-r from-black/80 via-black/40 to-transparent"></div>
      <div className="absolute inset-0 z-20 bg-linear-to-br from-primary/5 via-accent/5 to-transparent mix-blend-overlay"></div>

      {/* SLIDES WITH CROSS-FADE */}
      <div className="relative w-full h-full">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1500 ease-in-out ${index === current ? "opacity-100 z-10" : "opacity-0 z-0"
              }`}
          >
            <img
              src={slide}
              alt={`Banner ${index + 1}`}
              className={`w-full h-full object-cover transition-transform duration-10000 linear ${index === current ? "scale-110" : "scale-100"
                }`}
            />
          </div>
        ))}
      </div>

      {/* CONTENT (Optional place for overlay text) */}
      <div className="absolute inset-0 z-30 flex items-center px-8 md:px-24">
        <div ref={contentRef} className="max-w-4xl space-y-6 opacity-0">
         
          <h1 className="text-4xl md:text-7xl font-extrabold text-white leading-tight tracking-wider mask-bottom-left animation: typing 4s ">
            Strategic Digital <br />
            <span className="bg-linear-to-r from-primary to-accent bg-clip-text text-transparent italic">Innovation</span>
          </h1>
          <p className="text-gray-200 text-lg md:text-2xl max-w-2xl leading-relaxed ">
            Empowering businesses through cutting-edge digital infrastructure
            and ROI-focused marketing strategies.
          </p>
        </div>
      </div>

     

      {/* DOTS */}
      <div className="absolute bottom-10 w-full flex justify-center gap-4 z-40">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`h-1.5 rounded-full transition-all duration-700
              ${index === current ? "bg-linear-to-r from-primary to-accent w-12 shadow-orange" : "bg-white/20 w-3 hover:bg-white/40"}`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroSlider;
