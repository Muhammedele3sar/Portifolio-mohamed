import React, { useState, useEffect } from 'react';
import './Hero.css';
import { useLanguage } from '../contexts/LanguageContext';

const Hero: React.FC = () => {
  const { language } = useLanguage();
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);

  const phrases = language === 'ar' ? [
    'مطور Full Stack',
    'خبير React',
    'محب UI/UX',
    'حل المشكلات',
    'فنان الكود'
  ] : [
    'Full Stack Developer',
    'React Specialist',
    'UI/UX Enthusiast',
    'Problem Solver',
    'Code Artist'
  ];

  useEffect(() => {
    const currentPhrase = phrases[currentPhraseIndex];
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (currentIndex < currentPhrase.length) {
          setDisplayText(currentPhrase.substring(0, currentIndex + 1));
          setCurrentIndex(currentIndex + 1);
        } else {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        if (currentIndex > 0) {
          setDisplayText(currentPhrase.substring(0, currentIndex - 1));
          setCurrentIndex(currentIndex - 1);
        } else {
          setIsDeleting(false);
          setCurrentPhraseIndex((currentPhraseIndex + 1) % phrases.length);
        }
      }
    }, isDeleting ? 50 : 100);

    return () => clearTimeout(timeout);
  }, [currentIndex, isDeleting, currentPhraseIndex, phrases]);

  const scrollToProjects = () => {
    const element = document.getElementById('projects');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="hero">
      <div className="hero-container">
        <div className="hero-content">
          <div className="hero-greeting">
            <span className="greeting-text">{language === 'ar' ? 'مرحباً، أنا' : "Hello, I'm"}</span>
          </div>
          
          <h1 className="hero-name">
            <span className="name-text gradient-text">Mohamed Nour</span>
            <div className="name-decoration"></div>
          </h1>
          
          <div className="hero-title">
            <span className="title-prefix">{'> '}</span>
            <span className="typewriter-text">{displayText}</span>
            <span className="cursor">|</span>
          </div>
          
          <p className="hero-description">
            {language === 'ar' 
              ? 'مطور شغوف بصنع تجارب رقمية باستخدام التقنيات الحديثة. أحول الأفكار إلى تطبيقات أنيقة وفعالة وسهلة الاستخدام.'
              : 'Passionate developer crafting digital experiences with modern technologies. I transform ideas into elegant, functional, and user-friendly applications.'}
          </p>
          
          <div className="hero-stats">
            <div className="stat-item">
              <span className="stat-number">3+</span>
              <span className="stat-label">{language === 'ar' ? 'سنوات خبرة' : 'Years Experience'}</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">50+</span>
              <span className="stat-label">{language === 'ar' ? 'مشروع مكتمل' : 'Projects Completed'}</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">100%</span>
              <span className="stat-label">{language === 'ar' ? 'رضا العملاء' : 'Client Satisfaction'}</span>
            </div>
          </div>
          
          <div className="hero-actions">
            <button className="cta-button primary" onClick={scrollToProjects}>
              <span>{language === 'ar' ? 'شاهد أعمالي' : 'View My Work'}</span>
              <div className="button-glow"></div>
            </button>
            <button className="cta-button secondary" onClick={scrollToContact}>
              <span>{language === 'ar' ? 'تواصل معي' : 'Get In Touch'}</span>
              <div className="button-glow"></div>
            </button>
          </div>
        </div>
        
        <div className="hero-visual">
          <div className="code-window">
            <div className="window-header">
              <div className="window-controls">
                <span className="control close"></span>
                <span className="control minimize"></span>
                <span className="control maximize"></span>
              </div>
              <div className="window-title">portfolio.js</div>
            </div>
            <div className="code-content">
              <div className="code-line">
                <span className="line-number">1</span>
                <span className="code-text">
                  <span className="keyword">const</span> <span className="variable">developer</span> = {'{'}
                </span>
              </div>
              <div className="code-line">
                <span className="line-number">2</span>
                <span className="code-text">
                  &nbsp;&nbsp;<span className="property">name</span>: <span className="string">'Mohamed Nour'</span>,
                </span>
              </div>
              <div className="code-line">
                <span className="line-number">3</span>
                <span className="code-text">
                  &nbsp;&nbsp;<span className="property">skills</span>: [<span className="string">'React'</span>, <span className="string">'TypeScript'</span>, <span className="string">'Node.js'</span>],
                </span>
              </div>
              <div className="code-line">
                <span className="line-number">4</span>
                <span className="code-text">
                  &nbsp;&nbsp;<span className="property">passion</span>: <span className="string">'Creating Amazing UX'</span>,
                </span>
              </div>
              <div className="code-line">
                <span className="line-number">5</span>
                <span className="code-text">
                  &nbsp;&nbsp;<span className="property">available</span>: <span className="boolean">true</span>
                </span>
              </div>
              <div className="code-line">
                <span className="line-number">6</span>
                <span className="code-text">{'};'}</span>
              </div>
            </div>
          </div>
          
          <div className="floating-elements">
            <div className="floating-icon react">⚛️</div>
            <div className="floating-icon js">🟨</div>
            <div className="floating-icon ts">🔷</div>
            <div className="floating-icon node">🟢</div>
            <div className="floating-icon git">🔧</div>
          </div>
        </div>
      </div>
      
      <div className="scroll-indicator">
        <div className="scroll-arrow">↓</div>
        <span>{language === 'ar' ? 'مرر للاستكشاف' : 'Scroll to explore'}</span>
      </div>
    </section>
  );
};

export default Hero;
