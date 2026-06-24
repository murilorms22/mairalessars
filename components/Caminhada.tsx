import Image from "next/image";

const tickerCities = [
  "Pelotas",
  "Canguçu",
  "Piratini",
  "Região Sul",
  "Rio Grande do Sul",
];

const images = [
  {
    src: "/optimized/caminhada-1.webp",
    alt: "Caminhada 1",
  },
  {
    src: "/optimized/caminhada-2.webp",
    alt: "Caminhada 2",
  },
  {
    src: "/optimized/caminhada-3.webp",
    alt: "Caminhada 3",
  },
  {
    src: "/optimized/caminhada-4.webp",
    alt: "Caminhada 4",
  },
];

export default function Caminhada() {
  return (
    <section
      className="pt-section-gap w-full bg-surface-container-low overflow-hidden relative"
      id="caminhada"
    >
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop relative z-10">
        {/* Left-aligned Header */}
        <div className="mb-16 fade-up">
          <h2 className="text-[14px] font-semibold uppercase text-secondary tracking-widest mb-6 flex items-center gap-4 font-[var(--font-inter)]">
            <span className="w-16 h-px bg-primary-container inline-block" />
            Caminhada
          </h2>
          <h3
            className="text-[48px] md:text-[64px] text-on-surface leading-tight font-bold max-w-4xl"
            style={{ fontFamily: "var(--font-montserrat)" }}
          >
            Uma caminhada feita de{" "}
            <span
              className="text-primary-container"
              style={{ fontFamily: "var(--font-montserrat)", fontWeight: 800 }}
            >
              encontros
            </span>
            , escuta e histórias reais.
          </h3>
        </div>

        {/* Bento Grid: Text Left + Images Right */}
        <div className="grid grid-cols-12 gap-6 fade-up">
          {/* Left Column: Text Cards */}
          <div className="col-span-12 lg:col-span-4 flex flex-col gap-6">
            {/* Card 1 */}
            <div className="bg-surface-container-lowest rounded-2xl p-8 shadow-[0_4px_30px_rgba(0,0,0,0.04)] border border-surface-variant/30">
              <p className="text-[16px] text-secondary leading-relaxed font-[var(--font-inter)]">
                O Rio Grande do Sul é feito de muitas vozes. Vozes de mães,
                trabalhadores, empreendedores, famílias, professores,
                profissionais da saúde e lideranças.
              </p>
            </div>

            {/* Card 2 — Highlighted */}
            <div className="bg-primary-container/10 rounded-2xl p-8 border-l-4 border-primary-container">
              <p
                className="text-[18px] text-on-surface leading-relaxed font-semibold"
                style={{ fontFamily: "var(--font-inter)" }}
              >
                Em cada conversa, uma dor. Em cada cidade, uma realidade. Em
                cada história, há um motivo para seguir.
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-surface-container-lowest rounded-2xl p-8 shadow-[0_4px_30px_rgba(0,0,0,0.04)] border border-surface-variant/30">
              <p className="text-[16px] text-secondary leading-relaxed font-[var(--font-inter)]">
                Mais do que falar sobre as pessoas, Maíra acredita em falar com
                as pessoas. Sua presença nas cidades é parte essencial dessa
                construção. Não se trata apenas de comunicar uma causa. Trata-se
                de escutar antes de propor qualquer caminho.
              </p>
            </div>
          </div>

          {/* Right Column: Asymmetric bento grid */}
          <div className="col-span-12 lg:col-span-8">
            {/* Row 1: tall portrait left + two stacked right */}
            <div className="grid grid-cols-3 gap-4 h-full">

              {/* Image 1 — tall portrait, spans 2 rows */}
              <div className="col-span-1 row-span-2 rounded-2xl overflow-hidden shadow-lg group relative"
                style={{ minHeight: "320px" }}>
                <Image
                  alt={images[0].alt}
                  className="object-cover transition-all duration-700 group-hover:scale-105"
                  src={images[0].src}
                  fill
                  sizes="(max-width: 1024px) 100vw, 33vw"
                />
              </div>

              {/* Image 2 — wide 16:9 top-right */}
              <div className="col-span-2 rounded-2xl overflow-hidden shadow-lg group aspect-[16/9] relative">
                <Image
                  alt={images[1].alt}
                  className="object-cover transition-all duration-700 group-hover:scale-105"
                  src={images[1].src}
                  fill
                  sizes="(max-width: 1024px) 100vw, 66vw"
                />
              </div>

              {/* Bottom row: small square + wider landscape */}
              <div className="col-span-1 rounded-2xl overflow-hidden shadow-lg group aspect-[4/5] md:aspect-square relative">
                <Image
                  alt={images[2].alt}
                  className="object-cover transition-all duration-700 group-hover:scale-105"
                  src={images[2].src}
                  fill
                  sizes="(max-width: 1024px) 50vw, 33vw"
                />
              </div>

              <div className="col-span-1 rounded-2xl overflow-hidden shadow-lg group aspect-[4/5] md:aspect-square relative">
                <Image
                  alt={images[3].alt}
                  className="object-cover transition-all duration-700 group-hover:scale-105"
                  src={images[3].src}
                  fill
                  sizes="(max-width: 1024px) 50vw, 33vw"
                />
              </div>

            </div>
          </div>
        </div>
      </div>

      {/* Ticker Bar */}
      <div className="w-full bg-primary-container py-3 md:py-6 mt-32 relative z-20 overflow-hidden">
        <div className="ticker-wrap">
          <div
            style={{
              display: "inline-flex",
              flexWrap: "nowrap",
              whiteSpace: "nowrap",
              animation: "ticker 18s linear infinite",
              alignItems: "center",
            }}
          >
            {[...tickerCities, ...tickerCities, ...tickerCities, ...tickerCities].map((city, i) => (
              <span
                key={`${city}-${i}`}
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  flexShrink: 0,
                  whiteSpace: "nowrap",
                }}
              >
                <span
                  className="text-on-surface font-black text-[24px] md:text-[56px] uppercase px-4 md:px-8"
                  style={{
                    fontFamily: "var(--font-montserrat)",
                    letterSpacing: "0.12em",
                    whiteSpace: "nowrap",
                  }}
                >
                  {city}
                </span>
                <span
                  className="text-on-surface/50 font-black text-[24px] md:text-[32px]"
                  style={{ flexShrink: 0 }}
                  aria-hidden="true"
                >
                  •
                </span>
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
