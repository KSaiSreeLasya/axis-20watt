import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import Section from "@/components/Section";
import DomainHero from "@/components/DomainHero";
import { Wrench, Zap, BarChart3, Shield } from "lucide-react";
import { motion } from "framer-motion";
import SEO from "@/components/SEO";
import { CheckCircle2 } from "lucide-react";

export default function Testing() {
  return (
    <div className="min-h-screen flex flex-col">
      <SiteHeader />
      <SEO
        title="Embedded Testing, QA & Automation | Embinsys"
        description="Automated test frameworks, stability testing, verification, and CI/CD pipelines for embedded systems and firmware."
        canonicalPath="/domains/testing"
      />
      <Section container>
        <DomainHero
          title="Testing & QA"
          subtitle="Comprehensive testing strategies: automated frameworks, stability testing, verification, and CI/CD for embedded products."
          image="https://images.pexels.com/photos/3913031/pexels-photo-3913031.jpeg"
          icon={<Wrench className="h-5 w-5" />}
        />
      </Section>

      {/* Core Capabilities */}
      <Section container>
        <h2 className="text-2xl md:text-3xl font-bold mb-8">Core Capabilities</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          <CapabilityCard
            icon={<Zap className="h-6 w-6" />}
            title="Test Automation"
            desc="Harnesses, simulators, automated test execution"
          />
          <CapabilityCard
            icon={<BarChart3 className="h-6 w-6" />}
            title="Stability Testing"
            desc="Long-run testing, stress testing, crash diagnostics"
          />
          <CapabilityCard
            icon={<Shield className="h-6 w-6" />}
            title="Verification"
            desc="Requirements traceability, compliance verification"
          />
          <CapabilityCard
            icon={<Wrench className="h-6 w-6" />}
            title="CI/CD Pipelines"
            desc="Build automation, continuous integration and deployment"
          />
        </div>
      </Section>

      {/* Test Framework */}
      <Section className="bg-secondary/40">
        <h2 className="text-2xl md:text-3xl font-bold mb-2">Test Framework</h2>
        <p className="text-muted-foreground mb-8">
          Comprehensive testing across all levels of embedded systems.
        </p>
        <div className="grid gap-6 md:grid-cols-2">
          <Card title="Unit & Component Testing">
            <ul className="space-y-2">
              {[
                "Module-level testing",
                "Driver validation",
                "Protocol stack testing",
                "Code coverage analysis",
                "Memory and resource testing",
                "Performance profiling",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2 text-sm">
                  <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground">{item}</span>
                </li>
              ))}
            </ul>
          </Card>
          <Card title="Integration & System Testing">
            <ul className="space-y-2">
              {[
                "System-level integration",
                "Hardware-in-the-loop (HIL)",
                "Software-in-the-loop (SIL)",
                "End-to-end functional testing",
                "API and interface validation",
                "Cross-platform compatibility",
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

      {/* Testing Types */}
      <Section>
        <h2 className="text-2xl md:text-3xl font-bold mb-8">Testing Types</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <TestTypeCard
            title="Functional Testing"
            desc="Verify all features work as specified against requirements"
          />
          <TestTypeCard
            title="Black-Box Testing"
            desc="Test system behavior without internal implementation knowledge"
          />
          <TestTypeCard
            title="Stability Testing"
            desc="Long-run tests, stress testing, reliability under load"
          />
          <TestTypeCard
            title="Verification Testing"
            desc="Confirm compliance with specifications and standards"
          />
          <TestTypeCard
            title="Regression Testing"
            desc="Ensure changes don't break existing functionality"
          />
          <TestTypeCard
            title="Performance Testing"
            desc="Measure throughput, latency, resource utilization"
          />
        </div>
      </Section>

      {/* Test Automation */}
      <Section className="bg-secondary/40">
        <h2 className="text-2xl md:text-3xl font-bold mb-2">
          Automation & CI/CD
        </h2>
        <p className="text-muted-foreground mb-8">
          Automated testing and continuous deployment pipelines.
        </p>
        <div className="grid gap-6 md:grid-cols-3">
          <AutomationCard
            title="Test Harnesses"
            items={[
              "Custom test harness development",
              "Mock object creation",
              "Test data generation",
              "Automated test execution",
              "Result reporting and analysis",
            ]}
          />
          <AutomationCard
            title="Build & Integration"
            items={[
              "Automated build systems",
              "Continuous integration (CI)",
              "Unit test automation",
              "Build artifact management",
              "Release automation",
            ]}
          />
          <AutomationCard
            title="Deployment & Monitoring"
            items={[
              "Continuous deployment (CD)",
              "OTA firmware updates",
              "Test environment management",
              "Performance monitoring",
              "Issue tracking and reporting",
            ]}
          />
        </div>
      </Section>

      {/* Specialized Testing */}
      <Section>
        <h2 className="text-2xl md:text-3xl font-bold mb-8">
          Specialized Testing Services
        </h2>
        <div className="grid gap-6 md:grid-cols-2">
          <SpecializedCard
            title="Embedded Systems Testing"
            items={[
              "Firmware and bootloader testing",
              "Driver validation",
              "RTOS interaction testing",
              "Memory leak detection",
              "Real-time behavior analysis",
            ]}
          />
          <SpecializedCard
            title="Device-Specific Testing"
            items={[
              "IoT device validation",
              "Medical device compliance",
              "Automotive ECU testing",
              "Connectivity testing (BLE, WiFi)",
              "Power consumption analysis",
            ]}
          />
        </div>
      </Section>

      {/* Tools & Lab */}
      <Section className="bg-secondary/40">
        <h2 className="text-2xl md:text-3xl font-bold mb-2">
          Testing Infrastructure
        </h2>
        <p className="text-muted-foreground mb-8">
          In-house lab with comprehensive testing equipment.
        </p>
        <div className="grid gap-6 md:grid-cols-3">
          <ToolCard
            title="Hardware Lab"
            items={["Oscilloscopes", "Logic analyzers", "Power analyzers", "Environmental chambers"]}
          />
          <ToolCard
            title="Software Tools"
            items={["Debuggers (JTAG, SWD)", "Profilers", "Code analyzers", "Test frameworks"]}
          />
          <ToolCard
            title="Platforms"
            items={["Development boards", "Custom test rigs", "HIL simulators", "Protocol analyzers"]}
          />
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

function TestTypeCard({
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

function AutomationCard({
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

function SpecializedCard({
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

function ToolCard({
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
