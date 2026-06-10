const tickerCities = [
  "Pelotas",
  "Canguçu",
  "Piratini",
  "Região Sul",
  "Rio Grande do Sul",
];

const images = [
  {
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuBFXMVsbzL1JcabO-goawBrKJb0-stlWyv1q1eyutC8TOEKUWsBURkFkL1EObp8e9uI68OUmviD2Skbo2h74w3E0fqPy9m7DlBovsJOjAIU3sm5KZ5MsbMSHpQf_GE6k_bKcKuUTIBBnQM914h84h2El6j9SRrjqC4m-m1KRui9LLD_vWlosLwdNV0lL-eb-tx4FW2woYsaY8Yc96rZLxS0yiw3INqjcKVM9phycXFR1smhfIHLczaJcdsvFsLxDFycFDoq8zrxcS9P",
    alt: "Caminhada 1",
  },
  {
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuAIA_sRfal8TG-8-vUXrgyesyAK0kjOjLzBxG354pjXrTY5H7oB--o57YRUxLgLRNndevJvFICg4_fY0iSPE3D2rg6BTJejY1ccpqdzxHcU2fI_deZvThAOVtwaz-vvDbZEWGpYoU5rOxtPYpkboEZbaFN7FDSaxjjnSWpR9QzSKYJnJdDODFaj0ZRNSiN1pg0u4iq-QQEahU2FBRAZEk84rtLqU8ULDTD69FvWgjBkGULfKrEsgmbamBGq-bwbvxoLIs8e2UMu84-H",
    alt: "Caminhada 2",
  },
  {
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuCAL5t_o2RHh_ZcwHxbzkKc3ALA-mJqScFU1CJjflFYG4RDjAwKVXMqtX8GpSLw_yQ8ONQuEe_Vq6CcxmnFMzJIsY6Ws6z5IH_9FvWajkuJf8pJ1clN3g16gZ-v7tKY1lv3FXRb4cek9awlKV9abhVtx7TCg3g-eR6wL435Wryx3ZQiTaBFsKyi6c_sVzGW1qVlzdfp0E2f93U-vuuF1KypZAtARXUi6GmqR8-OhnMetdlnrjsPMycLke687X77CvVCh8_u1IMxNxjo",
    alt: "Caminhada 3",
  },
  {
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuCUaUANLi-4XBSZYNh1FcS1mx3x2pZdbiELMweB2U_Lc3FRJ23qiYzYSU6GZb_cD3oPOWqoUMDj5sM6Zj1nSV4VaOQeZwP-Ju3zP-4dDzvMSHOxyh9GHMPR_0D6zyfUo7AeSwUdh-oHjMAwZhadA5Q86J8pnMmkeOHQ5-ifmN_N47YMzAKOLys-M1RwZGo6UsyCXH5nYjk3ctoHmnDh4Y4jCuywnzL12_BMIrIdC1atbZGbFyHkAzyizX5sKVwC2-tI-pamLYOZJfsc",
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
              <div className="col-span-1 row-span-2 rounded-2xl overflow-hidden shadow-lg group"
                style={{ minHeight: "320px" }}>
                <img
                  alt={images[0].alt}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
                  src={images[0].src}
                />
              </div>

              {/* Image 2 — wide 16:9 top-right */}
              <div className="col-span-2 rounded-2xl overflow-hidden shadow-lg group aspect-[16/9]">
                <img
                  alt={images[1].alt}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
                  src={images[1].src}
                />
              </div>

              {/* Bottom row: small square + wider landscape */}
              <div className="col-span-1 rounded-2xl overflow-hidden shadow-lg group aspect-square">
                <img
                  alt={images[2].alt}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
                  src={images[2].src}
                />
              </div>

              <div className="col-span-1 rounded-2xl overflow-hidden shadow-lg group aspect-square">
                <img
                  alt={images[3].alt}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
                  src={images[3].src}
                />
              </div>

            </div>
          </div>
        </div>
      </div>

      {/* Ticker Bar */}
      <div className="w-full bg-primary-container py-6 mt-32 relative z-20 overflow-hidden">
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
                  className="text-on-surface font-black text-[40px] md:text-[56px] uppercase"
                  style={{
                    fontFamily: "var(--font-montserrat)",
                    letterSpacing: "0.12em",
                    padding: "0 2rem",
                    whiteSpace: "nowrap",
                  }}
                >
                  {city}
                </span>
                <span
                  className="text-on-surface/50 font-black"
                  style={{ fontSize: "2rem", flexShrink: 0 }}
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
