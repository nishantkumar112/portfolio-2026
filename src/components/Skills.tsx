import {SkillCategory} from '@/types';
import {StaggerContainer, StaggerItem} from './StaggerContainer';
import FadeIn from './FadeIn';
import SectionWrapper from './SectionWrapper';
import SectionHeader from './SectionHeader';

// Replace the header div in each section with:

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

// Sub-component: renders one category card
function SkillCard({category, icon, skills}: SkillCategory) {
  return (
    <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl p-6 flex flex-col gap-4">
      {/* Card Header */}
      <div className="flex items-center gap-3">
        <span className="text-2xl" aria-hidden>
          {icon}
        </span>
        <h3 className="text-base font-semibold text-gray-900 dark:text-white">
          {category}
        </h3>
      </div>

      {/* Skill Badges */}
      <div className="flex flex-wrap gap-2">
        {skills.map((skill: string) => (
          <span
            key={skill}
            className="bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-sm font-medium px-3 py-1 rounded-lg"
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
    <SectionWrapper id="skills" className="bg-white dark:bg-gray-950">
      {/* Section Header */}
      <FadeIn direction="up">
        <SectionHeader
          title="Skills"
          subtitle="Technologies I work with day to day"
        />
      </FadeIn>

      <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {skillCategories.map((cat) => (
          <StaggerItem key={cat.category}>
            <SkillCard {...cat} />
          </StaggerItem>
        ))}
      </StaggerContainer>
    </SectionWrapper>
  );
}
