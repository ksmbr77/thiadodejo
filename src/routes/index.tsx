import { createFileRoute } from "@tanstack/react-router";
import {
  Instagram,
  Music4,
  MessageCircle,
  Sticker,
  UserRoundCog,
  FileDown,
  Youtube,
  Facebook,
  ArrowUpRight,
  Sparkles,
} from "lucide-react";

import candidato from "@/assets/candidato.png";
import { Reveal } from "@/components/Reveal";

const CANDIDATO = {
  nome: "Nome do Candidato",
  cargo: "Deputado Federal",
  numero: "00000",
  slogan: "Esse é de coragem!",
  cidade: "Sergipe",
  whatsapp: "https://wa.me/5500000000000",
};

const ACOES = [
  {
    titulo: "Participe do nosso grupo",
    desc: "Notícias da campanha em primeira mão no WhatsApp.",
    icone: MessageCircle,
    href: CANDIDATO.whatsapp,
    destaque: true,
  },
  {
    titulo: "Baixe o pacote de figurinhas",
    desc: "Stickers da campanha para mandar em todos os grupos.",
    icone: Sticker,
    href: "#",
  },
  {
    titulo: "Ouça os jingles",
    desc: "O som que já está tocando em toda a região.",
    icone: Music4,
    href: "#",
  },
  {
    titulo: "Material de campanha",
    desc: "Adesivos, santinhos e artes para imprimir.",
    icone: FileDown,
    href: "#",
  },
  {
    titulo: "Personalize seu perfil",
    desc: "Molduras com o número para sua foto nas redes.",
    icone: UserRoundCog,
    href: "#",
  },
];

const REDES = [
  { nome: "Instagram", icone: Instagram, href: "#" },
  { nome: "YouTube", icone: Youtube, href: "#" },
  { nome: "Facebook", icone: Facebook, href: "#" },
];

const BANDEIRAS = [
  { titulo: "Saúde perto de casa", desc: "Mais leitos, mutirões e atendimento no interior." },
  { titulo: "Educação com futuro", desc: "Escolas em tempo integral e ensino técnico." },
  { titulo: "Emprego e renda", desc: "Crédito para o pequeno negócio que gira a cidade." },
  { titulo: "Água para o sertão", desc: "Obras de abastecimento que não param na promessa." },
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
      {/* faíscas decorativas */}
      <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -left-24 top-24 h-72 w-72 rounded-full bg-primary/25 blur-3xl animate-float" />
        <div className="absolute right-[-6rem] top-[28rem] h-80 w-80 rounded-full bg-accent/40 blur-3xl animate-float [animation-delay:1.5s]" />
        <Sparkles className="absolute right-10 top-40 h-8 w-8 text-highlight animate-spark" />
        <Sparkles className="absolute left-8 top-[22rem] h-6 w-6 text-highlight animate-spark [animation-delay:1s]" />
      </div>

      <div className="relative mx-auto w-full max-w-xl px-5 pb-20 pt-10 sm:pt-14">
        {/* HERO */}
        <header className="text-center">
          <Reveal>
            <p className="text-xs font-black uppercase tracking-[0.35em] text-muted-foreground">
              {CANDIDATO.cargo}
            </p>
            <h1 className="mt-3 text-5xl sm:text-6xl">{CANDIDATO.nome}</h1>
            <div className="mt-4 inline-flex -rotate-2 items-center gap-3 rounded-xl px-5 py-2 highlight-box">
              <span className="font-display text-4xl sm:text-5xl leading-none">
                {CANDIDATO.numero}
              </span>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <div className="relative mx-auto mt-6 w-64 sm:w-72">
              <div className="absolute inset-0 -rotate-3 rounded-[2rem] bg-secondary shadow-[var(--shadow-pop)]" />
              <img
                src={candidato}
                alt={`${CANDIDATO.nome}, candidato a ${CANDIDATO.cargo}`}
                width={1024}
                height={1024}
                className="relative w-full drop-shadow-2xl"
              />
            </div>
          </Reveal>

          <Reveal delay={220}>
            <p className="mt-4 font-display text-2xl text-highlight">{CANDIDATO.slogan}</p>
            <p className="mt-2 text-sm text-muted-foreground">
              Tudo da nossa campanha em {CANDIDATO.cidade}, reunido em um só lugar.
            </p>
          </Reveal>
        </header>

        {/* MARQUEE */}
        <div className="relative mt-8 -mx-5 overflow-hidden border-y border-border bg-secondary/60 py-2">
          <div className="flex w-max animate-marquee gap-8 whitespace-nowrap">
            {Array.from({ length: 2 }).map((_, block) => (
              <div key={block} className="flex gap-8">
                {Array.from({ length: 6 }).map((__, i) => (
                  <span
                    key={i}
                    className="font-display text-lg uppercase tracking-widest text-foreground/90"
                  >
                    Tô com {CANDIDATO.nome.split(" ")[0]} · {CANDIDATO.numero} ·
                  </span>
                ))}
              </div>
            ))}
          </div>
        </div>

        {/* AÇÕES / LINKS */}
        <section aria-label="Links da campanha" className="mt-8 space-y-4">
          {ACOES.map((acao, i) => {
            const Icone = acao.icone;
            return (
              <Reveal key={acao.titulo} delay={i * 90}>
                <a
                  href={acao.href}
                  target={acao.href.startsWith("http") ? "_blank" : undefined}
                  rel="noreferrer"
                  className={`group flex items-center gap-4 rounded-2xl p-4 ${
                    acao.destaque ? "highlight-box surface-card" : "surface-card"
                  }`}
                >
                  <span
                    className={`grid h-12 w-12 shrink-0 place-items-center rounded-xl transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-6 ${
                      acao.destaque ? "bg-primary-foreground/20" : "bg-primary/20 text-primary"
                    }`}
                  >
                    <Icone className="h-6 w-6" />
                  </span>
                  <span className="min-w-0 flex-1 text-left">
                    <span className="block font-display text-xl leading-tight">{acao.titulo}</span>
                    <span className="block text-sm opacity-80">{acao.desc}</span>
                  </span>
                  <ArrowUpRight className="h-5 w-5 shrink-0 opacity-60 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:opacity-100" />
                </a>
              </Reveal>
            );
          })}
        </section>

        {/* BANDEIRAS */}
        <section aria-label="Nossas bandeiras" className="mt-12">
          <Reveal>
            <h2 className="text-3xl">
              Nossas <span className="text-highlight">bandeiras</span>
            </h2>
          </Reveal>
          <div className="mt-5 grid gap-4 sm:grid-cols-2">
            {BANDEIRAS.map((b, i) => (
              <Reveal key={b.titulo} delay={i * 80}>
                <article className="h-full rounded-2xl p-4 surface-card">
                  <h3 className="font-display text-lg text-primary">{b.titulo}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{b.desc}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </section>

        {/* REDES */}
        <section aria-label="Redes sociais" className="mt-12 text-center">
          <Reveal>
            <h2 className="text-2xl">Siga a campanha</h2>
            <div className="mt-4 flex justify-center gap-4">
              {REDES.map((r) => {
                const Icone = r.icone;
                return (
                  <a
                    key={r.nome}
                    href={r.href}
                    aria-label={r.nome}
                    className="grid h-14 w-14 place-items-center rounded-2xl surface-card text-primary"
                  >
                    <Icone className="h-6 w-6" />
                  </a>
                );
              })}
            </div>
          </Reveal>
        </section>

        <footer className="mt-14 text-center text-xs text-muted-foreground">
          <p className="font-display text-base text-foreground">
            {CANDIDATO.nome} · {CANDIDATO.numero}
          </p>
          <p className="mt-2">Conteúdo eleitoral. Campanha {new Date().getFullYear()}.</p>
        </footer>
      </div>

      {/* CTA fixo */}
      <a
        href={CANDIDATO.whatsapp}
        target="_blank"
        rel="noreferrer"
        className="fixed bottom-5 left-1/2 z-20 -translate-x-1/2 rounded-full px-6 py-3 font-display text-lg uppercase highlight-box transition-transform duration-300 hover:scale-105"
      >
        Entrar no grupo
      </a>
    </main>
  );
}
