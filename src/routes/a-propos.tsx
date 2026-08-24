import { createFileRoute, Link } from "@tanstack/react-router";
import { Reveal } from "@/components/Reveal";
import { projet4 } from "@/lib/images";

export const Route = createFileRoute("/a-propos")({
  head: () => ({
    meta: [
      { title: "À propos — Atelier Kipos" },
      {
        name: "description",
        content:
          "Kipos, « le jardin » en grec ancien : un atelier de conception paysagère né de la botanique et de l'architecture, à Arles.",
      },
      { property: "og:title", content: "À propos — Atelier Kipos" },
      {
        property: "og:description",
        content: "Une approche sensible du paysage : observer longtemps, dessiner juste.",
      },
      { property: "og:url", content: "/a-propos" },
    ],
    links: [{ rel: "canonical", href: "/a-propos" }],
  }),
  component: APropos,
});

const valeurs = [
  {
    title: "Harmonie",
    text: "« Une végétation structurée, pensée pour créer un équilibre subtil entre couleurs, textures et saisons. »",
  },
  {
    title: "Artisanat",
    text: "Le geste juste : pierre, bois, terre. Nous travaillons main dans la main avec des artisans et pépiniéristes locaux.",
  },
  {
    title: "Pérennité",
    text: "Un jardin doit traverser le temps. Nous concevons pour les saisons qui passent et pour les décennies qui viennent.",
  },
];

function APropos() {
  return (
    <>
      <section className="mx-auto max-w-[1360px] px-6 pb-16 pt-36 md:px-10 md:pb-24 md:pt-52">
        <Reveal>
          <p className="eyebrow">Atelier</p>
        </Reveal>
        <Reveal delay={120}>
          <h1 className="mt-6 text-[clamp(2.6rem,7vw,5.6rem)]">
            Kipos,
            <br />
            le jardin,
            <br />
            <em className="italic text-sage">en grec ancien.</em>
          </h1>
        </Reveal>
        <Reveal delay={220}>
          <p className="mt-10 max-w-xl text-[0.98rem] leading-relaxed text-ink/70">
            Un nom comme une promesse : faire du jardin un lieu d'art et de vie, dessiné avec
            exigence et douceur.
          </p>
        </Reveal>
      </section>

      {/* Histoire */}
      <section className="mx-auto max-w-[1360px] px-6 pb-28 md:px-10 md:pb-40">
        <div className="grid gap-16 lg:grid-cols-2 lg:gap-24">
          <Reveal>
            <div className="relative lg:sticky lg:top-32">
              <div
                className="absolute -bottom-5 -right-5 hidden h-full w-full border border-gold/60 sm:block"
                aria-hidden="true"
              />
              <div className="media relative aspect-[4/5]">
                <img
                  src={projet4}
                  alt="Vue aérienne du jardin dessiné par l'atelier"
                  loading="lazy"
                  width={1408}
                  height={1600}
                />
              </div>
            </div>
          </Reveal>

          <div>
            <Reveal>
              <p className="display text-[clamp(1.6rem,3vw,2.3rem)] italic leading-snug">
                Un atelier né de la conviction qu'un jardin se pense comme une œuvre : avec
                intention, retenue et émotion.
              </p>
            </Reveal>
            <div className="mt-10 space-y-6 text-[0.98rem] leading-relaxed text-ink/70">
              <Reveal delay={100}>
                <p>
                  Fondé par une passionnée de botanique et d'architecture, Atelier Kipos conçoit des
                  jardins inspirés du paysage alentours. Mon approche est simple : observer
                  longtemps, dessiner juste, planter pour durer.
                </p>
              </Reveal>
              <Reveal delay={160}>
                <p>
                  J'interviens de la première esquisse à la plantation, en lien étroit avec des
                  artisans, terrassiers et pépiniéristes de la région. Chaque détail compte : la
                  courbe d'une allée, l'ombre d'un arbre à seize heures, la couleur d'une pierre sous
                  la pluie.
                </p>
              </Reveal>
              <Reveal delay={220}>
                <p>
                  Chaque projet est une rencontre — avec un lieu, avec des habitants. Mon rôle est de
                  révéler ce que le jardin portait déjà en lui.
                </p>
              </Reveal>
            </div>
            <Reveal delay={280}>
              <p className="display mt-10 text-xl italic text-sage">— Atelier Kipos</p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Valeurs */}
      <section className="bg-surface py-28 md:py-40">
        <div className="mx-auto max-w-[1360px] px-6 md:px-10">
          <Reveal>
            <p className="eyebrow">Valeurs</p>
            <h2 className="mt-6 max-w-2xl text-[clamp(2.1rem,5vw,3.8rem)]">
              Ce qui guide chacun de <em className="italic">nos dessins.</em>
            </h2>
          </Reveal>
          <div className="mt-20 grid gap-14 md:grid-cols-3 md:gap-10">
            {valeurs.map((v, i) => (
              <Reveal key={v.title} delay={i * 140} className="border-t border-line pt-8">
                <h3 className="text-[1.75rem]">{v.title}</h3>
                <p className="mt-4 text-[0.95rem] leading-relaxed text-ink/70">{v.text}</p>
              </Reveal>
            ))}
          </div>
          <Reveal delay={200} className="mt-20">
            <Link to="/contact" className="arrow-link">
              Prendre rendez-vous <span data-arrow>→</span>
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
