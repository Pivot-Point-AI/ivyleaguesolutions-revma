export const siteConfig = {
  name: "Ivy League Solutions",
  legalName: "Ivy League Solutions",
  url: "https://ivyleaguesolutions.com",
  titleTemplate: "%s | Ivy League Solutions",
  defaultTitle: "Ivy League Solutions | Custom Software & Fintech Development",
  description:
    "Ivy League Solutions builds custom software, fintech platforms, and digital infrastructure for mid-to-large businesses worldwide.",
  email: "contact@ivyleaguesolutions.com",
  phone: "+1 845 300 2429",
  phoneRaw: "+18453002429",
  logo: "/assets/landingPage/ivy-square-512.png",
  ogImage: "/assets/landingPage/ivy-og-banner.png",
  sameAs: [],
  offices: [
    {
      name: "Perth Amboy, USA",
      streetAddress: "370 Federal Court",
      addressLocality: "Perth Amboy",
      addressRegion: "NJ",
      postalCode: "08861",
      addressCountry: "US",
    },
    {
      name: "Dubai, UAE",
      streetAddress: "912, 9th Floor, YES Business Tower, Al Barsha Road, Al Barsha 1",
      addressLocality: "Dubai",
      addressRegion: "",
      postalCode: "",
      addressCountry: "AE",
    },
    {
      name: "Islamabad, Pakistan",
      streetAddress: "Corporate and Business Square, 1st/2nd Floor, Wazir Arcade, Park Ave, Block C, Gulberg Greens",
      addressLocality: "Islamabad",
      addressRegion: "",
      postalCode: "44000",
      addressCountry: "PK",
    },
  ],
};

/** Builds an absolute URL from a site-relative path. */
export function absoluteUrl(path = "/") {
  return new URL(path, siteConfig.url).toString();
}

/** Builds a metadata `alternates` object with canonical + self-referencing en-US hreflang. */
export function canonicalAlternates(path = "/") {
  const url = absoluteUrl(path);
  return {
    canonical: url,
    languages: { "en-US": url },
  };
}
