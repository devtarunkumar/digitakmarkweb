import {
  FaCheckCircle,
  FaLightbulb,
  FaHandshake,
  FaStar,
  FaUsers,
  FaEye,
  FaBriefcase,
  FaChartLine,
} from "react-icons/fa";
import qualityImg from "../../assets/quality.jpg";
import customerSatisfactionImg from "../../assets/customer-satisfaction.jpg";
import innovationImg from "../../assets/innovation.jpg";
import transparencyImg from "../../assets/transparency.jpg";
import reliabilityImg from "../../assets/relaibility.avif";
import professionalismImg from "../../assets/professionalism.jpg";
import continuousImprovementImg from "../../assets/continous-improvement.jpg";
import partnershipImg from "../../assets/partnership.jpg";
import GsapReveal from "../GsapReveal";

const coreValues = [
  {
    icon: <FaStar className="text-white" />,
    title: "Quality & Excellence",
    desc: "We deliver high-quality digital solutions with strong performance and attention to detail.",
    image: qualityImg,
  },
  {
    icon: <FaUsers className="text-white" />,
    title: "Customer First Approach",
    desc: "our Client satisfaction is our top priority. We understand needs and provide the best possible solutions.",
    image: customerSatisfactionImg,
  },
  {
    icon: <FaLightbulb className="text-white" />,
    title: "Innovation",
    desc: "We use modern technologies and creative ideas to build smart websites and dashboards.",
    image: innovationImg,
  },
  {
    icon: <FaEye className="text-white" />,
    title: "Transparency",
    desc: "We maintain honest communication and clear processes with founder.",
    image: transparencyImg,
  },
  {
    icon: <FaCheckCircle className="text-white" />,
    title: "Reliability",
    desc: "We complete projects on time and ensure smooth service delivery.",
    image: reliabilityImg,
  },
  {
    icon: <FaBriefcase className="text-white" />,
    title: "Professionalism",
    desc: "We follow ethical standards and maintain a professional work culture.",
    image: professionalismImg,
  },
  {
    icon: <FaChartLine className="text-white" />,
    title: "Continuous Improvement",
    desc: "We constantly upgrade our skills and technologies to deliver better results.",
    image: continuousImprovementImg,
  },
  {
    icon: <FaHandshake className="text-white" />,
    title: "Long-Term Partnership",
    desc: "We focus on building strong and lasting relationships with founder.",
    image: partnershipImg,
  },
];

const CoreValues = () => {
  return (
    <section className="bg-black py-16 px-6">
      <div className="max-w-7xl mx-auto">
        {/* HEADER */}
        <GsapReveal width="100%">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold text-white">
              Our Core Values
            </h2>
            <div className="w-20 h-1 bg-linear-to-r from-primary to-accent mx-auto mt-4 rounded-full shadow-orange"></div>
            <p className="mt-6 text-gray-400 text-lg max-w-3xl mx-auto">
              The principles that guide our work and define our commitment to
              excellence at Stratviz Solution.
            </p>
          </div>
        </GsapReveal>

        {/* GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {coreValues.map((item, index) => (
            <GsapReveal
              key={index}
              width="100%"
              direction="up"
              delay={index * 0.1}
            >
              <div
                className="relative group rounded-3xl overflow-hidden
                           bg-white/5 backdrop-blur-md
                           border border-white/10
                           transition-all duration-300
                           hover:-translate-y-2
                           hover:border-primary-light/50
                           hover:shadow-orange h-full"
              >
                {/* GLOW LAYER */}
                <div
                  className="absolute inset-0 rounded-3xl
                             opacity-0 group-hover:opacity-100
                             transition duration-500
                             bg-linear-to-br
                             from-primary/10 via-primary-light/5 to-transparent
                             blur-2xl"
                />

                {/* IMAGE */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover
                               transition-transform duration-700
                               group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-black via-black/20 to-transparent"></div>
                  <div className="absolute bottom-4 left-6">
                    <div className="bg-primary p-3 rounded-2xl text-white text-xl shadow-orange">
                      {item.icon}
                    </div>
                  </div>
                </div>

                {/* CONTENT */}
                <div className="relative p-8">
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-primary transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-gray-400 text-[15px] leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            </GsapReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoreValues;
