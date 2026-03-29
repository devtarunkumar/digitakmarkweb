import React, { useState } from "react";
import {
  FaLinkedin,
  FaGithub,
  FaEnvelope,
  FaCode,
  FaRocket,
  FaEye,
  FaHandshake,
} from "react-icons/fa";
import founderImg from "../assets/founder.png";
import tannuImg from "../assets/tannu-singh.jpeg";
import mohitImg from "../assets/mohit-sharma.jpeg";
import GsapReveal from "../components/GsapReveal";

const Founder = () => {
  const [selectedMember, setSelectedMember] = useState(null);

  const teamMembers = [
    {
      name: "Tannu Singh",
      role: "Senior Full Stack Developer",
      experience: "1+ Year Experience",
      image: tannuImg,
      description: "Tannu Singh is a skilled Senior Full Stack Developer with expertise in building modern web applications. With over a year of experience, she brings innovative solutions and technical excellence to every project.",
    },
    {
      name: "Mohit Sharma",
      role: "MERN Stack Developer",
      experience: "Experienced Developer",
      image: mohitImg,
      description: "Mohit Sharma is a proficient MERN Stack Developer specializing in MongoDB, Express.js, React, and Node.js. He creates scalable and efficient full-stack solutions for modern web applications.",
    },
  ];

  return (
    <section className="bg-white min-h-screen pt-28 pb-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* HERO SECTION: FOUNDER PROFILE */}
        <GsapReveal width="100%">
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-24">
            <div className="relative group">
              <div className="absolute -inset-4 bg-linear-to-r from-primary to-primary-light rounded-2xl blur opacity-25 group-hover:opacity-40 transition duration-500"></div>

              {/* FIXED IMAGE CONTAINER */}
              <div className="relative overflow-hidden rounded-2xl shadow-orange bg-gray-100">
                <img
                  src={founderImg}
                  alt="Mr. Vivek Sharma"
                  className="w-full h-auto lg:h-[600px] object-cover object-top transform group-hover:scale-105 transition duration-700"
                />
              </div>
            </div>

            <div className="space-y-6">
              <div className="inline-block px-4 py-1.5 bg-primary/20 text-primary-dark rounded-full text-sm font-bold uppercase tracking-wider">
                Founder & CEO
              </div>
              <h1 className="text-4xl lg:text-5xl font-extrabold text-gray-900">
                Mr. Vivek Sharma
              </h1>
              <p className="text-xl text-primary font-semibold italic">
                "Professionalism, Transparency, and Innovation."
              </p>
              <p className="text-gray-600 leading-relaxed text-lg">
                Mr. Vivek Sharma established Stratviz Solution with a passion for
                technology and a clear vision to support startups and growing
                businesses in building a strong, professional online presence.
                Under his leadership, we focus on delivering result-oriented
                digital solutions that fuel long-term client relationships.
              </p>

              {/* SOCIAL LINKS */}
              <div className="flex gap-4 pt-4">
                <a
                  href="https://www.linkedin.com/in/stratviz-solutions-b533453a8?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-gray-100 rounded-full text-primary hover:bg-primary hover:text-white transition-all shadow-sm hover:shadow-orange"
                >
                  <FaLinkedin size={20} />
                </a>
                <a
                  href="#"
                  className="p-3 bg-gray-100 rounded-full text-gray-800 hover:bg-black hover:text-white transition-all shadow-sm"
                >
                  <FaGithub size={20} />
                </a>
                <a
                  href="mailto:contact@stratviz.com"
                  className="p-3 bg-gray-100 rounded-full text-red-500 hover:bg-red-500 hover:text-white transition-all shadow-sm"
                >
                  <FaEnvelope size={20} />
                </a>
              </div>
            </div>
          </div>
        </GsapReveal>

        {/* TEAM MEMBERS SECTION */}
        {/* TEAM MEMBERS SECTION */}
        <div className="mb-24">
          <GsapReveal width="100%">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                Our <span className="text-primary">Team</span>
              </h2>
              <div className="w-20 h-1 bg-linear-to-r from-primary to-accent mx-auto rounded-full shadow-orange"></div>
              <p className="mt-6 text-gray-600 text-lg max-w-2xl mx-auto">
                Meet the talented developers who bring innovation and expertise to every project.
              </p>
            </div>
          </GsapReveal>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {teamMembers.map((member, index) => (
              <GsapReveal key={index} width="100%" direction={index % 2 === 0 ? "left" : "right"}>
                <div
                  onClick={() => setSelectedMember(selectedMember === index ? null : index)}
                  className="relative h-[390px] perspective-1000 cursor-pointer"
                >
                  {/* Card Container with 3D Flip Effect */}
                  <div
                    className={`relative w-full h-full preserve-3d transition-transform duration-700 ${selectedMember === index ? "rotate-y-180" : ""
                      }`}
                  >
                    {/* Front Side - Card */}
                    <div className="absolute inset-0 backface-hidden rounded-3xl overflow-hidden shadow-lg hover:shadow-orange-lg transition-all duration-500 group">
                      {/* Decorative Gradient Background */}
                      <div className="absolute inset-0 bg-linear-to-br from-primary/10 via-accent/5 to-primary/5"></div>

                      {/* Image Section */}
                      <div className="relative h-56 overflow-hidden">
                        <img
                          src={member.image}
                          alt={member.name}
                          className="w-full h-full object-cover  transform group-hover:scale-110 transition-transform duration-700"
                          loading="lazy"
                        />
                        <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/30 to-transparent"></div>


                        {/* Floating Badge */}
                        <div className="absolute top-4 right-4 px-4 py-2 bg-linear-to-r from-primary to-accent rounded-full backdrop-blur-sm shadow-lg">
                          <span className="text-white text-xs font-bold">{member.experience}</span>
                        </div>
                      </div>

                      {/* Content Section */}
                      <div className="relative p-6 bg-white">
                        <div className="mb-3">
                          <div className="inline-block px-3 py-1 bg-primary/10 rounded-lg mb-2">
                            <span className="text-primary text-xs font-bold uppercase tracking-wider">
                              {member.role}
                            </span>
                          </div>
                          <h3 className="text-2xl font-bold text-gray-900 mb-1">{member.name}</h3>
                        </div>

                        {/* Animated Arrow Indicator */}
                        <div className="flex items-center gap-2 text-primary mt-4 group-hover:translate-x-2 transition-transform duration-300">
                          <span className="text-sm font-bold">View Details</span>
                          <span className="text-lg">→</span>
                        </div>
                      </div>

                      {/* Hover Glow Effect */}
                      <div className="absolute -inset-1 bg-linear-to-r from-primary to-accent rounded-3xl opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500 -z-10"></div>
                    </div>

                    {/* Back Side - Details */}
                    <div className="absolute inset-0 backface-hidden rotate-y-180 rounded-3xl overflow-hidden shadow-lg bg-linear-to-br from-primary/5 via-white to-accent/5">
                      <div className="h-full flex flex-col">
                        {/* Header with Image */}
                        <div className="relative h-40 overflow-hidden">
                          <img
                            src={member.image}
                            alt={member.name}
                            className="w-full h-full object-cover"
                            loading="lazy"
                          />
                          <div className="absolute inset-0 bg-linear-to-t from-black/80 to-transparent"></div>

                          <div className="absolute bottom-4 left-6 right-6">
                            <h3 className="text-2xl font-bold text-white mb-1 drop-shadow-lg">{member.name}</h3>
                            <div className="inline-block px-3 py-1 bg-primary/90 rounded-lg backdrop-blur-sm">
                              <span className="text-white text-xs font-bold">{member.role}</span>
                            </div>
                          </div>
                        </div>

                        {/* Description */}
                        <div className="flex-1 p-6 overflow-y-auto">
                          <p className="text-gray-700 leading-relaxed text-sm">
                            {member.description}
                          </p>
                        </div>

                        {/* Close Indicator */}
                        <div className="p-4 border-t border-primary/10 bg-white/50">
                          <div className="flex items-center justify-center gap-2 text-primary">
                            <span className="text-sm font-bold">Click to Close</span>
                            <span className="text-lg">←</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </GsapReveal>
            ))}
          </div>
        </div>

        {/* VISION & MISSION GRID */}
        <GsapReveal width="100%">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-primary/10 p-10 rounded-3xl space-y-4 border border-primary/20 shadow-sm hover:shadow-orange transition-all duration-300">
              <div className="w-14 h-14 bg-primary rounded-2xl flex items-center justify-center text-white text-2xl shadow-orange">
                <FaEye />
              </div>
              <h3 className="text-2xl font-bold text-gray-800">Our Vision</h3>
              <p className="text-gray-600 leading-relaxed">
                To build Stratviz Solution as a trusted and innovative digital
                brand that empowers businesses across India with smart, scalable
                technology solutions.
              </p>
            </div>

            <div className="bg-primary/10 p-10 rounded-3xl space-y-4 border border-primary/20 shadow-sm hover:shadow-orange transition-all duration-300">
              <div className="w-14 h-14 bg-primary-dark rounded-2xl flex items-center justify-center text-white text-2xl shadow-orange">
                <FaRocket />
              </div>
              <h3 className="text-2xl font-bold text-gray-800">Our Mission</h3>
              <ul className="space-y-3">
                {[
                  "Deliver high-quality and affordable digital services.",
                  "Help startups build a strong online presence.",
                  "Maintain transparency and excellence in every project.",
                  "Provide reliable website and dashboard development.",
                ].map((item, idx) => (
                  <li key={idx} className="flex gap-2 text-gray-600 text-sm">
                    <FaHandshake className="text-primary mt-1 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </GsapReveal>
      </div>
    </section>
  );
};

export default Founder;
