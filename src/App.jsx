import Header from './componentes/Header';
import HeroSection from './componentes/HeroSection';
import ServicesSection from './componentes/ServicesSection';
import AboutSection from './componentes/AboutSection';
import TestimonialsCarousel from './componentes/TestimoniosCarousel';
import WhatsAppButton from './componentes/WhatsAppButton';
import Footer from './componentes/Footer';
import ContactForm from './componentes/ContactForm';
import './App.css';


function App() {
  return (
    <div className="font-sans bg-white text-gray-800">
      <Header />
      
      <main>
        <WhatsAppButton />
        <HeroSection />
        <ServicesSection />
        <AboutSection />
        <TestimonialsCarousel />
        <ContactForm />
        <Footer/>
      </main>

      
    </div>
  );
}

export default App;