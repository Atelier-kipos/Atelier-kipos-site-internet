import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Reveal } from "@/components/Reveal";
import { Marquee } from "@/components/Marquee";
import { projet1, projet4, projet5 } from "@/lib/images";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Atelier Kipos — Conception paysagère" },
      {
        name: "description",
        content:
          "Atelier Kipos conçoit des jardins contemporains et méditerranéens sur mesure à Arles et partout en France.",
      },
      { property: "og:title", content: "Atelier Kipos — Conception paysagère" },
      {
        property: "og:description",
        content: "Des jardins pensés comme des œuvres vivantes. Conception paysagère sur mesure.",
      },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Home,
});

const manifeste = [
  {
    num: "01",
    title: "Écouter le lieu",
    text: "Chaque projet commence par une observation : la lumière, le vent, le sol, les usages. Le jardin naît d'abord de son site.",
  },
  {
    num: "02",
    title: "Dessiner l'équilibre",
    text: "Lignes franches et masses végétales souples et minéral : je compose des espaces simples, justes et évidents.",
  },
  {
    num: "03",
    title: "Planter pour durer",
    text: "Des essences adaptées au climat, sobres en eau, qui gagnent en beauté avec les saisons. Un jardin pensé pour les décennies.",
  },
];

function Hero() {
  const [offset, setOffset] = useState(0);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
    let frame = 0;
    const onScroll = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => setOffset(window.scrollY * 0.18));
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(frame);
    };
  }, []);

  const anim = (delay: number) => ({
    opacity: loaded ? 1 : 0,
    transform: loaded ? "none" : "translateY(28px)",
    transition: `opacity 1.2s cubic-bezier(.22,1,.36,1) ${delay}ms, transform 1.2s cubic-bezier(.22,1,.36,1) ${delay}ms`,
  });

  return (
    <section className="relative h-[100svh] min-h-[640px] w-full overflow-hidden">
      <div className="absolute inset-0 -top-[12%] h-[124%] will-change-transform">
        <img
          src={projet5}
          alt="Allée de gravier bordée de lavandes, oliviers et cyprès"
          width={1600}
          height={1104}
          className="h-full w-full object-cover"
          style={{ transform: `translate3d(0, ${offset}px, 0)` }}
        />
      </div>
      <div className="absolute inset-0 bg-ink/25" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-ink/10 to-ink/70" />

      <div className="relative mx-auto flex h-full max-w-[1360px] flex-col justify-end px-6 pb-20 md:px-10 md:pb-24">
        <p className="eyebrow text-cream/80" style={anim(150)}>
          Atelier Kipos — Conception paysagère
        </p>
        <h1
          className="mt-6 max-w-4xl text-[clamp(2.7rem,7.4vw,6.2rem)] text-cream"
          style={anim(320)}
        >
          Des jardins pensés
          <br />
          comme des œuvres
          <br />
          <em className="italic text-gold-soft">vivantes.</em>
        </h1>
        <p className="mt-8 max-w-lg text-[0.98rem] leading-relaxed text-cream/80" style={anim(520)}>
          Atelier de conception paysagère. Je dessine des jardins , sur mesure, en harmonie avec leur
          territoire.
        </p>
        <div className="mt-10 flex flex-wrap gap-4" style={anim(680)}>
          <Link to="/realisations" className="btn btn-cream">
            Découvrir nos réalisations
          </Link>
          <Link to="/contact" className="btn btn-outline-cream">
            Prendre rendez-vous
          </Link>
        </div>

        <div
          className="pointer-events-none absolute bottom-24 right-10 hidden items-center gap-3 text-cream/70 lg:flex"
          style={anim(900)}
        >
          <span className="text-[0.68rem] uppercase tracking-[0.28em]">Défiler</span>
          <span className="scroll-hint block text-lg leading-none">↓</span>
        </div>
      </div>
    </section>
  );
}

function Home() {
  return (
    <>
      <Hero />
      <Marquee />

      {/* Manifeste */}
      <section className="mx-auto max-w-[1360px] px-6 py-28 md:px-10 md:py-40">
        <Reveal>
          <p className="eyebrow">Manifeste</p>
        </Reveal>
        <Reveal delay={100}>
          <h2 className="mt-6 max-w-2xl text-[clamp(2.2rem,5.4vw,4.2rem)]">
            Trois gestes, <em className="italic">un même soin.</em>
          </h2>
        </Reveal>
        <div className="mt-20 grid gap-14 md:grid-cols-3 md:gap-10">
          {manifeste.map((item, i) => (
            <Reveal key={item.num} delay={i * 140} className="border-t border-line pt-8">
              <p className="display text-2xl italic text-gold">{item.num}</p>
              <h3 className="mt-4 text-[1.75rem]">{item.title}</h3>
              <p className="mt-4 text-[0.95rem] leading-relaxed text-ink/70">{item.text}</p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Réalisations */}
      <section className="bg-surface py-28 md:py-40">
        <div className="mx-auto max-w-[1360px] px-6 md:px-10">
          <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
            <Reveal>
              <p className="eyebrow">Réalisations</p>
              <h2 className="mt-6 text-[clamp(2.2rem,5.4vw,4.2rem)]">Nos derniers jardins</h2>
            </Reveal>
            <Reveal delay={140}>
              <Link to="/realisations" className="arrow-link">
                Toutes les réalisations <span data-arrow>→</span>
              </Link>
            </Reveal>
          </div>

          <div className="mt-16 grid gap-6 lg:grid-cols-12">
            <Reveal className="lg:col-span-7">
              <div className="media aspect-[4/3] lg:aspect-[4/4.4]">
                <img
                  src={projet5}
                  alt="Allée de lavandes, oliviers et cyprès"
                  loading="lazy"
                  width={1600}
                  height={1104}
                />
              </div>
            </Reveal>
            <div className="grid gap-6 lg:col-span-5 lg:content-between">
              <Reveal delay={120}>
                <div className="media aspect-[4/3]">
                  <img
                    src={projet1}
                    alt="Portail en fer forgé devant un mas en pierre"
                    loading="lazy"
                    width={1408}
                    height={1600}
                  />
                </div>
              </Reveal>
              <Reveal delay={240}>
                <div className="media aspect-[4/3]">
                  <img
                    src={projet4}
                    alt="Vue aérienne du jardin dessiné"
                    loading="lazy"
                    width={1408}
                    height={1600}
                  />
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* L'atelier */}
      <section className="mx-auto max-w-[1360px] px-6 py-28 md:px-10 md:py-40">
        <div className="grid items-center gap-16 lg:grid-cols-2 lg:gap-24">
          <Reveal>
            <p className="eyebrow">L'atelier</p>
            <h2 className="mt-6 max-w-md text-[clamp(2.1rem,4.6vw,3.6rem)]">
              Une approche <em className="italic">sensible</em> du paysage
            </h2>
            <p className="mt-8 max-w-lg text-[0.98rem] leading-relaxed text-ink/70">
              Kipos — « le jardin », en grec ancien. C'est un atelier de conception paysagère :
              j'imagine des extérieurs chaleureux et durables, où chaque ligne et chaque essence ont
              leur raison d'être.
            </p>
            <div className="mt-10">
              <Link to="/a-propos" className="arrow-link">
                Découvrir l'atelier <span data-arrow>→</span>
              </Link>
            </div>
          </Reveal>
          <Reveal delay={160}>
            <div className="relative">
              <div
                className="absolute -bottom-5 -right-5 hidden h-full w-full border border-gold/60 sm:block"
                aria-hidden="true"
              />
              <div className="media relative aspect-[4/5]">
                <img
                  src={projet1}
                  alt="Portail en fer forgé et mas en pierre"
                  loading="lazy"
                  width={1408}
                  height={1600}
                />
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-sage">
        <div className="mx-auto max-w-[1360px] px-6 py-24 text-center md:px-10 md:py-32">
          <Reveal>
            <h2 className="mx-auto max-w-2xl text-[clamp(2.2rem,5.4vw,4rem)] text-cream">
              Un projet de <em className="italic">jardin ?</em>
            </h2>
            <p className="mx-auto mt-8 max-w-xl text-[0.98rem] leading-relaxed text-cream/85">
              Premier rendez-vous offert : nous venons écouter votre lieu, vos envies et vos usages,
              puis nous vous proposons une première intention. (selon projet)
            </p>
            <div className="mt-10">
              <Link to="/contact" className="btn btn-cream">
                Discutons de votre projet
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
