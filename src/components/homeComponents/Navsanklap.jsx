import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import GsapReveal from "../GsapReveal";

const industries = [
  {
    title: "Enterprise MSMEs",
    description:
      "Empowering small and medium enterprises with scalable digital infrastructure and automated recruitment pipelines to establish market credibility and drive sustainable operational growth.",
  },
  {
    title: "Brand Ecosystems",
    description:
      "Building end-to-end digital marketplaces that bridge the gap between niche talent and global brands, optimizing content monetization and strategic cross-channel reach.",
  },
  {
    title: "Asset Management",
    description:
      "Modernizing real estate and property operations through automated listing platforms and verified lead generation, ensuring maximum occupancy and streamlined management workflows.",
  },
  {
    title: "Talent Acquisition",
    description:
      "Transforming the hiring landscape by connecting high-potential talent with verified, growth-oriented roles through AI-driven matching and secure career development pipelines.",
  },
];

const StratvizSuite = () => {
  return (
    <section
      className="
        relative
        px-6 sm:px-12 lg:px-24
        md:py-16 py-10
        min-h-[80vh]
        flex items-center
        bg-[url('src/assets/navsanklapImg.jpg')]
        bg-cover
        bg-no-repeat
        bg-center
        overflow-hidden
      "
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-linear-to-b from-black/80 via-black/60 to-black/80"></div>

      <div className="relative z-10 max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 gap-12 items-center">

          {/* HEADER CONTENT */}
          <GsapReveal width="100%">
            <div
              className="flex flex-col items-center text-center space-y-6"
            >
              <h2 className="text-3xl sm:text-4xl lg:text-6xl font-bold text-white tracking-tight">
                Stratviz{" "}
                <span className="bg-linear-to-r from-primary to-accent bg-clip-text text-transparent drop-shadow-sm">
                  Solution Suite
                </span>
              </h2>

              <p className="text-gray-300 text-xl sm:text-3xl font-medium max-w-4xl mx-auto leading-tight">
                Visionary Strategy.{" "}
                <span className="text-white">Scalable Solutions.</span>
              </p>

              <div className="w-24 h-1 bg-linear-to-r from-primary to-accent rounded-full shadow-orange"></div>
            </div>
          </GsapReveal>

          {/* CARDS GRID */}
          <div
            className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-5"
          >
            {industries.map((item, index) => (
              <GsapReveal
                key={index}
                width="100%"
                direction={index % 2 === 0 ? "left" : "right"}
                delay={index * 0.1}
              >
                <div
                  className="group bg-white/8 backdrop-blur-2xl border border-white/10 rounded-[32px] p-10 shadow-orange
                             transition-all duration-500
                             hover:bg-white/10
                             hover:border-primary/30
                             hover:shadow-primary-dark hover:-translate-y-2"
                >
                  <div
                    className="w-12 h-12 bg-primary/20 rounded-2xl flex items-center justify-center text-primary text-xl mb-6 group-hover:bg-primary group-hover:text-white transition-all duration-300 "
                  >
                    <FaArrowRight />
                  </div>

                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-primary transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-gray-400 leading-relaxed text-sm group-hover:text-gray-200 transition-colors">
                    {item.description}
                  </p>
                </div>
              </GsapReveal>
            ))}
          </div>

          {/* CTA BUTTON */}
          <GsapReveal width="100%" direction="up" delay={0.4}>
            <div
              className="flex justify-center"
            >
              <Link
                to="/contact"
                className="
                  inline-flex mt-6 items-center gap-3 bg-linear-to-r from-primary to-accent text-white px-8 py-4 rounded-xl font-bold hover:from-primary-dark hover:to-accent-dark shadow-orange hover:shadow-green-lg hover:-translate-y-1
                  transition-all duration-300 group
                "
              >
                Explore the Ecosystem
                <span className="group-hover:translate-x-2 transition-transform duration-300">
                  <FaArrowRight />
                </span>
              </Link>
            </div>
          </GsapReveal>

        </div>
      </div>
    </section>
  );
};

export default StratvizSuite;
