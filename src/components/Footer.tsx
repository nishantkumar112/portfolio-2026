export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="py-8 px-6 border-t border-gray-100 dark:border-gray-800 bg-white dark:bg-gray-950">
      <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2 text-sm text-gray-400">
        <p>© {year} Nishant Atras. All rights reserved.</p>
        <p>
          Built with{' '}
          <span className="text-gray-600 dark:text-gray-300 font-medium">
            Next.js & Tailwind
          </span>
        </p>
      </div>
    </footer>
  );
}
