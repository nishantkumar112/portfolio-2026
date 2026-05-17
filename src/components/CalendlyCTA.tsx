import {Calendar} from 'lucide-react';
import {siteConfig} from '@/data/site';

interface CalendlyCTAProps {
  variant?: 'inline' | 'card';
  className?: string;
}

export default function CalendlyCTA({
  variant = 'inline',
  className = '',
}: CalendlyCTAProps) {
  if (variant === 'card') {
    return (
      <aside
        className={`surface-transition rounded-2xl border border-blue-100 bg-gradient-to-br from-blue-50 to-indigo-50 p-6 dark:border-blue-900/50 dark:from-blue-950/40 dark:to-indigo-950/30 ${className}`}
      >
        <div
          className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-600 text-white"
          aria-hidden
        >
          <Calendar size={22} />
        </div>
        <h3 className="mt-4 text-lg font-semibold text-gray-900 dark:text-white">
          Prefer a quick call?
        </h3>
        <p className="mt-2 text-sm leading-relaxed text-gray-600 dark:text-gray-400">
          Book a free 30-minute discovery call. No pressure — just scope, timeline,
          and fit.
        </p>
        <a
          href={siteConfig.calendlyUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-xl border border-blue-200 bg-white px-5 py-3 text-sm font-semibold text-blue-700 transition-colors hover:bg-blue-50 dark:border-blue-800 dark:bg-gray-900 dark:text-blue-300 dark:hover:bg-gray-800"
        >
          <Calendar size={18} aria-hidden />
          Schedule a call
        </a>
      </aside>
    );
  }

  return (
    <a
      href={siteConfig.calendlyUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center justify-center gap-2 rounded-xl border border-gray-300 px-6 py-3 font-semibold text-gray-700 transition-colors hover:border-blue-600 hover:text-blue-600 dark:border-gray-700 dark:text-gray-300 dark:hover:border-blue-500 dark:hover:text-blue-400 ${className}`}
    >
      <Calendar size={18} aria-hidden />
      Book a call
    </a>
  );
}
