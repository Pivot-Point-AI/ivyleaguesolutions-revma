import Image from "next/image";
import HeroStatIcon from "../shared/HeroStatIcon";

export default function HeroSection() {
  return (
    <section className="hero-section bg-[#f8f8f8] pt-[150px] pb-[70px] px-[140px]">
      <Image src="/assets/industriesPage/herobgRight.webp" alt="" className="ind-hero-bg" aria-hidden="true" width={1305} height={735} preload={true} />
      <div className="di-hero-max-w">
        <div className="flex flex-col max-w-[880px]">
          <div className="mb-4">
            <span className="block text-[13px] font-semibold text-[#4026B8] uppercase tracking-[0.12em] mb-2">
              Digital Infrastructure
            </span>
            <span className="block w-8 h-[3px] bg-[#4026B8] rounded-full"></span>
          </div>
          <h1 className="text-display text-[#242424] font-bold m-0">
            Flexible And Scalable <span className="text-[#4026B8]">Cloud</span> Solutions For Modern Businesses
          </h1>
          <p className="font-normal text-[#6A6A6A] mt-5 text-[16px] sm:text-[18px] lg:text-[20px] leading-[1.5]">
            From cloud migration to DevOps automation, we build resilient
            infrastructure that scales with your business, cuts operational
            overhead, and keeps you online when it matters most.
          </p>
          <div className="flex items-stretch gap-6 sm:gap-8 mt-8 flex-wrap">
            {[
              { value: "99.9%", label: "Infrastructure Uptime", icon: "cloud" },
              { value: "40%", label: "Lower Cloud Costs", icon: "zap" },
              { value: "24/7", label: "Monitoring & Support", icon: "shield" },
            ].map((stat, i) => (
              <div key={stat.label} className="flex items-start">
                {i > 0 && <div className="w-px bg-[#242424]/10 mr-6 sm:mr-8 self-stretch"></div>}
                <div className="flex flex-col items-start">
                  <div className="w-12 h-12 rounded-full bg-[#4026B8]/10 flex items-center justify-center mb-4">
                    <HeroStatIcon name={stat.icon} />
                  </div>
                  <span className="font-bold text-[#242424] text-[26px] sm:text-[32px] leading-none">
                    {stat.value}
                  </span>
                  <span className="font-normal text-[#6A6A6A] mt-2 text-[12px] sm:text-[13px] tracking-wide uppercase">
                    {stat.label}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="absolute hidden lg:block w-[250px] top-[38%] right-[9%] rounded-2xl bg-white border border-black/5 shadow-[0_20px_45px_-15px_rgba(64,38,184,0.22)] p-6 z-[1]">
        <div className="w-10 h-10 rounded-xl bg-[#4026B8] flex items-center justify-center mb-4">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <path d="M13 2L4.5 13.5H11L10 22L19.5 10.5H13L13 2Z" fill="white" />
          </svg>
        </div>
        <span className="block text-[12px] font-semibold text-[#4026B8] uppercase tracking-[0.1em] mb-2">
          Built To Scale
        </span>
        <p className="text-[14.5px] text-[#5A5A5A] leading-[1.55] m-0">
          Cloud infrastructure engineered to grow with your business, not against it.
        </p>
      </div>
    </section>
  );
}
