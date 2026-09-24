export interface Project {
  id: string;
  title: string;
  tagline: string;
  description: string;
  longDescription: string;
  category: 'all' | 'fullstack' | 'frontend' | 'backend' | 'cloud' | 'ai';
  tags: string[];
  metrics: string[];
  image: string;
  featured: boolean;
  demoUrl?: string;
  githubUrl?: string;
  architectureHighlights: string[];
  techDetails: {
    frontend?: string;
    backend?: string;
    database?: string;
    deployment?: string;
  };
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  companyUrl?: string;
  location: string;
  period: string;
  type: 'Full-time' | 'Contract' | 'Lead';
  description: string;
  highlights: string[];
  skills: string[];
  current?: boolean;
}

export interface SkillCategory {
  name: string;
  key: 'frontend' | 'backend' | 'cloud' | 'tools';
  icon: string;
  description: string;
  skills: Skill[];
}

export type SkillLevel = 'Learning' | 'Comfortable' | 'Proficient' | 'Advanced';

export interface Skill {
  name: string;
  level: SkillLevel;
  icon: string;
  badge?: string;
  description?: string;
}

export interface Education {
  id: string;
  degree: string;
  field: string;
  institution: string;
  location: string;
  period: string;
  gpa?: string;
  honors?: string[];
  coursework: string[];
}

export interface Certification {
  id: string;
  title: string;
  issuer: string;
  issueDate: string;
  credentialId?: string;
  verifyUrl?: string;
  badgeIcon: string;
  color: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  avatar: string;
  quote: string;
  linkedinUrl?: string;
}

export interface StatItem {
  value: string;
  label: string;
  sublabel: string;
  icon: string;
}
