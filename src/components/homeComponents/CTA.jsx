import { FaArrowRight } from "react-icons/fa";
import { useLocation, Link } from "react-router-dom";
import { memo } from "react";
import ctaImg from "../../assets/Boost-Your-Business.jpg";
import GsapReveal from "../GsapReveal";


const CTA = memo(() => {
  const location = useLocation();

  // Hide CTA on Contact page
  if (location.pathname === "/contact") {
    return null;
  }

  return (
    <GsapReveal width="100%" className="md:py-5 md:px-6">
      <div className="md:max-w-7xl w-full mx-auto">
        <div className="relative bg-black md:rounded-[40px] rounded-none overflow-hidden shadow-2xl">
          {/* Decorative Glow - Blue and Green */}
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/20 blur-[120px] -mr-64 -mt-64" />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-accent/20 blur-[100px] -ml-48 -mb-48" />

          <div className="relative grid lg:grid-cols-2 gap-12 items-center p-5 lg:p-20 z-10">
            {/* LEFT CONTENT */}
            <div className="text-white space-y-8">
              <h2 className="text-3xl lg:text-4xl font-bold leading-tight">
                Boost Your Business with <br />
                <span className="text-primary">Advanced Digital Solutions</span>
              </h2>
              <p className="text-gray-400 text-lg max-w-lg leading-relaxed">
                Empower your brand with Stratviz Solution's cutting-edge
                technology and strategic marketing expertise.
              </p>

              <Link
                to="/contact"
                className="inline-flex items-center gap-4 bg-linear-to-r from-primary to-accent px-8 py-4 rounded-2xl
                            text-white font-bold hover:from-primary-dark hover:to-accent-dark 
                            shadow-orange hover:shadow-green-lg
                            transition-all duration-300 group"
              >
                Get Started Today
                <FaArrowRight className="group-hover:translate-x-2 transition-transform" />
              </Link>
            </div>

            {/* RIGHT CONTENT */}
            <div className="relative flex justify-center items-center">
              <div className="relative">
                {/* Image Glow - Blue and Green */}
                <div className="absolute inset-x-0 bottom-0 h-1/2 bg-linear-to-r from-primary/20 to-accent/20 blur-3xl rounded-full" />
                <img
                  src={ctaImg}
                  alt="Stratviz Solution Solutions"
                  className="relative w-full h-auto max-h-[400px] rounded-3xl object-contain shadow-2xl"
                  width={600}
                  height={600}
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </GsapReveal>
  );
});

export default CTA;

