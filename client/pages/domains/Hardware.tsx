import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import Section from "@/components/Section";
import DomainHero from "@/components/DomainHero";
import { CircuitBoard, Zap, Cpu, Wrench } from "lucide-react";
import { motion } from "framer-motion";
import SEO from "@/components/SEO";
import { CheckCircle2 } from "lucide-react";

export default function Hardware() {
  return (
    <div className="min-h-screen flex flex-col">
      <SiteHeader />
      <SEO
        title="Embedded Hardware Design & Prototyping | Embinsys"
        description="Complete hardware design: schematics, PCB layout, DFM, fabrication, bring-up, and manufacturing support."
        canonicalPath="/domains/hardware"
      />
      <Section container>
        <DomainHero
          title="Hardware"
          subtitle="Complete hardware design and engineering: from schematics through fabrication, bring-up, and manufacturing support."
          image="https://images.pexels.com/photos/6755088/pexels-photo-6755088.jpeg"
          icon={<CircuitBoard className="h-5 w-5" />}
        />
      </Section>

      {/* Core Capabilities */}
      <Section container>
        <h2 className="text-2xl md:text-3xl font-bold mb-8">Core Capabilities</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          <CapabilityCard
            icon={<Zap className="h-6 w-6" />}
            title="Schematic Design"
            desc="Component selection, circuit design, design reviews"
          />
          <CapabilityCard
            icon={<CircuitBoard className="h-6 w-6" />}
            title="PCB Layout"
            desc="Multi-layer design, signal integrity, power distribution"
          />
          <CapabilityCard
            icon={<Wrench className="h-6 w-6" />}
            title="Bring-Up Support"
            desc="Board validation, firmware integration, debugging"
          />
          <CapabilityCard
            icon={<Cpu className="h-6 w-6" />}
            title="Manufacturing"
            desc="Vendor coordination, assembly, testing, QA"
          />
        </div>
      </Section>

      {/* Design Services */}
      <Section className="bg-secondary/40">
        <h2 className="text-2xl md:text-3xl font-bold mb-2">Design Services</h2>
        <p className="text-muted-foreground mb-8">
          Complete design support with quality and manufacturability focus.
        </p>
        <div className="grid gap-6 md:grid-cols-2">
          <Card title="Schematic & Design">
            <ul className="space-y-2">
              {[
                "Requirements analysis and specification",
                "Block diagram and architecture design",
                "Detailed schematic capture",
                "Component selection and sourcing",
                "Design for test (DFT) implementation",
                "Design reviews and validation",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2 text-sm">
                  <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground">{item}</span>
                </li>
              ))}
            </ul>
          </Card>
          <Card title="PCB Layout & Manufacturing">
            <ul className="space-y-2">
              {[
                "Multi-layer PCB design (up to 20+ layers)",
                "Signal integrity and timing analysis",
                "Power distribution network (PDN) design",
                "Thermal management",
                "Design for Manufacturability (DFM)",
                "BOM analysis and cleansing",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2 text-sm">
                  <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground">{item}</span>
                </li>
              ))}
            </ul>
          </Card>
        </div>
      </Section>

      {/* Processor Support */}
      <Section>
        <h2 className="text-2xl md:text-3xl font-bold mb-2">
          Processor & Technology Support
        </h2>
        <p className="text-muted-foreground mb-8">
          Hardware design expertise across leading processor families.
        </p>
        <div className="grid gap-6 md:grid-cols-3">
          <ProcessorCard
            title="ARM Processors"
            items={["Cortex-A Series", "Cortex-M Series", "Cortex-R Series"]}
          />
          <ProcessorCard
            title="x86/x64"
            items={["Intel processors", "AMD EPYC", "Custom x86 boards"]}
          />
          <ProcessorCard
            title="Custom SoCs"
            items={["Application-specific chips", "FPGA integration", "Hybrid designs"]}
          />
        </div>
      </Section>

      {/* Prototyping & Bring-Up */}
      <Section className="bg-secondary/40">
        <h2 className="text-2xl md:text-3xl font-bold mb-8">
          Prototyping & Board Bring-Up
        </h2>
        <div className="grid gap-6 md:grid-cols-2">
          <ServiceCard
            title="Prototype Assembly"
            items={[
              "PCB fabrication vendor coordination",
              "Component procurement and inventory",
              "Assembly and soldering (BGA, fine pitch)",
              "Quality inspection and testing",
              "Documentation and traceability",
            ]}
          />
          <ServiceCard
            title="Board Bring-Up"
            items={[
              "Power-up sequence validation",
              "Clock and reset circuit debugging",
              "Peripheral interface validation",
              "Firmware integration and testing",
              "Performance and stability validation",
            ]}
          />
        </div>
      </Section>

      {/* Manufacturing Support */}
      <Section>
        <h2 className="text-2xl md:text-3xl font-bold mb-2">
          Manufacturing Support
        </h2>
        <p className="text-muted-foreground mb-8">
          Production and quality support from prototypes to volume manufacturing.
        </p>
        <div className="grid gap-6 md:grid-cols-3">
          <SupportCard
            title="Production Planning"
            desc="Design for manufacturing optimization, process planning, test fixture design"
          />
          <SupportCard
            title="Quality Assurance"
            desc="Test procedure development, in-circuit testing, functional testing, compliance"
          />
          <SupportCard
            title="Supply Chain"
            desc="Vendor qualification, component sourcing, supply chain management"
          />
        </div>
      </Section>

      {/* Advanced Features */}
      <Section className="bg-secondary/40">
        <h2 className="text-2xl md:text-3xl font-bold mb-2">
          Advanced Design Features
        </h2>
        <p className="text-muted-foreground mb-8">
          Specialized design capabilities for demanding applications.
        </p>
        <div className="grid gap-6 md:grid-cols-2">
          <Card title="Signal Integrity & Power">
            <ul className="space-y-2">
              {[
                "High-speed signal routing (DDR, PCIe, SerDes)",
                "EMI/EMC mitigation",
                "Power integrity simulation",
                "Thermal analysis and cooling design",
                "3D thermal modeling",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2 text-sm">
                  <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground">{item}</span>
                </li>
              ))}
            </ul>
          </Card>
          <Card title="Specialized Domains">
            <ul className="space-y-2">
              {[
                "Automotive-grade design (AEC-Q200)",
                "Medical device certifications",
                "High-reliability applications",
                "Low-power and battery-powered designs",
                "Industrial IoT platforms",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2 text-sm">
                  <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground">{item}</span>
                </li>
              ))}
            </ul>
          </Card>
        </div>
      </Section>

      <SiteFooter />
    </div>
  );
}

function CapabilityCard({
  icon,
  title,
  desc,
}: {
  icon: React.ReactNode;
  title: string;
  desc: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -2 }}
      transition={{ duration: 0.4 }}
      className="rounded-lg border p-6 bg-card/60 backdrop-blur hover:shadow-md transition-all"
    >
      <div className="flex items-center gap-3 mb-3">
        <span className="grid h-10 w-10 place-items-center rounded-lg bg-primary/15 text-primary">
          {icon}
        </span>
        <h3 className="font-semibold">{title}</h3>
      </div>
      <p className="text-sm text-muted-foreground">{desc}</p>
    </motion.div>
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
      transition={{ duration: 0.4 }}
      className="rounded-lg border p-6 bg-card/60 backdrop-blur"
    >
      <h3 className="font-semibold text-foreground mb-4">{title}</h3>
      {children}
    </motion.div>
  );
}

function ProcessorCard({
  title,
  items,
}: {
  title: string;
  items: string[];
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -2 }}
      transition={{ duration: 0.4 }}
      className="rounded-lg border p-6 bg-card/60 backdrop-blur hover:shadow-md transition-all"
    >
      <h3 className="font-semibold text-foreground mb-4">{title}</h3>
      <ul className="space-y-2">
        {items.map((item) => (
          <li key={item} className="flex items-start gap-2 text-sm">
            <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
            <span className="text-muted-foreground">{item}</span>
          </li>
        ))}
      </ul>
    </motion.div>
  );
}

function ServiceCard({
  title,
  items,
}: {
  title: string;
  items: string[];
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -2 }}
      transition={{ duration: 0.4 }}
      className="rounded-lg border p-6 bg-card/60 backdrop-blur hover:shadow-md transition-all"
    >
      <h3 className="font-semibold text-foreground mb-4">{title}</h3>
      <ul className="space-y-2">
        {items.map((item) => (
          <li key={item} className="flex items-start gap-2 text-sm">
            <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
            <span className="text-muted-foreground">{item}</span>
          </li>
        ))}
      </ul>
    </motion.div>
  );
}

function SupportCard({
  title,
  desc,
}: {
  title: string;
  desc: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -2 }}
      transition={{ duration: 0.4 }}
      className="rounded-lg border p-6 bg-card/60 backdrop-blur hover:shadow-md transition-all"
    >
      <h3 className="font-semibold text-foreground mb-2">{title}</h3>
      <p className="text-sm text-muted-foreground">{desc}</p>
    </motion.div>
  );
}
