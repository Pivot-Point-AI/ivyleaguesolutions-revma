import Image from "next/image";
import AwardText from "./AwardText";

export default function AwardsSection({ awardsSectionRef }) {
  return (
    <section id="awards-section" ref={awardsSectionRef} className="bg-white py-14 sm:py-20 lg:py-28">
      <div className="px-6 sm:px-10 lg:pl-[140px] lg:pr-[5%] w-full">
        <h2 className="text-center text-[22px] sm:text-[32px] md:text-[42px] lg:text-[56px] text-[#242424] mb-10 lg:mb-14 leading-tight fade-up">
          We&apos;re Recognized For The Value<br className="hidden sm:block" />We Create Together
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 fade-up items-stretch [transition-delay:100ms]">
          <div className="relative rounded-2xl overflow-hidden group h-[320px] sm:h-[420px] lg:h-[601px]">
            <Image src="/assets/servicePage/award_Men.webp" alt="Award recipient" fill sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw" className="absolute inset-0 w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/25 to-transparent"></div>
          </div>

          <div className="flex flex-col gap-4 h-[320px] sm:h-[420px] lg:h-[601px]">
            <div className="flex-1 rounded-2xl flex flex-col justify-between px-5 py-5 lg:px-6 lg:py-6 bg-[#400094]">
              <svg className="w-6 h-6 lg:w-7 lg:h-7" fill="none" stroke="white" strokeWidth="1.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M16 3H8v9a4 4 0 008 0V3zM6 3H4a2 2 0 00-2 2v1a4 4 0 004 4h.5M18 3h2a2 2 0 012 2v1a4 4 0 01-4 4h-.5M12 16v5M8 21h8" />
              </svg>
              <AwardText className="award-text text-white font-light text-[18px] sm:text-[19px] lg:text-[32px] leading-snug">
                {["Huawei Strategic Alliance", "Gold Partner 2022"]}
              </AwardText>
            </div>

            <div className="flex-1 rounded-2xl flex flex-col justify-between px-5 py-5 lg:px-6 lg:py-6 bg-[#111827]">
              <svg className="w-6 h-6 lg:w-7 lg:h-7" fill="none" stroke="white" strokeWidth="1.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M16 3H8v9a4 4 0 008 0V3zM6 3H4a2 2 0 00-2 2v1a4 4 0 004 4h.5M18 3h2a2 2 0 012 2v1a4 4 0 01-4 4h-.5M12 16v5M8 21h8" />
              </svg>
              <AwardText className="award-text text-white font-light text-[18px] sm:text-[19px] lg:text-[32px] leading-snug">
                {["Best Commercial", "Revenue Award 2023"]}
              </AwardText>
            </div>
          </div>

          <div className="relative rounded-2xl overflow-hidden group h-[320px] sm:h-[420px] lg:h-[601px]">
            <Image src="/assets/servicePage/award_Women.webp" alt="Award recipient" fill sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw" className="absolute inset-0 w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/25 to-transparent"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
