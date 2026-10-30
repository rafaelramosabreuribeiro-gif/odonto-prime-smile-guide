import { useState, type FormEvent } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight, Gem, MessageCircle, ScanLine, Smile, SunMedium, Sparkles, Wand2, Moon, Armchair, Receipt, Star, MapPin, Clock } from "lucide-react";
import { Header, Footer, WHATSAPP_DEMO } from "@/components/site";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import hero from "@/assets/hero.jpg";
import clinica from "@/assets/clinica.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Odonto Prime — Dental Clinic & Aesthetics (demo project)" },
      { name: "description", content: "Odonto Prime: advanced dental care, implants, Invisalign, whitening and veneers. Demonstrative freelance portfolio project." },
      { property: "og:title", content: "Odonto Prime — Your Perfect Smile Starts Here" },
      { property: "og:description", content: "State-of-the-art technology, painless procedures and personalized dental aesthetics. Demo project." },
    ],
  }),
  component: Index,
});

const stats = [
  { n: "10,000+", l: "Happy Patients" },
  { n: "12+", l: "Specialist Doctors" },
  { n: "15", l: "Years of Excellence" },
];

const treatments = [
  { icon: Smile, t: "Invisalign & Orthodontics", d: "Nearly invisible clear aligners and modern braces that straighten teeth comfortably, with a digital plan that previews your result." },
  { icon: Gem, t: "Dental Implants", d: "Permanent, natural-looking tooth replacement with guided surgical planning for precision, stability and long-term function." },
  { icon: SunMedium, t: "Teeth Whitening", d: "Professional in-office and take-home whitening that safely brightens your smile by several shades with minimal sensitivity." },
  { icon: Sparkles, t: "Porcelain Veneers", d: "Ultra-thin, custom-crafted porcelain shells that correct shape, color and spacing for a durable, radiant smile." },
  { icon: Wand2, t: "Facial Harmonization", d: "Minimally invasive aesthetic procedures that balance facial proportions and complement your smile design." },
];

const differentials = [
  { icon: ScanLine, t: "Digital 3D Scanning", d: "No messy impressions — fast, precise intraoral scans for accurate planning." },
  { icon: Moon, t: "Sedation Options", d: "Comfortable, anxiety-free care with sedation available when appropriate." },
  { icon: Armchair, t: "Premium Environment", d: "A calm, modern clinic designed around your comfort and privacy." },
  { icon: Receipt, t: "Transparent Pricing", d: "Clear treatment plans and costs explained before you begin — no surprises." },
];

const testimonials = [
  { name: "Sarah M.", r: 5, q: "I was always nervous at the dentist, but the team made me feel completely at ease. My implant looks and feels just like a natural tooth." },
  { name: "James R.", r: 5, q: "Invisalign here was seamless. The 3D scan showed me the final result before we even started, and the check-ins were quick and easy." },
  { name: "Ana L.", r: 5, q: "My veneers turned out beautiful and natural. Everything was explained clearly, including the costs. Highly recommend!" },
];

const faq = [
  { q: "How do I book an appointment?", a: "Fill out the booking form or tap the WhatsApp button and tell us your name and preferred time. On this demo site, the contact details are fictional and no request is sent." },
  { q: "Which treatments do you offer?", a: "Invisalign and orthodontics, dental implants, teeth whitening, porcelain veneers and facial harmonization." },
  { q: "How do I get to the clinic?", a: "The address shown is fictional and for demonstration only. On a real website, a map and directions would appear here." },
  { q: "How can I contact you?", a: "Through the channels listed in the contact section. All contact details in this project are for demonstration." },
];

function Index() {
  const [demoNotice, setDemoNotice] = useState(false);
  const [formNotice, setFormNotice] = useState(false);
  const onSubmit = (e: FormEvent) => { e.preventDefault(); setFormNotice(true); };
  const field = "mt-2 w-full rounded-lg border border-border bg-background px-4 py-3 text-foreground outline-none focus:border-primary focus:ring-2 focus:ring-primary/20";
  return (
    <>
      <Header />
      <main>
        {/* Home */}
        <section id="home" className="mx-auto grid max-w-6xl items-center gap-12 px-6 py-16 md:grid-cols-2 md:py-24">
          <div className="animate-rise">
            <p className="eyebrow">Odonto Prime — Advanced Dental Care</p>
            <h1 className="mt-5 font-display text-5xl uppercase leading-[1.05] tracking-tight text-foreground lg:text-6xl">
              Your perfect smile <em className="text-primary">starts here</em>
            </h1>
            <p className="mt-6 max-w-md text-lg leading-relaxed text-muted-foreground">
              State-of-the-art technology, painless procedures, and personalized dental aesthetics designed for your confidence.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <a href="#treatments" className="btn-outline uppercase">Our Treatments</a>
              <a href="#booking" className="btn-primary uppercase">Schedule Consultation</a>
            </div>
            <dl className="mt-12 grid max-w-md grid-cols-3 gap-4 border-t border-border pt-8">
              {stats.map((s) => (
                <div key={s.l}>
                  <dt className="sr-only">{s.l}</dt>
                  <dd className="font-display text-3xl text-primary">{s.n}</dd>
                  <dd className="mt-1 text-xs leading-snug text-muted-foreground">{s.l}</dd>
                </div>
              ))}
            </dl>
            <p className="mt-3 text-xs text-muted-foreground">Illustrative figures for a fictional clinic.</p>
          </div>
          <div className="animate-rise [animation-delay:150ms]">
            <img src={hero} alt="Modern, bright dental office" width={1280} height={1440} className="aspect-[4/4.5] w-full rounded-3xl object-cover shadow-soft" />
          </div>
        </section>

        {/* Treatments */}
        <section id="treatments" className="bg-secondary py-24">
          <div className="mx-auto max-w-6xl px-6">
            <p className="eyebrow">Treatments</p>
            <h2 className="mt-4 max-w-xl font-display text-4xl uppercase tracking-tight text-foreground">Specialized Dental Services</h2>
            <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {treatments.map(({ icon: Icon, t, d }) => (
                <article key={t} className="group flex flex-col rounded-2xl border border-border bg-card p-8 transition-all hover:-translate-y-1 hover:shadow-soft">
                  <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent text-primary"><Icon size={22} /></span>
                  <h3 className="mt-6 text-lg font-semibold text-foreground">{t}</h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">{d}</p>
                  <a href="#booking" className="-my-3 mt-3 inline-flex min-h-11 items-center gap-2 py-3 text-sm font-semibold text-primary">
                    Book this treatment <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
                  </a>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* About */}
        <section id="about" className="mx-auto grid max-w-6xl items-center gap-14 px-6 py-24 md:grid-cols-2">
          <img src={clinica} alt="Bright clinic reception with plants" loading="lazy" width={1280} height={960} className="aspect-[4/3] w-full rounded-3xl object-cover" />
          <div>
            <p className="eyebrow">About Us</p>
            <h2 className="mt-4 font-display text-4xl tracking-tight text-foreground">Why Choose Odonto Prime</h2>
            <p className="mt-6 leading-relaxed text-muted-foreground">
              Every patient is unique. We listen carefully, explain each step and build the right plan for your oral health together.
            </p>
            <ul className="mt-8 grid gap-5 sm:grid-cols-2">
              {differentials.map(({ icon: Icon, t, d }) => (
                <li key={t} className="flex gap-4">
                  <Icon size={20} className="mt-1 shrink-0 text-primary" />
                  <div><h3 className="font-semibold text-foreground">{t}</h3><p className="text-sm text-muted-foreground">{d}</p></div>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Testimonials */}
        <section id="testimonials" className="bg-secondary py-24">
          <div className="mx-auto max-w-6xl px-6">
            <p className="eyebrow">Testimonials</p>
            <h2 className="mt-4 font-display text-4xl tracking-tight text-foreground">What our patients say</h2>
            <p className="mt-3 text-sm text-muted-foreground">Sample reviews written for this demo project.</p>
            <div className="mt-12 grid gap-6 md:grid-cols-3">
              {testimonials.map((t) => (
                <figure key={t.name} className="flex flex-col rounded-2xl border border-border bg-card p-8">
                  <div className="flex gap-1 text-primary" role="img" aria-label={`${t.r} out of 5 stars`}>
                    {Array.from({ length: t.r }).map((_, i) => <Star key={i} size={16} fill="currentColor" aria-hidden="true" />)}
                  </div>
                  <blockquote className="mt-4 flex-1 leading-relaxed text-foreground">“{t.q}”</blockquote>
                  <figcaption className="mt-6 text-sm font-semibold text-muted-foreground">{t.name}</figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>

        {/* Booking & contact */}
        <section id="booking" className="scroll-mt-20 px-6 py-24">
          <div id="contact" className="mx-auto max-w-6xl scroll-mt-20 rounded-3xl bg-primary px-8 py-16 text-primary-foreground md:px-16">
            <div className="grid gap-12 md:grid-cols-2">
              <div>
                <h2 className="font-display text-4xl tracking-tight">Book online</h2>
                <p className="mt-4 text-primary-foreground/90">Tell us what you need and we'll confirm the best day and time.</p>
                <ul className="mt-10 space-y-5 text-primary-foreground/90">
                  <li className="flex gap-3"><MapPin size={20} className="mt-0.5 shrink-0" aria-hidden="true" /><span><strong className="block text-primary-foreground">Address</strong>000 Example Street — City, State (fictional)</span></li>
                  <li className="flex gap-3"><Clock size={20} className="mt-0.5 shrink-0" aria-hidden="true" /><span><strong className="block text-primary-foreground">Working Hours</strong>Mon–Fri 8am–7pm · Sat 8am–1pm (sample)</span></li>
                </ul>
                <button type="button" onClick={() => setDemoNotice(true)} className="btn-light mt-10 w-full sm:w-auto">
                  <MessageCircle size={18} aria-hidden="true" /> Chat on WhatsApp
                </button>
                <p className="mt-3 text-sm text-primary-foreground/90">Demo number: {WHATSAPP_DEMO} (fictional)</p>
                <p role="status" className="mt-2 text-sm font-semibold">
                  {demoNotice ? "Demo: this number is fictional and no message was sent." : ""}
                </p>
              </div>
              <form onSubmit={onSubmit} className="rounded-2xl bg-background p-8 text-foreground">
                <label className="block text-sm font-semibold">Full Name
                  <input required name="name" autoComplete="name" className={field} />
                </label>
                <label className="mt-5 block text-sm font-semibold">Phone
                  <input required name="phone" type="tel" autoComplete="tel" className={field} />
                </label>
                <label className="mt-5 block text-sm font-semibold">Service Needed
                  <select required name="service" defaultValue="" className={field}>
                    <option value="" disabled>Select a service</option>
                    {treatments.map((t) => <option key={t.t}>{t.t}</option>)}
                    <option>General check-up</option>
                  </select>
                </label>
                <label className="mt-5 block text-sm font-semibold">Preferred Date/Time
                  <input required name="datetime" type="datetime-local" className={field} />
                </label>
                <button type="submit" className="btn-primary mt-8 w-full">Request Appointment</button>
                <p role="status" className="mt-4 text-center text-sm font-semibold text-primary">
                  {formNotice ? "Demo: your request was not sent. This is a portfolio project." : ""}
                </p>
              </form>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="mx-auto max-w-3xl px-6 pb-24">
          <p className="eyebrow text-center">Questions</p>
          <h2 className="mt-4 text-center font-display text-4xl tracking-tight text-foreground">Frequently asked questions</h2>
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
