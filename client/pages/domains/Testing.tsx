import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import Section from "@/components/Section";
import DomainHero from "@/components/DomainHero";
import { Wrench } from "lucide-react";
import { motion } from "framer-motion";

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
