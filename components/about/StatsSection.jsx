import { stats } from "./data";

export default function StatsSection({ statsRowRef }) {
  return (
    <section className="relative overflow-hidden w-full bg-[#400094] min-h-[300px] sm:min-h-[380px] lg:min-h-[464px]">
      <div className="absolute w-[174px] h-[87px] rounded-full bg-[#911FCD] opacity-60 pointer-events-none top-[70px] left-0 blur-[40px]"></div>
      <div className="absolute w-[174px] h-[87px] rounded-full bg-[#911FCD] opacity-60 pointer-events-none top-[346px] left-[74%] blur-[40px]"></div>
      <div className="absolute w-[174px] h-[87px] rounded-full bg-[#911FCD] opacity-60 pointer-events-none top-0 left-[96%] blur-[40px]"></div>

      <div className="relative w-full px-6 sm:px-10 lg:px-[5%] flex items-center min-h-[300px] sm:min-h-[380px] lg:min-h-[464px]">
        <div id="stats-row" ref={statsRowRef} className="grid grid-cols-2 lg:flex lg:justify-between w-full gap-8 sm:gap-10 lg:gap-0 py-10 lg:py-0 fade-up">
          {stats.map((stat, i) => (
            <div key={i} className="text-left">
              <div className="stat-number text-white text-[39px] sm:text-[56px] lg:text-[78px] leading-none lg:leading-[72px] font-normal" data-target={stat.target} data-suffix={stat.suffix}>
                0{stat.suffix}
              </div>
              <div className="text-white/70 text-[14px] sm:text-[17px] lg:text-[24px] leading-[1.4] lg:leading-[32px] font-light">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
