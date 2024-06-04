import React from 'react';
import { FaUser, FaShoppingBag, FaComments, FaInfoCircle, FaExclamation, FaClock } from 'react-icons/fa';

const services = [
  {
    title: "Search doctor",
    description: "Choose your doctor from thousands of specialist, general, and trusted hospitals",
    icon: FaUser,
  },
  {
    title: "Online pharmacy",
    description: "Buy your medicines with our mobile application with a simple delivery system",
    icon: FaShoppingBag,
  },
  {
    title: "Consultation",
    description: "Free consultation with our trusted doctors and get the best recommendations",
    icon: FaComments,
  },
  {
    title: "Details info",
    description: "Free consultation with our trusted doctors and get the best recommendations",
    icon: FaInfoCircle,
  },
  {
    title: "Emergency care",
    description: "You can get 24/7 urgent care for yourself or your children and your lovely family",
    icon: FaExclamation,
  },
  {
    title: "Tracking",
    description: "Track and save your medical history and health data",
    icon: FaClock,
  },
];

const Services = () => {
  return (
    <section id="services" className="py-20 px-4 sm:px-8 md:px-6 lg:px-4 xl:px-28">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center relative mb-8">
          Our services
          <span className="block w-16 h-1 bg-gray-600 absolute top-12 rounded left-1/2 transform -translate-x-1/2"></span>
        </h2>
        <p className="text-center max-w-4xl mx-auto mb-12">
          We provide to you the best choices for you. Adjust it to your health needs and make sure you undergo treatment with our highly qualified doctors. You can consult with us to determine which type of service is suitable for your health.
        </p>
        <div className="grid md:grid-cols-3 gap-8 min-w-24">
          {services.map((service, index) => (
            <div key={index} className="bg-white px-5 py-12 shadow-2xl rounded-xl flex flex-col items-center md:items-start text-center md:text-left">
              <service.icon className="w-12 h-12 text-blue-500 mb-4" />
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="text-center mt-12">
        <button className="text-blue-400 px-8 py-2 border border-blue-500 rounded-full relative hover:bg-blue-500 hover:text-white transition duration-300">
          Learn more
        </button>
      </div>
    </section>
  );
};

export default Services;
