import { createFileRoute } from "@tanstack/react-router";


import banner1 from "@/assets/banner-1.jpg.asset.json";
import banner2 from "@/assets/banner-2.jpg.asset.json";
import banner3 from "@/assets/banner-3.jpg.asset.json";
import banner4 from "@/assets/banner-4.jpg.asset.json";
import banner5 from "@/assets/banner-5.jpg.asset.json";
import perfil from "@/assets/perfil-thiago.png.asset.json";
import { Reveal } from "@/components/Reveal";
import { SocialRow } from "@/components/SocialRow";
import { useClickSound } from "@/hooks/useClickSound";



const CANDIDATO = {
  nome: "Thiago Joaldo",
  primeiroNome: "Thiago",
  cargo: "Deputado Federal",
  numero: "1011",
  slogan: "Esse é de coragem!",
  cidade: "Sergipe",
  bio: "Esse é de coragem! Deputado Federal por Sergipe. 💙🔟1️⃣1️⃣",
  whatsapp: "https://wa.me/5500000000000",
};

const ACOES = [
  {
    label: "Personalize seu perfil",
    arte: banner1.url,
    href: "#",
  },
  {
    label: "Material de campanha",
    arte: banner2.url,
    href: "#",
  },
  {
    label: "Jingles",
    arte: banner4.url,
    href: "#",
  },
  {
    label: "Figurinhas",
    arte: banner3.url,
    href: "#",
  },
  {
    label: "WhatsApp",
    arte: banner5.url,
    href: CANDIDATO.whatsapp,
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
  const playClick = useClickSound();

  return (
    <main className="relative overflow-hidden">
      <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -left-28 top-20 h-80 w-80 rounded-full bg-primary/20 blur-3xl animate-drift" />
        <div className="absolute right-[-7rem] top-[30rem] h-96 w-96 rounded-full bg-accent/30 blur-3xl animate-drift [animation-delay:3s]" />
      </div>

      <div className="relative mx-auto w-full max-w-3xl px-4 pb-24 pt-10 sm:px-6 sm:pt-14">
        <header className="text-center">
          <Reveal>
            <img
              src={perfil.url}
              alt={`${CANDIDATO.nome}, candidato a ${CANDIDATO.cargo}`}
              width={690}
              height={690}
              loading="eager"
              decoding="async"
              className="mx-auto h-40 w-40 rounded-full object-cover shadow-[0_18px_40px_rgba(0,0,0,0.45)] sm:h-48 sm:w-48"
            />
            <h1 className="mt-5 font-sans text-3xl font-bold normal-case tracking-normal sm:text-4xl">
              {CANDIDATO.nome}
            </h1>
            <p className="mx-auto mt-2 max-w-md text-base leading-relaxed text-foreground/90 sm:text-lg">
              {CANDIDATO.bio}
            </p>
            <SocialRow onActivate={playClick} />
          </Reveal>
        </header>


        {/* CARDS DA CAMPANHA */}
        <section aria-label="Links da campanha" className="mt-10 space-y-6 sm:mt-14 sm:space-y-8">
          {ACOES.map((acao, i) => (
            <Reveal key={acao.label} delay={i * 110}>
              <a
                href={acao.href}
                target={acao.href.startsWith("http") ? "_blank" : undefined}
                rel="noreferrer"
                aria-label={acao.label}
                onPointerDown={playClick}
                className="group block overflow-hidden rounded-3xl surface-card press"
              >
                <img
                  src={acao.arte}
                  alt={acao.label}
                  loading={i === 0 ? "eager" : "lazy"}
                  decoding="async"
                  width={1920}
                  height={628}
                  className="w-full transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                />
              </a>
            </Reveal>
          ))}
        </section>
      </div>
    </main>
  );
}

