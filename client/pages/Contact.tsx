import { useState } from "react";
import { toast } from "sonner";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import Section from "@/components/Section";
import { Button } from "@/components/ui/button";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !message) {
      toast.error("Please fill out all fields");
      return;
    }
    const mailto = `mailto:info@embinsys.com?subject=Inquiry from ${encodeURIComponent(
      name,
    )}&body=${encodeURIComponent(message + "\n\nFrom: " + email)}`;
    window.location.href = mailto;
    toast.success("Thank you! We’ll get back to you shortly.");
    setName("");
    setEmail("");
    setMessage("");
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
        <form onSubmit={onSubmit} className="mt-8 grid gap-4 max-w-xl">
          <div>
            <label className="text-sm font-medium">Name</label>
            <input
              className="mt-1 w-full rounded-md border bg-background px-3 py-2"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div>
            <label className="text-sm font-medium">Email</label>
            <input
              type="email"
              className="mt-1 w-full rounded-md border bg-background px-3 py-2"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div>
            <label className="text-sm font-medium">Message</label>
            <textarea
              className="mt-1 min-h-32 w-full rounded-md border bg-background px-3 py-2"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
          </div>
          <Button type="submit" className="w-fit">
            Send message
          </Button>
        </form>
        <div className="mt-10 grid gap-6 md:grid-cols-3 text-sm text-muted-foreground">
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
        </div>
      </Section>
      <SiteFooter />
    </div>
  );
}
