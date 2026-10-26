
import { useState } from "react";
import { Menu, X, Code2 } from "lucide-react";

const links = [
  ["Home", "#home"],
  ["About", "#about"],
  ["Skills", "#skills"],
  ["Projects", "#projects"],
  ["Experience", "#experience"],
  ["Contact", "#contact"],
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="navbar">
      <div className="container nav-inner">
        <a className="brand" href="#home" onClick={() => setOpen(false)}>
          <Code2 size={24} />
          <span>portfolio<span className="accent">.</span></span>
        </a>

        <button
          className="menu-toggle"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen(!open)}
        >
          {open ? <X /> : <Menu />}
        </button>

        <nav className={open ? "nav-links nav-open" : "nav-links"}>
          {links.map(([label, href]) => (
            <a
              key={href}
              href={href}
              onClick={() => setOpen(false)}
            >
              {label}
            </a>
          ))}
          <a className="nav-cta" href="#contact" onClick={() => setOpen(false)}>
            Let's Talk <span>↗</span>
          </a>
        </nav>
      </div>
    </header>
  );
}
