import { FaCheck } from "react-icons/fa";
import { Link } from "react-router-dom";

const AboutUs = ({ showButton = true }) => {
  return (
    <section className="bg-gray-50 py-4">
      <div className="mx-auto lg:px-12 px-2 py-2">
        <div className="grid lg:grid-cols-[60%_40%] gap-2 items-center justify-around">
          {/* CONTENT SECTION */}
          <div className="space-y-3 px-4 sm:px-3  lg:px-0">
            <h2 className="text-[24px] text-start lg:text-5xl font-bold text-gray-800 leading-snug">
              Welcome to <span className="bg-linear-to-r from-primary to-accent bg-clip-text text-transparent">Stratviz Solution</span>
            </h2>

            <p className="text-gray-600 text-[16px] leading-relaxed">
              We are a technology-driven digital agency committed to innovation
              and engineering excellence. We specialize in building scalable,
              secure software and executing data-driven digital marketing
              strategies that empower modern businesses. By integrating
              cutting-edge technologies with performance marketing, we help
              brands optimize operations, enhance User Experience (UX), and
              drive measurable ROI-focused growth.
            </p>
            <p className="text-[20px] font-semibold">
              Our Core Pillars of Digital Excellence
            </p>

            <ul className="grid sm:grid-cols-2 text-[17px] gap-3 mt-4">
              {[
                "Standardized Agile Development",
                "Full-Stack Engineering & Marketing Experts",
                "Scalable & Secure Infrastructure",
                "our Client-Centric Growth Strategy",
                "Quality-Driven Delivery & Performance",
                "Transparent & Ethical Processes",
              ].map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <FaCheck className="text-primary mt-1 text-sm" />
                  <span className="text-gray-700 font-medium">{item}</span>
                </li>
              ))}
            </ul>

            {/* CONDITIONAL BUTTON */}
            {showButton && (
              <Link
                to="/about"
                className="inline-flex mt-3 items-center gap-2 bg-primary text-white px-8 py-3 rounded-lg font-semibold hover:bg-primary-dark shadow-orange hover:shadow-orange-lg transition-all"
              >
                Learn More
                <span className="text-lg">→</span>
              </Link>
            )}
          </div>

          {/* IMAGE SECTION */}
          <div className="flex justify-center lg:justify-end">
            <img
              src="src/assets/aboutImg.jpg"
              alt="Stratviz Solution Office"
              className="w-full max-w-sm object-cover rounded-xl shadow-orange"
              width={500}
              height={500}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
