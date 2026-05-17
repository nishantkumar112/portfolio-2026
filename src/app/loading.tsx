export default function Loading() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-950">
      <div className="mx-auto max-w-5xl animate-pulse px-6 pt-24">
        <div className="h-4 w-32 rounded-full bg-gray-200 dark:bg-gray-800" />
        <div className="mt-6 h-12 w-3/4 max-w-lg rounded-xl bg-gray-200 dark:bg-gray-800" />
        <div className="mt-4 h-6 w-1/2 rounded-lg bg-gray-100 dark:bg-gray-800/80" />
        <div className="mt-8 flex gap-3">
          <div className="h-12 w-36 rounded-xl bg-gray-200 dark:bg-gray-800" />
          <div className="h-12 w-36 rounded-xl bg-gray-100 dark:bg-gray-800/80" />
        </div>
        <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {[1, 2, 3].map((i) => (
            <div key={i} className="h-64 rounded-2xl bg-gray-100 dark:bg-gray-800" />
          ))}
        </div>
      </div>
    </div>
  );
}
