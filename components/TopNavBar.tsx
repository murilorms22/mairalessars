"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

const navLinks = [
  { href: "#inicio", label: "Início" },
  { href: "#quem-e", label: "Quem é Maíra" },
  { href: "#proposito", label: "Propósito" },
  { href: "#caminhada", label: "Caminhada" },
  { href: "#novidades", label: "Receba novidades" },
  { href: "#", label: "Instagram" },
];

export default function TopNavBar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-0 left-0 right-0 z-50 bg-white transition-all duration-300 ${isScrolled
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
            className={`w-auto object-contain transition-all duration-300 ${isScrolled ? "h-14" : "h-20"
              }`}
            priority
          />
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="relative text-[13px] font-semibold uppercase tracking-[0.08em] text-[#282726] transition-all duration-200 group"
            >
              <span className="group-hover:bg-primary-container group-hover:bg-clip-text group-hover:text-transparent transition-all duration-200">
                {link.label}
              </span>
              {/* Animated underline */}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary-container group-hover:w-full transition-all duration-300" />
            </Link>
          ))}
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
