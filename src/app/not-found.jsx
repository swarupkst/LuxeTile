// app/not-found.tsx

import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white text-black px-4 py-20">
      <div className="text-center max-w-lg">
        
        {/* 404 */}
        <h1 className="text-8xl md:text-9xl font-extrabold text-red-500 mb-4 animate-pulse">
          404
        </h1>

        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-semibold mb-3">
          Oops! Page not found
        </h2>

        {/* Description */}
        <p className="text-gray-500 text-lg mb-6 leading-relaxed">
          The page you’re looking for doesn’t exist or may have been moved.
        </p>

        {/* Button */}
        <Link
          href="/"
          className="inline-block px-7 py-3 bg-red-500 hover:bg-red-600 text-white rounded-full text-lg font-medium transition duration-300 shadow-lg hover:scale-105"
        >
          Go Back Home
        </Link>

        {/* Icon */}
        <div className="mt-10 opacity-70">
          <span className="text-6xl">🚧</span>
        </div>
      </div>
    </div>
  );
}