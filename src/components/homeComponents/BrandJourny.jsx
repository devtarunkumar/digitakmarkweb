import GsapReveal from "../GsapReveal";

const journeySteps = [
  {
    step: "Step 1",
    title: "Product & Market Research",
    description:
      "We deeply research your product or service and analyze how your competitors are performing in the online market.",
  },
  {
    step: "Step 2",
    title: "Technology & Product Development",
    description:
      "We build or enhance your tech product based on competitor analysis, market gaps, and user expectations.",
  },
  {
    step: "Step 3",
    title: "Testing & Optimization",
    description:
      "Rigorous testing ensures your product is stable, user-friendly, and ready for real-world performance.",
  },
  {
    step: "Step 4",
    title: "Marketing Strategy Research",
    description:
      "We study competitor marketing strategies, channels, and ROI to design a high-impact growth plan.",
  },
  {
    step: "Step 5",
    title: "Marketing Execution & Scaling",
    description:
      "We apply SEO, social media, paid ads, and branding strategies to drive measurable growth.",
  },
  {
    step: "Step 6",
    title: "Market Fit & Brand Recognition",
    description:
      "Your brand achieves product–market fit, gains customer trust, and becomes a recognized name in the market.",
  },
];

const BrandJourney = () => {
  return (
    <section className="relative bg-black/80 py-16 overflow-hidden">
      {/* soft corner gradients - Blue and Green */}
      <div className="absolute -top-28 -right-[60px] w-[360px] h-[360px] bg-primary/30 rounded-full blur-3xl opacity-60" />
      <div className="absolute top-30 left-[60px] w-[380px] h-[360px] bg-linear-to-r from-primary via-accent to-primary-light rounded-full blur-3xl opacity-40" />
      <div className="absolute bottom-5 -left-[180px] w-[360px] h-[320px] bg-accent/20 rounded-full blur-3xl opacity-60" />
      <div className="absolute bottom-[240px] right-[280px] w-[360px] h-[320px] bg-linear-to-r from-primary via-accent to-primary-light rounded-full blur-3xl opacity-30" />

      <div className="relative max-w-7xl mx-auto px-6">
        {/* HEADER */}
        <GsapReveal width="100%">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold text-white">
              Your Brand Journey
            </h2>
            <div className="w-20 h-1 bg-linear-to-r from-primary to-accent mx-auto mt-4 rounded-full shadow-orange"></div>
            <p className="mt-6 text-lg text-gray-300 max-w-4xl mx-auto">
              A structured path from research to recognition — designed for
              sustainable growth with Stratviz Solution.
            </p>
          </div>
        </GsapReveal>

        {/* TIMELINE */}
        <div className="relative">
          {/* MOBILE LINE */}
          <div className="absolute -left-2 top-0 h-full w-px bg-white/10 md:hidden" />

          {/* DESKTOP LINE */}
          <div className="hidden md:block absolute left-1/2 top-0 h-full w-px bg-white/10" />

          <div className="space-y-8">
            {journeySteps.map((item, index) => {
              const isEven = index % 2 === 0;

              return (
                <div
                  key={index}
                  className={`relative md:grid md:grid-cols-2 md:gap-12 items-start`}
                >
                  {/* DOT */}
                  <div
                    className="
                      absolute top-4
                      -left-1.5 md:left-1/2
                      w-4 h-4 rounded-full
                      bg-primary
                      transform -translate-x-1/2
                      shadow-orange
                      z-10
                    "
                  />

                  {/* CONTENT */}
                  <div
                    className={`pl-6 md:pl-0
                       ${isEven
                        ? "md:col-start-1 md:text-right"
                        : "md:col-start-2"
                      }`}
                  >
                    <GsapReveal
                      width="100%"
                      direction={isEven ? "left" : "right"}
                      delay={0.1}
                    >
                      <div className="inline-block bg-white/10 backdrop-blur-md border border-white/10 p-6 rounded-2xl shadow-sm hover:shadow-orange transition-all duration-300 max-w-md group hover:bg-white/15">
                        <span className="text-primary font-bold text-sm uppercase tracking-wider">
                          {item.step}
                        </span>
                        <h3 className="text-xl font-bold text-white mt-1 group-hover:text-primary transition-colors">
                          {item.title}
                        </h3>
                        <p className="mt-2 text-sm text-gray-300 leading-relaxed">
                          {item.description}
                        </p>
                      </div>
                    </GsapReveal>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandJourney;
