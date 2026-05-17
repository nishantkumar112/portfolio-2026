export interface Project {
  slug: string;
  title: string;
  description: string;
  techStack: string[];
  liveUrl?: string;
  githubUrl?: string;
  outcome?: string;
  role?: string;
  highlight?: string;
  status?: 'live' | 'in-progress' | 'archived';
  imageUrl?: string;
  caseStudy?: {
    problem: string;
    solution: string;
    results: string[];
  };
}

export interface ExperienceItem {
  period: string;
  role: string;
  company: string;
  description: string;
  highlights: string[];
}

export interface Testimonial {
  quote: string;
  name: string;
  role: string;
  company: string;
}

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  status: 'draft' | 'published';
}

// New
export interface NavLink {
  label: string;
  href: string;
}

export interface HeroData {
  greeting: string;
  name: string;
  role: string;
  tagline: string;
  ctaLabel: string;
  ctaHref: string;
  resumeUrl?: string;
}

export interface SkillCategory {
  category: string;
  icon: string; // emoji icon for the category
  skills: string[];
}

export interface ContactFormData {
  name: string;
  email: string;
  projectType: string;
  message: string;
  _gotcha?: string;
}

export interface FormStatus {
  state: 'idle' | 'loading' | 'success' | 'error';
  message: string;
}

export interface AnimationConfig {
  initial: Record<string, number>;
  animate: Record<string, number>;
  transition: {
    duration: number;
    delay?: number;
    ease?: string;
  };
}
