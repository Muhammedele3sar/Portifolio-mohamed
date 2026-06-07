import React from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Navigation from './components/Navigation';
import ParticleBackground from './components/ParticleBackground';
import { LanguageProvider, useLanguage } from './contexts/LanguageContext';
import './App.css';

const AppContent: React.FC = () => {
  const { language } = useLanguage();

  return (
    <div className="App" dir={language === 'ar' ? 'rtl' : 'ltr'}>
      <ParticleBackground />
      <Navigation />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
};

function App() {
  return (
    <LanguageProvider>
      <AppContent />
    </LanguageProvider>
  );
}

export default App;
