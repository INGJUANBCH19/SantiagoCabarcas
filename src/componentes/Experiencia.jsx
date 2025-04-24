import { motion } from 'framer-motion';
import { FaBalanceScale, FaUserTie, FaShieldAlt, FaChartLine } from 'react-icons/fa';
// Datos de WhatsApp de la empresa
const COMPANY_WHATSAPP = "573127953716"; // Reemplaza con tu número real
const WHATSAPP_MESSAGE = "Hola, estoy interesado en sus servicios legales de ";
const ProfessionalExperience = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        {/* Encabezado */}
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-[#593134] mb-3"
          >
            <span className="block">Experiencia</span>
            <span className="text-[#D91E2E]">Profesional</span>
          </motion.h2>
          <div className="w-24 h-1 bg-[#DBC078] mx-auto"></div>
        </div>

        <div className="flex flex-col lg:flex-row gap-10 items-stretch">
          {/* Columna de experiencia */}
          <motion.div 
  initial={{ opacity: 0, x: -30 }}
  whileInView={{ opacity: 1, x: 0 }}
  transition={{ duration: 0.6 }}
  viewport={{ once: true }}
  className="lg:w-1/2 w-full min-h-[650px] bg-[#F8F8F8] rounded-xl p-10 shadow-sm flex flex-col"
>
  <motion.h3 
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    transition={{ delay: 0.2 }}
    className="text-3xl font-semibold text-[#593134] mb-8 flex items-center"
  >
    <FaUserTie className="mr-4 text-[#D91E2E] text-4xl" />
    Trayectoria Jurídica
  </motion.h3>
  
  <div className="space-y-8 border-l-4 border-[#DBC078]/70 pl-8 flex-grow">
    {[
      {
        title: "Torregroza y Díaz Granados",
        description: "Participación activa en casos de derecho penal, disciplinario y fiscal.",
        icon: <FaBalanceScale className="text-[#D91E2E] text-2xl" />
      },
      {
        title: " Dr. Marcos Gabriel Peña Noguera",
        description: "Apoyo en diversas áreas del derecho.",
        icon: <FaShieldAlt className="text-[#D91E2E] text-2xl" />
      },
      {
        title: "Universidad de Córdoba",
        description: "Contratista en la Oficina de Control Disciplinario Interno. Experiencia en procedimientos disciplinarios.",
        icon: <FaChartLine className="text-[#D91E2E] text-2xl" />
      },
      {
        title: "Apoderado Judicial",
        description: "Representación en procesos ejecutivos y causas independientes.",
        icon: <FaBalanceScale className="text-[#D91E2E] text-2xl" />
      }
    ].map((item, index) => (
      <motion.div 
        key={index}
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 * index }}
        viewport={{ once: true, margin: "-50px" }}
        className="relative pb-8 group"
      >
        <motion.div 
          whileHover={{ scale: 1.05 }}
          className="absolute -left-10 top-0 w-8 h-8 bg-[#DBC078] rounded-full flex items-center justify-center shadow-sm"
        >
          {item.icon}
        </motion.div>
        <div className="pl-2">
          <h4 className="text-xl font-semibold text-[#593134] mb-2 group-hover:text-[#D91E2E] transition-colors">
            {item.title}
          </h4>
          <motion.p 
            whileHover={{ x: 3 }}
            className="text-[#592533] text-lg leading-relaxed"
          >
            {item.description}
          </motion.p>
        </div>
      </motion.div>
    ))}
  </div>
</motion.div>

          {/* Columna de imagen y razones - Versión mejorada */}
<motion.div 
  initial={{ opacity: 0, x: 30 }}
  whileInView={{ opacity: 1, x: 0 }}
  transition={{ duration: 0.6, delay: 0.2 }}
  viewport={{ once: true }}
  className="lg:w-1/2 w-full flex flex-col gap-8"
>
  {/* Contenedor de imagen con animación sutil */}
  <motion.div
    whileHover={{ scale: 1.01 }}
    className="relative h-[450px] rounded-xl overflow-hidden shadow-lg border border-[#E8E8E8] flex-grow"
  >
    <motion.img
      src="/images/SR2.jpeg" 
      alt="Abogado Santiago Cabarcas en ejercicio profesional"
      className="w-full h-full object-cover"
      initial={{ scale: 1.05 }}
      animate={{ scale: 1 }}
      transition={{ duration: 0.8 }}
    />
    <div className="absolute inset-0 bg-gradient-to-t from-[#593134]/95 via-[#593134]/30 to-transparent flex items-end p-8">
      <motion.p 
        className="text-white italic text-lg font-serif"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
      >
        "Cada caso representa una historia única que merece ser defendida con excelencia y dedicación profesional"
      </motion.p>
    </div>
  </motion.div>

  {/* Sección de razones con animaciones escalonadas */}
  <motion.div 
    className="bg-[#FAFAFA] rounded-xl p-8 shadow-sm border border-[#EDEDED]"
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    transition={{ delay: 0.3 }}
  >
    <motion.h3 
      className="text-3xl font-semibold text-[#593134] mb-6 flex items-center"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ delay: 0.4 }}
    >
      <span className="bg-[#D91E2E] w-2 h-8 mr-3 rounded-full"></span>
      ¿Por Qué Elegirme?
    </motion.h3>
    
    <div className="space-y-6">
      {[
        "Especialización y Experiencia: Años de trayectoria en áreas clave del derecho con casos de alto impacto.",
        "Atención Personalizada: Estrategias legales adaptadas específicamente a tus necesidades particulares.",
        "Ética y Profesionalismo: Transparencia absoluta en cada etapa del proceso legal.",
        "Resultados Comprobados: Historial documentado de casos exitosos en múltiples jurisdicciones."
      ].map((item, index) => (
        <motion.div 
          key={index}
          initial={{ opacity: 0, x: 10 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.1 * index + 0.5 }}
          className="flex items-start group"
        >
          <motion.div 
            whileHover={{ scale: 1.1 }}
            className="flex-shrink-0 mt-1 mr-4 w-6 h-6 bg-[#D91E2E] rounded-full flex items-center justify-center shadow-md"
          >
            <svg 
              className="w-4 h-4 text-white" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
            </svg>
          </motion.div>
          <motion.p 
            whileHover={{ x: 5 }}
            className="text-[#592533] text-lg leading-relaxed"
          >
            {item}
          </motion.p>
        </motion.div>
      ))}
    </div>

    {/* Botón de WhatsApp */}
    <div className="mt-6 text-center">
      <a 
        href="https://wa.me/573127953716?text=Hola,%20quiero%20agendar%20una%20consulta%20legal" 
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block text-[#D91E2E] font-medium border border-[#D91E2E] hover:bg-[#D91E2E] hover:text-white transition-colors duration-200 px-5 py-2 rounded-lg text-sm"
      >
        Agenda una consulta
      </a>
    </div>
  </motion.div>
</motion.div>
        </div>
      </div>
    </section>
  );
};

export default ProfessionalExperience;