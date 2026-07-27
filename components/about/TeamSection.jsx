import Image from "next/image";
import { teamMembers } from "./data";

export default function TeamSection() {
  const founder = teamMembers[0];

  return (
    <section className="relative overflow-hidden bg-white py-16 sm:py-24 lg:py-32">
      <div className="absolute w-[420px] h-[420px] rounded-full bg-[#4026B8]/5 blur-[90px] pointer-events-none -top-40 -right-40" />

      <div className="relative px-6 sm:px-10 lg:pl-[140px] lg:pr-[5%] w-full">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          {/* Copy column */}
          <div className="lg:col-span-5 fade-up">
            <span className="inline-block text-[13px] tracking-[0.18em] font-medium text-[#4026B8] uppercase mb-4">
              Leadership
            </span>
            <h2 className="text-[36px] sm:text-[48px] lg:text-[clamp(34px,3.6vw,58px)] leading-[1.05] text-gray-900 mb-6">
              Our Team
            </h2>
            <p className="text-[15px] sm:text-[17px] lg:text-[18px] leading-[1.7] text-[#6A6A6A] max-w-md mb-10">
              Founded and led by Farat Iqbal, Ivy League Solutions is backed by a distributed team of engineers
              delivering enterprise-grade software from the USA, UAE, and Pakistan.
            </p>

            <div className="inline-flex items-center gap-5 rounded-2xl border border-black/10 bg-white shadow-[0_10px_30px_-15px_rgba(0,0,0,0.15)] px-6 py-5">
              <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-[#4026B8]/10">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="12" cy="12" r="9" stroke="#4026B8" strokeWidth="1.6" />
                  <path d="M3 12h18M12 3c2.5 2.4 3.8 5.6 3.8 9s-1.3 6.6-3.8 9c-2.5-2.4-3.8-5.6-3.8-9S9.5 5.4 12 3Z" stroke="#4026B8" strokeWidth="1.6" />
                </svg>
              </div>
              <div>
                <p className="text-[26px] sm:text-[30px] leading-none font-medium text-gray-900 m-0">250+</p>
                <p className="text-[13px] sm:text-[14px] text-[#6A6A6A] leading-tight m-0 mt-1">Engineers across the globe</p>
              </div>
            </div>
          </div>

          {/* Portrait column */}
          <div className="lg:col-span-7 fade-up">
            <div className="mx-auto max-w-[420px] lg:max-w-none lg:ml-auto lg:w-[420px]">
              <div className="rounded-[24px] overflow-hidden shadow-[0_30px_60px_-25px_rgba(0,0,0,0.35)] border border-black/5">
                <div className="relative h-[440px] sm:h-[500px] lg:h-[520px]">
                  <Image
                    src={founder.img}
                    alt={founder.name}
                    fill
                    sizes="(min-width: 1024px) 420px, 90vw"
                    className="absolute inset-0 w-full h-full object-cover object-top"
                  />
                </div>
                <div className="bg-white px-6 py-5 border-t border-black/5">
                  <p className="text-gray-900 font-medium text-[18px] sm:text-[20px] leading-tight m-0">
                    {founder.name}
                  </p>
                  <p className="text-[#4026B8] font-medium text-[13px] sm:text-[14px] leading-tight m-0 mt-1">
                    {founder.role}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
