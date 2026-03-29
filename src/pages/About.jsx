import {
  FaCheck,
  FaRocket,
  FaLightbulb,
  FaUsers,
  FaBuilding,
} from "react-icons/fa";
import CoreValues from "../components/aboutComponents/Values";
import Testimonials from "../components/aboutComponents/Testimonial";
import AboutUs from "../components/aboutComponents/AboutUs";
import GsapReveal from "../components/GsapReveal";

export default function Page() {
  return (
    <section className="bg-gray-50 pt-14">
      {/* ABOUT US SECTION */}
      <GsapReveal width="100%">
        <AboutUs showButton={false} />
      </GsapReveal>

      {/* OUR VISION SECTION */}
      <GsapReveal width="100%">
        <div className="bg-black py-20 px-6">
          <div className="max-w-7xl mx-auto text-center text-white">
            <h2 className="text-3xl lg:text-5xl font-bold mb-6">Our Vision</h2>
            <div className="w-20 h-1 bg-linear-to-r from-primary to-accent mx-auto mb-10 rounded-full shadow-orange"></div>
            <p className="text-gray-300 text-lg sm:text-xl max-w-4xl mx-auto mb-16 leading-relaxed">
              We aim to empower businesses, creators, and talent through our
              innovating solutions. Our focus is to transform the digital journey
              for
              <span className="text-primary font-bold">
                {" "}
                MSMEs, Influencers, Job Seekers, and Property Owners
              </span>
              , contributing to a robust and inclusive digital economy.
            </p>

            {/* CARDS */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  title: "MSMEs",
                  icon: <FaRocket />,
                  desc: "Smart tools to scale operations, boost visibility, and drive sustainable growth.",
                },
                {
                  title: "Influencers",
                  icon: <FaLightbulb />,
                  desc: "End-to-end solutions to monetize content and manage brand collaborations.",
                },
                {
                  title: "Job Seekers",
                  icon: <FaUsers />,
                  desc: "Direct access to verified opportunities with growth-focused companies.",
                },
                {
                  title: "Property Owners",
                  icon: <FaBuilding />,
                  desc: "Simplified property listing, management, and customer engagement systems.",
                },
              ].map((card, idx) => (
                <GsapReveal key={idx} width="100%" delay={idx * 0.1} direction={idx % 2 === 0 ? "left" : "right"}>
                  <div
                    className="bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-8 text-white shadow-sm hover:-translate-y-2 hover:shadow-orange hover:border-primary/30 transition-all duration-300 group h-full"
                  >
                    <div className="w-14 h-14 bg-primary rounded-2xl flex items-center justify-center text-white text-2xl mb-6 shadow-orange group-hover:scale-110 transition-transform">
                      {card.icon}
                    </div>
                    <h3 className="text-xl font-bold mb-4 group-hover:text-primary transition-colors">
                      {card.title}
                    </h3>
                    <p className="text-gray-400 text-sm leading-relaxed">
                      {card.desc}
                    </p>
                  </div>
                </GsapReveal>
              ))}
            </div>
          </div>
        </div>
      </GsapReveal>

      {/* WHY CHOOSE SECTION */}
      <GsapReveal width="100%">
        <div className="max-w-7xl mx-auto px-6 py-24">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 leading-tight">
              Why Choose <span className="text-primary">Stratviz Solution</span>
            </h2>
            <div className="w-20 h-1 bg-linear-to-r from-primary to-accent mx-auto mt-6 rounded-full shadow-orange"></div>
            <p className="text-gray-600 max-w-3xl text-lg mx-auto mt-8 leading-relaxed">
              We combine expertise, innovation, and a our Client-first approach to
              deliver digital solutions that truly make an impact.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              "Proven track record of successful projects",
              "Experienced and skilled development team",
              "Focus on scalable and secure solutions",
              "our Client-centric approach with transparent communication",
              "Innovative solutions tailored to your business needs",
              "Ethical and quality-driven project delivery",
            ].map((item, index) => (
              <GsapReveal delay={index * 0.1} direction={index % 2 === 0 ? "left" : "right"}
                key={index}
                className="bg-white border border-gray-100 p-8 rounded-3xl shadow-sm hover:shadow-orange hover:border-primary/20 transition-all duration-300 flex items-start gap-4"
              >
                <div className="bg-primary/10 p-2 rounded-lg">
                  <FaCheck className="text-primary text-lg" />
                </div>
                <h3 className="font-bold text-gray-800 leading-snug">{item}</h3>
              </GsapReveal>
            ))}
          </div>
        </div>
      </GsapReveal>

      {/* FOOTER COMPONENTS */}
      <GsapReveal width="100%">
        <CoreValues />
      </GsapReveal>
      <GsapReveal width="100%">
        <Testimonials />
      </GsapReveal>
    </section>
  );
}
