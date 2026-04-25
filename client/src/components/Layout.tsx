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
              src="/manus-storage/scf-logo_ebbe9e96.png"
              alt="SCF Logo"
              className="h-10 md:h-12 w-auto"
            />
            <div className="hidden sm:block">
              <span className="font-display text-white text-sm md:text-base font-semibold leading-tight block">
                Sabin Children's
              </span>
              <span className="font-display text-white/80 text-xs md:text-sm leading-tight block">
                Foundation
              </span>
            </div>
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
      <footer className="bg-[#0d2847] text-white/80">
        <div className="container py-16 md:py-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
            {/* Brand Column */}
            <div className="lg:col-span-1">
              <div className="flex items-center gap-3 mb-5">
                <img
                  src="/manus-storage/scf-logo_ebbe9e96.png"
                  alt="SCF Logo"
                  className="h-12 w-auto"
                />
                <div>
                  <span className="font-display text-white text-base font-semibold block leading-tight">
                    Sabin Children's
                  </span>
                  <span className="font-display text-white/70 text-sm block leading-tight">
                    Foundation
                  </span>
                </div>
              </div>
              <p className="text-sm leading-relaxed text-white/60 mb-4">
                A Ripple Effect of Caring and Sharing
              </p>
              <p className="text-sm leading-relaxed text-white/50">
                Transforming lives around the world since 1993.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-display text-white text-base font-semibold mb-5">
                Explore
              </h4>
              <ul className="space-y-3">
                {NAV_LINKS.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-white/60 hover:text-[#D4A853] transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Programs */}
            <div>
              <h4 className="font-display text-white text-base font-semibold mb-5">
                Our Pillars
              </h4>
              <ul className="space-y-3 text-sm text-white/60">
                <li>Essential Healthcare Access</li>
                <li>Safe Care for Vulnerable Children</li>
                <li>Maternal & Child Nutrition</li>
                <li>Clean Water & Sanitation</li>
                <li>Life-Changing Surgeries</li>
                <li>Education & Opportunity</li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="font-display text-white text-base font-semibold mb-5">
                Get in Touch
              </h4>
              <p className="text-sm text-white/60 mb-3">
                Reach out to learn more about our projects or partnerships.
              </p>
              <Link
                href="/contact"
                className="inline-block px-5 py-2.5 border border-[#D4A853]/40 text-[#D4A853] hover:bg-[#D4A853]/10 text-sm font-medium rounded transition-colors"
              >
                Contact Us
              </Link>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="mt-14 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-xs text-white/40">
              &copy; {new Date().getFullYear()} Sabin Children's Foundation. All rights reserved.
            </p>
            <p className="text-xs text-white/40 italic font-display">
              "Just as ripples spread out when a single pebble is dropped into water, the actions of individuals can have far-reaching effects." — Dalai Lama
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
