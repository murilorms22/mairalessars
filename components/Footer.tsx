import Link from "next/link";
import Image from "next/image";

const footerLinks = [
  { href: "#inicio", label: "Início" },
  { href: "#quem-e", label: "Quem é Maíra" },
  { href: "#proposito", label: "Propósito" },
  { href: "#caminhada", label: "Caminhada" },
  {
    href: "https://instagram.com",
    label: "Instagram",
    external: true,
  },
];

export default function Footer() {
  return (
    <footer className="bg-surface-container-low text-secondary relative z-20 border-t border-surface-variant/10">
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop pt-16 pb-10 font-[var(--font-inter)]">
        {/* Top row: brand + nav */}
        <div className="flex flex-col md:flex-row justify-center md:justify-between items-center md:items-start gap-12 mb-12 text-center md:text-left">
          {/* Brand logo */}
          <Link href="#inicio" className="shrink-0 hover:opacity-80 transition-opacity duration-300">
            <div className="relative h-36 w-[300px] mx-auto md:mx-0">
              <Image
                src="/optimized/maira-logo.webp"
                alt="Maíra Lessa"
                className="object-contain object-left"
                fill
                sizes="300px"
              />
            </div>
          </Link>

          {/* Nav links */}
          <nav className="flex flex-col flex-wrap my-auto gap-x-10 gap-y-4 justify-center md:justify-end items-center md:items-end w-full md:w-auto">
            {footerLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                target={link.external ? "_blank" : undefined}
                rel={link.external ? "noopener noreferrer" : undefined}
                className="text-[14px] font-semibold uppercase text-secondary hover:text-primary-container transition-colors duration-200 tracking-[0.08em]"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>

        {/* Divider */}
        <div className="border-t border-surface-variant/20 pt-8 flex flex-col md:flex-row justify-between">
          <div>
            <p className="text-[13px] text-secondary/60 text-center md:text-left">
              © 2024 Maíra Lessa. Todos os direitos reservados.
            </p>
          </div>
          <div>
            <p className="text-[13px] text-secondary/60 text-center md:text-left">
              Desenvolvido por <Link href="https://muxstudio.com.br" target="_blank" rel="noopener noreferrer" className="text-primary-container hover:text-primary transition-colors duration-200">MUX Studio</Link>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
