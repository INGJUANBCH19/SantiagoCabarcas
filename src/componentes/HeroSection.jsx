import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

export const HeroSection = () => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <motion.section 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="relative min-h-screen flex items-center justify-center overflow-hidden" // Añadido justify-center
    >
      {/* Banner de fondo */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/banner2.jpg"
          alt="Banner profesional"
          className="w-full h-full object-cover"
        />
        {/* Overlay oscuro */}
        <div className="absolute inset-0 bg-black opacity-50"></div>
      </div>

      {/* Contenido centrado */}
      <div className="w-full px-6 py-20 relative z-10 flex justify-center"> {/* Añadido flex justify-center */}
        {/* Contenedor del contenido con máximo ancho */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={loaded ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="bg-black bg-opacity-50 backdrop-blur-sm p-8 rounded-lg w-full max-w-2xl text-center" // Añadido text-center
        >
          {/* Nombre */}
          <motion.h1
            initial={{ x: -50, opacity: 0 }}
            animate={loaded ? { x: 0, opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-4xl md:text-5xl lg:text-6xl font-serif mb-6 leading-tight text-white"
          >
            Santiago Cabarcas<br />
            <motion.span
              initial={{ opacity: 0 }}
              animate={loaded ? { opacity: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="text-[#DBC078]"
            >
              Abogado Especializado
            </motion.span>
          </motion.h1>

          {/* Descripción */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={loaded ? { opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="font-mono text-sm md:text-base mb-8 text-gray-200 mx-auto max-w-md" // Añadido mx-auto
          >
            Soluciones legales personalizadas con enfoque estratégico y atención detallada.
          </motion.p>

          {/* Botón */}
          <motion.a
            href="#contacto"
            initial={{ scale: 0.95, opacity: 0 }}
            animate={loaded ? { scale: 1, opacity: 1 } : {}}
            transition={{ 
              type: "spring",
              stiffness: 100,
              damping: 10,
              delay: 1.1
            }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            className="font-mono text-sm md:text-base border border-[#DBC078] text-[#DBC078] hover:bg-[#DBC078] hover:text-gray-900 px-6 py-3 inline-block transition-colors duration-300 bg-white bg-opacity-10"
          >
            CONSULTA INICIAL
          </motion.a>
        </motion.div>
      </div>

      {/* Efecto de partículas */}
      <motion.div 
        className="absolute inset-0 pointer-events-none z-0"
        initial={{ opacity: 0 }}
        animate={loaded ? { opacity: 0.03 } : {}}
        transition={{ duration: 1.5, delay: 1.5 }}
      >
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute bg-[#DBC078] rounded-full"
            style={{
              width: Math.random() * 5 + 2 + 'px',
              height: Math.random() * 5 + 2 + 'px',
              left: Math.random() * 100 + '%',
              top: Math.random() * 100 + '%',
            }}
            animate={{
              y: [0, (Math.random() - 0.5) * 40],
              x: [0, (Math.random() - 0.5) * 30],
              opacity: [0.3, 0],
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              repeatType: "reverse",
              delay: Math.random() * 5,
            }}
          />
        ))}
      </motion.div>
    </motion.section>
  );
};
export default HeroSection;