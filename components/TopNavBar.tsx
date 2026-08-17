"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { href: "#inicio", id: "inicio", label: "Início" },
  { href: "#quem-e", id: "quem-e", label: "Quem é Maíra" },
  { href: "#proposito", id: "proposito", label: "Propósito" },
  { href: "#caminhada", id: "caminhada", label: "Caminhada" },
  { href: "#novidades", id: "novidades", label: "Receba novidades" },
];

export default function TopNavBar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const visibleSections = new Set<string>();

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            visibleSections.add(entry.target.id);
          } else {
            visibleSections.delete(entry.target.id);
          }
        });

        if (visibleSections.size === 0) {
          setActiveSection("");
        } else {
          // Keep the order of navLinks to activate the first visible one
          const first = navLinks.find(
            ({ id }) =>
              id &&
              (visibleSections.has(id) ||
                (id === "caminhada" && visibleSections.has("photostack")))
          );
          if (first) setActiveSection(first.id);
        }
      },
      // Margens maiores para evitar bug do observer com elementos gigantes (como o photostack)
      { rootMargin: "-10% 0px -20% 0px", threshold: 0 }
    );

    navLinks.forEach(({ id }) => {
      if (id) {
        const el = document.getElementById(id);
        if (el) observer.observe(el);
      }
    });

    const ps = document.getElementById("photostack");
    if (ps) observer.observe(ps);

    return () => observer.disconnect();
  }, []);

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-0 left-0 right-0 z-50 bg-[#420038]/10 backdrop-blur-md transition-all duration-300 border-b border-[#ED069A]/20 ${isScrolled
        ? "shadow-[0_4px_20px_rgba(142,0,125,0.3)]"
        : ""
        }`}
      style={{
        paddingTop: "calc(0.75rem + env(safe-area-inset-top))",
        paddingBottom: "0.75rem",
      }}
    >
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop flex justify-between items-center">
        {/* Logo */}
        <Link
          href="#inicio"
          className="flex items-center opacity-90 hover:opacity-100 transition-opacity duration-300 shrink-0 w-56"
        >
          <Image
            src="/optimized/mairalessa-hero.webp"
            alt="Maíra Lessa"
            width={200}
            height={80}
            className={`w-auto object-contain transition-all duration-300 ${isScrolled ? "h-14" : "h-20"
              }`}
            priority
          />
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => {
            const isActive = link.id && activeSection === link.id;

            return (
              <Link
                key={link.label}
                href={link.href}
                className={`relative text-[13px] font-semibold uppercase tracking-[0.08em] transition-all duration-300 group ${isActive
                  ? "scale-110 text-primary-container"
                  : "scale-100 text-white/90"
                  }`}
              >
                <span
                  className={`transition-all duration-300 ${!isActive &&
                    "group-hover:text-[#ED069A]"
                    }`}
                >
                  {link.label}
                </span>
                {/* Animated underline */}
                <span
                  className={`absolute -bottom-1 left-0 h-0.5 bg-primary-container transition-all duration-300 ${isActive ? "w-full" : "w-0 group-hover:w-full"
                    }`}
                />
              </Link>
            );
          })}

          {/* Instagram Icon */}
          <Link
            href="https://instagram.com/mairalessars"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/90 hover:text-primary-container transition-colors duration-300 ml-2"
            aria-label="Instagram de Maíra Lessa"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="22"
              height="22"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
              <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
            </svg>
          </Link>
        </div>

        {/* Mobile: only hamburger icon */}
        <button
          className="md:hidden text-white p-2 hover:text-primary-container transition-colors z-[60]"
          aria-label="Toggle menu"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <span className="material-symbols-outlined">
            {isMobileMenuOpen ? "close" : "menu"}
          </span>
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="fixed inset-0 z-50 h-dvh w-screen bg-[#2E0029]/98 backdrop-blur-2xl flex flex-col items-center justify-center text-white"
            style={{
              paddingTop: "calc(6rem + env(safe-area-inset-top))",
              paddingBottom: "calc(2rem + env(safe-area-inset-bottom))",
            }}
          >
            <div className="flex flex-col items-center gap-8 w-full max-w-sm px-6 my-auto">
              {navLinks.map((link) => {
                const isActive = link.id && activeSection === link.id;

                return (
                  <Link
                    key={link.label}
                    href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`relative text-[20px] font-bold uppercase tracking-[0.1em] transition-all duration-300 ${isActive
                      ? "text-[#C4DB1D] scale-105"
                      : "text-white hover:text-[#ED069A]"
                      }`}
                  >
                    {link.label}
                  </Link>
                );
              })}

              {/* Instagram Icon Mobile */}
              <Link
                href="https://instagram.com/mairalessars"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-white hover:text-[#C4DB1D] transition-colors duration-300 mt-6"
                aria-label="Instagram de Maíra Lessa"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
                </svg>
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
