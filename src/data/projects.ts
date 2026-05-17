import type {Project} from '@/types';

export const projects: Project[] = [
  {
    slug: 'fintrack',
    title: 'FinTrack',
    description:
      'Enterprise transaction management platform where employees submit requests, managers approve or reject them, and admins oversee the entire organisation.',
    outcome:
      'Handles multi-role approval pipelines across three user tiers with full access isolation between roles',
    role: 'Solo — full-stack',
    highlight:
      'Designed RBAC from scratch using Spring Security and JWT — each route resolves permissions from token claims',
    techStack: [
      'React',
      'TypeScript',
      'Tailwind CSS',
      'Spring Boot',
      'Spring Security',
      'JWT',
      'PostgreSQL',
    ],
    status: 'live',
    githubUrl: 'https://github.com/nishantkumar112/fintrack',
    liveUrl: 'https://fintrack-sable-two.vercel.app/login',
    caseStudy: {
      problem:
        'Teams needed a transparent approval workflow without email chains or spreadsheet chaos.',
      solution:
        'Built a three-tier role system with isolated dashboards, audit-friendly status tracking, and secure API boundaries.',
      results: [
        'End-to-end approval flow across employee, manager, and admin roles',
        'JWT claims drive both API and UI permission gates',
        'Production-style deployment on Vercel + containerised backend',
      ],
    },
  },
  {
    slug: 'meditrack',
    title: 'MediTrack',
    description:
      'Health monitoring platform for family medication schedules, records, and automated SMS/email reminders.',
    outcome:
      'Automated reminder pipeline with per-reminder status tracking across sent, missed, and completed states',
    role: 'Solo — full-stack',
    highlight:
      'Multi-factor auth flow using Redis for time-expiring OTPs — invalidated immediately after use',
    techStack: [
      'React',
      'Spring Boot',
      'Spring Security',
      'JWT',
      'PostgreSQL',
      'Redis',
      'Twilio',
      'Docker',
    ],
    status: 'in-progress',
    githubUrl: 'https://github.com/nishantkumar112/meditrack',
    liveUrl: 'https://meditrack-3ep9.vercel.app/',
    caseStudy: {
      problem:
        'Families managing chronic conditions miss doses because reminders are fragmented across apps.',
      solution:
        'Unified vitals + medication scheduling with Twilio/SMTP notifications and MFA for sensitive actions.',
      results: [
        'Per-member health profiles with reminder history',
        'OTP stored in Redis with strict TTL and single-use semantics',
        'Dockerised services for consistent local and deploy environments',
      ],
    },
  },
  {
    slug: 'mind-companion',
    title: 'Mind Companion',
    description:
      'Mental wellness chatbot with mood-based entry points so AI context feels personal from the first message.',
    outcome:
      'Personalised AI summary every 5 interactions to surface emotional patterns over time',
    role: 'Solo — full-stack',
    highlight:
      "LLaMA via OpenRouter — swappable model config without rewriting the chat layer",
    techStack: ['React', 'Vite', 'Tailwind CSS', 'OpenRouter', 'Meta LLaMA'],
    status: 'live',
    githubUrl: 'https://github.com/nishantkumar112/mind-companion',
    liveUrl: 'https://mind-companion.vercel.app',
    caseStudy: {
      problem:
        'Most wellness apps feel clinical; users want conversations that feel human and context-aware.',
      solution:
        'Mood-first onboarding feeds the model context; periodic summaries help users reflect on patterns.',
      results: [
        'Deployed live on Vercel with responsive, accessible chat UI',
        'Provider-agnostic AI layer via OpenRouter',
        'Engagement loop through interaction-based summaries',
      ],
    },
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}
