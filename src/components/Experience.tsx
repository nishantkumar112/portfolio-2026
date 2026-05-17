'use client';

import {experience} from '@/data/experience';
import FadeIn from './FadeIn';
import SectionHeader from './SectionHeader';
import SectionWrapper from './SectionWrapper';
import {StaggerContainer, StaggerItem} from './StaggerContainer';

export default function Experience() {
  return (
    <SectionWrapper
      id="experience"
      className="section-divider bg-gray-50/50 dark:bg-gray-900/30"
    >
      <FadeIn direction="up">
        <SectionHeader
          title="Experience"
          subtitle="How I've grown from learning to shipping production-quality software"
        />
      </FadeIn>

      <StaggerContainer className="relative mx-auto max-w-2xl">
        <div
          className="absolute left-[7px] top-2 bottom-2 w-px bg-gradient-to-b from-blue-500 via-blue-300 to-transparent dark:from-blue-600 dark:via-blue-900"
          aria-hidden
        />
        {experience.map((item, index) => (
          <StaggerItem key={item.period}>
            <article className="relative pb-10 pl-8 last:pb-0">
              <span
                className="absolute left-0 top-1.5 h-3.5 w-3.5 rounded-full border-2 border-white bg-blue-600 shadow-sm dark:border-gray-950"
                aria-hidden
              />
              <time className="text-xs font-semibold uppercase tracking-wider text-blue-600 dark:text-blue-400">
                {item.period}
              </time>
              <h3 className="mt-1 text-lg font-semibold text-gray-900 dark:text-white">
                {item.role}
              </h3>
              <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
                {item.company}
              </p>
              <p className="mt-2 text-sm leading-relaxed text-gray-600 dark:text-gray-400">
                {item.description}
              </p>
              {item.highlights.length > 0 && (
                <ul className="mt-3 space-y-1.5">
                  {item.highlights.map((h) => (
                    <li
                      key={h}
                      className="flex gap-2 text-sm text-gray-600 dark:text-gray-400"
                    >
                      <span className="text-blue-500" aria-hidden>
                        •
                      </span>
                      {h}
                    </li>
                  ))}
                </ul>
              )}
              {index < experience.length - 1 && (
                <span className="sr-only">Next entry</span>
              )}
            </article>
          </StaggerItem>
        ))}
      </StaggerContainer>
    </SectionWrapper>
  );
}
