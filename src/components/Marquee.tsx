const words = ["Conception sur mesure", "Végétal", "Minéral", "Harmonie", "Pérennité"];

function Sequence() {
  return (
    <div className="flex shrink-0 items-center">
      {words.map((word) => (
        <span key={word} className="flex items-center">
          <span className="display px-6 text-[1.35rem] italic text-ink/80 sm:px-9 sm:text-[1.6rem]">
            {word}
          </span>
          <span className="h-[5px] w-[5px] rounded-full bg-gold" aria-hidden="true" />
        </span>
      ))}
    </div>
  );
}

export function Marquee() {
  return (
    <div className="group overflow-hidden border-y border-line bg-sage-pale py-5">
      <div className="marquee-track group-hover:[animation-play-state:paused]">
        <Sequence />
        <Sequence />
      </div>
    </div>
  );
}
