export default function WhyChooseSection() {
  return (
    <section className="why-section bg-[#f4f4f6] px-[140px] pt-[215px] pb-[215px]">
      <div className="flex flex-col items-center gap-8">
        <h2 className="text-display text-[#242424] font-normal text-center m-0 w-full max-w-[1280px]">
          Why Choose Ivy League Solutions
        </h2>
        <p className="body-22 text-black font-normal text-center m-0 max-w-[1082px]">
          We are dedicated to delivering progressive banking solutions tailored to your institution&apos;s needs.
          Our deep industry expertise, commitment to security, and innovative technology ensure that your
          business stays viable and customer-focused.
        </p>
        <button className="cta-btn">
          <span className="btn-label text-white font-normal text-center" style={{ fontFamily: "var(--font-inter), sans-serif", fontWeight: 400 }}>
            Discuss Your Fintech Needs
          </span>
        </button>
      </div>
    </section>
  );
}
