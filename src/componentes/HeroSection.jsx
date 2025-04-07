import { motion } from 'framer-motion';
import { useEffect, useState, useRef } from 'react';

export const HeroSection = () => {
  const [loaded, setLoaded] = useState(false);
  const particlesContainerRef = useRef(null);

  useEffect(() => {
    setLoaded(true);
    return () => {
      // Cleanup para evitar el error al desmontar
      if (particlesContainerRef.current) {
        particlesContainerRef.current = null;
      }
    };
  }, []);

  return (
    <motion.section 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#593134]" // Fallback background
    >
      {/* Fondo con overlay mejorado */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/banner2.png"
          alt="Banner profesional"
          className="w-full h-full object-cover object-center brightness-75 contrast-110"
        />
        {/* Overlay degradado más intenso */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#592533]/95 via-[#593134]/80 to-transparent"></div>
      </div>

      {/* Contenido principal */}
      <div className="w-full px-6 py-20 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={loaded ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mx-auto max-w-4xl text-center"
        >
          {/* Nombre con mejor contraste */}
          <motion.h1
            initial={{ opacity: 0 }}
            animate={loaded ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-5xl md:text-6xl lg:text-7xl font-serif font-bold text-[#F2F2F2] mb-4 leading-tight drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]"
          >
            Santiago Cabarcas
          </motion.h1>

          {/* Línea divisoria acentuada */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={loaded ? { scaleX: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="h-1 w-32 bg-[#D91E2E] mx-auto mb-6 rounded-full"
          />

          {/* Titulación con sombra */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={loaded ? { opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="text-2xl md:text-3xl text-[#DBC078] font-medium mb-8 [text-shadow:_0_2px_4px_rgb(0_0_0_/_0.8)]"
          >
            Abogado Especializado
          </motion.p>

          {/* Descripción con fondo semitransparente */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={loaded ? { opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 1.5 }}
            className="inline-block bg-[#593134]/90 backdrop-blur-sm px-8 py-5 rounded-lg mb-12 border border-[#592533]"
          >
            <p className="text-lg md:text-xl text-[#F2F2F2] leading-relaxed">
              Soluciones legales personalizadas con enfoque estratégico
            </p>
          </motion.div>

          {/* Botones con mejor jerarquía */}
          <motion.div
            className="flex flex-col sm:flex-row justify-center gap-6"
            initial={{ opacity: 0 }}
            animate={loaded ? { opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 1.8 }}
          >
            <motion.a
              href="#contacto"
              whileHover={{ 
                scale: 1.05,
                backgroundColor: '#D91E2E',
                boxShadow: '0 4px 12px rgba(217, 30, 46, 0.4)'
              }}
              whileTap={{ scale: 0.98 }}
              className="px-10 py-4 bg-[#DBC078] text-[#593134] font-bold rounded-lg border-2 border-[#DBC078] transition-all text-lg hover:shadow-lg"
            >
              CONSULTA INICIAL
            </motion.a>

            <motion.a
              href="#servicios"
              whileHover={{ 
                scale: 1.05,
                backgroundColor: 'rgba(217, 30, 46, 0.2)',
                borderColor: '#D91E2E',
                boxShadow: '0 4px 12px rgba(217, 30, 46, 0.2)'
              }}
              whileTap={{ scale: 0.98 }}
              className="px-10 py-4 text-[#F2F2F2] font-bold rounded-lg border-2 border-[#DBC078] transition-all text-lg hover:shadow-lg"
            >
              SERVICIOS LEGALES
            </motion.a>
          </motion.div>
        </motion.div>
      </div>

      {/* Elemento decorativo inferior - versión segura */}
      {loaded && (
        <motion.div 
          className="absolute bottom-0 left-0 right-0 h-2 bg-[#DBC078] z-20"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1.2, delay: 2.1 }}
        />
      )}

      {/* Partículas mejoradas con referencia y render condicional */}
      {loaded && (
        <motion.div 
          ref={particlesContainerRef}
          className="absolute inset-0 pointer-events-none z-0 overflow-hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.15 }}
          transition={{ duration: 1.5, delay: 2.4 }}
        >
          {[...Array(25)].map((_, i) => (
            <motion.div
              key={`particle-${i}`}
              className="absolute bg-[#DBC078] rounded-full"
              style={{
                width: `${Math.random() * 8 + 3}px`,
                height: `${Math.random() * 8 + 3}px`,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, (Math.random() - 0.5) * 120],
                x: [0, (Math.random() - 0.5) * 60],
                opacity: [0.6, 0],
              }}
              transition={{
                duration: Math.random() * 15 + 15,
                repeat: Infinity,
                repeatType: "reverse",
                delay: Math.random() * 5,
              }}
            />
          ))}
        </motion.div>
      )}
    </motion.section>
  );
};

export default HeroSection;