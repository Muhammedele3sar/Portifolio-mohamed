import React from 'react';
import './About.css';
import { useLanguage } from '../contexts/LanguageContext';

const About: React.FC = () => {
  const { language } = useLanguage();

  const experiences = language === 'ar' ? [
    {
      year: '2023 - الآن',
      title: 'مطور ويب مستقل',
      company: 'العمل الحر',
      description: 'تطوير تطبيقات ويب متكاملة باستخدام React و Node.js. تصميم واجهات مستخدم جذابة وسهلة الاستخدام مع التركيز على تجربة المستخدم.',
      icon: '💼'
    },
    {
      year: '2023',
      title: 'مدرب برمجة',
      company: 'مدرب معتمد',
      description: 'تدريب الطلاب والمبتدئين على أساسيات البرمجة وتحفيزهم على تطوير مهاراتهم التقنية.',
      icon: '👨‍🏫'
    },
    {
      year: '2023',
      title: 'مطور ويب',
      company: 'شركة أمبريلا تكنولوجي',
      description: 'المساهمة في مشاريع تطوير الويب القائمة على الذكاء الاصطناعي.',
      icon: '💻'
    }
  ] : [
    {
      year: '2023 - Present',
      title: 'Freelance Web Developer',
      company: 'Freelance',
      description: 'Developing full-stack web applications using React and Node.js. Designing attractive and user-friendly interfaces with focus on user experience.',
      icon: '💼'
    },
    {
      year: '2023',
      title: 'Programming Instructor',
      company: 'Certified Instructor',
      description: 'Training students and beginners on programming fundamentals and motivating them to develop their technical skills.',
      icon: '👨‍🏫'
    },
    {
      year: '2023',
      title: 'Web Developer',
      company: 'Ambrella Technology Company',
      description: 'Contributing to AI-based web development projects.',
      icon: '💻'
    }
  ];

  const certificates = language === 'ar' ? [
    { icon: '📜', title: 'برمجة بايثون', year: '2022-2025' },
    { icon: '🤖', title: 'مقدمة في الذكاء الاصطناعي - معهد الاتصالات الوطني', year: '2022-2025' },
    { icon: '📊', title: 'علم البيانات وتعلم الآلة', year: '2022-2025' },
    { icon: '🧠', title: 'التعلم العميق', year: '2022-2025' },
    { icon: '🔙', title: 'تطوير الويب الخلفي (PHP & MySQL)', year: '2022-2025' },
    { icon: '🎨', title: 'تطوير الواجهات الأمامية', year: '2022-2025' },
    { icon: '🧩', title: 'حل المشكلات', year: '2022-2025' }
  ] : [
    { icon: '📜', title: 'Python Programming', year: '2022-2025' },
    { icon: '🤖', title: 'Introduction to AI - National Telecommunications Institute', year: '2022-2025' },
    { icon: '📊', title: 'Data Science & Machine Learning', year: '2022-2025' },
    { icon: '🧠', title: 'Deep Learning', year: '2022-2025' },
    { icon: '🔙', title: 'Backend Web Development (PHP & MySQL)', year: '2022-2025' },
    { icon: '🎨', title: 'Frontend Development', year: '2022-2025' },
    { icon: '🧩', title: 'Problem Solving', year: '2022-2025' }
  ];

  const skills = language === 'ar' ? [
    { name: 'العمل الجماعي', level: 90 },
    { name: 'العمل تحت الضغط', level: 85 },
    { name: 'العصف الذهني', level: 88 },
    { name: 'حل المشكلات', level: 92 },
    { name: 'التعاون والصبر', level: 95 }
  ] : [
    { name: 'Teamwork', level: 90 },
    { name: 'Working Under Pressure', level: 85 },
    { name: 'Brainstorming', level: 88 },
    { name: 'Problem Solving', level: 92 },
    { name: 'Collaboration & Patience', level: 95 }
  ];

  return (
    <section id="about" className="about section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">
            <span className="title-number">01.</span>
            <span className="gradient-text">{language === 'ar' ? 'عني' : 'About Me'}</span>
          </h2>
          <div className="title-line"></div>
        </div>

        <div className="about-content">
          <div className="about-text">
            <div className="text-block">
              <p>
                {language === 'ar' 
                  ? 'مرحباً! أنا محمد نور، عمري 21 عاماً، مطور واجهات أمامية ومهندس ذكاء اصطناعي متخصص في تعلم الآلة والتعلم العميق. أسعى دائماً للابتكار وحل المشكلات، وأهدف إلى بناء حلول رقمية ذكية وسهلة الاستخدام.'
                  : 'Hello! I\'m Mohamed Nour, 21 years old, a frontend developer and AI engineer specializing in machine learning and deep learning. I always strive for innovation and problem-solving, aiming to build smart and user-friendly digital solutions.'}
              </p>
              <div className="education-section">
                <h3>🎓 {language === 'ar' ? 'التعليم (2022 - 2026)' : 'Education (2022 - 2026)'}</h3>
                <p>
                  <strong>{language === 'ar' ? 'بكالوريوس في علوم الحاسب والذكاء الاصطناعي' : 'Bachelor\'s in Computer Science and AI'}</strong><br />
                  {language === 'ar' ? 'التخصص: قسم الذكاء الاصطناعي' : 'Specialization: AI Department'}<br />
                  {language === 'ar' ? 'التركيز: تعلم الآلة والتعلم العميق' : 'Focus: Machine Learning and Deep Learning'}
                </p>
              </div>
              <div>
                <p>{language === 'ar' ? 'لدي خبرة عملية تشمل:' : 'My practical experience includes:'}</p>
                <ul className="experience-highlights">
                  <li>{language === 'ar' ? 'تدريس البرمجة لمدة 4 أشهر' : 'Teaching programming for 4 months'}</li>
                  <li>{language === 'ar' ? 'العمل في شركة أمبريلا تكنولوجي' : 'Working at Ambrella Technology Company'}</li>
                  <li>{language === 'ar' ? 'سنتين من الخبرة في تطوير المواقع الإلكترونية' : 'Two years of experience in web development'}</li>
                  <li>{language === 'ar' ? 'سنتين من الخبرة العملية في مشاريع تعلم الآلة والتعلم العميق' : 'Two years of practical experience in ML and DL projects'}</li>
                </ul>
              </div>
            </div>

            <h3>💡 {language === 'ar' ? 'المهارات والخبرات' : 'Skills & Expertise'}</h3>
            <div className="tech-grid">
              <div className="tech-item">
                <span className="tech-bullet">▹</span>
                React.js
              </div>
              <div className="tech-item">
                <span className="tech-bullet">▹</span>
                Node.js
              </div>
              <div className="tech-item">
                <span className="tech-bullet">▹</span>
                TypeScript
              </div>
              <div className="tech-item">
                <span className="tech-bullet">▹</span>
                Next.js
              </div>
              <div className="tech-item">
                <span className="tech-bullet">▹</span>
                MongoDB
              </div>
            </div>
          </div>

          <div className="about-visual">
            <div className="profile-card">
              <div className="card-header">
                <div className="card-controls">
                  <span className="control"></span>
                  <span className="control"></span>
                  <span className="control"></span>
                </div>
                <span className="card-title">AI/Frontend Developer</span>
              </div>
              <div className="card-content">
                <div className="profile-image">
                  <div className="image-container">
                    <img
                      src="/Photos/انا.jpeg"
                      alt="Mohamed Nour"
                      className="profile-photo"
                    />
                  </div>
                  <div className="image-border"></div>
                </div>
                <div className="profile-info">
                  <h3>Mohamed Nour</h3>
                  <p>AI/Frontend Developer</p>
                  <div className="status-indicator">
                    <span className="status-dot"></span>
                    {language === 'ar' ? 'متاح للعمل' : 'Available for work'}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="experience-section">
          <h3 className="subsection-title">💼 {language === 'ar' ? 'الخبرات العملية' : 'Work Experience'}</h3>
          <div className="timeline">
            {experiences.map((exp, index) => (
              <div key={index} className="timeline-item">
                <div className="timeline-marker">
                  <span className="marker-dot"></span>
                  <div className="marker-line"></div>
                </div>
                <div className="timeline-content">
                  <div className="timeline-year">{exp.year}</div>
                  <h4 className="timeline-title">{exp.title}</h4>
                  <div className="timeline-company">{exp.company}</div>
                  <p className="timeline-description">{exp.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="certificates-section">
          <h3 className="subsection-title">📜 {language === 'ar' ? 'الشهادات والتدريبات (2022 - 2025)' : 'Certificates & Training (2022 - 2025)'}</h3>
          <div className="certificates-grid">
            {certificates.map((cert, index) => (
              <div key={index} className="certificate-card">
                <div className="certificate-icon">{cert.icon}</div>
                <div className="certificate-content">
                  <h4 className="certificate-title">{cert.title}</h4>
                  <span className="certificate-year">{cert.year}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="skills-section">
          <h3 className="subsection-title">🧠 {language === 'ar' ? 'المهارات الشخصية' : 'Soft Skills'}</h3>
          <div className="skills-container">
            {skills.map((skill, index) => (
              <div key={index} className="skill-item">
                <div className="skill-header">
                  <span className="skill-name">{skill.name}</span>
                  <span className="skill-percent">{skill.level}%</span>
                </div>
                <div className="skill-bar">
                  <div
                    className="skill-progress"
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
