import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import Section from "@/components/Section";
import { Button } from "@/components/ui/button";
import {
  Award,
  Cpu,
  Wrench,
  Layers,
  Wifi,
  Stethoscope,
  Car,
  CircuitBoard,
} from "lucide-react";

export default function Index() {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <SiteHeader />

      {/* Hero */}
      <Section container>
        <div className="relative overflow-hidden rounded-2xl border bg-gradient-to-br from-sky-50 via-white to-amber-50 dark:from-slate-900 dark:via-slate-950 dark:to-slate-900">
          <div className="grid gap-8 md:grid-cols-2 p-8 md:p-12 items-center">
            <div>
              <p className="text-sm font-semibold text-primary">
                Engineering & Design Services
              </p>
              <h1 className="mt-2 text-3xl md:text-5xl font-extrabold tracking-tight">
                Innovation. Quality. Reliability.
              </h1>
              <p className="mt-4 text-lg text-muted-foreground max-w-xl">
                Embedded systems, IoT, medical and automotive solutions
                delivered by a senior team with 25+ years of experience.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <Button asChild>
                  <a href="/contact">Contact Us</a>
                </Button>
                <Button asChild variant="outline">
                  <a href="/capabilities">Explore Capabilities</a>
                </Button>
              </div>
              <div className="mt-8 grid grid-cols-3 gap-4 text-center">
                <Stat kpi="12+" label="Years" />
                <Stat kpi="80+" label="Engineers" />
                <Stat kpi="2" label="Global Offices" />
              </div>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <FeatureCard
                icon={<Cpu className="h-5 w-5" />}
                title="Embedded SW"
                subtitle="BSP, drivers, RTOS, Linux, Android"
              />
              <FeatureCard
                icon={<CircuitBoard className="h-5 w-5" />}
                title="Hardware"
                subtitle="Schematics, layout, bring‑up"
              />
              <FeatureCard
                icon={<Wrench className="h-5 w-5" />}
                title="Testing"
                subtitle="Automation, stability, verification"
              />
              <FeatureCard
                icon={<Award className="h-5 w-5" />}
                title="Delivery"
                subtitle="SoW, BOT, augmentation"
              />
            </div>
          </div>
        </div>
      </Section>

      {/* Quick links */}
      <Section>
        <div className="grid gap-6 md:grid-cols-3">
          <LinkCard
            href="/capabilities"
            title="Capabilities"
            desc="End‑to‑end product engineering across hardware, software, and test."
            icon={<Layers className="h-5 w-5" />}
          />
          <LinkCard
            href="/projects"
            title="Projects"
            desc="Selected work across medical, industrial, consumer and automotive."
            icon={<Award className="h-5 w-5" />}
          />
          <LinkCard
            href="/contact"
            title="Contact"
            desc="Talk to our team about your product or resource needs."
            icon={<Wrench className="h-5 w-5" />}
          />
        </div>
      </Section>

      {/* Domains */}
      <Section className="bg-secondary/30">
        <h2 className="text-2xl font-bold">Domains</h2>
        <p className="mt-2 text-muted-foreground max-w-2xl">
          Where we deliver the most impact across industries and technologies.
        </p>
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <LinkCard
            href="/capabilities#iot"
            title="IoT"
            desc="Device firmware, gateways, cloud integration"
            icon={<Wifi className="h-5 w-5" />}
          />
          <LinkCard
            href="/capabilities#medical"
            title="Medical"
            desc="Regulated devices, sensors, connectivity"
            icon={<Stethoscope className="h-5 w-5" />}
          />
          <LinkCard
            href="/capabilities#automotive"
            title="Automotive"
            desc="BSP, telematics, CAN/UDS/J1939"
            icon={<Car className="h-5 w-5" />}
          />
          <LinkCard
            href="/capabilities#soc"
            title="SoC"
            desc="BSP, bootloaders, silicon validation"
            icon={<Cpu className="h-5 w-5" />}
          />
          <LinkCard
            href="/capabilities#hardware"
            title="Hardware"
            desc="Schematics, layout, bring‑up"
            icon={<CircuitBoard className="h-5 w-5" />}
          />
          <LinkCard
            href="/capabilities#testing"
            title="Testing"
            desc="Automation, stability, verification"
            icon={<Wrench className="h-5 w-5" />}
          />
        </div>
      </Section>

      {/* CTA band */}
      <Section container>
        <div className="rounded-xl border p-8 md:p-10 bg-gradient-to-r from-primary/10 to-transparent">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <h3 className="text-xl md:text-2xl font-bold">
                Let’s build your next product
              </h3>
              <p className="text-muted-foreground">
                Collaborate with a dependable engineering partner that
                integrates with your team.
              </p>
            </div>
            <Button asChild>
              <a href="/contact">Start a conversation</a>
            </Button>
          </div>
        </div>
      </Section>

      <SiteFooter />
    </div>
  );
}

function Stat({ kpi, label }: { kpi: string; label: string }) {
  return (
    <div className="rounded-lg border bg-background/70 p-4">
      <div className="text-2xl font-bold">{kpi}</div>
      <div className="text-xs text-muted-foreground">{label}</div>
    </div>
  );
}

function FeatureCard({
  icon,
  title,
  subtitle,
}: {
  icon: React.ReactNode;
  title: string;
  subtitle: string;
}) {
  return (
    <div className="rounded-xl border bg-background/70 p-4">
      <div className="flex items-center gap-2 font-semibold">
        {icon}
        {title}
      </div>
      <p className="mt-1 text-sm text-muted-foreground">{subtitle}</p>
    </div>
  );
}

function LinkCard({
  href,
  title,
  desc,
  icon,
}: {
  href: string;
  title: string;
  desc: string;
  icon: React.ReactNode;
}) {
  return (
    <a
      href={href}
      className="group rounded-xl border p-6 transition-colors hover:bg-accent/40"
    >
      <div className="flex items-center gap-2 font-semibold">
        {icon}
        {title}
      </div>
      <p className="mt-2 text-sm text-muted-foreground">{desc}</p>
      <div className="mt-3 text-sm font-medium text-primary group-hover:underline">
        Learn more →
      </div>
    </a>
  );
}

function Pill({
  children,
  icon,
}: {
  children: React.ReactNode;
  icon?: React.ReactNode;
}) {
  return (
    <span className="inline-flex items-center gap-1 rounded-full border bg-background px-3 py-1 text-sm">
      {icon}
      {children}
    </span>
  );
}
