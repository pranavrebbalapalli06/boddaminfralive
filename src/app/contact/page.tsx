import { Reveal } from "@/components/site/Reveal";
import { BookingCalendar } from "@/components/site/BookingCalendar";
import { Mail, MapPin, Phone } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact — Book a call with Boddam Infra",
  description: "Book a 30-minute conversation with Boddam Infra's engineering leadership. Studios in Hyderabad, Ahmedabad and Dubai.",
  openGraph: {
    title: "Contact — Book a call with Boddam Infra",
    description: "Pick a slot. Bring a brief. We'll bring the right team.",
    url: "/contact",
  },
};

const studios = [
  { city: "Hyderabad", addr: "Plot 14, Hitec Industrial Park, 500081", lead: "Studio HQ · Civil & Transit" },
  { city: "Ahmedabad", addr: "Riverside Tower, Sabarmati, 380009", lead: "Water & Resilience practice" },
  { city: "Dubai", addr: "DIFC Gate Avenue, Level 6, 506801", lead: "Energy & Gulf programs" },
];

export default function ContactPage() {
  return (
    <>
      <section className="bg-background">
        <div className="mx-auto max-w-[1400px] px-6 md:px-10 py-24 md:py-32 grid md:grid-cols-12 gap-12">
          <div className="md:col-span-4">
            <p className="tag-eyebrow">— Contact</p>
            <p className="mt-4 font-tag text-sm text-muted-foreground">Begin in 30 minutes</p>
          </div>
          <div className="md:col-span-8">
            <h1 className="font-display text-6xl md:text-[8rem] leading-[0.88]">
              Bring a brief.
              <br />
              <span className="text-accent italic font-normal" style={{ fontFamily: "Outfit" }}>Pick a slot.</span>
            </h1>
            <p className="mt-10 font-tag font-light text-xl text-muted-foreground max-w-2xl">
              Every engagement begins with a short conversation. Choose a date
              and time below — our principal engineer for the relevant
              discipline will join the call.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-secondary">
        <div className="mx-auto max-w-[1400px] px-6 md:px-10 py-24 grid md:grid-cols-12 gap-12 items-start">
          <Reveal className="md:col-span-7">
            <BookingCalendar />
          </Reveal>

          <div className="md:col-span-5 md:sticky md:top-32 space-y-10">
            <Reveal>
              <div>
                <p className="tag-eyebrow">— What to expect</p>
                <ul className="mt-6 space-y-4">
                  {[
                    "A 30-minute video call with a principal engineer",
                    "A short discussion of scope, timeline and constraints",
                    "Within 5 business days: a written engagement note",
                  ].map((t, i) => (
                    <li key={t} className="flex gap-4">
                      <span className="font-tag text-xs tabular-nums text-accent pt-1">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span className="font-tag font-light text-base text-foreground/80 leading-relaxed">{t}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="bg-background border border-border p-8">
                <p className="tag-eyebrow">— Or reach us directly</p>
                <div className="mt-6 space-y-4">
                  <a href="mailto:studio@boddam.infra" className="flex items-center gap-3 text-sm hover:text-accent transition">
                    <Mail size={16} className="text-accent" /> studio@boddam.infra
                  </a>
                  <a href="tel:+914012345678" className="flex items-center gap-3 text-sm hover:text-accent transition">
                    <Phone size={16} className="text-accent" /> +91 40 1234 5678
                  </a>
                  <p className="flex items-start gap-3 text-sm text-muted-foreground">
                    <MapPin size={16} className="text-accent mt-0.5 shrink-0" />
                    Hitec Industrial Park, Hyderabad — Mon–Fri, 09:00–18:30 IST
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="bg-foreground text-background">
        <div className="mx-auto max-w-[1400px] px-6 md:px-10 py-32">
          <div className="mb-16">
            <p className="tag-eyebrow">— Studios</p>
            <h2 className="mt-6 font-display text-5xl md:text-6xl text-background">Three offices. One practice.</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-px bg-background/10">
            {studios.map((s, i) => (
              <Reveal key={s.city} delay={i * 0.08}>
                <div className="bg-foreground p-10 h-full">
                  <span className="font-tag text-[11px] tracking-[0.24em] uppercase text-accent">{s.lead}</span>
                  <h3 className="mt-6 font-display text-4xl text-background">{s.city}</h3>
                  <p className="mt-4 text-background/60 leading-relaxed">{s.addr}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
