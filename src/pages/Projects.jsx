import React from "react";
import {
  FaDatabase,
  FaHospital,
  FaHome,
  FaChartLine,
  FaArrowRight,
} from "react-icons/fa";

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

const Projects = () => {
  return (
    <section className="bg-gray-50 py-24 px-6 sm:px-12 lg:px-24 min-h-screen">
      <div className="max-w-7xl mx-auto">
        {/* SECTION HEADER */}
        <div className="text-center mb-24">
          <h2 className="text-4xl md:text-6xl font-extrabold text-gray-900 mb-6">
            Our Strategic <span className="text-primary">Projects</span>
          </h2>
          <div className="w-24 h-1.5 bg-linear-to-r from-primary to-accent mx-auto rounded-full shadow-orange mb-8"></div>
          <p className="text-gray-600 max-w-3xl mx-auto text-xl leading-relaxed">
            Delivering high-performance software solutions that turn complex
            data into actionable business growth with Stratviz Solution.
          </p>
        </div>

        {/* PROJECTS LIST */}
        <div className="space-y-32">
          {projectList.map((project, index) => (
            <div
              key={index}
              className={`flex flex-col lg:items-center gap-16 ${index % 2 !== 0 ? "lg:flex-row-reverse" : "lg:flex-row"
                }`}
            >
              {/* IMAGE SIDE */}
              <div className="w-full lg:w-1/2 group relative">
                <div className="absolute -inset-4 bg-primary/10 rounded-[40px] blur-2xl group-hover:bg-primary/20 transition-all duration-500"></div>
                <div className="relative bg-white rounded-[32px] overflow-hidden shadow-2xl border border-gray-100">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-auto object-cover transform group-hover:scale-105 transition duration-700"
                    loading="lazy"
                  />
                </div>
              </div>


              {/* CONTENT SIDE */}
              <div className="w-full lg:w-1/2 space-y-8">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center text-primary text-2xl shadow-sm">
                    {project.icon}
                  </div>
                  <span className="text-sm font-bold text-primary uppercase tracking-[0.2em]">
                    {project.category}
                  </span>
                </div>

                <h3 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
                  {project.title}
                </h3>

                <p className="text-gray-600 leading-relaxed text-lg">
                  {project.description}
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-8 py-4">
                  {project.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <div className="mt-1.5 w-2 h-2 rounded-full bg-primary shadow-orange shrink-0"></div>
                      <span className="text-gray-700 text-sm font-bold">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="flex flex-wrap gap-3">
                  {project.tech.map((tag, idx) => (
                    <span
                      key={idx}
                      className="px-5 py-2 bg-gray-100/80 text-gray-600 rounded-xl text-xs font-bold uppercase tracking-wider border border-gray-200"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <button className="flex items-center gap-3 text-primary font-bold text-lg hover:gap-5 transition-all duration-300 group pt-4">
                  View Full Case Study
                  <FaArrowRight className="group-hover:translate-x-2 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* BOTTOM CALL TO ACTION */}
        <div className="mt-40 text-center">
          <div className="relative overflow-hidden p-16 lg:p-24 bg-gray-900 rounded-[50px] shadow-2xl border border-gray-800 max-w-5xl mx-auto">
            <div className="absolute top-0 left-0 w-96 h-96 bg-primary/10 blur-[120px] -ml-48 -mt-48" />

            <div className="relative z-10">
              <div className="w-20 h-20 bg-primary rounded-3xl flex items-center justify-center text-white text-4xl mx-auto mb-10 shadow-orange">
                <FaChartLine />
              </div>
              <h3 className="text-3xl lg:text-5xl font-bold text-white mb-6">
                Have a Complex Project in Mind?
              </h3>
              <p className="text-gray-400 mb-12 px-4 text-xl max-w-2xl mx-auto leading-relaxed">
                We specialize in custom engineering and data-driven platforms
                for industries ready to lead with Stratviz Solution.
              </p>
              <button className="bg-primary text-white px-12 py-5 rounded-2xl font-bold hover:bg-primary-dark shadow-orange hover:shadow-orange-lg hover:-translate-y-1 active:scale-95 transition-all duration-300 flex items-center gap-4 mx-auto text-lg">
                Request a Demo <FaDatabase />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
