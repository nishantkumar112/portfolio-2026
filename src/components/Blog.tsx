'use client';

import {blogPosts} from '@/data/blog';
import {ArrowRight, FileText} from 'lucide-react';
import FadeIn from './FadeIn';
import SectionHeader from './SectionHeader';
import SectionWrapper from './SectionWrapper';
import {StaggerContainer, StaggerItem} from './StaggerContainer';

export default function Blog() {
  return (
    <SectionWrapper id="blog" className="section-divider bg-gray-50/50 dark:bg-gray-900/30">
      <FadeIn direction="up">
        <SectionHeader
          title="Writing"
          subtitle="Deep dives on architecture, security, and shipping — articles coming soon"
        />
      </FadeIn>

      <StaggerContainer className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {blogPosts.map((post) => (
          <StaggerItem key={post.slug}>
            <article className="surface-transition group flex h-full flex-col rounded-2xl border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-gray-900/50">
              <div
                className="flex h-10 w-10 items-center justify-center rounded-xl bg-gray-100 text-gray-600 dark:bg-gray-800 dark:text-gray-400"
                aria-hidden
              >
                <FileText size={20} />
              </div>
              <span className="mt-4 inline-flex w-fit rounded-full bg-amber-50 px-2.5 py-0.5 text-xs font-medium text-amber-700 dark:bg-amber-950/50 dark:text-amber-400">
                {post.status === 'draft' ? 'Coming soon' : 'Published'}
              </span>
              <h3 className="mt-3 text-lg font-semibold text-gray-900 group-hover:text-blue-600 dark:text-white dark:group-hover:text-blue-400">
                {post.title}
              </h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-gray-600 dark:text-gray-400">
                {post.excerpt}
              </p>
              <div className="mt-4 flex items-center justify-between text-xs text-gray-500 dark:text-gray-400">
                <span>{post.date}</span>
                <span>{post.readTime}</span>
              </div>
              <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-gray-400">
                Notify me when live
                <ArrowRight size={14} className="opacity-50" aria-hidden />
              </span>
            </article>
          </StaggerItem>
        ))}
      </StaggerContainer>
    </SectionWrapper>
  );
}
