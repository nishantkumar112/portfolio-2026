'use client';

import {useEffect, useState} from 'react';

import {NavLink} from '@/types';

import ThemeToggle from './ThemeToggle';

const navLinks: NavLink[] = [
  {label: 'About', href: '#hero'},
  {label: 'Projects', href: '#projects'},
  {label: 'Skills', href: '#skills'},
  {label: 'Contact', href: '#contact'},
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Add navbar shadow on scroll
  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', onScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  }, []);

  // Close mobile menu on Escape
  useEffect(() => {
    if (!menuOpen) return;

    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setMenuOpen(false);
      }
    };

    document.addEventListener('keydown', onKey);

    return () => {
      document.removeEventListener('keydown', onKey);
    };
  }, [menuOpen]);

  return (
    <>
      {/* Mobile Backdrop */}
      {menuOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/20 backdrop-blur-sm md:hidden"
          onClick={() => setMenuOpen(false)}
          aria-hidden="true"
        />
      )}

      <header
        className={`fixed left-0 right-0 top-0 z-50 border-b border-gray-100 bg-white/80 backdrop-blur-md transition-shadow dark:border-gray-800 dark:bg-gray-950/80 ${
          scrolled ? 'shadow-sm' : ''
        }`}
      >
        <nav className="mx-auto flex h-16 max-w-5xl items-center justify-between px-6">
          {/* Logo */}
          <a
            href="#hero"
            aria-label="Homepage"
            className="text-lg font-bold tracking-tight text-gray-900 transition-colors hover:text-blue-600 dark:text-white"
          >
            NishantAtras
            <span className="text-blue-600">.</span>
            dev
          </a>

          {/* Right Side Controls */}
          <div className="flex items-center gap-3">
            {/* Desktop Navigation */}
            <ul className="hidden items-center gap-8 md:flex" role="list">
              {navLinks.map((link: NavLink) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm font-medium text-gray-600 transition-colors hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>

            {/* Theme Toggle */}
            <ThemeToggle />

            {/* Mobile Hamburger */}
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

        {/* Mobile Menu */}
        <div
          id="mobile-menu"
          className={`overflow-hidden transition-all duration-300 ease-in-out md:hidden ${
            menuOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="flex flex-col gap-4 border-t border-gray-100 bg-white px-6 py-4 dark:border-gray-800 dark:bg-gray-950">
            {navLinks.map((link: NavLink) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="text-sm font-medium text-gray-700 transition-colors hover:text-blue-600 dark:text-gray-300"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </header>
    </>
  );
}
