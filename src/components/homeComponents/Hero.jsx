import { useRef, useEffect } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

import heroVideo from "../../assets/hero-video.mp4";
import heroMobileVideo from "../../assets/hero-video1.mp4";

const HeroSlider = () => {
  const sectionRef = useRef(null);
  const desktopVideoRef = useRef(null);
  const mobileVideoRef = useRef(null);
  const titleRef = useRef(null);

  /* ================= GSAP ================= */
  useGSAP(() => {
    const ctx = gsap.context(() => {

      // VIDEO ENTRY
      gsap.fromTo(
        [desktopVideoRef.current, mobileVideoRef.current],
        { opacity: 0, scale: 1.1 },
        {
          opacity: 1,
          scale: 1,
          duration: 1.4,
          ease: "expo.out",
        }
      );

      // TEXT ANIMATION
      const letters =
        titleRef.current?.querySelectorAll(".letter");

      if (letters) {
        gsap.fromTo(
          letters,
          { y: 60, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            stagger: 0.05,
            duration: 0.8,
            ease: "power3.out",
            delay: 0.4,
          }
        );
      }

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  /* ================= AUTOPLAY FIX ================= */
  useEffect(() => {
    const playVideo = (video) => {
      if (!video) return;
      video.muted = true;
      video.play().catch(() => {});
    };

    playVideo(desktopVideoRef.current);
    playVideo(mobileVideoRef.current);
  }, []);

  const text = "GROW WITH US";

  return (
    <section
      ref={sectionRef}
      className="relative w-full min-h-[120svh] md:min-h-[120vh] -mt-24 overflow-hidden bg-black"
    >
      {/* ===== DESKTOP VIDEO ===== */}
      <video
        ref={desktopVideoRef}
        className="absolute inset-0 w-full h-full object-cover hidden md:block z-0"
        src={heroVideo}
        autoPlay
        muted
        loop
        playsInline
      />

      {/* ===== MOBILE VIDEO ===== */}
      <video
        ref={mobileVideoRef}
        className="absolute inset-0 w-full h-full object-cover block md:hidden z-0"
        src={heroMobileVideo}
        autoPlay
        muted
        loop
        playsInline
      />

      {/* ===== OVERLAY ===== */}
      <div className="absolute inset-0 bg-black/40 z-10" />

      {/* ===== MOBILE TEXT ===== */}
      <div className="absolute inset-0 flex items-center justify-center text-center px-4 z-20 md:hidden">
        <h1
          ref={titleRef}
          className="
            text-4xl sm:text-5xl
            font-extrabold
            flex flex-wrap justify-center
            leading-tight
            tracking-wide
            text-white
          "
        >
          {text.split("").map((char, i) => (
            <span
              key={i}
              className="
                letter
                inline-block
                bg-gradient-to-r
                from-cyan-400
                via-blue-500
                to-purple-500
                bg-clip-text
                text-transparent
                drop-shadow-[0_0_15px_rgba(59,130,246,0.7)]
              "
            >
              {char === " " ? "\u00A0" : char}
            </span>
          ))}
        </h1>
      </div>
    </section>
  );
};

export default HeroSlider;