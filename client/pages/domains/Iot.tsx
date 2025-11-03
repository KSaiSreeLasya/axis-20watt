import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import Section from "@/components/Section";
import DomainHero from "@/components/DomainHero";
import { Wifi } from "lucide-react";

export default function Iot() {
  return (
    <div className="min-h-screen flex flex-col">
      <SiteHeader />
      <Section container>
        <DomainHero
          title="Internet of Things (IoT)"
          subtitle="Firmware, gateways, and cloud integrations powering connected products across industrial, consumer and smart-city deployments."
          image="https://images.pexels.com/photos/159304/network-cable-ethernet-computer-159304.jpeg"
          icon={<Wifi className="h-5 w-5" />}
        />
      </Section>
      <Section container>
        <div className="grid gap-6 md:grid-cols-3 text-sm text-muted-foreground">
          <Card title="Firmware">
            Device drivers, RTOS/Linux, power management, OTA.
          </Card>
          <Card title="Connectivity">
            BLE, Wi‑Fi, Zigbee, Z‑Wave, cellular; secure provisioning.
          </Card>
          <Card title="Platforms">
            AWS, Azure, ThingWorx; data pipelines and dashboards.
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
