import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaBalanceScale, FaGavel, FaBook, FaUserTie, FaPhone, FaWhatsapp, FaChartLine, FaHandshake } from 'react-icons/fa';

const AboutSection = () => {
  const stats = {
    casesTotal: 300,
    successRate: 95,
    experienceYears: 3,
    clientsServed: 500,
    caseTypes: {
      Penal: 180,
      Constitucional: 120,
      Disciplinario: 110,
      'Insolvencia Económica': 110
    }
  };

  const specialties = [
    { name: 'Derecho Penal', icon: <FaGavel className="text-[#593134]" /> },
    { name: 'Insolvencia Económica', icon: <FaChartLine className="text-[#D91E2E]" /> },
    { name: 'Derecho Disciplinario', icon: <FaBalanceScale className="text-[#DBC078]" /> },
    { name: 'Acciones Constitucionales', icon: <FaBook className="text-[#a46c6e]" /> }
  ];

  const education = [
    'Especialización en Derecho Penal - Universidad del Rosario',
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
    hidden: { width: 0 },
    visible: (i) => ({
      width: `${i}%`,
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
            <div className="relative h-[500px] rounded-lg overflow-hidden shadow-lg border-2 border-[#593134]/10">
              <img 
                src="/images/perfil.jpg" 
                alt="Abogado Santiago Cabarcas"
                className="w-full h-full object-cover object-center"
              />
              <motion.div
                initial={{ scale: 0 }}
                animate={inView ? { scale: 1 } : {}}
                transition={{ delay: 0.8 }}
                className="absolute bottom-4 left-4 bg-[#593134] text-white px-4 py-2 rounded-lg flex items-center gap-2 shadow-md"
              >
                <FaUserTie />
                <span>+{stats.experienceYears} años de experiencia</span>
              </motion.div>
            </div>

            {/* Información de contacto - Versión minimalista */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ delay: 1 }}
              className="mt-8 bg-white p-6 rounded-lg border border-[#593134]/20 shadow-sm"
            >
              <h4 className="font-bold text-xl mb-4 text-[#593134]">
                Contacto Directo
              </h4>
              <div className="space-y-4">
                <a 
                  href="tel:+573127953716" 
                  className="block bg-[#593134] hover:bg-[#462429] text-white px-4 py-3 rounded-lg font-medium transition-colors duration-300 flex items-center justify-center gap-2 text-center"
                >
                  <FaPhone /> Llamar Ahora
                </a>
                <a 
                  href="https://wa.me/573127953716" 
                  className="block bg-[#25D366] hover:bg-[#128C7E] text-white px-4 py-3 rounded-lg font-medium transition-colors duration-300 flex items-center justify-center gap-2 text-center"
                >
                  <FaWhatsapp /> WhatsApp
                </a>
              </div>
            </motion.div>
            
            {/* Formación Académica */}
            <motion.div
              variants={itemVariants}
              className="mt-8"
            >
              <h3 className="text-xl font-semibold text-[#593134] mb-4 flex items-center gap-2">
                <FaBook className="text-[#DBC078]" />
                Credenciales Académicas
              </h3>
              <div className="space-y-4">
                {education.map((item, index) => (
                  <motion.div 
                    key={index}
                    initial={{ opacity: 0, x: -10 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.5 + index * 0.1 }}
                    className="flex items-start gap-3 bg-white p-4 rounded-lg shadow-sm border-l-4 border-[#D91E2E]"
                  >
                    <div className="bg-[#593134]/10 p-1.5 rounded-full mt-1 flex-shrink-0">
                      <div className="w-2 h-2 bg-[#D91E2E] rounded-full"></div>
                    </div>
                    <p className="text-gray-700">{item}</p>
                  </motion.div>
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
              <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4 mb-8">
                <div>
                  <h2 className="text-3xl font-bold text-[#593134] mb-2">
                    Santiago Ruiz Cabarcas
                  </h2>
                  <p className="text-xl text-[#D91E2E]">Abogado Especializado</p>
                </div>
                
              </div>
              
              <div className="prose prose-lg text-gray-700 mb-8">
                <p className="text-lg">
                  Como abogado especializado con más de <strong>{stats.experienceYears} años</strong> de ejercicio profesional, 
                  he representado con éxito a más de <strong>{stats.clientsServed} clientes</strong> en casos complejos, 
                  logrando un <strong>{stats.successRate}% de resoluciones favorables</strong> en diversas jurisdicciones.
                </p>
                <p className="text-lg mt-4">
                  Mi enfoque combina el rigor jurídico con una atención personalizada, asegurando que cada cliente 
                  reciba una estrategia legal adaptada a sus necesidades específicas.
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
              <h3 className="text-xl font-semibold text-[#593134] mb-6 flex items-center gap-2">
                <FaBook className="text-[#DBC078]" />
                Áreas de Especialización
              </h3>
              <div className="grid md:grid-cols-2 gap-4">
                {specialties.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.2 + index * 0.1 }}
                    className="flex items-center gap-4 p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-100"
                  >
                    <div className="bg-[#593134]/10 p-3 rounded-full">
                      {item.icon}
                    </div>
                    <span className="text-gray-700 font-medium">{item.name}</span>
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
                Mi Trayectoria en Números
              </h3>

              <div className="grid md:grid-cols-2 gap-6 mb-8">
                {/* Casos atendidos - Versión mejorada */}
                <motion.div
                  variants={itemVariants}
                  className="bg-white p-5 rounded-lg border border-gray-200 shadow-sm"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="bg-[#593134]/10 p-2 rounded-full">
                      <FaBalanceScale className="text-[#593134]" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-[#593134]">Experiencia Comprobada</h4>
                      <p className="text-sm text-gray-500">Más de {stats.casesTotal}+ casos atendidos</p>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    {Object.entries(stats.caseTypes).map(([key, value]) => (
                      <div key={key} className="space-y-1">
                        <div className="flex justify-between text-sm text-gray-600">
                          <span>{key}</span>
                          
                        </div>
                        <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                          <motion.div
                            custom={(value / 200) * 100}
                            variants={barVariants}
                            className={`h-full ${key === 'Penal' ? 'bg-[#593134]' : key === 'Constitucional' ? 'bg-[#D91E2E]' : key === 'Disciplinario' ? 'bg-[#DBC078]' : 'bg-[#9c616a]'} rounded-full`}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.div>

                {/* Efectividad */}
                <motion.div
                  variants={itemVariants}
                  className="bg-white p-5 rounded-lg border border-gray-200 shadow-sm"
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
                      Tasa de éxito en casos resueltos favorablemente
                    </p>
                  </div>
                </motion.div>
              </div>

              {/* Enfoque Profesional */}
              <motion.div
                variants={itemVariants}
                className="bg-[#593134]/5 p-6 rounded-lg border border-[#593134]/10"
              >
                <h3 className="text-xl font-semibold text-[#593134] mb-4 flex items-center gap-2">
                  <FaGavel className="text-[#DBC078]" />
                  Mi Filosofía Legal
                </h3>
                <p className="text-gray-700 mb-4">
                  Creo firmemente que cada caso merece atención individualizada y una estrategia 
                  legal diseñada específicamente para alcanzar los mejores resultados posibles.
                </p>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start gap-3">
                    <div className="bg-[#593134]/10 p-1 rounded-full mt-1 flex-shrink-0">
                      <div className="w-2 h-2 bg-[#D91E2E] rounded-full"></div>
                    </div>
                    <span><strong>Transparencia:</strong> Explicación clara de cada paso del proceso legal</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="bg-[#593134]/10 p-1 rounded-full mt-1 flex-shrink-0">
                      <div className="w-2 h-2 bg-[#D91E2E] rounded-full"></div>
                    </div>
                    <span><strong>Compromiso:</strong> Dedicación total a cada caso desde el inicio hasta la resolución</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="bg-[#593134]/10 p-1 rounded-full mt-1 flex-shrink-0">
                      <div className="w-2 h-2 bg-[#D91E2E] rounded-full"></div>
                    </div>
                    <span><strong>Estrategia:</strong> Enfoque personalizado basado en el análisis exhaustivo</span>
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