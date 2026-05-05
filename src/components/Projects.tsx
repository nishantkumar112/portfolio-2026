'use client';

import {Project} from '@/types';
import {StaggerContainer, StaggerItem} from './StaggerContainer';
import FadeIn from './FadeIn';
import SectionWrapper from './SectionWrapper';
import SectionHeader from './SectionHeader';
import {motion} from 'framer-motion';
// Replace the header div in each section with:

// Your real project data lives here — update with your actual projects
const projects: Project[] = [
  {
    title: 'FinTrack',
    description:
      'Enterprise transaction management platform where employees submit requests, managers approve or reject them, and admins oversee the entire organisation. Built to simulate a real production workflow — not a tutorial clone.',
    outcome:
      'Handles multi-role approval pipelines across three user tiers with full access isolation between roles',
    role: 'Solo — full-stack',
    highlight:
      'Designed a role-based access control system from scratch using Spring Security and JWT — each API route and frontend page resolves permissions from the token claims, so a manager can never access admin endpoints even with a modified request',
    techStack: [
      'React',
      'TypeScript',
      'Tailwind CSS',
      'Spring Boot',
      'Spring Security',
      'JWT',
      'PostgreSQL',
    ],
    status: 'live' as const,
    githubUrl: 'https://github.com/nishantkumar112/fintrack',
    liveUrl: 'https://fintrack-sable-two.vercel.app/login',
  },
  {
    title: 'MediTrack',
    description:
      'Full-stack health monitoring platform for managing family medication schedules, health records, and automated reminders. Users can track vitals for multiple family members and receive SMS or email alerts before missed doses — solving the real problem of medication non-adherence for families managing chronic conditions.',
    outcome:
      'Automated reminder pipeline delivers SMS and email notifications via Twilio and SMTP, with per-reminder status tracking across sent, missed, and completed states',
    role: 'Solo — full-stack',
    highlight:
      'Built a multi-factor auth flow using Redis to store time-expiring OTPs — sensitive operations require a second verification step, and the OTP is invalidated immediately after use to prevent replay attacks',
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
    status: 'in-progress' as const,
    githubUrl: 'https://github.com/nishantkumar112/meditrack',
    liveUrl: 'https://meditrack-3ep9.vercel.app/',
  },
  {
    title: 'Mind Companion',
    description:
      'Mental wellness chatbot that creates a safe space for genuine conversations about emotional health. Users enter through mood-based entry points so the AI context is personalised from the first message — not a generic chat prompt. Built because most wellness apps feel clinical; this one is designed to feel like talking to someone who actually listens.',
    outcome:
      'Generates a personalised AI summary every 5 interactions, helping users spot emotional patterns in their conversations over time',
    role: 'Solo — full-stack',
    highlight:
      "Integrated Meta's LLaMA model via OpenRouter to keep the AI layer swappable — if a better open-source model ships tomorrow, it's a one-line config change rather than a rewrite",
    techStack: ['React', 'Vite', 'Tailwind CSS', 'OpenRouter', 'Meta LLaMA'],
    status: 'live' as const,
    githubUrl: 'https://github.com/nishantkumar112/mind-companion',
    liveUrl: 'https://mind-companion.vercel.app',
  },
];

export default function Projects() {
  return (
    <SectionWrapper id="projects" className="bg-white dark:bg-gray-950">
      {/* Section Header */}
      <FadeIn direction="up">
        <SectionHeader
          title="Projects"
          subtitle="Things I've built while learning and solving real problems"
        />
      </FadeIn>

      <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project) => (
          <StaggerItem key={project.title}>
            <ProjectCard {...project} />
          </StaggerItem>
        ))}
      </StaggerContainer>
    </SectionWrapper>
  );
}

const statusStyles = {
  live: {dot: 'bg-green-500', text: 'Live'},
  'in-progress': {dot: 'bg-amber-400', text: 'In Progress'},
  archived: {dot: 'bg-gray-400', text: 'Archived'},
};

function ProjectCard({
  title,
  description,
  techStack,
  liveUrl,
  githubUrl,
  outcome,
  role,
  highlight,
  status,
}: Project) {
  const badge = status ? statusStyles[status] : null;

  return (
    <motion.div
      whileHover={{y: -4, transition: {duration: 0.2}}}
      className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl p-6 flex flex-col gap-4 hover:shadow-lg transition-shadow h-full"
    >
      {/* Header row */}
      <div className="flex items-start justify-between gap-3">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white leading-tight">
          {title}
        </h3>
        {badge && (
          <span className="flex items-center gap-1.5 shrink-0 text-xs font-medium text-gray-500 dark:text-gray-400 mt-0.5">
            <span className={`w-1.5 h-1.5 rounded-full ${badge.dot}`} />
            {badge.text}
          </span>
        )}
      </div>

      {/* Role tag */}
      {role && (
        <span className="self-start text-xs font-medium bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 px-2.5 py-1 rounded-md">
          {role}
        </span>
      )}

      {/* Description */}
      <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
        {description}
      </p>

      {/* Technical highlight */}
      {highlight && (
        <div className="bg-blue-50 dark:bg-blue-950/50 border border-blue-100 dark:border-blue-900 rounded-xl px-4 py-3">
          <p className="text-xs font-semibold text-blue-700 dark:text-blue-400 mb-1">
            Technical highlight
          </p>
          <p className="text-xs text-blue-600 dark:text-blue-300 leading-relaxed">
            {highlight}
          </p>
        </div>
      )}

      {/* Outcome metric */}
      {outcome && (
        <div className="flex items-start gap-2">
          <span className="text-green-500 mt-0.5 text-sm">↑</span>
          <p className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed">
            {outcome}
          </p>
        </div>
      )}

      {/* Tech stack */}
      <div className="flex flex-wrap gap-2 mt-auto pt-2">
        {techStack.map((tech) => (
          <span
            key={tech}
            className="bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 text-xs font-medium px-2.5 py-1 rounded-md"
          >
            {tech}
          </span>
        ))}
      </div>

      {/* Links */}
      <div className="flex gap-4 pt-1 border-t border-gray-100 dark:border-gray-700">
        {githubUrl && (
          <a
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
          >
            GitHub →
          </a>
        )}
        {liveUrl && (
          <a
            href={liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium text-blue-600 hover:underline"
          >
            Live Demo →
          </a>
        )}
      </div>
    </motion.div>
  );
}
