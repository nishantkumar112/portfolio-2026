import Link from 'next/link';
import {GitBranch, Mail, Share2} from 'lucide-react';
import {navLinks, siteConfig} from '@/data/site';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-gray-100 bg-white px-6 py-12 dark:border-gray-800 dark:bg-gray-950">
      <div className="mx-auto max-w-5xl">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-2">
            <p className="text-lg font-bold text-gray-900 dark:text-white">
              NishantAtras<span className="text-blue-600">.</span>dev
            </p>
            <p className="mt-2 max-w-sm text-sm leading-relaxed text-gray-500 dark:text-gray-400">
              Full-stack developer helping teams ship secure, polished web
              products. Based remotely, working worldwide.
            </p>
            <a
              href={siteConfig.calendlyUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex rounded-lg bg-blue-600 px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-blue-700"
            >
              Book a call
            </a>
          </div>

          <div>
            <p className="text-sm font-semibold text-gray-900 dark:text-white">
              Navigate
            </p>
            <ul className="mt-3 space-y-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-gray-500 transition-colors hover:text-blue-600 dark:text-gray-400"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li>
                <Link
                  href="/#blog"
                  className="text-sm text-gray-500 transition-colors hover:text-blue-600 dark:text-gray-400"
                >
                  Writing
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <p className="text-sm font-semibold text-gray-900 dark:text-white">
              Connect
            </p>
            <ul className="mt-3 space-y-2">
              <li>
                <a
                  href={`https://github.com/${siteConfig.githubUsername}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-blue-600 dark:text-gray-400"
                >
                  <GitBranch size={16} aria-hidden />
                  GitHub
                </a>
              </li>
              <li>
                <a
                  href={siteConfig.linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-blue-600 dark:text-gray-400"
                >
                  <Share2 size={16} aria-hidden />
                  LinkedIn
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-blue-600 dark:text-gray-400"
                >
                  <Mail size={16} aria-hidden />
                  Email
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-2 border-t border-gray-100 pt-8 text-sm text-gray-400 dark:border-gray-800 sm:flex-row">
          <p>© {year} {siteConfig.name}. All rights reserved.</p>
          <p>
            Built with{' '}
            <span className="font-medium text-gray-600 dark:text-gray-300">
              Next.js & Tailwind
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
}
