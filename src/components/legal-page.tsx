import { Header, Footer } from "@/components/site";

export function LegalPage({ title }: { title: string }) {
  return (
    <>
      <Header />
      <main className="mx-auto max-w-2xl px-6 py-24">
        <h1 className="font-display text-4xl tracking-tight text-foreground">{title}</h1>
        <p className="mt-6 leading-relaxed text-muted-foreground">
          This is a demonstrative portfolio project. This page is only a placeholder and is not a valid
          legal document. On a real website, this content would be written and reviewed by qualified
          professionals.
        </p>
        <a href="/" className="btn-outline mt-10">Back to home</a>
      </main>
      <Footer />
    </>
  );
}
