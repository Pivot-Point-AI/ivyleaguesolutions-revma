"use client";

import { useState } from "react";
import Image from "next/image";
import { allMembers } from "./data";

/* ---- Section 9: Team & partners ---- */
export default function TeamAndPartners() {
  const [active, setActive] = useState(0);

  return (
    <section className="relative z-10 bg-[#f8f8f8] py-16 sm:py-20 lg:py-24 px-5 sm:px-8 lg:px-[140px]">
      <div className="team-accordion flex gap-2 sm:gap-3 fade-up delay-100 h-[380px] sm:h-[520px] lg:h-[685px] overflow-x-auto lg:overflow-visible">
        {allMembers.map((member, i) => (
          <div
            key={i}
            onMouseEnter={() => setActive(i)}
            onClick={() => setActive(i)}
            className={`team-card relative rounded-2xl overflow-hidden cursor-pointer h-[380px] sm:h-[520px] lg:h-[685px] team-card-transition ${active === i ? "" : "hidden sm:block"}`}
            style={{
              flexGrow: active === i ? 0 : 1,
              flexShrink: active === i ? 0 : 1,
              flexBasis: active === i ? "754px" : "68px",
              minWidth: active === i ? "200px" : "40px",
            }}
          >
            <Image src={`/assets/landingPage/${member.img}`} alt={member.name} fill sizes="(min-width: 1024px) 754px, 100vw" className="absolute inset-0 w-full h-full object-cover object-top team-card-img" />
            <div className="absolute inset-0 pointer-events-none team-card-gradient"></div>
            <div className="absolute inset-0 pointer-events-none bg-black/55 team-card-overlay-transition" style={{ opacity: active === i ? 0 : 0.55 }}></div>

            <div className="absolute bottom-0 left-0 right-0 px-4 sm:px-5 pb-5 sm:pb-6 overflow-hidden">
              <div
                className="text-white font-semibold text-[20px] sm:text-[29px] leading-tight whitespace-nowrap"
                style={{
                  opacity: active === i ? 1 : 0,
                  transform: `translateY(${active === i ? "0px" : "16px"})`,
                  transition: "opacity .85s cubic-bezier(0.16,1,0.3,1) 1.1s, transform .85s cubic-bezier(0.16,1,0.3,1) 1.1s",
                }}
              >
                {member.name}
              </div>

              {member.quote && (
                <div
                  className="mt-2"
                  style={{
                    opacity: active === i ? 1 : 0,
                    transform: `translateY(${active === i ? "0px" : "18px"})`,
                    transition: "opacity .9s cubic-bezier(0.16,1,0.3,1) 1.6s, transform .9s cubic-bezier(0.16,1,0.3,1) 1.6s",
                    pointerEvents: active === i ? "auto" : "none",
                  }}
                >
                  <div className="w-[500px] max-w-full h-[110px] sm:h-[67px] overflow-hidden mb-3">
                    <p className="text-white font-normal text-[15px] sm:text-[19px] leading-snug sm:leading-[18px] m-0">{member.quote}</p>
                  </div>
                  <div className="flex items-center justify-center gap-1 w-[123px] h-[30px] rounded-[46px] bg-black/40">
                    {Array.from({ length: member.stars }).map((_, s) => (
                      <svg key={s} className="w-[17px] h-[17px] text-[#FFB935] flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Mobile-only slider dots */}
      <div className="flex sm:hidden items-center justify-center gap-2.5 mt-4">
        {allMembers.map((_, i) => (
          <button
            key={i}
            onClick={() => setActive(i)}
            aria-label={`Go to member ${i + 1}`}
            className="rounded-full transition-all duration-300"
            style={{ width: active === i ? "20px" : "6px", height: "6px", background: active === i ? "#4026B8" : "#d0d0d0" }}
          ></button>
        ))}
      </div>

      {/* Partner logos marquee */}
      <div className="fade-up delay-200 partner-marquee-wrap mt-12 sm:mt-16" aria-label="Technology partners">
        <div className="partner-marquee-track">
          {[0, 1].map((pass) => (
            <div key={pass} className="partner-marquee-set" aria-hidden={pass > 0 ? "true" : "false"}>
              <div className="flex items-center justify-center w-[90px] sm:w-[129px] h-[80px] sm:h-[110px] flex-shrink-0">
                <img src="/assets/landingPage/awsLogo.svg" alt={pass === 0 ? "AWS" : ""} loading="lazy" className="w-[55px] sm:w-[79px] h-auto object-contain block" />
              </div>
              <div className="flex items-center justify-center w-[140px] sm:w-[221px] h-[100px] sm:h-[147px] flex-shrink-0">
                <img src="/assets/landingPage/azureLogo.svg" alt={pass === 0 ? "Microsoft Azure" : ""} loading="lazy" className="w-[110px] sm:w-[171px] h-auto object-contain block" />
              </div>
              <div className="flex items-center justify-center w-[180px] sm:w-[324px] h-[80px] sm:h-[105px] flex-shrink-0">
                <img src="/assets/landingPage/googlecloudLogo.svg" alt={pass === 0 ? "Google Cloud" : ""} loading="lazy" className="w-[150px] sm:w-[273px] h-auto object-contain block" />
              </div>
              <div className="flex items-center justify-center w-[120px] sm:w-[194px] h-[100px] sm:h-[175px] flex-shrink-0">
                <img src="/assets/landingPage/huaweiLogo.svg" alt={pass === 0 ? "Huawei" : ""} loading="lazy" className="w-[90px] sm:w-[144px] h-auto object-contain block" />
              </div>
              <div className="flex items-center justify-center w-[120px] sm:w-[192px] h-[90px] sm:h-[142px] flex-shrink-0">
                <img src="/assets/landingPage/reactLogo.svg" alt={pass === 0 ? "React" : ""} loading="lazy" className="w-[80px] sm:w-[141px] h-auto object-contain block" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
