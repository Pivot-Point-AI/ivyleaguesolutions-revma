import Image from "next/image";

export default function DigitalTransformationSection() {
  return (
    <section className="content-section-with-bottom bg-[#f8f8f8] px-[140px] pt-[30px] pb-[215px]">
      <div className="two-col-layout transform-two-col flex items-center justify-between gap-[80px]">
        <div className="shrink-0 transform-text-col">
          <h2 className="text-display text-[#242424] font-normal m-0 max-w-[658px]">Digital Transformation</h2>
          <p className="body-25 text-[#979797] font-light m-0 mt-10 max-w-[628px]">
            Our solutions are at the forefront of digital transactions
            in the financial solutions industry. We utilize technologies
            such as AI, blockchain, and advanced analytics to optimize
            your digital banking offerings. Ivy League Solutions ensures that your
            institution stays ahead by adapting to industry trends and
            offering a comprehensive digital banking experience. This
            transformation allows you to serve customers more
            effectively, enhance operational efficiency, and maintain
            a competitive edge in the market.
          </p>
        </div>

        <div className="transform-images-wrap flex items-center gap-5 shrink-0">
          <div className="shrink-0 self-center">
            <Image src="/assets/fintechPage/roboticHand.webp" alt="Robotic Hand" width={339} height={363} className="w-[339px] h-[363px] object-cover block rounded-2xl" />
          </div>
          <div className="transform-right-col flex flex-col gap-5 shrink-0">
            <Image src="/assets/fintechPage/robotTyping.webp" alt="Robot Typing" width={339} height={363} className="w-[339px] h-[363px] object-cover block rounded-2xl" />
            <Image src="/assets/fintechPage/menTyping.webp" alt="Men Typing" width={375} height={411} className="w-[375px] h-[411px] object-cover block rounded-2xl" />
          </div>
        </div>
      </div>
    </section>
  );
}
