import React, { useState, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const AboutSection = () => {
  const CASES_TOTAL = 500;
  const SUCCESS_RATE = 95;
  const EXPERIENCE_YEARS = 4;
  
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2
  });

  const controls = useAnimation();
  const [casesDisplayed, setCasesDisplayed] = useState(0);

  useEffect(() => {
    if (inView) {
      controls.start("visible");
      
      // Animación de conteo para casos atendidos
      let start = 0;
      const end = CASES_TOTAL;
      const duration = 2000;
      const incrementTime = duration / end;

      const timer = setInterval(() => {
        start += 1;
        setCasesDisplayed(start);
        if (start >= end) clearInterval(timer);
      }, incrementTime);

      return () => clearInterval(timer);
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
                className="absolute -bottom-4 -right-4 bg-[#DBC078] text-[#593134] font-bold text-xl px-6 py-3 rounded-lg shadow-lg border-2 border-white"
              >
                +{EXPERIENCE_YEARS} años
              </motion.div>

              <div className="absolute top-0 right-0 w-16 h-16 bg-[#D91E2E] clip-corner">
                <div className="absolute top-1 right-1 text-white text-xs font-bold transform rotate-45">
                  EXPERTO
                </div>
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
                <span className="text-[#DBC078] relative z-10">Santiago Cabarcas</span>
                <span className="absolute -bottom-2 left-0 w-full h-2 bg-[#D91E2E]/30 z-0"></span>
              </h2>
            </div>

            <div className="space-y-6 mb-10">
              <p className="text-lg text-[#592533] leading-relaxed border-l-4 border-[#DBC078] pl-4">
                SANTIAGO RUIZ CABARCAS Abogados Consultores y Litigantes es
                una firma jurídica especializada en ofrecer soluciones integrales y
                personalizadas en diversas áreas del derecho, liderada por Santiago
                De Jesús Ruiz Cabarcas, abogado graduado de la Universidad
                Pontificia Bolivariana, especialista en Derecho Penal de la
                Universidad del Rosario y estudiante de la especialización en
                Derecho Procesal Penal, en la Universidad Externado de Colombia. 
              </p>
              
              <p className="text-lg text-[#592533] leading-relaxed bg-[#F2F2F2] p-4 rounded-lg">
                Con más de {EXPERIENCE_YEARS} años de experiencia en el ejercicio profesional. Con una sólida trayectoria en reconocidas firmas, entidades públicas
                y asociaciones jurídicas, la firma combina profesionalismo, ética y
                sensibilidad humana para proteger los derechos e intereses de sus
                clientes.
              </p>
              
              <div className="relative group">
                <p className="text-lg text-[#592533] leading-relaxed relative z-10">
                  Mi enfoque se basa en la atención personalizada, la transparencia y la búsqueda constante de la excelencia profesional.
                </p>
                <div className="absolute inset-0 bg-[#DBC078]/10 rounded-lg -z-10 group-hover:bg-[#DBC078]/20 transition-all duration-300"></div>
              </div>
            </div>
            
            {/* Sección de estadísticas mejorada */}
            <motion.div 
              initial="hidden"
              animate={controls}
              variants={containerVariants}
              className="mt-12"
            >
              <h3 className="text-xl font-bold text-[#593134] mb-8 text-center">Resultados que hablan por sí solos</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Casos atendidos - Versión mejorada */}
                <motion.div 
                  variants={itemVariants}
                  className="bg-[#F8F8F8] p-6 rounded-xl border border-[#E8E8E8] relative overflow-hidden"
                >
                  <div className="flex items-center justify-between mb-4 z-10 relative">
                    <h4 className="text-lg font-semibold text-[#593134]">Casos atendidos</h4>
                    <div className="w-10 h-10 bg-[#D91E2E] rounded-full flex items-center justify-center">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                    </div>
                  </div>
                  
                  {/* Número siempre visible */}
                  <div className="flex items-end z-10 relative">
                    <motion.span 
                      className="text-4xl font-bold text-[#593134]"
                      variants={counterVariants}
                    >
                      {casesDisplayed}
                    </motion.span>
                    <span className="text-2xl text-[#D91E2E] font-medium ml-2">+</span>
                  </div>
                  
                  {/* Documentos animados (ahora detrás del texto) */}
                  <div className="absolute bottom-2 right-2 z-0 opacity-30">
                    <DocumentStack count={3} />
                  </div>
                  
                  <div className="mt-4 h-2 bg-[#E8E8E8] rounded-full overflow-hidden z-10 relative">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: '100%' }}
                      transition={{ duration: 2, delay: 0.5 }}
                      className="h-full bg-[#DBC078]"
                    />
                  </div>
                </motion.div>
                
                {/* Tasa de éxito - Versión mejorada */}
                <motion.div 
                  variants={itemVariants}
                  className="bg-[#F8F8F8] p-6 rounded-xl border border-[#E8E8E8]"
                >
                  <div className="flex items-center justify-between mb-4">
                    <h4 className="text-lg font-semibold text-[#593134]">Tasa de éxito</h4>
                    <div className="w-10 h-10 bg-[#DBC078] rounded-full flex items-center justify-center">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                      </svg>
                    </div>
                  </div>
                  
                  <div className="flex items-end">
                    <motion.span 
                      className="text-4xl font-bold text-[#593134]"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 1.5 }}
                    >
                      {SUCCESS_RATE}
                    </motion.span>
                    <span className="text-2xl text-[#D91E2E] font-medium ml-2">%</span>
                  </div>
                  
                  <div className="mt-4 flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.7 + i * 0.1 }}
                        className={`w-6 h-6 rounded-full ${i < Math.floor(SUCCESS_RATE / 20) ? 'bg-[#DBC078]' : 'bg-[#E8E8E8]'} mx-1`}
                      />
                    ))}
                    <span className="text-sm text-[#592533] ml-2">({SUCCESS_RATE} de cada 100 casos)</span>
                  </div>
                </motion.div>
              </div>
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

const counterVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 1
    }
  }
};

// Componente de pila de documentos (modificado para estar en el fondo)
const DocumentStack = ({ count }) => {
  return (
    <div className="relative w-24 h-20">
      {[...Array(count)].map((_, i) => (
        <motion.div
          key={i}
          initial={{ y: 10, rotate: -2 + Math.random() * 4 }}
          animate={{ 
            y: 0,
            transition: {
              delay: 0.5 + i * 0.1,
              duration: 0.5
            }
          }}
          className={`absolute w-full h-full bg-white border ${i % 2 ? 'border-[#DBC078]' : 'border-[#593134]'} shadow-sm`}
          style={{
            zIndex: count - i,
            top: `${i * 4}px`,
            left: `${i * 2}px`
          }}
        >
          <div className="absolute top-2 left-3 w-6 h-1 bg-[#E8E8E8]"></div>
          <div className="absolute top-4 left-3 w-10 h-1 bg-[#E8E8E8]"></div>
          <div className="absolute top-6 left-3 w-8 h-1 bg-[#E8E8E8]"></div>
        </motion.div>
      ))}
    </div>
  );
};

export default AboutSection;