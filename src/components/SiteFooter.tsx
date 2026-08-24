import { Link } from "@tanstack/react-router";
import { navItems, site } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="bg-ink text-cream">
      <div className="mx-auto max-w-[1360px] px-6 py-20 md:px-10 md:py-28">
        <div className="flex flex-col gap-10 border-b border-cream/15 pb-16 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="eyebrow text-sage-light">{site.name}</p>
            <h2 className="mt-4 max-w-xl text-[clamp(2.2rem,5vw,3.6rem)]">
              Faisons grandir <em className="italic text-gold-soft">votre projet.</em>
            </h2>
          </div>
          <Link to="/contact" className="btn btn-gold self-start">
            Prendre rendez-vous
          </Link>
        </div>

        <div className="grid gap-12 pt-16 md:grid-cols-3">
          <div>
            <p className="display text-2xl">
              Atelier <em className="italic text-sage-light">kipos</em>
            </p>
            <p className="mt-4 max-w-xs text-sm text-cream/65">
              Atelier de conception paysagère. Jardins dessinés avec soin.
            </p>
            <a
              href={site.instagram}
              target="_blank"
              rel="noreferrer"
              className="mt-6 inline-block text-sm text-cream/80 underline-offset-4 transition-colors hover:text-gold-soft"
            >
              Instagram
            </a>
          </div>

          <div>
            <p className="eyebrow text-sage-light">Contact</p>
            <ul className="mt-5 space-y-2 text-sm text-cream/75">
              <li>
                <a href={`mailto:${site.email}`} className="transition-colors hover:text-gold-soft">
                  {site.email}
                </a>
              </li>
              <li>
                <a href={site.phoneHref} className="transition-colors hover:text-gold-soft">
                  {site.phone}
                </a>
              </li>
              <li>{site.zone}</li>
            </ul>
          </div>

          <div>
            <p className="eyebrow text-sage-light">Navigation</p>
            <ul className="mt-5 space-y-2 text-sm text-cream/75">
              {navItems.map((item) => (
                <li key={item.to}>
                  <Link to={item.to} className="transition-colors hover:text-gold-soft">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-2 border-t border-cream/15 pt-8 text-xs text-cream/50 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 Atelier Kipos — Tous droits réservés.</p>
          <p className="italic">Kipos : « le jardin », en grec ancien.</p>
        </div>
      </div>
    </footer>
  );
}
