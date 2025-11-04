import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import Section from "@/components/Section";
import DomainHero from "@/components/DomainHero";
import { Wifi } from "lucide-react";
import { motion } from "framer-motion";

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
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -2, boxShadow: "0 8px 24px rgba(0,0,0,0.08)" }}
      transition={{ duration: 0.4 }}
      className="rounded-xl border p-6"
    >
      <div className="font-semibold text-foreground">{title}</div>
      <p className="mt-2">{children}</p>
    </motion.div>
  );
}
