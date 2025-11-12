import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import Section from "@/components/Section";
import SEO from "@/components/SEO";

export default function Privacy() {
  return (
    <div className="min-h-screen flex flex-col">
      <SiteHeader />
      <SEO
        title="Privacy Policy | Azorix Embedded"
        description="Privacy practices for Azorix Embedded."
        canonicalPath="/privacy"
      />

      <Section container className="pt-12 pb-12">
        <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight">
          Privacy Policy
        </h1>
        <p className="mt-4 text-muted-foreground max-w-3xl">
          Azorix Embedded is committed to protecting your privacy. This policy
          explains how we collect, use, disclose and safeguard your information
          when you visit our website.
        </p>

        <div className="mt-6 space-y-6 max-w-3xl text-sm text-muted-foreground">
          <section>
            <h2 className="font-semibold">Information We Collect</h2>
            <p className="mt-2">
              We may collect personal information you provide directly (for
              example when you contact us) and technical information
              automatically (such as browser type, IP address, and usage data).
            </p>
          </section>

          <section>
            <h2 className="font-semibold">How We Use Information</h2>
            <p className="mt-2">
              We use collected information to respond to inquiries, provide and
              improve our services, and for security and analytics.
            </p>
          </section>

          <section>
            <h2 className="font-semibold">Sharing and Disclosure</h2>
            <p className="mt-2">
              We do not sell personal information. We may share information with
              service providers who perform services on our behalf and when
              required by law.
            </p>
          </section>

          <section>
            <h2 className="font-semibold">Security</h2>
            <p className="mt-2">
              We implement reasonable security measures to protect your
              information, though no method is 100% secure.
            </p>
          </section>

          <section>
            <h2 className="font-semibold">Your Choices</h2>
            <p className="mt-2">
              You can choose not to provide certain information, and you can
              contact us to request access or deletion of your personal data
              where applicable.
            </p>
          </section>

          <section>
            <h2 className="font-semibold">Contact</h2>
            <p className="mt-2">
              For privacy concerns, email us at info@azorixembedded.com.
            </p>
          </section>
        </div>
      </Section>

      <SiteFooter />
    </div>
  );
}
