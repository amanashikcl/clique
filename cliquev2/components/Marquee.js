// PLACEHOLDER words — swap for Clique's real tagline or brand names.
const ITEMS = ["Creators", "Campaigns", "Culture", "Storytelling", "Partnerships", "Reach"];

export default function Marquee() {
  // Duplicated so the -50% translate loops seamlessly.
  const row = [...ITEMS, ...ITEMS];
  return (
    <div className="marquee" aria-hidden="true">
      <div className="marquee-track">
        {[0, 1].map((n) =>
          row.map((t, i) => (
            <span className="marquee-item" key={`${n}-${i}`}>
              {t}
            </span>
          ))
        )}
      </div>
    </div>
  );
}
