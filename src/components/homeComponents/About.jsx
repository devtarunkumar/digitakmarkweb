import { FaArrowRight, FaCheck } from "react-icons/fa";
import { Link } from "react-router-dom";
import { memo, useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import aboutImg from "../../assets/aboutImg.jpg";

gsap.registerPlugin(ScrollTrigger);

const AboutUs = memo(({ showButton = true }) => {

  const sectionRef = useRef(null);

  // ✅ SCROLL ANIMATION
  useGSAP(() => {
    gsap.from(sectionRef.current, {
      y: 80,
      opacity: 0,
      duration: 1,
      ease: "power3.out",
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 85%",
      },
    });
  }, []);

  return (
    <section
      ref={sectionRef}
      className="
        bg-white
        py-16 px-4
        relative
        z-40
        rounded-t-[40px]
        shadow-2xl
      "
    >
      <div className="max-w-7xl mx-auto lg:px-12">
        <div className="grid lg:grid-cols-[60%_40%] gap-12 items-center">

          {/* CONTENT */}
          <div className="space-y-6">
            <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 leading-tight">
              Welcome to{" "}
              <span className="bg-linear-to-r from-primary to-accent bg-clip-text text-transparent drop-shadow-sm">
                Stratviz Solution
              </span>
            </h2>

            <p className="text-gray-600 text-lg leading-relaxed">
              At Stratviz Solution, we bridge the gap between complex technology
              and strategic brand visibility. We are a premier digital partner
              dedicated to engineering high-performance software and intelligent
              marketing ecosystems.
            </p>

            <p className="text-xl font-bold text-gray-800">
              The Blueprint for Your Digital Success
            </p>

            <ul className="grid sm:grid-cols-2 gap-4 mt-6">
              {[
                "Strategic Tech Consulting",
                "High-Visibility Digital Marketing",
                "Custom Enterprise Software",
                "Data-Driven Growth Analytics",
                "End-to-End Product Engineering",
                "Scalable Cloud Architecture",
              ].map((item, index) => (
                <li
                  key={index}
                  className="flex items-center gap-3 text-gray-700 bg-gray-50 p-3 rounded-xl hover:bg-primary/10 transition-colors"
                >
                  <FaCheck className="text-primary text-sm" />
                  <span className="font-semibold text-sm">{item}</span>
                </li>
              ))}
            </ul>

            {showButton && (
              <Link
                to="/about"
                className="inline-flex mt-6 items-center gap-3 bg-linear-to-r from-primary to-accent text-white px-8 py-4 rounded-xl font-bold hover:from-primary-dark hover:to-accent-dark shadow-orange hover:shadow-green-lg transition-all duration-300 group"
              >
                Discover Our Vision
                <FaArrowRight className="group-hover:translate-x-2 transition-transform" />
              </Link>
            )}
          </div>

          {/* IMAGE */}
          <div className="flex justify-center lg:justify-end">
            <img
              src={aboutImg}
              alt="Stratviz Solution Headquarters"
              className="w-full max-w-sm object-cover rounded-4xl shadow-2xl transition-transform duration-500 hover:scale-[1.02]"
              loading="lazy"
            />
          </div>

        </div>
      </div>
    </section>
  );
});

export default AboutUs;