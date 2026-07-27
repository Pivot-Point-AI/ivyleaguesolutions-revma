import "./globals.css";
import { PageStoreProvider } from "../components/PageStore";
import Header from "../components/Header";
import Footer from "../components/Footer";
import SiteLoader from "../components/SiteLoader";
import FadeUpObserver from "../components/FadeUpObserver";
import { siteConfig, absoluteUrl } from "../lib/siteConfig";

export const metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.defaultTitle,
    template: siteConfig.titleTemplate,
  },
  description: siteConfig.description,
  alternates: {
    canonical: "/",
    languages: {
      "en-US": "/",
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: siteConfig.defaultTitle,
    description: siteConfig.description,
    images: [
      {
        url: absoluteUrl(siteConfig.ogImage),
        width: 1200,
        height: 630,
        alt: siteConfig.name,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.defaultTitle,
    description: siteConfig.description,
    images: [absoluteUrl(siteConfig.ogImage)],
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/assets/landingPage/ivy-square-512.png",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": ["Organization", "ProfessionalService"],
  "@id": `${siteConfig.url}/#organization`,
  name: siteConfig.name,
  legalName: siteConfig.legalName,
  url: siteConfig.url,
  logo: absoluteUrl(siteConfig.logo),
  image: absoluteUrl(siteConfig.logo),
  email: siteConfig.email,
  telephone: siteConfig.phoneRaw,
  areaServed: ["United States", "United Arab Emirates", "Pakistan"],
  sameAs: siteConfig.sameAs,
  contactPoint: [
    {
      "@type": "ContactPoint",
      telephone: siteConfig.phoneRaw,
      email: siteConfig.email,
      contactType: "customer service",
      areaServed: "US",
      availableLanguage: ["English"],
    },
  ],
  address: siteConfig.offices.map((office) => ({
    "@type": "PostalAddress",
    streetAddress: office.streetAddress,
    addressLocality: office.addressLocality,
    ...(office.addressRegion ? { addressRegion: office.addressRegion } : {}),
    ...(office.postalCode ? { postalCode: office.postalCode } : {}),
    addressCountry: office.addressCountry,
  })),
};

const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${siteConfig.url}/#website`,
  url: siteConfig.url,
  name: siteConfig.name,
  publisher: { "@id": `${siteConfig.url}/#organization` },
  inLanguage: "en-US",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400&display=swap" rel="stylesheet" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
        />
      </head>
      <body className="antialiased text-gray-900 overflow-x-hidden">
        <PageStoreProvider>
          <SiteLoader />
          <Header />
          <main>{children}</main>
          <Footer />
          <FadeUpObserver />
        </PageStoreProvider>
      </body>
    </html>
  );
}
