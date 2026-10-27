import { Header, Footer } from "@/components/site";

export function LegalPage({ title }: { title: string }) {
  return (
    <>
      <Header />
      <main className="mx-auto max-w-2xl px-6 py-24">
        <h1 className="font-display text-4xl tracking-tight text-foreground">{title}</h1>
        <p className="mt-6 leading-relaxed text-muted-foreground">
          Este é um projeto demonstrativo de portfólio. Esta página é apenas um espaço reservado e não
          constitui um documento jurídico válido. Em um site real, o conteúdo seria elaborado e revisado
          por profissionais qualificados.
        </p>
        <a href="/" className="btn-outline mt-10">Voltar ao início</a>
      </main>
      <Footer />
    </>
  );
}
