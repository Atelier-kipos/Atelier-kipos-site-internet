import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHeader } from "@/components/PageHeader";
import { Reveal } from "@/components/Reveal";
import { projet2 } from "@/lib/images";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — Atelier Kipos" },
      {
        name: "description",
        content:
          "Conception de jardins sur mesure : étude du site, plan masse et 3D, palette végétale et minérale, carnet de plantation détaillé.",
      },
      { property: "og:title", content: "Services — Atelier Kipos" },
      {
        property: "og:description",
        content: "Du rendez-vous à l'esquisse, Atelier Kipos accompagne chaque étape du jardin.",
      },
      { property: "og:url", content: "/services" },
    ],
    links: [{ rel: "canonical", href: "/services" }],
  }),
  component: Services,
});

const prestations = [
  "Étude du site et relevés",
  "Plan masse et 3D",
  "Palette végétale et minérale",
  "Carnet de plantation détaillé",
];

function Services() {
  return (
    <>
      <PageHeader
        eyebrow="Savoir-faire"
        title={
          <>
            Nos <em className="italic">services</em>
          </>
        }
        text="Du rendez-vous à l'esquisse , Atelier kipos accompagne chaque étape de la vie de votre jardin."
      />

      <section className="mx-auto max-w-[1360px] px-6 pb-28 md:px-10 md:pb-40">
        <div className="grid items-center gap-16 border-t border-line pt-16 lg:grid-cols-2 lg:gap-24">
          <Reveal>
            <p className="display text-2xl italic text-gold">01</p>
            <h2 className="mt-4 text-[clamp(2rem,4.4vw,3.4rem)]">Conception de jardins</h2>
            <p className="mt-8 max-w-lg text-[0.98rem] leading-relaxed text-ink/70">
              De la première esquisse au plan de plantation, je dessine votre jardin dans ses
              moindres détails : circulations, masses, perspectives, ambiance.
            </p>
            <ul className="mt-10 max-w-md">
              {prestations.map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-4 border-b border-line py-4 text-[0.95rem] text-ink/80"
                >
                  <span className="h-[5px] w-[5px] shrink-0 rounded-full bg-gold" />
                  {item}
                </li>
              ))}
            </ul>
            <div className="mt-12">
              <Link to="/contact" className="btn btn-line">
                Prendre rendez-vous
              </Link>
            </div>
          </Reveal>

          <Reveal delay={160}>
            <div className="relative">
              <div
                className="absolute -bottom-5 -left-5 hidden h-full w-full border border-gold/60 sm:block"
                aria-hidden="true"
              />
              <div className="media relative aspect-[4/5]">
                <img
                  src={projet2}
                  alt="Pergola fleurie au-dessus d'une terrasse en pierre"
                  loading="lazy"
                  width={1408}
                  height={1600}
                />
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
