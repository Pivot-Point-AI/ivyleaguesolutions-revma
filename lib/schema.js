import { siteConfig, absoluteUrl } from "./siteConfig";

/** Builds BreadcrumbList JSON-LD from an ordered list of {name, path}. */
export function breadcrumbJsonLd(items) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}

/** Builds Service JSON-LD for a service/industry detail page. */
export function serviceJsonLd({ name, description, path, serviceType, areaServed = "United States" }) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name,
    description,
    url: absoluteUrl(path),
    serviceType,
    areaServed,
    provider: { "@id": `${siteConfig.url}/#organization` },
  };
}

/** Builds FAQPage JSON-LD from a list of {question, answer} pairs. */
export function faqJsonLd(items) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}
