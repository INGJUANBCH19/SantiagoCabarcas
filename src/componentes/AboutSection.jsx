import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const AboutSection = () => {
  const CASES_TOTAL = 500;
  const SUCCESS_RATE = 95;
  const EXPERIENCE_YEARS = 15;
  
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2
  });

  return (
    <section className="py-20 bg-white w-full" ref={ref} id="sobre-mi">
      <div className="max-w-[1800px] mx-auto px-4">
        <div className="lg:flex lg:items-center lg:justify-between w-full gap-12">
          {/* Columna de imagen - Versión mejorada */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="lg:w-[45%] mb-12 lg:mb-0 relative w-full"
          >
            <div className="relative h-96 w-full rounded-xl overflow-hidden shadow-2xl border-4 border-[#F2F2F2]">
              <img 
                src="/images/banner3.jpg" 
                alt="Abogado Santiago Cabarcas"
                className="w-full h-full object-cover object-center"
              />
              
              {/* Badge mejorado */}
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

              {/* Efecto de esquina */}
              <div className="absolute top-0 right-0 w-16 h-16 bg-[#D91E2E] clip-corner">
                <div className="absolute top-1 right-1 text-white text-xs font-bold transform rotate-45">
                  EXPERTO
                </div>
              </div>
            </div>
          </motion.div>
          
          {/* Columna de contenido - Más destacada */}
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
                Abogado egresado de la Universidad de los Andes con especialización en Derecho Civil y Comercial. 
              </p>
              
              <p className="text-lg text-[#592533] leading-relaxed bg-[#F2F2F2] p-4 rounded-lg">
                Con más de {EXPERIENCE_YEARS} años de experiencia en el ejercicio profesional, he representado a cientos de clientes en casos complejos, obteniendo resultados favorables y soluciones efectivas.
              </p>
              
              <div className="relative group">
                <p className="text-lg text-[#592533] leading-relaxed relative z-10">
                  Mi enfoque se basa en la atención personalizada, la transparencia y la búsqueda constante de la excelencia profesional.
                </p>
                <div className="absolute inset-0 bg-[#DBC078]/10 rounded-lg -z-10 group-hover:bg-[#DBC078]/20 transition-all duration-300"></div>
              </div>
            </div>
            
            {/* Estadísticas - Versión mejorada */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
              <CounterBox 
                value={CASES_TOTAL} 
                suffix="+" 
                label="Casos atendidos" 
                shouldStart={inView}
                icon={<ScaleIcon />}
              />
              <CounterBox 
                value={SUCCESS_RATE} 
                suffix="%" 
                label="Tasa de éxito" 
                shouldStart={inView}
                icon={<TrophyIcon />}
              />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Estilos personalizados para el efecto de esquina */}
      <style jsx>{`
        .clip-corner {
          clip-path: polygon(100% 0, 0% 100%, 100% 100%);
        }
      `}</style>
    </section>
  );
};

// Componente de ícono personalizado
const ScaleIcon = () => (
  <svg className="w-8 h-8 text-[#D91E2E]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
  </svg>
);

const TrophyIcon = () => (
  <svg className="w-8 h-8 text-[#DBC078]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 19a2 2 0 01-2 2H7a2 2 0 01-2-2V5a2 2 0 012-2h5l2 2h5a2 2 0 012 2z" />
  </svg>
);

const CounterBox = ({ value, suffix = "", label, shouldStart, icon }) => {
  const [count, setCount] = useState(0);
  const countRef = useRef(null);

  useEffect(() => {
    if (!shouldStart) return;

    const duration = 2000;
    let startTime;
    let currentCount = 0;
    
    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const elapsed = timestamp - startTime;
      const progress = Math.min(elapsed / duration, 1);
      
      currentCount = Math.floor(progress * value);
      setCount(currentCount);

      if (progress < 1) {
        countRef.current = requestAnimationFrame(animate);
      } else {
        setCount(value);
      }
    };

    countRef.current = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(countRef.current);
  }, [shouldStart, value]);

  return (
    <motion.div
      whileHover={{ 
        y: -8,
        boxShadow: "0 12px 20px -8px rgba(89, 49, 52, 0.15)"
      }}
      className="bg-white p-6 rounded-xl border-2 border-[#F2F2F2] w-full shadow-sm transition-all relative overflow-hidden group"
    >
      <div className="absolute top-4 right-4 opacity-20 group-hover:opacity-30 transition-opacity">
        {icon}
      </div>
      
      <div className="flex items-end relative z-10">
        <span className="text-4xl md:text-5xl font-bold text-[#593134]">
          {count}
        </span>
        <span className="text-2xl text-[#D91E2E] font-medium ml-2">
          {suffix}
        </span>
      </div>
      <p className="text-[#592533] mt-3 font-medium relative z-10">{label}</p>
      
      <div className="absolute bottom-0 left-0 w-full h-1 bg-[#DBC078] group-hover:h-2 transition-all duration-300"></div>
    </motion.div>
  );
};

export default AboutSection;