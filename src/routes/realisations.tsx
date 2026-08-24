import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHeader } from "@/components/PageHeader";
import { Reveal } from "@/components/Reveal";
import { projet1, projet2, projet3, projet4, projet5 } from "@/lib/images";

export const Route = createFileRoute("/realisations")({
  head: () => ({
    meta: [
      { title: "Réalisations — Atelier Kipos" },
      {
        name: "description",
        content:
          "Le jardin d'un mas provençal à Beaumes-de-Venise : allée d'entrée, parking en gravier, carport fleurie et massifs, dessinés par Atelier Kipos.",
      },
      { property: "og:title", content: "Réalisations — Atelier Kipos" },
      {
        property: "og:description",
        content: "Nos jardins méditerranéens dessinés sur mesure, en images.",
      },
      { property: "og:url", content: "/realisations" },
    ],
    links: [{ rel: "canonical", href: "/realisations" }],
  }),
  component: Realisations,
});

const projets = [
  {
    num: "01",
    title: "L'allée d'entrée",
    subtitle: "Vue d'ensemble",
    src: projet5,
    alt: "Allée de gravier bordée de lavandes, oliviers et cyprès",
    span: "lg:col-span-8",
    ratio: "aspect-[16/10]",
  },
  {
    num: "02",
    title: "Le portail",
    subtitle: "Fer forgé & pierre",
    src: projet1,
    alt: "Portail en fer forgé devant un mas en pierre",
    span: "lg:col-span-4",
    ratio: "aspect-[4/5]",
  },
  {
    num: "03",
    title: "Vue aérienne",
    subtitle: "Composition générale",
    src: projet4,
    alt: "Vue aérienne du jardin dessiné",
    span: "lg:col-span-5",
    ratio: "aspect-[4/5]",
  },
  {
    num: "04",
    title: "La cour de gravier",
    subtitle: "Parking & circulations",
    src: projet3,
    alt: "Cour de gravier avec buis en pot et oliviers",
    span: "lg:col-span-7",
    ratio: "aspect-[16/10]",
  },
  {
    num: "05",
    title: "La pergola fleurie",
    subtitle: "Carport & terrasse",
    src: projet2,
    alt: "Pergola fleurie ombrageant une terrasse en pierre",
    span: "lg:col-span-12",
    ratio: "aspect-[4/5] lg:aspect-[16/9]",
  },
];

function Realisations() {
  return (
    <>
      <PageHeader
        eyebrow="Portfolio"
        title={
          <>
            Nos <em className="italic">réalisations</em>
          </>
        }
        text="Notre projet présenté : le jardin d'un mas provençal à Beaumes-de-Venise, visualisé en 3D — entrée, parking en gravier, carport fleurie, massifs."
      />

      <section className="mx-auto max-w-[1360px] px-6 pb-28 md:px-10 md:pb-40">
        <div className="grid gap-6 lg:grid-cols-12">
          {projets.map((p, i) => (
            <Reveal key={p.num} delay={(i % 2) * 120} className={p.span}>
              <figure className="media group/card">
                <div className={p.ratio}>
                  <img src={p.src} alt={p.alt} loading="lazy" />
                </div>
                <figcaption className="pointer-events-none absolute inset-0 flex flex-col justify-end bg-ink/0 p-7 opacity-0 transition-all duration-700 group-hover/card:bg-ink/45 group-hover/card:opacity-100">
                  <span className="display text-xl italic text-gold-soft">{p.num}</span>
                  <span className="display mt-1 text-[1.9rem] text-cream">{p.title}</span>
                  <span className="mt-1 text-xs uppercase tracking-[0.2em] text-cream/75">
                    {p.subtitle}
                  </span>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-20 border-t border-line pt-10">
          <Link to="/contact" className="arrow-link">
            Parlons de votre jardin <span data-arrow>→</span>
          </Link>
        </Reveal>
      </section>
    </>
  );
}
