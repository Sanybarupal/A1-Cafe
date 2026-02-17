
import React, { useState, useEffect } from 'react';
import { Hero } from './components/Hero';
import { Menu } from './components/Menu';
import { Reviews } from './components/Reviews';
import { Contact } from './components/Contact';
import { AIAssistant } from './components/AIAssistant';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';

function App() {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'menu', 'reviews', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element && scrollPosition >= element.offsetTop && scrollPosition < element.offsetTop + element.offsetHeight) {
          setActiveSection(section);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen">
      <Navbar activeSection={activeSection} />
      
      <main>
        <section id="home">
          <Hero />
        </section>
        
        <section id="menu" className="py-20 bg-white">
          <Menu />
        </section>
        
        <section id="reviews" className="py-20 bg-[#f3f4f6]">
          <Reviews />
        </section>
        
        <section id="contact" className="py-20 bg-white">
          <Contact />
        </section>
      </main>

      <Footer />
      <AIAssistant />
    </div>
  );
}

export default App;
