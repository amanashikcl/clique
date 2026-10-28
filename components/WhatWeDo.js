// PLACEHOLDER copy: replace with Clique's real services.
const SERVICES = [
  { n: "01", title: "Creator partnerships", text: "Placeholder: short description of this service." },
  { n: "02", title: "Brand campaigns", text: "Placeholder: short description of this service." },
  { n: "03", title: "Content production", text: "Placeholder: short description of this service." },
  { n: "04", title: "Social strategy", text: "Placeholder: short description of this service." },
];

export default function WhatWeDo() {
  return (
    <section className="wwd" id="work">
      <header className="wwd-head">
        <p className="wwd-tag">What we do</p>
        <h2 className="wwd-title">Placeholder headline about what Clique does.</h2>
      </header>

      <ul className="wwd-list">
        {SERVICES.map((s) => (
          <li className="wwd-item" key={s.n}>
            <span className="wwd-num">{s.n}</span>
            <h3 className="wwd-name">{s.title}</h3>
            <p className="wwd-text">{s.text}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}
