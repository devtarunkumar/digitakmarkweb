
import {
  FaCode,
  FaServer,
  FaDatabase,
  FaChartLine,
  FaLink,
  FaLock,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import { memo } from "react";
import frontendImg from "../../assets/frontend.jpg";
import backendImg from "../../assets/backend.jpg";
import databaseImg from "../../assets/database.jpg";
import dashboardImg from "../../assets/dashboard.jpg";
import apiImg from "../../assets/api-integration.avif";
import securityImg from "../../assets/Security.avif";
import GsapReveal from "../GsapReveal";

const services = [
  {
    title: "Frontend Development",
    slug: "frontend-development",
    description:
      "Modern and responsive user interfaces built using HTML, CSS, JavaScript, React, and Tailwind CSS to ensure smooth user experience across all devices.",
    icon: <FaCode />,
    image: frontendImg,
  },
  {
    title: "Backend Development",
    slug: "backend-development",
    description:
      "Secure and scalable server-side development using Node.js and Express for handling business logic and data processing.",
    icon: <FaServer />,
    image: backendImg,
  },
  {
    title: "Database Management",
    slug: "database-management",
    description:
      "Efficient data storage and management using MongoDB / MySQL to ensure fast and reliable performance.",
    icon: <FaDatabase />,
    image: databaseImg,
  },
  {
    title: "Dashboard & Admin Panels",
    slug: "dashboard-admin-panels",
    description:
      "Data-driven dashboards with analytics, charts, and management systems for better business decision-making.",
    icon: <FaChartLine />,
    image: dashboardImg,
  },
  {
    title: "API Integration",
    slug: "api-integration",
    description:
      "Secure REST APIs for smooth communication between frontend and backend systems.",
    icon: <FaLink />,
    image: apiImg,
  },
  {
    title: "Security & Deployment",
     slug: "security-deployment",
    description:
      "SSL integration, authentication systems, hosting setup, and performance optimization to ensure safe and reliable deployment.",
    icon: <FaLock />,
    image: securityImg,
  },
];

const Services = memo(({ mode = "redirect", onSelectService }) => {
  return (
    <section className="bg-primary/5 pt-16 px-4">
      <div className="max-w-7xl mx-auto pb-16">
        {/* HEADING */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900">
            Key Areas of Our Tech Stack
          </h2>
          <div className="w-20 h-1 bg-linear-to-r from-primary to-accent mx-auto mt-4 rounded-full shadow-orange"></div>
          <p className="mt-6 text-gray-600 text-lg max-w-3xl mx-auto">
            We help businesses build modern digital products using cutting-edge
            technologies and proven engineering practices with Stratviz
            Solution.
          </p>
        </div>

        {/* GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <GsapReveal key={index} width="100%" delay={index * 0.1} direction={index % 2 === 0 ? "left" : "right"}>
              <div
                className="group relative h-[300px] rounded-3xl overflow-hidden shadow-lg hover:shadow-orange-lg hover:-translate-y-2 transition-all duration-500"
              >
                {/* BACKGROUND IMAGE */}
                <img
                  src={service.image}
                  alt={service.title}
                  className="absolute inset-0 w-full h-full object-cover
                             group-hover:scale-110 transition-transform duration-700"
                  width={500}
                  height={500}
                  loading="lazy"
                />

                {/* Base overlay */}
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-colors duration-500"></div>

                {/* Strong bottom-to-top gradient for text readability */}
                <div className="absolute inset-0 bg-linear-to-t from-black via-black/40 to-transparent"></div>

                {/* CONTENT */}
                <div className="relative z-10 h-full p-8 flex flex-col justify-end text-white">
                  <div className="flex items-center gap-3 mb-4 text-2xl">
                    <div className="text-white drop-shadow-lg">{service.icon}</div>
                    <h3 className="text-xl font-bold text-white drop-shadow-lg">
                      {service.title}
                    </h3>
                  </div>

                  <p className="text-sm text-white leading-relaxed mb-4 drop-shadow-md">
                    {service.description}
                  </p>

                  {/* CTA */}
                  {mode === "redirect" ? (
                    <Link
                      to={`/services/${service.slug}`}
                      className="w-fit inline-flex items-center gap-3 bg-linear-to-r from-primary to-accent text-white px-2 py-1 rounded-md font-semibold hover:from-primary-dark hover:to-accent-dark  shadow-orange hover:shadow-green-lg
                            transition-all duration-300 group"
                    >
                      Learn More <span className="text-lg group-hover:translate-x-1 transition-all">→</span>
                    </Link>
                  ) : (
                    <button
                      onClick={() => onSelectService && onSelectService(service)}
                      className="w-fit inline-flex items-center gap-3 bg-linear-to-r from-primary to-accent text-white px-2 py-1 rounded-md font-semibold hover:from-primary-dark hover:to-accent-dark  shadow-orange hover:shadow-green-lg
                            transition-all duration-300 group"
                    >
                      Learn More <span className="text-lg group-hover:translate-x-1 transition-all">→</span>
                    </button>
                  )}
                </div>
              </div>
            </GsapReveal>
          ))}
        </div>
      </div>
    </section>
  );
});

export default Services;

