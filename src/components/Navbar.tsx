'use client';

import {useEffect, useState} from 'react';
import {navLinks, siteConfig} from '@/data/site';
import {useActiveSection} from '@/hooks/useActiveSection';
import ThemeToggle from './ThemeToggle';

const sectionIds = navLinks.map((l) => l.href.replace('#', ''));

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const activeSection = useActiveSection(sectionIds);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', onScroll, {passive: true});
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    if (!menuOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setMenuOpen(false);
    };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [menuOpen]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  return (
    <>
      {menuOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/20 backdrop-blur-sm md:hidden"
          onClick={() => setMenuOpen(false)}
          aria-hidden="true"
        />
      )}

      <header
        className={`surface-transition fixed left-0 right-0 top-0 z-50 border-b border-gray-100/80 bg-white/85 backdrop-blur-md dark:border-gray-800/80 dark:bg-gray-950/85 ${
          scrolled ? 'shadow-sm shadow-gray-200/50 dark:shadow-none' : ''
        }`}
      >
        <nav
          className="mx-auto flex h-16 max-w-5xl items-center justify-between px-6"
          aria-label="Main navigation"
        >
          <a
            href="#hero"
            aria-label="Homepage"
            className="text-lg font-bold tracking-tight text-gray-900 transition-colors hover:text-blue-600 dark:text-white"
          >
            NishantAtras
            <span className="text-blue-600">.</span>dev
          </a>

          <div className="flex items-center gap-2 sm:gap-3">
            <ul className="hidden items-center gap-1 md:flex" role="list">
              {navLinks.map((link) => {
                const id = link.href.replace('#', '');
                const isActive = activeSection === id;
                return (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      className={`rounded-lg px-3 py-2 text-sm font-medium transition-colors ${
                        isActive
                          ? 'bg-blue-50 text-blue-700 dark:bg-blue-950/50 dark:text-blue-300'
                          : 'text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400'
                      }`}
                      aria-current={isActive ? 'true' : undefined}
                    >
                      {link.label}
                    </a>
                  </li>
                );
              })}
            </ul>

            <a
              href={siteConfig.calendlyUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden rounded-lg bg-blue-600 px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-blue-700 sm:inline-flex"
            >
              Hire me
            </a>

            <ThemeToggle />

            <button
              type="button"
              className="flex flex-col gap-1.5 rounded-lg p-2 transition-colors hover:bg-gray-100 dark:hover:bg-gray-800 md:hidden"
              onClick={() => setMenuOpen((prev) => !prev)}
              aria-label={menuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={menuOpen}
              aria-controls="mobile-menu"
            >
              <span
                className={`block h-0.5 w-6 bg-gray-700 transition-transform duration-200 dark:bg-gray-300 ${
                  menuOpen ? 'translate-y-2 rotate-45' : ''
                }`}
              />
              <span
                className={`block h-0.5 w-6 bg-gray-700 transition-opacity duration-200 dark:bg-gray-300 ${
                  menuOpen ? 'opacity-0' : ''
                }`}
              />
              <span
                className={`block h-0.5 w-6 bg-gray-700 transition-transform duration-200 dark:bg-gray-300 ${
                  menuOpen ? '-translate-y-2 -rotate-45' : ''
                }`}
              />
            </button>
          </div>
        </nav>

        <div
          id="mobile-menu"
          className={`overflow-hidden transition-all duration-300 ease-in-out md:hidden ${
            menuOpen ? 'max-h-[28rem] opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="flex flex-col gap-1 border-t border-gray-100 bg-white px-4 py-4 dark:border-gray-800 dark:bg-gray-950">
            {navLinks.map((link) => {
              const id = link.href.replace('#', '');
              const isActive = activeSection === id;
              return (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className={`rounded-lg px-3 py-2.5 text-sm font-medium ${
                    isActive
                      ? 'bg-blue-50 text-blue-700 dark:bg-blue-950/50 dark:text-blue-300'
                      : 'text-gray-700 dark:text-gray-300'
                  }`}
                >
                  {link.label}
                </a>
              );
            })}
            <a
              href={siteConfig.calendlyUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 rounded-xl bg-blue-600 px-4 py-3 text-center text-sm font-semibold text-white"
            >
              Book a discovery call
            </a>
          </div>
        </div>
      </header>
    </>
  );
}
