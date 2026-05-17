'use client';

import {motion} from 'framer-motion';
import {ArrowDown, Download} from 'lucide-react';
import {siteConfig} from '@/data/site';
import CalendlyCTA from './CalendlyCTA';
import FadeIn from './FadeIn';
import SocialStats from './SocialStats';

const heroData = {
  greeting: "Hi, I'm",
  name: siteConfig.name,
  role: siteConfig.title,
  tagline:
    'I partner with founders and teams to ship fast, secure web products — from MVP to production scale.',
  ctaLabel: 'View selected work',
  ctaHref: '#projects',
};

export default function Hero() {
  const {greeting, name, role, tagline, ctaLabel, ctaHref} = heroData;

  return (
    <section
      id="hero"
      className="hero-gradient relative flex min-h-screen items-center overflow-hidden pt-16"
    >
      <div
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"
        aria-hidden
      />

      <div className="relative mx-auto w-full max-w-5xl px-6 py-16 sm:py-24">
        <FadeIn delay={0} direction="up">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-green-200 bg-green-50/80 px-4 py-1.5 backdrop-blur-sm dark:border-green-800 dark:bg-green-950/50">
            <span className="h-2 w-2 animate-pulse rounded-full bg-green-500" />
            <span className="text-xs font-medium text-green-700 dark:text-green-400">
              Available for freelance & full-time
            </span>
          </div>
        </FadeIn>

        <FadeIn delay={0.1} direction="up">
          <h1 className="text-4xl font-bold leading-[1.08] tracking-tight text-gray-900 dark:text-white sm:text-5xl lg:text-7xl">
            {greeting}{' '}
            <span className="text-gradient">{name}</span>
          </h1>
        </FadeIn>

        <FadeIn delay={0.2} direction="up">
          <p className="mt-4 text-xl font-medium text-gray-600 dark:text-gray-300 sm:text-2xl">
            {role}
          </p>
        </FadeIn>

        <FadeIn delay={0.3} direction="up">
          <p className="mt-5 max-w-xl text-base leading-relaxed text-gray-600 dark:text-gray-400 sm:text-lg">
            {tagline}
          </p>
        </FadeIn>

        <FadeIn delay={0.4} direction="up">
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <a
              href={ctaHref}
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-blue-600 px-6 py-3.5 font-semibold text-white shadow-lg shadow-blue-600/20 transition-colors hover:bg-blue-700"
            >
              {ctaLabel}
              <span aria-hidden>→</span>
            </a>
            <CalendlyCTA />
            {siteConfig.resumeUrl && (
              <a
                href={siteConfig.resumeUrl}
                download="Nishant_Atras_Resume.pdf"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-gray-300 px-6 py-3.5 font-semibold text-gray-700 transition-colors hover:border-blue-600 hover:text-blue-600 dark:border-gray-700 dark:text-gray-300"
              >
                <Download size={18} aria-hidden />
                Resume
              </a>
            )}
          </div>
        </FadeIn>

        <FadeIn delay={0.45} direction="up">
          <dl className="mt-10 grid grid-cols-3 gap-4 border-y border-gray-200/80 py-6 dark:border-gray-800 sm:max-w-lg">
            {siteConfig.stats.map((stat) => (
              <div key={stat.label}>
                <dt className="text-xs text-gray-500 dark:text-gray-400">
                  {stat.label}
                </dt>
                <dd className="text-2xl font-bold text-gray-900 dark:text-white">
                  {stat.value}
                </dd>
              </div>
            ))}
          </dl>
        </FadeIn>

        <SocialStats />

        <motion.a
          href="#projects"
          className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 text-gray-400 transition-colors hover:text-blue-600 dark:hover:text-blue-400 md:flex"
          aria-label="Scroll to projects"
          initial={{opacity: 0, y: -8}}
          animate={{opacity: 1, y: 0}}
          transition={{delay: 1.2, duration: 0.5}}
        >
          <ArrowDown size={24} className="animate-bounce" />
        </motion.a>
      </div>
    </section>
  );
}
