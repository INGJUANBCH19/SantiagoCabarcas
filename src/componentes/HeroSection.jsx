import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

export const HeroSection = () => {
  const [loaded, setLoaded] = useState(false);

  const smoothScroll = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <motion.section 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="relative min-h-screen flex flex-col justify-end overflow-hidden"
    >
      {/* Fondo con overlay mínimo */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/banner2.png"
          alt="Abogado Santiago Cabarcas"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#592533]/10 to-transparent"></div>
      </div>

     
      {/* Indicador de scroll + Línea dorada en el fondo */}
      <div className="absolute bottom-0 left-0 right-0 z-10">
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
        >
          <div className="animate-pulse w-4 h-4 border-r-2 border-b-2 border-[#DBC078] rotate-45"></div>
        </motion.div>

        <motion.div
          initial={{ scaleX: 0 }}
          animate={loaded ? { scaleX: 1 } : {}}
          transition={{ duration: 1, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="h-1 bg-[#DBC078] w-full"
        />
      </div>
    </motion.section>
  );
};

export default HeroSection;