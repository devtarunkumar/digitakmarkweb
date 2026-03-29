import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const GsapPageTransition = ({ children }) => {
  const containerRef = useRef(null);

  useGSAP(() => {
    gsap.fromTo(
      containerRef.current,
      { opacity: 0, scale: 0.98, y: 20, filter: "blur(5px)" },
      {
        opacity: 1,
        scale: 1,
        y: 0,
        filter: "blur(0px)",
        duration: 0.8,
        ease: "power2.out",
        clearProps: "all" // Perform cleanup after animation
      }
    );
  }, { scope: containerRef });

  return <div ref={containerRef} className="w-full h-full">{children}</div>;
};

export default GsapPageTransition;
