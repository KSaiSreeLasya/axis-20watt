import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import Section from "@/components/Section";
import SEO from "@/components/SEO";

export default function Terms() {
  return (
    <div className="min-h-screen flex flex-col">
      <SiteHeader />
      <SEO
        title="Terms of Service | Azorix Embedded"
        description="Terms of service for Azorix Embedded."
        canonicalPath="/terms"
      />

      <Section container className="pt-12 pb-12">
        <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight">
          Terms of Service
        </h1>
        <p className="mt-4 text-muted-foreground max-w-3xl">
          These Terms of Service govern your use of the Azorix Embedded website
          and related services. By accessing or using our site you agree to be
          bound by these terms.
        </p>

        <div className="mt-6 space-y-6 max-w-3xl text-sm text-muted-foreground">
          <section>
            <h2 className="font-semibold">Use of the Website</h2>
            <p className="mt-2">
              You may use the website for lawful purposes and in accordance with
              these terms. You must not use the site for any unlawful or
              prohibited activity.
            </p>
          </section>

          <section>
            <h2 className="font-semibold">Intellectual Property</h2>
            <p className="mt-2">
              All content on this site is the property of Azorix Embedded or its
              licensors. You may not reproduce or distribute content without
              permission.
            </p>
          </section>

          <section>
            <h2 className="font-semibold">Disclaimers</h2>
            <p className="mt-2">
              Services and content are provided "as is" without warranties. We
              disclaim liability to the fullest extent permitted by law.
            </p>
          </section>

          <section>
            <h2 className="font-semibold">Limitation of Liability</h2>
            <p className="mt-2">
              To the maximum extent permitted by law, Azorix Embedded will not
              be liable for indirect, incidental, or consequential damages.
            </p>
          </section>

          <section>
            <h2 className="font-semibold">Contact</h2>
            <p className="mt-2">
              Questions about these terms can be directed to
              info@azorixembedded.com.
            </p>
          </section>
        </div>
      </Section>

      <SiteFooter />
    </div>
  );
}
