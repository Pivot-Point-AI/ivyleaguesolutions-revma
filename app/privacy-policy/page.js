import { siteConfig, absoluteUrl, canonicalAlternates } from "../../lib/siteConfig";
import { breadcrumbJsonLd } from "../../lib/schema";
import LegalPage from "../../components/ui/LegalPage";

export const metadata = {
  title: "Privacy Policy",
  description:
    "Read the Ivy League Solutions privacy policy to learn how we collect, use, and protect information when you use our website and services.",
  alternates: canonicalAlternates("/privacy-policy"),
  openGraph: {
    title: "Privacy Policy | Ivy League Solutions",
    description: "How Ivy League Solutions collects, uses, and protects your information.",
    url: absoluteUrl("/privacy-policy"),
  },
};

const breadcrumb = breadcrumbJsonLd([
  { name: "Home", path: "/" },
  { name: "Privacy Policy", path: "/privacy-policy" },
]);

export default function PrivacyPolicyPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <LegalPage title="Privacy Policy" updated="July 23, 2026">
        <div>
          <h2>Introduction</h2>
          <p>
            {siteConfig.name} (&quot;we&quot;, &quot;us&quot;, or &quot;our&quot;) respects your privacy and is
            committed to protecting any information you share with us through {siteConfig.url}. This Privacy
            Policy explains what information we collect, how we use it, and the choices you have.
          </p>
        </div>

        <div>
          <h2>Information We Collect</h2>
          <p>We may collect the following types of information:</p>
          <ul>
            <li>Contact details you submit through our forms, such as your name, email address, phone number, and company name.</li>
            <li>Project details you share with us when requesting a consultation or proposal.</li>
            <li>Technical information such as browser type, device type, and pages visited, collected automatically through standard web analytics.</li>
          </ul>
        </div>

        <div>
          <h2>How We Use Information</h2>
          <p>We use the information we collect to:</p>
          <ul>
            <li>Respond to inquiries and provide requested proposals or consultations.</li>
            <li>Improve our website, services, and communications.</li>
            <li>Maintain the security and proper functioning of our website.</li>
          </ul>
          <p>We do not sell your personal information to third parties.</p>
        </div>

        <div>
          <h2>Cookies and Analytics</h2>
          <p>
            Our website may use cookies and similar technologies to understand how visitors use our site and
            to improve user experience. You can control cookie preferences through your browser settings.
          </p>
        </div>

        <div>
          <h2>Data Sharing</h2>
          <p>
            We may share information with trusted service providers who help us operate our website and
            deliver our services (for example, hosting or email delivery providers), under obligations to
            keep that information confidential. We may also disclose information if required by law.
          </p>
        </div>

        <div>
          <h2>Data Security</h2>
          <p>
            We take reasonable technical and organizational measures to protect the information you share
            with us from unauthorized access, alteration, or disclosure. No method of transmission over the
            internet is completely secure, and we cannot guarantee absolute security.
          </p>
        </div>

        <div>
          <h2>Your Rights</h2>
          <p>
            Depending on your location, you may have the right to access, correct, or request deletion of
            your personal information. To exercise these rights, contact us at{" "}
            <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>.
          </p>
        </div>

        <div>
          <h2>Children&apos;s Privacy</h2>
          <p>
            Our website and services are intended for business use and are not directed to individuals under
            the age of 16. We do not knowingly collect personal information from children.
          </p>
        </div>

        <div>
          <h2>Changes to This Policy</h2>
          <p>
            We may update this Privacy Policy from time to time. Any changes will be posted on this page with
            an updated revision date.
          </p>
        </div>

        <div>
          <h2>Contact Us</h2>
          <p>
            If you have questions about this Privacy Policy, contact us at{" "}
            <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a> or {siteConfig.phone}.
          </p>
        </div>
      </LegalPage>
    </>
  );
}
