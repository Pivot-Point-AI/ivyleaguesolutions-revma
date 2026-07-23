import "./pagestyles/HomeStyle.css";
import { absoluteUrl, canonicalAlternates } from "../lib/siteConfig";
import HeroSlider from "../components/home/HeroSlider";
import ValueSection from "../components/home/ValueSection";
import FintechTabs from "../components/home/FintechTabs";
import ProcessCarousel from "../components/home/ProcessCarousel";
import ShowcaseAndInnovation from "../components/home/ShowcaseAndInnovation";
import QuoteBanner from "../components/home/QuoteBanner";
import ClientSuccess from "../components/home/ClientSuccess";
import TeamAndPartners from "../components/home/TeamAndPartners";
import FAQSection from "../components/ui/FAQSection";
import { faqJsonLd } from "../lib/schema";

export const metadata = {
  title: "Ivy League Solutions – Custom Software, Fintech & Digital Infrastructure Solutions",
  description:
    "Ivy League Solutions builds scalable custom software, fintech platforms, and digital infrastructure for mid-to-large businesses. Automate operations and accelerate growth with measurable ROI.",
  alternates: canonicalAlternates("/"),
  openGraph: {
    title: "Ivy League Solutions – Build Scalable Software",
    description:
      "Ivy League Solutions builds scalable custom software, fintech platforms, and digital infrastructure for mid-to-large businesses. Automate operations and accelerate growth with measurable ROI.",
    url: absoluteUrl("/"),
  },
};

const faqs = [
  {
    question: "What does Ivy League Solutions do?",
    answer:
      "Ivy League Solutions builds custom software, fintech platforms, enterprise systems, and digital infrastructure for mid-to-large businesses, with offices in the USA, UAE, and Pakistan and clients across multiple industries.",
  },
  {
    question: "How is Ivy League Solutions different from other software agencies?",
    answer:
      "We focus on measurable business outcomes, not just delivered code — our engagements are scoped around ROI, and our teams combine deep expertise in fintech, enterprise systems, and cloud infrastructure with a proven delivery process.",
  },
  {
    question: "What industries do you specialize in?",
    answer:
      "We specialize in fintech, healthcare, e-commerce, logistics, and academia (EdTech), while also delivering enterprise-wide ERP, CRM, and digital infrastructure projects across industries.",
  },
  {
    question: "How do I start a project with Ivy League Solutions?",
    answer:
      "Book a strategy call through our contact page, or email contact@ivyleaguesolutions.com. We'll scope your requirements and propose a delivery plan before any commitment.",
  },
];
const faq = faqJsonLd(faqs);

export default function Home() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faq) }} />
      <HeroSlider />
      <ValueSection />
      <FintechTabs />
      <ProcessCarousel />
      <ShowcaseAndInnovation />
      <QuoteBanner />
      <ClientSuccess />
      <TeamAndPartners />
      <FAQSection items={faqs} />
    </>
  );
}
