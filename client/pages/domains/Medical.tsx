import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import Section from "@/components/Section";
import DomainHero from "@/components/DomainHero";
import { Stethoscope } from "lucide-react";

export default function Medical() {
  return (
    <div className="min-h-screen flex flex-col">
      <SiteHeader />
      <Section container>
        <DomainHero
          title="Medical Devices"
          subtitle="From R&D to compliance: regulated firmware, connectivity and data flows for clinical and laboratory devices."
          image="https://images.pexels.com/photos/7108177/pexels-photo-7108177.jpeg"
          icon={<Stethoscope className="h-5 w-5" />}
        />
      </Section>
      <Section container>
        <div className="grid gap-6 md:grid-cols-3 text-sm text-muted-foreground">
          <Card title="Compliance">
            Documentation, quality systems, verification & validation.
          </Card>
          <Card title="Sensors">
            Acquisition, calibration and signal processing.
          </Card>
          <Card title="Connectivity">
            BLE/Wi‑Fi, HIPAA‑aware cloud ingestion and dashboards.
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
