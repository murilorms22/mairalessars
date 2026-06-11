"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

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
      className={`fixed top-0 left-0 right-0 z-50 bg-white transition-all duration-300 ${
        isScrolled
          ? "py-3 shadow-[0_1px_0_0_rgba(0,0,0,0.06)]"
          : "py-3"
      }`}
    >
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop flex justify-between items-center">
        {/* Logo */}
        <Link
          href="#inicio"
          className="flex items-center opacity-90 hover:opacity-100 transition-opacity duration-300 shrink-0"
        >
          <Image
            src="/maira-logo.png"
            alt="Maíra Lessa"
            width={200}
            height={80}
            className={`w-auto object-contain transition-all duration-300 ${
              isScrolled ? "h-14" : "h-20"
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
                className={`relative text-[13px] font-semibold uppercase tracking-[0.08em] transition-all duration-300 group ${
                  isActive
                    ? "scale-110 text-primary-container"
                    : "scale-100 text-[#282726]"
                }`}
              >
                <span
                  className={`transition-all duration-300 ${
                    !isActive &&
                    "group-hover:bg-primary-container group-hover:bg-clip-text group-hover:text-transparent"
                  }`}
                >
                  {link.label}
                </span>
                {/* Animated underline */}
                <span
                  className={`absolute -bottom-1 left-0 h-0.5 bg-primary-container transition-all duration-300 ${
                    isActive ? "w-full" : "w-0 group-hover:w-full"
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
            className="text-[#282726] hover:text-primary-container transition-colors duration-300 ml-2"
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
          className="md:hidden text-[#282726] p-2 hover:text-primary-container transition-colors"
          aria-label="Toggle menu"
        >
          <span className="material-symbols-outlined">menu</span>
        </button>
      </div>
    </motion.nav>
  );
}
