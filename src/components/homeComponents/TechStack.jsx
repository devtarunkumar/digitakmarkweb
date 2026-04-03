import GsapReveal from "../GsapReveal";

const TechStack = () => {
  return (
    <section
      id="tech-stack"
      aria-label="Technology Stack"
      className="relative bg-[#0b0f19] text-gray-200 py-16 lg:py-24 px-4 sm:px-6 lg:px-12 overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 blur-[120px]" />
        <div className="absolute bottom-10 right-10 w-72 h-72 bg-accent/10 blur-[120px]" />
      </div>

      <div className="max-w-7xl mx-auto">
        {/* ========= HEADING ========= */}
        <header className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
            Strategic Power for{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Modern Businesses
            </span>
          </h2>

          <div className="w-24 h-[3px] bg-gradient-to-r from-primary to-accent mx-auto mt-5 rounded-full"></div>

          <p className="mt-6 text-gray-400 text-lg sm:text-xl max-w-3xl mx-auto">
            Built with scalable technologies and marketing intelligence to
            deliver high-performance, secure, and future-ready digital
            experiences by Stratviz Solution.
          </p>
        </header>

        {/* ========= CARDS ========= */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

          <GsapReveal width="100%" direction="left" delay={0.1}>
            <TechCard
              title="Frontend Excellence"
              items={[
                "React for dynamic user interfaces",
                "HTML5 & CSS3 modern layouts",
                "JavaScript interactive experiences",
                "Responsive & performance-first UI",
              ]}
            />
          </GsapReveal>

          <GsapReveal width="100%" direction="up" delay={0.2}>
            <TechCard
              title="Backend Power"
              items={[
                "Node.js scalable architecture",
                "Express secure API development",
                "MongoDB flexible database",
                "REST & GraphQL integrations",
              ]}
            />
          </GsapReveal>

          <GsapReveal width="100%" direction="right" delay={0.3}>
            <TechCard
              title="Marketing Mastery"
              items={[
                "SEO for organic growth",
                "Social Media engagement strategy",
                "Email marketing automation",
                "Performance paid advertising",
              ]}
            />
          </GsapReveal>

        </div>
      </div>
    </section>
  );
};

/* ================= CARD COMPONENT ================= */

const TechCard = ({ title, items }) => {
  return (
    <article
      className="
      group relative rounded-3xl p-8 h-full
      bg-white/5 backdrop-blur-xl
      border border-white/10
      transition-all duration-500
      hover:-translate-y-3
      hover:border-primary/50
      hover:shadow-[0_0_40px_rgba(99,102,241,0.15)]
      "
    >
      {/* Gradient Hover Overlay */}
      <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-br from-primary/10 to-accent/10"></div>

      <h3 className="relative text-2xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
        {title}
      </h3>

      <ul className="relative space-y-4">
        {items.map((item, index) => (
          <li key={index} className="flex items-start gap-4">
            <span className="mt-2 h-2 w-2 rounded-full bg-primary shadow-lg"></span>
            <span className="text-gray-300 font-medium">{item}</span>
          </li>
        ))}
      </ul>
    </article>
  );
};

export default TechStack;