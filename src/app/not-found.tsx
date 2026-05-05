import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center">
      <h1 className="text-5xl font-bold mb-4">404</h1>

      <p className="mb-6 text-gray-500">Page not found</p>

      <Link href="/" className="rounded bg-black text-white px-4 py-2">
        Go Home
      </Link>
    </div>
  );
}
