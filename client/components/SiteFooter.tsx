import { Link } from "react-router-dom";

export default function SiteFooter() {
  return (
    <footer className="border-t bg-secondary/40">
      <div className="container py-12 grid gap-6 md:grid-cols-4">
        <div>
          <div className="flex items-center gap-3 mb-4">
            <span className="relative inline-flex">
              <img
                src="https://cdn.builder.io/api/v1/image/assets%2Fdf131029371243a6bdd4cd7752a9db95%2F1ea1a5551abe4a9abfb9506ae0f1ecaf?format=webp&width=800"
                alt="Azorix Embedded Logo"
                className="h-16 w-auto object-contain dark:hidden"
              />
              <img
                src="https://cdn.builder.io/api/v1/image/assets%2Fdf131029371243a6bdd4cd7752a9db95%2F1d554e806558473ab1f04a695d01d64c?format=webp&width=800"
                alt="Azorix Embedded Logo White"
                aria-hidden
                className="h-16 w-auto object-contain hidden dark:inline-block"
              />
            </span>
            <div className="text-xl font-bold"></div>
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
            <li>www.azorixembedded.com</li>
            <li>info@azorixembedded.com</li>
          </ul>
        </div>
        <div>
          <div className="font-semibold mb-3">Legal</div>
          <ul className="space-y-1 text-sm">
            <li>
              <Link to="/privacy" className="underline text-muted-foreground">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link to="/terms" className="underline text-muted-foreground">
                Terms of Service
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t py-4 text-center text-xs text-muted-foreground bg-gradient-to-r from-transparent via-primary/10 to-transparent">
        © 2024 Azorix Embedded. All rights reserved.
      </div>
    </footer>
  );
}
