import GsapReveal from "../GsapReveal";

const TechStack = () => {
  return (
    <section className="bg-primary/5 md:py-10 mb-4 px-4 sm:px-6 lg:px-12">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900">
            Strategic Power for{" "}
            <span className="text-primary">Modern Businesses</span>
          </h2>
          <div className="w-20 h-1 bg-linear-to-r from-primary to-accent mx-auto mt-4 rounded-full shadow-orange"></div>
          <p className="mt-6 text-gray-700 text-lg sm:text-xl max-w-3xl mx-auto">
            Built with modern, scalable technologies to deliver
            high-performance, secure, and future-ready digital solutions by
            Stratviz Solution.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Frontend */}
          <GsapReveal width="100%" direction="left" delay={0.1}>
            <div
              className="group bg-white border border-gray-100 rounded-3xl p-8
                            transition-all duration-300 hover:-translate-y-2
                            hover:border-primary/40 hover:shadow-orange shadow-sm h-full"
            >
              <h3 className="text-2xl font-bold text-primary mb-6 group-hover:text-primary-dark transition-colors">
                Frontend Excellence
              </h3>

              <ul className="space-y-4 text-[16px]">
                {[
                  "React for dynamic user interfaces",
                  "HTML5 & CSS3 for modern layouts",
                  "JavaScript for interactive experiences",
                  "Responsive design frameworks",
                ].map((item, index) => (
                  <li
                    key={index}
                    className="flex items-start gap-4 text-gray-700"
                  >
                    <span className="mt-2 h-2 w-2 rounded-full bg-primary shadow-orange"></span>
                    <span className="font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </GsapReveal>

          {/* Backend */}
          <GsapReveal width="100%" direction="up" delay={0.2}>
            <div
              className="group bg-white border border-gray-100 rounded-3xl p-8
                            transition-all duration-300 hover:-translate-y-2
                            hover:border-primary/40 hover:shadow-orange shadow-sm h-full"
            >
              <h3 className="text-2xl font-bold text-primary mb-6 group-hover:text-primary-dark transition-colors">
                Backend Power
              </h3>

              <ul className="space-y-4 text-[16px]">
                {[
                  "Node.js for scalable server architecture",
                  "Express for robust API development",
                  "MongoDB for flexible data storage",
                  "RESTful & GraphQL integration",
                ].map((item, index) => (
                  <li
                    key={index}
                    className="flex items-start gap-4 text-gray-700"
                  >
                    <span className="mt-2 h-2 w-2 rounded-full bg-primary shadow-orange"></span>
                    <span className="font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </GsapReveal>

          {/* Marketing */}
          <GsapReveal width="100%" direction="right" delay={0.3}>
            <div
              className="group bg-white border border-gray-100 rounded-3xl p-8
                            transition-all duration-300 hover:-translate-y-2
                            hover:border-primary/40 hover:shadow-orange shadow-sm h-full"
            >
              <h3 className="text-2xl font-bold text-primary mb-6 group-hover:text-primary-dark transition-colors">
                Marketing Mastery
              </h3>

              <ul className="space-y-4 text-[16px]">
                {[
                  "Search Engine Optimization for organic traffic",
                  "Social Media Management for engagement",
                  "Email Marketing for conversions",
                  "Paid Advertising for results",
                ].map((item, index) => (
                  <li
                    key={index}
                    className="flex items-start gap-4 text-gray-700"
                  >
                    <span className="mt-2 h-2 w-2 rounded-full bg-primary shadow-orange"></span>
                    <span className="font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </GsapReveal>
        </div>
      </div>
    </section>
  );
};

export default TechStack;
