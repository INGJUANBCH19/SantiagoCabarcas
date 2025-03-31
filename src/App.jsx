import { useState } from 'react'
import Header from './componentes/Header';
import HeroSection from './componentes/HeroSection';
import ServicesSection from './componentes/ServicesSection';
import AboutSection from './componentes/AboutSection';
import IntegratedHeaderHero from './componentes/Header';


import './App.css'

function App() {
  return (
    <div className="font-sans">
      <Header />
      <main>
         
        <HeroSection />
        <ServicesSection />
        <AboutSection />
        {/* Aquí puedes agregar más secciones */}
      </main>

    </div>
  );
}

export default App;