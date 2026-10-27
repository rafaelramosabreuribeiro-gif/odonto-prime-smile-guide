import { createFileRoute } from "@tanstack/react-router";
import { LegalPage } from "@/components/legal-page";

export const Route = createFileRoute("/informacoes-legais")({
  head: () => ({
    meta: [
      { title: "Informações legais — Odonto Prime (demonstração)" },
      { name: "description", content: "Espaço reservado para informações legais do projeto demonstrativo Odonto Prime." },
      { property: "og:title", content: "Informações legais — Odonto Prime" },
      { property: "og:description", content: "Página demonstrativa, sem validade jurídica." },
      { name: "robots", content: "noindex" },
    ],
  }),
  component: () => <LegalPage title="Informações legais" />,
});
