import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { PageHeader } from "@/components/PageHeader";
import { Reveal } from "@/components/Reveal";
import { site } from "@/lib/site";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Atelier Kipos" },
      {
        name: "description",
        content:
          "Parlons de votre jardin : Atelier Kipos répond à chaque message sous 48 h. Arles et France entière.",
      },
      { property: "og:title", content: "Contact — Atelier Kipos" },
      {
        property: "og:description",
        content: "Un terrain, une terrasse, une envie ? Racontez-nous votre projet de jardin.",
      },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: Contact,
});

const projectTypes = [
  "Création de jardin",
  "Aménagement de terrasse",
  "Rénovation paysagère",
  "Autre projet",
];

const infos = [
  { label: "Email", value: site.email, href: `mailto:${site.email}` },
  { label: "Téléphone", value: site.phone, href: site.phoneHref },
  { label: "Zone d'intervention", value: site.zone },
  { label: "Délai de réponse", value: site.delay },
];

type Status = "idle" | "sending" | "success" | "error";

const inputClass =
  "w-full border-b border-line bg-transparent py-3 text-[0.95rem] text-ink outline-none transition-colors placeholder:text-ink/35 focus:border-sage";

function Contact() {
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);

    // Sans endpoint configuré : bascule sur le client mail du visiteur.
    if (!site.formEndpoint) {
      const body = [
        `Nom : ${data.get("nom")}`,
        `Email : ${data.get("email")}`,
        `Téléphone : ${data.get("telephone")}`,
        `Type de projet : ${data.get("type")}`,
        "",
        String(data.get("message") ?? ""),
      ].join("\n");
      window.location.href = `mailto:${site.email}?subject=${encodeURIComponent(
        "Demande de projet — Atelier Kipos",
      )}&body=${encodeURIComponent(body)}`;
      setStatus("success");
      form.reset();
      return;
    }

    setStatus("sending");
    try {
      const response = await fetch(site.formEndpoint, {
        method: "POST",
        headers: { Accept: "application/json" },
        body: data,
      });
      if (!response.ok) throw new Error("Request failed");
      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title={
          <>
            Parlons de <em className="italic">votre jardin</em>
          </>
        }
        text="Un terrain, une terrasse, une envie ? Racontez-moi votre projet : je répondrais à chaque message personnellement."
      />

      <section className="mx-auto max-w-[1360px] px-6 pb-28 md:px-10 md:pb-40">
        <div className="grid gap-16 border-t border-line pt-16 lg:grid-cols-[1fr_1.15fr] lg:gap-24">
          {/* Informations */}
          <Reveal>
            <p className="eyebrow">Informations</p>
            <ul className="mt-8">
              {infos.map((info) => (
                <li key={info.label} className="border-b border-line py-5">
                  <p className="text-[0.7rem] uppercase tracking-[0.22em] text-ink/45">
                    {info.label}
                  </p>
                  <p className="mt-2 text-[1.05rem]">
                    {info.href ? (
                      <a href={info.href} className="transition-colors hover:text-sage-dark">
                        {info.value}
                      </a>
                    ) : (
                      info.value
                    )}
                  </p>
                </li>
              ))}
            </ul>
            <p className="display mt-10 max-w-md text-[1.35rem] italic leading-snug text-ink/80">
              Premier rendez-vous offert, sur place (selon emplacement). Nous prenons le temps
              d'écouter le lieu avant de dessiner quoi que ce soit.
            </p>
          </Reveal>

          {/* Formulaire */}
          <Reveal delay={140}>
            <div className="bg-surface p-8 md:p-12">
              <form onSubmit={handleSubmit} className="space-y-8">
                <div>
                  <label htmlFor="nom" className="text-[0.7rem] uppercase tracking-[0.22em] text-ink/50">
                    Nom complet *
                  </label>
                  <input id="nom" name="nom" required className={inputClass} placeholder="Votre nom" />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="text-[0.7rem] uppercase tracking-[0.22em] text-ink/50"
                  >
                    Email *
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    className={inputClass}
                    placeholder="vous@exemple.com"
                  />
                </div>
                <div>
                  <label
                    htmlFor="telephone"
                    className="text-[0.7rem] uppercase tracking-[0.22em] text-ink/50"
                  >
                    Téléphone
                  </label>
                  <input
                    id="telephone"
                    name="telephone"
                    type="tel"
                    className={inputClass}
                    placeholder="06 00 00 00 00"
                  />
                </div>
                <div>
                  <label
                    htmlFor="type"
                    className="text-[0.7rem] uppercase tracking-[0.22em] text-ink/50"
                  >
                    Type de projet
                  </label>
                  <select id="type" name="type" defaultValue="" className={inputClass}>
                    <option value="" disabled>
                      Sélectionner…
                    </option>
                    {projectTypes.map((type) => (
                      <option key={type} value={type}>
                        {type}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="text-[0.7rem] uppercase tracking-[0.22em] text-ink/50"
                  >
                    Votre message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    className={`${inputClass} resize-none`}
                    placeholder="Votre lieu, vos envies, vos usages…"
                  />
                </div>

                <button type="submit" className="btn btn-ink w-full sm:w-auto" disabled={status === "sending"}>
                  {status === "sending" ? "Envoi…" : "Envoyer le message"}
                </button>

                {status === "success" ? (
                  <p role="status" className="text-[0.95rem] text-sage-dark">
                    Merci ! Votre message a bien été envoyé. Je reviens vers vous très vite.
                  </p>
                ) : null}
                {status === "error" ? (
                  <p role="alert" className="text-[0.95rem] text-ink/70">
                    Une erreur est survenue. Réessayez, ou écrivez-nous directement à{" "}
                    <a href={`mailto:${site.email}`} className="underline">
                      {site.email}
                    </a>
                    .
                  </p>
                ) : null}
              </form>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
