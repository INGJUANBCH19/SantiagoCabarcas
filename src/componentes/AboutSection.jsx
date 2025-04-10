import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaBalanceScale, FaGavel, FaBook, FaUserTie } from 'react-icons/fa';

const AboutSection = () => {
  const CASES_TOTAL = 500;
  const SUCCESS_RATE = 95;
  const EXPERIENCE_YEARS = 4;
  const SPECIALTIES = ['Derecho Penal', 'Derecho Procesal', 'Derecho Civil', 'Derecho Laboral'];
  
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2
  });

  const controls = useAnimation();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <section className="py-20 bg-white w-full" ref={ref} id="sobre-mi">
      <div className="max-w-[1800px] mx-auto px-4">
        <div className="lg:flex lg:items-center lg:justify-between w-full gap-12">
          {/* Columna de imagen */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="lg:w-[45%] mb-12 lg:mb-0 relative w-full flex justify-center"
          >
            <div className="relative h-[500px] w-[350px] rounded-xl overflow-hidden shadow-2xl border-4 border-[#F2F2F2]">
              <img 
                src="/images/SantiagoR.png" 
                alt="Abogado Santiago Cabarcas"
                className="w-full h-full object-cover object-center"
              />
              
              <motion.div
                initial={{ scale: 0 }}
                animate={inView ? { scale: 1 } : {}}
                transition={{ 
                  delay: 0.5,
                  type: "spring",
                  stiffness: 260,
                  damping: 20
                }}
                className="absolute -bottom-4 -right-4 bg-[#593134] text-[#F2F2F2] font-bold text-xl px-6 py-3 rounded-lg shadow-lg border-2 border-[#DBC078] flex items-center"
              >
                <FaUserTie className="mr-2" />
                +{EXPERIENCE_YEARS} años
              </motion.div>

              <div className="absolute top-0 right-0 w-16 h-16 bg-[#D91E2E] clip-corner flex items-center justify-center">
                <FaBalanceScale className="text-white text-xl transform rotate-45" />
              </div>
            </div>
          </motion.div>
          
          {/* Columna de contenido */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:w-[55%] w-full"
          >
            <div className="relative">
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-[#593134] mb-6 relative inline-block">
                <span className="relative z-10">Sobre </span>
                <span className="text-[#D91E2E] relative z-10">Santiago Ruiz Cabarcas</span>
                <span className="absolute -bottom-2 left-0 w-full h-2 bg-[#DBC078]/50 z-0"></span>
              </h2>
            </div>

            <div className="space-y-6 mb-10">
              <p className="text-lg text-[#592533] leading-relaxed border-l-4 border-[#D91E2E] pl-4">
                <FaBook className="inline-block mr-2 text-[#DBC078]" />
                Abogado especialista con formación en la <strong>Universidad Pontificia Bolivariana</strong> y <strong>Universidad del Rosario</strong>. Mi enfoque combina el rigor académico con la experiencia práctica en el sistema judicial colombiano.
              </p>
              
              <div className="bg-[#F2F2F2] p-4 rounded-lg border border-[#E8E8E8]">
                <h4 className="font-bold text-[#593134] mb-2 flex items-center">
                  <FaGavel className="mr-2 text-[#D91E2E]" />
                  Especialidades:
                </h4>
                <div className="grid grid-cols-2 gap-2">
                  {SPECIALTIES.map((especialidad, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0 }}
                      animate={inView ? { opacity: 1 } : {}}
                      transition={{ delay: 0.3 + index * 0.1 }}
                      className="flex items-center"
                    >
                      <div className="w-2 h-2 bg-[#D91E2E] rounded-full mr-2"></div>
                      <span className="text-[#592533]">{especialidad}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
              
              <p className="text-lg text-[#592533] leading-relaxed">
                Mi práctica se fundamenta en tres pilares: <strong className="text-[#D91E2E]">ética profesional</strong>, <strong className="text-[#D91E2E]">estrategia legal personalizada</strong> y <strong className="text-[#D91E2E]">compromiso con los resultados</strong>. Cada caso recibe atención individualizada y un análisis exhaustivo.
              </p>
            </div>
            
            {/* Sección de estadísticas profesionales */}
            <motion.div 
              initial="hidden"
              animate={controls}
              variants={containerVariants}
              className="mt-12"
            >
              <h3 className="text-xl font-bold text-[#593134] mb-8 text-center border-b border-[#DBC078] pb-2">
                Trayectoria Profesional
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Experiencia en casos */}
                <motion.div 
                  variants={itemVariants}
                  className="bg-white p-6 rounded-xl shadow-md border-t-4 border-[#D91E2E] relative overflow-hidden"
                >
                  <div className="flex items-center justify-between mb-4">
                    <h4 className="text-lg font-semibold text-[#593134] flex items-center">
                      <FaBalanceScale className="mr-2 text-[#D91E2E]" />
                      Casos atendidos
                    </h4>
                  </div>
                  
                  <div className="relative h-24 mb-4">
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={controls}
                      variants={{
                        visible: {
                          opacity: 1,
                          transition: {
                            staggerChildren: 0.1,
                            delayChildren: 0.3
                          }
                        }
                      }}
                      className="absolute inset-0 flex items-end"
                    >
                      {/* Gráfico de barras animado */}
                      {[60, 80, 100, 90, 70, 50, 80, 60].map((height, i) => (
                        <motion.div
                          key={i}
                          variants={barVariants}
                          className={`w-8 mx-1 ${i % 2 === 0 ? 'bg-[#593134]' : 'bg-[#DBC078]'} rounded-t-sm`}
                          style={{ height: `${height}%` }}
                        />
                      ))}
                    </motion.div>
                  </div>
                  
                  <div className="text-center">
                    <span className="text-3xl font-bold text-[#593134]">{CASES_TOTAL}+</span>
                    <p className="text-[#592533] mt-2">Procesos legales gestionados con excelencia</p>
                  </div>
                </motion.div>
                
                {/* Tasa de éxito */}
                <motion.div 
                  variants={itemVariants}
                  className="bg-white p-6 rounded-xl shadow-md border-t-4 border-[#DBC078]"
                >
                  <div className="flex items-center justify-between mb-4">
                    <h4 className="text-lg font-semibold text-[#593134] flex items-center">
                      <FaGavel className="mr-2 text-[#DBC078]" />
                      Efectividad legal
                    </h4>
                  </div>
                  
                  <div className="relative h-24 flex items-center justify-center">
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 0.8 }}
                      className="relative w-20 h-20"
                    >
                      <svg className="w-full h-full" viewBox="0 0 36 36">
                        <path
                          d="M18 2.0845
                            a 15.9155 15.9155 0 0 1 0 31.831
                            a 15.9155 15.9155 0 0 1 0 -31.831"
                          fill="none"
                          stroke="#E8E8E8"
                          strokeWidth="3"
                        />
                        <motion.path
                          d="M18 2.0845
                            a 15.9155 15.9155 0 0 1 0 31.831
                            a 15.9155 15.9155 0 0 1 0 -31.831"
                          fill="none"
                          stroke="#D91E2E"
                          strokeWidth="3"
                          strokeDasharray="100, 100"
                          initial={{ strokeDashoffset: 100 }}
                          animate={{ strokeDashoffset: 100 - SUCCESS_RATE }}
                          transition={{ duration: 2, delay: 0.5 }}
                        />
                      </svg>
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1.5 }}
                        className="absolute inset-0 flex items-center justify-center text-[#593134] font-bold text-xl"
                      >
                        {SUCCESS_RATE}%
                      </motion.div>
                    </motion.div>
                  </div>
                  
                  <div className="text-center mt-4">
                    <p className="text-[#592533]">
                      Tasa de éxito en resoluciones favorables
                    </p>
                    <div className="flex justify-center mt-2">
                      {[...Array(5)].map((_, i) => (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, scale: 0.5 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: 0.7 + i * 0.1 }}
                          className={`w-4 h-4 rounded-full ${i < Math.floor(SUCCESS_RATE / 20) ? 'bg-[#D91E2E]' : 'bg-[#E8E8E8]'} mx-1`}
                        />
                      ))}
                    </div>
                  </div>
                </motion.div>
              </div>

              {/* Frase destacada */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.5 }}
                className="mt-12 text-center italic text-[#592533] text-lg border-t border-[#DBC078] pt-6"
              >
                "En el derecho, cada caso es único. Mi compromiso es brindar soluciones legales <span className="text-[#D91E2E]">estratégicas</span> y <span className="text-[#D91E2E]">personalizadas</span> que protejan sus derechos e intereses."
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      <style jsx>{`
        .clip-corner {
          clip-path: polygon(100% 0, 0% 100%, 100% 100%);
        }
      `}</style>
    </section>
  );
};

// Animaciones
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
      delayChildren: 0.4
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
  visible: {
    height: "100%",
    transition: {
      duration: 0.8,
      ease: "backOut"
    }
  }
};

export default AboutSection;