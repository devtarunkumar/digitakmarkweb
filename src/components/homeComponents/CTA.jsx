import { FaArrowRight } from "react-icons/fa";
import { useLocation, Link } from "react-router-dom";
import { memo } from "react";
import GsapReveal from "../GsapReveal";

// Assets
import team1 from "../../assets/tt1.avif";
import team2 from "../../assets/tt2.webp";
import team3 from "../../assets/tt3.jpg";
import team4 from "../../assets/tt4.avif";

const teamData = [
  {
    name: "Amit Sharma",
    role: "Creative Director",
    img: team1,
  },
  {
    name: "Rahul Mehta",
    role: "Marketing Strategist",
    img: team2,
  },
  {
    name: "Priya Verma",
    role: "UI/UX Designer",
    img: team3,
  },
  {
    name: "Sneha Kapoor",
    role: "Frontend Developer",
    img: team4,
  },
];

const CTA = memo(() => {
  const location = useLocation();

  // Hide CTA on contact page
  if (location.pathname === "/contact") return null;

  return (
    <section
      aria-label="Boost your business with Stratviz Solution"
      className="md:py-10 md:px-6 px-4"
    >
      <GsapReveal width="100%">
        <div className="max-w-7xl mx-auto relative overflow-hidden rounded-[40px] bg-black shadow-2xl">
          {/* ================= BACKGROUND VIDEO ================= */}
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
          >
            <source src="/videos/marketing-bg.mp4" type="video/mp4" />
          </video>

          {/* LEFT DARK OVERLAY (Main Darkness) */}
          <div className="absolute inset-0 bg-black/70" />

          {/* GRADIENT MASK → 50% Video Visible */}
          <div className="absolute inset-0 bg-gradient-to-r 
                from-black 
                via-black/80 
                to-transparent" />

          {/* Decorative Glow */}
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/20 blur-[120px]" />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-accent/20 blur-[120px]" />

          {/* ================= CONTENT ================= */}
          <div className="relative z-10 grid lg:grid-cols-2 gap-12 items-center p-6 md:p-14">

            {/* LEFT SIDE — CTA CONTENT */}
            <div className="text-white space-y-8">
              <h2 className="text-3xl lg:text-5xl font-bold leading-tight">
                Boost Your Business with <br />
                <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  Advanced Digital Solutions
                </span>
              </h2>

              <p className="text-gray-300 text-lg max-w-xl leading-relaxed">
                Empower your brand with Stratviz Solution’s cutting-edge
                technology, creative strategy, and performance-driven
                marketing solutions designed to scale your business faster.
              </p>

              <Link
                to="/contact"
                aria-label="Get Started Today"
                className="inline-flex items-center gap-4
                bg-gradient-to-r from-primary to-accent
                px-8 py-4 rounded-2xl
                font-semibold text-white
                hover:scale-105 transition-all duration-300
                shadow-lg group"
              >
                Get Started Today
                <FaArrowRight className="group-hover:translate-x-2 transition-transform duration-300" />
              </Link>
            </div>

            {/* RIGHT SIDE — MEET OUR TEAM */}
            <div className="space-y-8">
              <h3 className="text-white text-2xl font-semibold text-center lg:text-left">
                Meet Our Team
              </h3>

              <div className="grid grid-cols-2 sm:grid-cols-2 gap-6">
                {teamData.map((member, index) => (
                  <GsapReveal key={index}>
                    <div
                      className="
                      group relative
                      bg-white/5 backdrop-blur-lg
                      border border-white/10
                      rounded-2xl p-4
                      text-center
                      hover:bg-white/10
                      transition-all duration-500
                      hover:-translate-y-2
                      "
                    >
                      <img
                        src={member.img}
                        alt={member.name}
                        loading="lazy"
                        width={200}
                        height={200}
                        className="w-20 h-20 mx-auto rounded-full object-cover mb-3 border-2 border-primary"
                      />

                      <h4 className="text-white font-semibold">
                        {member.name}
                      </h4>

                      <p className="text-sm text-gray-400">
                        {member.role}
                      </p>
                    </div>
                  </GsapReveal>
                ))}
              </div>
            </div>

          </div>
        </div>
      </GsapReveal>
    </section>
  );
});

export default CTA;