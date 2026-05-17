'use client';

import Link from 'next/link';
import {motion} from 'framer-motion';
import {projects} from '@/data/projects';
import type {Project} from '@/types';
import FadeIn from './FadeIn';
import SectionHeader from './SectionHeader';
import SectionWrapper from './SectionWrapper';
import {StaggerContainer, StaggerItem} from './StaggerContainer';

const statusStyles = {
  live: {dot: 'bg-green-500', text: 'Live'},
  'in-progress': {dot: 'bg-amber-400', text: 'In Progress'},
  archived: {dot: 'bg-gray-400', text: 'Archived'},
};

export default function Projects() {
  return (
    <SectionWrapper id="projects" className="bg-white dark:bg-gray-950">
      <FadeIn direction="up">
        <SectionHeader
          title="Selected Work"
          subtitle="Production-style builds with measurable outcomes — click any project for the full case study"
        />
      </FadeIn>

      <StaggerContainer className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        {projects.map((project) => (
          <StaggerItem key={project.slug}>
            <ProjectCard {...project} />
          </StaggerItem>
        ))}
      </StaggerContainer>
    </SectionWrapper>
  );
}

function ProjectCard({
  slug,
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
    <motion.article
      whileHover={{y: -4, transition: {duration: 0.2}}}
      className="surface-transition flex h-full flex-col gap-4 rounded-2xl border border-gray-200 bg-white p-6 hover:shadow-lg dark:border-gray-800 dark:bg-gray-900/50"
    >
      <div className="flex items-start justify-between gap-3">
        <h3 className="text-xl font-semibold leading-tight text-gray-900 dark:text-white">
          {title}
        </h3>
        {badge && (
          <span className="mt-0.5 flex shrink-0 items-center gap-1.5 text-xs font-medium text-gray-500 dark:text-gray-400">
            <span className={`h-1.5 w-1.5 rounded-full ${badge.dot}`} />
            {badge.text}
          </span>
        )}
      </div>

      {role && (
        <span className="self-start rounded-md bg-gray-100 px-2.5 py-1 text-xs font-medium text-gray-600 dark:bg-gray-800 dark:text-gray-300">
          {role}
        </span>
      )}

      <p className="text-sm leading-relaxed text-gray-600 dark:text-gray-400">
        {description}
      </p>

      {highlight && (
        <div className="rounded-xl border border-blue-100 bg-blue-50/80 px-4 py-3 dark:border-blue-900/50 dark:bg-blue-950/40">
          <p className="mb-1 text-xs font-semibold text-blue-700 dark:text-blue-400">
            Technical highlight
          </p>
          <p className="text-xs leading-relaxed text-blue-600 dark:text-blue-300">
            {highlight}
          </p>
        </div>
      )}

      {outcome && (
        <div className="flex items-start gap-2">
          <span className="mt-0.5 text-sm text-green-500" aria-hidden>
            ↑
          </span>
          <p className="text-xs leading-relaxed text-gray-600 dark:text-gray-400">
            {outcome}
          </p>
        </div>
      )}

      <div className="mt-auto flex flex-wrap gap-2 pt-2">
        {techStack.slice(0, 5).map((tech) => (
          <span
            key={tech}
            className="rounded-md bg-gray-100 px-2.5 py-1 text-xs font-medium text-gray-600 dark:bg-gray-800 dark:text-gray-300"
          >
            {tech}
          </span>
        ))}
        {techStack.length > 5 && (
          <span className="rounded-md bg-gray-100 px-2.5 py-1 text-xs text-gray-500 dark:bg-gray-800">
            +{techStack.length - 5}
          </span>
        )}
      </div>

      <div className="flex flex-wrap items-center gap-4 border-t border-gray-100 pt-4 dark:border-gray-800">
        <Link
          href={`/projects/${slug}`}
          className="text-sm font-semibold text-blue-600 hover:underline dark:text-blue-400"
        >
          Case study →
        </Link>
        {githubUrl && (
          <a
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium text-gray-500 transition-colors hover:text-blue-600 dark:text-gray-400"
          >
            GitHub
          </a>
        )}
        {liveUrl && (
          <a
            href={liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium text-gray-500 transition-colors hover:text-blue-600 dark:text-gray-400"
          >
            Live demo
          </a>
        )}
      </div>
    </motion.article>
  );
}
