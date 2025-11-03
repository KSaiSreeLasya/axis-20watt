import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import Section from "@/components/Section";
import DomainHero from "@/components/DomainHero";
import { Car } from "lucide-react";

export default function Automotive() {
  return (
    <div className="min-h-screen flex flex-col">
      <SiteHeader />
      <Section container>
        <DomainHero
          title="Automotive"
          subtitle="In‑vehicle software, BSPs, telematics and diagnostics with a strong focus on reliability and safety."
          image="https://images.pexels.com/photos/18968756/pexels-photo-18968756.jpeg"
          icon={<Car className="h-5 w-5" />}
        />
      </Section>
      <Section container>
        <div className="grid gap-6 md:grid-cols-3 text-sm text-muted-foreground">
          <Card title="Stacks">
            CAN, UDS, J1939, Autosar integration and tooling.
          </Card>
          <Card title="BSP & Drivers">
            Boot, diagnostics, connectivity, multimedia.
          </Card>
          <Card title="QA">
            Hardware‑in‑the‑loop, automated testing and stability.
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
