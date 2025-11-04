import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import Section from "@/components/Section";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
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
        <div className="relative overflow-hidden rounded-2xl border bg-gradient-to-br from-violet-50 via-white to-emerald-50 dark:from-violet-950/40 dark:via-slate-950 dark:to-emerald-950/30">
          <div className="grid gap-8 md:grid-cols-2 p-8 md:p-12 items-center">
            <div>
              <p className="text-sm font-semibold text-primary">
                Engineering & Design Services
              </p>
              <h1 className="mt-2 text-4xl md:text-6xl font-extrabold tracking-tight bg-gradient-to-r from-primary to-emerald-400 bg-clip-text text-transparent">
                Innovation. Quality. Reliability.
              </h1>
              <p className="mt-4 text-base md:text-lg text-foreground/80 max-w-xl leading-relaxed">
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
              <div className="mt-6 flex flex-wrap gap-2">
                <Pill icon={<Wifi className="h-4 w-4" />}>IoT</Pill>
                <Pill icon={<Stethoscope className="h-4 w-4" />}>Medical</Pill>
                <Pill icon={<Car className="h-4 w-4" />}>Automotive</Pill>
                <Pill icon={<Cpu className="h-4 w-4" />}>SoC</Pill>
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
            to="/capabilities"
            title="Capabilities"
            desc="End‑to‑end product engineering across hardware, software, and test."
            icon={<Layers className="h-5 w-5" />}
          />
          <LinkCard
            to="/projects"
            title="Projects"
            desc="Selected work across medical, industrial, consumer and automotive."
            icon={<Award className="h-5 w-5" />}
          />
          <LinkCard
            to="/contact"
            title="Contact"
            desc="Talk to our team about your product or resource needs."
            icon={<Wrench className="h-5 w-5" />}
          />
        </div>
      </Section>

      {/* Domains */}
      <Section className="bg-secondary/40">
        <h2 className="text-2xl font-bold">Domains</h2>
        <p className="mt-2 text-foreground/80 max-w-2xl leading-relaxed">
          Where we deliver the most impact across industries and technologies.
        </p>
        <div className="mt-6 rounded-xl border bg-card/30 p-4 md:p-6">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <DomainCard
              to="/domains/iot"
              title="IoT"
              desc="Device firmware, gateways, cloud integration"
              image="https://images.pexels.com/photos/159304/network-cable-ethernet-computer-159304.jpeg"
              icon={<Wifi className="h-5 w-5" />}
            />
            <DomainCard
              to="/domains/medical"
              title="Medical"
              desc="Regulated devices, sensors, connectivity"
              image="https://images.pexels.com/photos/7108177/pexels-photo-7108177.jpeg"
              icon={<Stethoscope className="h-5 w-5" />}
            />
            <DomainCard
              to="/domains/automotive"
              title="Automotive"
              desc="BSP, telematics, CAN/UDS/J1939"
              image="https://images.pexels.com/photos/18968756/pexels-photo-18968756.jpeg"
              icon={<Car className="h-5 w-5" />}
            />
            <DomainCard
              to="/domains/soc"
              title="SoC"
              desc="BSP, bootloaders, silicon validation"
              image="https://images.pexels.com/photos/3665442/pexels-photo-3665442.jpeg"
              icon={<Cpu className="h-5 w-5" />}
            />
            <DomainCard
              to="/domains/hardware"
              title="Hardware"
              desc="Schematics, layout, bring‑up"
              image="https://images.pexels.com/photos/6755088/pexels-photo-6755088.jpeg"
              icon={<CircuitBoard className="h-5 w-5" />}
            />
            <DomainCard
              to="/domains/testing"
              title="Testing"
              desc="Automation, stability, verification"
              image="https://images.pexels.com/photos/3913031/pexels-photo-3913031.jpeg"
              icon={<Wrench className="h-5 w-5" />}
            />
          </div>
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
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
      className="rounded-lg border bg-background/70 p-4"
    >
      <div className="text-2xl font-bold">{kpi}</div>
      <div className="text-xs text-muted-foreground">{label}</div>
    </motion.div>
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
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -2, boxShadow: "0 8px 24px rgba(0,0,0,0.08)" }}
      transition={{ duration: 0.4 }}
      className="rounded-xl border bg-background/70 p-4"
    >
      <div className="flex items-center gap-2 font-semibold">
        {icon}
        {title}
      </div>
      <p className="mt-1 text-sm text-muted-foreground">{subtitle}</p>
    </motion.div>
  );
}

function LinkCard({
  to,
  title,
  desc,
  icon,
}: {
  to: string;
  title: string;
  desc: string;
  icon: React.ReactNode;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.45 }}
    >
      <Link
        to={to}
        className="group rounded-xl border bg-card/40 p-5 md:p-6 transition-all hover:bg-card hover:shadow-lg hover:-translate-y-0.5 ring-1 ring-transparent hover:ring-primary/30"
      >
        <div className="flex items-center gap-3 font-semibold">
          <span className="grid h-9 w-9 place-items-center rounded-md bg-primary/10 text-primary">
            {icon}
          </span>
          <span>{title}</span>
        </div>
        <p className="mt-3 text-sm text-foreground/70 leading-relaxed">
          {desc}
        </p>
        <div className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-primary">
          <span className="group-hover:underline">Learn more</span>
          <span
            aria-hidden
            className="transition-transform group-hover:translate-x-0.5"
          >
            →
          </span>
        </div>
      </Link>
    </motion.div>
  );
}

function DomainCard({
  to,
  title,
  desc,
  image,
  icon,
}: {
  to: string;
  title: string;
  desc: string;
  image: string;
  icon: React.ReactNode;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.45 }}
    >
      <Link
        to={to}
        className="group relative overflow-hidden rounded-xl border h-48"
      >
        <img
          src={image}
          alt=""
          className="absolute inset-0 h-full w-full object-cover opacity-70 transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/60 to-background/20" />
        <div className="relative z-10 h-full p-5 md:p-6 flex flex-col justify-end">
          <div className="flex items-center gap-3 font-semibold">
            <span className="grid h-9 w-9 place-items-center rounded-md bg-primary/20 text-primary">
              {icon}
            </span>
            <span>{title}</span>
          </div>
          <p className="mt-1 text-sm text-foreground/80 leading-relaxed">
            {desc}
          </p>
          <div className="mt-3 inline-flex items-center gap-1 w-fit rounded-md bg-background/70 px-2 py-1 text-sm font-semibold text-primary">
            <span className="group-hover:underline">Learn more</span>
            <span
              aria-hidden
              className="transition-transform group-hover:translate-x-0.5"
            >
              →
            </span>
          </div>
        </div>
      </Link>
    </motion.div>
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
