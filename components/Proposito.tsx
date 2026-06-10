const purposeCards = [
  {
    icon: "family_restroom",
    title: "Mulheres e maternidade",
    description: "Porque cuidar de quem cuida também precisa ser uma prioridade.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCXCbC3vxCMY2vfrqkOi4SayUtnXhqCwBBRyUCjBGIoBnSx4ammWSv2huDPCqYHBF0emOF3kPSz7oMRWpt9LK2QxV43xsMFY_WbppevhKaKwRa5iNFsZBwi6v80OQKH9o5RWYC3N-diAQLmxRVYzbh6j-xUFF-YyhYDw4VKTpP_K-_Ym2XNzt3n6xEBCLh5tTQGAyuZ8c2BCQEIY9HYffcmlBgaA-0w8yQZMYAMmyIlx0SXifSv4JMWDuL13g98vX_nRLSkmLv_lQek",
    offsetY: false,
  },
  {
    icon: "health_and_safety",
    title: "Famílias e proteção",
    description:
      "Porque políticas, projetos e decisões precisam considerar a realidade de quem vive os desafios todos os dias.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuD8CEKR1U8fL9GWcACvjCuv2XcPSH8CrUffOAqkF18W2-4b_YN52Q4NlpswPpnl9YkVCBvaGMwikUSf9L9HsFwSzzfuSh_hedD5q6Hro1ZAw197IVEXMnzNXKQZAKZjRP0EcfSc33g126GsgsaWAcVaq9pDyz7Oaer6740LdscMFTBHes6th2MifxGL69M4uXo3xLCyR9M2ORCpOkKQz_8Nn0iS0T5mc_qxb3AVc9w8sLjDpVC9ks32c74Q8Znpbftg9TDlX2iSVGHr",
    offsetY: true,
  },
  {
    icon: "location_city",
    title: "Cidades e comunidades",
    description:
      "Porque cada município tem suas próprias urgências, histórias e potências.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuA06WXUfczjuPDL2calJ6U83vwN2tG7Pb3wY0JDoHxA-pi6GoNNNINKC5Mp28KQteXlyZriXeJGzSGaO2ry_B9YRG-i8BH34TknxDqo_Fdw3xOY7CzR6dbKnsTPzahoWk1b7oXiwl0mi1h6GNZpx4Zfq1ZIJZfeSMD16wAi7w_Krt82NqRZRlF_nUsdc4oIokbf3X0CE7ypvjjYfYPX_8CyFoTmMHduH6JY6_kCMEzw97ZZxAWxX7n2a_Im_YZm8p60Ks2z38voU_Xd",
    offsetY: false,
  },
  {
    icon: "hearing",
    title: "Escuta e presença",
    description:
      "Porque estar perto das pessoas é o caminho mais honesto para entender o que precisa ser construído.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAuZ-IWi-5PVOE8X9DE9iullTHGgAzHFUHBQ2Wa8bKjS7h-ioKtftp5qmMCZtJ4_sZ8abf6a-QdarZU4B6i2Zd4vMoN0patT-ZsCHfBYoRiHomUMYISn3NME8pPraGEV03-kAPuw4W19Rt9ygsBT6D7ftExsWJkVcmKzocQtRstUCPlBAUMrQm1cXqnuIOSMxHrXenSmwzhZztjVJn2Q9EcdDEU0mA8793TPMzyWbyUpZdHl3jrPSICdg0Rt3ehunO158engPcyT1nV",
    offsetY: false,
  },
  {
    icon: "agriculture",
    title: "Zona Rural e Agro",
    description:
      "Porque quem produz, trabalha e sustenta o interior também precisa ser ouvido, valorizado e fortalecido.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCjbKMb-263iY44uKwQiclq-ew7mA5jRYYDVtouf-asleogeQ40On3cS35gnLUp8ggVlKmffcghruQIpQeTFCMWJhYnFjLD__zQACmPD-b7XP0EN18jkmgnckz96MbMThOBvyAkylX_Uo52tJO8lW7eZltQBovphNkM5IyXFPjlK15kOdwaonTUoFlTrZWcS0o-Ceii6VKKhpN9AjzMgY6tnl1qiKyYVy-TUScIKlKUH-3tYQ_rwB5n-0CJoXbGeW7xdMl4XrvcI20B",
    offsetY: true,
  },
  {
    icon: "diversity_3",
    title: "Inclusão e Desenvolvimento",
    description:
      "Porque uma sociedade justa precisa enxergar todas as pessoas, respeitar diferenças e criar caminhos de acesso.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDovgFipfo7HY-DP-hhaJZ04OVDVhuavfqlBLkk5Ukg2r26ZaN6HPxPeWofWo69zHv15u_S1gAEINdThZNdB_-HpfiPMKjrWNpDgPQRicwkPIRPvAJ3Z_PpBgbOfOvlsZ02nKO5Uker3FAlXTYZJoEXzZIPwucLiWg8tONu2OFAWoYcfxlQXPKgIkrKOAV4pzH_GGXfr1dsEyiytBJEwZC9yg7-q4_gwcTlxEVQ_XjzUW9zHAxoh14Poxm6WgqAn7IxejTrnbBSIP51",
    offsetY: false,
  },
];

export default function Proposito() {
  return (
    <section
      className="py-section-gap w-full bg-[#050505] text-surface-container-lowest relative overflow-hidden"
      id="proposito"
    >
      {/* Radial gradient background */}
      <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(ellipse_at_top_right,_rgba(163,230,53,0.1),_transparent,_transparent)] z-0" />

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
                  className="text-[28px] text-white font-bold mb-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300"
                  style={{ fontFamily: "var(--font-montserrat)" }}
                >
                  {card.title}
                </h4>
                <p className="text-surface-variant/80 text-[16px] h-0 opacity-0 overflow-hidden group-hover:h-auto group-hover:opacity-100 group-hover:mt-4 transition-all duration-300">
                  {card.description}
                </p>
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
