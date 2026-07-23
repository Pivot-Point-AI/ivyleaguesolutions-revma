"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { smallBoxes, nl2br } from "./data";

export default function SmallServiceBoxes() {
  const [activeBox, setActiveBox] = useState(0);

  return (
    <section className="bg-[#f8f8f8] pt-10 pb-14 sm:pt-12 sm:pb-20 lg:pt-[clamp(48px,2.60417vw,50px)] lg:pb-[clamp(80px,7.8125vw,150px)]">
      <div className="max-w-[1680px] mx-auto px-5 sm:px-8 lg:px-[40px]">
        <div className="flex flex-wrap gap-4 sm:gap-5 lg:gap-[clamp(14px,1.69vw,32px)] justify-center">
          {smallBoxes.map((box, i) => {
            const isActive = i === activeBox;
            return (
              <Link
                key={box.slug}
                href={`/services/${box.slug}`}
                onMouseEnter={() => setActiveBox(i)}
                onMouseLeave={() => setActiveBox(0)}
                className={`relative flex flex-col transition-colors duration-300 ease-in-out cursor-pointer no-underline shrink-0 overflow-hidden w-full h-[360px] sm:w-[calc(50%-10px)] sm:h-[460px] md:h-[530px] xl:w-[calc(50%-clamp(7px,0.845vw,16px))] xl:h-[clamp(340px,25vw,480px)] rounded-[20px] xl:rounded-[clamp(14px,1.09vw,21px)] ${isActive ? "bg-[#40079B]" : "bg-white"}`}
              >
                <div className="pt-8 pl-8 sm:pt-10 sm:pl-10 lg:pt-[clamp(24px,3.02vw,58px)] lg:pl-[clamp(24px,3.23vw,62px)]">
                  <Image src={`/assets/servicePage/${box.icon}`} alt="" aria-hidden="true" width={65} height={65} className={`w-10 h-10 sm:w-12 sm:h-12 lg:w-[clamp(40px,3.385vw,65px)] lg:h-[clamp(40px,3.385vw,65px)] transition-all duration-300 ${isActive ? "brightness-0 invert" : ""}`} />
                </div>
                <div className="mt-5 ml-8 sm:mt-6 sm:ml-10 lg:mt-[clamp(16px,1.88vw,36px)] lg:ml-[clamp(24px,3.23vw,62px)] w-[75%] lg:w-[clamp(180px,15.47vw,297px)]">
                  <h3 className={`font-medium tracking-normal uppercase m-0 text-[22px] leading-[1.2] sm:text-[24px] md:text-[29px] lg:text-[clamp(22px,2.19vw,42px)] lg:leading-[1.19] transition-colors duration-300 ${isActive ? "text-white" : "text-black"}`}>
                    {nl2br(box.title)}
                  </h3>
                </div>
                <div className="absolute bottom-5 right-5 sm:bottom-6 sm:right-6 lg:bottom-[clamp(20px,2.13vw,41px)] lg:right-[clamp(20px,2.42vw,46px)]">
                  <span className={`flex items-center justify-end font-normal leading-none text-[16px] sm:text-[18px] lg:text-[clamp(14px,1.25vw,24px)] transition-colors duration-300 ${isActive ? "text-white" : "text-[#777777]"}`}>
                    Explore More &nbsp;›
                  </span>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
