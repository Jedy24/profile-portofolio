"use client";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { ArrowUpRight, Mail, MapPin, Phone } from "lucide-react";
import { profile } from "@/data/portfolio";
const schema = z.object({
  name: z.string().min(2, "Please enter your name."),
  email: z.email("Enter a valid email address."),
  subject: z.string().min(3, "Add a subject."),
  message: z.string().min(10, "Please write at least 10 characters."),
});
type FormData = z.infer<typeof schema>;
export default function Contact() {
  const [sent, setSent] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({ resolver: zodResolver(schema) });
  async function submit(d: FormData) {
    await new Promise((r) => setTimeout(r, 250));
    window.location.href = `mailto:${profile.email}?subject=${encodeURIComponent(d.subject)}&body=${encodeURIComponent(`From: ${d.name} (${d.email})\n\n${d.message}`)}`;
    setSent(true);
  }
  return (
    <section id="contact" className="section contact-section">
      <div className="container contact-grid">
        <div className="contact-intro">
          <p className="section-kicker">
            <span>08</span> / CONTACT
          </p>
          <h2 className="section-title">
            Let’s build something
            <br />
            <em>great together.</em>
          </h2>
          <p className="contact-copy">
            I'm always interested in connecting with developers, recruiters,
            engineering teams, and people working on meaningful technology
            projects.
          </p>
          <div className="contact-details">
            <a href={`mailto:${profile.email}`}>
              <Mail />
              <span>
                <small>Email</small>
                {profile.email}
              </span>
              <ArrowUpRight />
            </a>
            <a href={`tel:${profile.phone.replaceAll(" ", "")}`}>
              <Phone />
              <span>
                <small>Phone</small>
                {profile.phone}
              </span>
              <ArrowUpRight />
            </a>
            <div>
              <MapPin />
              <span>
                <small>Location</small>
                {profile.location}
              </span>
            </div>
          </div>
        </div>
        <aside className="contact-callout" aria-label="Contact Jevon directly">
          <span className="mono">GOOD WORK STARTS WITH A CONVERSATION</span>
          <div className="callout-orbit" aria-hidden="true">
            <span className="orbit orbit-one" />
            <span className="orbit orbit-two" />
            <span className="orbit-core">JJ</span>
            <i className="orbit-point point-one" />
            <i className="orbit-point point-two" />
          </div>
          <h3>
            Have an idea
            <br />
            worth building?
          </h3>
          <p>Share what you’re working on. I’d be glad to hear about it.</p>
          <a className="button button-primary" href={`mailto:${profile.email}`}>
            Start a conversation <ArrowUpRight size={16} />
          </a>
          <span className="callout-foot mono">
            BANDUNG, INDONESIA <i /> AVAILABLE BY EMAIL
          </span>
        </aside>
        {/* <form className="contact-form" onSubmit={handleSubmit(submit)}>
          <div className="form-top">
            <span className="mono">SEND A NOTE</span>
            <span className="status-indicator">MAILTO FALLBACK</span>
          </div>
          {(
            [
              ["name", "Name", "Your name"],
              ["email", "Email", "you@example.com"],
              ["subject", "Subject", "What would you like to discuss?"],
              ["message", "Message", "Tell me a little about it…"],
            ] as const
          ).map(([key, label, placeholder]) => (
            <label key={key}>
              {label}
              {key === "message" ? (
                <textarea
                  {...register(key)}
                  rows={4}
                  placeholder={placeholder}
                />
              ) : (
                <input
                  {...register(key)}
                  type={key === "email" ? "email" : "text"}
                  placeholder={placeholder}
                />
              )}
              {errors[key] && (
                <small className="error">{errors[key]?.message}</small>
              )}
            </label>
          ))}
          <button className="button button-primary" disabled={isSubmitting}>
            {isSubmitting
              ? "Preparing…"
              : sent
                ? "Open email again"
                : "Open in your email app"}
            <ArrowUpRight size={16} />
          </button>
          <p className="form-note" aria-live="polite">
            {sent
              ? "Your email app should open with the message details filled in."
              : "This form opens your email app. Messages are not sent or stored by this site."}
          </p>
        </form> */}
      </div>
    </section>
  );
}
