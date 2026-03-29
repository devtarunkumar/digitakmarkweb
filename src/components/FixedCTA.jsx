import { useRef } from "react";
import { FaPhone, FaWhatsapp } from "react-icons/fa";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const FixedCTA = () => {
  const phoneNumber = "+917015801724";
  const whatsappNumber = "917015801724";
  const containerRef = useRef(null);

  useGSAP(() => {
    // Initial entrance animation
    gsap.fromTo(
      containerRef.current,
      { y: 100, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, ease: "power3.out", delay: 1 }
    );

    // Continuous floating animation
    gsap.to(containerRef.current, {
      y: -10,
      duration: 1.5,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
      delay: 2 // Start floating after entrance matches
    });
  }, { scope: containerRef });

  return (
    <div ref={containerRef} className="fixed right-4 md:right-6 bottom-4 md:bottom-6 z-50 flex flex-col gap-3 md:gap-4">
      <a
        href={`tel:${phoneNumber}`}
        className="w-12 h-12 md:w-14 md:h-14 bg-linear-to-r from-primary to-accent rounded-full flex items-center justify-center text-white shadow-orange hover:shadow-green-lg hover:scale-110 transition-all duration-300 group rotate-90"
        aria-label="Call Us"
      >
        <FaPhone className="text-base md:text-lg  transition-transform" />
      </a>
      <a
        href={`https://wa.me/${whatsappNumber}`}
        target="_blank"
        rel="noopener noreferrer"
        className="w-12 h-12 md:w-14 md:h-14 bg-linear-to-r from-accent to-primary rounded-full flex items-center justify-center text-white shadow-green hover:shadow-orange-lg hover:scale-110 transition-all duration-300 group"
        aria-label="WhatsApp Us"
      >
        <FaWhatsapp className="text-lg md:text-xl group-hover:scale-110 transition-transform" />
      </a>
    </div>
  );
};

export default FixedCTA;
