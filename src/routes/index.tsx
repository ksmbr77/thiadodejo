import { createFileRoute } from "@tanstack/react-router";


import banner1 from "@/assets/banner-1.jpg.asset.json";
import banner2 from "@/assets/banner-2.jpg.asset.json";
import banner3 from "@/assets/banner-3.jpg.asset.json";
import banner4 from "@/assets/banner-4.jpg.asset.json";
import banner5 from "@/assets/banner-5.jpg.asset.json";
import thiagu from "@/assets/thiagu.png.asset.json";
import { Reveal } from "@/components/Reveal";

const CANDIDATO = {
  nome: "Thiago de Joaldo",
  primeiroNome: "Thiago",
  cargo: "Deputado Federal",
  numero: "1011",
  slogan: "Esse é de coragem!",
  cidade: "Sergipe",
  whatsapp: "https://wa.me/5500000000000",
};

const ACOES = [
  {
    label: "WhatsApp",
    arte: banner5.url,
    href: CANDIDATO.whatsapp,
  },
  {
    label: "Figurinhas",
    arte: banner3.url,
    href: "#",
  },
  {
    label: "Jingles",
    arte: banner4.url,
    href: "#",
  },
  {
    label: "Material de campanha",
    arte: banner2.url,
    href: "#",
  },
  {
    label: "Personalize seu perfil",
    arte: banner1.url,
    href: "#",
  },
];


export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: `${CANDIDATO.nome} ${CANDIDATO.numero} — ${CANDIDATO.cargo}` },
      {
        name: "description",
        content: `Bio oficial de ${CANDIDATO.nome}, candidato a ${CANDIDATO.cargo} em ${CANDIDATO.cidade}. Jingles, figurinhas, material de campanha e grupo no WhatsApp.`,
      },
      { property: "og:title", content: `${CANDIDATO.nome} ${CANDIDATO.numero}` },
      {
        property: "og:description",
        content: `${CANDIDATO.slogan} Tudo da campanha em um só lugar.`,
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: BioSite,
});

function BioSite() {
  return (
    <main className="relative overflow-hidden">
      <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -left-24 top-24 h-72 w-72 rounded-full bg-primary/25 blur-3xl animate-float" />
        <div className="absolute right-[-6rem] top-[28rem] h-80 w-80 rounded-full bg-accent/40 blur-3xl animate-float [animation-delay:1.5s]" />
      </div>

      <div className="relative mx-auto w-full max-w-xl px-5 pb-28 pt-10 sm:pt-14">
        <header className="text-center">
          <Reveal>
            <p className="text-xs font-black uppercase tracking-[0.35em] text-muted-foreground">
              {CANDIDATO.cargo}
            </p>
            <img
                src={thiagu.url}
                alt={`${CANDIDATO.nome}, candidato a ${CANDIDATO.cargo}`}
              width={690}
              height={657}
              loading="eager"
              decoding="async"
              className="mx-auto mt-4 w-56 drop-shadow-[0_18px_40px_rgba(0,0,0,0.55)] sm:w-64"
            />
            <h1 className="mt-3 text-5xl sm:text-6xl">{CANDIDATO.nome}</h1>
            <div className="mt-4 inline-flex -rotate-2 items-center rounded-xl px-6 py-2 highlight-box">
              <span className="font-display text-4xl leading-none sm:text-5xl">
                {CANDIDATO.numero}
              </span>
            </div>
            <p className="mt-4 font-display text-2xl text-highlight">{CANDIDATO.slogan}</p>
            <p className="mt-2 text-sm text-muted-foreground">
              Tudo da nossa campanha em {CANDIDATO.cidade}, reunido em um só lugar.
            </p>
          </Reveal>
        </header>

        {/* CARDS DA CAMPANHA */}
        <section aria-label="Links da campanha" className="mt-8 space-y-5">
          {ACOES.map((acao, i) => (
            <Reveal key={acao.label} delay={i * 90}>
              <a
                href={acao.href}
                target={acao.href.startsWith("http") ? "_blank" : undefined}
                rel="noreferrer"
                className="group block overflow-hidden rounded-2xl surface-card"
              >
                <img
                  src={acao.arte}
                  alt={acao.label}
                  loading={i === 0 ? "eager" : "lazy"}
                  width={1920}
                  height={628}
                  className="w-full transition-transform duration-500 ease-out group-hover:scale-[1.06]"
                />
              </a>
            </Reveal>
          ))}
        </section>
      </div>
    </main>
  );
}
