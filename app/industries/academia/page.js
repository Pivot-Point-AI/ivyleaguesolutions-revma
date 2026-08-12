import "../../pagestyles/academiaIndustry.css";
import IndustryPage from "../../../components/IndustryPage";
import { absoluteUrl, canonicalAlternates } from "../../../lib/siteConfig";
import { breadcrumbJsonLd, serviceJsonLd, faqJsonLd } from "../../../lib/schema";

export const metadata = {
  title: "EdTech & Academia Software Solutions",
  description:
    "Digital learning solutions for education: learning management systems, student portals, virtual classrooms, and institution-wide transformation platforms.",
  alternates: canonicalAlternates("/industries/academia"),
  openGraph: {
    title: "EdTech & Academia Software Solutions | Ivy League Solutions",
    description:
      "Learning management systems, student portals, virtual classrooms, and institution-wide digital transformation for education.",
    url: absoluteUrl("/industries/academia"),
  },
};

const breadcrumb = breadcrumbJsonLd([
  { name: "Home", path: "/" },
  { name: "Industries", path: "/industries" },
  { name: "Academia", path: "/industries/academia" },
]);

const service = serviceJsonLd({
  name: "EdTech & Academia Software Solutions",
  description:
    "Learning management systems, student portals, virtual classrooms, and institution-wide digital transformation platforms for education.",
  path: "/industries/academia",
  serviceType: "Educational Technology Software Development",
});

const faqs = [
  {
    question: "What is EdTech software development?",
    answer:
      "EdTech software development is the design and engineering of digital tools for education — learning management systems, student portals, virtual classrooms, and administrative platforms — that help institutions deliver and manage learning online.",
  },
  {
    question: "How long does it take to build a learning management system?",
    answer:
      "A core LMS with student portals and virtual classroom features typically takes 3–6 months to reach production, depending on integrations with existing student information systems and the number of user roles supported.",
  },
  {
    question: "Can you integrate with our existing student information system (SIS)?",
    answer:
      "Yes. We build integration layers that sync enrollment, grading, and attendance data between your existing SIS and any new platform, so institutions aren't forced to migrate off systems they already rely on.",
  },
  {
    question: "Is the platform accessible for students with disabilities?",
    answer:
      "We build to WCAG 2.2 AA accessibility standards by default — including keyboard navigation, screen reader support, and sufficient color contrast — so learning platforms are usable by every student.",
  },
];
const faq = faqJsonLd(faqs);

export default function AcademiaIndustry() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(service) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faq) }} />
      <IndustryPage
        heroHeading={<>Digital Solutions For Learning<br />And Administration</>}
        bannerHeading="Digital Learning Solutions"
        bannerBody="Learning management systems, student portals, virtual classrooms, and institution-wide digital transformation platforms."
        buildSub="From learning management systems and virtual classrooms to student engagement platforms and administrative automation — we build EdTech that transforms education."
        problems={[
          "Outdated systems limiting online learning",
          "Poor student engagement and retention",
          "Administrative overhead consuming faculty time",
          "Lack of data-driven academic insights",
          "Disconnected campus systems",
        ]}
        results={[
          "50K+ students on a single platform",
          "40% improvement in student engagement",
          "60% reduction in admin workload",
          "Real-time academic analytics",
          "Seamless virtual classroom experience",
        ]}
        ctaHeading="Ready to Transform Education Digitally?"
        ctaBody="Let’s work together to build digital learning experiences that engage students, empower educators, and drive educational excellence."
        ctaButtonText="Discuss Your EdTech Project"
        faqs={faqs}
        currentIndustry="academia"
      />
    </>
  );
}
