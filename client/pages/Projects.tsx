import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import Section from "@/components/Section";
import { motion } from "framer-motion";

export default function Projects() {
  return (
    <div className="min-h-screen flex flex-col">
      <SiteHeader />
      <Section container>
        <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight">
          Projects
        </h1>
        <p className="mt-3 text-muted-foreground max-w-3xl">
          Selected work across medical, industrial, consumer, automotive and
          silicon domains.
        </p>
        <div className="mt-8 grid gap-6 md:grid-cols-3 text-sm text-muted-foreground">
          <Proj
            title="Smart Knee Joint Monitor"
            points={[
              "DA14682 BLE SoC with haptics",
              "Custom HW/FW/Android app",
              "I2C/SPI/ADC/BLE drivers",
            ]}
          />
          <Proj
            title="Dashpod Module"
            points={[
              "nRF52833 DK",
              "OTA via nRF Connect",
              "A111 radar, 6D accel, LEDs",
            ]}
          />
          <Proj
            title="Commercial RO"
            points={[
              "TI MSP432E401Y",
              "I2C TDS, ADC temp, GPIO flow",
              "UART GSM/GPS/Wi‑Fi drivers",
            ]}
          />
          <Proj
            title="IoT Controller"
            points={[
              "ESP32",
              "Schematics, risk mgmt, placement, routing, test",
            ]}
          />
          <Proj
            title="Wi‑Fi Bridge"
            points={["MXChip MX3239", "Schematics→Testing"]}
          />
          <Proj
            title="Smart Helmet"
            points={["TI OMAP4430", "BT3→BT4, camera, brightness, navigation"]}
          />
          <Proj
            title="Smart Band"
            points={["nRF51822", "HR/steps, Android BLE client, notifications"]}
          />
          <Proj
            title="BP Monitor"
            points={["BLE BP notifications, Android client, UI"]}
          />
          <Proj
            title="Smart Lock"
            points={[
              "Quectel EC25 + nRF52832",
              "BLE GATT server & Android/Web",
            ]}
          />
        </div>
      </Section>
      <SiteFooter />
    </div>
  );
}

function Proj({ title, points }: { title: string; points: string[] }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -2, boxShadow: "0 8px 24px rgba(0,0,0,0.08)" }}
      transition={{ duration: 0.4 }}
      className="rounded-lg border p-5"
    >
      <div className="font-semibold mb-2 text-foreground">{title}</div>
      <ul className="list-disc pl-5 space-y-1">
        {points.map((p) => (
          <li key={p} className="text-sm text-muted-foreground">
            {p}
          </li>
        ))}
      </ul>
    </motion.div>
  );
}
