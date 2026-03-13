/**
 * Home Page – Architectural Precision Design
 * Design: Dark background (#111), Cactus Green highlights, Gold accents
 * Typography: Space Grotesk (headings) + Outfit (body) + JetBrains Mono (numbers)
 * Sections: Hero, Leistungen, Vorteile, Angebot, Ablauf, Kontakt
 */
import { useState } from "react";
import { motion } from "framer-motion";
import {
  Monitor,
  Server,
  RefreshCw,
  CheckCircle2,
  Send,
  ArrowRight,
  Smartphone,
  Zap,
  Users,
  LayoutGrid,
  HeadphonesIcon,
  ChevronRight,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AnimatedSection from "@/components/AnimatedSection";
import { toast } from "sonner";

/* ─── Asset URLs ─── */
const HERO_BG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663431215864/JxkVanXonYHVDsidPfFhbo/hero-bg-Aa7vZFmzdiA7SRW2YJsGxp.webp";
const IMG_WEBDESIGN = "https://d2xsxph8kpxj0f.cloudfront.net/310519663431215864/JxkVanXonYHVDsidPfFhbo/services-webdesign-2ewZwRGZCUextbuoAQX7uW.webp";
const IMG_HOSTING = "https://d2xsxph8kpxj0f.cloudfront.net/310519663431215864/JxkVanXonYHVDsidPfFhbo/services-hosting-53WtjCJUtvrLd9MmyjZ9eT.webp";
const IMG_UPDATES = "https://d2xsxph8kpxj0f.cloudfront.net/310519663431215864/JxkVanXonYHVDsidPfFhbo/services-updates-CZ54FsnvUpVLuCERe3sFMP.webp";

/* ─── Data ─── */
const services = [
  {
    icon: Monitor,
    title: "Webdesign & Entwicklung",
    description:
      "Individuell entwickelte Webseiten für Unternehmen, Selbständige und lokale Dienstleister. Modernes Design, schnelle Ladezeiten und optimale Darstellung auf allen Geräten.",
    image: IMG_WEBDESIGN,
  },
  {
    icon: Server,
    title: "Website Hosting (auf Anfrage)",
    description:
      "Auf Wunsch übernehmen wir auch das Hosting deiner Webseite und sorgen dafür, dass sie sicher, stabil und jederzeit erreichbar ist.",
    image: IMG_HOSTING,
  },
  {
    icon: RefreshCw,
    title: "Monatliche Website Updates (auf Anfrage)",
    description:
      "Regelmäßige Wartung, Updates und Anpassungen, damit deine Webseite immer aktuell, sicher und technisch auf dem neuesten Stand bleibt.",
    image: IMG_UPDATES,
  },
];

const advantages = [
  { icon: LayoutGrid, text: "Professionelles und modernes Webdesign" },
  { icon: Smartphone, text: "Optimiert für Smartphone, Tablet und Desktop" },
  { icon: Zap, text: "Schnelle Ladezeiten" },
  { icon: CheckCircle2, text: "Klare Struktur für bessere Kundengewinnung" },
  { icon: Users, text: "Persönliche Betreuung" },
  { icon: HeadphonesIcon, text: "Zuverlässiger Support" },
];

const steps = [
  { num: "01", title: "Anfrage senden", desc: "Kontaktiere uns über das Formular mit deinen Wünschen." },
  { num: "02", title: "Beratungsgespräch", desc: "Wir besprechen dein Projekt und deine Anforderungen." },
  { num: "03", title: "Erstellung", desc: "Wir entwickeln deine individuelle Webseite." },
  { num: "04", title: "Feedback", desc: "Du erhältst Entwürfe und gibst Feedback für Anpassungen." },
  { num: "05", title: "Veröffentlichung", desc: "Deine neue Webseite geht online." },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />

      {/* ═══════════ HERO ═══════════ */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* Background image with overlay */}
        <div className="absolute inset-0">
          <img
            src={HERO_BG}
            alt=""
            className="w-full h-full object-cover"
            loading="eager"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[oklch(0.12_0.005_260_/_0.7)] via-[oklch(0.12_0.005_260_/_0.6)] to-[oklch(0.12_0.005_260_/_0.95)]" />
        </div>

        {/* Grid pattern overlay */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(oklch(0.75 0.12 85 / 0.5) 1px, transparent 1px), linear-gradient(90deg, oklch(0.75 0.12 85 / 0.5) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />

        <div className="container mx-auto relative z-10 pt-32 pb-20">
          <div className="max-w-3xl">
            {/* Tagline */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex items-center gap-3 mb-8"
            >
              <div className="h-[1px] w-12 bg-gold" />
              <span className="text-gold text-sm font-medium tracking-[0.2em] uppercase font-heading">
                Webdesign aus Augsburg
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="font-heading font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-[1.05] tracking-tight mb-6"
            >
              Professionelle{" "}
              <span className="text-gold-gradient">Webseiten</span>{" "}
              für Unternehmen
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.6 }}
              className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-10 max-w-2xl"
            >
              Moderne, schnelle und verkaufsstarke Webseiten – individuell
              entwickelt für Selbständige und Unternehmen.
            </motion.p>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.8 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <a
                href="#kontakt"
                className="group inline-flex items-center justify-center gap-2 px-8 py-4 bg-cactus text-white font-semibold tracking-wide uppercase text-sm hover:bg-cactus-light transition-all duration-300"
              >
                Projekt anfragen
                <ArrowRight
                  size={16}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </a>
              <a
                href="#leistungen"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-gold/30 text-gold font-semibold tracking-wide uppercase text-sm hover:border-gold hover:bg-gold/5 transition-all duration-300"
              >
                Leistungen ansehen
              </a>
            </motion.div>
          </div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-5 h-8 border border-gold/30 rounded-full flex items-start justify-center pt-1.5"
          >
            <div className="w-1 h-2 bg-gold rounded-full" />
          </motion.div>
        </motion.div>
      </section>

      {/* ═══════════ BRIEF INTRO ═══════════ */}
      <section className="py-20 md:py-28 relative">
        <div className="container mx-auto">
          <AnimatedSection className="max-w-3xl mx-auto text-center">
            <div className="gold-line mb-10" />
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              Webvora Augsburg erstellt hochwertige Webseiten, die Vertrauen
              aufbauen, neue Kunden gewinnen und dein Unternehmen professionell
              präsentieren.
            </p>
            <div className="gold-line mt-10" />
          </AnimatedSection>
        </div>
      </section>

      {/* ═══════════ LEISTUNGEN ═══════════ */}
      <section id="leistungen" className="py-20 md:py-28 relative">
        <div className="container mx-auto">
          {/* Section header */}
          <AnimatedSection className="mb-16 md:mb-20">
            <div className="flex items-center gap-3 mb-4">
              <div className="h-[1px] w-12 bg-gold" />
              <span className="text-gold text-xs font-medium tracking-[0.3em] uppercase font-mono">
                Was wir bieten
              </span>
            </div>
            <h2 className="font-heading font-bold text-3xl md:text-4xl lg:text-5xl tracking-tight">
              Unsere Leistungen
            </h2>
          </AnimatedSection>

          {/* Services grid */}
          <div className="space-y-16 md:space-y-24">
            {services.map((service, i) => (
              <AnimatedSection key={service.title} delay={i * 0.1}>
                <div
                  className={`grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center ${
                    i % 2 !== 0 ? "lg:direction-rtl" : ""
                  }`}
                >
                  {/* Text */}
                  <div className={i % 2 !== 0 ? "lg:order-2" : ""}>
                    <div className="flex items-center gap-4 mb-5">
                      <div className="w-12 h-12 border border-gold/30 flex items-center justify-center">
                        <service.icon size={22} className="text-gold" />
                      </div>
                      <h3 className="font-heading font-semibold text-xl md:text-2xl tracking-tight">
                        {service.title}
                      </h3>
                    </div>
                    <p className="text-muted-foreground leading-relaxed text-base md:text-lg">
                      {service.description}
                    </p>
                  </div>

                  {/* Image */}
                  <div className={`relative ${i % 2 !== 0 ? "lg:order-1" : ""}`}>
                    <div className="relative overflow-hidden border border-border group">
                      <img
                        src={service.image}
                        alt={service.title}
                        className="w-full h-64 md:h-80 object-cover transition-transform duration-700 group-hover:scale-105"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[oklch(0.12_0.005_260_/_0.5)] to-transparent" />
                      {/* Gold corner accents */}
                      <div className="absolute top-0 left-0 w-6 h-6 border-t-2 border-l-2 border-gold" />
                      <div className="absolute bottom-0 right-0 w-6 h-6 border-b-2 border-r-2 border-gold" />
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════ VORTEILE ═══════════ */}
      <section className="py-20 md:py-28 relative bg-[oklch(0.10_0.005_260)]">
        {/* Diagonal cut top */}
        <div
          className="absolute top-0 left-0 right-0 h-20"
          style={{
            clipPath: "polygon(0 0, 100% 100%, 0 100%)",
            background: "oklch(0.12 0.005 260)",
            marginTop: "-5rem",
          }}
        />

        <div className="container mx-auto">
          <AnimatedSection className="mb-16 md:mb-20 text-center">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="h-[1px] w-12 bg-gold" />
              <span className="text-gold text-xs font-medium tracking-[0.3em] uppercase font-mono">
                Deine Vorteile
              </span>
              <div className="h-[1px] w-12 bg-gold" />
            </div>
            <h2 className="font-heading font-bold text-3xl md:text-4xl lg:text-5xl tracking-tight">
              Warum Webvora Augsburg?
            </h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {advantages.map((adv, i) => (
              <AnimatedSection key={adv.text} delay={i * 0.08}>
                <div className="group p-6 md:p-8 border border-border bg-[oklch(0.14_0.005_260)] hover:border-gold/30 transition-all duration-500 relative overflow-hidden">
                  {/* Hover glow */}
                  <div className="absolute inset-0 bg-gradient-to-br from-gold/[0.03] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  <div className="relative z-10">
                    <div className="w-10 h-10 border border-cactus/30 flex items-center justify-center mb-5 group-hover:border-cactus transition-colors duration-300">
                      <adv.icon size={18} className="text-cactus" />
                    </div>
                    <p className="font-heading font-medium text-base text-foreground">
                      {adv.text}
                    </p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════ ANGEBOT ═══════════ */}
      <section className="py-20 md:py-28 relative">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <AnimatedSection direction="left">
              <div className="flex items-center gap-3 mb-4">
                <div className="h-[1px] w-12 bg-gold" />
                <span className="text-gold text-xs font-medium tracking-[0.3em] uppercase font-mono">
                  Unser Angebot
                </span>
              </div>
              <h2 className="font-heading font-bold text-3xl md:text-4xl lg:text-5xl tracking-tight mb-6">
                Deine neue Webseite
              </h2>
              <p className="text-muted-foreground leading-relaxed text-base md:text-lg mb-6">
                Wir entwickeln professionelle Webseiten für Unternehmen,
                Selbständige und lokale Betriebe.
              </p>
              <p className="text-muted-foreground leading-relaxed text-base md:text-lg mb-8">
                Jede Webseite wird individuell gestaltet und exakt auf dein
                Unternehmen abgestimmt. Unser Ziel ist es, eine Webseite zu
                erstellen, die Vertrauen schafft, dein Angebot klar präsentiert
                und neue Kunden gewinnt.
              </p>

              {/* Price */}
              <div className="p-6 border border-gold/20 bg-[oklch(0.14_0.005_260)] inline-block">
                <span className="text-xs text-gold tracking-[0.2em] uppercase font-mono block mb-2">
                  Preis
                </span>
                <span className="font-heading font-bold text-2xl text-gold-gradient">
                  auf Anfrage
                </span>
                <p className="text-sm text-muted-foreground mt-2 max-w-sm">
                  Da jedes Projekt unterschiedliche Anforderungen hat, erstellen
                  wir ein individuelles Angebot basierend auf deinen Wünschen.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection direction="right" delay={0.2}>
              <div className="relative">
                {/* Decorative frame */}
                <div className="absolute -inset-4 border border-gold/10" />
                <div className="absolute -inset-8 border border-gold/5" />
                <div className="bg-[oklch(0.14_0.005_260)] border border-border p-8 md:p-12 relative">
                  <div className="space-y-6">
                    <div className="flex items-start gap-4">
                      <CheckCircle2 size={20} className="text-cactus mt-0.5 shrink-0" />
                      <span className="text-foreground">Individuelles Design nach deinen Wünschen</span>
                    </div>
                    <div className="flex items-start gap-4">
                      <CheckCircle2 size={20} className="text-cactus mt-0.5 shrink-0" />
                      <span className="text-foreground">Responsive – optimiert für alle Geräte</span>
                    </div>
                    <div className="flex items-start gap-4">
                      <CheckCircle2 size={20} className="text-cactus mt-0.5 shrink-0" />
                      <span className="text-foreground">Schnelle Ladezeiten & SEO-Optimierung</span>
                    </div>
                    <div className="flex items-start gap-4">
                      <CheckCircle2 size={20} className="text-cactus mt-0.5 shrink-0" />
                      <span className="text-foreground">Conversion-optimiert für mehr Kunden</span>
                    </div>
                    <div className="flex items-start gap-4">
                      <CheckCircle2 size={20} className="text-cactus mt-0.5 shrink-0" />
                      <span className="text-foreground">Hosting & Wartung auf Anfrage verfügbar</span>
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ═══════════ ABLAUF ═══════════ */}
      <section className="py-20 md:py-28 relative bg-[oklch(0.10_0.005_260)]">
        <div className="container mx-auto">
          <AnimatedSection className="mb-16 md:mb-20 text-center">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="h-[1px] w-12 bg-gold" />
              <span className="text-gold text-xs font-medium tracking-[0.3em] uppercase font-mono">
                In 5 Schritten
              </span>
              <div className="h-[1px] w-12 bg-gold" />
            </div>
            <h2 className="font-heading font-bold text-3xl md:text-4xl lg:text-5xl tracking-tight">
              So läuft die Zusammenarbeit ab
            </h2>
          </AnimatedSection>

          <div className="max-w-3xl mx-auto">
            {steps.map((step, i) => (
              <AnimatedSection key={step.num} delay={i * 0.1}>
                <div className="flex gap-6 md:gap-8 group relative">
                  {/* Vertical line */}
                  {i < steps.length - 1 && (
                    <div className="absolute left-[23px] md:left-[27px] top-14 bottom-0 w-[1px] bg-border group-hover:bg-gold/30 transition-colors duration-500" />
                  )}

                  {/* Number */}
                  <div className="shrink-0">
                    <div className="w-12 h-12 md:w-14 md:h-14 border border-gold/30 flex items-center justify-center group-hover:border-gold group-hover:bg-gold/5 transition-all duration-500">
                      <span className="font-mono text-sm font-medium text-gold">
                        {step.num}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="pb-12 md:pb-16">
                    <h3 className="font-heading font-semibold text-lg md:text-xl mb-2 group-hover:text-gold transition-colors duration-300">
                      {step.title}
                    </h3>
                    <p className="text-muted-foreground text-sm md:text-base leading-relaxed">
                      {step.desc}
                    </p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════ KONTAKT ═══════════ */}
      <section id="kontakt" className="py-20 md:py-28 relative">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
            {/* Left: Info */}
            <AnimatedSection direction="left">
              <div className="flex items-center gap-3 mb-4">
                <div className="h-[1px] w-12 bg-gold" />
                <span className="text-gold text-xs font-medium tracking-[0.3em] uppercase font-mono">
                  Kontakt
                </span>
              </div>
              <h2 className="font-heading font-bold text-3xl md:text-4xl lg:text-5xl tracking-tight mb-6">
                Projekt anfragen
              </h2>
              <p className="text-muted-foreground leading-relaxed text-base md:text-lg mb-8">
                Du möchtest eine professionelle Webseite für dein Unternehmen
                erstellen lassen? Sende uns eine Anfrage und wir melden uns
                schnellstmöglich bei dir.
              </p>

              {/* Contact details */}
              <div className="space-y-5">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 border border-gold/30 flex items-center justify-center">
                    <Send size={16} className="text-gold" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground uppercase tracking-wider mb-0.5">E-Mail</p>
                    <a href="mailto:service@webvora-design.de" className="text-foreground hover:text-gold transition-colors">
                      service@webvora-design.de
                    </a>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 border border-gold/30 flex items-center justify-center">
                    <ChevronRight size={16} className="text-gold" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground uppercase tracking-wider mb-0.5">Telefon</p>
                    <a href="tel:+4915733260733" className="text-foreground hover:text-gold transition-colors">
                      +49 157 33260733
                    </a>
                  </div>
                </div>
              </div>
            </AnimatedSection>

            {/* Right: Form */}
            <AnimatedSection direction="right" delay={0.2}>
              <ContactForm />
            </AnimatedSection>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

/* ─── Contact Form Component ─── */
function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch("https://formspree.io/f/mnjgzdvv", {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

      if (response.ok) {
        toast.success("Anfrage erfolgreich gesendet! Wir melden uns bei dir.");
        form.reset();
      } else {
        toast.error("Fehler beim Senden. Bitte versuche es erneut.");
      }
    } catch {
      toast.error("Netzwerkfehler. Bitte versuche es später erneut.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="border border-border bg-[oklch(0.14_0.005_260)] p-6 md:p-10 relative"
    >
      {/* Gold corner accents */}
      <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-gold" />
      <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-gold" />

      <div className="space-y-6">
        {/* Name */}
        <div>
          <label
            htmlFor="name"
            className="block text-xs font-medium tracking-[0.2em] uppercase text-gold mb-2 font-mono"
          >
            Name *
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            className="w-full bg-[oklch(0.18_0.005_260)] border border-border px-4 py-3 text-foreground placeholder:text-muted-foreground focus:border-gold focus:outline-none transition-colors duration-300 text-sm"
            placeholder="Dein Name"
          />
        </div>

        {/* Email */}
        <div>
          <label
            htmlFor="email"
            className="block text-xs font-medium tracking-[0.2em] uppercase text-gold mb-2 font-mono"
          >
            E-Mail *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            className="w-full bg-[oklch(0.18_0.005_260)] border border-border px-4 py-3 text-foreground placeholder:text-muted-foreground focus:border-gold focus:outline-none transition-colors duration-300 text-sm"
            placeholder="deine@email.de"
          />
        </div>

        {/* Phone */}
        <div>
          <label
            htmlFor="phone"
            className="block text-xs font-medium tracking-[0.2em] uppercase text-gold mb-2 font-mono"
          >
            Telefon
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            className="w-full bg-[oklch(0.18_0.005_260)] border border-border px-4 py-3 text-foreground placeholder:text-muted-foreground focus:border-gold focus:outline-none transition-colors duration-300 text-sm"
            placeholder="+49 ..."
          />
        </div>

        {/* Message */}
        <div>
          <label
            htmlFor="message"
            className="block text-xs font-medium tracking-[0.2em] uppercase text-gold mb-2 font-mono"
          >
            Nachricht *
          </label>
          <textarea
            id="message"
            name="message"
            required
            rows={5}
            className="w-full bg-[oklch(0.18_0.005_260)] border border-border px-4 py-3 text-foreground placeholder:text-muted-foreground focus:border-gold focus:outline-none transition-colors duration-300 text-sm resize-none"
            placeholder="Beschreibe dein Projekt..."
          />
        </div>

        {/* Submit */}
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full py-4 bg-cactus text-white font-semibold tracking-wide uppercase text-sm hover:bg-cactus-light transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
        >
          {isSubmitting ? (
            "Wird gesendet..."
          ) : (
            <>
              Anfrage senden
              <Send size={16} />
            </>
          )}
        </button>
      </div>
    </form>
  );
}
