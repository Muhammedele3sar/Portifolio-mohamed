import { SkillCategory } from '../types';

export const skillCategories: SkillCategory[] = [
  {
    id: 'frontend',
    title: 'Frontend Development',
    subtitle: 'Modern UI Architecture & Interactive Web Applications',
    icon: 'Layout',
    highlights: [
      'Component-Driven Architecture',
      'High-Performance UI Rendering',
      'Responsive & Mobile-First Design',
      'Clean State Management',
    ],
    skills: [
      { name: 'React', tag: 'Core', levelDescription: 'SPA Architecture & Hooks' },
      { name: 'TypeScript', tag: 'Type-Safety', levelDescription: 'Interfaces & Strict Typing' },
      { name: 'JavaScript', tag: 'ES6+', levelDescription: 'Asynchronous & DOM APIs' },
      { name: 'HTML5', tag: 'Semantic', levelDescription: 'Accessible Structure' },
      { name: 'CSS3', tag: 'Modern', levelDescription: 'Flexbox, Grid, Animations' },
      { name: 'Tailwind CSS', tag: 'Styling', levelDescription: 'Utility-First Systems' },
    ],
  },
  {
    id: 'backend',
    title: 'Backend & Systems',
    subtitle: 'Scalable APIs, Database Modeling & Business Logic',
    icon: 'Server',
    highlights: [
      'RESTful API Design & Security',
      'Relational Database Modeling',
      'Business Workflow Automation',
      'Server-Side Data Validation',
    ],
    skills: [
      { name: 'Python', tag: 'Backend & AI', levelDescription: 'Services & Automation' },
      { name: 'FastAPI', tag: 'High-Performance', levelDescription: 'Asynchronous APIs & ML Serving' },
      { name: 'Flask', tag: 'Microframework', levelDescription: 'Lightweight Backend Endpoints' },
      { name: 'PHP', tag: 'Server-Side', levelDescription: 'Modern & Native Development' },
      { name: 'Laravel', tag: 'Framework', levelDescription: 'MVC Architecture & Eloquent' },
      { name: 'REST APIs', tag: 'Integration', levelDescription: 'Design, Auth & Endpoints' },
      { name: 'MySQL', tag: 'Database', levelDescription: 'Relational Schema & Queries' },
    ],
  },
  {
    id: 'ai',
    title: 'Artificial Intelligence',
    subtitle: 'Machine Learning, Deep Learning & Vision Inference',
    icon: 'Cpu',
    highlights: [
      'Computer Vision & Object Tracking',
      'Neural Network Model Training',
      'Real-Time Camera Stream Analysis',
      'Predictive Modeling & Feature Extraction',
    ],
    skills: [
      { name: 'Computer Vision', tag: 'Vision', levelDescription: 'Image & Video Stream Processing' },
      { name: 'OpenCV', tag: 'Perception', levelDescription: 'Real-Time Image Processing & Filters' },
      { name: 'YOLO', tag: 'Detection', levelDescription: 'Real-Time Object Detection (YOLOv8)' },
      { name: 'Deep Learning', tag: 'Neural Nets', levelDescription: 'CNNs & Architectures' },
      { name: 'Machine Learning', tag: 'Algorithms', levelDescription: 'Supervised & Unsupervised' },
      { name: 'NLP', tag: 'Language', levelDescription: 'Text Processing & Conversational AI' },
      { name: 'TensorFlow', tag: 'Framework', levelDescription: 'Deep Learning Pipelines' },
      { name: 'PyTorch', tag: 'Framework', levelDescription: 'Model Training & Evaluation' },
    ],
  },
  {
    id: 'tools',
    title: 'Tools & Technologies',
    subtitle: 'Development Workflow, Packaging & Analytics',
    icon: 'Wrench',
    highlights: [
      'Version Control Collaboration',
      'Desktop Application Packaging',
      'Containerization Workflows',
      'UI/UX Prototyping & Notebooks',
    ],
    skills: [
      { name: 'Git', tag: 'VCS', levelDescription: 'Branching & Version Control' },
      { name: 'GitHub', tag: 'Collaboration', levelDescription: 'Code Hosting & CI/CD' },
      { name: 'Figma', tag: 'Design', levelDescription: 'UI/UX Prototyping & Systems' },
      { name: 'Jupyter Notebook', tag: 'Research', levelDescription: 'Data Science & Model Prototyping' },
      { name: 'Docker', tag: 'Containers', levelDescription: 'Containerized Environments' },
      { name: 'Electron', tag: 'Desktop', levelDescription: 'Cross-Platform Native Apps' },
      { name: 'VS Code', tag: 'IDE', levelDescription: 'Debugging & Development Environment' },
    ],
  },
];

