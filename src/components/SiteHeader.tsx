import { Link, useRouterState } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { navItems } from "@/lib/site";

function Logo({ large = false }: { large?: boolean }) {
  return (
    <span className={`display leading-none ${large ? "text-3xl" : "text-2xl"}`}>
      Atelier <em className="italic text-sage">kipos</em>
    </span>
  );
}

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50 h-20 border-b border-line/70 bg-cream/85 backdrop-blur-md">
        <div className="mx-auto flex h-full max-w-[1360px] items-center justify-between px-6 md:px-10">
          <Link to="/" aria-label="Atelier Kipos — accueil">
            <Logo />
          </Link>

          <nav className="hidden items-center gap-9 lg:flex">
            {navItems.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                className="nav-link"
                data-active={pathname === item.to}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="hidden lg:block">
            <Link to="/contact" className="btn btn-ink">
              Prendre rendez-vous
            </Link>
          </div>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
            aria-expanded={open}
            className="relative z-50 flex h-11 w-11 flex-col items-center justify-center gap-[6px] lg:hidden"
          >
            <span
              className={`block h-px w-7 bg-ink transition-transform duration-500 ${open ? "translate-y-[3.5px] rotate-45" : ""}`}
            />
            <span
              className={`block h-px w-7 bg-ink transition-transform duration-500 ${open ? "-translate-y-[3.5px] -rotate-45" : ""}`}
            />
          </button>
        </div>
      </header>

      {/* Menu plein écran mobile */}
      <div
        className={`fixed inset-0 z-40 bg-cream transition-opacity duration-500 lg:hidden ${
          open ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
        }`}
      >
        <div className="flex h-full flex-col justify-center px-8 pt-20">
          <nav className="flex flex-col gap-5">
            {navItems.map((item, i) => (
              <Link
                key={item.to}
                to={item.to}
                className="display text-[clamp(2.4rem,11vw,3.6rem)] leading-none text-ink"
                style={{ transitionDelay: `${i * 40}ms` }}
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <div className="mt-12">
            <Link to="/contact" className="btn btn-ink">
              Prendre rendez-vous
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
