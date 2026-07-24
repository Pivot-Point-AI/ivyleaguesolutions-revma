import Link from "next/link";
import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden min-h-screen">
      <Image src="/assets/aboutPage/aboutHeader.webp" alt="" aria-hidden="true" fill sizes="100vw" preload={true} className="absolute inset-0 w-full h-full object-cover pointer-events-none select-none" />
      <div className="relative w-full px-6 sm:px-10 lg:pl-[140px] lg:pr-12 flex items-center min-h-screen">
        <div className="pt-24 pb-16 fade-up">
          <div className="overflow-hidden mb-2">
            <h1 className="text-[33px] sm:text-[44px] lg:text-[54px] leading-[1.05] sm:leading-[1] lg:leading-[50px] font-normal text-gray-900">
              Technology<br />Partner
            </h1>
          </div>
          <p className="text-[19px] sm:text-[22px] lg:text-[29px] leading-[1.2] lg:leading-[31px] font-normal text-gray-900 mb-6">
            Since 2015
          </p>
          <div className="overflow-hidden mb-8 max-w-[491px]">
            <p className="text-[15px] sm:text-[16px] lg:text-[18px] leading-[1.6] lg:leading-[19px] font-light text-[#6A6A6A]">
              Ivy League Solutions is a global software development company with offices in the USA, UAE, and Pakistan, delivering high-impact software, digital technology, and infrastructure solutions. We help businesses turn complex challenges into scalable digital opportunities.
            </p>
          </div>
          <Link href="/contact" className="inline-flex items-center justify-center px-8 h-[50px] lg:w-[267px] lg:h-[61px] bg-[#4026B8] hover:bg-[#3520a0] text-white text-[17px] lg:text-[19px] leading-none font-normal rounded-[16px] lg:rounded-[20px] transition-all duration-200" style={{ fontFamily: "'Inter', sans-serif" }}>
            Get In Touch
          </Link>
        </div>
      </div>
    </section>
  );
}
