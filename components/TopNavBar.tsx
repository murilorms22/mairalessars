"use client";

import { useState } from "react";
import Link from "next/link";

const navLinks = [
  { href: "#inicio", label: "Início" },
  { href: "#quem-e", label: "Quem é Maíra" },
  { href: "#proposito", label: "Propósito" },
  { href: "#caminhada", label: "Caminhada" },
  { href: "#novidades", label: "Receba novidades" },
  { href: "#", label: "Instagram", external: true },
];

export default function TopNavBar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="bg-white/90 backdrop-blur-md text-primary sticky top-0 z-50 transition-all duration-300 ease-in-out">
      <div className="flex justify-between items-center w-full px-margin-mobile md:px-margin-desktop py-unit max-w-container-max mx-auto h-[80px]">
        {/* Logo */}
        <Link
          href="#inicio"
          className="font-[var(--font-montserrat)] text-[24px] text-on-surface tracking-tighter hover:text-primary-container transition-colors duration-300"
          style={{ fontFamily: "var(--font-montserrat)", fontWeight: 800 }}
        >
          Maíra Lessa
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link, i) => (
            <Link
              key={link.label}
              href={link.href}
              className={`font-[var(--font-inter)] text-[14px] font-semibold uppercase tracking-[0.1em] leading-none transition-all duration-300 ease-in-out ${i === 0
                ? "text-primary border-b-2 border-primary pb-1"
                : "text-secondary hover:text-primary hover:opacity-80"
                }`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-on-surface p-2 hover:text-primary-container transition-colors"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <span className="material-symbols-outlined">
            {mobileMenuOpen ? "close" : "menu"}
          </span>
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-surface/95 backdrop-blur-xl border-t border-surface-variant/30 px-margin-mobile pb-8">
          <div className="flex flex-col gap-6 pt-6">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="font-[var(--font-inter)] text-[14px] font-semibold uppercase tracking-[0.1em] text-secondary hover:text-primary transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
