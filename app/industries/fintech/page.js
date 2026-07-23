import "../../pagestyles/fintechIndustry.css";
import IndustryPage from "../../../components/IndustryPage";
import { absoluteUrl, canonicalAlternates } from "../../../lib/siteConfig";
import { breadcrumbJsonLd, serviceJsonLd, faqJsonLd } from "../../../lib/schema";

export const metadata = {
  title: "Fintech Software Development",
  description:
    "Secure, compliant fintech platforms: payment systems, mobile banking apps, lending systems, and compliance engines for banks and financial institutions, built by Ivy League Solutions.",
  alternates: canonicalAlternates("/industries/fintech"),
  openGraph: {
    title: "Fintech Software Development | Ivy League Solutions",
    description:
      "Payment platforms, mobile banking apps, lending systems, and compliance engines for banks, fintech, and financial institutions.",
    url: absoluteUrl("/industries/fintech"),
  },
};

const breadcrumb = breadcrumbJsonLd([
  { name: "Home", path: "/" },
  { name: "Industries", path: "/industries" },
  { name: "Fintech", path: "/industries/fintech" },
]);

const service = serviceJsonLd({
  name: "Fintech Software Development",
  description:
    "Payment platforms, mobile banking apps, lending systems, and compliance engines for banks, fintech, and financial institutions.",
  path: "/industries/fintech",
  serviceType: "Financial Technology Software Development",
});

const faqs = [
  {
    question: "How do you ensure regulatory compliance across jurisdictions?",
    answer:
      "We build compliance engines directly into the platform architecture, mapping regulatory requirements per jurisdiction and automating reporting — our fintech clients have maintained zero compliance violations across 40+ delivered projects.",
  },
  {
    question: "Can you modernize a legacy core banking system without downtime?",
    answer:
      "Yes. We use phased migration strategies — running new modules alongside legacy systems and cutting over incrementally — so institutions can modernize core banking without disrupting live transactions.",
  },
  {
    question: "What uptime and settlement speed can we expect from a payment platform?",
    answer:
      "Our payment architectures are built for 99.99% uptime with average settlement times around 200ms, using redundant infrastructure and rigorous failover testing to keep transactions reliable at scale.",
  },
  {
    question: "How do you secure sensitive financial data?",
    answer:
      "We apply encryption at rest and in transit, strict access controls, and continuous security monitoring across every layer of the platform, so digital wallets, payment gateways, and lending systems meet the security bar financial data demands.",
  },
];
const faq = faqJsonLd(faqs);

export default function FintechIndustry() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(service) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faq) }} />
      <IndustryPage
        heroHeading={<>Secure, Compliant, And<br />Scalable Financial Platforms</>}
        bannerHeading="Fintech Transformation Solutions"
        bannerBody="We build payment platforms, mobile banking apps, lending systems, and compliance engines for banks, fintech, and financial institutions."
        buildSub="From digital wallets and payment gateways to core banking modernization and regulatory compliance engines — we deliver fintech solutions that scale with your ambitions."
        problems={[
          "Legacy core banking limiting digital growth",
          "Regulatory compliance complexity across jurisdictions",
          "Transaction failures and settlement delays",
          "Fragmented payment ecosystems",
          "Security vulnerabilities in financial data",
        ]}
        results={[
          "500K+ users on a single platform",
          "Zero compliance violations",
          "200ms average settlement time",
          "40+ fintech projects delivered",
          "99.99% uptime on payment systems",
        ]}
        ctaHeading="Innovate Your Financial Ecosystem"
        ctaBody="From seamless digital onboarding to robust payment architectures, we provide the technical precision required to lead the next generation of finance. Let's build a faster, more secure future for your users."
        ctaButtonText="Discuss Your Fintech Project"
        faqs={faqs}
      />
    </>
  );
}
