import Link from "next/link";

/** Cross-links to sibling industry/service pages so crawlers and visitors
 * can move between related detail pages without backing out to the listing. */
export default function RelatedLinks({ heading, items, basePath, tone = "light" }) {
  if (!items || items.length === 0) return null;

  return (
    <section className={`px-5 sm:px-8 lg:px-[140px] py-14 sm:py-16 ${tone === "light" ? "bg-white" : "bg-[#f8f8f8]"}`}>
      <div className="max-w-[1200px] mx-auto">
        <h2 className="text-[22px] sm:text-[28px] text-[#242424] font-semibold mb-6">{heading}</h2>
        <div className="flex flex-wrap gap-3">
          {items.map((item) => (
            <Link
              key={item.slug}
              href={`${basePath}/${item.slug}`}
              className={`inline-flex items-center px-5 py-3 rounded-full border border-gray-200 ${tone === "light" ? "" : "bg-white"} text-[#242424] text-[14px] sm:text-[15px] no-underline hover:border-[#4026B8] hover:text-[#4026B8] transition-colors duration-200`}
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
