export interface Project {
  title: string;
  description: string;
  techStack: string[];
  liveUrl?: string;
  githubUrl?: string;

  // Add these
  outcome?: string; // the "so what" — metric, users, impact
  role?: string; // Solo, Frontend Lead, Full-Stack, etc.
  highlight?: string; // one technically interesting thing you solved
  status?: 'live' | 'in-progress' | 'archived';
  imageUrl?: string; // screenshot or demo GIF
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
  message: string;
  _gotcha?: string; // honeypot field
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
