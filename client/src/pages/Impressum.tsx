/**
 * Impressum Page – Architectural Precision Design
 * Legal information page with clean layout and gold accents.
 */
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AnimatedSection from "@/components/AnimatedSection";

export default function Impressum() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />

      <section className="pt-32 pb-20 md:pt-40 md:pb-28">
        <div className="container mx-auto">
          <AnimatedSection>
            <div className="max-w-2xl">
              {/* Header */}
              <div className="flex items-center gap-3 mb-4">
                <div className="h-[1px] w-12 bg-gold" />
                <span className="text-gold text-xs font-medium tracking-[0.3em] uppercase font-mono">
                  Rechtliches
                </span>
              </div>
              <h1 className="font-heading font-bold text-3xl md:text-4xl lg:text-5xl tracking-tight mb-12">
                Impressum
              </h1>

              {/* Content */}
              <div className="space-y-10">
                {/* Angaben */}
                <div>
                  <h2 className="font-heading font-semibold text-lg text-gold mb-4 tracking-wide">
                    Angaben gemäß §5 TMG
                  </h2>
                  <div className="text-muted-foreground leading-relaxed space-y-1">
                    <p>Edgart Karsten</p>
                    <p>Friedl-Urban-Str. 10</p>
                    <p>86169 Augsburg</p>
                    <p>Deutschland</p>
                  </div>
                </div>

                <div className="gold-line" />

                {/* Kontakt */}
                <div>
                  <h2 className="font-heading font-semibold text-lg text-gold mb-4 tracking-wide">
                    Kontakt
                  </h2>
                  <div className="text-muted-foreground leading-relaxed space-y-2">
                    <p>
                      Telefon:{" "}
                      <a
                        href="tel:+4915733260733"
                        className="text-foreground hover:text-gold transition-colors"
                      >
                        +49 157 33260733
                      </a>
                    </p>
                    <p>
                      E-Mail:{" "}
                      <a
                        href="mailto:service@webvora-design.de"
                        className="text-foreground hover:text-gold transition-colors"
                      >
                        service@webvora-design.de
                      </a>
                    </p>
                  </div>
                </div>

                <div className="gold-line" />

                {/* Back link */}
                <div className="pt-4">
                  <a
                    href="/"
                    className="inline-flex items-center gap-2 text-sm text-gold hover:text-gold-light transition-colors font-medium tracking-wide uppercase"
                  >
                    <span>&larr;</span>
                    Zurück zur Startseite
                  </a>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <Footer />
    </div>
  );
}
