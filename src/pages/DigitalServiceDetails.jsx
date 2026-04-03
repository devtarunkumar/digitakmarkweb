import { useParams, useNavigate } from "react-router-dom";
import { digitalServicesData } from "../data/digitalServicesData";
import { motion } from "framer-motion";

/* ================= ANIMATION VARIANTS ================= */

const fadeUp = {
  hidden: { opacity: 0, y: 60 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: "easeOut",
    },
  },
};

const stagger = {
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

/* ================= MAIN COMPONENT ================= */

const DigitalServiceDetails = () => {
  const { slug } = useParams();
  const navigate = useNavigate(); // ✅ Hook INSIDE component

  const service = digitalServicesData.find(
    (item) => item.id === slug
  );

  if (!service) {
    return (
      <h2 className="text-center text-white mt-20 text-2xl">
        Service Not Found
      </h2>
    );
  }

  return (
    <main className="bg-[#0b0f19] text-gray-200 min-h-screen overflow-hidden">

      {/* ========= BACK BUTTON ========= */}
      <div className="max-w-6xl mx-auto px-6 pt-8">
        <button
          onClick={() => navigate(-1)}
          className="px-5 py-2 rounded-full bg-gradient-to-r 
          from-orange-500 to-yellow-400 text-black font-semibold
          hover:scale-105 transition"
        >
          ← Back
        </button>
      </div>

      {/* ========= HERO SECTION ========= */}
      <motion.section
        initial={{ opacity: 0, scale: 1.1 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        className="relative h-[60vh] flex items-center justify-center text-center"
      >
        <img
          src={service.image}
          alt={service.title}
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-black/70 backdrop-blur-sm"></div>

        <div className="relative z-10 px-6 max-w-4xl">
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-orange-400 to-yellow-400 bg-clip-text text-transparent">
            {service.title}
          </h1>

          <p className="mt-4 text-lg text-gray-300">
            {service.description}
          </p>
        </div>
      </motion.section>

      {/* ========= CONTENT ========= */}
      <motion.section
        variants={stagger}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="max-w-6xl mx-auto px-6 py-16 space-y-14"
      >
        <ContentBlock title="Overview">
          {service.details.overview}
        </ContentBlock>

        <ListBlock title="Features" items={service.details.features} />

        <ListBlock title="Our Process" items={service.details.process} />

        <ListBlock title="Benefits" items={service.details.benefits} />

        {/* TOOLS */}
        <motion.section variants={fadeUp}>
          <SectionTitle title="Tools We Use" />

          <div className="flex flex-wrap gap-3 mt-6">
            {service.details.tools.map((tool, i) => (
              <motion.span
                key={i}
                whileHover={{ scale: 1.1 }}
                className="px-4 py-2 rounded-full text-sm font-semibold
                bg-gradient-to-r from-orange-500 to-yellow-400
                text-black shadow-md cursor-pointer"
              >
                {tool}
              </motion.span>
            ))}
          </div>
        </motion.section>

        {/* FAQ */}
        {service.details.faq.length > 0 && (
          <motion.section variants={fadeUp}>
            <SectionTitle title="FAQ" />

            <div className="space-y-4 mt-6">
              {service.details.faq.map((faq, i) => (
                <motion.div
                  key={i}
                  whileHover={{ scale: 1.02 }}
                  className="bg-white/5 border border-white/10 rounded-xl p-5 hover:border-orange-400 transition"
                >
                  <h3 className="font-semibold text-orange-300">
                    {faq.q}
                  </h3>
                  <p className="text-gray-300 mt-2">
                    {faq.a}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.section>
        )}
      </motion.section>
    </main>
  );
};

/* ================= REUSABLE COMPONENTS ================= */

const SectionTitle = ({ title }) => (
  <h2 className="text-3xl font-bold text-white relative inline-block">
    {title}
    <span className="block w-16 h-[3px] bg-gradient-to-r from-orange-400 to-yellow-400 mt-2 rounded-full"></span>
  </h2>
);

const ContentBlock = ({ title, children }) => (
  <motion.section variants={fadeUp}>
    <SectionTitle title={title} />
    <p className="mt-6 leading-relaxed text-gray-300 text-lg">
      {children}
    </p>
  </motion.section>
);

const ListBlock = ({ title, items }) => (
  <motion.section variants={fadeUp}>
    <SectionTitle title={title} />

    <ul className="grid md:grid-cols-2 gap-4 mt-6">
      {items.map((item, i) => (
        <motion.li
          key={i}
          whileHover={{ scale: 1.03 }}
          className="bg-white/5 border border-white/10 rounded-xl p-4
          hover:border-orange-400 transition"
        >
          ✓ {item}
        </motion.li>
      ))}
    </ul>
  </motion.section>
);

export default DigitalServiceDetails;