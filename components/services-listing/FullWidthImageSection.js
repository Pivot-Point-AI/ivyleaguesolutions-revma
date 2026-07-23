import Link from "next/link";
import Image from "next/image";

export default function FullWidthImageSection() {
  return (
    <section className="relative overflow-hidden cursor-pointer group w-full h-[320px] sm:h-[500px] md:h-[700px] lg:h-[900px] xl:h-[1060px] 2xl:h-[1220px]">
      <Image src="/assets/servicePage/servicesGroup.svg" alt="Digital Transformation" fill sizes="100vw" className="absolute inset-0 object-cover object-center block" />
      <div className="absolute inset-0 pointer-events-none bg-transparent group-hover:bg-black/55 transition-all duration-500"></div>
      <div className="absolute bottom-0 left-0 right-0 flex items-end justify-between px-5 pb-6 sm:px-10 sm:pb-10 md:px-14 md:pb-12 lg:px-[80px] lg:pb-[60px] opacity-0 translate-y-[20px] group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 ease-out delay-[60ms]">
        <h2 className="text-white m-0 select-none font-bold leading-[0.95] uppercase tracking-[-1px] text-[29px] sm:text-[42px] md:text-[50px] lg:text-[62px] xl:text-[62px] 2xl:text-[73px]">
          DIGITAL<br />TRANSFORMATION
        </h2>
        <Link href="/services/digital-transformation" className="text-white no-underline self-end mb-[6px] font-normal whitespace-nowrap text-[14px] sm:text-[17px] lg:text-[20px] xl:text-[21px] 2xl:text-[22px]">
          Explore More &nbsp;›
        </Link>
      </div>
    </section>
  );
}
