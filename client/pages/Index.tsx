import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import Section from "@/components/Section";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import SEO from "@/components/SEO";
import {
  Award,
  Cpu,
  Wrench,
  Layers,
  Wifi,
  Stethoscope,
  Car,
  CircuitBoard,
  Smartphone,
  Zap,
  Shield,
  Globe,
  CheckCircle2,
  Rocket,
} from "lucide-react";

export default function Index() {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <SiteHeader />
      <SEO
        title="Embinsys - Engineering & Design Services | Embedded Systems Solutions"
        description="Embinsys delivers innovative embedded systems and engineering services in IoT, medical devices, automotive, and SoC with 25+ years of industry expertise."
        canonicalPath="/"
      />

      {/* Hero */}
      <Section container>
        <div className="relative overflow-hidden rounded-2xl border bg-gradient-to-br from-teal-50 via-white to-emerald-50 dark:from-teal-950/30 dark:via-slate-950 dark:to-emerald-950/20">
          <div className="grid gap-8 md:grid-cols-2 p-8 md:p-12 items-center">
            <div>
              <motion.p
                initial={{ opacity: 0, y: -8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                className="text-sm font-semibold text-primary"
              >
                Engineering & Design Services
              </motion.p>
              <motion.h1
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="mt-2 pb-[20px] text-4xl md:text-6xl font-extrabold tracking-tight bg-gradient-to-r from-primary to-emerald-400 bg-clip-text text-transparent drop-shadow-[0_2px_8px_rgba(16,185,129,0.15)]"
              >
                Innovation. Quality. Reliability.
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="mt-4 text-base md:text-lg text-foreground/80 max-w-xl leading-relaxed"
              >
                Enabling global companies with product and engineering services.
                Start-to-finish embedded systems expertise across hardware,
                software, testing, and support.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="mt-6 flex flex-wrap gap-3"
              >
                <Button asChild size="lg">
                  <a href="/contact">Get Started</a>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <a href="/capabilities">Explore Capabilities</a>
                </Button>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="mt-6 flex flex-wrap gap-2"
              >
                <Pill icon={<Wifi className="h-4 w-4" />}>IoT</Pill>
                <Pill icon={<Stethoscope className="h-4 w-4" />}>Medical</Pill>
                <Pill icon={<Car className="h-4 w-4" />}>Automotive</Pill>
                <Pill icon={<Cpu className="h-4 w-4" />}>SoC</Pill>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="mt-8 grid grid-cols-3 gap-4 text-center"
              >
                <Stat kpi="25+" label="Years Experience" />
                <Stat kpi="80+" label="Team Engineers" />
                <Stat kpi="2" label="Global Offices" />
              </motion.div>
            </div>
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <img
                src="https://images.pexels.com/photos/3825581/pexels-photo-3825581.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800"
                alt="Embedded device PCB and components"
                loading="eager"
                fetchpriority="high"
                decoding="async"
                className="rounded-xl border shadow-lg object-cover w-full h-[240px] md:h-[320px] lg:h-[420px]"
              />
            </motion.div>
          </div>
        </div>
      </Section>

      {/* Company Overview */}
      <Section className="bg-secondary/40">
        <h2 className="text-2xl md:text-3xl font-bold">About Embinsys</h2>
        <p className="mt-2 text-foreground/80 max-w-3xl leading-relaxed">
          For over 25 years, Embinsys has been enabling global companies with
          comprehensive product and engineering services. With dual offices in
          Troy, Michigan (USA) and Hyderabad, India, and a team of 80+
          experienced engineers, we deliver end-to-end embedded systems solutions
          with a focus on quality, reliability, and innovation.
        </p>
        <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          <OverviewCard
            icon={<Rocket className="h-5 w-5" />}
            title="Full-Stack Expertise"
            desc="Hardware design, firmware, software, testing, and support"
          />
          <OverviewCard
            icon={<Shield className="h-5 w-5" />}
            title="Reliable Execution"
            desc="Quality and technology-focused with proven track record"
          />
          <OverviewCard
            icon={<Globe className="h-5 w-5" />}
            title="Global Reach"
            desc="Serving multinational companies and startups worldwide"
          />
          <OverviewCard
            icon={<Zap className="h-5 w-5" />}
            title="Extended Teams"
            desc="Resource augmentation and flexible engagement models"
          />
        </div>
      </Section>

      {/* Quick links */}
      <Section>
        <div className="rounded-xl border bg-card/50 backdrop-blur p-4 md:p-6">
          <div className="grid gap-6 md:grid-cols-3">
            <LinkCard
              to="/capabilities"
              title="Capabilities"
              desc="End‑to‑end product engineering across hardware, software, and test."
              image="https://images.pexels.com/photos/3938016/pexels-photo-3938016.jpeg"
              icon={<Layers className="h-5 w-5" />}
            />
            <LinkCard
              to="/projects"
              title="Projects"
              desc="Selected work across medical, industrial, consumer and automotive."
              image="https://images.pexels.com/photos/7974/pexels-photo-7974.jpeg"
              icon={<Award className="h-5 w-5" />}
            />
            <LinkCard
              to="/contact"
              title="Contact"
              desc="Talk to our team about your product or resource needs."
              image="https://images.pexels.com/photos/8728429/pexels-photo-8728429.jpeg"
              icon={<Wrench className="h-5 w-5" />}
            />
          </div>
        </div>
      </Section>

      {/* Centers of Excellence */}
      <Section className="bg-secondary/40">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold">
            Specialized Teams for Every Market
          </h2>
          <p className="mt-2 text-foreground/80 max-w-3xl mx-auto leading-relaxed">
            Expert centers focused on specific industries - each with deep knowledge and proven track records
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          <CoECard
            emoji="📱"
            icon={<Smartphone className="h-6 w-6" />}
            title="Handheld & IoT"
            highlight="Smart Devices"
            desc="Building smart devices - phones, watches, home devices"
            topics={["Android", "Connectivity", "Low-power design", "User apps"]}
          />
          <CoECard
            emoji="🏥"
            icon={<Stethoscope className="h-6 w-6" />}
            title="Medical Devices"
            highlight="Healthcare"
            desc="Medical-grade devices that save lives"
            topics={["Regulatory compliance", "Patient safety", "Sensor integration", "Data security"]}
          />
          <CoECard
            emoji="🚗"
            icon={<Car className="h-6 w-6" />}
            title="Automotive"
            highlight="Connected Vehicles"
            desc="Making cars smarter and safer"
            topics={["Vehicle networks", "Safety systems", "Telematics", "Real-time control"]}
          />
          <CoECard
            emoji="⚙️"
            icon={<Cpu className="h-6 w-6" />}
            title="Silicon & SoC"
            highlight="Chip Design"
            desc="Enabling next-generation processors"
            topics={["Bootloaders", "Drivers", "Performance", "Validation"]}
          />
        </div>
      </Section>

      {/* Expertise Capabilities */}
      <Section>
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-2">
            Four Pillars of Expertise
          </h2>
          <p className="text-foreground/80 max-w-3xl mx-auto leading-relaxed">
            Complete end-to-end engineering solutions from hardware to deployment
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          <ExpertiseCard
            icon="🛠️"
            title="Product"
            subtitle="Hardware Design"
            desc="We design the physical hardware - circuits, PCBs, and all components that make devices work"
            items={[
              "Requirements analysis",
              "System design & review",
              "Schematic & PCB design",
              "Component selection",
              "Quality assurance",
            ]}
          />
          <ExpertiseCard
            icon="💻"
            title="Software"
            subtitle="Device Intelligence"
            desc="We write the code that makes devices smart - from firmware to apps"
            items={[
              "Bootloaders and drivers",
              "Operating systems",
              "Communication protocols",
              "User interfaces",
              "Cloud integration",
            ]}
          />
          <ExpertiseCard
            icon="✓"
            title="Testing"
            subtitle="Quality Verification"
            desc="We make sure everything works perfectly - testing and quality assurance"
            items={[
              "Automated testing",
              "Stability testing",
              "Performance validation",
              "Reliability testing",
              "Compliance verification",
            ]}
          />
          <ExpertiseCard
            icon="🤝"
            title="Support"
            subtitle="Expert Guidance"
            desc="We're here to help - training, resources, and ongoing support"
            items={[
              "Team augmentation",
              "Technical training",
              "Troubleshooting",
              "Escalation support",
              "Knowledge transfer",
            ]}
          />
        </div>
      </Section>

      {/* Engagement Models */}
      <Section className="bg-secondary/40">
        <h2 className="text-2xl md:text-3xl font-bold mb-2">
          Engagement Models
        </h2>
        <p className="text-foreground/80 max-w-3xl leading-relaxed mb-8">
          Flexible partnerships tailored to your project needs.
        </p>
        <div className="grid gap-6 md:grid-cols-3">
          <EngagementCard
            title="Project / SoW"
            desc="Complete project delivery with defined scope of work and timeline"
          />
          <EngagementCard
            title="Resource Augmentation"
            desc="Scale your team with skilled engineers working as extended team"
          />
          <EngagementCard
            title="Build Operate Transfer"
            desc="Build capability, operate services, then transfer to your team"
          />
        </div>
      </Section>

      {/* Domains */}
      <Section>
        <h2 className="text-2xl md:text-3xl font-bold">Domains</h2>
        <p className="mt-2 text-foreground/80 max-w-3xl leading-relaxed mb-8">
          Where we deliver the most impact across industries and technologies.
        </p>
        <div className="rounded-xl border bg-card/60 backdrop-blur p-4 md:p-6">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <DomainCard
              to="/domains/iot"
              title="IoT"
              desc="Firmware design, embedded applications, web services, hardware, mobile apps, platform integration"
              image="https://images.pexels.com/photos/159304/network-cable-ethernet-computer-159304.jpeg"
              icon={<Wifi className="h-5 w-5" />}
            />
            <DomainCard
              to="/domains/medical"
              title="Medical"
              desc="Regulated devices, sensors, connectivity, R&D, clinical processes, firmware"
              image="https://images.pexels.com/photos/7108177/pexels-photo-7108177.jpeg"
              icon={<Stethoscope className="h-5 w-5" />}
            />
            <DomainCard
              to="/domains/automotive"
              title="Automotive"
              desc="BSP, telematics, CAN/UDS/J1939, firmware, connectivity, compliance"
              image="https://images.pexels.com/photos/18968756/pexels-photo-18968756.jpeg"
              icon={<Car className="h-5 w-5" />}
            />
            <DomainCard
              to="/domains/soc"
              title="SoC"
              desc="BSP, bootloaders, drivers, connectivity, audio, silicon design"
              image="https://images.pexels.com/photos/3665442/pexels-photo-3665442.jpeg"
              icon={<Cpu className="h-5 w-5" />}
            />
            <DomainCard
              to="/domains/hardware"
              title="Hardware"
              desc="Schematics, PCB layout, bring‑up, testing, manufacturing support"
              image="https://images.pexels.com/photos/6755088/pexels-photo-6755088.jpeg"
              icon={<CircuitBoard className="h-5 w-5" />}
            />
            <DomainCard
              to="/domains/testing"
              title="Testing"
              desc="Automation, stability, verification, functional testing, frameworks"
              image="https://images.pexels.com/photos/3913031/pexels-photo-3913031.jpeg"
              icon={<Wrench className="h-5 w-5" />}
            />
          </div>
        </div>
      </Section>

      {/* IoT Applications */}
      <Section className="bg-secondary/40">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-2">
            IoT Applications
          </h2>
          <p className="text-foreground/80 max-w-3xl mx-auto leading-relaxed">
            Smart devices that make everyday tasks smarter, faster, and more efficient
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-5">
          <IoTAppCard
            title="🏭 Industrial IoT"
            desc="Factories that monitor themselves - machines that predict problems before they happen"
            icon={<Zap className="h-6 w-6" />}
            examples={["Predictive maintenance", "Production optimization", "Equipment monitoring"]}
          />
          <IoTAppCard
            title="🏥 Medical IoT"
            desc="Devices that care for your health - from monitoring your heart to tracking fitness"
            icon={<Stethoscope className="h-6 w-6" />}
            examples={["Health monitoring", "Patient alerts", "Remote diagnosis"]}
          />
          <IoTAppCard
            title="🏙️ Smart City"
            desc="Cities that work efficiently - traffic flows better, utilities use less energy"
            icon={<Globe className="h-6 w-6" />}
            examples={["Traffic management", "Energy saving", "Public safety"]}
          />
          <IoTAppCard
            title="🚗 Automotive IoT"
            desc="Cars that are smarter and safer - connected and aware of their surroundings"
            icon={<Car className="h-6 w-6" />}
            examples={["Navigation", "Safety features", "Remote control"]}
          />
          <IoTAppCard
            title="📱 Consumer IoT"
            desc="Home devices that listen and respond - making life simpler and more connected"
            icon={<Smartphone className="h-6 w-6" />}
            examples={["Smart home", "Wearables", "Personal devices"]}
          />
        </div>
      </Section>

      {/* Client Partners */}
      <Section>
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-2">
            Trusted by Global Leaders
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Our expertise is trusted by Fortune 500 companies and leading innovators worldwide
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {[
            { name: "Qualcomm", color: "from-blue-600 to-blue-400", desc: "Leading chipset provider" },
            { name: "Intel", color: "from-blue-700 to-blue-500", desc: "Global processor leader" },
            { name: "Bosch", color: "from-red-600 to-red-400", desc: "Industrial innovation" },
            { name: "Ford", color: "from-blue-800 to-blue-600", desc: "Automotive excellence" },
            { name: "Thermo Fisher", color: "from-orange-600 to-orange-400", desc: "Medical devices" },
            { name: "AMD", color: "from-red-700 to-red-500", desc: "Advanced computing" },
            { name: "Tech Mahindra", color: "from-blue-600 to-cyan-400", desc: "Digital transformation" },
            { name: "OnePlus", color: "from-red-600 to-pink-500", desc: "Mobile innovation" },
          ].map((client) => (
            <motion.div
              key={client.name}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ y: -4, boxShadow: "0 12px 24px rgba(0,0,0,0.15)" }}
              transition={{ duration: 0.4 }}
              className={`rounded-lg border p-6 flex flex-col items-center justify-center text-center min-h-32 bg-gradient-to-br ${client.color} opacity-10 hover:opacity-15 transition-opacity hover:border-primary/50`}
            >
              <div className="font-bold text-foreground text-lg mb-1">{client.name}</div>
              <div className="text-xs text-muted-foreground">{client.desc}</div>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* CTA band */}
      <Section container>
        <div className="rounded-xl border p-8 md:p-10 bg-gradient-to-r from-primary/10 to-transparent">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <h3 className="text-xl md:text-2xl font-bold">
                Ready to build your next product?
              </h3>
              <p className="text-muted-foreground mt-1">
                Collaborate with a dependable engineering partner with 25+ years
                of expertise.
              </p>
            </div>
            <Button asChild size="lg">
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
      className="rounded-lg border bg-background/70 p-4 shadow-sm hover:shadow-md transition-shadow"
    >
      <div className="text-2xl font-bold">{kpi}</div>
      <div className="text-xs text-muted-foreground">{label}</div>
    </motion.div>
  );
}

function OverviewCard({
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
      whileHover={{ y: -4 }}
      transition={{ duration: 0.4 }}
      className="rounded-lg border bg-background/70 p-5 shadow-sm hover:shadow-md transition-all"
    >
      <div className="flex items-center gap-2 font-semibold mb-2">
        <span className="grid h-8 w-8 place-items-center rounded-md bg-primary/15 text-primary">
          {icon}
        </span>
        {title}
      </div>
      <p className="text-sm text-muted-foreground">{desc}</p>
    </motion.div>
  );
}

function CoECard({
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
      whileHover={{ y: -4 }}
      transition={{ duration: 0.4 }}
      className="rounded-lg border bg-background/70 p-6 shadow-sm hover:shadow-md transition-all"
    >
      <div className="mb-3 flex items-center justify-center h-12 w-12 rounded-lg bg-primary/15 text-primary">
        {icon}
      </div>
      <h3 className="font-semibold mb-2">{title}</h3>
      <p className="text-sm text-muted-foreground">{desc}</p>
    </motion.div>
  );
}

function ExpertiseCard({
  icon,
  title,
  subtitle,
  desc,
  items,
}: {
  icon: string;
  title: string;
  subtitle: string;
  desc: string;
  items: string[];
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -4 }}
      transition={{ duration: 0.4 }}
      className="rounded-lg border p-6 bg-card/60 backdrop-blur hover:shadow-md transition-all"
    >
      <div className="text-4xl mb-2">{icon}</div>
      <h3 className="font-bold text-lg">{title}</h3>
      <p className="text-xs font-medium text-primary/70 mb-3">{subtitle}</p>
      <p className="text-xs text-muted-foreground mb-4">{desc}</p>
      <ul className="space-y-1.5">
        {items.map((item) => (
          <li key={item} className="flex items-start gap-2 text-xs">
            <span className="h-1.5 w-1.5 rounded-full bg-primary mt-1 flex-shrink-0" />
            <span className="text-muted-foreground">{item}</span>
          </li>
        ))}
      </ul>
    </motion.div>
  );
}

function EngagementCard({
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
      <h3 className="font-bold mb-2">{title}</h3>
      <p className="text-sm text-muted-foreground">{desc}</p>
    </motion.div>
  );
}

function LinkCard({
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
        className="group relative overflow-hidden rounded-xl border h-48 hover:shadow-lg transition-shadow"
      >
        <img
          src={image}
          alt=""
          loading="lazy"
          decoding="async"
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
        className="group relative overflow-hidden rounded-xl border h-48 hover:shadow-lg transition-shadow"
      >
        <img
          src={image}
          alt={title}
          loading="lazy"
          decoding="async"
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

function IoTAppCard({
  title,
  desc,
  icon,
  examples,
}: {
  title: string;
  desc: string;
  icon: React.ReactNode;
  examples?: string[];
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -4 }}
      transition={{ duration: 0.4 }}
      className="rounded-lg border p-6 bg-background/70 hover:shadow-md transition-all"
    >
      <div className="mb-3 flex items-center justify-center h-12 w-12 rounded-lg bg-primary/15 text-primary">
        {icon}
      </div>
      <h3 className="font-semibold mb-2">{title}</h3>
      <p className="text-sm text-muted-foreground mb-3">{desc}</p>
      {examples && (
        <ul className="text-xs space-y-1">
          {examples.map((ex) => (
            <li key={ex} className="flex items-center gap-1 text-primary/70">
              <span className="h-1 w-1 rounded-full bg-primary" />
              {ex}
            </li>
          ))}
        </ul>
      )}
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
    <span className="inline-flex items-center gap-1 rounded-full border bg-background/80 backdrop-blur px-3 py-1 text-sm">
      {icon}
      {children}
    </span>
  );
}
