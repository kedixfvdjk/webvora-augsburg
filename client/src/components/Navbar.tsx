/**
 * Navbar – Architectural Precision Design
 * Fixed top navigation with gold accent line, transparent background with blur on scroll.
 * Space Grotesk for brand, Outfit for nav items.
 */
import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setIsMobileOpen(false);
    if (location !== "/") {
      window.location.href = `/#${id}`;
      return;
    }
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  const navItems = [
    { label: "Startseite", action: () => { setIsMobileOpen(false); if (location !== "/") { window.location.href = "/"; } else { window.scrollTo({ top: 0, behavior: "smooth" }); } } },
    { label: "Leistungen", action: () => scrollToSection("leistungen") },
    { label: "Kontakt", action: () => scrollToSection("kontakt") },
  ];

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? "bg-[oklch(0.12_0.005_260_/_0.9)] backdrop-blur-xl border-b border-gold/10"
            : "bg-transparent"
        }`}
      >
        {/* Gold accent line at top */}
        <div className="h-[2px] bg-gradient-to-r from-transparent via-gold to-transparent" />

        <div className="container mx-auto">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3 group">
              <div className="relative">
                <div className="w-8 h-8 border-2 border-gold rotate-45 group-hover:rotate-[135deg] transition-transform duration-500" />
                <div className="absolute inset-1 w-6 h-6 border border-cactus rotate-45 group-hover:rotate-[135deg] transition-transform duration-700" />
              </div>
              <div className="flex flex-col">
                <span className="font-heading font-bold text-lg tracking-tight text-foreground">
                  WEBVORA
                </span>
                <span className="text-[10px] tracking-[0.3em] text-gold font-medium uppercase">
                  Augsburg
                </span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              {navItems.map((item) => (
                <button
                  key={item.label}
                  onClick={item.action}
                  className="text-sm font-medium text-muted-foreground hover:text-gold transition-colors duration-300 tracking-wide uppercase"
                >
                  {item.label}
                </button>
              ))}
              <button
                onClick={() => scrollToSection("kontakt")}
                className="px-5 py-2.5 bg-cactus text-white text-sm font-semibold tracking-wide uppercase hover:bg-cactus-light transition-all duration-300 border border-cactus hover:border-cactus-light"
              >
                Projekt anfragen
              </button>
            </div>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setIsMobileOpen(!isMobileOpen)}
              className="md:hidden text-foreground hover:text-gold transition-colors"
              aria-label="Menü öffnen"
            >
              {isMobileOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-[oklch(0.12_0.005_260_/_0.98)] backdrop-blur-xl pt-24"
          >
            <div className="container mx-auto flex flex-col gap-6">
              {navItems.map((item, i) => (
                <motion.button
                  key={item.label}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                  onClick={item.action}
                  className="text-2xl font-heading font-semibold text-foreground hover:text-gold transition-colors text-left py-3 border-b border-border"
                >
                  {item.label}
                </motion.button>
              ))}
              <motion.button
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
                onClick={() => scrollToSection("kontakt")}
                className="mt-4 px-6 py-4 bg-cactus text-white text-lg font-semibold tracking-wide uppercase text-center hover:bg-cactus-light transition-all duration-300"
              >
                Projekt anfragen
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
