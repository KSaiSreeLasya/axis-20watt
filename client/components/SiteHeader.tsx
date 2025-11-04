import { useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import BackButton from "@/components/BackButton";
import ThemeToggle from "@/components/ThemeToggle";

const nav = [
  { to: "/", label: "Home" },
  { to: "/capabilities", label: "Capabilities" },
  { to: "/projects", label: "Projects" },
  { to: "/contact", label: "Contact" },
];

export default function SiteHeader() {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-3">
          {location.pathname !== "/" && (
            <BackButton className="hidden sm:inline-flex" />
          )}
          <Link to="/" className="flex items-center gap-3">
            <div className="grid place-items-center h-9 w-9 rounded-md bg-primary text-primary-foreground font-bold">
              E
            </div>
            <div className="leading-tight">
              <div className="text-lg font-extrabold tracking-tight">
                Embinsys
              </div>
              <div className="text-xs text-muted-foreground -mt-1">
                Engineering & Design Services
              </div>
            </div>
          </Link>
        </div>
        <nav className="hidden md:flex items-center gap-6">
          {nav.map((n) => (
            <NavLink
              key={n.to}
              to={n.to}
              className={({ isActive }) =>
                cn(
                  "text-sm font-medium transition-colors hover:text-foreground/80",
                  isActive ? "text-foreground" : "text-foreground/60",
                )
              }
            >
              {n.label}
            </NavLink>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          {location.pathname !== "/" && <BackButton className="sm:hidden" />}
          <ThemeToggle />
          <Button asChild className="hidden md:inline-flex">
            <a href="mailto:info@embinsys.com">Get in touch</a>
          </Button>
          <button
            className="md:hidden inline-flex h-9 w-9 items-center justify-center rounded-md border"
            aria-label="Toggle menu"
            onClick={() => setOpen((v) => !v)}
          >
            <svg
              className="h-5 w-5"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>
      {open && (
        <div className="md:hidden border-t bg-background">
          <div className="container py-3 flex flex-col gap-2">
            {nav.map((n) => (
              <NavLink
                key={n.to}
                to={n.to}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  cn(
                    "py-2 text-sm font-medium",
                    isActive ? "text-foreground" : "text-foreground/60",
                  )
                }
              >
                {n.label}
              </NavLink>
            ))}
            <a
              className="py-2 text-sm font-medium"
              href="mailto:info@embinsys.com"
            >
              Get in touch
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
