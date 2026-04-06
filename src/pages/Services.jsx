import {
  FaLaptopCode,
  FaChartPie,
  FaFileAlt,
  FaCheckCircle,
  FaHospital,
  FaHome
} from "react-icons/fa";
import GsapReveal from "../components/GsapReveal";

const servicesData = [
  {
    title: "Website Development",
    icon: <FaLaptopCode />,
    description:
      "Tailored digital experiences ranging from high-converting business portfolios to complex company portals.",
    features: [
      "Business & Portfolio Sites",
      "Responsive Mobile-First Design",
      "SEO Optimized Architecture",
    ],
  },
  {
    title: "Dashboard Development",
    icon: <FaChartPie />,
    description:
      "Centralize your operations with powerful admin panels and data-driven visualization tools.",
    features: [
      "Custom Admin Panels",
      "Real-time Data Visualization",
      "User-Centric Interfaces",
    ],
  },
  {
    title: "MSME (Udyam) Registration",
    icon: <FaFileAlt />,
    description:
      "Fast, hassle-free registration support to unlock government benefits and financial growth for your enterprise.",
    features: [
      "End-to-End Documentation",
      "Policy Benefit Consulting",
      "Rapid Support & Approval",
    ],
  },
];

const projectList = [
  {
    title: "Healthcare Analytics Dashboard",
    category: "Operational Intelligence",
    icon: <FaHospital />,
    image: "src/assets/healthcare-dashboard.png",
    description:
      "A dynamic dashboard designed to monitor hospital performance, patient statistics, and operational efficiency in real time.",
    features: [
      "Bed Occupancy monitoring system",
      "Average ER time analysis by department",
      "Revenue breakdown by age group",
      "Staff-to-patient ratio tracking",
    ],
    tech: ["MERN Stack", "REST API", "Data Visualization"],
  },
  {
    title: "Real Estate Analytics Dashboard",
    category: "Market Intelligence",
    icon: <FaHome />,
    image: "src/assets/realestate-dashboard.png",
    description:
      "A comprehensive dashboard developed to monitor and analyze property sales, listings, and market trends in real time.",
    features: [
      "Property status tracking (Sold/Pending)",
      "Agent-wise performance analytics",
      "Price trend visualization",
      "Real-time database management",
    ],
    tech: ["MongoDB", "Express.js", "React.js", "Node.js"],
  },
];

const Services = () => {
  return (
    <section className="bg-gray-50 py-24 px-6 sm:px-12 lg:px-24 min-h-screen">
      <div className="max-w-7xl mx-auto">
        {/* HEADER */}
        <GsapReveal width="100%">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-6xl font-extrabold text-gray-900 mb-6">
              Our <span className="text-primary">Expertise</span>
            </h2>
            <div className="w-24 h-1.5 bg-linear-to-r from-primary to-accent mx-auto rounded-full shadow-orange mb-8"></div>
            <p className="text-gray-600 max-w-3xl mx-auto text-xl leading-relaxed">
              Stratviz Solution provides the strategic digital infrastructure
              needed to scale modern businesses in a competitive landscape.
            </p>
          </div>
        </GsapReveal>

        {/* SERVICES GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {servicesData.map((service, index) => (
            <GsapReveal
              key={index}
              width="100%"
              delay={index * 0.1}
              direction={index % 2 === 0 ? "left" : "right"}
            >
              <div
                className="h-full group bg-white p-10 rounded-[40px] shadow-sm border border-gray-50 
                           transition-all duration-500 hover:-translate-y-2 hover:shadow-orange-lg 
                           hover:border-primary/20 relative overflow-hidden"
              >
                {/* Icon Container */}
                <div className="w-20 h-20 bg-primary/10 rounded-3xl flex items-center justify-center text-primary text-4xl mb-8 group-hover:bg-primary group-hover:text-white transition-all duration-500 shadow-sm group-hover:shadow-orange">
                  {service.icon}
                </div>

                <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-8 leading-relaxed text-[16px]">
                  {service.description}
                </p>

                <ul className="space-y-4">
                  {service.features.map((feature, idx) => (
                    <li
                      key={idx}
                      className="flex items-center gap-4 text-gray-700 font-bold text-sm"
                    >
                      <div className="bg-primary/20 p-1.5 rounded-lg">
                        <FaCheckCircle className="text-primary" />
                      </div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </GsapReveal>
          ))}
        </div>

        {/* STRATEGIC PROJECTS SECTION */}
        <div className="mt-32">
          <GsapReveal width="100%">
            <div className="text-center mb-20">
              <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 mb-6">
                Our Strategic <span className="text-primary">Projects</span>
              </h2>
              <div className="w-20 h-1 bg-linear-to-r from-primary to-accent mx-auto rounded-full shadow-orange mb-8"></div>
              <p className="text-gray-600 max-w-2xl mx-auto text-lg leading-relaxed">
                Delivering high-performance software solutions that turn complex
                data into actionable business growth.
              </p>
            </div>
          </GsapReveal>

          <div className="space-y-24">
            {projectList.map((project, index) => (
              <GsapReveal key={index} width="100%">
                <div
                  className={`flex flex-col lg:items-center gap-12 ${index % 2 !== 0 ? "lg:flex-row-reverse" : "lg:flex-row"
                    }`}
                >
                  {/* IMAGE SIDE */}
                  <div className="w-full lg:w-1/2 group relative">
                    <div className="absolute -inset-4 bg-primary/10 rounded-[35px] blur-2xl group-hover:bg-primary/20 transition-all duration-500"></div>
                    <div className="relative bg-white rounded-[28px] overflow-hidden shadow-xl border border-gray-100">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-auto object-cover transform group-hover:scale-105 transition duration-700"
                        loading="lazy"
                      />

                    </div>
                  </div>

                  {/* CONTENT SIDE */}
                  <div className="w-full lg:w-1/2 space-y-6">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary text-xl shadow-sm">
                        {project.icon}
                      </div>
                      <span className="text-xs font-bold text-primary uppercase tracking-[0.2em]">
                        {project.category}
                      </span>
                    </div>

                    <h3 className="text-2xl md:text-3xl font-bold text-gray-900 leading-tight">
                      {project.title}
                    </h3>

                    <p className="text-gray-600 leading-relaxed">
                      {project.description}
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 py-2">
                      {project.features.map((feature, idx) => (
                        <div key={idx} className="flex items-start gap-3">
                          <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary shadow-orange shrink-0"></div>
                          <span className="text-gray-700 text-[13px] font-bold">
                            {feature}
                          </span>
                        </div>
                      ))}
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tag, idx) => (
                        <span
                          key={idx}
                          className="px-4 py-1.5 bg-gray-100 text-gray-500 rounded-lg text-xs font-bold uppercase tracking-wider"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </GsapReveal>
            ))}
          </div>
        </div>

        {/* CALL TO ACTION */}
        <GsapReveal width="100%">
          <div className="mt-32 relative overflow-hidden bg-gray-900 rounded-[50px] p-12 lg:p-20 text-center text-white shadow-2xl">
            <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-primary/20 blur-[100px] -mr-48 -mt-48" />
            <div className="absolute bottom-0 left-0 w-[350px] h-[350px] bg-accent/20 blur-[90px] -ml-44 -mb-44" />

            <div className="relative z-10">
              <h3 className="text-3xl lg:text-5xl font-bold mb-6">
                Ready to scale your business?
              </h3>
              <p className="text-gray-400 mb-12 max-w-2xl mx-auto text-lg leading-relaxed">
                Let's discuss how our strategic solutions can drive measurable
                results for your brand with Stratviz Solution.
              </p>
              <button className="bg-linear-to-r from-primary to-accent hover:from-primary-dark hover:to-accent-dark text-white px-12 py-5 rounded-2xl font-bold transition-all shadow-orange hover:shadow-green-lg hover:-translate-y-1 active:scale-95 text-lg">
                Start Your Project
              </button>
            </div>
          </div>
        </GsapReveal>
      </div>
    </section>
  );
};

export default Services;
