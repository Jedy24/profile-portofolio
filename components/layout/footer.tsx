import { Github, Linkedin, Mail, ArrowUpRight } from "lucide-react";
import { profile } from "@/data/portfolio";
export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-main">
        <a href="#top" className="brand">
          <b className="monogram">JJ</b>
          <span>
            Jevon Juandy<span className="brand-dot">.</span>
            <small>Software Engineer · Frontend & Backend Developer</small>
          </span>
        </a>
        <div className="footer-links">
          {[
            ["About", "about"],
            ["Experience", "experience"],
            ["Projects", "projects"],
            ["Contact", "contact"],
          ].map(([n, id]) => (
            <a key={id} href={`#${id}`}>
              {n}
            </a>
          ))}
        </div>
        <div className="footer-social">
          {profile.github && (
            <a href={profile.github} aria-label="GitHub">
              <Github />
            </a>
          )}
          {profile.linkedin && (
            <a href={profile.linkedin} aria-label="LinkedIn">
              <Linkedin />
            </a>
          )}
          <a href={`mailto:${profile.email}`} aria-label="Email">
            <Mail />
          </a>
          <a className="to-top" href="#top">
            Back to top <ArrowUpRight size={14} />
          </a>
        </div>
      </div>
      <div className="container footer-bottom">
        <span>© {new Date().getFullYear()} Jevon Ivander Juandy</span>
        <span>
          Designed & Built with Next.js, TypeScript, and a passion for
          development.
        </span>
      </div>
    </footer>
  );
}
