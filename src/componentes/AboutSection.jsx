import React, { useState, useEffect, useRef } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const AboutSection = () => {
  // Valores finales
  const CASES_TOTAL = 500;
  const SUCCESS_RATE = 95;
  const EXPERIENCE_YEARS = 15;
  
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2
  });
  const controls = useAnimation();

  return (
    <section className="py-20 bg-white" ref={ref} id="sobre-mi">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:flex lg:items-center lg:space-x-12">
          {/* Columna de imagen */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="lg:w-2/5 mb-12 lg:mb-0 relative"
          >
            <div className="relative h-80 w-full rounded-xl overflow-hidden shadow-2xl">
              <img 
                src="/images/banner3.jpg" 
                alt="Abogado Santiago Cabarcas"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#222831] opacity-30"></div>
              
              {/* Badge de experiencia */}
              <motion.div
                initial={{ scale: 0 }}
                animate={inView ? { scale: 1 } : {}}
                transition={{ 
                  delay: 0.5,
                  type: "spring",
                  stiffness: 260,
                  damping: 20
                }}
                className="absolute -bottom-4 -right-4 bg-[#DBC078] text-white font-bold text-xl px-6 py-3 rounded-lg shadow-lg"
              >
                +{EXPERIENCE_YEARS} años
              </motion.div>
            </div>
          </motion.div>
          
          {/* Columna de contenido */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:w-3/5"
          >
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-800 mb-6">
              Sobre <span className="text-[#DBC078]">Santiago Cabarcas</span>
            </h2>
            <div className="space-y-4 mb-8">
              <p className="text-lg text-gray-700 leading-relaxed">
                Abogado egresado de la Universidad de los Andes con especialización en Derecho Civil y Comercial. 
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Con más de {EXPERIENCE_YEARS} años de experiencia en el ejercicio profesional, he representado a cientos de clientes en casos complejos, obteniendo resultados favorables y soluciones efectivas.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Mi enfoque se basa en la atención personalizada, la transparencia y la búsqueda constante de la excelencia profesional.
              </p>
            </div>
            
            {/* Estadísticas */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <CounterBox 
                value={CASES_TOTAL} 
                suffix="+" 
                label="Casos atendidos" 
                shouldStart={inView}
              />
              <CounterBox 
                value={SUCCESS_RATE} 
                suffix="%" 
                label="Tasa de éxito" 
                shouldStart={inView}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

// Componente de contador mejorado
const CounterBox = ({ value, suffix = "", label, shouldStart }) => {
  const [count, setCount] = useState(0);
  const countRef = useRef(null);
  const duration = 2000; // 2 segundos
  const startValue = 0;
  const increment = value / (duration / 16); // 60fps ~16ms por frame

  useEffect(() => {
    if (!shouldStart) return;

    let startTime;
    let currentCount = startValue;
    
    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const elapsed = timestamp - startTime;
      const progress = Math.min(elapsed / duration, 1);
      
      currentCount = Math.floor(progress * value);
      setCount(currentCount);

      if (progress < 1) {
        countRef.current = requestAnimationFrame(animate);
      } else {
        setCount(value); // Asegurar el valor final exacto
      }
    };

    countRef.current = requestAnimationFrame(animate);

    return () => {
      if (countRef.current) {
        cancelAnimationFrame(countRef.current);
      }
    };
  }, [shouldStart, value]);

  return (
    <motion.div
      whileHover={{ 
        y: -5,
        boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)"
      }}
      className="bg-gray-50 p-6 rounded-xl border-l-4 border-[#DBC078]"
    >
      <div className="flex items-end">
        <span className="text-3xl md:text-4xl font-bold text-gray-800">
          {count}
        </span>
        <span className="text-xl text-[#DBC078] font-medium ml-1">
          {suffix}
        </span>
      </div>
      <p className="text-gray-600 mt-2">{label}</p>
    </motion.div>
  );
};

export default AboutSection;