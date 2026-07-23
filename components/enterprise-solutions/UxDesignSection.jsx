import UxCardsCarousel from "./UxCardsCarousel";

export default function UxDesignSection() {
  return (
    <section className="bg-[#f8f8f8]
                     pt-[60px] pb-[80px]
                     sm:pt-[80px] sm:pb-[100px]
                     lg:pt-[140px] lg:pb-[160px]">

        <div className="ent-ux-header-row flex items-start justify-between mb-[60px] lg:mb-[100px]
                     px-[20px] sm:px-[40px] lg:px-[140px]
                     flex-col gap-[24px] lg:flex-row lg:gap-0">

            <div className="ent-ux-header-heading-w w-full lg:w-[751px] lg:h-[158px] shrink-0">
                <h2 className="text-[#242424] font-normal
                            text-[32px] leading-[33px]
                            sm:text-[42px] sm:leading-[44px]
                            lg:text-[clamp(30px,4.6875vw,90px)] lg:leading-[0.922]
                            tracking-normal m-0">
                    User Experience &amp; Interface Design
                </h2>
            </div>

            <div className="ent-ux-header-sub-w w-full lg:w-[715px] lg:h-[90px] shrink-0 lg:flex lg:items-center">
                <p className="text-[#6A6A6A] font-light
                           text-[18px] leading-[20px]
                           sm:text-[19px] sm:leading-[22px]
                           lg:text-[clamp(15px,1.5625vw,30px)] lg:leading-[1]
                           tracking-normal m-0">
                    Our UX/UI design services create user-friendly, engaging products
                    and services that drive satisfaction and conversion.
                </p>
            </div>

        </div>


        <div className="w-full overflow-hidden">
            <UxCardsCarousel />
        </div>

    </section>
  );
}
