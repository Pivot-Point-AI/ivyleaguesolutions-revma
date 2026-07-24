import Image from "next/image";

export default function CoreBankingApplicationSection() {
  return (
    <section className="content-section-with-bottom bg-[#f8f8f8] px-[140px] pt-[215px] pb-[215px]">
      <div className="two-col-layout core-two-col flex items-center justify-between gap-[80px]">
        <div className="shrink-0">
          <div className="grid-row grid-row-1">
            <Image src="/assets/fintechPage/coreBanking.webp" alt="Core Banking" width={523} height={499} className="w-[523px] h-[499px] object-cover block rounded-2xl shrink-0" />
            <Image src="/assets/fintechPage/girlWriting.webp" alt="Girl Writing" width={273} height={499} className="w-[273px] h-[499px] object-cover block rounded-2xl shrink-0" />
          </div>
          <div className="grid-row grid-row-2">
            <Image src="/assets/fintechPage/peopleGroup.webp" alt="People Group" width={354} height={348} className="w-[354px] h-[348px] object-cover block rounded-2xl shrink-0" />
            <Image src="/assets/fintechPage/statisticsMan.webp" alt="Statistics Man" width={442} height={348} className="w-[442px] h-[348px] object-cover block rounded-2xl shrink-0" />
          </div>
        </div>

        <div className="shrink-0 core-text-col">
          <h2 className="text-display text-[#242424] font-normal m-0 max-w-[550px]">Core Banking Application</h2>
          <p className="body-25 text-[#979797] font-light m-0 mt-10 max-w-[611px]">
            Our Core Mobile Banking Application is built for institutions looking to offer a full range of
            banking services via mobile devices. This solution includes account management, fund transfer,
            balance inquiries, and more, all within an approachable interface. Beyond the basics, we offer
            modified dashboards, transaction classification, and financial planning tools to enhance user
            engagement.
          </p>
        </div>
      </div>
    </section>
  );
}
