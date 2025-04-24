import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <footer className="bg-[#593134] text-[#F2F2F2] pt-12 pb-8 w-full">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Columna Logo y Descripción */}
          <div className="md:col-span-1">
  <div className="flex items-center mb-4">
    <div className="rounded-full overflow-hidden border-2 border-[#DBC078] p-1.5 bg-white mr-4">
      <img src="/SC.png" alt="Logo" className="h-12 w-auto object-cover"/>
    </div>
    <h3 className="text-xl font-serif">Santiago Ruiz Cabarcas</h3>
  </div>
  
  <div className="flex space-x-4">
    {/* Facebook */}
    <a href="#" className="text-[#F2F2F2]/80 hover:text-[#DBC078] transition">
      <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
        <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd"/>
      </svg>
    </a>

    {/* LinkedIn */}
    <a href="#" className="text-[#F2F2F2]/80 hover:text-[#DBC078] transition">
      <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
      </svg>
    </a>

    {/* Instagram */}
    <a href="#" className="text-[#F2F2F2]/80 hover:text-[#DBC078] transition">
      <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2.163c3.204 0 3.584.012 4.849.07 1.366.062 2.633.348 3.608 1.323.975.975 1.261 2.242 1.323 3.608.058 1.265.07 1.645.07 4.849s-.012 3.584-.07 4.849c-.062 1.366-.348 2.633-1.323 3.608-.975.975-2.242 1.261-3.608 1.323-1.265.058-1.645.07-4.849.07s-3.584-.012-4.849-.07c-1.366-.062-2.633-.348-3.608-1.323-.975-.975-1.261-2.242-1.323-3.608-.058-1.265-.07-1.645-.07-4.849s.012-3.584.07-4.849c.062-1.366.348-2.633 1.323-3.608.975-.975 2.242-1.261 3.608-1.323 1.265-.058 1.645-.07 4.849-.07m0-2.163c-3.259 0-3.667.014-4.947.072-1.598.074-3.004.43-4.098 1.524-1.094 1.094-1.45 2.5-1.524 4.098-.058 1.28-.072 1.688-.072 4.947s.014 3.667.072 4.947c.074 1.598.43 3.004 1.524 4.098 1.094 1.094 2.5 1.45 4.098 1.524 1.28.058 1.688.072 4.947.072s3.667-.014 4.947-.072c1.598-.074 3.004-.43 4.098-1.524 1.094-1.094 1.45-2.5 1.524-4.098.058-1.28.072-1.688.072-4.947s-.014-3.667-.072-4.947c-.074-1.598-.43-3.004-1.524-4.098-1.094-1.094-2.5-1.45-4.098-1.524-1.28-.058-1.688-.072-4.947-.072z"/>
        <path d="M12 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zm0 10.162a4 4 0 110-8 4 4 0 010 8zM18.406 4.594a1.44 1.44 0 100 2.88 1.44 1.44 0 000-2.88z"/>
      </svg>
    </a>

    {/* X (Twitter) */}
    <a href="#" className="text-[#F2F2F2]/80 hover:text-[#DBC078] transition">
      <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M23.64 4.558c-.873.388-1.81.65-2.798.767 1.006-.604 1.773-1.558 2.136-2.692-.94.558-1.98.963-3.09 1.184-.89-.946-2.162-1.538-3.566-1.538-2.697 0-4.88 2.183-4.88 4.88 0 .38.045.748.127 1.104-4.058-.205-7.655-2.146-10.065-5.098-.42.722-.66 1.56-.66 2.457 0 1.695.86 3.19 2.168 4.07-.798-.026-1.55-.244-2.207-.61v.06c0 2.37 1.686 4.348 3.922 4.798-.412.112-.847.172-1.294.172-.316 0-.624-.03-.925-.086.626 1.95 2.442 3.37 4.593 3.41-1.683 1.32-3.81 2.1-6.116 2.1-.397 0-.79-.023-1.175-.07 2.181 1.4 4.77 2.218 7.55 2.218 9.054 0 14.005-7.5 14.005-14 0-.213-.005-.425-.014-.637.961-.695 1.796-1.56 2.457-2.548z"/>
      </svg>
    </a>
  </div>
</div>


          {/* Información de Contacto */}
          <div className="md:col-span-2">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Contacto Principal */}
              <div>
                <h3 className="text-lg font-semibold mb-4 text-[#DBC078]">Contacto</h3>
                <ul className="space-y-3">
                  <motion.li 
                    className="flex items-start"
                    whileHover={{ x: 5 }}
                    transition={{ type: 'spring', stiffness: 300 }}
                  >
                    <FaPhone className="mt-1 mr-3 text-[#D91E2E]"/>
                    <div>
                      <p className="text-[#F2F2F2]">+57 (312) 795-3716</p>
                      <p className="text-sm text-[#F2F2F2]/60">Lunes a Viernes: 8am - 6pm</p>
                    </div>
                  </motion.li>
                  
                  <motion.li 
                    className="flex items-start"
                    whileHover={{ x: 5 }}
                    transition={{ type: 'spring', stiffness: 300 }}
                  >
                    <FaEnvelope className="mt-1 mr-3 text-[#D91E2E]"/>
                    <a href="mailto:SANTIAGO.RUIZCABARCAS@outlook.com" className="text-[#F2F2F2]/80 hover:text-[#F2F2F2] transition">
                      SANTIAGO.RUIZCABARCAS@outlook.com
                    </a>
                  </motion.li>
                </ul>
              </div>
              
              {/* Oficinas y Horario */}
              <div>
                <h3 className="text-lg font-semibold mb-4 text-[#DBC078]">Oficinas</h3>
                <ul className="space-y-3">
                  <motion.li 
                    className="flex items-start"
                    whileHover={{ x: 5 }}
                    transition={{ type: 'spring', stiffness: 300 }}
                  >
                    <FaMapMarkerAlt className="mt-1 mr-3 text-[#D91E2E]"/>
                    <div>
                      <a 
                        href="https://www.google.com/maps/search/CALLE+81%2311-68+OFICINA+402+EDIFICIO+CENTRO+EJECUTIVO+I+BOGOTA" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-[#F2F2F2]/80 hover:text-[#F2F2F2] transition"
                      >
                        CALLE 81#11-68 OFICINA 402<br/>
                        EDIFICIO CENTRO EJECUTIVO I<br/>
                        BOGOTÁ
                      </a>
                    </div>
                  </motion.li>
                  
                  <motion.li 
                    className="flex items-start"
                    whileHover={{ x: 5 }}
                    transition={{ type: 'spring', stiffness: 300 }}
                  >
                    <FaMapMarkerAlt className="mt-1 mr-3 text-[#D91E2E]"/>
                    <div>
                      <a 
                        href="https://www.google.com/maps/search/CALLE+31%234-47+OFICINA+504+EDIFICIO+CENTRO+EJECUTIVO+MONTERIA" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-[#F2F2F2]/80 hover:text-[#F2F2F2] transition"
                      >
                        CALLE 31#4-47 OFICINA 504<br/>
                        EDIFICIO CENTRO EJECUTIVO<br/>
                        MONTERÍA
                      </a>
                    </div>
                  </motion.li>
                  
                  <motion.li 
                    className="flex items-start"
                    whileHover={{ x: 5 }}
                    transition={{ type: 'spring', stiffness: 300 }}
                  >
                    <FaClock className="mt-1 mr-3 text-[#D91E2E]"/>
                    <div>
                      <p className="text-[#F2F2F2]/80">Horario de atención</p>
                      <p className="text-sm text-[#F2F2F2]/60">L-V: 8am - 6pm</p>
                      <p className="text-sm text-[#F2F2F2]/60">Sábados: 9am - 1pm</p>
                    </div>
                  </motion.li>
                </ul>
              </div>
            </div>
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