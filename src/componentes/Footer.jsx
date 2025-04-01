import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-[#222831] text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          
          {/* Columna Logo y descripción */}
          <div className="md:col-span-1">
            <div className="flex items-center mb-4">
              <div className="rounded-full overflow-hidden border-2 border-[#DBC078] p-1.5 bg-white mr-4">
                <img 
                  src="/SC.png" 
                  alt="Logo Santiago Cabarcas" 
                  className="h-12 w-auto object-cover"
                />
              </div>
              <h3 className="text-xl font-serif">Santiago Cabarcas</h3>
            </div>
            <p className="text-gray-300 mb-4">
              Soluciones legales personalizadas con enfoque estratégico y atención detallada.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-[#DBC078] transition">
                <span className="sr-only">Facebook</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                </svg>
              </a>
              <a href="#" className="text-gray-300 hover:text-[#DBC078] transition">
                <span className="sr-only">LinkedIn</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Columna Enlaces rápidos */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-[#DBC078]">Enlaces Rápidos</h3>
            <ul className="space-y-2">
              <li><a href="#inicio" className="text-gray-300 hover:text-white transition">Inicio</a></li>
              <li><a href="#servicios" className="text-gray-300 hover:text-white transition">Servicios</a></li>
              <li><a href="#sobre-mi" className="text-gray-300 hover:text-white transition">Sobre Mí</a></li>
              <li><a href="#testimonios" className="text-gray-300 hover:text-white transition">Testimonios</a></li>
              <li><a href="#contacto" className="text-gray-300 hover:text-white transition">Contacto</a></li>
            </ul>
          </div>

          {/* Columna Servicios */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-[#DBC078]">Servicios</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-white transition">Derecho Civil</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition">Derecho Laboral</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition">Derecho Inmobiliario</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition">Derecho Mercantil</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition">Asesoría Corporativa</a></li>
            </ul>
          </div>

          {/* Columna Contacto */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-[#DBC078]">Contacto</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <FaPhone className="mt-1 mr-3 text-[#DBC078]" />
                <div>
                  <p className="text-gray-300">+57 300 123 4567</p>
                  <p className="text-sm text-gray-400">Lunes a Viernes: 8am - 6pm</p>
                </div>
              </li>
              <li className="flex items-start">
                <FaEnvelope className="mt-1 mr-3 text-[#DBC078]" />
                <a href="mailto:contacto@ejemplo.com" className="text-gray-300 hover:text-white transition">contacto@ejemplo.com</a>
              </li>
              <li className="flex items-start">
                <FaMapMarkerAlt className="mt-1 mr-3 text-[#DBC078]" />
                <address className="text-gray-300 not-italic">Calle 123 #45-67, Bogotá, Colombia</address>
              </li>
              <li className="flex items-start">
                <FaClock className="mt-1 mr-3 text-[#DBC078]" />
                <div>
                  <p className="text-gray-300">Horario de atención:</p>
                  <p className="text-sm text-gray-400">Lunes a Viernes: 8am - 6pm</p>
                  <p className="text-sm text-gray-400">Sábados: 9am - 1pm</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* División */}
        <div className="border-t border-gray-700 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              © {new Date().getFullYear()} Santiago Cabarcas Abogado. Todos los derechos reservados.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-400 hover:text-white text-sm transition">Términos de servicio</a>
              <a href="#" className="text-gray-400 hover:text-white text-sm transition">Política de privacidad</a>
              <a href="#" className="text-gray-400 hover:text-white text-sm transition">Aviso legal</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;