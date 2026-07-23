import Image from "next/image";
import { teamMembers } from "./data";

export default function TeamSection({ teamTrackRef, teamIdx, teamAnimated, TEAM_STEP, handleTeamTransitionEnd }) {
  return (
    <section className="bg-[#fafafa] py-14 sm:py-20 lg:py-28">
      <div className="px-6 sm:px-10 lg:pl-[140px] lg:pr-0 w-full">
        <div className="mb-8 lg:mb-0 fade-up lg:hidden">
          <h2 className="text-[39px] sm:text-[48px] text-[#242424] leading-none mb-4">Our<br />Team</h2>
          <p className="text-[15px] sm:text-[18px] text-[#6A6A6A] leading-relaxed max-w-sm">
            We are passionate about creating visually stunning and functional solutions that communicate effectively.
          </p>
        </div>

        <div className="hidden lg:flex items-start gap-[clamp(24px,6.52vw,125px)]">
          <div className="w-[clamp(200px,17.79vw,341px)] flex-shrink-0 fade-up">
            <h2 className="text-[clamp(32px,4.7vw,90px)] text-[#242424] leading-[0.92] mb-4">Our<br />Team</h2>
            <p className="text-[clamp(15px,1.57vw,30px)] text-[#6A6A6A] leading-[1] tracking-[0%] font-light">
              We are passionate about creating visually stunning and functional solutions that communicate effectively.
            </p>
          </div>

          <div className="flex-1 overflow-hidden h-[clamp(290px,31.35vw,601px)]">
            <div
              id="team-track-desktop"
              ref={teamTrackRef}
              className="flex h-full gap-[clamp(12px,1.62vw,31px)] will-change-transform"
              style={{
                transform: `translateX(-${teamIdx * TEAM_STEP}px)`,
                transition: teamAnimated ? "transform 0.7s ease-in-out" : "none",
              }}
              onTransitionEnd={handleTeamTransitionEnd}
            >
              {[...teamMembers, ...teamMembers].map((member, i) => (
                <div key={i} className="relative rounded-[20px] overflow-hidden group flex-shrink-0 w-[clamp(240px,26.13vw,501px)] h-[clamp(290px,31.35vw,601px)] isolate">
                  <Image src={member.img} alt={member.name} fill sizes="(min-width: 1024px) 26vw, 100vw" className="absolute inset-0 w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 right-0 px-[clamp(16px,1.41vw,27px)] pb-[clamp(20px,2.14vw,41px)]">
                    <p className="text-white font-medium text-[clamp(18px,1.67vw,32px)] leading-[1.56] uppercase m-0" style={{ textShadow: "0px 4px 14px rgba(0,0,0,0.85)" }}>{member.name}</p>
                    <p className="text-white font-light text-[clamp(13px,1.15vw,22px)] leading-[1] m-0" style={{ textShadow: "0px 4px 14px rgba(0,0,0,0.85)" }}>{member.role}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:hidden">
          {teamMembers.map((member, i) => (
            <div key={i} className="relative rounded-2xl overflow-hidden group h-[320px] sm:h-[380px] isolate">
              <Image src={member.img} alt={member.name} fill sizes="50vw" className="absolute inset-0 w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 px-4 pb-4">
                <p className="text-white font-medium text-[18px] sm:text-[19px] leading-tight uppercase m-0">{member.name}</p>
                <p className="text-white/65 font-light text-[14px] sm:text-[16px] leading-snug m-0">{member.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
