import { Project } from '../types';

export const projects: Project[] = [
  {
    id: 'examguard',
    title: 'EXAMGUARD',
    subtitle: 'AI-Powered Online Exam Proctoring System',
    category: 'ai',
    description:
      'An intelligent online examination monitoring and proctoring platform developed to uphold academic integrity using Computer Vision and Deep Learning.',
    longDescription:
      'EXAMGUARD is an intelligent online examination monitoring and automated proctoring platform engineered to protect academic integrity during remote exams. Recognized as an Excellent Grade Graduation Project in AI, it leverages cutting-edge computer vision models to continuously observe student behavior, detect suspicious anomalies, track attention metrics, and compute real-time cheating risk scores for invigilators.',
    technologies: [
      'React.js',
      'Python',
      'MySQL',
      'Computer Vision',
      'Deep Learning',
      'YOLOv8',
      'OpenCV',
      'WebSockets',
      'Tailwind CSS',
    ],
    features: [
      'Face Verification and biometric identity confirmation',
      'Eye Gaze and active visual attention tracking',
      'Head Pose Estimation (Yaw & Pitch angular deviation)',
      'Multiple Face Detection to prevent unauthorized presence',
      'Suspicious Object Detection using YOLOv8 (identifying smartphones and books)',
      'Real-time Cheating Detection and dynamic Risk Scoring',
      'Automated Exam Violation Alerts and chronological incident logging',
    ],
    role: 'Contributed to designing and developing the AI-powered examination monitoring system, focusing on computer vision, intelligent behavior detection, and integrating AI capabilities into the examination platform.',
    challenges:
      'Achieving real-time multi-model computer vision inference (face tracking, head pose, and YOLOv8 object detection) with low latency alongside live browser streaming and instant violation alerting.',
    architectureNotes:
      'Direct browser-to-backend pipeline processing student video streams through deep learning inference workers, broadcasting live alerts and cheating risk indices to the invigilator dashboard.',
    image: '/Photos/examguard-system.png',
    fallbackGradient: 'from-blue-950 via-slate-900 to-indigo-950',
    badge: 'Graduation Project – Excellent Grade',
    status: 'Completed',
    featured: true,
    isPrivateRepo: true,
  },
  {
    id: 'hamza-suit',
    title: 'Hamza Suit',
    subtitle: 'POS & Business Management Desktop Platform',
    category: 'enterprise',
    description:
      'A specialized POS and business operations management platform supporting permanent sales, cyclical formalwear rentals, customer security deposit tracking, and inventory control.',
    longDescription:
      'Hamza Suit is an enterprise-grade POS and operations management application tailored for suit retail, tailoring showrooms, and formalwear rental businesses. It bridges the operational gaps of traditional POS software by seamlessly managing dual-mode workflows: direct commercial sales and cyclical formal garment rentals. The system features an Arabic desktop interface engineered with Electron and React, handling customer deposit tracking, rental return inspections, barcode generation, inventory matrices, and real-time cash register reconciliation.',
    technologies: ['React', 'TypeScript', 'PHP Native', 'SQLite', 'SQL', 'Electron', 'Tailwind CSS'],
    features: [
      'Dual transaction engine handling both direct sales and cyclical formalwear rentals',
      'Customer security deposit tracking with status-based return condition inspections',
      'Multi-variant garment inventory matrix (cuts, fabrics, measurements, and jacket sizes)',
      'Automated receipt and formal rental contract agreement generation',
      'Daily register auditing, cash reconciliation, and sales performance reporting',
      'Responsive, high-performance Arabic interface packaged as an offline-resilient desktop app',
    ],
    role: 'Lead Full-Stack & Desktop Software Engineer responsible for UI/UX engineering, transaction architecture, local database persistence, and Electron desktop packaging.',
    challenges:
      'Balancing simultaneous sales and complex rental lifecycles while ensuring zero data loss during offline shop floor operations through local SQL/SQLite atomic transactions.',
    architectureNotes:
      'Desktop application powered by Electron and React with local SQLite/SQL persistence, ensuring rapid offline transaction speeds and secure multi-user role management.',
    image: '/Photos/badlt hamza system.png',
    fallbackGradient: 'from-slate-950 via-emerald-950 to-slate-900',
    badge: 'POS & Rental System',
    status: 'In Production',
    featured: true,
    isPrivateRepo: true,
  },
  {
    id: 'educore',
    title: 'EduCore',
    subtitle: 'Comprehensive Learning Management System (LMS)',
    category: 'enterprise',
    description:
      'An end-to-end Learning Management System connecting educators, learners, and parents into a unified academic workflow and performance tracking environment.',
    longDescription:
      'EduCore is a multi-modular Learning Management System (LMS) and educational operations platform built to streamline the entire academic lifecycle. It centralizes student enrollment, teacher curricula scheduling, attendance auditing, interactive assignment workflows, parent communication channels, and real-time academic progress reports within a modern, user-friendly portal.',
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'PHP', 'Laravel', 'MySQL', 'REST APIs'],
    features: [
      'Unified educational portal connecting teachers, students, and parents with role-based access',
      'Curriculum tracking, course schedule management, and classroom assignment workflows',
      'Automated student attendance tracking and continuous academic grading records',
      'Parent visibility portal for real-time monitoring of grades, schedules, and teacher notices',
      'Interactive executive analytics dashboard highlighting student engagement and institutional KPIs',
      'Clean, accessible bilingual layout designed for seamless user onboarding',
    ],
    role: 'Full-Stack Developer designing the core educational workflows, responsive student/teacher dashboards, and database schemas.',
    challenges:
      'Designing an intuitive role-based information hierarchy that keeps complex academic workflows simple and approachable for teachers, students, and parents alike.',
    architectureNotes:
      'Modular client architecture separated into dedicated student, educator, and administrative views powered by a robust relational database backend.',
    image: '/Photos/EDUCORE SYSTEM.png',
    fallbackGradient: 'from-slate-950 via-blue-950 to-slate-900',
    badge: 'LMS Platform',
    status: 'Completed',
    featured: true,
    isPrivateRepo: true,
  },
  {
    id: 'nexus-ai',
    title: 'Nexus AI',
    subtitle: 'Intelligent AI-Powered Assistant Platform',
    category: 'ai',
    description:
      'A modern AI-powered assistant platform providing intelligent real-time conversational capabilities, contextual response generation, and workflow automation.',
    longDescription:
      'Nexus AI is an intelligent assistant platform designed to showcase advanced artificial intelligence interactions through a modern, responsive user experience. It empowers users with real-time prompt reasoning, contextual conversations, intelligent query resolution, and productivity enhancements, wrapped in a sleek developer-first aesthetic.',
    technologies: ['React', 'TypeScript', 'Python', 'FastAPI', 'AI / LLM APIs', 'Tailwind CSS', 'WebSockets'],
    features: [
      'Intelligent conversational interface with real-time message streaming and Markdown parsing',
      'Context-aware multi-turn dialog memory for precise, continuous interactions',
      'Pre-built prompt workflows and knowledge retrieval templates for rapid productivity',
      'Modern dark-themed UI featuring fluid animations and keyboard shortcuts',
      'Secure asynchronous API integration engineered for low-latency inference delivery',
    ],
    role: 'AI & Frontend Engineer creating the conversational user interface, real-time message pipelines, and backend model orchestration.',
    challenges:
      'Ensuring low-latency token streaming and responsive UI state management while maintaining seamless conversational context.',
    architectureNotes:
      'Asynchronous API backend communicating with a reactive React frontend via streaming sockets and REST endpoints.',
    image: '/Photos/nexus AI.png',
    fallbackGradient: 'from-indigo-950 via-slate-900 to-blue-950',
    badge: 'AI Assistant',
    status: 'Completed',
    featured: true,
    isPrivateRepo: true,
  },
  {
    id: 'professor-system',
    title: 'Professor System',
    subtitle: 'Educational Center & Academic Operations Management',
    category: 'enterprise',
    description:
      'A specialized administrative system engineered to manage educational centers, batch scheduling, student billing, and academic operational workflows.',
    longDescription:
      'Professor System is a purpose-built educational management system developed specifically for academic centers, institutes, and tutoring organizations. It centralizes administrative workflows—including multi-batch scheduling, student group assignments, fee payment tracking, attendance logging, and instructor schedules—into a robust, organized control center.',
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'PHP', 'MySQL', 'REST APIs'],
    features: [
      'Academic center batch and classroom schedule orchestration with collision avoidance',
      'Student registration, group placement, and attendance verification pipelines',
      'Fee collection, payment installment tracking, and financial receipt generation',
      'Instructor assignment overview and lecture calendar management',
      'Comprehensive reporting on center capacity, revenue, and student attendance rates',
    ],
    role: 'Full-Stack Developer managing center business logic, administrative dashboards, and database models.',
    challenges:
      'Automating complex lecture hall schedules and variable student group timings to prevent conflicting bookings across physical classrooms.',
    architectureNotes:
      'Structured relational database backend with optimized queries for scheduling lookups and financial ledger auditing.',
    image: '/Photos/professor system.png',
    fallbackGradient: 'from-slate-950 via-sky-950 to-slate-900',
    badge: 'Academic Management',
    status: 'Completed',
    featured: true,
    isPrivateRepo: true,
  },
  {
    id: 'iqraa-medical',
    title: 'Iqraa Medical',
    subtitle: 'Medical Equipment & Healthcare Supplies Digital Platform',
    category: 'frontend',
    description:
      'A healthcare equipment and clinical supplies website delivering a structured digital catalog, inquiry management, and medical-grade branding.',
    longDescription:
      'Iqraa Medical is a specialized corporate web platform designed to establish a solid digital presence for medical equipment distributors and healthcare supply providers. The website presents technical product specifications, device categorization, clinical inquiry requests, and corporate credibility through a clean, healthcare-grade visual experience.',
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Lucide Icons', 'Responsive Web Design'],
    features: [
      'Detailed medical equipment catalog with technical specifications and safety certifications',
      'Direct RFQ (Request for Quote) and clinical supply inquiry submission workflows',
      'Structured categorization across surgical, diagnostic, and clinic consumables',
      'Clinical trust-focused design with responsive accessibility across desktop and mobile devices',
      'High-performance asset optimization ensuring fast page loads and smooth navigation',
    ],
    role: 'Frontend Engineer responsible for visual design implementation, catalog interaction, and responsive mobile architecture.',
    challenges:
      'Organizing dense biomedical equipment data and technical sheets into clean, easily readable product detail views.',
    architectureNotes:
      'Component-based client application featuring lightweight client-side filtering and SEO-ready semantic markup.',
    image: '/Photos/project-iqraa-medical.png',
    fallbackGradient: 'from-slate-950 via-teal-950 to-slate-900',
    badge: 'Medical Supplies',
    status: 'Completed',
    featured: false,
    isPrivateRepo: true,
  },
  {
    id: 'travora',
    title: 'TRAVORA',
    subtitle: 'Tourism & Transportation Booking Platform',
    category: 'fullstack',
    description:
      'A full-stack tourism and transportation booking platform offering online itinerary reservations, vehicle bookings, and a multilingual traveler experience.',
    longDescription:
      'TRAVORA is an all-in-one travel and transportation booking system designed for tour operators and transit services. It empowers domestic and international travelers to explore destination packages, select vehicle types, schedule trips, and book online through a multilingual, user-friendly interface powered by React and Laravel.',
    technologies: ['React', 'PHP', 'Laravel', 'TypeScript', 'Tailwind CSS', 'MySQL', 'REST APIs'],
    features: [
      'Comprehensive online booking engine for vehicle rentals and curated tour packages',
      'Interactive date-and-route itinerary scheduler with passenger count options',
      'Multilingual traveler experience designed for seamless cross-cultural navigation',
      'Back-office operator dashboard to manage reservations, vehicle fleets, and pricing tiers',
      'Automated booking confirmation and status notifications for travelers and dispatchers',
    ],
    role: 'Full-Stack Developer building the frontend booking workflows, reservation state management, and Laravel RESTful backend.',
    challenges:
      'Handling multi-currency and dynamic pricing rules across seasonal tourist periods while maintaining a fast, frictionless booking experience.',
    architectureNotes:
      'Laravel REST API architecture backing a dynamic React single-page frontend with stateful reservation flows and secure relational storage.',
    image: '/Photos/project-travora.png',
    fallbackGradient: 'from-slate-950 via-blue-950 to-cyan-950',
    badge: 'Tourism & Booking',
    status: 'Completed',
    featured: true,
    isPrivateRepo: true,
  },
  {
    id: 'qanoon-plus',
    title: 'Qanoon Plus',
    subtitle: 'Law Firm & Legal Services Digital Platform',
    category: 'fullstack',
    description:
      'A professional legal services website offering client intake, legal consultation booking, practice area portfolios, and modern legal brand presentation.',
    longDescription:
      'Qanoon Plus is a dedicated legal practice portal engineered to establish a commanding online presence for modern law firms and legal consultants. It features an intuitive client consultation intake process, detailed practice area directories (corporate, commercial, arbitration, and civil litigation), and an authoritative digital experience adhering to legal confidentiality aesthetics.',
    technologies: ['React', 'TypeScript', 'PHP', 'Tailwind CSS', 'MySQL', 'REST APIs'],
    features: [
      'Structured legal practice areas directory highlighting specialized attorney expertise',
      'Online confidential consultation intake and case evaluation request forms',
      'Attorney profile showcases detailing bar qualifications and practice areas',
      'Bilingual RTL Arabic and LTR layout support with legal terminology precision',
      'Responsive, high-credibility dark theme design communicating trust and security',
    ],
    role: 'Full-Stack Developer handling UI/UX layout, consultation request routing, and backend integration.',
    challenges:
      'Structuring sensitive legal intake forms to be concise yet thorough enough for attorneys to pre-evaluate client matters effectively.',
    architectureNotes:
      'Responsive React frontend integrated with a secure backend API ensuring confidential inquiry handling and reliable contact dispatching.',
    image: '/Photos/qanoon plus.png',
    fallbackGradient: 'from-slate-900 via-sky-950 to-slate-950',
    badge: 'Legal Services',
    status: 'Completed',
    featured: false,
    isPrivateRepo: true,
  },
  {
    id: 'awlad-ezz',
    title: 'Awlad Ezz',
    subtitle: 'Supermarket E-Commerce & Grocery Delivery Platform',
    category: 'fullstack',
    description:
      'A modern grocery e-commerce platform offering fast product browsing, multi-category cart management, and seamless supermarket retail ordering.',
    longDescription:
      'Awlad Ezz is a digital supermarket and grocery delivery web application developed to modernize retail shopping. It allows customers to browse thousands of fresh groceries, pantry essentials, and household items, with instant keyword search, category filtering, a persistent shopping cart, and efficient delivery checkout.',
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'PHP / Node.js', 'MySQL', 'REST APIs'],
    features: [
      'Multi-category grocery storefront with high-density product cards and pricing displays',
      'Real-time product search with category-based filtering and instant inventory indicators',
      'Persistent shopping bag with local storage sync, quantity controls, and order totals',
      'Streamlined checkout flow supporting delivery address specification and order tracking',
      'Mobile-first responsive architecture optimized for everyday supermarket shoppers',
    ],
    role: 'Frontend & Full-Stack Developer engineering the e-commerce storefront, shopping cart state, and order processing flow.',
    challenges:
      'Maintaining fast page render speeds and rapid client-side search across extensive supermarket inventories and variable item units.',
    architectureNotes:
      'Component-driven frontend with centralized state management for shopping carts and optimized image loading across dense product lists.',
    image: '/Photos/AWLAD EZZ  WEBSITE.png',
    fallbackGradient: 'from-slate-950 via-emerald-950 to-slate-900',
    badge: 'Supermarket E-Commerce',
    status: 'Completed',
    featured: false,
    isPrivateRepo: true,
  },
  {
    id: 'turkey-website',
    title: 'Turkey Website',
    subtitle: 'Modern Fashion & Menswear E-Commerce Platform',
    category: 'fullstack',
    description:
      'A contemporary apparel e-commerce platform featuring an editorial fashion storefront, dynamic catalog filtering, and sleek shopping interactions.',
    longDescription:
      'Turkey Website is a fashion e-commerce platform built to present clothing and menswear collections with high aesthetic appeal. It merges editorial visuals with a smooth retail purchasing journey, offering responsive collection grids, detailed size selection, shopping bag management, and a clean, luxury shopping atmosphere.',
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'PHP', 'MySQL', 'REST APIs'],
    features: [
      'Editorial luxury fashion storefront highlighting seasonal apparel and new arrivals',
      'Interactive product detail views with multi-angle imagery and size/color pickers',
      'Dynamic shopping bag state with persistent storage and checkout calculation',
      'Category-based navigation across formal wear, casual essentials, and accessories',
      'Modern, masculine visual aesthetic tailored for premium fashion retail',
    ],
    role: 'Full-Stack Engineer building the storefront UI, product showcase components, and catalog integration.',
    challenges:
      'Balancing high-resolution fashion photography with performance optimization and fast mobile loading times.',
    architectureNotes:
      'Decoupled architecture combining a reactive React storefront with structured catalog endpoints and smooth CSS transitions.',
    image: '/Photos/TURKEY WEBSITE.png',
    fallbackGradient: 'from-black via-zinc-950 to-slate-900',
    badge: 'Fashion E-Commerce',
    status: 'Completed',
    featured: true,
    isPrivateRepo: true,
  },
];
