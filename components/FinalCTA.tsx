export default function FinalCTA() {
  return (
    <section
      className="min-h-screen w-full bg-[#050505] text-surface-container-lowest overflow-hidden relative flex items-center justify-center py-[160px]"
      id="novidades"
    >
      {/* Immersive Background */}
      <div className="absolute inset-0 z-0">
        <img
          alt="CTA Background"
          className="w-full h-full object-cover opacity-20 mix-blend-luminosity scale-110"
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuCUaUANLi-4XBSZYNh1FcS1mx3x2pZdbiELMweB2U_Lc3FRJ23qiYzYSU6GZb_cD3oPOWqoUMDj5sM6Zj1nSV4VaOQeZwP-Ju3zP-4dDzvMSHOxyh9GHMPR_0D6zyfUo7AeSwUdh-oHjMAwZhadA5Q86J8pnMmkeOHQ5-ifmN_N47YMzAKOLys-M1RwZGo6UsyCXH5nYjk3ctoHmnDh4Y4jCuywnzL12_BMIrIdC1atbZGbFyHkAzyizX5sKVwC2-tI-pamLYOZJfsc"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/60 to-transparent" />
      </div>

      <div className="relative z-10 w-full max-w-6xl mx-auto px-margin-mobile md:px-margin-desktop">
        <div className="space-y-24">
          {/* Hero Phrase */}
          <div className="text-center fade-up mb-32">
            <h2
              className="text-[56px] md:text-[80px] leading-[1.1] mb-8 font-bold"
              style={{ fontFamily: "var(--font-montserrat)" }}
            >
              Quando a dor vira propósito, <br />
              <span
                className="text-primary-container text-[72px] md:text-[100px] block mt-6"
                style={{ fontFamily: "var(--font-syne)" }}
              >
                a caminhada ganha sentido.
              </span>
            </h2>
          </div>

          {/* Block 1: Text Left, Image Right */}
          <div className="grid grid-cols-12 gap-gutter items-center mb-32">
            <div className="col-span-12 lg:col-span-6 dark-glass p-10 rounded-[40px] border border-white/5 fade-up">
              <p className="text-[22px] text-surface-variant/90 leading-relaxed font-[var(--font-inter)]">
                A história da Maíra é feita de comunicação, maternidade e
                coragem. Mas essa caminhada não é sobre uma pessoa só. É sobre
                transformar vivências em movimento.
              </p>
            </div>
            <div className="col-span-12 lg:col-span-5 lg:col-start-8 relative fade-up">
              <div className="aspect-video rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
                <img
                  alt="Maíra Lessa"
                  className="w-full h-full object-cover opacity-80 hover:opacity-100 transition-opacity duration-500"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCSmgcW51hcYNaXxLcX-DKHU11a5XVV7PnyWxjPjUNQ7nmKZtDOBq_wtQRe9ZdJvVEiP0CwW9gprRg28L8MR0hVulxq_pbPUI3bA1PwEywXV-q2T_-DvsVAp5Y5Mg9l2exCfdlSTjabg4003nEPOSH_qsL5qv77yjXN3oHlX3PM03KE1Ab2v7qbJmT7u-SdSV_2_j9iP7bP62wstm_zznQwLIRxCDomFps3puYXF0j3-ryf2wNCiM0120FYScSu7rsivOkXptfEexAZ"
                />
              </div>
              {/* Small Accent Image */}
              <div className="absolute -bottom-10 -left-10 w-32 h-32 rounded-2xl overflow-hidden border-4 border-[#050505] shadow-2xl z-20 rotate-[-6deg] hidden md:block">
                <img
                  alt="Detail"
                  className="w-full h-full object-cover"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAM4h5xQJi0oghYwpHIM8zNMhYJ-Op0E-NeJ11mgraVkYuX_TpFL-lPvEmzrrbR9pUlAs4aJlDW8gWPBBo3pg-JORgpEuuwzgI28z921raJpw-8iW7Kd-BfmaKTnUuNEhwbp7J61nMuT5Q3DQmhMh91EEibXG0SnXWBwMp8lb8zu6ab5t3dYuk0iN9lvd6eh0i1gfIPxsx9XRMr7V0tpfREro4YNQRzsRcf69iRyD9Oe_XhmpgjcNgqWzhZ1X8IAK-_kJC_vjqUrzMl"
                />
              </div>
            </div>
          </div>

          {/* Block 2: Image Left, Text Right */}
          <div className="grid grid-cols-12 gap-gutter items-center mb-32">
            <div className="col-span-12 lg:col-span-5 order-2 lg:order-1 relative fade-up">
              <div className="aspect-[4/3] rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
                <img
                  alt="Maíra Lessa Presence"
                  className="w-full h-full object-cover opacity-80 hover:opacity-100 transition-opacity duration-500"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDzDBadSwuZdEWlHGKzd1NWJGqMAOtNkScwFrtkznKXiTERCpAVe-Cxhtb9BQkT9a2SDA8WUlcfD_fVq64rTphiP5Bb6ngtZsgrRG2uGvvO6cbHKgas4Kpihh2ZF9P9tjwVDRUvr82FcIf868iD_70k7zIXFPMVxlfS0I6WS4zv2xVn3X2GDMCaLpvfSLBJsvKDD41P2LtX0gjkYSUQK7tSsOlYhKYi1_DPbIGelAv33KUQ1Dvb7sBrHeLm0zTmNZ-bVc1cpXGpMgYV"
                />
              </div>
              {/* Floating Glow Accent */}
              <div className="absolute top-1/2 -right-10 w-40 h-40 bg-primary-container/20 rounded-full blur-3xl animate-pulse -z-10" />
            </div>
            <div className="col-span-12 lg:col-span-6 lg:col-start-7 order-1 lg:order-2 dark-glass p-10 rounded-[40px] border border-white/5 fade-up">
              <p className="text-[22px] text-surface-variant/90 leading-relaxed font-[var(--font-inter)]">
                É sobre construir, com responsabilidade, um futuro mais próximo
                das pessoas, onde cada voz é ouvida e cada história importa.
              </p>
            </div>
          </div>

          {/* Conclusion */}
          <div className="text-center py-12 fade-up">
            <div className="inline-block mb-12">
              <div className="h-px w-32 bg-primary-container mx-auto mb-8" />
              <p
                className="text-[36px] md:text-[56px] leading-tight font-bold text-surface-container-lowest tracking-tighter"
                style={{ fontFamily: "var(--font-montserrat)" }}
              >
                Maíra Lessa. <br />
                <span className="text-primary-container">
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
                className="inline-flex items-center justify-center gap-3 bg-primary-container text-[#121212] font-semibold text-[16px] uppercase px-12 py-6 rounded-full hover:bg-white transition-all duration-300 w-full sm:w-auto tracking-[0.1em] shadow-2xl group font-[var(--font-inter)]"
                href="#"
              >
                Acompanhar de perto
                <span className="material-symbols-outlined text-[24px] group-hover:translate-x-2 transition-transform">
                  arrow_forward
                </span>
              </a>
              <a
                className="inline-flex items-center justify-center gap-3 bg-transparent border border-white/20 backdrop-blur-md text-surface-container-lowest font-semibold text-[16px] uppercase px-12 py-6 rounded-full hover:border-primary-container hover:text-primary-container transition-all duration-300 w-full sm:w-auto tracking-[0.1em] font-[var(--font-inter)]"
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
