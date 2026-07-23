export default function CollabSection() {
  return (
    <section className="ent-collab-section bg-[#f8f8f8] px-[140px]">

        <div className="ent-collab-text">
            <div className="w-[722px]">
                <h2 className="text-[#242424] font-normal
                            text-[32px] leading-[33px]
                            sm:text-[42px] sm:leading-[44px]
                            lg:text-[clamp(30px,4.6875vw,90px)] lg:leading-[0.922]
                            tracking-normal m-0">
                    Collaboration and Productivity Tools
                </h2>
            </div>
            <div className="w-[684px] mt-[34px]">
                <p className="text-[#6A6A6A] font-light
                           text-[18px] leading-[20px]
                           sm:text-[19px] sm:leading-[22px]
                           lg:text-[clamp(15px,1.5625vw,30px)] lg:leading-[1]
                           tracking-normal m-0">
                    Ivy League Solutions's collaboration and productivity tools are designed to
                    simplify teamwork and boost efficiency across your organization.
                </p>
            </div>
        </div>

        <div className="ent-collab-cards">
            <div className="flex gap-[clamp(24px,5.625vw,108px)] mb-[clamp(20px,3.02vw,58px)]">
                <div className="w-[clamp(200px,18.125vw,348px)]">
                    <h3 className="text-[#242424] font-medium text-[clamp(16px,1.5625vw,30px)] leading-[1.2] tracking-normal m-0">
                        Collaboration Tools
                    </h3>
                    <p className="text-[#979797] font-light text-[clamp(13px,1.1458vw,22px)] leading-[1.1] tracking-normal mt-[16px] m-0">
                        Video conferencing, online chat, and file-sharing solutions
                        to simplify teamwork.
                    </p>
                </div>
                <div className="w-[clamp(180px,16.15vw,310px)]">
                    <h3 className="text-[#242424] font-medium text-[clamp(16px,1.5625vw,30px)] leading-[1.2] tracking-normal m-0">
                        Productivity Tools
                    </h3>
                    <p className="text-[#979797] font-light text-[clamp(13px,1.1458vw,22px)] leading-[1.1] tracking-normal mt-[16px] m-0">
                        Word processors, spreadsheets, and presentation software
                        to boost efficiency.
                    </p>
                </div>
            </div>
            <div className="flex gap-[clamp(24px,5.625vw,108px)]">
                <div className="w-[clamp(200px,18.125vw,348px)]">
                    <h3 className="text-[#242424] font-medium text-[clamp(16px,1.5625vw,30px)] leading-[1.2] tracking-normal m-0">
                        Development Tools
                    </h3>
                    <p className="text-[#979797] font-light text-[clamp(13px,1.1458vw,22px)] leading-[1.1] tracking-normal mt-[16px] m-0">
                        Software development tools instrumental in creating
                        enterprise applications.
                    </p>
                </div>
                <div className="w-[clamp(190px,16.875vw,324px)]">
                    <h3 className="text-[#242424] font-medium text-[clamp(16px,1.5625vw,30px)] leading-[1.2] tracking-normal m-0">
                        Integration Tools
                    </h3>
                    <p className="text-[#979797] font-light text-[clamp(13px,1.1458vw,22px)] leading-[1.1] tracking-normal mt-[16px] m-0">
                        Middleware and APIs to facilitate smooth integration of
                        enterprise applications.
                    </p>
                </div>
            </div>
        </div>

    </section>
  );
}
