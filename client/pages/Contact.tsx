import { useState } from "react";
import { toast } from "sonner";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import Section from "@/components/Section";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import SEO from "@/components/SEO";
import { supabase } from "@/lib/supabase";
import { Mail, Globe, MapPin } from "lucide-react";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [phone, setPhone] = useState("");
  const [budget, setBudget] = useState("");
  const [timeline, setTimeline] = useState("");
  const [message, setMessage] = useState("");
  const [agree, setAgree] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !message) {
      toast.error("Please fill out all required fields");
      return;
    }
    if (!agree) {
      toast.error("Please accept the privacy notice");
      return;
    }

    setIsLoading(true);
    try {
      const messageCombined = `${message}\n\nCompany: ${company || "N/A"}\nPhone: ${phone || "N/A"}\nBudget: ${budget || "N/A"}\nTimeline: ${timeline || "N/A"}`;
      const { error } = await supabase.from("contact_submissions").insert({
        name,
        email,
        message: messageCombined,
      });

      if (error) {
        console.error("Supabase error:", error);
        toast.error("Failed to submit form. Please try again.");
        return;
      }

      toast.success("Thank you! We'll get back to you shortly.");
      setName("");
      setEmail("");
      setCompany("");
      setPhone("");
      setBudget("");
      setTimeline("");
      setMessage("");
      setAgree(false);
    } catch (error) {
      console.error("Error submitting form:", error);
      toast.error("An error occurred while submitting the form");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <SiteHeader />
      <SEO
        title="Contact Azorix Technologies | Hyderabad | Software, AI & IoT Experts"
        description="Get in touch with Azorix Technologies for software development, AI, IoT, and embedded engineering solutions."
        canonicalPath="/contact"
      />
      <Section container>
        <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight">
          Contact
        </h1>
        <p className="mt-3 text-muted-foreground max-w-2xl">
          Tell us about your project or resource needs. Our leadership team will
          respond promptly.
        </p>
        <motion.form
          onSubmit={onSubmit}
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-8 grid gap-6 max-w-3xl rounded-xl border bg-card/60 backdrop-blur p-6"
        >
          <div className="grid gap-4 md:grid-cols-2">
            <div>
              <label className="text-sm font-medium">Name</label>
              <input
                placeholder="Your full name"
                className="mt-1 w-full rounded-md border bg-background px-3 py-2 focus:ring-2 focus:ring-ring focus:outline-none"
                value={name}
                onChange={(e) => setName(e.target.value)}
                disabled={isLoading}
              />
            </div>
            <div>
              <label className="text-sm font-medium">Email</label>
              <input
                type="email"
                placeholder="you@company.com"
                className="mt-1 w-full rounded-md border bg-background px-3 py-2 focus:ring-2 focus:ring-ring focus:outline-none"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                disabled={isLoading}
              />
            </div>
            <div>
              <label className="text-sm font-medium">Company</label>
              <input
                placeholder="Company or organization"
                className="mt-1 w-full rounded-md border bg-background px-3 py-2 focus:ring-2 focus:ring-ring focus:outline-none"
                value={company}
                onChange={(e) => setCompany(e.target.value)}
                disabled={isLoading}
              />
            </div>
            <div>
              <label className="text-sm font-medium">Phone</label>
              <input
                type="tel"
                placeholder="+1 555 000 0000"
                className="mt-1 w-full rounded-md border bg-background px-3 py-2 focus:ring-2 focus:ring-ring focus:outline-none"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                disabled={isLoading}
              />
            </div>
            <div>
              <label className="text-sm font-medium">Budget</label>
              <select
                className="mt-1 w-full rounded-md border bg-background px-3 py-2 focus:ring-2 focus:ring-ring focus:outline-none"
                value={budget}
                onChange={(e) => setBudget(e.target.value)}
                disabled={isLoading}
              >
                <option value="">Select range</option>
                <option value="< $10k">Less than $10k</option>
                <option value="$10k–$50k">$10k–$50k</option>
                <option value="$50k–$200k">$50k–$200k</option>
                <option value="> $200k">More than $200k</option>
              </select>
            </div>
            <div>
              <label className="text-sm font-medium">Timeline</label>
              <select
                className="mt-1 w-full rounded-md border bg-background px-3 py-2 focus:ring-2 focus:ring-ring focus:outline-none"
                value={timeline}
                onChange={(e) => setTimeline(e.target.value)}
                disabled={isLoading}
              >
                <option value="">Select timeline</option>
                <option value="ASAP">ASAP</option>
                <option value="1–3 months">1–3 months</option>
                <option value="3–6 months">3–6 months</option>
                <option value="> 6 months">More than 6 months</option>
              </select>
            </div>
          </div>
          <div>
            <label className="text-sm font-medium">Message</label>
            <textarea
              placeholder="Tell us a bit about your project goals, scope, and timeline"
              className="mt-1 min-h-32 w-full rounded-md border bg-background px-3 py-2 focus:ring-2 focus:ring-ring focus:outline-none"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              disabled={isLoading}
            />
          </div>
          <div className="flex items-center gap-2">
            <input
              id="agree"
              type="checkbox"
              className="h-4 w-4"
              checked={agree}
              onChange={(e) => setAgree(e.target.checked)}
              disabled={isLoading}
            />
            <label htmlFor="agree" className="text-sm text-muted-foreground">
              I agree to be contacted and accept the privacy notice.
            </label>
          </div>
          <Button type="submit" className="w-fit" disabled={isLoading}>
            {isLoading ? "Sending..." : "Send message"}
          </Button>
        </motion.form>
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mt-10 grid gap-6 md:grid-cols-2 text-sm text-muted-foreground"
        >
          <div className="rounded-xl border bg-card/60 p-5">
            <div className="font-medium text-foreground">Offices</div>
            <div className="mt-2 space-y-1">
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4" /> Troy, MI, USA
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4" /> Hyderabad, India
              </div>
            </div>
          </div>
          <div className="rounded-xl border bg-card/60 p-5 grid gap-3">
            <div>
              <div className="font-medium text-foreground">Website</div>
              <a
                className="inline-flex items-center gap-2 underline"
                href="https://www.azorixembedded.com"
                target="_blank"
                rel="noreferrer"
              >
                <Globe className="h-4 w-4" /> www.azorixembedded.com
              </a>
            </div>
            <div>
              <div className="font-medium text-foreground">Email</div>
              <a
                className="inline-flex items-center gap-2 underline"
                href="mailto:info@azorixembedded.com"
              >
                <Mail className="h-4 w-4" /> info@azorixembedded.com
              </a>
            </div>
          </div>
        </motion.div>
      </Section>
      <SiteFooter />
    </div>
  );
}
