import { useState } from "react";

import {
  FaShareAlt,
  FaBullhorn,
  FaUsers,
  FaPalette,
  FaSearch,
  FaMicrophoneAlt,
  FaTimes,
} from "react-icons/fa";

import socialMediaImg from "../../assets/social-media.jpg";
import paidAdsImg from "../../assets/paid-ads.jpg";
import influencerMarketingImg from "../../assets/influencer-marketing.jpg";
import graphicDesigningImg from "../../assets/graphic-design.jpg";
import searchEngineOptimizationImg from "../../assets/seo.jpg";
import podcastServicesImg from "../../assets/podcast.jpg";
import GsapReveal from "../GsapReveal";

const services = [
  {
    title: "Social Media Page Management",
    shortDesc: "Scalable, secure, and high-performance digital brand handling.",
    fullDesc: "...",
    icon: <FaShareAlt />,
    image: socialMediaImg,
  },
  {
    title: "Paid Ads",
    shortDesc: "Result-driven paid campaigns for maximum ROI.",
    fullDesc: "...",
    icon: <FaBullhorn />,
    image: paidAdsImg,
  },
  {
    title: "Influencer Marketing",
    shortDesc: "Brand collaborations that drive trust and reach.",
    fullDesc: "...",
    icon: <FaUsers />,
    image: influencerMarketingImg,
  },
  {
    title: "Graphic Designing",
    shortDesc: "Creative visuals aligned with brand identity.",
    fullDesc: "...",
    icon: <FaPalette />,
    image: graphicDesigningImg,
  },
  {
    title: "Search Engine Optimization",
    shortDesc: "Improve visibility and organic traffic.",
    fullDesc: "...",
    icon: <FaSearch />,
    image: searchEngineOptimizationImg,
  },
  {
    title: "Podcast Services",
    shortDesc: "Amplify Your Brand Voice Through Engaging Audio Content",
    fullDesc: "...",
    icon: <FaMicrophoneAlt />,
    image: podcastServicesImg,
  },
];

const DigitalServices = ({ variant = "services" }) => {
  const [activeService, setActiveService] = useState(null);

  return (
    <section className="bg-gray-50 md:py-10 py-5 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-800">
            Our Digital Marketing Services
          </h2>
          <div className="w-20 h-1 bg-linear-to-r from-primary to-accent mx-auto mt-4 rounded-full shadow-orange"></div>
          <p className="mt-6 text-gray-600 max-w-4xl mx-auto text-lg leading-relaxed">
            We build reliable digital solutions using modern marketing and
            technology practices at Stratviz Solution.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const isHome = variant === "home";

            return (
              <GsapReveal key={index} width="100%" delay={index * 0.1} direction={index % 2 === 0 ? "left" : "right"}>
                <div
                  className={`relative rounded-3xl overflow-hidden cursor-pointer group
          transition-all duration-300 hover:-translate-y-2 hover:shadow-orange-lg
          ${isHome ? "text-white h-[300px]" : "border border-gray-100 bg-white h-[280px]"}`}
                  style={
                    isHome
                      ? {
                        backgroundImage: `url(${service.image})`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                      }
                      : {}
                  }
                  onClick={() => !isHome && setActiveService(service)}
                >
                  {/* OVERLAY ONLY ON HOME */}
                  {isHome && (
                    <>
                      {/* Base overlay */}
                      <div className="absolute inset-0 bg-black/50 group-hover:bg-black/40 transition-colors"></div>
                      {/* Strong bottom-to-top gradient for text readability */}
                      <div className="absolute inset-0 bg-linear-to-t from-black via-black/30 to-transparent"></div>
                    </>
                  )}

                  {/* CONTENT */}
                  <div className="relative z-10 p-8 h-full flex flex-col justify-end">
                    <div className="flex items-center gap-4 mb-4">
                      <div
                        className={`w-12 h-12 flex items-center justify-center rounded-2xl text-2xl shadow-lg
        ${isHome ? "bg-white/30 text-white backdrop-blur-sm" : "bg-primary/10 text-primary"}`}
                      >
                        {service.icon}
                      </div>

                      <h3 className={`text-xl font-bold leading-tight drop-shadow-lg
                        ${isHome ? "text-white" : "text-primary"}`}>
                        {service.title}
                      </h3>
                    </div>

                    <p
                      className={`text-sm leading-relaxed mb-6 drop-shadow-md
              ${isHome ? "text-white" : "text-gray-600"}`}
                    >
                      {service.shortDesc}
                    </p>

                    <button
                      className={`font-bold text-sm text-start flex items-center gap-2 transition-all
              ${isHome
                          ? "w-fit inline-flex items-center gap-3 bg-linear-to-r from-primary to-accent text-white px-4 py-2 rounded-md font-semibold hover:from-primary-dark hover:to-accent-dark  shadow-orange hover:shadow-green-lg transition-all duration-300 group"
                          : "text-primary-dark hover:gap-3"
                        }`}
                    >
                      Show More <span className="group-hover:translate-x-1 transition-all duration-300">→</span>
                    </button>
                  </div>
                </div>
              </GsapReveal>
            );
          })}
        </div>
      </div>

      {/* MODAL ONLY FOR SERVICES PAGE */}
      {variant === "services" && activeService && (
        <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
          <div
            className="absolute inset-0 bg-black/60"
            onClick={() => setActiveService(null)}
          ></div>

          <div className="relative bg-white max-w-lg w-full rounded-2xl p-8 z-10">
            <button
              onClick={() => setActiveService(null)}
              className="absolute top-4 right-4 text-gray-500 hover:text-black"
            >
              <FaTimes />
            </button>

            <div
              className="w-14 h-14 flex items-center justify-center rounded-xl
                            bg-primary/10 text-primary text-2xl mb-6"
            >
              {activeService.icon}
            </div>

            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              {activeService.title}
            </h3>

            <p className="text-gray-600 leading-relaxed">
              {activeService.fullDesc}
            </p>
          </div>
        </div>
      )}
    </section>
  );
};

export default DigitalServices;
