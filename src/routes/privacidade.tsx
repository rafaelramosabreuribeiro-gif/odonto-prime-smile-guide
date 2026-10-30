import { createFileRoute } from "@tanstack/react-router";
import { LegalPage } from "@/components/legal-page";

export const Route = createFileRoute("/privacidade")({
  head: () => ({
    meta: [
      { title: "Privacy Policy — Odonto Prime (demo)" },
      { name: "description", content: "Placeholder privacy policy for the Odonto Prime demo project." },
      { property: "og:title", content: "Privacy Policy — Odonto Prime" },
      { property: "og:description", content: "Demo page with no legal validity." },
      { name: "robots", content: "noindex" },
    ],
  }),
  component: () => <LegalPage title="Privacy Policy" />,
});
