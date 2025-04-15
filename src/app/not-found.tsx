import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="flex items-center justify-center h-screen bg-white">
      <div className="flex items-center text-gray-800 text-lg space-x-4">
        <span className="text-2xl font-semibold">404</span>
        <span className="border-l h-6 border-gray-400" />
        <div className="flex flex-col space-y-1">
          <span>This page could not be found.</span>
          <Link href="/" className="text-blue-600 hover:underline text-sm">
            Go back to home
          </Link>
        </div>
      </div>
    </div>
  );
}
