import ContactSection from "../components/contactComponents/ContactSection";
import GsapReveal from "../components/GsapReveal";

const Contact = () => {
  return (
    <section className="bg-gray-50 md:pt-16 pt-5 pb-10">
      <div className="md:max-w-7xl w-full mx-auto md:px-6">
        {/* HEADER SECTION */}
        <GsapReveal width="100%">
          <div className="relative overflow-hidden bg-gray-900 md:rounded-[3rem] rounded-none md:px-8 px-4 py-10 md:py-16 md:mb-10 mb-5 shadow-2xl">
            {/* Decorative Glow */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/20 blur-[120px] -mr-64 -mt-64" />

            <div className="relative text-center max-w-4xl mx-auto z-10">
              <p className="text-primary text-sm font-bold tracking-[0.2em] uppercase mb-6 drop-shadow-sm">
                Connect With Us
              </p>
              <h2 className="text-4xl md:text-4xl font-semibold text-white leading-tight mb-8">
                Talk to our experts and see <br className="hidden md:block" />
                how we can <span className="text-primary uppercase">
                  Empower
                </span>{" "}
                you.
              </h2>
              <div className="w-24 h-1.5 bg-linear-to-r from-primary to-accent mx-auto rounded-full shadow-orange"></div>
            </div>

            <div className="relative grid lg:grid-cols-2 gap-8 mt-16 z-10">
              <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-[30px] p-10 hover:border-primary/30 transition-all duration-300">
                <h3 className="text-2xl font-bold text-white mb-4">
                  Project Planning
                </h3>
                <p className="text-gray-400 text-lg leading-relaxed">
                  Discuss requirements and technical challenges with our strategic
                  consultants at Stratviz Solution.
                </p>
              </div>
              <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-[30px] p-10 hover:border-primary/30 transition-all duration-300">
                <h3 className="text-2xl font-bold text-white mb-4">
                  Support & Careers
                </h3>
                <p className="text-gray-400 text-lg leading-relaxed">
                  Reach out for job opportunities or ongoing project assistance
                  from our expert team.
                </p>
              </div>
            </div>
          </div>
        </GsapReveal>

        <GsapReveal width="100%">
          <ContactSection />
        </GsapReveal>

        {/* Company Location */}
        <GsapReveal width="100%">
          <section className="py-10 md:py-16 px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">

              <h2 className="text-2xl sm:text-3xl font-semibold text-gray-800 mb-1">
                Find Us
              </h2>
              <p className="text-sm sm:text-base text-gray-500 mb-6 md:mb-8">
                Come visit us at our office
              </p>

              {/* Map */}
              <div className="w-full rounded-xl sm:rounded-2xl overflow-hidden border border-gray-200 shadow-sm h-64 sm:h-80 md:h-96 lg:h-[450px]">
                <iframe
                  src="https://maps.google.com/maps?q=28.621141,77.4274835&z=17&output=embed"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>

              {/* Address Card */}
              <div className="mt-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-gray-50 rounded-xl px-4 py-4 sm:px-6 border border-gray-100">

                {/* Address */}
                <div className="flex items-start gap-3">
                  <span className="text-red-500 mt-0.5 shrink-0">📍</span>
                  <div>
                    <p className="font-medium text-gray-800 text-sm sm:text-base">
                      Stratviz Solutions
                    </p>
                    <p className="text-gray-500 text-xs sm:text-sm mt-0.5">
                      Noida, Uttar Pradesh, India
                    </p>
                  </div>
                </div>

                {/* Directions Button */}
                <a
                  href="https://www.google.com/maps/place/Stratviz+Solutions/@28.6212227,77.4277605,19.64z/data=!4m6!3m5!1s0x390ce57df558d6bb:0xf6668b8df7809aa5!8m2!3d28.621141!4d77.4274835!16s%2Fg%2F11yz1qtl88!18m1!1e1?entry=ttu&g_ep=EgoyMDI2MDMxOC4xIKXMDSoASAFQAw%3D%3D"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 bg-white border border-gray-200 text-gray-700 text-sm font-medium px-4 py-2 rounded-lg hover:bg-gray-100 transition-colors whitespace-nowrap self-start sm:self-auto"
                >
                  Get Directions
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </a>
              </div>
            </div>
          </section>
        </GsapReveal>
      </div>
    </section>
  );
};

export default Contact;