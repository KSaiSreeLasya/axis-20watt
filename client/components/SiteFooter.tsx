import { Link } from "react-router-dom";

export default function SiteFooter() {
  return (
    <footer className="border-t bg-secondary/40">
      <div className="container py-12 grid gap-6 md:grid-cols-4">
        <div>
          <div className="flex items-center gap-3 mb-4">
            <img
              src="https://cdn.builder.io/api/v1/image/assets%2F07ba826074254d3191a55ee32e800a58%2F7d0ce5b5bd9f4847a9b0b9add5682e46?format=png&width=128"
              alt="Azorix Embeeded Logo"
              className="h-8 w-8 object-contain"
            />
            <div className="text-xl font-bold">Azorix Embeeded</div>
          </div>
          <p className="text-sm text-muted-foreground mt-2 max-w-sm">
            Innovation. Quality. Reliability. Partnering with clients to deliver
            end‑to‑end embedded engineering solutions.
          </p>
        </div>
        <div>
          <div className="font-semibold mb-3">Offices</div>
          <ul className="space-y-1 text-sm text-muted-foreground">
            <li>Troy, MI, USA</li>
            <li>Hyderabad, India</li>
          </ul>
        </div>
        <div>
          <div className="font-semibold mb-3">Contact</div>
          <ul className="space-y-1 text-sm text-muted-foreground">
            <li>www.azorixembeeded.com</li>
            <li>info@azorixembeeded.com</li>
          </ul>
        </div>
        <div>
          <div className="font-semibold mb-3">Legal</div>
          <ul className="space-y-1 text-sm">
            <li>
              <Link to="/privacy" className="underline text-muted-foreground">Privacy Policy</Link>
            </li>
            <li>
              <Link to="/terms" className="underline text-muted-foreground">Terms of Service</Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t py-4 text-center text-xs text-muted-foreground bg-gradient-to-r from-transparent via-primary/10 to-transparent">
        © 2024 Azorix Embeeded. All rights reserved.
      </div>
    </footer>
  );
}
