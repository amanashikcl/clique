import Image from "next/image";
import {
  MinimalCard,
  MinimalCardDescription,
  MinimalCardTitle,
} from "@/components/ui/minimal-card";

function InstagramIcon(props) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.2" cy="6.8" r="0.9" fill="currentColor" stroke="none" />
    </svg>
  );
}

// PLACEHOLDER descriptions — replace with real text.
// `zoom` crops the empty margin baked into a logo file; poh.jpg is only 150px,
// so it is shown at its real size instead of being stretched.
const PARTNERS = [
  {
    name: "Clique Creatives",
    src: "/images/cliquecreatives.png",
    size: "100%", // fills the image area height, so it scales with the card
    zoom: 1.9,
    instagram: "https://www.instagram.com/clique.creatives/",
    description: "Placeholder: one or two lines about this partner and the campaigns we ran together.",
  },
  {
    name: "Piece of Halwa",
    src: "/images/poh.jpg",
    size: "200px",
    zoom: 1,
    instagram: "https://www.instagram.com/pieceofhalwa/",
    description: "Placeholder: one or two lines about this partner and the campaigns we ran together.",
  },
];

export default function Partners() {
  return (
    <section className="partners" id="partners">
      <header>
        <p className="partners-tag">Partners and campaigns</p>
        <h2 className="partners-title">Placeholder headline about the brands we work with.</h2>
      </header>

      {/* `dark` switches the cards to their dark styles; Geist applies to the card text only */}
      <ul className="partner-list dark font-[family-name:var(--font-geist)]">
        {PARTNERS.map((p) => (
          <li key={p.name}>
            <MinimalCard>
              {/* Same box as MinimalCardImage, but the logo is contained instead of cropped */}
              <div className="relative mb-6 flex h-[260px] w-full sm:h-[340px] lg:h-[400px] items-center justify-center overflow-hidden rounded-[20px] bg-white">
                <Image
                  src={p.src}
                  alt={p.name}
                  width={800}
                  height={800}
                  sizes="400px"
                  className="object-contain"
                  style={{ height: p.size, width: p.size === "100%" ? "auto" : p.size, aspectRatio: "1 / 1", transform: `scale(${p.zoom})` }}
                />
              </div>
              <MinimalCardTitle className="text-2xl">{p.name}</MinimalCardTitle>
              <MinimalCardDescription className="text-base">{p.description}</MinimalCardDescription>
              <a
                href={p.instagram || "#"}
                target={p.instagram ? "_blank" : undefined}
                rel="noopener noreferrer"
                aria-label={`${p.name} on Instagram`}
                className="mt-1 ml-1 mb-2 inline-flex size-9 items-center justify-center rounded-full text-neutral-400 transition-colors hover:bg-neutral-700 hover:text-white"
              >
                <InstagramIcon className="size-5" />
              </a>
            </MinimalCard>
          </li>
        ))}
      </ul>
    </section>
  );
}
