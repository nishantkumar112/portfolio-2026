'use client';

import {useEffect} from 'react';

export default function Error({
  error,
  reset,
}: {
  error: Error & {digest?: string};
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-black text-white px-6">
      <h1 className="text-4xl font-bold mb-4">Something went wrong</h1>

      <p className="text-gray-400 mb-6 text-center max-w-md">
        An unexpected error occurred while loading this page.
      </p>

      <button
        onClick={() => reset()}
        className="rounded-lg bg-white text-black px-5 py-2 font-medium"
      >
        Try Again
      </button>
    </div>
  );
}
