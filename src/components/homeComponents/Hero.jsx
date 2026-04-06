import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import girlImg from "../../assets/girl.jpeg";
import girlMobile from "../../assets/girl-mobile.jpeg";

const HeroSlider = () => {
  const sectionRef = useRef(null);
  const typingRef = useRef(null);
  const girlRef = useRef(null);

  useGSAP(() => {
    const tl = gsap.timeline();

    // ===== Entrance Animation =====
    tl.from(".hero-text-item", {
      y: 100,
      opacity: 0,
      duration: 1,
      stagger: 0.1,
      ease: "power4.out",
    })
      .from(
        girlRef.current,
        {
          opacity: 0,
          scale: 0.9,
          x: 50,
          duration: 1.5,
          ease: "expo.out",
        },
        "-=0.5"
      )
      .from(
        ".floating-card",
        {
          y: 30,
          opacity: 0,
          stagger: 0.2,
          duration: 1,
          ease: "back.out(1.7)",
        },
        "-=1"
      );

    // ===== Floating Cards Animation =====
    gsap.to(".floating-card", {
      y: -20,
      duration: 2.5,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
      stagger: 0.4,
    });

    // ===== Mouse Parallax (Desktop Only) =====
    const handleMouseMove = (e) => {
      const xPos = e.clientX / window.innerWidth - 0.5;
      const yPos = e.clientY / window.innerHeight - 0.5;

      gsap.to(girlRef.current, {
        x: xPos * 30,
        y: yPos * 30,
        duration: 0.8,
        ease: "power2.out",
      });

      gsap.to(".floating-card", {
        x: xPos * -60,
        y: yPos * -60,
        duration: 1,
        stagger: 0.1,
      });
    };

    if (window.innerWidth > 768) {
      window.addEventListener("mousemove", handleMouseMove);
    }

    // ===== Typing Effect =====
    const word = "Innovation";

    const typeLoop = () => {
      if (!typingRef.current) return;

      typingRef.current.textContent = "";

      gsap.to({}, {
        duration: 1.5,
        onUpdate() {
          const progress = Math.floor(this.progress() * word.length);
          typingRef.current.textContent = word.slice(0, progress);
        },
        onComplete: () => gsap.delayedCall(2, eraseText),
      });
    };

    const eraseText = () => {
      gsap.to({}, {
        duration: 1,
        onUpdate() {
          const progress = Math.ceil(
            (1 - this.progress()) * word.length
          );
          typingRef.current.textContent = word.slice(0, progress);
        },
        onComplete: () => gsap.delayedCall(0.5, typeLoop),
      });
    };

    typeLoop();

    return () =>
      window.removeEventListener("mousemove", handleMouseMove);
  }, { scope: sectionRef });

  return (
    <section
      ref={sectionRef}
      className="relative w-full overflow-hidden min-h-[110svh] -mt-20 bg-[#0A1118] flex items-center"
    >
      {/* Background */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute w-[600px] h-[600px] bg-blue-500/10 blur-[150px] rounded-full -top-40 -left-40" />
        <div className="absolute w-[500px] h-[500px] bg-emerald-500/10 blur-[130px] rounded-full bottom-0 right-0" />
        <div className="absolute inset-0 opacity-[0.03] bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />
      </div>

      <div className="relative z-20 max-w-7xl mx-auto px-6 lg:px-16 grid md:grid-cols-2 items-center gap-10 w-full">

        {/* LEFT TEXT */}
        <div className="space-y-8 text-center md:text-left hero-text-item">
          <h1 className="text-4xl md:text-7xl font-extrabold text-white leading-[1.1]">
            Strategic Digital <br />
            <span className="bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent">
              <span ref={typingRef}></span>
              <span className="ml-1 inline-block w-1 h-12 md:h-16 bg-emerald-400 animate-pulse"></span>
            </span>
          </h1>

          <p className="text-gray-400 text-lg md:text-xl max-w-xl leading-relaxed">
            Empowering businesses through cutting-edge digital infrastructure
            and <span className="text-white font-medium">ROI-focused</span> marketing strategies.
          </p>
        </div>

        {/* RIGHT IMAGE + CARDS */}
        <div className="relative flex justify-center md:justify-end">

          {/* Wrapper animated by GSAP */}
          <div ref={girlRef} className="relative">

            {/* Desktop Image */}
            <img
              src={girlImg}
              alt="Digital Expert"
              className="hidden md:block w-[500px] rounded-2xl drop-shadow-[0_35px_60px_rgba(0,0,0,0.8)]"
            />

            {/* Mobile Image */}
            <img
              src={girlMobile}
              alt="Digital Expert"
              className="block md:hidden w-[260px] rounded-2xl drop-shadow-[0_25px_40px_rgba(0,0,0,0.7)]"
            />

            {/* Floating Card 1 */}
            <div className="floating-card absolute top-4 left-0 md:top-10 md:-left-12 p-4 rounded-xl bg-white/5 border border-white/10 backdrop-blur-xl z-20">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-emerald-500/20 flex items-center justify-center text-emerald-400 text-xs font-bold">
                  ✓
                </div>
                <p className="text-white text-xs font-bold">
                  Verified Strategy
                </p>
              </div>
            </div>

            {/* Floating Card 2 */}
            <div className="floating-card absolute bottom-10 right-0 md:bottom-20 md:-right-12 p-4 rounded-xl bg-white/5 border border-white/10 backdrop-blur-xl z-20">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-400 text-xs">
                  📈
                </div>
                <p className="text-white text-xs font-bold">
                  ROI Focused
                </p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSlider;