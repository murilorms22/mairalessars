import Link from "next/link";
import Image from "next/image";

interface FooterLink {
  href: string;
  label: string;
  external?: boolean;
  isButton?: boolean;
}

const footerLinks: FooterLink[] = [
  { href: "#inicio", label: "Início" },
  { href: "#quem-e", label: "Quem é Maíra" },
  { href: "#proposito", label: "Propósito" },
  { href: "#caminhada", label: "Caminhada" },
  {
    href: "https://instagram.com/mairalessars",
    label: "Instagram",
    external: true,
  },
  {
    href: "https://wa.me/5553997002026?text=Oi!%20Vim%20do%20site%20da%20Ma%C3%ADra%20Lessa.",
    label: "Receba novidades",
    external: true,
    isButton: true,
  },
];

export default function Footer() {
  return (
    <footer id="novidades" className="bg-white text-[#2E0029] relative z-20 border-t border-[#ED069A]/20">
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop pt-16 pb-10 font-[var(--font-inter)]">
        {/* Top row: brand + nav */}
        <div className="flex flex-col md:flex-row justify-center md:justify-between items-center md:items-start gap-12 mb-12 text-center md:text-left">
          {/* Brand logo */}
          <Link href="#inicio" className="shrink-0 hover:opacity-80 transition-opacity duration-300">
            <div className="relative h-36 w-[300px] mx-auto md:mx-0">
              <Image
                src="/optimized/maira-logo-roxa.webp"
                alt="Maíra Lessa"
                className="object-contain object-left"
                fill
                sizes="300px"
              />
            </div>
          </Link>

          {/* Nav links */}
          <nav className="flex flex-col md:flex-row flex-wrap my-auto gap-x-8 gap-y-4 justify-center md:justify-end items-center w-full md:w-auto">
            {footerLinks.map((link) =>
              link.isButton ? (
                <Link
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-[14px] font-bold uppercase bg-[#ED069A] text-white px-6 py-3 rounded-full hover:bg-[#8E007D] transition-all duration-300 tracking-[0.08em] shadow-md hover:shadow-lg hover:scale-105"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="shrink-0"
                  >
                    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.572-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
                  </svg>
                  {link.label}
                </Link>
              ) : (
                <Link
                  key={link.label}
                  href={link.href}
                  target={link.external ? "_blank" : undefined}
                  rel={link.external ? "noopener noreferrer" : undefined}
                  className="text-[14px] font-bold uppercase text-[#2E0029] hover:text-[#ED069A] transition-colors duration-200 tracking-[0.08em]"
                >
                  {link.label}
                </Link>
              )
            )}
          </nav>
        </div>

        {/* Divider */}
        <div className="border-t border-[#ED069A]/15 pt-8 flex flex-col md:flex-row justify-between">
          <div>
            <p className="text-[13px] text-[#2E0029]/70 text-center md:text-left font-medium">
              © 2024 Maíra Lessa. Todos os direitos reservados.
            </p>
          </div>
          <div>
            <p className="text-[13px] text-[#2E0029]/70 text-center md:text-left font-medium">
              Desenvolvido por{" "}
              <Link
                href="https://muxstudio.com.br"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#ED069A] hover:text-[#8E007D] transition-colors duration-200 font-bold"
              >
                MUX Studio
              </Link>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
