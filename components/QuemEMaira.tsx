import Image from "next/image";

export default function QuemEMaira() {
  return (
    <section
      className="py-section-gap w-full bg-surface-container-lowest relative overflow-hidden"
      id="quem-e"
    >
      {/* Abstract background shape */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-surface-variant/20 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/4 z-0" />

      <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop relative z-10">
        {/* Header Row */}
        <div className="grid grid-cols-12 gap-gutter items-center mb-12 md:mb-32">
          <div className="col-span-12 lg:col-span-5 fade-up">
            <h2 className="text-[14px] font-semibold uppercase text-secondary tracking-widest mb-6 flex items-center gap-4 font-[var(--font-inter)]">
              <span className="w-16 h-px bg-primary-container inline-block" />
              A Jornada
            </h2>
            <h3
              className="text-[36px] md:text-[56px] text-on-surface mb-8 leading-[1.1] font-bold"
              style={{ fontFamily: "var(--font-montserrat)" }}
            >
              Antes de qualquer título,
              <br />
              <span
                className="text-primary-container text-[48px] md:text-[80px] block mt-2 relative inline-block"
                style={{ fontFamily: "var(--font-montserrat)", fontWeight: 800 }}
              >
                Maíra é presença.
                <svg
                  className="absolute w-full h-4 -bottom-4 left-0 text-primary-container opacity-30"
                  preserveAspectRatio="none"
                  viewBox="0 0 100 10"
                >
                  <path
                    d="M0 5 Q 50 10 100 5"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="3"
                  />
                </svg>
              </span>
            </h3>
          </div>

          <div className="col-span-12 lg:col-span-6 lg:col-start-7 fade-up mt-8 lg:mt-0 text-[20px] text-secondary leading-relaxed font-[var(--font-inter)]">
            <p className="mb-6">
              Maíra Lessa construiu sua trajetória pela comunicação. Como
              jornalista, aprendeu a olhar para as pessoas com atenção, a ouvir
              histórias com respeito e a traduzir realidades complexas de forma
              simples, humana e verdadeira.
            </p>
          </div>
        </div>

        {/* Editorial Image Layout */}
        <div className="grid grid-cols-12 gap-gutter relative">
          {/* Main Image */}
          <div className="col-span-12 lg:col-span-6 z-20 fade-up">
            <div className="aspect-[3/4] bg-surface-dim relative overflow-hidden rounded-3xl shadow-[0_40px_80px_-20px_rgba(0,0,0,0.15)] group">
              <Image
                alt="Maíra Lessa Portrait"
                className="object-cover transition-all duration-700 group-hover:scale-105"
                src="/optimized/jornada2.webp"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
          </div>

          {/* Overlapping Text Card */}
          <div className="col-span-12 lg:col-span-6 lg:-ml-24 z-30 mt-6 lg:mt-32 fade-up relative">
            <div className="bg-surface-container-lowest/90 backdrop-blur-xl p-10 lg:p-16 rounded-3xl shadow-[0_30px_60px_-15px_rgba(0,0,0,0.1)] border border-surface-variant/50 relative">
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-primary-container rounded-full mix-blend-multiply opacity-20 blur-2xl z-0" />

              <p className="text-[18px] text-secondary mb-8 relative z-10 leading-relaxed font-[var(--font-inter)]">
                Sua caminhada não se resume ao que fez profissionalmente. Maíra
                também é mãe. E foi na maternidade, nos desafios da vida real e
                nas dores que atravessou, que encontrou uma nova forma de
                enxergar o mundo: com mais responsabilidade, mais coragem e mais
                propósito.
              </p>

              <blockquote className="relative py-8 pl-10 border-l-4 border-primary-container bg-surface-variant/10 rounded-r-2xl mb-8 group transition-colors hover:bg-surface-variant/20">
                <span className="material-symbols-outlined absolute top-4 left-4 text-primary-container/20 text-[60px] -z-10 group-hover:text-primary-container/40 transition-colors">
                  format_quote
                </span>
                <p
                  className="text-[32px] text-on-surface italic leading-tight font-semibold"
                  style={{ fontFamily: "var(--font-montserrat)" }}
                >
                  &ldquo;Tu descobres o quão forte és, quando a dor vira
                  propósito.&rdquo;
                </p>
              </blockquote>

              <p className="text-[18px] text-secondary relative z-10 font-[var(--font-inter)]">
                Hoje, usa sua voz para se aproximar de pessoas, ouvir
                comunidades e construir uma caminhada baseada em verdade,
                sensibilidade e ação.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
