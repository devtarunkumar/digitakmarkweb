import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import GsapReveal from "../GsapReveal";
import darkimg from "../../assets/dark.avif";

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
      style={{ backgroundImage: `url(${darkimg})` }}
      className="relative px-5 sm:px-10 lg:px-24 py-14 sm:py-20 min-h-[80vh] flex items-center bg-cover bg-center overflow-hidden"
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black/80"></div>

      <div className="relative z-10 max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 gap-12">

          {/* HEADER */}
          <GsapReveal width="100%">
            <div className="flex flex-col items-center text-center space-y-6">
              <h2 className="text-3xl sm:text-4xl lg:text-6xl font-bold text-white">
                Stratviz{" "}
                <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  Solution Suite
                </span>
              </h2>

              <p className="text-gray-300 text-lg sm:text-2xl font-medium max-w-4xl">
                Visionary Strategy. <span className="text-white">Scalable Solutions.</span>
              </p>

              <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent rounded-full"></div>
            </div>
          </GsapReveal>

          {/* CARDS GRID */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-10 mt-6">
            {industries.map((item, index) => (
              <GsapReveal
                key={index}
                width="100%"
                direction={index % 2 === 0 ? "left" : "right"}
                delay={index * 0.1}
              >
                {/* Flip Card */}
                <div className="group [perspective:1200px] h-[260px]">

                  <div
                    className="
                      relative w-full h-full
                      transition-transform duration-700
                      [transform-style:preserve-3d]
                      group-hover:[transform:rotateY(180deg)]
                    "
                  >
                    {/* FRONT */}
                    <div className="absolute inset-0 rounded-3xl bg-black/40 backdrop-blur-xl border border-white/10 flex flex-col items-center justify-center text-center p-8 [backface-visibility:hidden]">

                      <div className="w-16 h-16 rounded-2xl flex items-center justify-center bg-gradient-to-br from-primary/20 to-accent/20 text-primary text-2xl mb-6 transition-all duration-500 group-hover:scale-110">
                        <FaArrowRight />
                      </div>

                      <h3 className="text-xl sm:text-2xl font-semibold text-white">
                        {item.title}
                      </h3>
                    </div>

                    {/* BACK */}
                    <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-primary/10 to-black/60 backdrop-blur-xl border border-primary/30 p-8 flex items-center justify-center text-center [transform:rotateY(180deg)] [backface-visibility:hidden]">

                      <p className="text-gray-200 text-sm sm:text-base leading-relaxed">
                        {item.description}
                      </p>
                    </div>

                  </div>
                </div>
              </GsapReveal>
            ))}
          </div>

          {/* CTA BUTTON */}
          <GsapReveal width="100%" direction="up" delay={0.4}>
            <div className="flex justify-center">
              <Link
                to="/contact"
                className="inline-flex mt-6 items-center gap-3 bg-gradient-to-r from-primary to-accent text-white px-8 py-4 rounded-xl font-bold hover:-translate-y-1 transition-all duration-300 group"
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