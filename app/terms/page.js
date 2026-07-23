import { siteConfig, absoluteUrl, canonicalAlternates } from "../../lib/siteConfig";
import { breadcrumbJsonLd } from "../../lib/schema";
import LegalPage from "../../components/ui/LegalPage";

export const metadata = {
  title: "Terms & Conditions",
  description:
    "Read the terms and conditions governing use of the Ivy League Solutions website and engagement with our software development services.",
  alternates: canonicalAlternates("/terms"),
  openGraph: {
    title: "Terms & Conditions | Ivy League Solutions",
    description: "Terms and conditions governing use of the Ivy League Solutions website and services.",
    url: absoluteUrl("/terms"),
  },
};

const breadcrumb = breadcrumbJsonLd([
  { name: "Home", path: "/" },
  { name: "Terms & Conditions", path: "/terms" },
]);

export default function TermsPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <LegalPage title="Terms &amp; Conditions" updated="July 23, 2026">
        <div>
          <h2>Acceptance of Terms</h2>
          <p>
            By accessing or using {siteConfig.url} (the &quot;Website&quot;), you agree to be bound by these
            Terms &amp; Conditions. If you do not agree to these terms, please do not use the Website.
          </p>
        </div>

        <div>
          <h2>Use of the Website</h2>
          <p>
            You may use this Website for lawful purposes only. You agree not to use the Website in any way
            that could damage, disable, or impair its operation, or interfere with any other party&apos;s use
            of the Website.
          </p>
        </div>

        <div>
          <h2>Intellectual Property</h2>
          <p>
            All content on this Website — including text, graphics, logos, and software — is the property of
            {" "}{siteConfig.name} or its licensors and is protected by applicable intellectual property laws.
            You may not reproduce, distribute, or create derivative works from this content without our prior
            written consent.
          </p>
        </div>

        <div>
          <h2>Service Engagements</h2>
          <p>
            Information on this Website about our services is provided for general informational purposes and
            does not constitute a binding offer. Any specific project engagement, scope, timeline, and pricing
            will be governed by a separate written agreement signed by both parties.
          </p>
        </div>

        <div>
          <h2>No Warranty</h2>
          <p>
            This Website and its content are provided &quot;as is&quot; without warranties of any kind, either
            express or implied, including but not limited to accuracy, completeness, or fitness for a
            particular purpose.
          </p>
        </div>

        <div>
          <h2>Limitation of Liability</h2>
          <p>
            To the fullest extent permitted by law, {siteConfig.name} shall not be liable for any indirect,
            incidental, or consequential damages arising out of your use of this Website.
          </p>
        </div>

        <div>
          <h2>Governing Law</h2>
          <p>
            These Terms &amp; Conditions are governed by the laws of the State of New Jersey, USA, without
            regard to its conflict of law principles.
          </p>
        </div>

        <div>
          <h2>Changes to These Terms</h2>
          <p>
            We may update these Terms &amp; Conditions from time to time. Continued use of the Website after
            changes are posted constitutes acceptance of the revised terms.
          </p>
        </div>

        <div>
          <h2>Contact Us</h2>
          <p>
            Questions about these Terms &amp; Conditions can be sent to{" "}
            <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a> or {siteConfig.phone}.
          </p>
        </div>
      </LegalPage>
    </>
  );
}
