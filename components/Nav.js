import Link from "next/link";

export default function Nav() {
  return (
    <nav className="nav">
      <Link className="nav-logo" href="/">Clique</Link>
      <div className="nav-links">
        <Link href="/#vision">Vision</Link>
        <Link href="/#work">What we do</Link>
        <Link href="/#partners">Partners</Link>
        <Link href="/#contact">Contact</Link>
      </div>
    </nav>
  );
}
