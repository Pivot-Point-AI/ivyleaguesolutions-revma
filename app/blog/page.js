import "../pagestyles/blog.css";
import BlogHero from "../../components/blog/BlogHero";
import BlogBanner from "../../components/blog/BlogBanner";
import FeaturedAndStories from "../../components/blog/FeaturedAndStories";
import BlogCardsSection from "../../components/blog/BlogCardsSection";
import BlogCards2Section from "../../components/blog/BlogCards2Section";
import { absoluteUrl, canonicalAlternates } from "../../lib/siteConfig";
import { breadcrumbJsonLd } from "../../lib/schema";

export const metadata = {
  title: "Blog – Insights on Software, Fintech & Digital Transformation",
  description:
    "Read the Ivy League Solutions blog for insights on custom software development, fintech innovation, enterprise systems, and digital transformation strategy.",
  alternates: canonicalAlternates("/blog"),
  openGraph: {
    title: "Blog | Ivy League Solutions",
    description:
      "Insights on custom software development, fintech innovation, enterprise systems, and digital transformation strategy.",
    url: absoluteUrl("/blog"),
  },
};

const breadcrumb = breadcrumbJsonLd([
  { name: "Home", path: "/" },
  { name: "Blog", path: "/blog" },
]);

export default function BlogPage() {
  return (
    <div className="ind-page">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />

      {/* HERO */}
      <BlogHero />

      {/* PURPLE BANNER */}
      <BlogBanner />

      {/* FEATURED + TOP STORIES */}
      <FeaturedAndStories />

      {/* CARDS SECTION */}
      <BlogCardsSection />

      {/* CARDS SECTION 2 */}
      <BlogCards2Section />
    </div>
  );
}
