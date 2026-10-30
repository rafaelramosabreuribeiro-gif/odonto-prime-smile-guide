import { createFileRoute } from "@tanstack/react-router";
import { LegalPage } from "@/components/legal-page";

export const Route = createFileRoute("/informacoes-legais")({
  head: () => ({
    meta: [
      { title: "Legal Information — Odonto Prime (demo)" },
      { name: "description", content: "Placeholder legal information for the Odonto Prime demo project." },
      { property: "og:title", content: "Legal Information — Odonto Prime" },
      { property: "og:description", content: "Demo page with no legal validity." },
      { name: "robots", content: "noindex" },
    ],
  }),
  component: () => <LegalPage title="Legal Information" />,
});
