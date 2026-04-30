/*
 * SCF Layout — Documentary Realism Design
 * Navigation: Transparent overlay on hero, solid on scroll
 * Footer: Comprehensive with SCF branding
 * Colors: Navy (#12365a), Cream (#FDF8F0), Gold accent
 */
import { useState, useEffect, type ReactNode } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/partners", label: "Partners" },
  { href: "/stories", label: "Stories" },
  { href: "/angels-of-light", label: "Angels of Light" },
  { href: "/donate", label: "Donate" },
  { href: "/contact", label: "Contact" },
];

export default function Layout({ children }: { children: ReactNode }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    window.scrollTo(0, 0);
  }, [location]);

  const isHome = location === "/";
  const navBg = scrolled || !isHome
    ? "bg-[#12365a]/95 backdrop-blur-md shadow-lg"
    : "bg-transparent";

  return (
    <div className="min-h-screen flex flex-col">
      {/* Navigation */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${navBg}`}
      >
        <nav className="container flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <img
              src="/manus-storage/ripple-droplet-clean_59eee497.png"
              alt="SCF Water Ripple"
              className="h-10 md:h-12 w-auto rounded-sm object-cover"
            />
            <img
              src="/manus-storage/scf-logo-text-clean_72a7b4d7.png"
              alt="Sabin Children's Foundation"
              className="hidden sm:block h-9 md:h-[46px] w-auto object-contain"
            />
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-1">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`px-4 py-2 text-sm font-body font-medium tracking-wide transition-colors rounded-sm
                  ${location === link.href
                    ? "text-[#D4A853]"
                    : "text-white/90 hover:text-[#D4A853]"
                  }`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/donate"
              className="ml-3 px-6 py-2.5 bg-[#D4A853] hover:bg-[#c49a45] text-[#12365a] font-body font-bold text-sm tracking-wide rounded transition-colors"
            >
              GIVE NOW
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden text-white p-2"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden bg-[#12365a]/98 backdrop-blur-md border-t border-white/10 overflow-hidden"
            >
              <div className="container py-6 flex flex-col gap-1">
                {NAV_LINKS.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`px-4 py-3 text-base font-body font-medium rounded transition-colors
                      ${location === link.href
                        ? "text-[#D4A853] bg-white/5"
                        : "text-white/90 hover:text-[#D4A853] hover:bg-white/5"
                      }`}
                  >
                    {link.label}
                  </Link>
                ))}
                <Link
                  href="/donate"
                  className="mt-3 px-6 py-3 bg-[#D4A853] hover:bg-[#c49a45] text-[#12365a] font-body font-bold text-center rounded transition-colors"
                >
                  GIVE NOW
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* Main Content */}
      <main className="flex-1">{children}</main>

      {/* Footer */}
      <footer className="bg-[#1a3a5c] text-white">
        {/* Main footer body */}
        <div className="container py-14">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 items-start">
            {/* Brand Column */}
            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-3">
                <img
                  src="/manus-storage/ripple-droplet-clean_59eee497.png"
                  alt="SCF Water Ripple"
                  className="h-14 w-auto"
                />
                <img
                  src="/manus-storage/scf-logo-text-clean_72a7b4d7.png"
                  alt="Sabin Children's Foundation"
                  className="h-10 w-auto"
                />
              </div>
            </div>

            {/* Location */}
            <div>
              <h4 className="text-[#D4A853] text-xs font-bold tracking-widest uppercase mb-4">Location</h4>
              <a
                href="https://maps.google.com/?q=17180+Bernardo+Center+Drive+Suite+200+San+Diego+CA+92128"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-white/80 hover:text-white transition-colors leading-relaxed block"
              >
                17180 Bernardo Center Drive, Suite 200<br />
                San Diego, CA 92128
              </a>
            </div>

            {/* Contact */}
            <div>
              <h4 className="text-[#D4A853] text-xs font-bold tracking-widest uppercase mb-4">Contact</h4>
              <a href="tel:8583655110" className="text-sm text-white/80 hover:text-white transition-colors block mb-2">858.365.5110</a>
              <a href="mailto:info@sabinchildrensfoundation.org" className="text-sm text-white/80 hover:text-white transition-colors block">info@sabinchildrensfoundation.org</a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10">
          <div className="container py-5 flex flex-col md:flex-row items-center justify-between gap-3">
            <p className="text-xs text-white/50">
              &copy;2028 Sabin Holdings All rights reserved.
            </p>
            <div className="flex items-center gap-3 text-xs text-white/50">
              <Link href="/privacy" className="hover:text-white transition-colors">Privacy</Link>
              <span>|</span>
              <Link href="/terms" className="hover:text-white transition-colors">Terms</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
