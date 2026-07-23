import Link from "next/link";

export default function TogetherReinventedSection() {
  return (
    <section className="pt-16 pb-16 sm:pt-20 sm:pb-20 lg:pt-[clamp(80px,6.51042vw,125px)] lg:pb-[clamp(80px,7.8125vw,150px)]">
      <div className="max-w-[90%] mx-auto px-5 sm:px-8 lg:px-12 w-full text-center">
        <h2 className="text-gray-900 font-normal leading-[1.06] tracking-[-0.01em] mb-[18px] text-[1.75rem] sm:text-[2.4rem] lg:text-[clamp(38.4px,3.28125vw,63px)]">
          Together, We Reinvented
        </h2>
        <p className="text-gray-800 mx-auto font-normal leading-[1.6] mb-7 text-[.82rem] sm:text-[.9rem] lg:text-[19px] max-w-[470px] lg:max-w-none">
          From startups to enterprises, we&apos;ve partnered with ambitious teams to build software that transforms industries.<br />
          Let&apos;s write your success story.
        </p>
        <Link href="/contact" className="inline-flex items-center bg-brand-600 hover:bg-brand-700 text-white rounded-full transition-all duration-200 font-sans font-normal px-6 py-[10px] text-[19px] shadow-[0_4px_18px_rgba(64,38,184,0.2)]">
          Book a Strategy Call
        </Link>
      </div>
    </section>
  );
}
