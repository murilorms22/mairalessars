import Image from "next/image";

const purposeCards = [
  {
    icon: "family_restroom",
    title: "Mulheres e maternidade",
    description: "Porque cuidar de quem cuida também precisa ser uma prioridade.",
    image: "/optimized/proposito-maternidade.webp",
    offsetY: false,
  },
  {
    icon: "health_and_safety",
    title: "Famílias e proteção",
    description: "Porque políticas, projetos e decisões precisam considerar a realidade de quem vive os desafios todos os dias.",
    image: "/optimized/proposito-familia.webp",
    offsetY: true,
  },
  {
    icon: "location_city",
    title: "Cidades e comunidades",
    description: "Porque cada município tem suas próprias urgências, histórias e potências.",
    image: "/optimized/proposito-cidades.webp",
    offsetY: false,
  },
  {
    icon: "hearing",
    title: "Escuta e presença",
    description: "Porque estar perto das pessoas é o caminho mais honesto para entender o que precisa ser construído.",
    image: "/optimized/proposito-escuta.webp",
    offsetY: false,
  },
  {
    icon: "campaign",
    title: "Comunicação com responsabilidade",
    description: "Porque falar com clareza, verdade e sensibilidade também é uma forma de servir.",
    image: "/optimized/carrossel-11.webp",
    offsetY: true,
  },
  {
    icon: "agriculture",
    title: "Zona Rural e Agro",
    description: "Porque quem produz, trabalha e sustenta o interior também precisa ser ouvido, valorizado e fortalecido.",
    image: "/optimized/proposito-agro.webp",
    offsetY: false,
  },
  {
    icon: "diversity_3",
    title: "Inclusão",
    description: "Porque uma sociedade justa precisa enxergar todas as pessoas, respeitar diferenças e criar caminhos de acesso.",
    image: "/optimized/proposito-inclusao.webp",
    offsetY: false,
  },
  {
    icon: "trending_up",
    title: "Desenvolvimento da Zona Sul",
    description: "Porque a nossa região tem força, potencial e histórias que precisam sair do discurso e virar prioridade.",
    image: "/optimized/carrossel-6.webp",
    offsetY: true,
  },
];

export default function Proposito() {
  return (
    <section
      className="py-section-gap w-full bg-[#140012] text-white relative overflow-hidden"
      id="proposito"
    >
      {/* Radial gradient background */}
      <div className="absolute top-0 right-0 w-full h-full bg-radial from-[#8E007D]/30 via-[#ED069A]/10 to-[#0F000E] z-0" />

      <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop relative z-10">
        {/* Header */}
        <div className="flex flex-col lg:flex-row justify-between items-end mb-20 gap-10 fade-up">
          <div className="max-w-3xl">
            <h2 className="text-[14px] font-semibold uppercase text-[#C4DB1D] tracking-widest mb-6 inline-flex items-center gap-4 font-[var(--font-inter)]">
              <span className="w-16 h-px bg-[#C4DB1D] inline-block" />
              Propósito
            </h2>
            <h3
              className="text-[36px] md:text-[48px] lg:text-[60px] text-white leading-[1.1] font-bold font-sans"
            >
              Pela saúde, inclusão e desenvolvimento do <br />
              <span
                className="text-[#C4DB1D] text-[48px] md:text-[72px] lg:text-[90px] font-sans font-extrabold"
              >
                Sul Gaúcho
              </span>
            </h3>
          </div>
          <div className="max-w-xl text-right">
            <p className="text-[20px] text-white/80 leading-relaxed text-left lg:text-right font-[var(--font-inter)]">
              Nenhuma transformação real começa distante das pessoas. É preciso
              estar perto. É preciso ouvir. Entender as dores de cada
              comunidade.
            </p>
          </div>
        </div>

        {/* Interactive Image Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-32">
          {purposeCards.map((card) => (
            <div
              key={card.title}
              className={`group relative h-[400px] rounded-3xl overflow-hidden cursor-pointer border border-[#ED069A]/30 ${card.offsetY ? "lg:translate-y-12" : ""
                }`}
            >
              <Image
                alt={card.title}
                className="object-cover opacity-85 group-hover:scale-110 transition-all duration-700 ease-in-out"
                src={card.image}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#140012] via-[#8E007D]/50 to-transparent opacity-60 group-hover:opacity-75 transition-opacity" />
              <div className="absolute inset-0 p-8 flex flex-col justify-end">
                <div className="w-12 h-12 bg-[#C4DB1D]/40 backdrop-blur-md rounded-xl flex items-center justify-center mb-6 text-[#C4DB1D] border border-[#C4DB1D]/40">
                  <span className="material-symbols-outlined text-[24px]">
                    {card.icon}
                  </span>
                </div>
                <h4
                  className="text-[28px] text-white font-bold mb-2 transform translate-y-0 md:translate-y-4 md:group-hover:translate-y-0 transition-transform duration-500 ease-out font-sans"
                >
                  {card.title}
                </h4>
                {/* Description slides up from below on PC, always visible on mobile */}
                <div className="overflow-hidden">
                  <p className="text-white/80 text-[15px] leading-relaxed translate-y-0 opacity-100 md:translate-y-full md:opacity-0 md:group-hover:translate-y-0 md:group-hover:opacity-100 transition-all duration-500 ease-out delay-75 pt-2">
                    {card.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Manifesto */}
        <div className="max-w-5xl mx-auto text-center border-t border-[#ED069A]/20 pt-24 fade-up">
          <p
            className="text-[36px] md:text-[48px] text-white leading-tight font-light font-sans"
          >
            Maíra acredita que{" "}
            <span className="text-[#C4DB1D] relative inline-block group">
              propósito
              <span className="absolute bottom-2 left-0 w-full h-[30%] bg-[#8E007D]/50 -z-10 group-hover:h-[80%] transition-all duration-500 rounded-sm" />
            </span>
            {" "}não se declara apenas em palavras.
            <br />
            Propósito se mostra na presença, na escuta e na coragem de seguir.
            Na{" "}
            <strong
              className="text-[#C4DB1D] font-bold text-[48px] md:text-[64px] block mt-4 drop-shadow-[0_0_20px_rgba(196,219,29,0.5)] font-sans font-extrabold"
            >
              superAÇÃO.
            </strong>
          </p>
        </div>
      </div>
    </section>
  );
}
