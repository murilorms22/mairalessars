import Image from "next/image";

export default function HeroSection() {
  return (
    <header
      className="relative w-full min-h-dvh lg:h-[calc(100dvh/var(--vp-zoom))] flex items-center lg:overflow-hidden overflow-visible bg-[#820067] text-white pb-16 lg:pb-0"
      style={{
        paddingTop: "calc(6rem + env(safe-area-inset-top))",
      }}
      id="inicio"
    >


      {/* Content grid */}
      <div className="relative z-10 w-full max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop grid grid-cols-12 gap-gutter items-center h-full">

        {/* Left: Text & Mobile Images */}
        <div className="col-span-12 lg:col-span-6 fade-up py-8 lg:py-0 flex flex-col items-center lg:items-start">

          {/* Mobile-only images container */}
          <div className="lg:hidden relative w-full h-[40vh] min-h-[300px] flex items-end justify-center overflow-hidden mb-6">
            {/* Fundo decorativo (Fundo Hero) */}
            <div
              className="absolute left-0 right-0 mx-auto pointer-events-none z-0"
              style={{
                bottom: "15%",
                height: "80%",
                width: "90%",
                maxWidth: "450px",
              }}
            >
              <Image
                alt="Fundo complementar"
                className="object-contain object-bottom opacity-90"
                src="/optimized/fundo-hero.webp"
                fill
                priority
                sizes="100vw"
              />
            </div>

            {/* Maíra photo container */}
            <div
              className="absolute inset-x-0 top-0 bottom-0 z-10"
              style={{
                WebkitMaskImage: "linear-gradient(to bottom, black 50%, transparent 100%)",
                maskImage: "linear-gradient(to bottom, black 65%, transparent 100%)"
              }}
            >
              <Image
                alt="Maíra Lessa"
                className="object-contain object-bottom drop-shadow-2xl select-none origin-bottom scale-105"
                src="/optimized/maira-hero5.webp"
                fill
                priority
                sizes="100vw"
                draggable={false}
              />
            </div>
          </div>

          {/* Text content wrapper */}
          <div className="w-full flex flex-col items-center lg:items-start text-center lg:text-left -mt-24 lg:mt-0 relative z-20 px-4 lg:px-0">
            <h1
              className="text-[34px] md:text-[64px] lg:text-[88px] text-white mb-8 tracking-tight leading-[1.05] font-black font-sans"
            >
              A força de uma
              <br />
              {/* "história" — deeper hero purple text, green highlight bar */}
              <span className="relative inline-block group">
                <span className="relative z-10 text-[#ED069A] font-black px-2">
                  história
                </span>
                <span className="absolute bottom-1 left-0 w-full h-[75%] bg-[#C4DB1D] -z-10 group-hover:h-[85%] transition-all duration-500 rounded-md" />
              </span>
              {'‌ '}que <br /> virou propósito.
            </h1>

            <p className="text-[16px] md:text-[18px] text-white/90 leading-relaxed mb-10 max-w-md font-[var(--font-inter)] mx-auto lg:mx-0">
              Maíra Lessa é jornalista, comunicadora, mãe e uma voz que nasceu
              da escuta, da coragem e do compromisso com as pessoas do Rio Grande
              do Sul.
            </p>

            <a
              className="inline-flex items-center justify-center gap-3 bg-[#C4DB1D] text-[#8E007D] font-black text-[13px] uppercase tracking-[0.12em] px-10 py-5 rounded-full hover:bg-[#ED069A] hover:text-white transition-all duration-300 transform hover:-translate-y-1 shadow-[0_8px_30px_-5px_rgba(196,219,29,0.5)] group mx-auto lg:mx-0"
              href="#quem-e"
            >
              Conhecer a trajetória
              <span className="material-symbols-outlined text-[18px] group-hover:translate-x-2 transition-transform">
                arrow_forward
              </span>
            </a>
          </div>
        </div>

        {/* Right: Photo + Signature */}
        <div className="hidden relative lg:flex col-span-6 h-full items-end justify-center">

          {/* Fundo decorativo (Fundo Hero) */}
          <div
            className="absolute left-0 right-0 mx-auto pointer-events-none z-0"
            style={{
              bottom: "40%",
              height: "calc(70% + 200px)",
              width: "100%",
              maxWidth: "700px",
            }}
          >
            <Image
              alt="Fundo complementar"
              className="object-contain object-bottom opacity-90"
              src="/optimized/fundo-hero.webp"
              fill
              priority
              sizes="(max-width: 1024px) 0vw, 60vw"
            />
          </div>

          {/* Maíra photo container */}
          <div className="relative z-10 h-full w-full flex flex-col items-center justify-end">
            <div
              className="absolute -top-[10%] inset-x-0 bottom-35"
              style={{
                WebkitMaskImage: "linear-gradient(to bottom, black 55%, transparent 100%)",
                maskImage: "linear-gradient(to bottom, black 65%, transparent 100%)"
              }}
            >
              <Image
                alt="Maíra Lessa"
                className="object-contain object-bottom drop-shadow-2xl select-none origin-bottom scale-105"
                src="/optimized/maira-hero5.webp"
                fill
                priority
                sizes="(max-width: 1024px) 0vw, 50vw"
                draggable={false}
              />
            </div>

            {/* Signature over the transparent gradient */}
            <div className="relative z-20 w-[100%] max-w-[700px] aspect-[2/1] mb-24 drop-shadow-xl">
              <Image
                src="/optimized/mairalessa-hero.webp"
                alt="Maíra Lessa"
                fill
                sizes="(max-width: 1024px) 100vw, 700px"
                className="object-contain object-center"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
