import { Reveal } from "@/components/site/Reveal";
import aboutImg from "@/assets/about-team.jpg";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Practice — Boddam Infra",
  description: "Boddam Infra is a 240-person engineering practice delivering bridges, energy, water and transit infrastructure across three continents.",
  openGraph: {
    title: "Practice — Boddam Infra",
    description: "Sixteen years. Forty-two programs. Three continents. Meet the engineering practice behind Boddam Infra.",
    url: "/about",
    images: [{ url: "/og-about.jpg" }],
  },
};

const principles = [
  { k: "01", t: "Engineering certainty", d: "Every load path, every weld, every kilometre is signed off by a chartered engineer before it leaves our office." },
  { k: "02", t: "Architectural ambition", d: "Infrastructure is read by the public for a century. We design for the eye as carefully as for the load case." },
  { k: "03", t: "Patient capital", d: "We accept commissions that take seven years. The slow work is the work that lasts." },
  { k: "04", t: "Civic responsibility", d: "Roads, grids and water are common goods. We treat them as instruments of public trust." },
];

const timeline = [
  { y: "2009", t: "Founded in Hyderabad with a single bridge contract on the NH-44 corridor." },
  { y: "2013", t: "First international commission: viaduct system for the Colombo Outer Circular Highway." },
  { y: "2017", t: "Energy division established; awarded 240 MW solar park, Rajasthan." },
  { y: "2021", t: "Open dedicated water & desalination practice in Ahmedabad." },
  { y: "2024", t: "Crossed 3.4B USD of infrastructure under active engineering management." },
];

export default function AboutPage() {
  return (
    <>
      <section className="bg-background">
        <div className="mx-auto max-w-[1400px] px-6 md:px-10 py-24 md:py-32 grid grid-cols-1 md:grid-cols-12 gap-12">
          <div className="md:col-span-3">
            <p className="tag-eyebrow">— Practice</p>
            <p className="mt-4 font-tag text-sm text-muted-foreground">Boddam Infrastructure Pvt. Ltd.</p>
          </div>
          <div className="md:col-span-9">
            <h1 className="font-display text-6xl md:text-[8.5rem] leading-[0.88]">
              Sixteen years.<br />
              <span className="text-accent italic font-normal" style={{ fontFamily: "Outfit" }}>One conviction.</span>
            </h1>
          </div>
        </div>
      </section>

      <section className="bg-background">
        <div className="mx-auto max-w-[1400px] px-6 md:px-10 pb-32 grid grid-cols-1 md:grid-cols-12 gap-12">
          <Reveal className="md:col-span-7">
            <div className="aspect-[4/3] overflow-hidden bg-muted">
              <img src={aboutImg.src} alt="Engineer reviewing blueprints on site" className="h-full w-full object-cover" width={1600} height={1200} loading="lazy" />
            </div>
          </Reveal>
          <div className="md:col-span-5 flex flex-col justify-center gap-6">
            <p className="tag-eyebrow">— Who we are</p>
            <p className="font-tag font-light text-xl leading-relaxed text-foreground">
              We are engineers, designers, hydrologists, geotechnical
              specialists and project leaders. We work on the structures
              cities depend on long after the ribbon-cutting.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Our office is deliberately mid-sized — large enough to deliver
              sovereign-scale programs, small enough that a partner is
              personally accountable for every commission. We take fewer
              projects than our peers and stay on them longer.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-foreground text-background">
        <div className="mx-auto max-w-[1400px] px-6 md:px-10 py-32">
          <div className="mb-20">
            <p className="tag-eyebrow">— Principles</p>
            <h2 className="mt-6 font-display text-5xl md:text-7xl text-background max-w-3xl">Four ideas we don&apos;t compromise.</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-px bg-background/10">
            {principles.map((p, i) => (
              <Reveal key={p.k} delay={i * 0.06}>
                <div className="bg-foreground p-10 md:p-14 h-full">
                  <div className="flex items-baseline justify-between">
                    <span className="font-tag text-[11px] tracking-[0.24em] uppercase text-accent">Principle {p.k}</span>
                  </div>
                  <h3 className="mt-8 font-display text-3xl md:text-4xl text-background">{p.t}</h3>
                  <p className="mt-5 text-background/60 leading-relaxed max-w-md">{p.d}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-background">
        <div className="mx-auto max-w-[1400px] px-6 md:px-10 py-32 grid grid-cols-1 md:grid-cols-12 gap-12">
          <div className="md:col-span-4">
            <p className="tag-eyebrow">— Trajectory</p>
            <h2 className="mt-6 font-display text-5xl md:text-6xl">A slow, deliberate climb.</h2>
          </div>
          <div className="md:col-span-8 space-y-px bg-border">
            {timeline.map((t, i) => (
              <Reveal key={t.y} delay={i * 0.05}>
                <div className="bg-background py-8 grid grid-cols-12 items-baseline gap-6">
                  <div className="col-span-3 md:col-span-2 font-display text-3xl text-accent tabular-nums">{t.y}</div>
                  <p className="col-span-9 md:col-span-10 font-tag font-light text-lg leading-relaxed text-foreground">{t.t}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
