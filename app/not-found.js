import Link from "next/link";

export const metadata = {
  title: "Page Not Found",
  description: "The page you're looking for doesn't exist or has moved.",
};

export default function NotFound() {
  return (
    <section className="flex flex-col items-center justify-center text-center px-6 py-32 sm:py-40 min-h-[60vh]">
      <span className="text-[13px] font-semibold text-[#4026B8] uppercase tracking-[0.12em] mb-4">
        404 Error
      </span>
      <h1 className="text-[32px] sm:text-[44px] lg:text-[56px] text-[#242424] font-bold leading-[1.1] mb-4">
        We couldn&apos;t find that page
      </h1>
      <p className="text-[#6A6A6A] text-[16px] sm:text-[18px] max-w-[560px] mb-9">
        The page you&apos;re looking for doesn&apos;t exist or may have been moved.
        Here are a few places to pick back up.
      </p>
      <div className="flex items-center gap-4 flex-wrap justify-center">
        <Link
          href="/"
          className="inline-flex items-center justify-center h-[54px] px-7 rounded-[16px] bg-[#4026B8] text-white text-[16px] no-underline hover:bg-[#34209c] transition-colors duration-200"
        >
          Back to Home
        </Link>
        <Link
          href="/services"
          className="inline-flex items-center justify-center h-[54px] px-7 rounded-[16px] border border-gray-300 text-[#242424] text-[16px] no-underline hover:border-gray-500 transition-colors duration-200"
        >
          View Services
        </Link>
        <Link
          href="/contact"
          className="inline-flex items-center justify-center h-[54px] px-7 rounded-[16px] border border-gray-300 text-[#242424] text-[16px] no-underline hover:border-gray-500 transition-colors duration-200"
        >
          Contact Us
        </Link>
      </div>
    </section>
  );
}
