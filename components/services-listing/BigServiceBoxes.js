import Link from "next/link";
import Image from "next/image";
import { bigBoxes, nl2br } from "./data";

export default function BigServiceBoxes() {
  return (
    <section className="bg-[#f8f8f8] pt-14 pb-12 sm:pt-20 sm:pb-16 md:pt-28 md:pb-20 lg:pt-[clamp(112px,10.41667vw,200px)] lg:pb-[clamp(80px,6.25vw,120px)]">
      <div className="max-w-[1680px] mx-auto px-5 sm:px-8 lg:px-[40px]">
        <div className="flex flex-wrap gap-4 sm:gap-5 lg:gap-[clamp(16px,2.19vw,42px)] justify-center xl:flex-nowrap">
          {bigBoxes.map((box) => (
            <Link
              key={box.slug}
              href={`/services/${box.slug}`}
              className="group relative flex flex-col bg-white hover:bg-[#40079B] hover:scale-[0.97] transition-all duration-300 ease-in-out cursor-pointer no-underline shrink-0 overflow-hidden w-full h-[280px] sm:h-[420px] md:h-[540px] rounded-[20px] xl:rounded-[clamp(14px,1.09vw,21px)] xl:w-[clamp(300px,41.67vw,800px)] xl:h-[clamp(320px,42.86vw,823px)] shadow-[0px_4.2px_15.7px_rgba(0,0,0,0.03)]"
            >
              <div className="absolute top-5 right-5 sm:top-8 sm:right-8 lg:top-[clamp(20px,3.54vw,68px)] lg:right-[clamp(20px,2.81vw,54px)]">
                <Image src="/assets/servicePage/arrow.webp" alt="" aria-hidden="true" width={66} height={66} className="w-9 h-9 sm:w-12 sm:h-12 lg:w-[clamp(36px,3.44vw,66px)] lg:h-[clamp(36px,3.44vw,66px)] transition-all duration-300 group-hover:brightness-0 group-hover:invert" />
              </div>
              <div className="absolute bottom-7 left-7 sm:bottom-10 sm:left-10 xl:bottom-[clamp(20px,3.07vw,59px)] xl:left-[clamp(20px,3.02vw,58px)] w-[75%] xl:w-[clamp(220px,26.56vw,510px)]">
                <h3 className="font-medium tracking-normal uppercase m-0 text-[26px] leading-[1.15] sm:text-[32px] md:text-[39px] xl:text-[clamp(24px,3.13vw,60px)] xl:leading-[1] text-black group-hover:text-white transition-colors duration-300">
                  {nl2br(box.title)}
                </h3>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
