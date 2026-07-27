import { useState, type FormEvent } from "react";
import { PageTransition } from "@/components/layout/PageTransition";
import { Reveal } from "@/components/Reveal";
import { Button } from "@/components/ui/button";
import { brand, contact, services } from "@/data/content";
import { cn } from "@/lib/utils";

const OTHER_OPTION = "Something else";

const inputClasses = cn(
  "w-full rounded-lg border border-border bg-transparent px-4 py-3 text-body text-foreground",
  "placeholder:text-muted-foreground/60 transition-colors",
  "focus:outline-none focus:ring-2 focus:ring-signal/50 focus:border-signal"
);

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [interest, setInterest] = useState(services[0]?.name ?? OTHER_OPTION);
  const [message, setMessage] = useState("");

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const subject = `New inquiry from ${name || "a prospective client"}`;
    const bodyLines = [
      `Name: ${name}`,
      `Email: ${email}`,
      `Interested in: ${interest}`,
      "",
      "Message:",
      message,
    ];
    const mailtoLink = `mailto:${brand.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(
      bodyLines.join("\n")
    )}`;

    window.location.href = mailtoLink;
  }

  return (
    <PageTransition>
      <section aria-labelledby="contact-heading" className="pt-32 pb-section-lg px-gutter">
        <div className="mx-auto max-w-3xl">
          <Reveal className="max-w-2xl">
            <span className="text-caption uppercase tracking-[0.25em] text-signal">Contact</span>
            <h1 id="contact-heading" className="mt-4 font-display text-display-l text-foreground">
              {contact.headline}
            </h1>
            <p className="mt-6 text-body-lg text-muted-foreground">{contact.subhead}</p>
          </Reveal>

          <Reveal delay={0.1}>
            <form
              onSubmit={handleSubmit}
              className="mt-10 space-y-5"
              noValidate
              aria-label="Contact form"
            >
              <div>
                <label htmlFor="contact-name" className="mb-2 block text-body-sm text-muted-foreground">
                  Name
                </label>
                <input
                  id="contact-name"
                  name="name"
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Your name"
                  className={inputClasses}
                />
              </div>

              <div>
                <label htmlFor="contact-email" className="mb-2 block text-body-sm text-muted-foreground">
                  Email
                </label>
                <input
                  id="contact-email"
                  name="email"
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@company.com"
                  className={inputClasses}
                />
              </div>

              <div>
                <label htmlFor="contact-interest" className="mb-2 block text-body-sm text-muted-foreground">
                  What are you interested in?
                </label>
                <select
                  id="contact-interest"
                  name="interest"
                  value={interest}
                  onChange={(e) => setInterest(e.target.value)}
                  className={cn(inputClasses, "appearance-none")}
                >
                  {services.map((s) => (
                    <option key={s.slug} value={s.name}>
                      {s.name}
                    </option>
                  ))}
                  <option value={OTHER_OPTION}>{OTHER_OPTION}</option>
                </select>
              </div>

              <div>
                <label htmlFor="contact-message" className="mb-2 block text-body-sm text-muted-foreground">
                  Message
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  required
                  rows={6}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Tell us about your business and where it's headed."
                  className={cn(inputClasses, "resize-none")}
                />
              </div>

              <div>
                <Button
                  type="submit"
                  variant="default"
                  size="lg"
                  aria-describedby="contact-submit-hint"
                >
                  {contact.formCtaLabel}
                </Button>
                <p id="contact-submit-hint" className="mt-3 text-body-sm text-muted-foreground">
                  Opens your email app with this message pre-filled, addressed to {brand.email}.
                </p>
              </div>
            </form>
          </Reveal>

          <Reveal delay={0.15}>
            <p className="mt-10 border-t border-border pt-6 text-body text-muted-foreground">
              Prefer to write directly?{" "}
              <a
                href={`mailto:${brand.email}`}
                className="text-foreground underline decoration-border underline-offset-4 transition-colors hover:decoration-signal"
              >
                {brand.email}
              </a>
            </p>
          </Reveal>
        </div>
      </section>
    </PageTransition>
  );
}
