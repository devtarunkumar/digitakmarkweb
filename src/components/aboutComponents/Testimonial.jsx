"use our Client";
import { useEffect, useState } from "react";
import { FaQuoteLeft, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import GsapReveal from "../GsapReveal";

const testimonials = [
  {
    name: "Dr Dinesh Chandak",
    role: "founder Of Khushi Child Care Clinic",
    feedback:
      "Stratviz Solution delivered exactly what we needed — scalable architecture, clean UI, and a team that truly understands business goals.",
  },
  {
    name: "Mr Vinod Sharma",
    role: "founder Hariom Electric Motors",
    feedback:
      "Their engineering quality and communication are outstanding. Stratviz feels less like a vendor and more like a long-term partner.",
  },
  {
    name: "Dr SK Meena",
    role: "founder & Director Of SR Hospital",
    feedback:
      "From planning to execution, the Stratviz team showed deep technical expertise and a strong commitment to timelines.",
  },
];

const Testimonials = () => {
  const [active, setActive] = useState(0);

  const next = () => setActive((prev) => (prev + 1) % testimonials.length);
  const prev = () =>
    setActive((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));

  useEffect(() => {
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <GsapReveal width="100%" className="relative bg-white py-24 overflow-hidden">
      {/* BACKGROUND GLOW */}
      <div className="absolute left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-primary/10 blur-[120px]" />

      <div className="relative max-w-6xl mx-auto px-6">
        {/* HEADER */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-5xl font-bold text-gray-900 leading-tight">
            What Our <span className="text-primary">our Clients Say</span>
          </h2>
          <div className="w-20 h-1 bg-linear-to-r from-primary to-accent mx-auto mt-6 rounded-full shadow-orange"></div>
          <p className="mt-8 text-gray-600 max-w-3xl mx-auto text-lg leading-relaxed">
            Trusted by startups and enterprises for delivering reliable,
            scalable, and high-quality digital solutions at Stratviz Solution.
          </p>
        </div>

        {/* TESTIMONIAL CARD */}
        <div className="relative">
          <div
            className="relative mx-auto max-w-3xl
                       bg-white border border-gray-100
                       rounded-[40px] p-10 sm:p-14
                       shadow-xl shadow-orange/5
                       transition-all duration-500 hover:shadow-orange"
          >
            {/* QUOTE ICON */}
            <div className="mb-10 text-primary text-5xl opacity-20">
              <FaQuoteLeft />
            </div>

            {/* FEEDBACK */}
            <p className="text-xl sm:text-2xl text-gray-800 font-medium leading-relaxed mb-12 italic">
              “{testimonials[active].feedback}”
            </p>

            {/* our Client INFO */}
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6 border-t border-gray-50 pt-10">
              <div>
                <h4 className="text-gray-900 font-bold text-xl uppercase tracking-wide">
                  {testimonials[active].name}
                </h4>
                <p className="text-primary font-semibold text-sm mt-1 uppercase tracking-wider">
                  {testimonials[active].role}
                </p>
              </div>

              {/* NAVIGATION */}
              <div className="flex gap-4">
                <button
                  onClick={prev}
                  className="w-12 h-12 flex items-center justify-center rounded-2xl
                             bg-gray-50 text-gray-400
                             hover:bg-primary hover:text-white hover:shadow-orange
                             transition-all duration-300"
                >
                  <FaChevronLeft />
                </button>
                <button
                  onClick={next}
                  className="w-12 h-12 flex items-center justify-center rounded-2xl
                             bg-gray-50 text-gray-400
                             hover:bg-primary hover:text-white hover:shadow-orange
                             transition-all duration-300"
                >
                  <FaChevronRight />
                </button>
              </div>
            </div>
          </div>

          {/* DOTS */}
          <div className="mt-12 flex justify-center gap-4">
            {testimonials.map((_, index) => (
              <span
                key={index}
                onClick={() => setActive(index)}
                className={`h-2.5 rounded-full cursor-pointer transition-all duration-500
                  ${index === active
                    ? "bg-primary w-10 shadow-orange"
                    : "bg-gray-200 w-2.5 hover:bg-gray-300"
                  }`}
              />
            ))}
          </div>
        </div>
      </div>
    </GsapReveal>
  );
};

export default Testimonials;
