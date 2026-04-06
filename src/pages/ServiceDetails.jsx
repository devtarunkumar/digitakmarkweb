import { useParams, useNavigate } from "react-router-dom";
import { services } from "../data/servicesData";
import { FaArrowLeft } from "react-icons/fa";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const ServiceDetail = () => {

    /* ================= ROUTER ================= */
    const { slug } = useParams();
    const navigate = useNavigate();

    /* ================= FIND SERVICE ================= */
    const service = services.find((s) => s.slug === slug);

    const pageRef = useRef(null);

    /* ================= PAGE ANIMATION ================= */
    useEffect(() => {
        const ctx = gsap.context(() => {

            gsap.from(".service-hero h1", {
                y: 60,
                opacity: 0,
                duration: 1,
                ease: "power3.out"
            });

            gsap.utils.toArray(".detail-section").forEach((section) => {

                const text = section.querySelector(".section-text-wrap");
                const image = section.querySelector(".section-image");

                gsap.from(text, {
                    x: -80,
                    opacity: 0,
                    duration: 1,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: section,
                        start: "top 80%",
                    }
                });

                gsap.from(image, {
                    x: 80,
                    opacity: 0,
                    duration: 1,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: section,
                        start: "top 80%",
                    }
                });
            });

        }, pageRef);

        return () => ctx.revert();
    }, []);

    /* ================= NOT FOUND ================= */
    if (!service) {
        return (
            <div className="h-screen flex items-center justify-center text-xl text-white bg-[#020617]">
                Service not found
            </div>
        );
    }

    /* ================= BACK FUNCTION ================= */
    const handleBack = () => {
        if (window.history.length > 1) navigate(-1);
        else navigate("/services");
    };

    return (
        <div
            ref={pageRef}
            className="min-h-screen bg-[#020617] text-white overflow-hidden"
        >

            {/* ================= HERO ================= */}
            <div className="relative h-[220px] sm:h-[260px] md:h-[350px] lg:h-[420px] overflow-hidden">

                {/* BACK BUTTON */}
                <button
                    onClick={handleBack}
                    className="
                    absolute top-4 left-4 md:top-6 md:left-6 z-20
                    flex items-center gap-2
                    bg-black/60 backdrop-blur-md
                    px-4 py-2 rounded-full
                    text-sm md:text-base
                    hover:bg-black transition
                    "
                >
                    <FaArrowLeft />
                    Back
                </button>

                {/* IMAGE */}
                <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover scale-105"
                />
            </div>

            {/* ================= SECTIONS ================= */}
            <div className="space-y-16 md:space-y-24 py-16 md:py-24">
                {service.details.sections.map((section, index) => (
                    <DetailSection
                        key={index}
                        section={section}
                        reverse={index % 2 !== 0}
                    />
                ))}
            </div>
        </div>
    );
};

/* =========================================================
   DETAIL SECTION
========================================================= */

const DetailSection = ({ section, reverse }) => {
    return (
        <div className="detail-section max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">

            <div className="
                grid
                md:grid-cols-2
                gap-10 md:gap-14
                items-center
            ">

                {/* TEXT */}
                <div
                    className={`section-text-wrap ${reverse ? "md:order-2" : ""}`}
                >
                    <h2 className="
                        text-2xl
                        sm:text-3xl
                        md:text-4xl
                        font-bold mb-4
                        bg-gradient-to-r from-primary to-accent
                        bg-clip-text text-transparent
                    ">
                        {section.title}
                    </h2>

                    <p className="
                        text-gray-300
                        leading-relaxed
                        text-sm
                        sm:text-base
                        md:text-lg
                        whitespace-pre-line
                    ">
                        {section.content}
                    </p>
                </div>

                {/* IMAGE */}
                <div
                    className={`section-image ${reverse ? "md:order-1" : ""}`}
                >
                    <div className="overflow-hidden rounded-2xl">
                        <img
                            src={section.image}
                            alt={section.title}
                            className="
                                w-full
                                h-[240px]
                                sm:h-[300px]
                                md:h-[360px]
                                lg:h-[420px]
                                object-cover
                                rounded-2xl
                                shadow-xl
                                transition duration-700
                                hover:scale-105
                            "
                        />
                    </div>
                </div>

            </div>
        </div>
    );
};

export default ServiceDetail;