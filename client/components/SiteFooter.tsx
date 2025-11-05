export default function SiteFooter() {
  return (
    <footer className="border-t bg-secondary/40">
      <div className="container py-10 grid gap-6 md:grid-cols-3">
        <div>
          <div className="flex items-center gap-3 mb-4">
            <img
              src="https://cdn.builder.io/api/v1/image/assets%2F8bf52f20c3654880b140d224131cfa2e%2Fd72511e7e901420a856bc00f97844f91?format=webp&width=800"
              alt="Axiswatt Logo"
              className="h-8 w-8 object-contain"
            />
            <div className="text-xl font-bold">Axiswatt</div>
          </div>
          <p className="text-sm text-muted-foreground mt-2 max-w-xs">
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
            <li>www.axiswatt.com</li>
            <li>info@axiswatt.com</li>
          </ul>
        </div>
      </div>
      <div className="border-t py-4 text-center text-xs text-muted-foreground">
        © 2024 Axiswatt. All rights reserved.
      </div>
    </footer>
  );
}
