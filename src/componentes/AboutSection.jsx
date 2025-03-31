import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

const AboutSection = () => {
  // Valores finales
  const CASES_TOTAL = 500;
  const SUCCESS_RATE = 95;
  
  // Velocidad de incremento (números por segundo)
  const CASES_SPEED = 300; // 300 casos/segundo
  const SUCCESS_SPEED = 60; // 60%/segundo

  const [casesCount, setCasesCount] = useState(0);
  const [successRate, setSuccessRate] = useState(0);
  const animationRef = useRef();
  const lastTimeRef = useRef();

  useEffect(() => {
    const animate = (timestamp) => {
      if (!lastTimeRef.current) lastTimeRef.current = timestamp;
      const deltaTime = timestamp - lastTimeRef.current; // Tiempo desde el último frame
      lastTimeRef.current = timestamp;

      // Calcular incrementos basados en el tiempo transcurrido
      const casesIncrement = (CASES_SPEED * deltaTime) / 1000;
      const successIncrement = (SUCCESS_SPEED * deltaTime) / 1000;

      setCasesCount(prev => {
        const newValue = prev + casesIncrement;
        return newValue >= CASES_TOTAL ? CASES_TOTAL : Math.floor(newValue);
      });

      setSuccessRate(prev => {
        const newValue = prev + successIncrement;
        return newValue >= SUCCESS_RATE ? SUCCESS_RATE : Math.floor(newValue);
      });

      // Continuar animación si no hemos llegado a los valores finales
      if (casesCount < CASES_TOTAL || successRate < SUCCESS_RATE) {
        animationRef.current = requestAnimationFrame(animate);
      }
    };

    animationRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [casesCount, successRate]);

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="md:flex md:items-center md:space-x-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="md:w-1/3 mb-10 md:mb-0"
          >
            <div className="relative h-64 w-64 mx-auto rounded-lg overflow-hidden shadow-xl">
              <img 
                src="/images/banner3.jpg" 
                alt="Abogado Santiago Cabarcas"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-[#222831] opacity-20"></div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="md:w-2/3"
          >
            <h2 className="text-3xl font-serif font-bold text-[#222831] mb-6">
              Sobre Santiago Cabarcas
            </h2>
            <p className="text-lg text-gray-700 mb-4">
              Abogado egresado de la Universidad de los Andes con especialización en Derecho Civil y Comercial. 
            </p>
            <p className="text-lg text-gray-700 mb-4">
              Con más de 15 años de experiencia en el ejercicio profesional, he representado a cientos de clientes 
              en casos complejos, obteniendo resultados favorables y soluciones efectivas.
            </p>
            <p className="text-lg text-gray-700 mb-6">
              Mi enfoque se basa en la atención personalizada, la transparencia y la búsqueda constante de 
              la excelencia profesional.
            </p>
            
            <div className="grid grid-cols-2 gap-4">
              <motion.div 
                initial={{ scale: 0.9 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.3 }}
                whileHover={{ scale: 1.02 }}
                className="bg-gray-50 p-4 rounded-lg shadow-sm"
              >
                <h4 className="font-bold text-[#222831] mb-2 text-2xl">
                  +{casesCount}
                </h4>
                <p className="text-gray-600">Casos atendidos</p>
              </motion.div>
              <motion.div 
                initial={{ scale: 0.9 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.3, delay: 0.1 }}
                whileHover={{ scale: 1.02 }}
                className="bg-gray-50 p-4 rounded-lg shadow-sm"
              >
                <h4 className="font-bold text-[#222831] mb-2 text-2xl">
                  {successRate}%
                </h4>
                <p className="text-gray-600">Casos exitosos</p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;