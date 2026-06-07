import React, { useState, useEffect, useRef } from 'react';
import './Skills.css';
import { useLanguage } from '../contexts/LanguageContext';

interface Skill {
  name: string;
  level: number;
  icon: string;
  color: string;
  category: string;
}

const Skills: React.FC = () => {
  const { language } = useLanguage();
  const [activeCategory, setActiveCategory] = useState('frontend');
  const [animatedSkills, setAnimatedSkills] = useState<Set<string>>(new Set());
  const skillsRef = useRef<HTMLDivElement>(null);

  const skills: Skill[] = [
    // Frontend
    { name: 'React', level: 95, icon: '⚛️', color: '#61DAFB', category: 'frontend' },
    { name: 'TypeScript', level: 90, icon: '🔷', color: '#3178C6', category: 'frontend' },
    { name: 'JavaScript', level: 95, icon: '🟨', color: '#F7DF1E', category: 'frontend' },
    { name: 'Next.js', level: 85, icon: '▲', color: '#000000', category: 'frontend' },
    { name: 'Vue.js', level: 80, icon: '💚', color: '#4FC08D', category: 'frontend' },
    { name: 'CSS3', level: 90, icon: '🎨', color: '#1572B6', category: 'frontend' },
    
    // Backend
    { name: 'Node.js', level: 88, icon: '🟢', color: '#339933', category: 'backend' },
    { name: 'Express', level: 85, icon: '🚀', color: '#000000', category: 'backend' },
    { name: 'Python', level: 82, icon: '🐍', color: '#3776AB', category: 'backend' },
    { name: 'MongoDB', level: 80, icon: '🍃', color: '#47A248', category: 'backend' },
    { name: 'PostgreSQL', level: 75, icon: '🐘', color: '#336791', category: 'backend' },
    { name: 'Redis', level: 70, icon: '🔴', color: '#DC382D', category: 'backend' },
    
    // Tools
    { name: 'Git', level: 90, icon: '🔧', color: '#F05032', category: 'tools' },
    { name: 'Docker', level: 75, icon: '🐳', color: '#2496ED', category: 'tools' },
    { name: 'AWS', level: 70, icon: '☁️', color: '#FF9900', category: 'tools' },
    { name: 'Figma', level: 85, icon: '🎯', color: '#F24E1E', category: 'tools' },
    { name: 'Webpack', level: 80, icon: '📦', color: '#8DD6F9', category: 'tools' },
    { name: 'Jest', level: 85, icon: '🧪', color: '#C21325', category: 'tools' }
  ];

  const categories = [
    { id: 'frontend', name: language === 'ar' ? 'الواجهات الأمامية' : 'Frontend', icon: '🎨' },
    { id: 'backend', name: language === 'ar' ? 'الواجهات الخلفية' : 'Backend', icon: '⚙️' },
    { id: 'tools', name: language === 'ar' ? 'الأدوات' : 'Tools & Others', icon: '🛠️' }
  ];

  const filteredSkills = skills.filter(skill => skill.category === activeCategory);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const skillElements = entry.target.querySelectorAll('.skill-item');
            skillElements.forEach((element, index) => {
              setTimeout(() => {
                const skillName = element.getAttribute('data-skill');
                if (skillName) {
                  setAnimatedSkills(prev => new Set([...prev, skillName]));
                }
              }, index * 100);
            });
          }
        });
      },
      { threshold: 0.3 }
    );

    if (skillsRef.current) {
      observer.observe(skillsRef.current);
    }

    return () => observer.disconnect();
  }, [activeCategory]);

  return (
    <section id="skills" className="skills section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">
            <span className="title-number">02.</span>
            <span className="gradient-text">{language === 'ar' ? 'المهارات والخبرات' : 'Skills & Expertise'}</span>
          </h2>
          <div className="title-line"></div>
        </div>

        <div className="skills-intro">
          <p>
            {language === 'ar' 
              ? 'أنا شغوف بتعلم التقنيات الجديدة وتحسين مهاراتي باستمرار. إليك نظرة شاملة على خبراتي التقنية في مختلف المجالات.'
              : "I'm passionate about learning new technologies and constantly improving my skills. Here's a comprehensive overview of my technical expertise across different domains."}
          </p>
        </div>

        <div className="category-tabs">
          {categories.map((category) => (
            <button
              key={category.id}
              className={`category-tab ${activeCategory === category.id ? 'active' : ''}`}
              onClick={() => setActiveCategory(category.id)}
            >
              <span className="tab-icon">{category.icon}</span>
              <span className="tab-name">{category.name}</span>
              <div className="tab-indicator"></div>
            </button>
          ))}
        </div>

        <div className="skills-container" ref={skillsRef}>
          <div className="skills-grid">
            {filteredSkills.map((skill, index) => (
              <div
                key={skill.name}
                className="skill-item"
                data-skill={skill.name}
                style={{ '--delay': `${index * 0.1}s` } as React.CSSProperties}
              >
                <div className="skill-header">
                  <div className="skill-info">
                    <span className="skill-icon" style={{ color: skill.color }}>
                      {skill.icon}
                    </span>
                    <span className="skill-name">{skill.name}</span>
                  </div>
                  <span className="skill-percentage">
                    {animatedSkills.has(skill.name) ? skill.level : 0}%
                  </span>
                </div>
                
                <div className="skill-bar">
                  <div className="skill-track"></div>
                  <div
                    className="skill-progress"
                    style={{
                      '--skill-level': `${animatedSkills.has(skill.name) ? skill.level : 0}%`,
                      '--skill-color': skill.color
                    } as React.CSSProperties}
                  >
                    <div className="progress-glow"></div>
                  </div>
                </div>

                <div className="skill-details">
                  <div className="experience-years">
                    {Math.floor(skill.level / 20)} {language === 'ar' ? 'سنوات' : 'years'}
                  </div>
                  <div className="proficiency-level">
                    {skill.level >= 90 ? (language === 'ar' ? 'خبير' : 'Expert') : 
                     skill.level >= 80 ? (language === 'ar' ? 'متقدم' : 'Advanced') : 
                     skill.level >= 70 ? (language === 'ar' ? 'متوسط' : 'Intermediate') : (language === 'ar' ? 'مبتدئ' : 'Beginner')}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="skills-summary">
          <div className="summary-stats">
            <div className="stat-card">
              <div className="stat-icon">💻</div>
              <div className="stat-content">
                <h3>{language === 'ar' ? 'تركيز على الواجهات' : 'Frontend Focus'}</h3>
                <p>{language === 'ar' ? 'متخصص في نظام React الحديث مع TypeScript' : 'Specialized in modern React ecosystem with TypeScript'}</p>
              </div>
            </div>
            
            <div className="stat-card">
              <div className="stat-icon">🚀</div>
              <div className="stat-content">
                <h3>{language === 'ar' ? 'محرك الأداء' : 'Performance Driven'}</h3>
                <p>{language === 'ar' ? 'تحسين التطبيقات للسرعة وتجربة المستخدم' : 'Optimizing applications for speed and user experience'}</p>
              </div>
            </div>
            
            <div className="stat-card">
              <div className="stat-icon">🔧</div>
              <div className="stat-content">
                <h3>Full Stack</h3>
                <p>{language === 'ar' ? 'تطوير شامل من الواجهة إلى قاعدة البيانات' : 'End-to-end development from UI to database'}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
