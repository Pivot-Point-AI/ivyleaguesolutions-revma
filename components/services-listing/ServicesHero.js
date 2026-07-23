export default function ServicesHero() {
  return (
    <section className="relative bg-[#f8f8f8] overflow-x-hidden lg:overflow-visible min-h-[480px] sm:min-h-[640px] lg:min-h-0 lg:h-[clamp(420px,50.625vw,972px)]">
      <img
        src="/assets/servicePage/servicesHeader.svg"
        alt=""
        aria-hidden="true"
        loading="eager"
        className="absolute pointer-events-none select-none hidden lg:block z-0"
        style={{
          left: "40%",
          top: "clamp(15px,1.9vw,36px)",
          width: "clamp(320px,64.83vw,1244.67px)",
          height: "clamp(330px,67.34vw,1292.84px)",
        }}
      />

      <div className="relative z-10 flex items-center h-full px-5 sm:px-10 md:px-16 lg:pl-[clamp(20px,7.24vw,139px)] lg:pr-6 pt-28 pb-14 sm:pt-32 sm:pb-16 lg:pt-0 lg:pb-0">
        <div className="w-full lg:w-[clamp(280px,36.56vw,702px)] flex flex-col">
          <h1 className="font-medium tracking-normal text-[#242424] m-0 text-[39px] leading-[1.1] mb-5 sm:text-[48px] sm:leading-[1.05] sm:mb-6 md:text-[56px] md:leading-[1] lg:text-[clamp(30px,4.6875vw,90px)] lg:leading-[0.789] lg:mb-[clamp(10px,1.46vw,28px)]">
            Services
          </h1>
          <p className="font-light tracking-normal text-[#6A6A6A] m-0 text-[18px] leading-[1.5] mb-7 w-full sm:text-[19px] sm:leading-[1.45] sm:mb-8 md:text-[22px] lg:text-[clamp(15px,1.72vw,33px)] lg:leading-[1.182] lg:mb-[clamp(10px,1.46vw,28px)] lg:w-[clamp(280px,36.56vw,702px)]">
            We solve business challenges with tailored digital solutions that drive
            measurable results. From strategy to execution, we optimize, improve,
            and scale until your goals are achieved.
          </p>
          <p className="font-normal tracking-normal text-[#000000] m-0 text-[17px] leading-[1.4] sm:text-[20px] md:text-[22px] lg:text-[clamp(16px,1.77vw,34px)] lg:leading-[1.147]">
            Right 1st-time engagement Services
          </p>
        </div>
      </div>
    </section>
  );
}
