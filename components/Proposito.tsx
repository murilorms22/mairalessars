const purposeCards = [
  {
    icon: "family_restroom",
    title: "Mulheres e maternidade",
    description: "Porque cuidar de quem cuida também precisa ser uma prioridade.",
    image:
      "/proposito-maternidade.jpeg",
    offsetY: false,
  },
  {
    icon: "health_and_safety",
    title: "Famílias e proteção",
    description:
      "Porque políticas, projetos e decisões precisam considerar a realidade de quem vive os desafios todos os dias.",
    image:
      "/proposito-familia.jpeg",
    offsetY: true,
  },
  {
    icon: "location_city",
    title: "Cidades e comunidades",
    description:
      "Porque cada município tem suas próprias urgências, histórias e potências.",
    image:
      "/proposito-cidades.jpeg",
    offsetY: false,
  },
  {
    icon: "hearing",
    title: "Escuta e presença",
    description:
      "Porque estar perto das pessoas é o caminho mais honesto para entender o que precisa ser construído.",
    image:
      "/proposito-escuta.jpeg",
    offsetY: false,
  },
  {
    icon: "agriculture",
    title: "Zona Rural e Agro",
    description:
      "Porque quem produz, trabalha e sustenta o interior também precisa ser ouvido, valorizado e fortalecido.",
    image:
      "/proposito-agro.jpeg",
    offsetY: true,
  },
  {
    icon: "diversity_3",
    title: "Inclusão e Desenvolvimento",
    description:
      "Porque uma sociedade justa precisa enxergar todas as pessoas, respeitar diferenças e criar caminhos de acesso.",
    image:
      "/proposito-inclusao.jpeg",
    offsetY: false,
  },
];

export default function Proposito() {
  return (
    <section
      className="py-section-gap w-full bg-[#000000] text-surface-container-lowest relative overflow-hidden"
      id="proposito"
    >
      {/* Radial gradient background */}
      <div className="absolute top-0 right-0 w-full h-full bg-radial from-primary-container/10 to-black/50 z-0" />

      <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop relative z-10">
        {/* Header */}
        <div className="flex flex-col lg:flex-row justify-between items-end mb-20 gap-10 fade-up">
          <div className="max-w-3xl">
            <h2 className="text-[14px] font-semibold uppercase text-primary-container tracking-widest mb-6 inline-flex items-center gap-4 font-[var(--font-inter)]">
              <span className="w-16 h-px bg-primary-container inline-block" />
              Propósito
            </h2>
            <h3
              className="text-[48px] md:text-[60px] text-surface-container-lowest leading-[1.1] font-bold"
              style={{ fontFamily: "var(--font-montserrat)" }}
            >
              Pela saúde, inclusão e desenvolvimento do <br />
              <span
                className="text-primary-container md:text-[90px]"
                style={{ fontFamily: "var(--font-montserrat)", fontWeight: 800 }}
              >
                Sul Gaúcho
              </span>
            </h3>
          </div>
          <div className="max-w-xl text-right">
            <p className="text-[20px] text-surface-variant/70 leading-relaxed text-left lg:text-right font-[var(--font-inter)]">
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
              className={`group relative h-[400px] rounded-3xl overflow-hidden cursor-pointer ${card.offsetY ? "lg:translate-y-12" : ""
                }`}
            >
              <img
                alt={card.title}
                className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:scale-110 transition-transform duration-700 ease-in-out"
                src={card.image}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />
              <div className="absolute inset-0 p-8 flex flex-col justify-end">
                <div className="w-12 h-12 bg-primary-container/20 backdrop-blur-md rounded-xl flex items-center justify-center mb-6 text-primary-container border border-primary-container/30">
                  <span className="material-symbols-outlined text-[24px]">
                    {card.icon}
                  </span>
                </div>
                <h4
                  className="text-[28px] text-white font-bold mb-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 ease-out"
                  style={{ fontFamily: "var(--font-montserrat)" }}
                >
                  {card.title}
                </h4>
                {/* Description slides up from below — clip provided by parent overflow-hidden */}
                <div className="overflow-hidden">
                  <p className="text-surface-variant/80 text-[15px] leading-relaxed translate-y-full opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 ease-out delay-75 pt-2">
                    {card.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Manifesto */}
        <div className="max-w-5xl mx-auto text-center border-t border-surface-variant/10 pt-24 fade-up">
          <p
            className="text-[36px] md:text-[48px] text-surface-container-lowest leading-tight font-light"
            style={{ fontFamily: "var(--font-montserrat)" }}
          >
            Maíra acredita que{" "}
            <span className="text-primary-container relative inline-block group">
              propósito
              <span className="absolute bottom-2 left-0 w-full h-[30%] bg-primary-container/30 -z-10 group-hover:h-[80%] transition-all duration-500 rounded-sm" />
            </span>
            {" "}não se declara apenas em palavras.
            <br />
            Propósito se mostra na presença, na escuta e na coragem de seguir.
            Na{" "}
            <strong
              className="text-primary-container font-bold text-[48px] md:text-[64px] block mt-4 drop-shadow-[0_0_15px_rgba(163,230,53,0.3)]"
              style={{ fontFamily: "var(--font-montserrat)", fontWeight: 800 }}
            >
              superAÇÃO.
            </strong>
          </p>
        </div>
      </div>
    </section>
  );
}
