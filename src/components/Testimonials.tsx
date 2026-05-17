'use client';

import {testimonials} from '@/data/testimonials';
import {Quote} from 'lucide-react';
import FadeIn from './FadeIn';
import SectionHeader from './SectionHeader';
import SectionWrapper from './SectionWrapper';
import {StaggerContainer, StaggerItem} from './StaggerContainer';

export default function Testimonials() {
  return (
    <SectionWrapper id="testimonials" className="section-divider bg-white dark:bg-gray-950">
      <FadeIn direction="up">
        <SectionHeader
          title="What Clients Say"
          subtitle="Trusted by teams who care about quality and communication"
        />
      </FadeIn>

      <StaggerContainer className="grid grid-cols-1 gap-6 md:grid-cols-3">
        {testimonials.map((t) => (
          <StaggerItem key={t.name}>
            <figure className="surface-transition flex h-full flex-col rounded-2xl border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-gray-900/50">
              <Quote
                className="h-8 w-8 text-blue-200 dark:text-blue-900"
                aria-hidden
              />
              <blockquote className="mt-4 flex-1 text-sm leading-relaxed text-gray-600 dark:text-gray-400">
                &ldquo;{t.quote}&rdquo;
              </blockquote>
              <figcaption className="mt-6 border-t border-gray-100 pt-4 dark:border-gray-800">
                <p className="text-sm font-semibold text-gray-900 dark:text-white">
                  {t.name}
                </p>
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  {t.role} · {t.company}
                </p>
              </figcaption>
            </figure>
          </StaggerItem>
        ))}
      </StaggerContainer>
    </SectionWrapper>
  );
}
