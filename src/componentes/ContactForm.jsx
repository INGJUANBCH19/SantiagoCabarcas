import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaPaperPlane, FaUser, FaEnvelope, FaPhone, FaFileAlt } from 'react-icons/fa';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError('');
    
    try {
      const response = await fetch('https://formspree.io/f/xnnplvwo', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          subject: formData.subject,
          message: formData.message,
          _replyto: formData.email, // Para que Formspree sepa dónde responder
          _subject: `Nuevo mensaje de contacto: ${formData.subject}` // Asunto personalizado
        }),
      });

      if (!response.ok) {
        throw new Error('Error al enviar el mensaje');
      }

      setSubmitSuccess(true);
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      });
    } catch (error) {
      console.error('Error:', error);
      setSubmitError('Ocurrió un error al enviar el mensaje. Por favor, inténtelo de nuevo más tarde.');
    } finally {
      setIsSubmitting(false);
      setTimeout(() => {
        setSubmitSuccess(false);
        setSubmitError('');
      }, 5000);
    }
  };

  return (
    <section className="py-20 bg-[#F2F2F2]" id="contacto">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#593134] mb-4">
            Contacto
          </h2>
          <p className="text-xl text-[#592533] max-w-2xl mx-auto">
            Complete el formulario y nos pondremos en contacto a la brevedad
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="bg-white rounded-xl shadow-lg overflow-hidden border-t-4 border-[#D91E2E]"
        >
          <form onSubmit={handleSubmit} className="p-8 md:p-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              {/* Campo Nombre */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <FaUser className="text-[#592533]/70" />
                </div>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="block w-full pl-10 pr-3 py-3 border-b border-[#592533]/30 focus:border-[#DBC078] focus:outline-none bg-transparent placeholder-[#592533]/70"
                  placeholder="Nombre completo"
                />
              </motion.div>

              {/* Campo Email */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <FaEnvelope className="text-[#592533]/70" />
                </div>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="block w-full pl-10 pr-3 py-3 border-b border-[#592533]/30 focus:border-[#DBC078] focus:outline-none bg-transparent placeholder-[#592533]/70"
                  placeholder="Correo electrónico"
                />
              </motion.div>

              {/* Campo Teléfono */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <FaPhone className="text-[#592533]/70" />
                </div>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="block w-full pl-10 pr-3 py-3 border-b border-[#592533]/30 focus:border-[#DBC078] focus:outline-none bg-transparent placeholder-[#592533]/70"
                  placeholder="Teléfono (opcional)"
                />
              </motion.div>

              {/* Campo Asunto */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <FaFileAlt className="text-[#592533]/70" />
                </div>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="block w-full pl-10 pr-3 py-3 border-b border-[#592533]/30 focus:border-[#DBC078] focus:outline-none bg-transparent placeholder-[#592533]/70"
                  placeholder="Asunto"
                />
              </motion.div>
            </div>

            {/* Campo Mensaje */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.7 }}
              viewport={{ once: true }}
              className="mb-8"
            >
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="5"
                className="block w-full px-4 py-3 border-b border-[#592533]/30 focus:border-[#DBC078] focus:outline-none bg-transparent resize-none placeholder-[#592533]/70"
                placeholder="Su mensaje..."
              ></textarea>
            </motion.div>

            {/* Botón de envío */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.9 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <button
                type="submit"
                disabled={isSubmitting}
                className={`inline-flex items-center px-8 py-3 rounded-full font-medium text-[#593134] ${isSubmitting ? 'bg-[#DBC078]/50' : 'bg-[#DBC078] hover:bg-[#DBC078]/90'} transition-colors duration-300 shadow-md border-2 border-[#DBC078]`}
              >
                {isSubmitting ? (
                  'Enviando...'
                ) : (
                  <>
                    <FaPaperPlane className="mr-2" />
                    Enviar Mensaje
                  </>
                )}
              </button>
            </motion.div>

            {/* Mensaje de error */}
            {submitError && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-6 p-4 bg-red-100 text-red-700 rounded-lg text-center border border-red-200"
              >
                {submitError}
              </motion.div>
            )}

            {/* Mensaje de éxito */}
            {submitSuccess && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-6 p-4 bg-green-100 text-green-700 rounded-lg text-center border border-green-200"
              >
                ¡Mensaje enviado con éxito! Nos pondremos en contacto pronto.
              </motion.div>
            )}
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactForm;