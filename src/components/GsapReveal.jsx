import { useRef, memo } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const GsapReveal = memo(({ children, width = "fit-content", delay = 0, direction = "up", distance = 50 }) => {
  const ref = useRef(null);

  useGSAP(() => {
    const element = ref.current;

    let x = 0;
    let y = 0;

    switch (direction) {
      case "left":
        x = -distance; // Starts from left, moves right
        break;
      case "right":
        x = distance; // Starts from right, moves left
        break;
      case "down":
        y = -distance; // Starts from top, moves down
        break;
      case "up":
      default:
        y = distance; // Starts from bottom, moves up
        break;
    }

    gsap.fromTo(
      element,
      { opacity: 0, x, y, filter: "blur(10px)" },
      {
        opacity: 1,
        x: 0,
        y: 0,
        filter: "blur(0px)",
        duration: 1,
        delay: delay,
        ease: "power3.out",
        clearProps: "all",
        scrollTrigger: {
          trigger: element,
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
      }
    );
  }, { scope: ref });

  return (
  <div
    ref={ref}
    style={{ width, overflow: "visible", position: "relative" }}
  >
    <div style={{ pointerEvents: "auto" }}>
      {children}
    </div>
  </div>
);
});

export default GsapReveal;

