import { useState } from "react";
import { toast } from "sonner";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import Section from "@/components/Section";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ContactFormRequest, ContactFormResponse } from "@shared/api";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !message) {
      toast.error("Please fill out all fields");
      return;
    }

    setIsLoading(true);
    try {
      const payload: ContactFormRequest = {
        name,
        email,
        message,
      };

      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const data: ContactFormResponse = await response.json();

      if (!response.ok) {
        toast.error(data.message || "Failed to submit form");
        return;
      }

      toast.success(data.message);
      setName("");
      setEmail("");
      setMessage("");
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
          className="mt-8 grid gap-4 max-w-xl"
        >
          <div>
            <label className="text-sm font-medium">Name</label>
            <input
              className="mt-1 w-full rounded-md border bg-background px-3 py-2"
              value={name}
              onChange={(e) => setName(e.target.value)}
              disabled={isLoading}
            />
          </div>
          <div>
            <label className="text-sm font-medium">Email</label>
            <input
              type="email"
              className="mt-1 w-full rounded-md border bg-background px-3 py-2"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              disabled={isLoading}
            />
          </div>
          <div>
            <label className="text-sm font-medium">Message</label>
            <textarea
              className="mt-1 min-h-32 w-full rounded-md border bg-background px-3 py-2"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              disabled={isLoading}
            />
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
          className="mt-10 grid gap-6 md:grid-cols-3 text-sm text-muted-foreground"
        >
          <div>
            <div className="font-medium text-foreground">Offices</div>
            <div>Troy, MI, USA</div>
            <div>Hyderabad, India</div>
          </div>
          <div>
            <div className="font-medium text-foreground">Website</div>
            <a
              className="underline"
              href="https://www.embinsys.com"
              target="_blank"
              rel="noreferrer"
            >
              www.embinsys.com
            </a>
          </div>
          <div>
            <div className="font-medium text-foreground">Email</div>
            <a className="underline" href="mailto:info@embinsys.com">
              info@embinsys.com
            </a>
          </div>
        </motion.div>
      </Section>
      <SiteFooter />
    </div>
  );
}
