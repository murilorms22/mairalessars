export default function HeroSection() {
  return (
    <header
      className="relative w-full min-h-[100vh] flex items-center overflow-hidden bg-white pt-24"
      id="inicio"
    >
      {/* Checkered background */}
      <div className="absolute inset-0 z-0">
        <img
          alt="Background"
          className="w-full h-full object-cover object-center"
          src="/background-hero.png"
        />
      </div>

      {/* Content grid */}
      <div className="relative z-10 w-full max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop grid grid-cols-12 gap-gutter items-center min-h-screen">

        {/* Left: Text */}
        <div className="col-span-12 lg:col-span-6 fade-up py-16 lg:py-0">
          <h1
            className="text-[52px] md:text-[80px] lg:text-[88px] text-[#282726] mb-8 tracking-tight leading-[1.05] font-black"
            style={{ fontFamily: "var(--font-montserrat)" }}
          >
            A força de uma
            <br />
            {/* "história" — green text, graphite highlight bar */}
            <span className="relative inline-block group">
              <span className="relative z-10 text-primary-container">
                história
              </span>
              <span className="absolute bottom-1 left-0 w-full h-[42%] bg-[#282726] -z-10 group-hover:h-[55%] transition-all duration-500" />
            </span>
            <br />
            que virou propósito.
          </h1>

          <p className="text-[16px] md:text-[18px] text-[#282726] leading-relaxed mb-10 max-w-md font-[var(--font-inter)]">
            Maíra Lessa é jornalista, comunicadora, mãe e uma voz que nasceu
            da escuta, da coragem e do compromisso com as pessoas do Rio Grande
            do Sul.
          </p>

          <a
            className="inline-flex items-center justify-center gap-3 bg-primary-container text-[#282726] font-bold text-[13px] uppercase tracking-[0.12em] px-10 py-5 rounded-full hover:bg-[#1a1c1c] hover:text-primary-container transition-all duration-300 transform hover:-translate-y-1 shadow-[0_8px_30px_-8px_rgba(163,230,53,0.6)] group"
            href="#quem-e"
          >
            Conhecer a trajetória
            <span className="material-symbols-outlined text-[18px] group-hover:translate-x-2 transition-transform">
              arrow_forward
            </span>
          </a>
        </div>

        {/* Right: Photo + Logo */}
        <div className="hidden relative lg:flex col-span-6 h-full min-h-screen items-end justify-center">
          {/* Maíra photo — bottom-aligned, full height feel */}
          <img
            alt="Maíra Lessa"
            className="relative z-10 h-full w-auto object-contain object-bottom drop-shadow-2xl select-none"
            src="/maira-hero2.png"
            draggable={false}
          />
        </div>
      </div>
    </header>
  );
}
