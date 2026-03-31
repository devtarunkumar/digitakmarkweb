import { useParams } from "react-router-dom";
import { services } from "../components/homeComponents/Digital-services";
const DigitalServiceDetails = () => {
  const { slug } = useParams();

  const service = services.find(
    (item) => item.slug === slug
  );

  if (!service) {
    return <h2 className="text-center mt-20">Service Not Found</h2>;
  }

  return (
    <section className="py-24 px-6 max-w-6xl mx-auto">

      <h1 className="text-4xl font-bold mb-8">
        {service.title}
      </h1>

      <img
        src={service.image}
        alt={service.title}
        className="rounded-2xl mb-10 shadow-lg"
      />

      <p className="text-gray-600 text-lg leading-relaxed">
        {service.fullDesc}
      </p>

    </section>
  );
};

export default DigitalServiceDetails;