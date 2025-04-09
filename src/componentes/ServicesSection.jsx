import { useState } from 'react';
import { FaBalanceScale, FaHandshake, FaHome, FaBriefcase, FaUserTie, FaFileContract, FaGavel, FaLandmark } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const services = [
  {
    icon: <FaBalanceScale className="text-4xl text-[#DBC078]" />,
    title: "Derecho Penal",
    description: "Defensa integral y personalizada para clientes procesados penalmente, partiendo de la presunción de inocencia, y representación de víctimas de delitos para garantizar justicia, reparación y no repetición.",
    backContent: [
      "-Consultas y Asesorías Jurídicas: Orientación legal en materia penal.",
      "-Representación en Procesos Judiciales: Acompañamiento en todas las etapas del proceso.",
      
      "-Defensa Penal: Representación de personas acusadas de delitos."
    ]
  },
  {
    icon: <FaHandshake className="text-4xl text-[#DBC078]" />,
    title: "Derecho Laboral",
    description: "Defensa en despidos, reclamaciones salariales, acoso laboral.",
    backContent: [
      "-Contratación y terminación laboral: elaboración y revisión de contratos, despidos justificados.",
      "-Procesos laborales: representación ante jueces laborales o instancias administrativas.",
      "-Prevención y resolución de conflictos: asesoría para evitar o solucionar disputas laborales.",
     
    ]},
  {
    icon: <FaHome className="text-4xl text-[#DBC078]" />,
    title: "Derecho Disciplinario",
    description: "Regula y sanciona la conducta de servidores públicos y profesionales para garantizar ética y buen funcionamiento institucional.",
    backContent: [
      "-Asesoría en Procesos Disciplinarios: Orientación legal para servidores públicos o profesionales investigados.",
      "-Representación en Investigaciones y Audiencias: Defensa técnica durante todas las etapas del proceso disciplinario.",
      "-Acompañamiento a Víctimas o Denunciantes: Apoyo legal en la presentación de quejas y seguimiento del proceso.",

    ]},
  {
    icon: <FaBriefcase className="text-4xl text-[#DBC078]" />,
    title: "Derecho Constitucional",
    description: "Protege los derechos fundamentales y garantiza el respeto a la Constitución por parte de las autoridades.",
    backContent: [
      "-Acciones de tutela: Para proteger derechos vulnerados.",
      "-Defensa de derechos fundamentales: Representación legal en casos de violaciones.",
      "-Asesoría constitucional: Orientación en temas relacionados con la Carta Magna.",
      
    ]},
  {
    icon: <FaUserTie className="text-4xl text-[#DBC078]" />,
    title: "Asesoría Corporativa",
    description: "Asesoramiento legal continuo para empresas y negocios.",
    backContent: [
      "-Constitución y reorganización empresarial: creación de sociedades y ajustes legales.",
      "-obierno corporativo y cumplimiento: implementación de buenas prácticas y normativas.",
      "-Asesoría estratégica: respaldo legal en decisiones comerciales clave.",
     
    ]},
  {
    icon: <FaFileContract className="text-4xl text-[#DBC078]" />,
    title: "Contratos",
    description: "Elaboración y revisión de todo tipo de documentos contractuales.",
    backContent: [
      "-Redacción y revisión de contratos.",
      "-Negociación y cierre de acuerdos.",
      "-Análisis de riesgos contractuales.",
      
    ]},
  {
    icon: <FaGavel className="text-4xl text-[#DBC078]" />,
    title: "Litigios",
    description: "Representación en procesos judiciales y arbitrajes.",
    backContent: [
      "-Representación en procesos judiciales.",
      "-Defensa en controversias civiles, penales o administrativas.",
      "-Estrategias jurídicas para la resolución de conflictos.",
     
    ]},
  {
    icon: <FaLandmark className="text-4xl text-[#DBC078]" />,
    title: "Derecho Civil",
    description: "Regula las relaciones entre personas en temas patrimoniales y personales, como contratos, familia, bienes y herencias.",
    backContent: [
      "-Asesoría en contratos y obligaciones: Redacción, revisión y resolución de conflictos contractuales.",
      "-Responsabilidad civil: Reclamos por daños y perjuicios.",
      "-Sucesiones y herencias: Acompañamiento legal en procesos de repartición de bienes.",
      
    ]}
];

const ServiceCard = ({ service, index }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
    delay: index * 100
  });
  
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={!isFlipped ? { 
        y: -8,
        boxShadow: "0 10px 25px -5px rgba(89, 49, 52, 0.1)"
      } : {}}
      onClick={() => setIsFlipped(!isFlipped)}
      className="cursor-pointer perspective-1000"
      style={{ height: '100%' }}
    >
      <motion.div
        className="relative w-full h-full"
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.6 }}
        style={{ transformStyle: 'preserve-3d' }}
      >
        {/* Frente de la tarjeta (sin cambios) */}
        <motion.div
          className="bg-white p-8 rounded-xl shadow-lg transition-all duration-300 text-center border-t-4 border-[#D91E2E] backface-hidden"
          style={{
            backfaceVisibility: 'hidden',
            height: '100%'
          }}
        >
          <motion.div 
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
            className="bg-[#F2F2F2] p-4 rounded-full inline-block mb-4"
          >
            {service.icon}
          </motion.div>
          <h3 className="text-xl font-bold mb-3 text-[#593134]">{service.title}</h3>
          <p className="text-[#592533]">{service.description}</p>
          <p className="text-sm mt-4 text-[#DBC078] font-medium">Haz click para más información</p>
        </motion.div>
        
        {/* Parte trasera de la tarjeta - MODIFICADA */}
        <motion.div
          className="absolute top-0 left-0 w-full h-full bg-[#593134] text-white p-8 rounded-xl shadow-lg border-t-4 border-[#DBC078] backface-hidden flex flex-col justify-center"
          style={{
            backfaceVisibility: 'hidden',
            transform: 'rotateY(180deg)'
          }}
        >
          <h3 className="text-xl font-bold mb-3 text-[#DBC078]">{service.title}</h3>
          
          {Array.isArray(service.backContent) ? (
            <ul className="mb-4 space-y-2">
              {service.backContent.map((item, i) => (
                <li key={i} className="flex items-start">
                  <span className="inline-block w-1.5 h-1.5 bg-[#DBC078] rounded-full mt-2 mr-2"></span>
                  <span>{item.replace(/^-/, '').trim()}</span>
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-white mb-4">{service.backContent}</p>
          )}
          
          <div className="mt-auto">
            <p className="text-sm text-[#DBC078] font-medium">Haz click para volver</p>
          </div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

const ServicesSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <section className="py-20 bg-[#F2F2F2] w-full" id="servicios">
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#593134] mb-4">
            Nuestros Servicios Legales
          </h2>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-xl text-[#592533] max-w-3xl mx-auto" 
          >
            Con un enfoque en la actualización constante y el trato humano, la
           firma prioriza la importancia de cada caso, ofreciendo atención
           profesional, ética e incansable en cada etapa del proceso jurídico. La
           misión principal es acompañar a los clientes con dedicación,
           garantizar la mejor defensa de sus intereses y proporcionar un
           espacio de confianza y respeto para alcanzar los resultados
            esperados.
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