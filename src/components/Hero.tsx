import {HeroData} from '@/types';
import FadeIn from './FadeIn';
import {Download} from 'lucide-react';

const heroData: HeroData = {
  greeting: "Hi, I'm",
  name: 'Nishant Atras',
  role: 'Full-Stack Developer',
  tagline:
    'I build clean, fast, and user-friendly web applications. Currently open to full-time roles and freelance projects.',
  ctaLabel: 'View My Work',
  ctaHref: '#projects',
  resumeUrl: '/resume.pdf', // put your resume in /public/resume.pdf
};
// src/components/Hero.tsx

export default function Hero() {
  const {greeting, name, role, tagline, ctaLabel, ctaHref, resumeUrl} =
    heroData;

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center pt-16 px-6 bg-white dark:bg-gray-950"
    >
      <div className="max-w-5xl mx-auto w-full py-16 sm:py-24">
        <FadeIn delay={0} direction="up">
          <div className="inline-flex items-center gap-2 bg-green-50 dark:bg-green-950 border border-green-200 dark:border-green-800 rounded-full px-4 py-1.5 mb-6">
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            <span className="text-xs font-medium text-green-700 dark:text-green-400">
              Available for opportunities
            </span>
          </div>
        </FadeIn>

        <FadeIn delay={0.1} direction="up">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900 dark:text-white leading-[1.1]">
            {greeting} <span className="text-blue-600">{name}</span>
          </h1>
        </FadeIn>

        <FadeIn delay={0.2} direction="up">
          <p className="mt-3 text-lg sm:text-xl font-medium text-gray-500 dark:text-gray-400">
            {role}
          </p>
        </FadeIn>

        <FadeIn delay={0.3} direction="up">
          <p className="mt-4 text-base sm:text-lg text-gray-600 dark:text-gray-400 max-w-lg leading-relaxed">
            {tagline}
          </p>
        </FadeIn>

        <FadeIn delay={0.4} direction="up">
          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <a
              href={ctaHref}
              className="inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-xl transition-colors"
            >
              {ctaLabel} <span aria-hidden>→</span>
            </a>
            {resumeUrl && (
              <a
                href={resumeUrl}
                download="Nishant_Atras_Resume.pdf"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-gray-300 px-6 py-3 font-semibold text-gray-700 transition-colors hover:border-blue-600 hover:text-blue-600 dark:border-gray-700 dark:text-gray-300"
              >
                <Download size={18} />
                Resume
              </a>
            )}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
