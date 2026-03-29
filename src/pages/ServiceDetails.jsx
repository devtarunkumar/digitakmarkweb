import { useParams } from "react-router-dom";
import { servicesData } from "../data/servicesData";
import "./ServiceDetails.css";
import { useEffect } from "react";

const ServiceDetails = () => {
  const { serviceName } = useParams();

  const service = servicesData.find(
    (item) => item.slug === serviceName
  );

  /* ================= SCROLL ANIMATION ================= */
  useEffect(() => {
    const elements = document.querySelectorAll(".service-section");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.2 }
    );

    elements.forEach((el) => {
      el.classList.add("fade-scroll");
      observer.observe(el);
    });

    return () => observer.disconnect(); // cleanup (PRO practice)
  }, []);

  if (!service) {
    return <div className="not-found">Service Not Found</div>;
  }

  return (
    <section className="service-details">

      {/* HERO */}
      <div className="service-hero">
        <img src={service.image} alt={service.title} />
        <div className="service-hero-overlay">
          <h1>{service.title}</h1>
          <p>{service.description}</p>
        </div>
      </div>

      <div className="service-container">

        {/* OVERVIEW */}
        <div className="service-section">
          <h2>Service Overview</h2>
          <p>
            Our {service.title} service is designed to help businesses transform
            digitally with modern technologies, scalable architecture, and
            performance-driven solutions.
          </p>

          <img
            src="/OV1.webp"
            alt="overview"
            className="service-img"
          />
        </div>

        {/* BEGINNER */}
        <div className="service-section">
          <h2>Understanding the Basics</h2>

          <p>
            At the beginner level, we analyze user needs, market trends,
            and technical planning before development begins.
          </p>

          <ul>
            <li>✔ Requirement Analysis</li>
            <li>✔ Market Research</li>
            <li>✔ UX Planning</li>
            <li>✔ Technology Selection</li>
          </ul>

          <img
            src="/ub.avif"
            alt="planning"
            className="service-img"
          />
        </div>

        {/* PROCESS */}
        <div className="service-section">
          <h2>Our Development Process</h2>

          <ul>
            <li>⚡ UI/UX Design & Prototyping</li>
            <li>⚡ Frontend & Backend Development</li>
            <li>⚡ Performance Optimization</li>
            <li>⚡ Testing & QA</li>
            <li>⚡ Deployment</li>
          </ul>

          <img
            src="/dp.webp"
            alt="development"
            className="service-img"
          />
        </div>

        {/* ADVANCED */}
        <div className="service-section">
          <h2>Advanced Capabilities</h2>

          <ul>
            <li>🚀 Cloud Integration</li>
            <li>🚀 API Architecture</li>
            <li>🚀 AI Automation</li>
            <li>🚀 Security Optimization</li>
            <li>🚀 Scalable Infrastructure</li>
          </ul>

          <img
            src="/ad.webp"
            alt="advanced"
            className="service-img"
          />
        </div>

        {/* INDUSTRIES */}
        <div className="service-section">
          <h2>Industries We Serve</h2>

          <ul>
            <li>🏢 Real Estate</li>
            <li>🛒 E-commerce</li>
            <li>🏥 Healthcare</li>
            <li>🎓 Education</li>
            <li>💼 Enterprise</li>
          </ul>

          <img
            src="/is.png"
            alt="industries"
            className="service-img"
          />
        </div>

        {/* FINAL */}
        <div className="service-section">
          <h2>Our Commitment to Excellence</h2>

          <p>
            We build future-ready digital solutions focused on performance,
            scalability, and user experience while maintaining clean
            architecture and modern design standards.
          </p>

          <img
            src="/oc.webp"
            alt="team"
            className="service-img"
          />
        </div>

      </div>
    </section>
  );
};

export default ServiceDetails;