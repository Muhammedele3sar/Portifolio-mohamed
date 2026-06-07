import React, { createContext, useContext, useState } from 'react';
import type { ReactNode } from 'react';

type Language = 'en' | 'ar';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations = {
  en: {
    // Navigation
    'nav.home': 'Home',
    'nav.about': 'About',
    'nav.skills': 'Skills',
    'nav.projects': 'Projects',
    'nav.contact': 'Contact',
    
    // Hero
    'hero.greeting': 'Hello, I\'m',
    'hero.name': 'Mohamed Nor',
    'hero.role': 'Full Stack Developer',
    'hero.description': 'I build exceptional digital experiences with modern technologies',
    'hero.cta': 'View My Work',
    
    // About
    'about.title': 'About Me',
    'about.description': 'I\'m a passionate full-stack developer with expertise in building modern web applications. I love turning complex problems into simple, beautiful, and intuitive solutions.',
    
    // Skills
    'skills.title': 'My Skills',
    'skills.description': 'Technologies I work with',
    
    // Projects
    'projects.title': 'My Projects',
    'projects.description': 'Here are some of my recent projects that showcase my skills and passion for creating innovative solutions.',
    'projects.all': 'All Projects',
    'projects.fullstack': 'Full Stack',
    'projects.frontend': 'Frontend',
    'projects.backend': 'Backend',
    'projects.ai': 'AI/ML',
    'projects.technologies': 'Technologies Used:',
    
    // Contact
    'contact.title': 'Get In Touch',
    'contact.subtitle': 'Let\'s Build Something Amazing Together!',
    'contact.description': 'I\'m always interested in hearing about new opportunities, creative projects, or just having a chat about technology.',
    'contact.form.title': 'Send Me a Message',
    'contact.form.description': 'Fill out the form below and I\'ll get back to you as soon as possible.',
    'contact.form.name': 'Name *',
    'contact.form.email': 'Email *',
    'contact.form.subject': 'Subject *',
    'contact.form.message': 'Message *',
    'contact.form.send': 'Send Message',
    'contact.form.sending': 'Sending...',
    'contact.form.success': 'Message sent successfully! I\'ll get back to you soon.',
    'contact.form.error': 'Something went wrong. Please try again or contact me directly.',
    'contact.info.title': 'Contact Information',
    'contact.info.description': 'Prefer to reach out directly? Here are all the ways you can contact me.',
    'contact.social.title': 'Connect With Me',
    'contact.available': 'Available for Work',
    'contact.available.description': 'I\'m currently available for freelance projects and full-time opportunities.',
    'contact.location': 'Location',
    'contact.email': 'Email',
    'contact.phone': 'Phone',
    'contact.timezone': 'Timezone',
    
    // Footer
    'footer.built': 'Built with ❤️ using React, TypeScript, and lots of coffee ☕',
    'footer.back': 'Back to Top ↑',
  },
  ar: {
    // Navigation
    'nav.home': 'الرئيسية',
    'nav.about': 'عني',
    'nav.skills': 'المهارات',
    'nav.projects': 'المشاريع',
    'nav.contact': 'تواصل معي',
    
    // Hero
    'hero.greeting': 'مرحباً، أنا',
    'hero.name': 'محمد نور',
    'hero.role': 'مطور Full Stack',
    'hero.description': 'أقوم ببناء تجارب رقمية استثنائية باستخدام التقنيات الحديثة',
    'hero.cta': 'شاهد أعمالي',
    
    // About
    'about.title': 'عني',
    'about.description': 'أنا مطور Full Stack شغوف بخبرة في بناء تطبيقات الويب الحديثة. أحب تحويل المشكلات المعقدة إلى حلول بسيطة وجميلة وسهلة الاستخدام.',
    
    // Skills
    'skills.title': 'مهاراتي',
    'skills.description': 'التقنيات التي أعمل بها',
    
    // Projects
    'projects.title': 'مشاريعي',
    'projects.description': 'إليك بعض مشاريعي الأخيرة التي تعرض مهاراتي وشغفي بإنشاء حلول مبتكرة.',
    'projects.all': 'جميع المشاريع',
    'projects.fullstack': 'Full Stack',
    'projects.frontend': 'Frontend',
    'projects.backend': 'Backend',
    'projects.ai': 'الذكاء الاصطناعي',
    'projects.technologies': 'التقنيات المستخدمة:',
    
    // Contact
    'contact.title': 'تواصل معي',
    'contact.subtitle': 'لنبنِ شيئاً مذهلاً معاً!',
    'contact.description': 'أنا مهتم دائماً بسماع فرص جديدة ومشاريع إبداعية، أو مجرد الدردشة حول التكنولوجيا.',
    'contact.form.title': 'أرسل لي رسالة',
    'contact.form.description': 'املأ النموذج أدناه وسأرد عليك في أقرب وقت ممكن.',
    'contact.form.name': 'الاسم *',
    'contact.form.email': 'البريد الإلكتروني *',
    'contact.form.subject': 'الموضوع *',
    'contact.form.message': 'الرسالة *',
    'contact.form.send': 'إرسال الرسالة',
    'contact.form.sending': 'جاري الإرسال...',
    'contact.form.success': 'تم إرسال الرسالة بنجاح! سأرد عليك قريباً.',
    'contact.form.error': 'حدث خطأ ما. يرجى المحاولة مرة أخرى أو التواصل معي مباشرة.',
    'contact.info.title': 'معلومات التواصل',
    'contact.info.description': 'تفضل التواصل مباشرة؟ إليك جميع الطرق التي يمكنك من خلالها التواصل معي.',
    'contact.social.title': 'تواصل معي',
    'contact.available': 'متاح للعمل',
    'contact.available.description': 'أنا متاح حالياً للمشاريع المستقلة والفرص بدوام كامل.',
    'contact.location': 'الموقع',
    'contact.email': 'البريد الإلكتروني',
    'contact.phone': 'الهاتف',
    'contact.timezone': 'التوقيت',
    
    // Footer
    'footer.built': 'تم البناء بـ ❤️ باستخدام React و TypeScript والكثير من القهوة ☕',
    'footer.back': 'العودة للأعلى ↑',
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('en');

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations.en] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
