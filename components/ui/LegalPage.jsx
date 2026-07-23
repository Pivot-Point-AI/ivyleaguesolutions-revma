export default function LegalPage({ title, updated, children }) {
  return (
    <div className="bg-white">
      <section className="px-5 sm:px-8 lg:px-[140px] pt-[160px] pb-10 sm:pt-[200px] sm:pb-14">
        <h1 className="text-[32px] sm:text-[44px] lg:text-[56px] text-[#242424] leading-[1.1] mb-3">
          {title}
        </h1>
        <p className="text-[14px] sm:text-[15px] text-[#979797] font-light">Last updated: {updated}</p>
      </section>

      <section className="px-5 sm:px-8 lg:px-[140px] pb-20 sm:pb-28 lg:pb-32">
        <div className="max-w-[840px] flex flex-col gap-8 text-[15px] sm:text-[16px] text-[#4A4A4A] font-light leading-relaxed [&_h2]:text-[#242424] [&_h2]:font-medium [&_h2]:text-[20px] [&_h2]:sm:text-[24px] [&_h2]:mb-3 [&_h2]:leading-snug [&_p]:mb-3 [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:flex [&_ul]:flex-col [&_ul]:gap-1.5 [&_a]:text-[#4026B8] [&_a]:underline">
          {children}
        </div>
      </section>
    </div>
  );
}
