import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import Section from "@/components/Section";
import DomainHero from "@/components/DomainHero";
import { CircuitBoard } from "lucide-react";
import { motion } from "framer-motion";

export default function Hardware() {
  return (
    <div className="min-h-screen flex flex-col">
      <SiteHeader />
      <Section container>
        <DomainHero
          title="Hardware"
          subtitle="Schematics, PCB layout, fabrication and bring‑up supported by strong firmware teams."
          image="https://images.pexels.com/photos/6755088/pexels-photo-6755088.jpeg"
          icon={<CircuitBoard className="h-5 w-5" />}
        />
      </Section>
      <Section container>
        <div className="grid gap-6 md:grid-cols-3 text-sm text-muted-foreground">
          <Card title="Design">
            Schematic capture, layout, DFM, BOM analysis.
          </Card>
          <Card title="Prototyping">
            Assembly, board bring‑up and validation.
          </Card>
          <Card title="Manufacturing">
            Vendor coordination, test jigs and QA.
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
