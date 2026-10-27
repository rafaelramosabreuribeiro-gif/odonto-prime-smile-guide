import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";

export const WHATSAPP_DEMO = "(00) 00000-0000";
export const WHATSAPP_LINK = "#agendar";

const nav = [
  { href: "/#inicio", label: "Início" },
  { href: "/#tratamentos", label: "Tratamentos" },
  { href: "/#sobre", label: "Sobre" },
  { href: "/#contato", label: "Contato" },
];

export function Logo() {
  return (
    <a href="/#inicio" className="font-display text-2xl tracking-tight text-foreground">
      Odonto<span className="text-primary"> Prime</span>
    </a>
  );
}

export function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 border-b border-border/70 bg-background/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Logo />
        <nav aria-label="Principal" className="hidden items-center gap-8 md:flex">
          {nav.map((n) => (
            <a key={n.href} href={n.href} className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary">
              {n.label}
            </a>
          ))}
          <a href="/#agendar" className="btn-primary">Agendar consulta</a>
        </nav>
        <button
          className="rounded-md p-2 text-foreground md:hidden"
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          aria-expanded={open}
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>
      {open && (
        <nav aria-label="Menu móvel" className="border-t border-border bg-background px-6 pb-6 md:hidden">
          {nav.map((n) => (
            <a key={n.href} href={n.href} onClick={() => setOpen(false)} className="block border-b border-border py-4 font-medium text-foreground">
              {n.label}
            </a>
          ))}
          <a href="/#agendar" onClick={() => setOpen(false)} className="btn-primary mt-6 w-full">Agendar consulta</a>
        </nav>
      )}
    </header>
  );
}

export function Footer() {
  return (
    <footer id="contato" className="border-t border-border bg-secondary">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 py-16 md:grid-cols-4">
        <div className="md:col-span-2">
          <Logo />
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted-foreground">
            Projeto demonstrativo de portfólio. Odonto Prime é uma clínica fictícia.
          </p>
        </div>
        <div>
          <h3 className="text-sm font-semibold text-foreground">Navegação</h3>
          <ul className="mt-4 space-y-2 text-sm">
            {nav.map((n) => (
              <li key={n.href}><a href={n.href} className="text-muted-foreground hover:text-primary">{n.label}</a></li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="text-sm font-semibold text-foreground">Contato (demonstração)</h3>
          <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
            <li>WhatsApp: {WHATSAPP_DEMO} — fictício</li>
            <li>contato@exemplo.com — fictício</li>
            <li>Rua Exemplo, 000 — Cidade/UF<br /><span className="text-xs">Endereço fictício para demonstração</span></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border">
        <div className="mx-auto flex max-w-6xl flex-col gap-3 px-6 py-6 text-xs text-muted-foreground sm:flex-row sm:justify-between">
          <span>© {new Date().getFullYear()} Odonto Prime · Projeto de portfólio</span>
          <div className="flex gap-6">
            <Link to="/privacidade" className="hover:text-primary">Política de privacidade</Link>
            <Link to="/informacoes-legais" className="hover:text-primary">Informações legais</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
