import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaBalanceScale, FaGavel, FaBook, FaUserTie, FaPhone, FaWhatsapp, FaChartLine, FaHandshake } from 'react-icons/fa';

const AboutSection = () => {
  const stats = {
    casesTotal: 500,
    successRate: 95,
    experienceYears: 15,
    clientsServed: 500,
    caseTypes: {
      penal: 180,
      civil: 120,
      Disciplinario: 110,
      fiscal: 90
    }
  };

  const specialties = [
    'Derecho Penal',
    'Derecho Civil',
    'Derecho Administrativo',
    'Acciones Constitucionales',
    'Derecho Comercial',
    'Derecho Laboral'
  ];

  const education = [
    'Doctorado en Derecho Penal - Universidad del Rosario',
    'Especialización en Derecho Constitucional - Universidad Nacional',
    'Pregrado en Derecho - Universidad Pontificia Bolivariana'
  ];

  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const controls = useAnimation();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  // Animaciones
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const barVariants = {
    hidden: { height: 0 },
    visible: (i) => ({
      height: `${i}%`,
      transition: {
        duration: 1,
        delay: 0.5,
        ease: [0.16, 1, 0.3, 1]
      }
    })
  };

  return (
    <section className="py-20 bg-white w-full" ref={ref} id="sobre-mi">
      <div className="max-w-6xl mx-auto px-4">
        <div className="lg:flex lg:items-start gap-12">
          {/* Columna de imagen */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="lg:w-2/5 flex-shrink-0"
          >
            <div className="relative h-[500px] rounded-lg overflow-hidden shadow-md border border-gray-100">
              <img 
                src="/images/perfil.jpg" 
                alt="Abogado Santiago Cabarcas"
                className="w-full h-full object-cover object-center"
              />
              <motion.div
                initial={{ scale: 0 }}
                animate={inView ? { scale: 1 } : {}}
                transition={{ delay: 0.8 }}
                className="absolute bottom-4 left-4 bg-[#593134] text-white px-4 py-2 rounded-lg flex items-center gap-2"
              >
                <FaUserTie />
                <span>+{stats.experienceYears} años</span>
              </motion.div>
            </div>

            {/* Información de contacto */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ delay: 1 }}
              className="mt-6 bg-gray-50 p-4 rounded-lg"
            >
              <h4 className="font-medium text-[#593134] mb-3 flex items-center gap-2">
                <FaPhone className="text-[#D91E2E]" />
                Contacto Directo
              </h4>
              <div className="space-y-2">
                <p className="text-sm text-gray-700">consultas@abogadopenalistasantiagoruiz.com</p>
                <p className="text-sm text-gray-700">Llamanos: +573127953716</p>
                <a 
                  href="https://wa.me/573127953716" 
                  className="inline-flex items-center gap-2 text-sm text-[#25D366] font-medium mt-2"
                >
                  <FaWhatsapp /> WhatsApp
                </a>
              </div>
            </motion.div>
            
            {/* Formación Académica */}
            <motion.div
              variants={itemVariants}
              className="mb-8"
            >
              <h3 className="text-xl font-semibold text-[#593134] mb-4 flex items-center gap-2">
                <FaBook className="text-[#DBC078]" />
                Formación Académica
              </h3>
              <div className="space-y-3">
                {education.map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="bg-[#593134]/10 p-1.5 rounded-full mt-1 flex-shrink-0">
                      <div className="w-2 h-2 bg-[#D91E2E] rounded-full"></div>
                    </div>
                    <p className="text-gray-700">{item}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Columna de contenido */}
          <div className="lg:w-3/5 mt-8 lg:mt-0">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold text-[#593134] mb-2">
                Santiago Ruiz Cabarcas
              </h2>
              <p className="text-xl text-[#D91E2E] mb-6">Abogado Especializado</p>
              
              <div className="prose prose-lg text-gray-700 mb-8">
                <p>
                  Con más de {stats.experienceYears} años de experiencia en el ejercicio profesional del derecho, 
                  he representado con éxito a más de {stats.clientsServed} clientes en casos complejos 
                  ante diversas jurisdicciones.
                </p>
              </div>
            </motion.div>

            {/* Especialidades */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ delay: 0.4 }}
              className="mb-10"
            >
              <h3 className="text-xl font-semibold text-[#593134] mb-4 flex items-center gap-2">
                <FaBook className="text-[#DBC078]" />
                Áreas de Especialización
              </h3>
              <div className="grid grid-cols-2 gap-3">
                {specialties.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 10 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.2 + index * 0.1 }}
                    className="flex items-start gap-2"
                  >
                    <div className="mt-1 w-2 h-2 bg-[#D91E2E] rounded-full flex-shrink-0"></div>
                    <span className="text-gray-700">{item}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Trayectoria Profesional */}
            <motion.div
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              variants={containerVariants}
            >
              <h3 className="text-xl font-semibold text-[#593134] mb-6 flex items-center gap-2">
                <FaChartLine className="text-[#DBC078]" />
                Trayectoria Profesional
              </h3>

              <div className="grid md:grid-cols-2 gap-6 mb-8">
                {/* Casos atendidos - Versión mejorada */}
                <motion.div
                  variants={itemVariants}
                  className="bg-gray-50 p-5 rounded-lg border border-gray-200"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="bg-[#593134]/10 p-2 rounded-full">
                      <FaBalanceScale className="text-[#593134]" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-[#593134]">Experiencia Comprobada</h4>
                      <p className="text-sm text-gray-500">Más de {stats.casesTotal} casos atendidos</p>
                    </div>
                  </div>
                  
                  <div className="h-32 relative">
                    <div className="absolute bottom-0 left-0 right-0 flex items-end h-full gap-1">
                      {Object.entries(stats.caseTypes).map(([key, value], i) => (
                        <motion.div
                          key={key}
                          custom={(value / 200) * 100}
                          variants={barVariants}
                          className={`w-full ${i % 2 === 0 ? 'bg-[#593134]' : 'bg-[#DBC078]'} rounded-t-sm`}
                        />
                      ))}
                    </div>
                  </div>
                  
                  <div className="mt-4 grid grid-cols-4 gap-2 text-xs">
                    {Object.keys(stats.caseTypes).map((key) => (
                      <div key={key} className="text-center">
                        <p className="text-gray-500 capitalize">{key.replace(/([A-Z])/g, ' $1')}</p>
                      </div>
                    ))}
                  </div>
                </motion.div>

                {/* Efectividad */}
                <motion.div
                  variants={itemVariants}
                  className="bg-gray-50 p-5 rounded-lg border border-gray-200"
                >
                  <div className="flex items-center gap-3 mb-6">
                    <div className="bg-[#DBC078]/20 p-2 rounded-full">
                      <FaHandshake className="text-[#D91E2E]" />
                    </div>
                    <h4 className="font-semibold text-[#593134]">Efectividad Legal</h4>
                  </div>
                  
                  <div className="flex flex-col items-center">
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={inView ? { scale: 1 } : {}}
                      transition={{ delay: 0.8 }}
                      className="relative w-24 h-24 mb-4"
                    >
                      <svg className="w-full h-full" viewBox="0 0 36 36">
                        <path
                          d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                          fill="none"
                          stroke="#E8E8E8"
                          strokeWidth="3"
                        />
                        <motion.path
                          d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                          fill="none"
                          stroke="#D91E2E"
                          strokeWidth="3"
                          strokeDasharray="100, 100"
                          initial={{ strokeDashoffset: 100 }}
                          animate={{ strokeDashoffset: 100 - stats.successRate }}
                          transition={{ duration: 1.5, delay: 0.5 }}
                        />
                      </svg>
                      <div className="absolute inset-0 flex items-center justify-center text-[#593134] font-bold">
                        {stats.successRate}%
                      </div>
                    </motion.div>
                    <p className="text-sm text-gray-600 text-center">
                      Tasa de éxito en resoluciones favorables
                    </p>
                  </div>
                </motion.div>
              </div>

              {/* Enfoque Profesional */}
              <motion.div
                variants={itemVariants}
                className="bg-[#593134]/5 p-6 rounded-lg border border-[#593134]/10"
              >
                <h3 className="text-xl font-semibold text-[#593134] mb-3 flex items-center gap-2">
                  <FaGavel className="text-[#DBC078]" />
                  Enfoque Profesional
                </h3>
                <p className="text-gray-700 mb-4">
                  Mi práctica legal se caracteriza por un enfoque estratégico y detallado de cada caso, 
                  combinando conocimiento jurídico especializado con una comprensión profunda de las 
                  necesidades individuales de cada cliente.
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-[#D91E2E] rounded-full mt-2 flex-shrink-0"></div>
                    <span>Análisis exhaustivo de cada situación legal</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-[#D91E2E] rounded-full mt-2 flex-shrink-0"></div>
                    <span>Estrategias personalizadas para cada cliente</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-[#D91E2E] rounded-full mt-2 flex-shrink-0"></div>
                    <span>Seguimiento continuo y comunicación transparente</span>
                  </li>
                </ul>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;