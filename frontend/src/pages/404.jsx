import { Link } from "react-router-dom";

export default function ErrorPage() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-[#0a0a0a] text-white px-4 sm:px-6">

      <div className="max-w-xl w-full text-center">

        {}
        <h1 className="text-6xl sm:text-7xl md:text-8xl font-black text-yellow-400 flex items-center justify-center gap-3">
          4
          <span className="animate-bounce">😢</span>
          4
        </h1>

        {}
        <h2 className="mt-6 text-xl sm:text-2xl md:text-3xl font-semibold">
          We Could Not Find The Page
        </h2>

        {}
        <p className="mt-3 text-gray-400 text-sm sm:text-base leading-relaxed">
          The link you're trying to access is probably broken or the page has been removed.
        </p>

        {}
        <Link
          to="/"
          className="mt-6 inline-flex items-center gap-2 bg-yellow-400 text-black px-5 sm:px-6 py-3 rounded-lg font-semibold hover:bg-yellow-300 transition"
        >
          ← Back to Homepage
        </Link>

      </div>
    </section>
  );
}