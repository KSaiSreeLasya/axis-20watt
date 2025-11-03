import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import Section from "@/components/Section";
import DomainHero from "@/components/DomainHero";
import { Wrench } from "lucide-react";

export default function Testing() {
  return (
    <div className="min-h-screen flex flex-col">
      <SiteHeader />
      <Section container>
        <DomainHero
          title="Testing & QA"
          subtitle="Automated frameworks, stability and verification for embedded products and platforms."
          image="https://images.pexels.com/photos/3913031/pexels-photo-3913031.jpeg"
          icon={<Wrench className="h-5 w-5" />}
        />
      </Section>
      <Section container>
        <div className="grid gap-6 md:grid-cols-3 text-sm text-muted-foreground">
          <Card title="Automation">Harnesses, simulators, CI pipelines.</Card>
          <Card title="Stability">
            Long‑run and stress testing, crash diagnostics.
          </Card>
          <Card title="Verification">
            Requirements traceability and release readiness.
          </Card>
        </div>
      </Section>
      <SiteFooter />
    </div>
  );
}

function Card({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="rounded-xl border p-6">
      <div className="font-semibold text-foreground">{title}</div>
      <p className="mt-2">{children}</p>
    </div>
  );
}
