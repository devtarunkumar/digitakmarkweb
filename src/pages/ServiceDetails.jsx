import { useParams, useNavigate } from "react-router-dom";
import { services } from "../data/servicesData";
import { FaArrowLeft } from "react-icons/fa";

const ServiceDetail = () => {

    /* ================= ROUTER ================= */
    const { slug } = useParams();
    const navigate = useNavigate();

    /* ================= FIND SERVICE ================= */
    const service = services.find((s) => s.slug === slug);

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
        // agar history hai → back jao
        if (window.history.length > 1) {
            navigate(-1);
        } else {
            // direct URL open hua ho
            navigate("/services");
        }
    };

    return (
        <div className="service-page min-h-screen bg-[#020617] text-white">

            {/* ================= HERO SECTION ================= */}
            <div className="service-hero relative h-[260px] md:h-[350px] overflow-hidden">

                {/* BACK BUTTON */}
                <button
                    onClick={handleBack}
                    className="absolute top-6 left-6 z-20 flex items-center gap-2
                    bg-black/60 backdrop-blur-md text-white
                    px-5 py-2 rounded-full shadow-lg
                    hover:bg-black transition"
                >
                    <FaArrowLeft />
                    Back
                </button>

                {/* HERO IMAGE */}
                <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover"
                />

                {/* OVERLAY */}
                <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
                    <h1 className="text-3xl md:text-5xl font-bold text-center px-4">
                        {service.title}
                    </h1>
                </div>
            </div>

            {/* ================= INTRO ================= */}
            <div className="max-w-6xl mx-auto px-4 md:px-10 py-14">
                <div className="glass-card text-center">
                    <p className="section-text max-w-3xl mx-auto">
                        {service.description}
                    </p>
                </div>
            </div>

            {/* ================= DETAIL SECTIONS ================= */}
            <div className="space-y-24 pb-24">
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
   DETAIL SECTION COMPONENT
========================================================= */

const DetailSection = ({ section, reverse }) => {
    return (
        <div className="detail-section max-w-6xl mx-auto px-4 md:px-10">
            <div className="grid md:grid-cols-2 gap-12 items-center">

                {/* TEXT */}
                <div className={reverse ? "md:order-2" : ""}>
                    <h2 className="section-title">
                        {section.title}
                    </h2>

                    <p className="section-text whitespace-pre-line">
                        {section.content}
                    </p>
                </div>

                {/* IMAGE */}
                <div className={reverse ? "md:order-1" : ""}>
                    <div className="section-image">
                        <img
                            src={section.image}
                            alt={section.title}
                            className="w-full rounded-xl shadow-lg"
                        />
                    </div>
                </div>

            </div>
        </div>
    );
};

export default ServiceDetail;