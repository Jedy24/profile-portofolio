"use client";
import { useEffect, useState } from "react";
import { Github, Menu, X, Sun, Moon } from "lucide-react";
import { profile } from "@/data/portfolio";
const links = [
  ["About", "about"],
  ["Experience", "experience"],
  ["Projects", "projects"],
  ["Skills", "skills"],
  ["Education", "education"],
  ["Contact", "contact"],
];
export default function Navbar() {
  const [active, setActive] = useState("about"),
    [open, setOpen] = useState(false),
    [light, setLight] = useState(false);
  useEffect(() => {
    const o = new IntersectionObserver(
      (es) =>
        es.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        }),
      { rootMargin: "-35% 0px -55% 0px" },
    );
    links.forEach(([, id]) => {
      const e = document.getElementById(id);
      if (e) o.observe(e);
    });
    return () => o.disconnect();
  }, []);
  function theme() {
    setLight((v) => !v);
    document.documentElement.classList.toggle("light");
  }
  return (
    <header className="nav-wrap">
      <nav className="nav container" aria-label="Main navigation">
        <a href="#top" className="brand">
          <b className="monogram">JJ</b>
          <span>
            Jevon Juandy<span className="brand-dot">.</span>
          </span>
        </a>
        <div className={`nav-links ${open ? "is-open" : ""}`}>
          {links.map(([n, id]) => (
            <a
              key={id}
              className={active === id ? "active" : ""}
              href={`#${id}`}
              onClick={() => setOpen(false)}
            >
              {n}
            </a>
          ))}
        </div>
        <div className="nav-actions">
          {profile.github && (
            <a
              className="icon-button"
              href={profile.github}
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
            >
              <Github size={17} />
            </a>
          )}
          <button
            className="icon-button"
            onClick={theme}
            aria-label="Toggle color theme"
          >
            {light ? <Moon size={17} /> : <Sun size={17} />}
          </button>
          <button
            className="icon-button menu-button"
            onClick={() => setOpen(!open)}
            aria-label="Toggle navigation"
          >
            {open ? <X /> : <Menu />}
          </button>
        </div>
      </nav>
    </header>
  );
}
