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
        boxShadow: "0 10px 25px -5px rgba(89, 49, 52, 0.1)" // primary color in shadow
      }}
      className="bg-white p-8 rounded-xl shadow-lg transition-all duration-300 text-center border-t-4 border-[#D91E2E]" // accent color border
    >
      <motion.div 
        whileHover={{ scale: 1.1 }}
        transition={{ type: "spring", stiffness: 400, damping: 10 }}
        className="bg-[#F2F2F2] p-4 rounded-full inline-block mb-4" // light color background
      >
        {service.icon}
      </motion.div>
      <h3 className="text-xl font-bold mb-3 text-[#593134]">{service.title}</h3> {/* primary text */}
      <p className="text-[#592533]">{service.description}</p> {/* secondary text */}
    </motion.div>
  );
};

const ServicesSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <section className="py-20 bg-[#F2F2F2] w-full" id="servicios"> {/* light background */}
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#593134] mb-4"> {/* primary */}
            Nuestros Servicios Legales
          </h2>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-xl text-[#592533] max-w-3xl mx-auto" 
          >
            Soluciones jurídicas personalizadas con un enfoque estratégico
          </motion.p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-[1800px] mx-auto">
          {services.map((service, index) => (
            <ServiceCard key={index} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection; 