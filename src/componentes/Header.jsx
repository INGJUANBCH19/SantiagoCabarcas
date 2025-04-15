import { motion, useScroll, useMotionValueEvent } from 'framer-motion';
import { FaWhatsapp, FaEnvelope } from 'react-icons/fa';
import { useEffect, useState, useRef } from 'react';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [loaded, setLoaded] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const headerRef = useRef(null);

  const { scrollY } = useScroll();

  useEffect(() => {
    setLoaded(true);
  }, []);

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious();
    
    if (latest > previous && latest > 100) {
      setHidden(true);
    } 
    else if (latest < previous || latest <= 100) {
      setHidden(false);
    }
    
    setLastScrollY(latest);
    setScrolled(latest > 10);
  });

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  };

  return (
    <motion.header 
      ref={headerRef}
      initial={{ y: -20, opacity: 0 }}
      animate={loaded ? { 
        y: hidden ? -100 : 0,
        opacity: 1,
        backgroundColor: scrolled ? 'rgba(89, 49, 52, 0.95)' : 'rgba(89, 49, 52, 0.7)',
        backdropFilter: scrolled ? 'blur(8px)' : 'blur(4px)',
        boxShadow: scrolled ? '0 4px 12px rgba(0, 0, 0, 0.1)' : 'none',
        transition: { type: 'spring', damping: 15, stiffness: 200 }
      } : {}}
      className="fixed w-full top-0 z-50"
    >
      <div className="max-w-[1800px] mx-auto px-6">
        <div className="flex items-center justify-between py-3">
          {/* Logo y navegación */}
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
              className="rounded-full overflow-hidden border-2 border-[#DBC078] p-1.5 bg-white"
            >
              <img 
                src="/SC.png" 
                alt="Logo Santiago Cabarcas" 
                className="h-10 w-auto object-cover"
              />
            </motion.div>
            
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
                  onClick={(e) => {
                    e.preventDefault();
                    if (item === 'Inicio') {
                      scrollToTop();
                    } else {
                      scrollToSection(item.toLowerCase());
                    }
                  }}
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
                  className="text-[#F2F2F2] text-sm uppercase tracking-wider transition-colors hover:text-[#DBC078]"
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
              href="https://wa.me/3127953716"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ 
                scale: 1.1,
                backgroundColor: 'rgba(219, 192, 120, 0.2)'
              }}
              whileTap={{ scale: 0.95 }}
              className="text-[#DBC078] p-2 rounded-full transition-colors"
            >
              <FaWhatsapp size={18} />
            </motion.a>
            
            <motion.a
              href="mailto:SANTIAGO.RUIZCABARCAS@outlook.com"
              whileHover={{ 
                scale: 1.1,
                backgroundColor: 'rgba(219, 192, 120, 0.2)'
              }}
              whileTap={{ scale: 0.95 }}
              className="text-[#DBC078] p-2 rounded-full transition-colors"
            >
              <FaEnvelope size={18} />
            </motion.a>
          </motion.div>
        </div>
      </div>

      {/* Barra decorativa */}
      <motion.div 
        initial={{ scaleX: 0 }}
        animate={loaded ? { 
          scaleX: hidden ? 0 : 1,
          opacity: hidden ? 0 : 1
        } : {}}
        transition={{ duration: 0.3 }}
        className="h-0.5 bg-[#D91E2E] origin-left w-full"
      />
    </motion.header>
  );
};

export default Header;