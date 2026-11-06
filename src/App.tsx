import React, { useState } from 'react';
import { ThemeProvider } from './contexts/ThemeContext';
import { BackgroundCanvas } from './components/layout/BackgroundCanvas';
import { Navbar } from './components/navigation/Navbar';
import { Hero } from './components/hero/Hero';
import { About } from './components/about/About';
import { Expertise } from './components/expertise/Expertise';
import { Projects } from './components/projects/Projects';
import { Innovation } from './components/innovation/Innovation';
import { Experience } from './components/experience/Experience';
import { Education } from './components/education/Education';
import { Certifications } from './components/certifications/Certifications';
import { Contact } from './components/contact/Contact';
import { Footer } from './components/layout/Footer';
import { CVModal } from './components/ui/CVModal';

const AppContent: React.FC = () => {
  const [isCVModalOpen, setIsCVModalOpen] = useState(false);

  return (
    <div className="relative min-h-screen selection:bg-accent-blue/30 selection:text-accent-cyan bg-midnight-bg text-tech-light transition-colors duration-300">
      {/* Background Engineering Atmosphere */}
      <BackgroundCanvas />

      {/* Navigation */}
      <Navbar onOpenCV={() => setIsCVModalOpen(true)} />

      {/* Main Content Sections */}
      <main className="relative z-10">
        <Hero onOpenCV={() => setIsCVModalOpen(true)} />
        <About />
        <Expertise />
        <Projects />
        <Innovation />
        <Experience />
        <Education />
        <Certifications />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />

      {/* Curriculum Vitae Modal */}
      <CVModal isOpen={isCVModalOpen} onClose={() => setIsCVModalOpen(false)} />
    </div>
  );
};

export default function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}
