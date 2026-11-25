"use client";
import { useState } from "react";
import Image from "next/image";
import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  Activity,
  Layers3,
  Database,
  Radio,
  Code2,
  Server,
  Globe2,
  Workflow,
  ShieldCheck,
  Mail,
  MapPin,
  Phone,
  X,
  ExternalLink,
} from "lucide-react";
import {
  profile,
  capabilities,
  experience,
  projects,
  skills,
  education,
  certifications,
  organization,
} from "@/data/portfolio";
import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";
import Contact from "@/components/sections/contact";
const iconSet = [Code2, Server, Workflow, Layers3, Database, Radio];
function Heading({
  num,
  label,
  title,
  sub,
}: {
  num: string;
  label: string;
  title: string;
  sub?: string;
}) {
  return (
    <div className="section-heading">
      <p className="section-kicker">
        <span>{num}</span> / {label}
      </p>
      <h2 className="section-title">{title}</h2>
      {sub && <p className="section-subtitle">{sub}</p>}
    </div>
  );
}
export default function Portfolio() {
  const [modal, setModal] = useState<string | null>(null);
  const selected = projects.find((p) => p.id === modal);
  return (
    <>
      <Navbar />
      <main id="top">
        <section className="hero container">
          <div className="hero-copy">
            <p className="eyebrow">
              <i /> HELLO, I'M JEVON
            </p>
            <h1>
              Building reliable systems
              <br /> & meaningful{" "}
              <em>
                digital
                <br /> experiences.
              </em>
            </h1>
            <p className="hero-name">{profile.name}</p>
            <div className="role-line">
              <strong>Software Engineer</strong>
              <span>·</span>
              {profile.specialties}
            </div>
            <p className="hero-description">{profile.description}</p>
            <div className="hero-facts">
              <span>
                <MapPin />
                Bandung, Indonesia
              </span>
              <span>
                <span className="fact-dot" />
                Informatics Engineering · GPA 3.93
              </span>
              <span>
                <span className="fact-dot" />
                Professional freelance experience
              </span>
            </div>
            <div className="hero-buttons">
              <a className="button button-primary" href="#projects">
                Explore my projects <ArrowRight size={16} />
              </a>
              <a
                className="button button-secondary"
                href={profile.cv}
                target="_blank"
              >
                Download CV <ArrowDown size={15} />
              </a>
              <a className="text-link" href="#contact">
                Contact me <ArrowUpRight size={15} />
              </a>
            </div>
          </div>
          <div
            className="architecture"
            aria-label="Illustration of connected frontend, API, backend and database systems"
          >
            <div className="arch-top">
              <span className="live-dot" /> SYSTEM MAP <span>01 — 04</span>
            </div>
            <div className="arch-canvas">
              <div className="arch-lines">
                <i />
                <i />
                <i />
                <i />
                <i />
                <i />
              </div>
              <div className="arch-node node-ui">
                <Code2 />
                <b>Frontend</b>
                <small>Interfaces · UX</small>
              </div>
              <div className="arch-node node-api">
                <Globe2 />
                <b>REST API</b>
                <small>Auth · Integration</small>
              </div>
              <div className="arch-node node-services">
                <Server />
                <b>Services</b>
                <small>Business logic</small>
              </div>
              <div className="arch-node node-data">
                <Database />
                <b>Data layer</b>
                <small>SQL · Redis</small>
              </div>
              <div className="arch-chip chip-ai">✳ OpenAI</div>
              <div className="arch-chip chip-events">↔ Realtime</div>
              <div className="arch-chip chip-secure">
                <ShieldCheck /> Secure by design
              </div>
            </div>
            <div className="arch-bottom">
              <span>APPLICATION ARCHITECTURE</span>
              <span className="mono">CONNECTED SYSTEMS / V1</span>
            </div>
          </div>
          <a className="scroll-cue" href="#about">
            <span>SCROLL TO EXPLORE</span>
            <ArrowDown size={14} />
          </a>
        </section>
        <section className="section" id="about">
          <div className="container">
            <Heading num="01" label="ABOUT" title="Engineering with purpose." />
            <div className="about-layout">
              <div className="about-copy">
                <p>
                  I'm a Software Engineering graduate from STMIK LIKMI with
                  freelance experience as a Backend Developer and Frontend
                  Developer.
                </p>
                <p>
                  My experience includes developing AI-powered platforms,
                  RESTful APIs, enterprise applications, authentication systems,
                  payment integrations, real-time collaborative applications,
                  and data-driven platforms.
                </p>
                <p>
                  I enjoy solving complex development challenges, designing
                  maintainable architectures, and building applications that are
                  both functional and scalable. Good software means
                  understanding systems, solving problems, and delivering
                  reliable solutions.
                </p>
                <a className="text-link" href="#experience">
                  Explore my experience <ArrowRight size={15} />
                </a>
              </div>
              <div className="capability-grid">
                {capabilities.map((c, i) => {
                  const Icon = iconSet[i];
                  return (
                    <article className="capability" key={c[0]}>
                      <div className="cap-top">
                        <span className="mono">{c[0]}</span>
                        <Icon size={18} />
                      </div>
                      <h3>{c[1]}</h3>
                      <p>{c[2]}</p>
                    </article>
                  );
                })}
              </div>
            </div>
          </div>
        </section>
        <section className="section section-alt" id="experience">
          <div className="container">
            <Heading
              num="02"
              label="EXPERIENCE"
              title="Professional experience"
              sub="Selected work across AI education, university systems, and enterprise software."
            />
            <div className="timeline">
              {experience.map((e, i) => (
                <article className="timeline-item" key={e.project}>
                  <div className="timeline-rail">
                    <span>{String(i + 1).padStart(2, "0")}</span>
                    <i />
                  </div>
                  <div className="experience-card">
                    <div className="experience-head">
                      <div>
                        <p className="company-label">{e.company}</p>
                        <h3>{e.role}</h3>
                      </div>
                      <span className="period">{e.period}</span>
                    </div>
                    <h4>{e.project}</h4>
                    <p className="techline">{e.tech}</p>
                    <ul>
                      {e.points.map((p) => (
                        <li key={p}>{p}</li>
                      ))}
                    </ul>
                    {e.links.length > 0 && (
                      <div className="inline-links">
                        {e.links.map(([n, url]) => (
                          <a
                            key={n}
                            href={url}
                            target="_blank"
                            rel="noreferrer"
                          >
                            {n}
                            <ExternalLink size={13} />
                          </a>
                        ))}
                      </div>
                    )}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
        <section className="section" id="projects">
          <div className="container">
            <Heading
              num="03"
              label="SELECTED WORK"
              title="Projects with purpose."
              sub="A mix of professional delivery and independent engineering explorations."
            />
            <div className="project-grid">
              {projects.map((p, i) => (
                <article className={`project-card project-${p.id}`} key={p.id}>
                  <div className={`project-visual visual-${p.kind}`}>
                    {p.kind === "image" ? (
                      <Image
                        src={p.image!}
                        alt={`${p.name} project reference`}
                        fill
                        sizes="(max-width: 800px) 100vw, 50vw"
                        className="project-image"
                      />
                    ) : p.kind === "chart" ? (
                      <ChartPreview />
                    ) : (
                      <KanbanPreview />
                    )}
                    <span className="project-index">0{i + 1} / PROJECT</span>
                  </div>
                  <div className="project-content">
                    <div className="project-meta">
                      <span>{p.category}</span>
                      <span className="project-status">
                        <i />
                        {p.status}
                      </span>
                    </div>
                    <h3>{p.name}</h3>
                    <p className="project-subtitle">{p.subtitle}</p>
                    <p className="project-description">{p.description}</p>
                    <div className="tag-list">
                      {p.tech.map((t) => (
                        <span key={t}>{t}</span>
                      ))}
                    </div>
                    <div className="project-actions">
                      {p.links?.map(([n, url]) => (
                        <a
                          key={n}
                          className="text-link"
                          href={url}
                          target="_blank"
                          rel="noreferrer"
                        >
                          {n}
                          <ArrowUpRight size={15} />
                        </a>
                      ))}
                      <button
                        className="text-link"
                        onClick={() => setModal(p.id)}
                      >
                        {p.kind === "image"
                          ? "Project details"
                          : p.id === "future-stock"
                            ? "View technical overview"
                            : "Explore architecture"}
                        <ArrowRight size={15} />
                      </button>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
        <section className="section section-alt" id="skills">
          <div className="container">
            <Heading
              num="04"
              label="TECHNOLOGIES"
              title="Tools I work with."
              sub="Technologies and tools I use to develop modern applications and reliable systems."
            />
            <div className="skills-grid">
              {Object.entries(skills).map(([group, items], i) => (
                <div className="skill-group" key={group}>
                  <span className="mono skill-index">0{i + 1}</span>
                  <h3>{group}</h3>
                  <div className="tag-list">
                    {items.map((s) => (
                      <span key={s}>{s}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        <section className="section" id="education">
          <div className="container">
            <Heading num="05" label="EDUCATION" title="Academic background." />
            <div className="education-list">
              {education.map((e, i) => (
                <article className="education-item" key={e.school}>
                  <span className="mono edu-index">0{i + 1}</span>
                  <div>
                    <h3>{e.school}</h3>
                    <p className="education-degree">
                      {e.degree}
                      {e.major ? ` · ${e.major}` : ""}
                    </p>
                    {e.description && <p className="muted">{e.description}</p>}
                    <span className="muted">{e.location}</span>
                  </div>
                  <div className="education-right">
                    <span>{e.period}</span>
                    {e.gpa && (
                      <strong>
                        {e.gpa}
                        <small> GPA</small>
                      </strong>
                    )}
                  </div>
                </article>
              ))}
            </div>
            <div className="cert-area">
              <div>
                <p className="section-kicker">
                  <span>06</span> / CERTIFICATIONS
                </p>
                <h3>Learning, in practice.</h3>
              </div>
              <div className="cert-list">
                {certifications.map((c, i) => (
                  <div key={c}>
                    <span className="mono">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    {c}
                    <ArrowUpRight size={14} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
        <section className="section section-alt" id="leadership">
          <div className="container leadership">
            <div>
              <p className="section-kicker">
                <span>07</span> / LEADERSHIP
              </p>
              <h2 className="section-title">
                Community
                <br />
                <em>and service.</em>
              </h2>
            </div>
            <article className="leadership-card">
              <div className="experience-head">
                <div>
                  <h3>{organization.name}</h3>
                  <p className="techline">{organization.roles.join(" · ")}</p>
                </div>
                <span className="period">{organization.period}</span>
              </div>
              <ul>
                {organization.points.map((p) => (
                  <li key={p}>{p}</li>
                ))}
              </ul>
            </article>
          </div>
        </section>
        <Contact />
      </main>
      {selected && (
        <div
          className="modal-backdrop"
          role="presentation"
          onClick={() => setModal(null)}
        >
          <section
            className="detail-modal"
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-title"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="modal-close icon-button"
              onClick={() => setModal(null)}
              aria-label="Close details"
            >
              <X />
            </button>
            <span className="section-kicker">TECHNICAL OVERVIEW</span>
            <h2 id="modal-title">{selected.name}</h2>
            <p className="project-description">{selected.description}</p>
            <h3>Engineering highlights</h3>
            <ul>
              {selected.highlights.map((x) => (
                <li key={x}>{x}</li>
              ))}
            </ul>
            <div className="tag-list">
              {selected.tech.map((t) => (
                <span key={t}>{t}</span>
              ))}
            </div>
            <p className="modal-status">
              {selected.status} · No public demo link is available.
            </p>
          </section>
        </div>
      )}
      <Footer />
    </>
  );
}
function ChartPreview() {
  return (
    <div className="chart-preview">
      <div className="chart-head">
        <span>
          FUTURE STOCK <small>· MARKET OVERVIEW</small>
        </span>
        <span className="chart-date">EOD / ANALYTICS</span>
      </div>
      <div className="chart-stat">
        <strong>Fundamental screening</strong>
        <span>
          MODEL PIPELINE <i />
        </span>
      </div>
      <div className="chart-area">
        <div className="chart-gridlines">
          <i />
          <i />
          <i />
          <i />
        </div>
        <svg
          viewBox="0 0 600 180"
          preserveAspectRatio="none"
          aria-label="Illustrative financial chart"
        >
          <defs>
            <linearGradient id="fill" x1="0" x2="0" y1="0" y2="1">
              <stop offset="0" stopColor="#8985ff" stopOpacity=".28" />
              <stop offset="1" stopColor="#8985ff" stopOpacity="0" />
            </linearGradient>
          </defs>
          <path
            d="M0 142 C38 130 48 102 80 115 S122 90 153 111 S193 85 224 96 S267 68 300 82 S342 47 370 69 S408 61 442 70 S480 34 509 50 S553 22 600 30 L600 180 L0 180Z"
            fill="url(#fill)"
          />
          <path
            d="M0 142 C38 130 48 102 80 115 S122 90 153 111 S193 85 224 96 S267 68 300 82 S342 47 370 69 S408 61 442 70 S480 34 509 50 S553 22 600 30"
            fill="none"
            stroke="#9a96ff"
            strokeWidth="3"
          />
        </svg>
      </div>
      <div className="chart-foot">
        <span>
          <i className="purple-dot" /> PRICE SIGNAL
        </span>
        <span>
          SCREENERS <b>VALUATION · MOMENTUM</b>
        </span>
      </div>
      <div className="chart-metrics">
        <span>
          DATA PIPELINE <b>VALIDATED</b>
        </span>
        <span>
          MODELS <b>RF / LOGISTIC</b>
        </span>
        <span>
          HORIZON <b>3–5 YEARS</b>
        </span>
      </div>
    </div>
  );
}
function KanbanPreview() {
  return (
    <div className="kanban-preview">
      <div className="kanban-top">
        <span>
          COLLAB TASK <small>WORKSPACE / PRODUCT</small>
        </span>
        <span className="presence">
          <i /> 4 online
        </span>
      </div>
      <div className="kanban-columns">
        {[
          ["TO DO", ["Plan API contracts", "Review onboarding flow"]],
          ["IN PROGRESS", ["Realtime presence", "Workspace settings"]],
          ["REVIEW", ["Notification service"]],
          ["DONE", ["Auth refresh flow"]],
        ].map(([col, tasks]) => (
          <div className="kanban-column" key={col as string}>
            <span>
              {col as string}
              <b>{(tasks as string[]).length}</b>
            </span>
            {(tasks as string[]).map((task, i) => (
              <article key={task}>
                <small>{i === 0 ? "ENGINEERING" : "PRODUCT"}</small>
                <b>{task}</b>
                <div>
                  <i className={i % 2 ? "avatar avatar-blue" : "avatar"} />
                  <span>•••</span>
                </div>
              </article>
            ))}
          </div>
        ))}
      </div>
      <div className="kanban-caption">
        <i /> Illustrative product preview · Socket.IO realtime sync
      </div>
    </div>
  );
}
