import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center  text-center px-4">
      <h2 className="text-4xl font-bold text-orange-600 mb-4">
        404 - Not Found
      </h2>
      <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
        The page youre looking for doesnt exist or has been moved.
      </p>
      <Link
        href="/"
        className="bg-black text-white dark:bg-white dark:text-black px-6 py-2 rounded-lg hover:opacity-80 transition"
      >
        Return Home
      </Link>
    </div>
  );
}
