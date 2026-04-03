import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const heroVideo = "../src/assets/hero-video.mp4";

const HeroSlider = () => {
  const contentRef = useRef(null);
  const typingRef = useRef(null);
  const videoRef = useRef(null);

  // GSAP ANIMATIONS
  useGSAP(() => {
    // CONTENT ENTRY ANIMATION
    gsap.fromTo(
      contentRef.current,
      { opacity: 0, y: 40 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power3.out",
      }
    );

    const word = "Innovation";

    const typeLoop = () => {
      typingRef.current.textContent = "";

      // TYPE EFFECT
      gsap.to({}, {
        duration: word.length * 0.12,
        ease: "none",
        onUpdate: function () {
          const progress = Math.floor(
            this.progress() * word.length
          );
          typingRef.current.textContent =
            word.slice(0, progress);
        },
        onComplete: eraseText,
      });
    };

    const eraseText = () => {
      gsap.to({}, {
        delay: 1,
        duration: word.length * 0.08,
        ease: "none",
        onUpdate: function () {
          const progress = Math.floor(
            (1 - this.progress()) * word.length
          );
          typingRef.current.textContent =
            word.slice(0, progress);
        },
        onComplete: () => {
          gsap.delayedCall(0.5, typeLoop);
        },
      });
    };

    typeLoop();
  }, []);

  // VIDEO HOVER ZOOM
  const handleMouseEnter = () => {
    gsap.to(videoRef.current, {
      scale: 1.2,
      duration: 1.2,
      ease: "power3.out",
    });
  };

  const handleMouseLeave = () => {
    gsap.to(videoRef.current, {
      scale: 1.1,
      duration: 1.2,
      ease: "power3.out",
    });
  };

  return (
    <section
      className="
  relative w-full overflow-hidden
  h-[100vh] md:h-[115vh]
  -mt-20 bg-[#0F4FA8]
  z-0
  "
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* DARK OVERLAY */}
      <div className="absolute inset-0 z-20 bg-gradient-to-r from-black/90 via-black/50 to-transparent"></div>

      {/* BACKGROUND VIDEO */}
      <div className="relative w-full h-full overflow-hidden">
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          className="
      w-full h-full object-cover
      scale-100 md:scale-110
      will-change-transform
    "
        >
          <source src={heroVideo} type="video/mp4" />
        </video>
      </div>

      {/* CONTENT */}
      <div className="absolute inset-0 z-30 flex items-center px-8 md:px-24">
        <div
          ref={contentRef}
          className="max-w-4xl space-y-6 opacity-0"
        >
          {/* HEADING */}
          <h1 className="text-4xl md:text-7xl font-extrabold text-white leading-tight tracking-wider">
            Strategic Digital <br />

            {/* TYPING TEXT */}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent italic">
              <span ref={typingRef}></span>
              <span className="animate-pulse">|</span>
            </span>
          </h1>

          {/* DESCRIPTION */}
          <p className="text-gray-200 text-lg md:text-2xl max-w-2xl leading-relaxed">
            Empowering businesses through cutting-edge digital
            infrastructure and ROI-focused marketing strategies.
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeroSlider;