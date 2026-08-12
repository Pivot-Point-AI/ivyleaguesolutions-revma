"use client";

import { useEffect } from "react";
import Link from "next/link";

export default function Error({ error, unstable_retry }) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <section className="flex flex-col items-center justify-center text-center px-6 py-32 sm:py-40 min-h-[60vh]">
      <span className="text-[13px] font-semibold text-[#4026B8] uppercase tracking-[0.12em] mb-4">
        Something Went Wrong
      </span>
      <h1 className="text-[32px] sm:text-[44px] lg:text-[56px] text-[#242424] font-bold leading-[1.1] mb-4">
        An unexpected error occurred
      </h1>
      <p className="text-[#6A6A6A] text-[16px] sm:text-[18px] max-w-[560px] mb-9">
        Please try again, or head back to the homepage if the problem continues.
      </p>
      <div className="flex items-center gap-4 flex-wrap justify-center">
        <button
          onClick={() => unstable_retry()}
          className="inline-flex items-center justify-center h-[54px] px-7 rounded-[16px] bg-[#4026B8] text-white text-[16px] hover:bg-[#34209c] transition-colors duration-200"
        >
          Try Again
        </button>
        <Link
          href="/"
          className="inline-flex items-center justify-center h-[54px] px-7 rounded-[16px] border border-gray-300 text-[#242424] text-[16px] no-underline hover:border-gray-500 transition-colors duration-200"
        >
          Back to Home
        </Link>
      </div>
    </section>
  );
}
