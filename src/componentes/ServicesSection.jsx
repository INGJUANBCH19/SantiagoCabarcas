import React from 'react';
import { FaBalanceScale, FaHandshake, FaHome, FaBriefcase } from 'react-icons/fa';

const services = [
  {
    icon: <FaBalanceScale className="text-4xl mb-4 text-legal-blue" />,
    title: "Derecho Civil",
    description: "Asesoría en contratos, responsabilidad civil, daños y perjuicios, y más."
  },
  {
    icon: <FaHandshake className="text-4xl mb-4 text-legal-blue" />,
    title: "Derecho Laboral",
    description: "Defensa en despidos, reclamaciones salariales, acoso laboral, etc."
  },
  {
    icon: <FaHome className="text-4xl mb-4 text-legal-blue" />,
    title: "Derecho Inmobiliario",
    description: "Contratos de compraventa, arrendamientos, reclamaciones de obra, etc."
  },
  {
    icon: <FaBriefcase className="text-4xl mb-4 text-legal-blue" />,
    title: "Derecho Mercantil",
    description: "Constitución de empresas, contratos mercantiles, defensa del consumidor."
  }
];

const ServicesSection = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-legal-blue mb-4">
            Nuestros Servicios Legales
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Soluciones jurídicas adaptadas a tus necesidades específicas con un enfoque humano y profesional.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 text-center"
            >
              {service.icon}
              <h3 className="text-xl font-bold mb-3 text-gray-800">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;