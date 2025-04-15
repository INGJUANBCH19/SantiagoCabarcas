import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Footer = () => {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      // Comportamiento especial para "Sobre Mí"
      if (id === 'sobre-mi') {
        element.scrollIntoView({ 
          behavior: 'smooth',
          block: 'start'
        });
        
        // Animación especial para "Sobre Mí"
        element.style.transform = 'translateY(-20px)';
        element.style.opacity = '0.8';
        element.style.transition = 'all 0.5s ease';
        
        setTimeout(() => {
          element.style.transform = 'translateY(0)';
          element.style.opacity = '1';
          element.style.boxShadow = '0 0 20px rgba(219, 192, 120, 0.5)';
          
          setTimeout(() => {
            element.style.boxShadow = 'none';
          }, 1500);
        }, 300);
      }
      // Comportamiento para servicios
      else if (id === 'servicios') {
        element.scrollIntoView({ 
          behavior: 'smooth',
          block: 'start'
        });
        
        // Animación para servicios
        element.style.transition = 'box-shadow 0.5s ease';
        element.style.boxShadow = '0 0 0 2px rgba(219, 192, 120, 0.5)';
        
        setTimeout(() => {
          element.style.boxShadow = 'none';
        }, 1000);
      }
      // Comportamiento para otras secciones
      else {
        element.scrollIntoView({ 
          behavior: 'smooth',
          block: 'start'
        });
      }
    }
  };

  // Servicios que coinciden con los IDs del ServicesSection
  const servicios = [
    { name: "Derecho Penal", id: "servicios" },
    { name: "Responsabilidad Fiscal", id: "servicios" },
    { name: "Derecho Disciplinario", id: "servicios" },
    { name: "Derecho Constitucional", id: "servicios" },
    { name: "Derecho Civil", id: "servicios" },
    { name: "Contratos", id: "servicios" },
    { name: "Litigios", id: "servicios" },
    { name: "Asesoría Corporativa", id: "servicios" }
  ];

  return (
    <footer className="bg-[#593134] text-[#F2F2F2] pt-16 pb-8 w-full">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          
          {/* Columna Logo */}
          <div className="md:col-span-1">
            <div className="flex items-center mb-4">
              <div className="rounded-full overflow-hidden border-2 border-[#DBC078] p-1.5 bg-white mr-4">
                <img src="/SC.png" alt="Logo" className="h-12 w-auto object-cover"/>
              </div>
              <h3 className="text-xl font-serif">Santiago Ruiz Cabarcas</h3>
            </div>
            <p className="text-[#F2F2F2]/80 mb-4">
              Soluciones legales personalizadas.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-[#F2F2F2]/80 hover:text-[#DBC078] transition">
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd"/>
                </svg>
              </a>
              <a href="#" className="text-[#F2F2F2]/80 hover:text-[#DBC078] transition">
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Enlaces rápidos */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-[#DBC078]">Enlaces Rápidos</h3>
            <ul className="space-y-2">
              {['Inicio', 'Servicios', 'Sobre Mí', 'Testimonios', 'Contacto'].map((item) => {
                const id = item.toLowerCase().replace(' ', '-');
                return (
                  <motion.li 
                    key={item}
                    whileHover={{ x: 5 }}
                    transition={{ type: 'spring', stiffness: 300 }}
                  >
                    <a 
                      href={`#${id}`}
                      onClick={(e) => {
                        e.preventDefault();
                        if (item === 'Inicio') {
                          window.scrollTo({
                            top: 0,
                            behavior: 'smooth'
                          });
                        } else {
                          scrollToSection(id);
                        }
                      }}
                      className="text-[#F2F2F2]/80 hover:text-[#F2F2F2] transition flex items-center"
                    >
                      <span className="mr-2 text-[#DBC078]">→</span>
                      {item}
                    </a>
                  </motion.li>
                );
              })}
            </ul>
          </div>

          {/* Servicios */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-[#DBC078]">Servicios</h3>
            <ul className="space-y-2">
              {servicios.map((servicio) => (
                <motion.li 
                  key={servicio.name}
                  whileHover={{ x: 5 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  <a 
                    href={`#${servicio.id}`}
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection(servicio.id);
                    }}
                    className="text-[#F2F2F2]/80 hover:text-[#F2F2F2] transition flex items-center"
                  >
                    <span className="mr-2 text-[#DBC078]">→</span>
                    {servicio.name}
                  </a>
                </motion.li>
              ))}
            </ul>
          </div>

          {/* Contacto */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-[#DBC078]">Contacto</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <FaPhone className="mt-1 mr-3 text-[#D91E2E]"/>
                <div>
                  <p className="text-[#F2F2F2]">+57 (312) 795-3716</p>
                  <p className="text-sm text-[#F2F2F2]/60">Lunes a Viernes: 8am - 6pm</p>
                </div>
              </li>
              <li className="flex items-start">
                <FaEnvelope className="mt-1 mr-3 text-[#D91E2E]"/>
                <a href="mailto:SANTIAGO.RUIZCABARCAS@outlook.com" className="text-[#F2F2F2]/80 hover:text-[#F2F2F2] transition">
                  SANTIAGO.RUIZCABARCAS@outlook.com
                </a>
              </li>
              <li className="flex items-start">
                <FaMapMarkerAlt className="mt-1 mr-3 text-[#D91E2E]"/>
                <address className="text-[#F2F2F2]/80 not-italic">CALLE 81#11-68 OFICINA 402 EDIFICIO CENTRO EJECUTIVO I BOGOTA</address>
              </li>
              <li className="flex items-start">
                <FaMapMarkerAlt className="mt-1 mr-3 text-[#D91E2E]"/>
                <address className="text-[#F2F2F2]/80 not-italic">CALLE 31#4-47 OFICINA 504 EDIFICIO CENTRO EJECUTIVO MONTERIA</address>
              </li>
              <li className="flex items-start">
                <FaClock className="mt-1 mr-3 text-[#D91E2E]"/>
                <div>
                  <p className="text-[#F2F2F2]/80">Horario:</p>
                  <p className="text-sm text-[#F2F2F2]/60">L-V: 8am - 6pm</p>
                  <p className="text-sm text-[#F2F2F2]/60">Sáb: 9am - 1pm</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-[#592533] mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-[#F2F2F2]/60 text-sm mb-4 md:mb-0">
              © {new Date().getFullYear()} Santiago Ruiz Cabarcas. Todos los derechos reservados.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;