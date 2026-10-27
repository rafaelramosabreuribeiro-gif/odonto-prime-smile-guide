import { createFileRoute } from "@tanstack/react-router";
import { LegalPage } from "@/components/legal-page";

export const Route = createFileRoute("/privacidade")({
  head: () => ({
    meta: [
      { title: "Política de privacidade — Odonto Prime (demonstração)" },
      { name: "description", content: "Espaço reservado para a política de privacidade do projeto demonstrativo Odonto Prime." },
      { property: "og:title", content: "Política de privacidade — Odonto Prime" },
      { property: "og:description", content: "Página demonstrativa, sem validade jurídica." },
      { name: "robots", content: "noindex" },
    ],
  }),
  component: () => <LegalPage title="Política de privacidade" />,
});
