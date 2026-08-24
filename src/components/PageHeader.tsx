import type { ReactNode } from "react";
import { Reveal } from "./Reveal";

export function PageHeader({
  eyebrow,
  title,
  text,
}: {
  eyebrow: string;
  title: ReactNode;
  text?: string;
}) {
  return (
    <section className="mx-auto max-w-[1360px] px-6 pb-16 pt-36 md:px-10 md:pb-24 md:pt-52">
      <Reveal>
        <p className="eyebrow">{eyebrow}</p>
      </Reveal>
      <Reveal delay={120}>
        <h1 className="mt-6 max-w-4xl text-[clamp(2.6rem,7vw,5.5rem)]">{title}</h1>
      </Reveal>
      {text ? (
        <Reveal delay={220}>
          <p className="mt-8 max-w-xl text-[0.98rem] leading-relaxed text-ink/70">{text}</p>
        </Reveal>
      ) : null}
    </section>
  );
}
