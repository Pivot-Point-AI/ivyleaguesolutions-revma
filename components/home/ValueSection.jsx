/* ---- Section 2: 360 Value ---- */
export default function ValueSection() {
  return (
    <section id="about" className="bg-[#f8f8f8] px-[clamp(20px,7.25vw,139px)] py-[clamp(40px,5.74vw,110px)]">
      <div className="grid lg:grid-cols-[minmax(0,589px)_minmax(0,1fr)] gap-10 lg:gap-[clamp(24px,5.74vw,110px)] items-start">
        <div className="fade-up">
          <h2 className="text-[clamp(32px,4.7vw,90px)] leading-[0.92] text-[#242424] font-normal">
            360°<br />VALUE
          </h2>
          <p className="mt-4 lg:mt-[clamp(16px,1.6vw,32px)] text-[clamp(15px,1.57vw,30px)] font-light text-[#6A6A6A] leading-[1.15] lg:w-[clamp(280px,30.72vw,589px)]">
            Comprehensive Solutions for Real-World Impact.
            Every solution we deliver is designed to create
            measurable business impact, not just code.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 lg:gap-x-[clamp(16px,4.17vw,80px)] gap-y-8 lg:gap-y-[clamp(16px,2.03vw,39px)] fade-up delay-150 lg:mt-[clamp(20px,10.95vw,210px)]">
          <div>
            <h3 className="text-[clamp(17px,1.78vw,34px)] font-medium text-[#242424] mb-[clamp(6px,0.63vw,12px)] leading-[1.2]">Innovation</h3>
            <p className="text-[clamp(13px,1.3vw,25px)] font-light text-[#979797] leading-[1.1] w-full lg:w-[clamp(180px,16.95vw,325px)]">
              Cutting-edge tech solutions that keep your business ahead of the curve.
            </p>
          </div>
          <div>
            <h3 className="text-[clamp(17px,1.78vw,34px)] font-medium text-[#242424] mb-[clamp(6px,0.63vw,12px)] leading-[1.2]">Speed</h3>
            <p className="text-[clamp(13px,1.3vw,25px)] font-light text-[#979797] leading-[1.1] w-full lg:w-[clamp(180px,16.95vw,325px)]">
              Agile development processes for faster deployment and quicker time-to-market.
            </p>
          </div>
          <div>
            <h3 className="text-[clamp(17px,1.78vw,34px)] font-medium text-[#242424] mb-[clamp(6px,0.63vw,12px)] leading-[1.2]">Quality</h3>
            <p className="text-[clamp(13px,1.3vw,25px)] font-light text-[#979797] leading-[1.1] w-full lg:w-[clamp(180px,16.95vw,325px)]">
              High-performing and scalable software built to enterprise standards.
            </p>
          </div>
          <div>
            <h3 className="text-[clamp(17px,1.78vw,34px)] font-medium text-[#242424] mb-[clamp(6px,0.63vw,12px)] leading-[1.2]">User-Centric Design</h3>
            <p className="text-[clamp(13px,1.3vw,25px)] font-light text-[#979797] leading-[1.1] w-full lg:w-[clamp(180px,16.95vw,325px)]">
              Focused on delivering exceptional user experiences that drive engagement.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
