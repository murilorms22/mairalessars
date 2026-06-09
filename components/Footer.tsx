import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-surface-container-low text-secondary relative z-20 border-t border-surface-variant/10">
      <div className="flex flex-col md:flex-row justify-between items-center w-full px-margin-mobile md:px-margin-desktop py-12 gap-unit max-w-container-max mx-auto text-[16px] font-[var(--font-inter)]">
        <div
          className="text-[28px] text-on-surface mb-6 md:mb-0 hover:text-primary-container transition-colors cursor-pointer"
          style={{ fontFamily: "var(--font-syne)" }}
        >
          Maíra Lessa
        </div>

        <div className="text-center md:text-left mb-6 md:mb-0">
          © 2024 Maíra Lessa. Todos os direitos reservados.
        </div>

        <div className="flex gap-8">
          <Link
            className="text-[14px] font-semibold uppercase text-secondary hover:text-primary transition-colors duration-200 tracking-[0.1em]"
            href="#"
          >
            Privacidade
          </Link>
          <Link
            className="text-[14px] font-semibold uppercase text-secondary hover:text-primary transition-colors duration-200 tracking-[0.1em]"
            href="#"
          >
            Termos de Uso
          </Link>
          <Link
            className="text-[14px] font-semibold uppercase text-secondary hover:text-primary transition-colors duration-200 tracking-[0.1em]"
            href="#"
          >
            Contato
          </Link>
        </div>
      </div>
    </footer>
  );
}
