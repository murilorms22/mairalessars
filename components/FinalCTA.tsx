import Image from "next/image";

export default function FinalCTA() {
  return (
    <section
      className="min-h-screen w-full bg-gradient-to-b from-[#140012] via-[#2E0029] to-[#0d000c] text-white overflow-hidden relative flex items-center justify-center py-[160px]"
    >
      {/* Immersive Background */}
      <div className="absolute inset-0 z-0">
        <Image
          alt="CTA Background"
          className="grayscale object-cover opacity-[0.1] mix-blend-luminosity scale-110"
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuCUaUANLi-4XBSZYNh1FcS1mx3x2pZdbiELMweB2U_Lc3FRJ23qiYzYSU6GZb_cD3oPOWqoUMDj5sM6Zj1nSV4VaOQeZwP-Ju3zP-4dDzvMSHOxyh9GHMPR_0D6zyfUo7AeSwUdh-oHjMAwZhadA5Q86J8pnMmkeOHQ5-ifmN_N47YMzAKOLys-M1RwZGo6UsyCXH5nYjk3ctoHmnDh4Y4jCuywnzL12_BMIrIdC1atbZGbFyHkAzyizX5sKVwC2-tI-pamLYOZJfsc"
          fill
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0d000c] via-[#2E0029]/60 to-transparent" />
      </div>

      <div className="relative z-10 w-full max-w-6xl mx-auto px-margin-mobile md:px-margin-desktop">
        <div className="space-y-16 md:space-y-24">
          {/* Hero Phrase */}
          <div className="text-center fade-up mb-16 md:mb-32">
            <h2
              className="text-[36px] md:text-[56px] lg:text-[80px] leading-[1.1] mb-8 font-bold text-white font-sans"
            >
              Quando a dor vira propósito, <br />
              <span
                className="text-[#C4DB1D] text-[48px] md:text-[72px] lg:text-[100px] block mt-6 font-sans font-extrabold"
              >
                a caminhada ganha sentido.
              </span>
            </h2>
          </div>

          {/* Block 1: Text Left, Image Right */}
          <div className="grid grid-cols-12 gap-gutter items-center mb-32">
            <div className="col-span-12 lg:col-span-6 dark-glass p-10 rounded-[40px] border border-[#ED069A]/30 fade-up">
              <p className="text-[20px] md:text-[22px] text-white/90 leading-relaxed font-[var(--font-inter)]">
                A história da Maíra é feita de comunicação, maternidade, desafios, escuta e coragem.
                Mas essa caminhada não é sobre uma pessoa só. <br />
              </p>
            </div>
            <div className="col-span-12 lg:col-span-5 lg:col-start-8 relative fade-up">
              <div className="aspect-[4/3] rounded-3xl overflow-hidden border border-[#ED069A]/30 shadow-2xl relative">
                <Image
                  alt="Maíra Lessa"
                  className="object-cover opacity-90 hover:opacity-100 transition-opacity duration-500"
                  src="/optimized/final-1.webp"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
              {/* Small Accent Image */}
              <div className="absolute -bottom-10 -left-10 w-36 h-36 rounded-2xl overflow-hidden border-4 border-[#1F001B] shadow-2xl z-20 rotate-[-6deg] hidden md:block">
                <Image
                  alt="Detail"
                  className="object-cover"
                  src="/optimized/final-extra.webp"
                  fill
                  sizes="144px"
                />
              </div>
            </div>
          </div>

          {/* Block 2: Image Left, Text Right */}
          <div className="grid grid-cols-12 gap-gutter items-center mb-12 md:mb-32">
            <div className="col-span-12 lg:col-span-5 order-2 lg:order-1 relative fade-up">
              <div className="aspect-[4/3] rounded-3xl overflow-hidden border border-[#ED069A]/30 shadow-2xl relative">
                <Image
                  alt="Maíra Lessa Presence"
                  className="object-cover opacity-90 hover:opacity-100 transition-opacity duration-500"
                  src="/optimized/final-2.webp"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
              {/* Floating Glow Accent */}
              <div className="absolute top-1/2 -right-10 w-40 h-40 bg-[#ED069A]/30 rounded-full blur-3xl animate-pulse -z-10" />
            </div>
            <div className="col-span-12 lg:col-span-8 lg:col-start-7 order-1 lg:order-2 dark-glass p-10 rounded-[40px] border border-[#ED069A]/30 fade-up">
              <p className="text-[22px] md:text-[20px] text-white/90 leading-relaxed font-[var(--font-inter)]">
                É sobre <span className="text-[#C4DB1D]"><b>todas as mulheres</b></span> que precisaram ser fortes antes mesmo de estarem prontas.<br />
                É sobre <span className="text-[#C4DB1D]"><b>famílias</b></span> que merecem ser vistas.<br />
                É sobre <span className="text-[#C4DB1D]"><b>cidades</b></span> que precisam ser ouvidas. <br />
                É sobre <span className="text-[#C4DB1D]"><b>transformar</b></span> vivências em movimento.<br />
                É sobre <span className="text-[#C4DB1D]"><b>construir</b></span>, com responsabilidade, um futuro mais próximo das <span className="text-[#C4DB1D]"><b>pessoas</b></span>.

              </p>
            </div>
          </div>

          {/* Conclusion */}
          <div className="text-center py-12 fade-up">
            <div className="inline-block mb-12">
              <div className="h-px w-32 bg-[#C4DB1D] mx-auto mb-8" />
              <p
                className="text-[36px] md:text-[56px] leading-tight font-bold text-white tracking-tighter font-sans"
              >
                Maíra Lessa. <br />
                <span className="text-[#C4DB1D]">
                  Uma voz que escuta.
                </span>
                <br />
                Uma história que inspira.
                <br />
                Uma caminhada com propósito.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-8 justify-center items-center">
              <a
                className="inline-flex items-center justify-center gap-3 bg-[#C4DB1D] text-[#8E007D] font-black text-[16px] uppercase px-12 py-6 rounded-full hover:bg-[#ED069A] hover:text-white transition-all duration-300 w-full sm:w-auto tracking-[0.1em] shadow-[0_10px_40px_rgba(196,219,29,0.4)] group font-[var(--font-inter)]"
                href="#"
              >
                Acompanhar de perto
                <span className="material-symbols-outlined text-[24px] group-hover:translate-x-2 transition-transform">
                  arrow_forward
                </span>
              </a>
              <a
                className="inline-flex items-center justify-center gap-3 bg-transparent border-2 border-[#ED069A] backdrop-blur-md text-white font-semibold text-[16px] uppercase px-12 py-6 rounded-full hover:bg-[#ED069A] hover:text-white transition-all duration-300 w-full sm:w-auto tracking-[0.1em] font-[var(--font-inter)]"
                href="#"
              >
                Seguir nas redes
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
