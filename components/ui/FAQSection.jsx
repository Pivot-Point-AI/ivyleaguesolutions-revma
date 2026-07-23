/**
 * Server-rendered, JS-free FAQ accordion (native <details>/<summary>).
 * Content is always present in the HTML for crawlers, AI answer engines,
 * and screen readers — only the visual expand/collapse relies on the browser.
 */
export default function FAQSection({
  heading = "Frequently Asked Questions",
  intro,
  items,
  className = "",
}) {
  if (!items || items.length === 0) return null;

  return (
    <section className={`bg-white px-5 sm:px-8 lg:px-[140px] py-14 sm:py-20 lg:py-[120px] ${className}`}>
      <div className="max-w-[1000px] mx-auto">
        <h2 className="text-[28px] sm:text-[38px] lg:text-[48px] text-[#242424] leading-[1.1] mb-4">
          {heading}
        </h2>
        {intro && (
          <p className="text-[15px] sm:text-[17px] lg:text-[19px] text-[#6A6A6A] font-light leading-relaxed mb-8 sm:mb-10 max-w-[760px]">
            {intro}
          </p>
        )}

        <dl className="flex flex-col divide-y divide-gray-200 border-t border-b border-gray-200">
          {items.map((item, i) => (
            <div key={i}>
              <details className="group py-5 sm:py-6">
                <summary className="flex items-center justify-between gap-4 cursor-pointer list-none">
                  <dt className="text-[16px] sm:text-[19px] lg:text-[21px] text-[#242424] font-medium leading-snug">
                    {item.question}
                  </dt>
                  <span
                    aria-hidden="true"
                    className="shrink-0 w-6 h-6 sm:w-7 sm:h-7 rounded-full border border-gray-300 flex items-center justify-center text-[#4026B8] text-lg leading-none group-open:rotate-45 transition-transform duration-200"
                  >
                    +
                  </span>
                </summary>
                <dd className="mt-3 pr-10 text-[14px] sm:text-[16px] lg:text-[17px] text-[#6A6A6A] font-light leading-relaxed">
                  {item.answer}
                </dd>
              </details>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
