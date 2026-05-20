'use client';

import {ReactNode} from 'react';

import {
  Code2,
  Database,
  Wrench,
  Globe,
  Layers3,
  Terminal,
  GitBranch,
  Server,
  Cloud,
  Box,
} from 'lucide-react';

import {SkillCategory} from '@/types';
import FadeIn from './FadeIn';
import SectionHeader from './SectionHeader';
import SectionWrapper from './SectionWrapper';
import {StaggerContainer, StaggerItem} from './StaggerContainer';

const skillCategories: SkillCategory[] = [
  {
    category: 'Languages',
    icon: <Code2 className="h-6 w-6 text-sky-500" />,
    skills: ['TypeScript', 'JavaScript', 'Python', 'HTML', 'CSS'],
  },
  {
    category: 'Frameworks & Libraries',
    icon: <Layers3 className="h-6 w-6 text-violet-500" />,
    skills: ['React', 'Next.js', 'Node.js', 'Express', 'Tailwind CSS'],
  },
  {
    category: 'Databases',
    icon: <Database className="h-6 w-6 text-emerald-500" />,
    skills: ['PostgreSQL', 'MongoDB', 'MySQL', 'Redis'],
  },
  {
    category: 'Tools & Platforms',
    icon: <Wrench className="h-6 w-6 text-amber-500" />,
    skills: ['Git', 'GitHub', 'Docker', 'Vercel', 'Linux'],
  },
];

const skillIcons: Record<string, ReactNode> = {
  TypeScript: <Code2 className="h-4 w-4" />,
  JavaScript: <Code2 className="h-4 w-4" />,
  Python: <Terminal className="h-4 w-4" />,
  HTML: <Globe className="h-4 w-4" />,
  CSS: <Globe className="h-4 w-4" />,

  React: <Layers3 className="h-4 w-4" />,
  'Next.js': <Layers3 className="h-4 w-4" />,
  'Node.js': <Server className="h-4 w-4" />,
  Express: <Server className="h-4 w-4" />,
  'Tailwind CSS': <Layers3 className="h-4 w-4" />,

  PostgreSQL: <Database className="h-4 w-4" />,
  MongoDB: <Database className="h-4 w-4" />,
  MySQL: <Database className="h-4 w-4" />,
  Redis: <Database className="h-4 w-4" />,

  Git: <GitBranch className="h-4 w-4" />,
  GitHub: <GitBranch className="h-4 w-4" />,
  Docker: <Box className="h-4 w-4" />,
  Vercel: <Cloud className="h-4 w-4" />,
  Linux: <Terminal className="h-4 w-4" />,
};

const allSkills = Array.from(
  new Set(skillCategories.flatMap((category) => category.skills)),
);

function SkillCard({category, icon, skills}: SkillCategory) {
  return (
    <div className="surface-transition rounded-2xl border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-800 dark:bg-gray-900/50">
      <div className="flex items-center gap-3">
        <div>{icon}</div>

        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
          {category}
        </h3>
      </div>

      <div className="mt-5 flex flex-wrap gap-3">
        {skills.map((skill) => (
          <div
            key={skill}
            className="flex items-center gap-2 rounded-xl bg-gray-100 px-3 py-2 text-sm font-medium text-gray-700 transition-all duration-200 hover:-translate-y-1 hover:bg-blue-50 hover:text-blue-700 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-blue-950/40 dark:hover:text-blue-300"
          >
            {skillIcons[skill]}

            <span>{skill}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function TechMarquee() {
  const marqueeItems = [...allSkills, ...allSkills];

  return (
    <div className="relative mt-14 overflow-hidden">
      <div
        className="pointer-events-none absolute left-0 top-0 z-10 h-full w-16 bg-gradient-to-r from-white to-transparent dark:from-gray-950"
        aria-hidden
      />

      <div
        className="pointer-events-none absolute right-0 top-0 z-10 h-full w-16 bg-gradient-to-l from-white to-transparent dark:from-gray-950"
        aria-hidden
      />

      <div className="flex animate-marquee gap-4 whitespace-nowrap">
        {marqueeItems.map((skill, index) => (
          <div
            key={`${skill}-${index}`}
            className="flex items-center gap-2 rounded-full border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-700 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-300"
          >
            {skillIcons[skill]}

            <span>{skill}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function Skills() {
  return (
    <SectionWrapper
      id="skills"
      className="section-divider bg-white dark:bg-gray-950"
    >
      <FadeIn direction="up">
        <SectionHeader
          title="Nishant Atras"
          subtitle="Technologies and tools I use to build scalable web applications"
        />
      </FadeIn>

      <StaggerContainer className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        {skillCategories.map((category) => (
          <StaggerItem key={category.category}>
            <SkillCard {...category} />
          </StaggerItem>
        ))}
      </StaggerContainer>

      <TechMarquee />
    </SectionWrapper>
  );
}
