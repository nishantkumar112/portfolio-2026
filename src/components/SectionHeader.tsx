interface SectionHeaderProps {
  title: string;
  subtitle: string;
}

export default function SectionHeader({title, subtitle}: SectionHeaderProps) {
  return (
    <div className="mb-10 sm:mb-12 text-center">
      <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white">
        {title}
      </h2>
      <p className="mt-3 text-gray-500 dark:text-gray-400 text-sm sm:text-base">
        {subtitle}
      </p>
    </div>
  );
}
