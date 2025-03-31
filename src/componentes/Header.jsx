import { motion } from 'framer-motion';
import { FaWhatsapp, FaEnvelope } from 'react-icons/fa';
import { useEffect, useState } from 'react';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.header 
      initial={{ y: -20, opacity: 0 }}
      animate={loaded ? { 
        y: 0, 
        opacity: 1,
        backgroundColor: scrolled ? 'rgba(34, 40, 49, 0.95)' : 'rgba(34, 40, 49, 1)',
        backdropFilter: scrolled ? 'blur(8px)' : 'blur(0)'
      } : {}}
      transition={{ duration: 0.5 }}
      className="fixed w-full top-0 z-50 shadow-md"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between py-3">
          {/* Logo grande con animación */}
          <motion.div 
            initial={{ scale: 0.8, opacity: 0 }}
            animate={loaded ? { scale: 1, opacity: 1 } : {}}
            transition={{ 
              type: "spring",
              stiffness: 200,
              damping: 15,
              delay: 0.2
            }}
            className="flex items-center gap-4"
          >
            <motion.div 
              whileHover={{ rotate: 5, scale: 1.05 }}
              className="rounded-full overflow-hidden border-2 border-[#DBC078] p-1.5 bg-white" // Aumentado el padding
            >
              <img 
                src="/SC.png" 
                alt="Logo Santiago Cabarcas" 
                className="h-10 w-auto object-cover" // Tamaño aumentado a h-10 (40px)
              />
            </motion.div>
            
            {/* Menú de navegación */}
            <motion.nav 
              initial={{ opacity: 0 }}
              animate={loaded ? { opacity: 1 } : {}}
              transition={{ staggerChildren: 0.1 }}
              className="hidden md:flex gap-6"
            >
              {['Inicio', 'Servicios', 'Contacto'].map((item, index) => (
                <motion.a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  initial={{ y: -10, opacity: 0 }}
                  animate={loaded ? { y: 0, opacity: 1 } : {}}
                  transition={{ 
                    duration: 0.3,
                    delay: 0.3 + index * 0.1
                  }}
                  whileHover={{ 
                    color: '#DBC078',
                    y: -2
                  }}
                  className="text-[#e6d3a0] text-sm uppercase tracking-wider transition-colors"
                >
                  {item}
                </motion.a>
              ))}
            </motion.nav>
          </motion.div>

          {/* Iconos de contacto */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={loaded ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.6 }}
            className="flex items-center gap-3"
          >
            <motion.a
              href="https://wa.me/57300XXXXXXX"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ 
                scale: 1.1,
                color: '#e6d3a0',
                backgroundColor: 'rgba(219, 192, 120, 0.2)'
              }}
              whileTap={{ scale: 0.95 }}
              className="text-[#DBC078] p-2 rounded-full transition-colors"
            >
              <FaWhatsapp size={18} /> {/* Icono ligeramente más grande */}
            </motion.a>
            
            <motion.a
              href="mailto:contacto@ejemplo.com"
              whileHover={{ 
                scale: 1.1,
                color: '#e6d3a0',
                backgroundColor: 'rgba(219, 192, 120, 0.2)'
              }}
              whileTap={{ scale: 0.95 }}
              className="text-[#DBC078] p-2 rounded-full transition-colors"
            >
              <FaEnvelope size={18} /> {/* Icono ligeramente más grande */}
            </motion.a>
          </motion.div>
        </div>
      </div>

      {/* Barra decorativa */}
      <motion.div 
        initial={{ scaleX: 0 }}
        animate={loaded ? { scaleX: 1 } : {}}
        transitionxa={{ duration: 0.8, delay: 0.8 }}
        className="h-0.5 bg-[#DBC078] origin-left"
      />
    </motion.header>
  );
};

export default Header;