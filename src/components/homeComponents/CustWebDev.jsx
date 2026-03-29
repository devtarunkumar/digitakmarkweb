import { FaArrowRight } from "react-icons/fa";
import GsapReveal from "../GsapReveal";

const services = [
  {
    title: "Website Design & Development",
    description:
      "We go beyond standard web development to engineer immersive digital experiences that drive engagement and ROI. Our multidisciplinary team fuses high-level design with robust code to transform your vision into a high-performance digital asset.",
    tags: [
      "Bespoke UI/UX Design",
      "Responsive Cross-Platform Layouts",
      "Exclusive Brand-Centric Themes",
      "Modular, Component-Based Architecture",
    ],
  },
  {
    title: "SEO Friendly Websites",
    description:
      "SEO-Optimized Architecture Deploy high-performance websites engineered with user-centric CMS frameworks. From industry leaders like WordPress and Drupal to bespoke custom engines, we deliver complete content autonomy tailored to your technical requirements.",
    tags: [
      "Performance-First Load Speeds",
      "Original, High-Authority Content",
      "Conversion-Optimized Workflows",
      "Superior UX/UI Design",
    ],
  },
  {
    title: "Other Services We Offer",
    description:
      "Advanced Integration & Support Ecosystem Expand your platform’s capabilities through expert API development and seamless third-party integrations, creating a dynamic and interconnected user environment.",
    tags: [
      "Complimentary Enterprise Hosting & Domain (12 Months)",
      "Unified Social Media Ecosystem Integration",
      "End-to-End SSL Encryption & Security Protocols",
      "Post-Launch Maintenance & Technical Support (6 Months)",
    ],
  },
];

const CustWebDev = () => {
  return (
    <section className="bg-white md:py-20 py-5 px-4 font-sans">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <GsapReveal width="100%">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 leading-tight">
              Customized{" "}
              <span className="bg-linear-to-r from-primary to-accent bg-clip-text text-transparent drop-shadow-sm">Web Development Services</span>
            </h2>
            <div className="w-20 h-1 bg-linear-to-r from-primary to-accent mx-auto mt-6 rounded-full shadow-orange"></div>
            <p className="mt-8 text-gray-600 text-lg max-w-4xl mx-auto leading-relaxed">
              We build performant, mobile-responsive, and user-centric web
              solutions at Stratviz Solution to help you stay ahead in the digital
              landscape.
            </p>
          </div>
        </GsapReveal>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const directions = ["left", "up", "right"];
            return (
              <GsapReveal
                key={index}
                width="100%"
                direction={directions[index % 3]}
                delay={index * 0.1}
              >
                <div
                  className="group bg-white border border-gray-100 rounded-3xl p-10 flex flex-col justify-between 
                             transition-all duration-500 hover:-translate-y-2 hover:shadow-orange-lg hover:border-primary/20 
                             shadow-sm relative overflow-hidden h-full"
                >
                  {/* Decorative Accent */}
                  <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full -mr-16 -mt-16 group-hover:bg-primary/10 transition-colors duration-500"></div>

                  <div>
                    {/* Top Indicator */}
                    <div className="h-1.5 w-16 bg-primary mb-8 rounded-full shadow-orange"></div>

                    <h3 className="text-2xl font-bold text-gray-900 mb-6 group-hover:text-primary transition-colors">
                      {service.title}
                    </h3>

                    <p className="text-gray-600 mb-8 leading-relaxed text-[15px]">
                      {service.description}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-col gap-3">
                      {service.tags.map((tag, i) => (
                        <div
                          key={i}
                          className="flex items-center gap-3 text-sm text-gray-700 bg-gray-50 p-3 rounded-2xl group-hover:bg-primary/10 transition-colors"
                        >
                          <div className="w-2 h-2 rounded-full bg-primary shadow-orange"></div>
                          <span className="font-medium">{tag}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mt-10 pt-6 border-t border-gray-50 flex items-center justify-between">
                    <button className="flex items-center gap-2 text-sm font-bold text-primary group-hover:gap-3 transition-all">
                      Learn More <span className="text-lg">→</span>
                    </button>
                  </div>
                </div>
              </GsapReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default CustWebDev;
