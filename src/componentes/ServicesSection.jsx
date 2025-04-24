import { useState } from 'react';
import { FaBalanceScale, FaHandshake, FaGavel, FaLandmark, FaChartLine, FaFileContract, FaUserTie, FaBook } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const COMPANY_WHATSAPP = "573127953716";
const WHATSAPP_MESSAGE = "Hola, estoy interesado en sus servicios de ";

const serviceGroups = [
  {
    id: "derecho-publico",
    title: "Defensa Pública y Control Estatal",
    description: "Representación jurídica estratégica en procesos donde el Estado o sus entidades son la contraparte. Protección de derechos fundamentales, responsabilidad fiscal y disciplinaria.",
    services: [
      {
        id: "derecho-penal",
        icon: <FaGavel className="text-3xl text-[#DBC078]" />,
        title: "Derecho Penal",
        tagline: "Defensa estratégica para proteger su libertad",
        description: "Representación especializada en procesos penales con enfoque en resultados favorables.",
        benefits: [
          "Defensa en todas las etapas del proceso",
          "Estrategias para evitar prisión preventiva",
          "Negociación de preacuerdos y suspensión condicional",
          "Recursos y acciones de defensa técnica"
        ],
        cta: "Proteja sus derechos ahora"
      },
      {
        id: "responsabilidad-fiscal",
        icon: <FaHandshake className="text-3xl text-[#DBC078]" />,
        title: "Responsabilidad Fiscal",
        tagline: "Defensa ante procesos de la Contraloría",
        description: "Asesoría integral para servidores públicos y particulares en investigaciones fiscales.",
        benefits: [
          "Elaboración de descargos técnicos",
          "Negociación de acuerdos de solución",
          "Defensa en procesos de responsabilidad fiscal",
          "Estrategias para terminación anticipada"
        ],
        cta: "Defienda su patrimonio"
      },
      {
        id: "derecho-disciplinario",
        icon: <FaBalanceScale className="text-3xl text-[#DBC078]" />,
        title: "Derecho Disciplinario",
        tagline: "Protección de servidores públicos",
        description: "Representación especializada ante la Procuraduría y otras entidades de control.",
        benefits: [
          "Defensa en investigaciones disciplinarias",
          "Recursos y medios de defensa",
          "Estrategias para prescripción de faltas",
          "Asesoría en procesos sancionatorios"
        ],
        cta: "Proteja su carrera"
      },
      {
        id: "derecho-constitucional",
        icon: <FaLandmark className="text-3xl text-[#DBC078]" />,
        title: "Derecho Constitucional",
        tagline: "Defensa contra acciones del Estado",
        description: "Acciones legales para protección de garantías constitucionales frente a entidades públicas.",
        benefits: [
          "Acciones de tutela contra el Estado",
          "Acciones de cumplimiento",
          "Protección contra abusos de autoridad",
          "Control judicial de actos administrativos"
        ],
        cta: "Defienda sus garantías"
      }
    ]
  },
  {
    id: "soluciones-corporativas",
    title: "Asesoría Empresarial y Gestión Financiera",
    description: "Acompañamiento legal integral para empresas, desde su constitución hasta la resolución de conflictos financieros y contractuales. Protección jurídica para crecer con seguridad.",
    services: [
      {
        id: "asesoria-corporativa",
        icon: <FaUserTie className="text-3xl text-[#DBC078]" />,
        title: "Asesoría Corporativa",
        tagline: "Soluciones legales para empresas",
        description: "Acompañamiento legal integral para proteger y hacer crecer su negocio.",
        benefits: [
          "Constitución de empresas",
          "Gobierno corporativo",
          "Contratos comerciales",
          "Cumplimiento normativo"
        ],
        cta: "Proteja su empresa"
      },
      {
        id: "contratos",
        icon: <FaFileContract className="text-3xl text-[#DBC078]" />,
        title: "Contratos",
        tagline: "Seguridad en sus acuerdos",
        description: "Elaboración y revisión de contratos con enfoque preventivo y de mitigación de riesgos.",
        benefits: [
          "Redacción de contratos a medida",
          "Análisis de riesgos contractuales",
          "Negociación de términos",
          "Asesoría en incumplimiento"
        ],
        cta: "Proteja sus acuerdos"
      },
      {
        id: "insolvencia",
        icon: <FaChartLine className="text-3xl text-[#DBC078]" />,
        title: "Insolvencia Económica",
        tagline: "Soluciones para crisis financieras",
        description: "Asesoría especializada en reestructuración de deudas y procesos de insolvencia.",
        benefits: [
          "Procesos de reestructuración",
          "Negociación con acreedores",
          "Protección de bienes esenciales",
          "Asesoría en concurso de acreedores"
        ],
        cta: "Solucione su situación"
      },
      {
        id: "litigios",
        icon: <FaBook className="text-3xl text-[#DBC078]" />,
        title: "Litigios",
        tagline: "Representación estratégica en conflictos",
        description: "Defensa judicial especializada en controversias comerciales, contractuales y societarias.",
        benefits: [
          "Elaboración de estrategias de caso",
          "Preparación de pruebas y alegatos",
          "Representación en audiencias",
          "Soluciones alternativas de conflicto"
        ],
        cta: "Resuelva su conflicto legal"
      }
    ]
  }
];

// Componente ServiceCard (idéntico al original)
const ServiceCard = ({ group, index }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
    delay: index * 100
  });

  const [expandedService, setExpandedService] = useState(null);

  const redirectToWhatsApp = (serviceTitle) => {
    window.open(`https://wa.me/${COMPANY_WHATSAPP}?text=${encodeURIComponent(`${WHATSAPP_MESSAGE}${serviceTitle}`)}`, '_blank');
  };

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      className="bg-white rounded-xl shadow-lg overflow-hidden border-t-4 border-[#D91E2E]"
    >
      <div className="p-6 bg-[#593134] text-white">
        <h3 className="text-2xl font-bold mb-2">{group.title}</h3>
        <p className="text-[#DBC078]">{group.description}</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6">
        {group.services.map((service, i) => (
          <motion.div
            key={service.id}
            whileHover={{ y: -5 }}
            className={`border rounded-lg p-5 transition-all duration-300 ${expandedService === service.id ? 'border-[#DBC078] bg-[#F8F8F8]' : 'border-gray-200'}`}
          >
            <div 
              className="cursor-pointer"
              onClick={() => setExpandedService(expandedService === service.id ? null : service.id)}
            >
              <div className="flex items-start gap-4">
                <div className="bg-[#593134]/10 p-3 rounded-full">
                  {service.icon}
                </div>
                <div>
                  <h4 className="text-lg font-bold text-[#593134]">{service.title}</h4>
                  <p className="text-sm text-[#DBC078] font-medium">{service.tagline}</p>
                </div>
              </div>
              <p className="mt-3 text-gray-700">{service.description}</p>
            </div>

            {expandedService === service.id && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                transition={{ duration: 0.3 }}
                className="mt-4"
              >
                <ul className="space-y-2 mb-4">
                  {service.benefits.map((benefit, j) => (
                    <li key={j} className="flex items-start">
                      <span className="inline-block w-2 h-2 bg-[#DBC078] rounded-full mt-2 mr-2"></span>
                      <span className="text-gray-700">{benefit}</span>
                    </li>
                  ))}
                </ul>
                <button
                  onClick={() => redirectToWhatsApp(service.title)}
                  className="w-full bg-[#DBC078] hover:bg-[#c9b068] text-[#593134] font-medium py-2 px-4 rounded-lg transition-colors"
                >
                  {service.cta}
                </button>
              </motion.div>
            )}
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

// Componente ServicesSection con textos actualizados
const ServicesSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <section className="py-20 bg-[#F8F8F8] w-full" id="servicios">
      <div className="w-full px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-[#593134] mb-4">
            Servicios Legales Especializados
          </h2>
          <motion.div 
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="max-w-4xl mx-auto"
          >
            <p className="text-xl text-[#592533] mb-6">
              Soluciones legales estratégicas en derecho público y asesoría corporativa, adaptadas a sus necesidades específicas
            </p>
            <div className="inline-flex items-center justify-center bg-[#593134] text-[#DBC078] p-3 px-6 rounded-full">
              <FaUserTie className="mr-2" />
              <span className="font-medium">Más de 3 años de experiencia | Enfoque sectorial especializado</span>
            </div>
          </motion.div>
        </motion.div>
        
        <div className="space-y-12">
          {serviceGroups.map((group, index) => (
            <ServiceCard key={group.id} group={group} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;