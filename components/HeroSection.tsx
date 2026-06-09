export default function HeroSection() {
  return (
    <header
      className="relative w-full min-h-[calc(100vh/0.8-80px)] flex items-center overflow-hidden bg-[#0a0a0a]"
      id="inicio"
    >
      {/* Background Layer */}
      <div className="absolute inset-0 z-0">
        <img
          alt="Hero Background"
          className="w-full h-full object-cover object-top opacity-40 mix-blend-luminosity scale-105 transition-transform duration-[20s] hover:scale-100"
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuCSmgcW51hcYNaXxLcX-DKHU11a5XVV7PnyWxjPjUNQ7nmKZtDOBq_wtQRe9ZdJvVEiP0CwW9gprRg28L8MR0hVulxq_pbPUI3bA1PwEywXV-q2T_-DvsVAp5Y5Mg9l2exCfdlSTjabg4003nEPOSH_qsL5qv77yjXN3oHlX3PM03KE1Ab2v7qbJmT7u-SdSV_2_j9iP7bP62wstm_zznQwLIRxCDomFps3puYXF0j3-ryf2wNCiM0120FYScSu7rsivOkXptfEexAZ"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0a] via-[#0a0a0a]/80 to-transparent" />
        <div className="absolute inset-0 bg-primary-container/5 mix-blend-overlay" />
        {/* Glowing orb */}
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-primary-container/20 rounded-full blur-[120px] mix-blend-screen animate-pulse" />
      </div>

      {/* Content */}
      <div className="relative z-30 w-full max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop grid grid-cols-12 gap-gutter h-full items-center">
        <div className="col-span-12 lg:col-span-7 fade-up z-20">
          <h1
            className="text-[48px] md:text-[96px] text-surface-container-lowest mb-8 tracking-tighter leading-[1.05] font-bold"
            style={{ fontFamily: "var(--font-montserrat)" }}
          >
            A força de uma <br />
            <span className="text-primary-container relative inline-block group">
              história
              <span className="absolute bottom-2 left-0 w-full h-[30%] bg-primary-container/30 -z-10 group-hover:h-[80%] transition-all duration-500 rounded-sm" />
            </span>
            <br />
            que virou propósito.
          </h1>

          <div className="dark-glass p-8 rounded-2xl mb-10 border-l-4 border-primary-container shadow-2xl max-w-2xl transform hover:translate-x-2 transition-transform duration-500 glow-effect">
            <p className="text-[22px] text-surface-container-lowest leading-relaxed font-[var(--font-inter)]">
              Maíra Lessa é jornalista, comunicadora, mãe e uma voz que nasceu
              da escuta, da coragem e do compromisso com as pessoas do Rio Grande
              do Sul.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-6 items-center sm:items-start">
            <a
              className="inline-flex items-center justify-center gap-3 bg-primary-container text-on-secondary-fixed font-semibold text-[14px] uppercase tracking-[0.1em] px-10 py-5 rounded-full hover:bg-surface-container-lowest hover:text-on-surface transition-all duration-300 w-full sm:w-auto transform hover:-translate-y-1 shadow-[0_20px_40px_-15px_rgba(163,230,53,0.5)] group"
              href="#quem-e"
            >
              Conhecer a trajetória
              <span className="material-symbols-outlined text-[20px] group-hover:translate-x-2 transition-transform">
                arrow_forward
              </span>
            </a>
          </div>
        </div>

        {/* Floating Secondary Elements */}
        <div className="hidden lg:block col-span-5 relative h-full min-h-[600px] z-10">
          <div className="absolute top-20 right-0 w-64 h-80 dark-glass rounded-2xl overflow-hidden animate-float shadow-2xl rotate-3">
            <img
              alt="Detail 1"
              className="w-full h-full object-cover opacity-80 mix-blend-luminosity hover:mix-blend-normal transition-all duration-500"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAM4h5xQJi0oghYwpHIM8zNMhYJ-Op0E-NeJ11mgraVkYuX_TpFL-lPvEmzrrbR9pUlAs4aJlDW8gWPBBo3pg-JORgpEuuwzgI28z921raJpw-8iW7Kd-BfmaKTnUuNEhwbp7J61nMuT5Q3DQmhMh91EEibXG0SnXWBwMp8lb8zu6ab5t3dYuk0iN9lvd6eh0i1gfIPxsx9XRMr7V0tpfREro4YNQRzsRcf69iRyD9Oe_XhmpgjcNgqWzhZ1X8IAK-_kJC_vjqUrzMl"
            />
          </div>
          <div className="absolute bottom-32 right-32 w-56 h-56 dark-glass rounded-full overflow-hidden animate-float-delayed shadow-2xl -rotate-6 p-2">
            <img
              alt="Detail 2"
              className="w-full h-full object-cover rounded-full opacity-70 mix-blend-luminosity hover:mix-blend-normal transition-all duration-500"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBqj0STwPM-D7mRAXIOoNBBAhXDnD8SfN5t4muz7krRfNCDURQFVmsKz4KkwlE3PNswa4_Nue2hbZYRMBNTXObRB2puA_4N7QjlU51hAaUTzFxTT7oG8qvvEEO7OALIEVl9gpEEA_qaXLZGLGyWVDmW-nydxxWU5G1YZiPh2WgxRLCpGG6rRr4zOOSRkwh3jG_UL2rRwFT4QP56rf7g2lZ1SpEq6u8gzoTnr96F9UP9tAuo4d5R848OJ_Comy_uTQLwzxHkI8nQ-0Ct"
            />
          </div>
        </div>
      </div>
    </header>
  );
}
