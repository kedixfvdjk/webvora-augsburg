/**
 * Footer – Architectural Precision Design
 * Minimalist footer with gold accent lines, navigation links and legal info.
 */
import { Link, useLocation } from "wouter";

export default function Footer() {
  const [location] = useLocation();

  const scrollToSection = (id: string) => {
    if (location !== "/") {
      window.location.href = `/#${id}`;
      return;
    }
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-[oklch(0.10_0.005_260)] border-t border-border">
      {/* Gold accent line */}
      <div className="h-[1px] bg-gradient-to-r from-transparent via-gold to-transparent" />

      <div className="container mx-auto py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-16">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="relative">
                <div className="w-7 h-7 border-2 border-gold rotate-45" />
                <div className="absolute inset-1 w-5 h-5 border border-cactus rotate-45" />
              </div>
              <div className="flex flex-col">
                <span className="font-heading font-bold text-base tracking-tight text-foreground">
                  WEBVORA
                </span>
                <span className="text-[9px] tracking-[0.3em] text-gold font-medium uppercase">
                  Augsburg
                </span>
              </div>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed max-w-xs">
              Professionelle Webseiten für Unternehmen, Selbständige und lokale Betriebe in Augsburg und Umgebung.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-heading font-semibold text-sm tracking-widest uppercase text-gold mb-5">
              Navigation
            </h4>
            <ul className="space-y-3">
              <li>
                <button
                  onClick={() => {
                    if (location !== "/") { window.location.href = "/"; } else { window.scrollTo({ top: 0, behavior: "smooth" }); }
                  }}
                  className="text-sm text-muted-foreground hover:text-gold transition-colors duration-300"
                >
                  Startseite
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("leistungen")}
                  className="text-sm text-muted-foreground hover:text-gold transition-colors duration-300"
                >
                  Leistungen
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("kontakt")}
                  className="text-sm text-muted-foreground hover:text-gold transition-colors duration-300"
                >
                  Kontakt
                </button>
              </li>
              <li>
                <Link
                  href="/impressum"
                  className="text-sm text-muted-foreground hover:text-gold transition-colors duration-300"
                >
                  Impressum
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading font-semibold text-sm tracking-widest uppercase text-gold mb-5">
              Kontakt
            </h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="tel:+4915733260733"
                  className="text-sm text-muted-foreground hover:text-gold transition-colors duration-300"
                >
                  +49 157 33260733
                </a>
              </li>
              <li>
                <a
                  href="mailto:service@webvora-design.de"
                  className="text-sm text-muted-foreground hover:text-gold transition-colors duration-300"
                >
                  service@webvora-design.de
                </a>
              </li>
              <li className="text-sm text-muted-foreground">
                Augsburg, Deutschland
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted-foreground">
            &copy; {new Date().getFullYear()} Webvora Augsburg. Alle Rechte vorbehalten.
          </p>
          <Link
            href="/impressum"
            className="text-xs text-muted-foreground hover:text-gold transition-colors duration-300"
          >
            Impressum
          </Link>
        </div>
      </div>
    </footer>
  );
}
