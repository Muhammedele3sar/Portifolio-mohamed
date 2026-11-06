export type ProjectCategory = 'all' | 'ai' | 'fullstack' | 'frontend' | 'enterprise';

export interface Project {
  id: string;
  title: string;
  subtitle: string;
  category: 'ai' | 'fullstack' | 'frontend' | 'enterprise';
  description: string;
  longDescription: string;
  technologies: string[];
  features: string[];
  role?: string;
  challenges?: string;
  architectureNotes?: string;
  image: string;
  fallbackGradient?: string;
  badge?: string;
  demoUrl?: string;
  githubUrl?: string;
  isPrivateRepo?: boolean;
  featured: boolean;
  status: 'Completed' | 'In Production' | 'Enterprise';
}

export interface ExperienceItem {
  id: string;
  company: string;
  role: string;
  period: string;
  location: string;
  workType: 'Remote' | 'On-site' | 'Hybrid';
  description: string[];
  technologies: string[];
  isCurrent?: boolean;
}

export interface SkillItem {
  name: string;
  levelDescription?: string;
  iconName?: string;
  tag?: string;
}

export interface SkillCategory {
  id: string;
  title: string;
  subtitle: string;
  icon: string;
  skills: SkillItem[];
  highlights: string[];
}

export interface Certification {
  id: string;
  title: string;
  issuer: string;
  year: string;
  skills: string[];
  credentialNote?: string;
  badgeColor?: string;
}

export interface EducationData {
  degree: string;
  institution: string;
  period: string;
  department: string;
  academicFocus: string;
  graduationProjectGrade: string;
  graduationProjectName: string;
  graduationProjectDescription: string;
  highlights: string[];
}

export interface PersonalInfo {
  name: string;
  monogram: string;
  primaryTitle: string;
  titles: string[];
  positioning: string;
  heroHeadline: string;
  heroDescription: string;
  aboutStory: string[];
  location: string;
  email: string;
  phone?: string;
  linkedin: string;
  github: string;
  whatsapp: string;
  availability: {
    status: 'available' | 'busy';
    label: string;
  };
  metrics: Array<{
    label: string;
    value: string;
    sublabel: string;
  }>;
}

