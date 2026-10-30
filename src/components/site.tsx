import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";

export const WHATSAPP_DEMO = "+00 (00) 00000-0000";

const nav = [
  { href: "/#home", label: "Home" },
  { href: "/#treatments", label: "Treatments" },
  { href: "/#about", label: "About Us" },
  { href: "/#testimonials", label: "Testimonials" },
  { href: "/#contact", label: "Contact" },
];

export function Logo() {
  return (
    <a href="/#home" className="flex flex-col leading-none text-foreground" aria-label="Odonto Prime — Dental Clinic & Aesthetics">
      <span className="font-display text-2xl tracking-tight">Odonto<span className="text-primary"> Prime</span></span>
      <span className="mt-1 text-[11px] font-medium uppercase tracking-wider text-muted-foreground">Dental Clinic & Aesthetics</span>
    </a>
  );
}

export function Header() {
  const [open, setOpen] = useState(false);
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    const onResize = () => window.innerWidth >= 1024 && setOpen(false);
    window.addEventListener("keydown", onKey);
    window.addEventListener("resize", onResize);
    return () => { window.removeEventListener("keydown", onKey); window.removeEventListener("resize", onResize); };
  }, [open]);
  return (
    <header className="sticky top-0 z-50 border-b border-border/70 bg-background/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Logo />
        <nav aria-label="Main" className="hidden items-center gap-7 lg:flex">
          {nav.map((n) => (
            <a key={n.href} href={n.href} className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary">
              {n.label}
            </a>
          ))}
          <a href="/#booking" className="btn-primary">Book Appointment</a>
        </nav>
        <button
          className="flex min-h-11 min-w-11 items-center justify-center rounded-md text-foreground lg:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>
      {open && (
        <nav id="mobile-menu" aria-label="Mobile menu" className="border-t border-border bg-background px-6 pb-6 lg:hidden">
          {nav.map((n) => (
            <a key={n.href} href={n.href} onClick={() => setOpen(false)} className="block border-b border-border py-4 font-medium text-foreground">
              {n.label}
            </a>
          ))}
          <a href="/#booking" onClick={() => setOpen(false)} className="btn-primary mt-6 w-full">Book Appointment</a>
        </nav>
      )}
    </header>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-border bg-secondary">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 py-16 md:grid-cols-4">
        <div className="md:col-span-2">
          <Logo />
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted-foreground">
            Demonstrative Freelance Portfolio Project. Odonto Prime is a fictional clinic.
          </p>
        </div>
        <div>
          <h3 className="text-sm font-semibold text-foreground">Navigation</h3>
          <ul className="mt-2 text-sm">
            {nav.map((n) => (
              <li key={n.href}><a href={n.href} className="inline-flex min-h-11 items-center text-muted-foreground hover:text-primary">{n.label}</a></li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="text-sm font-semibold text-foreground">Contact (demo)</h3>
          <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
            <li>WhatsApp: {WHATSAPP_DEMO} — fictional</li>
            <li>contact@example.com — fictional</li>
            <li>000 Example Street — City, State</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border">
        <div className="mx-auto flex max-w-6xl flex-col gap-3 px-6 py-3 text-xs text-muted-foreground sm:flex-row sm:justify-between">
          <span>© {new Date().getFullYear()} Odonto Prime · Demonstrative Freelance Portfolio Project</span>
          <div className="flex flex-wrap gap-x-6">
            <Link to="/privacidade" className="inline-flex min-h-11 items-center hover:text-primary">Privacy Policy</Link>
            <Link to="/informacoes-legais" className="inline-flex min-h-11 items-center hover:text-primary">Legal Information</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
