import { useRef, useEffect } from "react";
import {
  FaShareAlt,
  FaBullhorn,
  FaUsers,
  FaPalette,
  FaSearch,
  FaMicrophoneAlt,
} from "react-icons/fa";
import darkimg from "../../assets/dark.avif";
import socialMediaImg from "../../assets/t1.avif";
import paidAdsImg from "../../assets/t2.jpg";
import influencerMarketingImg from "../../assets/t3.webp";
import graphicDesigningImg from "../../assets/t4.webp";
import searchEngineOptimizationImg from "../../assets/t5.webp";
import podcastServicesImg from "../../assets/t6.jpg";

import gsap from "gsap";
import { Link } from "react-router-dom";
import GsapReveal from "../GsapReveal";

/* ================= SERVICES DATA ================= */

export const services = [
  {
    slug: "social-media-management",
    title: "Social Media Page Management",
    shortDesc:
      "Scalable, secure, and high-performance digital brand handling.",
    icon: <FaShareAlt />,
    image: socialMediaImg,
  },
  {
    slug: "paid-ads",
    title: "Paid Ads",
    shortDesc: "Result-driven paid campaigns for maximum ROI.",
    icon: <FaBullhorn />,
    image: paidAdsImg,
  },
  {
    slug: "influencer-marketing",
    title: "Influencer Marketing",
    shortDesc: "Brand collaborations that drive trust and reach.",
    icon: <FaUsers />,
    image: influencerMarketingImg,
  },
  {
    slug: "graphic-design",
    title: "Graphic Designing",
    shortDesc: "Creative visuals aligned with brand identity.",
    icon: <FaPalette />,
    image: graphicDesigningImg,
  },
  {
    slug: "search-engine-optimization",
    title: "Search Engine Optimization",
    shortDesc: "Improve visibility and organic traffic.",
    icon: <FaSearch />,
    image: searchEngineOptimizationImg,
  },
  {
    slug: "podcast-services",
    title: "Podcast Services",
    shortDesc: "Amplify Your Brand Voice Through Engaging Audio Content",
    icon: <FaMicrophoneAlt />,
    image: podcastServicesImg,
  },
];

/* ================= COMPONENT ================= */

const DigitalServices = ({ variant = "services" }) => {
  const sliderRef = useRef(null);
  const indexRef = useRef(0);
  const isMobileRef = useRef(false);

  const isHome = variant === "home";

  /* ================= GSAP SLIDER ================= */

  useEffect(() => {
    const slider = sliderRef.current;
    if (!slider) return;

    const cards = slider.children;

    let timeline;
    let resizeHandler;

    const startSlider = () => {
      if (timeline) timeline.kill();

      const cardWidth = cards[0].offsetWidth + 32; // gap-8
      const total = services.length;

      timeline = gsap.timeline({
        repeat: -1,
      });

      for (let i = 1; i <= total; i++) {
        // FAST MOVE
        timeline.to(slider, {
          x: -(i * cardWidth),
          duration: 0.6,
          ease: "power3.inOut",
        });

        // STOP 2 SECONDS
        timeline.to({}, { duration: 2 });

        // infinite reset
        if (i === total) {
          timeline.set(slider, { x: 0 });
        }
      }
    };

    startSlider();

    /* ===== RESTART ON RESIZE ===== */
    resizeHandler = () => {
      startSlider();
    };

    window.addEventListener("resize", resizeHandler);

    return () => {
      window.removeEventListener("resize", resizeHandler);
      timeline && timeline.kill();
    };
  }, []);
  return (
    <div
      className="w-full h-[750px] sm:h-[700px] md:h-[650px] lg:h-[600px] bg-cover bg-center"
       style={{
        backgroundImage: `url(${darkimg})`,
      }}
    >

      <section className="relative md:py-12 py-8 px-6 md:px-12 lg:px-20 mx-4 md:mx-10 lg:mx-16 rounded-3xl shadow-xl overflow-hidden">
        {/* ===== BACKGROUND IMAGE ===== */}
        <div
          className="absolute inset-0 -z-10"
          style={{
            backgroundImage: `url(${darkimg})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          {/* blur + transparency */}
        </div>
        <div className="max-w-7xl mx-auto">
          {/* ===== HEADING ===== */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Our Digital Marketing Services
            </h1>

            <div className="w-20 h-1 bg-linear-to-r from-primary to-accent mx-auto mt-4 rounded-full shadow-orange"></div>

            <p className="mt-6 text-white max-w-4xl mx-auto text-lg leading-relaxed">
              We build reliable digital solutions using modern marketing and
              technology practices at Stratviz Solution.
            </p>
          </div>

          {/* ===== SLIDER ===== */}
          <div className="overflow-hidden relative">
            <div ref={sliderRef} className="flex gap-8 w-max">
              {[...services, ...services].map((service, index) => (
                <GsapReveal key={index}>
                  <div
                    className={`min-w-[320px] max-w-[320px] relative rounded-3xl overflow-hidden cursor-pointer group
                  transition-all duration-300 hover:-translate-y-2 hover:shadow-orange-lg
                  ${isHome
                        ? "text-white h-[300px]"
                        : "border border-gray-100 bg-white h-[280px]"
                      }`}
                    style={
                      isHome
                        ? {
                          backgroundImage: `url(${service.image})`,
                          backgroundSize: "cover",
                          backgroundPosition: "center",
                        }
                        : {}
                    }
                  >
                    {/* Overlay */}
                    {isHome && (
                      <>
                        <div className="absolute inset-0 bg-black/50 group-hover:bg-black/40 transition-colors"></div>
                        <div className="absolute inset-0 bg-linear-to-t from-black via-black/30 to-transparent"></div>
                      </>
                    )}

                    {/* CONTENT */}
                    <div className="relative z-10 p-8 h-full flex flex-col justify-end">
                      <div className="flex items-center gap-4 mb-4">
                        <div
                          className={`w-12 h-12 flex items-center justify-center rounded-2xl text-2xl shadow-lg
                        ${isHome
                              ? "bg-white/30 text-white backdrop-blur-sm"
                              : "bg-primary/10 text-primary"
                            }`}
                        >
                          {service.icon}
                        </div>

                        <h3
                          className={`text-xl font-bold ${isHome ? "text-white" : "text-primary"
                            }`}
                        >
                          {service.title}
                        </h3>
                      </div>

                      <p
                        className={`text-sm mb-6 ${isHome ? "text-white" : "text-gray-600"
                          }`}
                      >
                        {service.shortDesc}
                      </p>

                      {/*  UNDERLINE LINK */}
                     <Link to={`/digital-services/${service.slug}`}
                        className={`relative inline-block text-sm font-semibold group
                      ${isHome ? "text-white" : "text-primary-dark"}`}
                      >
                        More Information
                        <span className="absolute left-0 -bottom-1 h-[2px] w-full bg-current scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100"></span>
                      </Link>
                    </div>
                  </div>
                </GsapReveal>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DigitalServices;