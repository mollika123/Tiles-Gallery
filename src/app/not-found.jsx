import Image from "next/image";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center    px-6">
      <div className="text-center max-w-xl">

        <div className="relative w-full h-72 mb-8">
          {/* <Image
            src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d"
            alt="Lost in space"
            fill
            className="object-cover rounded-2xl shadow-2xl opacity-90"
          /> */}
        </div>

        <h1 className="text-6xl font-bold text-gray-600 mb-4">404</h1>
        <p className="text-xl text-gray-500 mb-6">
          Page not found — it might be in another dimension.
        </p>

        <Link
          href="/"
          className="inline-block px-6 py-3 rounded-xl bg-indigo-500 hover:bg-indigo-400 transition font-semibold shadow-lg"
        >
          Go Home
        </Link>
      </div>
    </div>
  );
}