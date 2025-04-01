import { FaBalanceScale, FaHandshake, FaHome, FaBriefcase, FaUserTie, FaFileContract, FaGavel, FaLandmark } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const services = [
  {
    icon: <FaBalanceScale className="text-4xl text-[#DBC078]" />,
    title: "Derecho Civil",
    description: "Asesoría en contratos, responsabilidad civil, daños y perjuicios."
  },
  {
    icon: <FaHandshake className="text-4xl text-[#DBC078]" />,
    title: "Derecho Laboral",
    description: "Defensa en despidos, reclamaciones salariales, acoso laboral."
  },
  {
    icon: <FaHome className="text-4xl text-[#DBC078]" />,
    title: "Derecho Inmobiliario",
    description: "Contratos de compraventa, arrendamientos, reclamaciones de obra."
  },
  {
    icon: <FaBriefcase className="text-4xl text-[#DBC078]" />,
    title: "Derecho Mercantil",
    description: "Constitución de empresas, contratos mercantiles, defensa del consumidor."
  },
  {
    icon: <FaUserTie className="text-4xl text-[#DBC078]" />,
    title: "Asesoría Corporativa",
    description: "Asesoramiento legal continuo para empresas y negocios."
  },
  {
    icon: <FaFileContract className="text-4xl text-[#DBC078]" />,
    title: "Contratos",
    description: "Elaboración y revisión de todo tipo de documentos contractuales."
  },
  {
    icon: <FaGavel className="text-4xl text-[#DBC078]" />,
    title: "Litigios",
    description: "Representación en procesos judiciales y arbitrajes."
  },
  {
    icon: <FaLandmark className="text-4xl text-[#DBC078]" />,
    title: "Derecho Administrativo",
    description: "Procedimientos ante la administración pública y recursos."
  }
];

const ServiceCard = ({ service, index }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
    delay: index * 100
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={{ 
        y: -8,
        boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)"
      }}
      className="bg-white p-8 rounded-xl shadow-lg transition-all duration-300 text-center border-t-4 border-[#DBC078]"
    >
      <motion.div 
        whileHover={{ scale: 1.1 }}
        transition={{ type: "spring", stiffness: 400, damping: 10 }}
        className="bg-[#F8F4E9] p-4 rounded-full inline-block mb-4"
      >
        {service.icon}
      </motion.div>
      <h3 className="text-xl font-bold mb-3 text-gray-800">{service.title}</h3>
      <p className="text-gray-600">{service.description}</p>
    </motion.div>
  );
};

const ServicesSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <section className="py-20 bg-gray-50" id="servicios">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-800 mb-4">
            Nuestros Servicios Legales
          </h2>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-xl text-gray-600 max-w-3xl mx-auto"
          >
            Soluciones jurídicas personalizadas con un enfoque estratégico
          </motion.p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;