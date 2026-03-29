import React from "react";
import kriventures from "../assets/Kriventures.jpeg";
import addtrick from "../assets/Addtrick.jpeg";
import grownest from "../assets/Grownest.jpeg";

const ClientSection = () => {
 
  const ourClient = [
    {
      name: "Kriventures",
      image: kriventures,
    },
    {
      name: "Addtrick",
      image: addtrick,
    },
    {
      name: "Grownest",
      image: grownest,
    },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6 text-center">

        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900">
          Our <span className="text-blue-600">Top Client</span>
        </h2>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-12">
          { ourClient.map((ourClient, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-md p-6 hover:shadow-xl transition duration-300"
          >
            <img
              src={ourClient.image}
            alt={ourClient.name}
            className="w-full h-32 object-contain mb-4"
              />
            <h3 className="text-lg font-semibold text-gray-800">
              {ourClient.name}
            </h3>
          </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default ClientSection;