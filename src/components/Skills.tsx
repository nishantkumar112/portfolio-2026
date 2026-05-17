'use client';

import {SkillCategory} from '@/types';
import FadeIn from './FadeIn';
import SectionHeader from './SectionHeader';
import SectionWrapper from './SectionWrapper';
import {StaggerContainer, StaggerItem} from './StaggerContainer';

const skillCategories: SkillCategory[] = [
  {
    category: 'Languages',
    icon: '💬',
    skills: ['TypeScript', 'JavaScript', 'Python', 'HTML', 'CSS'],
  },
  {
    category: 'Frameworks & Libraries',
    icon: '⚙️',
    skills: ['React', 'Next.js', 'Node.js', 'Express', 'Tailwind CSS'],
  },
  {
    category: 'Databases',
    icon: '🗄️',
    skills: ['PostgreSQL', 'MongoDB', 'MySQL', 'Redis'],
  },
  {
    category: 'Tools & Platforms',
    icon: '🛠️',
    skills: ['Git', 'GitHub', 'Docker', 'Vercel', 'Linux'],
  },
];

const allSkills = [...new Set(skillCategories.flatMap((c) => c.skills))];

function SkillCard({category, icon, skills}: SkillCategory) {
  return (
    <div className="surface-transition rounded-2xl border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-gray-900/50">
      <div className="flex items-center gap-3">
        <span className="text-2xl" aria-hidden>
          {icon}
        </span>
        <h3 className="text-base font-semibold text-gray-900 dark:text-white">
          {category}
        </h3>
      </div>
      <div className="mt-4 flex flex-wrap gap-2">
        {skills.map((skill) => (
          <span
            key={skill}
            className="rounded-lg bg-gray-100 px-3 py-1 text-sm font-medium text-gray-700 transition-colors hover:bg-blue-50 hover:text-blue-700 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-blue-950/50 dark:hover:text-blue-300"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
}

function TechMarquee() {
  const items = [...allSkills, ...allSkills];

  return (
    <div className="relative mt-12 overflow-hidden">
      <div
        className="pointer-events-none absolute left-0 top-0 z-10 h-full w-16 bg-gradient-to-r from-white to-transparent dark:from-gray-950"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute right-0 top-0 z-10 h-full w-16 bg-gradient-to-l from-white to-transparent dark:from-gray-950"
        aria-hidden
      />
      <div className="flex animate-marquee gap-3 whitespace-nowrap">
        {items.map((skill, i) => (
          <span
            key={`${skill}-${i}`}
            className="rounded-full border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-700 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-300"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
}

export default function Skills() {
  return (
    <SectionWrapper id="skills" className="section-divider bg-white dark:bg-gray-950">
      <FadeIn direction="up">
        <SectionHeader
          title="Tech Stack"
          subtitle="Tools I use to ship reliable, maintainable products"
        />
      </FadeIn>

      <StaggerContainer className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        {skillCategories.map((cat) => (
          <StaggerItem key={cat.category}>
            <SkillCard {...cat} />
          </StaggerItem>
        ))}
      </StaggerContainer>

      <TechMarquee />
    </SectionWrapper>
  );
}
