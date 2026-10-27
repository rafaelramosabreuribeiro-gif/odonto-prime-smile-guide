import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight, Baby, Gem, MessageCircle, ShieldCheck, Sparkles, Smile, SunMedium, Heart, Users, Leaf } from "lucide-react";
import { Header, Footer, WHATSAPP_DEMO, WHATSAPP_LINK } from "@/components/site";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import hero from "@/assets/hero.jpg";
import clinica from "@/assets/clinica.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Odonto Prime — Clínica odontológica (projeto demonstrativo)" },
      { name: "description", content: "Odonto Prime: cuidado odontológico acolhedor, preventivo e individualizado. Site demonstrativo de portfólio." },
      { property: "og:title", content: "Odonto Prime — Seu sorriso merece cuidado extraordinário" },
      { property: "og:description", content: "Limpeza, clareamento, ortodontia, implantes, estética e odontopediatria. Projeto demonstrativo." },
    ],
  }),
  component: Index,
});

const tratamentos = [
  { icon: ShieldCheck, t: "Limpeza e prevenção", d: "Consultas periódicas e limpeza profissional para manter a saúde bucal em dia." },
  { icon: SunMedium, t: "Clareamento dental", d: "Opções de clareamento avaliadas caso a caso, com acompanhamento profissional." },
  { icon: Smile, t: "Ortodontia", d: "Correção do alinhamento dos dentes com aparelhos adequados a cada necessidade." },
  { icon: Gem, t: "Implantes dentários", d: "Reposição de dentes ausentes com planejamento cuidadoso e individual." },
  { icon: Sparkles, t: "Estética do sorriso", d: "Procedimentos que harmonizam forma, cor e proporção do sorriso." },
  { icon: Baby, t: "Odontologia infantil", d: "Atendimento paciente e lúdico para criar bons hábitos desde cedo." },
];

const faq = [
  { q: "Como solicitar uma consulta?", a: "Clique em “Agendar consulta” e envie uma mensagem pelo WhatsApp informando seu nome e o melhor horário. Neste site demonstrativo, o número é fictício." },
  { q: "Quais tratamentos são oferecidos?", a: "Limpeza e prevenção, clareamento dental, ortodontia, implantes, estética do sorriso e atendimento infantil." },
  { q: "Como chegar à clínica?", a: "O endereço exibido no rodapé é fictício e serve apenas para demonstração. Em um site real, aqui haveria um mapa e instruções de acesso." },
  { q: "Como entrar em contato?", a: "Pelos canais listados no rodapé. Todos os contatos deste projeto são demonstrativos." },
];

function Index() {
  return (
    <>
      <Header />
      <main>
        {/* Início */}
        <section id="inicio" className="mx-auto grid max-w-6xl items-center gap-12 px-6 py-16 md:grid-cols-2 md:py-24">
          <div className="animate-rise">
            <p className="eyebrow">Clínica odontológica</p>
            <h1 className="mt-5 font-display text-5xl leading-[1.05] tracking-tight text-foreground md:text-6xl">
              Seu sorriso merece cuidado <em className="text-primary">extraordinário.</em>
            </h1>
            <p className="mt-6 max-w-md text-lg leading-relaxed text-muted-foreground">
              Atendimento acolhedor, com foco em prevenção e em um plano pensado para você.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <a href="#agendar" className="btn-primary">Agendar uma consulta</a>
              <a href="#tratamentos" className="btn-outline">Conheça nossos tratamentos</a>
            </div>
          </div>
          <div className="animate-rise [animation-delay:150ms]">
            <img src={hero} alt="Consultório odontológico moderno e iluminado" width={1280} height={1440} className="aspect-[4/4.5] w-full rounded-3xl object-cover shadow-soft" />
          </div>
        </section>

        {/* Tratamentos */}
        <section id="tratamentos" className="bg-secondary py-24">
          <div className="mx-auto max-w-6xl px-6">
            <p className="eyebrow">Tratamentos</p>
            <h2 className="mt-4 max-w-xl font-display text-4xl tracking-tight text-foreground">Cuidado completo, do preventivo ao estético.</h2>
            <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {tratamentos.map(({ icon: Icon, t, d }) => (
                <article key={t} className="group flex flex-col rounded-2xl border border-border bg-card p-8 transition-all hover:-translate-y-1 hover:shadow-soft">
                  <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent text-primary"><Icon size={22} /></span>
                  <h3 className="mt-6 text-lg font-semibold text-foreground">{t}</h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">{d}</p>
                  <a href="#agendar" className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-primary">
                    Fale conosco <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
                  </a>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Sobre */}
        <section id="sobre" className="mx-auto grid max-w-6xl items-center gap-14 px-6 py-24 md:grid-cols-2">
          <img src={clinica} alt="Recepção da clínica com ambiente claro e plantas" loading="lazy" width={1280} height={960} className="aspect-[4/3] w-full rounded-3xl object-cover" />
          <div>
            <p className="eyebrow">Sobre a clínica</p>
            <h2 className="mt-4 font-display text-4xl tracking-tight text-foreground">Uma filosofia de cuidado próxima e atenta.</h2>
            <p className="mt-6 leading-relaxed text-muted-foreground">
              Acreditamos que cada paciente é único. Ouvimos com calma, explicamos cada etapa e construímos juntos o melhor caminho para a sua saúde bucal.
            </p>
            <ul className="mt-8 space-y-5">
              {[
                { icon: Heart, t: "Acolhimento", d: "Um ambiente tranquilo para você se sentir à vontade." },
                { icon: Leaf, t: "Prevenção", d: "Cuidar antes é a forma mais simples de manter o sorriso saudável." },
                { icon: Users, t: "Cuidado individualizado", d: "Planos de tratamento pensados para cada pessoa." },
              ].map(({ icon: Icon, t, d }) => (
                <li key={t} className="flex gap-4">
                  <Icon size={20} className="mt-1 shrink-0 text-primary" />
                  <div><h3 className="font-semibold text-foreground">{t}</h3><p className="text-sm text-muted-foreground">{d}</p></div>
                </li>
              ))}
            </ul>
            <div className="mt-10 flex aspect-[16/7] items-center justify-center rounded-2xl border-2 border-dashed border-border text-sm text-muted-foreground">
              Espaço reservado para a foto da equipe
            </div>
          </div>
        </section>

        {/* Agendar */}
        <section id="agendar" className="px-6 pb-24">
          <div className="mx-auto max-w-6xl rounded-3xl bg-primary px-8 py-16 text-primary-foreground md:px-16">
            <div className="grid gap-12 md:grid-cols-2 md:items-center">
              <div>
                <h2 className="font-display text-4xl tracking-tight">Como agendar</h2>
                <ol className="mt-8 space-y-4">
                  {["Toque no botão do WhatsApp.", "Conte seu nome e o tratamento de interesse.", "Combinamos juntos o melhor dia e horário."].map((s, i) => (
                    <li key={s} className="flex items-center gap-4">
                      <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-primary-foreground/40 text-sm font-semibold">{i + 1}</span>
                      <span className="text-primary-foreground/90">{s}</span>
                    </li>
                  ))}
                </ol>
              </div>
              <div className="rounded-2xl bg-primary-foreground/10 p-8">
                <a href={WHATSAPP_LINK} aria-disabled="true" onClick={(e) => { e.preventDefault(); alert("Demonstração: este número é fictício e nenhuma mensagem será enviada."); }} className="btn-light w-full">
                  <MessageCircle size={18} /> Conversar pelo WhatsApp
                </a>
                <p className="mt-4 text-center text-sm text-primary-foreground/80">
                  Número de demonstração: {WHATSAPP_DEMO} (fictício)
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="mx-auto max-w-3xl px-6 pb-24">
          <p className="eyebrow text-center">Dúvidas</p>
          <h2 className="mt-4 text-center font-display text-4xl tracking-tight text-foreground">Perguntas frequentes</h2>
          <Accordion type="single" collapsible className="mt-10">
            {faq.map((f) => (
              <AccordionItem key={f.q} value={f.q}>
                <AccordionTrigger className="text-left text-base font-semibold">{f.q}</AccordionTrigger>
                <AccordionContent className="leading-relaxed text-muted-foreground">{f.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </section>
      </main>
      <Footer />
    </>
  );
}
