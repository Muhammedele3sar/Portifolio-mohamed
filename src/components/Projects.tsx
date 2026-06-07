import React, { useState } from 'react';
import './Projects.css';
import { useLanguage } from '../contexts/LanguageContext';

interface Project {
  id: number;
  title: string;
  description: string;
  longDescription: string;
  technologies: string[];
  image: string;
  category: string;
  featured: boolean;
  status: 'completed' | 'in-progress' | 'planned';
}

const Projects: React.FC = () => {
  const { t, language } = useLanguage();
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [activeFilter, setActiveFilter] = useState('all');

  const getProjects = (): Project[] => {
    if (language === 'ar') {
      return [
        {
          id: 1,
          title: '2M Mobile Store',
          description: 'نظام إدارة متجر موبايلات متكامل',
          longDescription: 'نظام متكامل لإدارة متجر موبايلات يشمل إدارة المخزون، المبيعات، الضمانات، وإصلاح الأجهزة. يتيح متابعة المبيعات اليومية، إدارة العملاء، وتقارير المبيعات مع دعم كامل للفواتير والمدفوعات.',
          technologies: ['React', 'TypeScript', 'Node.js', 'MongoDB', 'Express'],
          image: '/Photos/2m Mobile Store - نظام إدارة المحل - Avast Secure Browser 8_2_2025 8_11_53 PM_edited.avif',
          category: 'fullstack',
          featured: true,
          status: 'completed'
        },
        {
          id: 2,
          title: 'Crop Class Management',
          description: 'نظام إدارة المحاصيل الزراعية',
          longDescription: 'يهدف المشروع إلى تحليل وتصنيف الأراضي الزراعية باستخدام الذكاء الاصطناعي لتحسين الإنتاجية واتخاذ القرارات الزراعية المدعومة بالبيانات.',
          technologies: ['Python', 'TensorFlow', 'OpenCV', 'React', 'Node.js'],
          image: '/Photos/Crop Class Management - Avast Secure Browser 8_2_2025 8_38_31 PM_edited.avif',
          category: 'ai',
          featured: true,
          status: 'completed'
        },
        {
          id: 3,
          title: 'Alfallah Holding',
          description: 'الموقع الرسمي لشركة الفلاح القابضة',
          longDescription: 'شركة استثمارية رائدة تعمل على بناء شراكات استراتيجية مع شركات محلية ودولية في مختلف القطاعات لتحقيق التنمية المستدامة.',
          technologies: ['React', 'Next.js', 'Tailwind CSS', 'Node.js'],
          image: '/Photos/ALfallah-hollding.png',
          category: 'corporate',
          featured: true,
          status: 'completed'
        },
        {
          id: 4,
          title: 'Portfolio Website',
          description: 'موقع شخصي تفاعلي',
          longDescription: 'موقع شخصي تفاعلي لعرض المشاريع والمهارات والخبرات مع واجهة مستخدم جذابة وسهلة الاستخدام.',
          technologies: ['React', 'TypeScript', 'TailwindCSS', 'Framer Motion'],
          image: '/Photos/my portifolio.png',
          category: 'frontend',
          featured: true,
          status: 'completed'
        },
        {
          id: 5,
          title: 'سوبر ماركت عز',
          description: 'منصة تسوق إلكتروني متكاملة',
          longDescription: 'منصة تسوق إلكتروني متكاملة تتيح تجربة تسوق سهلة ومريحة للمستخدمين مع إدارة كاملة للمنتجات والعروض. تشمل واجهة مستخدم عربية بديهية، نظام دفع آمن، وتتبع للطلبات مع تحديثات فورية.',
          technologies: ['React', 'Node.js', 'MongoDB', 'Express', 'JWT'],
          image: '/Photos/Awlad ezz.avif',
          category: 'fullstack',
          featured: true,
          status: 'completed'
        },
        {
          id: 6,
          title: 'ExamGuard',
          description: 'نظام ذكي لمراقبة الامتحانات الإلكترونية',
          longDescription: 'نظام ذكي لمراقبة الامتحانات الإلكترونية يعتمد على تقنيات الذكاء الاصطناعي والرؤية الحاسوبية (Computer Vision) لتحليل سلوك الطلاب أثناء الامتحان. يهدف النظام إلى تعزيز النزاهة الأكاديمية من خلال اكتشاف السلوكيات غير الطبيعية أو محاولات الغش بشكل آلي وفي الوقت الفعلي، مع توفير تقارير تساعد المشرفين على متابعة الامتحانات بكفاءة ودقة أكبر.',
          technologies: ['Python', 'OpenCV', 'TensorFlow', 'React', 'Node.js', 'WebSocket'],
          image: '/Photos/montor exam.png',
          category: 'ai',
          featured: true,
          status: 'completed'
        },
        {
          id: 7,
          title: 'قانون بلس (Qanun Plus)',
          description: 'منصة رقمية قانونية',
          longDescription: 'منصة رقمية قانونية تهدف إلى تسهيل الوصول إلى المعلومات والخدمات القانونية من خلال واجهة سهلة الاستخدام. توفر المنصة أدوات تساعد المستخدمين في البحث عن القوانين والتشريعات، والاطلاع على المواد القانونية، والحصول على استشارات أو خدمات قانونية بشكل أسرع وأكثر تنظيمًا. يهدف المشروع إلى توظيف التكنولوجيا لتبسيط الإجراءات القانونية وتحسين تجربة المستخدم في الوصول إلى المعلومات القانونية الموثوقة.',
          technologies: ['React', 'TypeScript', 'Node.js', 'MongoDB', 'Express', 'Elasticsearch'],
          image: '/Photos/Screenshot 2026-06-07 025120.png',
          category: 'fullstack',
          featured: true,
          status: 'completed'
        },
        {
          id: 8,
          title: 'Nexus AI',
          description: 'شات بوت ذكي',
          longDescription: 'شات بوت ذكي يعتمد على تقنيات الذكاء الاصطناعي ومعالجة اللغة الطبيعية (NLP) للتفاعل مع المستخدمين والإجابة على استفساراتهم بشكل سريع ودقيق. يهدف النظام إلى تحسين تجربة المستخدم من خلال تقديم دعم ذكي، وفهم الأسئلة باللغة الطبيعية، وتوفير المعلومات أو المساعدة المطلوبة بطريقة سهلة وفعالة.',
          technologies: ['Python', 'TensorFlow', 'NLP', 'React', 'Node.js', 'WebSocket', 'OpenAI API'],
          image: '/Photos/Screenshot 2026-06-07 030912.png',
          category: 'ai',
          featured: true,
          status: 'completed'
        }
      ];
    } else {
      return [
        {
          id: 1,
          title: '2M Mobile Store',
          description: 'Complete Mobile Store Management System',
          longDescription: 'A comprehensive mobile store management system including inventory management, sales, warranties, and device repairs. It enables daily sales tracking, customer management, and sales reports with full invoice and payment support.',
          technologies: ['React', 'TypeScript', 'Node.js', 'MongoDB', 'Express'],
          image: '/Photos/2m Mobile Store - نظام إدارة المحل - Avast Secure Browser 8_2_2025 8_11_53 PM_edited.avif',
          category: 'fullstack',
          featured: true,
          status: 'completed'
        },
        {
          id: 2,
          title: 'Crop Class Management',
          description: 'Agricultural Crop Management System',
          longDescription: 'The project aims to analyze and classify agricultural lands using artificial intelligence to improve productivity and make data-driven agricultural decisions.',
          technologies: ['Python', 'TensorFlow', 'OpenCV', 'React', 'Node.js'],
          image: '/Photos/Crop Class Management - Avast Secure Browser 8_2_2025 8_38_31 PM_edited.avif',
          category: 'ai',
          featured: true,
          status: 'completed'
        },
        {
          id: 3,
          title: 'Alfallah Holding',
          description: 'Official Website of Alfallah Holding',
          longDescription: 'A leading investment company working on building strategic partnerships with local and international companies across various sectors to achieve sustainable development.',
          technologies: ['React', 'Next.js', 'Tailwind CSS', 'Node.js'],
          image: '/Photos/ALfallah-hollding.png',
          category: 'corporate',
          featured: true,
          status: 'completed'
        },
        {
          id: 4,
          title: 'Portfolio Website',
          description: 'Interactive Personal Website',
          longDescription: 'An interactive personal website to showcase projects, skills, and experiences with an attractive and user-friendly interface.',
          technologies: ['React', 'TypeScript', 'TailwindCSS', 'Framer Motion'],
          image: '/Photos/my portifolio.png',
          category: 'frontend',
          featured: true,
          status: 'completed'
        },
        {
          id: 5,
          title: 'Awlad Ezz Supermarket',
          description: 'Complete E-commerce Platform',
          longDescription: 'A complete e-commerce platform offering an easy and comfortable shopping experience with full product and offer management. Includes intuitive Arabic user interface, secure payment system, and order tracking with real-time updates.',
          technologies: ['React', 'Node.js', 'MongoDB', 'Express', 'JWT'],
          image: '/Photos/Awlad ezz.avif',
          category: 'fullstack',
          featured: true,
          status: 'completed'
        },
        {
          id: 6,
          title: 'ExamGuard',
          description: 'Smart Online Exam Monitoring System',
          longDescription: 'An intelligent online exam monitoring system based on AI and computer vision techniques to analyze student behavior during exams. The system aims to enhance academic integrity by automatically detecting abnormal behaviors or cheating attempts in real-time, providing reports to help supervisors monitor exams more efficiently and accurately.',
          technologies: ['Python', 'OpenCV', 'TensorFlow', 'React', 'Node.js', 'WebSocket'],
          image: '/Photos/montor exam.png',
          category: 'ai',
          featured: true,
          status: 'completed'
        },
        {
          id: 7,
          title: 'Qanun Plus',
          description: 'Digital Legal Platform',
          longDescription: 'A digital legal platform aiming to facilitate access to legal information and services through an easy-to-use interface. The platform provides tools to help users search for laws and regulations, view legal articles, and obtain legal consultations or services faster and more organized. The project aims to leverage technology to simplify legal procedures and improve user experience in accessing reliable legal information.',
          technologies: ['React', 'TypeScript', 'Node.js', 'MongoDB', 'Express', 'Elasticsearch'],
          image: '/Photos/Screenshot 2026-06-07 025120.png',
          category: 'fullstack',
          featured: true,
          status: 'completed'
        },
        {
          id: 8,
          title: 'Nexus AI',
          description: 'Smart Chatbot',
          longDescription: 'An intelligent chatbot based on AI and natural language processing (NLP) techniques to interact with users and answer their queries quickly and accurately. The system aims to improve user experience by providing intelligent support, understanding natural language questions, and delivering the required information or assistance in an easy and effective manner.',
          technologies: ['Python', 'TensorFlow', 'NLP', 'React', 'Node.js', 'WebSocket', 'OpenAI API'],
          image: '/Photos/Screenshot 2026-06-07 030912.png',
          category: 'ai',
          featured: true,
          status: 'completed'
        }
      ];
    }
  };

  const projects = getProjects();

  const categories = [
    { id: 'all', name: t('projects.all'), icon: '🚀' },
    { id: 'fullstack', name: t('projects.fullstack'), icon: '💻' },
    { id: 'frontend', name: t('projects.frontend'), icon: '🎨' },
    { id: 'backend', name: t('projects.backend'), icon: '⚙️' },
    { id: 'ai', name: t('projects.ai'), icon: '🤖' }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <section id="projects" className="projects section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">
            <span className="title-number">03.</span>
            <span className="gradient-text">{t('projects.title')}</span>
          </h2>
          <div className="title-line"></div>
        </div>

        <div className="projects-intro">
          <p>
            {t('projects.description')}
          </p>
        </div>

        <div className="all-projects-section">
          
          <div className="filter-tabs">
            {categories.map((category) => (
              <button
                key={category.id}
                className={`filter-tab ${activeFilter === category.id ? 'active' : ''}`}
                onClick={() => setActiveFilter(category.id)}
              >
                <span className="tab-icon">{category.icon}</span>
                <span className="tab-name">{category.name}</span>
              </button>
            ))}
          </div>

          <div className="projects-grid">
            {filteredProjects.map((project, index) => (
              <div 
                key={project.id} 
                className="project-card"
                style={{ '--delay': `${index * 0.1}s` } as React.CSSProperties}
              >
                <div className="project-image-container">
                  <img src={project.image} alt={project.title} className="project-image" />
                </div>
                
                <div className="card-body">
                  <h4 className="project-name">{project.title}</h4>
                  <p className="project-desc">{project.description}</p>
                </div>
                
                <div className="card-footer">
                  <div className="tech-stack">
                    {project.technologies.slice(0, 3).map((tech) => (
                      <span key={tech} className="tech-item">{tech}</span>
                    ))}
                  </div>
                  <span className={`project-status-mini ${project.status}`}>
                    {project.status === 'completed' ? '✅' : 
                     project.status === 'in-progress' ? '🚧' : '📋'}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Project Modal */}
        {selectedProject && (
          <div className="project-modal" onClick={() => setSelectedProject(null)}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
              <button className="modal-close" onClick={() => setSelectedProject(null)}>
                ✕
              </button>
              
              <div className="modal-header">
                <div className="modal-icon">{selectedProject.image}</div>
                <div>
                  <h3>{selectedProject.title}</h3>
                  <span className={`status-badge ${selectedProject.status}`}>
                    {selectedProject.status.replace('-', ' ')}
                  </span>
                </div>
              </div>
              
              <div className="modal-body">
                <p>{selectedProject.longDescription}</p>
                
                <div className="modal-tech">
                  <h4>{t('projects.technologies')}</h4>
                  <div className="tech-list">
                    {selectedProject.technologies.map((tech) => (
                      <span key={tech} className="tech-badge">{tech}</span>
                    ))}
                  </div>
                </div>
              </div>
              
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;
