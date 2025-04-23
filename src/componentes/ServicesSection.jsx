import { useState } from 'react';
import { FaBalanceScale, FaHandshake, FaHome, FaBriefcase, FaUserTie, FaFileContract, FaGavel, FaLandmark } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

// Datos de WhatsApp de la empresa
const COMPANY_WHATSAPP = "573127953716"; //
const WHATSAPP_MESSAGE = "Hola, estoy interesado en sus servicios legales de ";

const services = [
  {
    id: "derecho-penal",
    icon: <FaBalanceScale className="text-4xl text-[#DBC078]" />,
    title: "Derecho Penal",
    tagline: "Defensa legal especializada para proteger su libertad",
    description: (
      <>
        <span className="font-semibold text-[#592533]">
          Protegemos sus derechos con estrategias legales efectivas.
        </span>{" "}
        Ya sea que necesite defensa ante acusaciones o representación como víctima, nuestro equipo garantiza un acompañamiento profesional.
      </>
    ),
    benefits: [
      "Defensa integral en procesos penales",
      "Asesoría desde la etapa de indagación",
      "Negociación de preacuerdos",
      "Representación de víctimas"
    ],
    cta: "Proteja su libertad ahora"
  },
  {
    id: "responsabilidad-fiscal",
    icon: <FaHandshake className="text-4xl text-[#DBC078]" />,
    title: "Responsabilidad Fiscal",
    tagline: "Defensa especializada en procesos ante la Contraloría",
    description: (
      <>
        <span className="font-semibold text-[#592533]">
          Evite sanciones y proteja su patrimonio.
        </span>{" "}
        Brindamos asesoría integral en investigaciones fiscales, garantizando el debido proceso.
      </>
    ),
    benefits: [
      "Representación en procesos fiscales",
      "Elaboración de descargos técnicos",
      "Negociación de acuerdos de solución",
      "Acompañamiento completo"
    ],
    cta: "Defienda sus derechos fiscales"
  },
  {
    id: "derecho-disciplinario",
    icon: <FaHome className="text-4xl text-[#DBC078]" />,
    title: "Derecho Disciplinario",
    tagline: "Protección de sus derechos como servidor público",
    description: (
      <>
        <span className="font-semibold text-[#592533]">
          Defensa especializada en procesos disciplinarios.
        </span>{" "}
        Representamos a servidores públicos ante la Procuraduría y otras entidades.
      </>
    ),
    benefits: [
      "Defensa en procesos disciplinarios",
      "Representación ante la Procuraduría",
      "Elaboración de descargos y recursos",
      "Estrategias para prescripción"
    ],
    cta: "Proteja su carrera profesional"
  },
  {
    id: "derecho-constitucional",
    icon: <FaBriefcase className="text-4xl text-[#DBC078]" />,
    title: "Derecho Constitucional",
    tagline: "Defensa de sus derechos fundamentales",
    description: (
      <>
        <span className="font-semibold text-[#592533]">
          Garantizamos la protección de sus derechos.
        </span>{" "}
        Acciones legales efectivas para proteger sus derechos fundamentales.
      </>
    ),
    benefits: [
      "Interposición de acciones de tutela",
      "Acciones de cumplimiento",
      "Derechos de petición efectivos",
      "Protección contra abusos"
    ],
    cta: "Defienda sus derechos"
  },
  {
    id: "derecho-civil",
    icon: <FaLandmark className="text-4xl text-[#DBC078]" />,
    title: "Derecho Civil",
    tagline: "Soluciones legales para proteger su patrimonio",
    description: (
      <>
        <span className="font-semibold text-[#592533]">
          Asesoría especializada en conflictos civiles.
        </span>{" "}
        Representación legal en procesos civiles para proteger sus bienes.
      </>
    ),
    benefits: [
      "Procesos ejecutivos para cobro de deudas",
      "Asesoría en insolvencia personal",
      "Sucesiones y herencias",
      "Responsabilidad civil"
    ],
    cta: "Proteja su patrimonio"
  },
  {
    id: "contratos",
    icon: <FaFileContract className="text-4xl text-[#DBC078]" />,
    title: "Contratos",
    tagline: "Contratos seguros que protegen sus intereses",
    description: (
      <>
        <span className="font-semibold text-[#592533]">
          Evite riesgos legales en sus acuerdos.
        </span>{" "}
        Elaboración y revisión de contratos con enfoque preventivo.
      </>
    ),
    benefits: [
      "Redacción de contratos a medida",
      "Revisión y análisis de riesgos",
      "Negociación de términos favorables",
      "Asesoría en incumplimiento"
    ],
    cta: "Proteja sus acuerdos"
  },
  {
    id: "litigios",
    icon: <FaGavel className="text-4xl text-[#DBC078]" />,
    title: "Litigios",
    tagline: "Representación efectiva en procesos judiciales",
    description: (
      <>
        <span className="font-semibold text-[#592533]">
          Estrategias legales para ganar su caso.
        </span>{" "}
        Defensa profesional en litigios con enfoque en resultados favorables.
      </>
    ),
    benefits: [
      "Representación en todas las instancias",
      "Elaboración de estrategias de litigio",
      "Preparación de pruebas y alegatos",
      "Soluciones alternativas"
    ],
    cta: "Defienda sus intereses"
  },
  {
    id: "asesoria-corporativa",
    icon: <FaUserTie className="text-4xl text-[#DBC078]" />,
    title: "Asesoría Corporativa",
    tagline: "Soluciones legales para su empresa",
    description: (
      <>
        <span className="font-semibold text-[#592533]">
          Asesoría legal integral para negocios.
        </span>{" "}
        Acompañamiento legal continuo para empresas.
      </>
    ),
    benefits: [
      "Constitución y reorganización empresarial",
      "Gobierno corporativo y cumplimiento",
      "Contratos comerciales y laborales",
      "Asesoría estratégica"
    ],
    cta: "Proteja su empresa"
  }
];

const ServiceCard = ({ service, index }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
    delay: index * 100
  });
  
  const [isFlipped, setIsFlipped] = useState(false);

  // Función para redirigir a WhatsApp
  const redirectToWhatsApp = (e) => {
    e.stopPropagation();
    const message = `Hola, estoy interesado en sus servicios legales de ${service.title}`;
    window.open(`https://wa.me/${COMPANY_WHATSAPP}?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
 
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={{ scale: 1.02 }}
      className="cursor-pointer perspective-1000 h-full"
      onClick={() => setIsFlipped(!isFlipped)} // Toggle flip al hacer click en cualquier parte
    >
      <motion.div
        className="relative w-full h-full"
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.6 }}
        style={{ transformStyle: 'preserve-3d' }}
      >
        {/* Front Card */}
        <motion.div
          className="bg-white p-6 rounded-xl shadow-lg transition-all duration-300 border-t-4 border-[#D91E2E] backface-hidden flex flex-col h-full"
          style={{ backfaceVisibility: 'hidden' }}
        >
          <div className="bg-[#F2F2F2] p-4 rounded-full inline-block mb-4 self-center">
            {service.icon}
          </div>
          <h3 className="text-xl font-bold mb-2 text-[#593134]">{service.title}</h3>
          <p className="text-sm font-medium text-[#DBC078] mb-3">{service.tagline}</p>
          <p className="text-[#592533] mb-4 flex-grow">{service.description}</p>
          <button 
            onClick={(e) => {
              e.stopPropagation();
              setIsFlipped(true);
            }}
            className="mt-auto bg-[#593134] text-white py-2 px-4 rounded-lg hover:bg-[#462028] transition-colors"
          >
            Ver beneficios
          </button>
        </motion.div>
        
        {/* Back Card */}
        <motion.div
          className="absolute top-0 left-0 w-full h-full bg-[#593134] text-white p-6 rounded-xl shadow-lg border-t-4 border-[#DBC078] backface-hidden flex flex-col"
          style={{
            backfaceVisibility: 'hidden',
            transform: 'rotateY(180deg)'
          }}
        >
          <h3 className="text-xl font-bold mb-3 text-[#DBC078]">{service.title}</h3>
          
          <ul className="mb-4 space-y-3 flex-grow">
            {service.benefits.map((item, i) => (
              <li key={i} className="flex items-start">
                <span className="inline-block w-2 h-2 bg-[#DBC078] rounded-full mt-2 mr-2 flex-shrink-0"></span>
                <span className="text-white">{item}</span>
              </li>
            ))}
          </ul>
          
          <div className="mt-4 flex flex-col sm:flex-row justify-between items-center gap-2">
            <button 
              onClick={(e) => {
                e.stopPropagation();
                setIsFlipped(false);
              }}
              className="text-sm text-[#DBC078] font-medium hover:text-[#f0e2a8] transition-colors"
            >
              ← Volver
            </button>
            <a 
              href={`https://wa.me/${COMPANY_WHATSAPP}?text=${encodeURIComponent(`${WHATSAPP_MESSAGE}${service.title}`)}`}
              target="_blank"
              rel="noopener noreferrer"
              onClick={redirectToWhatsApp}
              className="bg-[#DBC078] text-[#593134] py-2 px-4 rounded-lg hover:bg-[#f0e2a8] transition-colors font-medium text-center w-full sm:w-auto"
            >
              {service.cta}
            </a>
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
      <div className="w-full px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#593134] mb-4">
            Soluciones Legales a su Medida
          </h2>
          <motion.div 
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="max-w-4xl mx-auto"
          >
            <p className="text-xl text-[#592533] mb-6">
              Enfrentar un problema legal puede ser abrumador. Nosotros simplificamos el proceso, brindándole claridad y estrategias efectivas.
            </p>
            <div className="bg-[#DBC078] text-[#593134] p-4 rounded-lg inline-block">
              <p className="font-medium">Más de 15 años de experiencia | Enfoque personalizado | Resultados comprobados</p>
            </div>
          </motion.div>
        </motion.div>
        
        {/* Grid responsive modificado */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <ServiceCard key={index} service={service} index={index} />
          ))}
        </div>
        
        
      </div>
    </section>
  );
};

export default ServicesSection;