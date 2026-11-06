import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sun, Moon, Download, Menu, X, Terminal } from 'lucide-react';
import { navItems } from '../../data/navigation';
import { personalInfo } from '../../data/personal';
import { useTheme } from '../../hooks/useTheme';
import { useScrollSpy } from '../../hooks/useScrollSpy';

interface NavbarProps {
  onOpenCV: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenCV }) => {
  const { theme, toggleTheme } = useTheme();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const activeSection = useScrollSpy(
    navItems.map((item) => item.id),
    120
  );

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const targetId = href.replace('#', '');
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      const topOffset = 80;
      const elementPosition = targetElement.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - topOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'py-3 bg-midnight-bg/90 backdrop-blur-md border-b border-midnight-border/80 shadow-md'
          : 'py-5 bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-4">
          {/* Logo / Monogram */}
          <a
            href="#hero"
            onClick={(e) => handleNavClick(e, '#hero')}
            className="flex items-center gap-3 group focus:outline-none focus:ring-2 focus:ring-accent-blue rounded-xl p-1"
          >
            <div className="relative w-10 h-10 rounded-xl bg-midnight-surface border border-midnight-border flex items-center justify-center font-mono-code font-bold text-accent-blue group-hover:border-accent-blue/60 group-hover:shadow-glow-blue transition-all">
              <span className="text-base tracking-tighter">MN</span>
              <span className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-accent-cyan animate-pulse" />
            </div>
            <div className="hidden sm:flex flex-col">
              <span className="text-sm font-semibold tracking-wide text-tech-light group-hover:text-accent-cyan transition-colors">
                {personalInfo.name}
              </span>
              <span className="text-[10px] font-mono-code text-tech-slate tracking-wider uppercase">
                Full-Stack &bull; AI
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2 px-3 py-1.5 rounded-full bg-midnight-surface/80 border border-midnight-border/80 backdrop-blur-md shadow-sm">
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <a
                  key={item.id}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className={`relative px-3 py-1.5 text-xs font-medium rounded-full transition-colors ${
                    isActive
                      ? 'text-accent-cyan font-semibold'
                      : 'text-tech-slate hover:text-tech-light'
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeNavIndicator"
                      className="absolute inset-0 bg-accent-blue/15 border border-accent-blue/40 rounded-full"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10">{item.name}</span>
                </a>
              );
            })}
          </nav>

          {/* Right Action Buttons */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Theme Toggle Button */}
            <button
              onClick={toggleTheme}
              className="p-2.5 rounded-xl bg-midnight-surface border border-midnight-border text-tech-slate hover:text-accent-cyan hover:border-accent-blue/40 transition-all focus:outline-none focus:ring-2 focus:ring-accent-blue active:scale-95 shadow-sm flex items-center justify-center"
              aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
              title={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode (Current: ${theme.toUpperCase()})`}
            >
              {theme === 'dark' ? (
                <Sun className="w-4 h-4 text-amber-400 hover:rotate-45 transition-transform" />
              ) : (
                <Moon className="w-4 h-4 text-blue-600 hover:-rotate-12 transition-transform" />
              )}
            </button>

            {/* Download CV CTA */}
            <button
              onClick={onOpenCV}
              className="hidden sm:inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold bg-accent-blue hover:bg-accent-hover text-white transition-all shadow-glow-blue hover:scale-[1.02] active:scale-[0.98]"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download CV</span>
            </button>

            {/* Mobile Menu Hamburger */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2.5 rounded-xl bg-midnight-surface border border-midnight-border text-tech-slate hover:text-tech-light"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden overflow-hidden bg-midnight-bg/95 border-b border-midnight-border backdrop-blur-xl px-4 py-6"
          >
            <div className="flex flex-col gap-2">
              {navItems.map((item) => {
                const isActive = activeSection === item.id;
                return (
                  <a
                    key={item.id}
                    href={item.href}
                    onClick={(e) => handleNavClick(e, item.href)}
                    className={`px-4 py-3 rounded-xl text-sm font-medium transition-colors flex items-center justify-between ${
                      isActive
                        ? 'bg-accent-blue/15 text-accent-cyan border border-accent-blue/30'
                        : 'text-tech-slate hover:text-tech-light hover:bg-midnight-surface/50'
                    }`}
                  >
                    <span>{item.name}</span>
                    {isActive && <Terminal className="w-4 h-4 text-accent-cyan" />}
                  </a>
                );
              })}

              {/* Mobile Theme Toggle Row */}
              <div className="flex items-center justify-between p-3 rounded-xl bg-midnight-surface border border-midnight-border mt-2">
                <span className="text-xs font-medium text-tech-light">Appearance Theme</span>
                <button
                  onClick={toggleTheme}
                  className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-midnight-card border border-midnight-border text-xs font-semibold text-tech-light hover:border-accent-blue/50 transition-colors"
                >
                  {theme === 'dark' ? (
                    <>
                      <Sun className="w-3.5 h-3.5 text-amber-400" />
                      <span>Dark Theme</span>
                    </>
                  ) : (
                    <>
                      <Moon className="w-3.5 h-3.5 text-blue-600" />
                      <span>Light Theme</span>
                    </>
                  )}
                </button>
              </div>

              <div className="pt-3 border-t border-midnight-border">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenCV();
                  }}
                  className="w-full py-3 rounded-xl text-sm font-semibold bg-accent-blue text-white flex items-center justify-center gap-2 shadow-glow-blue"
                >
                  <Download className="w-4 h-4" />
                  <span>Download Curriculum Vitae</span>
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
