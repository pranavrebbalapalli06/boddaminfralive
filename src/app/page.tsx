"use client";

import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ArrowUpRight, Compass, Layers, Zap } from "lucide-react";
import heroImg from "@/assets/hero-infra.jpg";
import bridgeImg from "@/assets/project-bridge.jpg";
import waterImg from "@/assets/project-water.jpg";
import solarImg from "@/assets/project-solar.jpg";
import steelImg from "@/assets/texture-steel.jpg";
import { Reveal } from "@/components/site/Reveal";

const capabilities = [
  { icon: Layers, k: "01", t: "Civil & Structural", d: "Bridges, viaducts, retaining systems and seismic retrofits." },
  { icon: Zap, k: "02", t: "Energy & Grid", d: "Solar, transmission corridors and substation engineering." },
  { icon: Compass, k: "03", t: "Transit & Mobility", d: "Metros, expressways, ports and intermodal terminals." },
];

const works = [
  { tag: "Bridge / 2024", title: "Kaveri Cable-Stay Crossing", loc: "Karnataka, IN", img: bridgeImg.src },
  { tag: "Water / 2023", title: "Coastal Desalination Block-04", loc: "Gujarat, IN", img: waterImg.src },
  { tag: "Energy / 2025", title: "Saurya 480 MW Solar Park", loc: "Rajasthan, IN", img: solarImg.src },
];

export default function IndexPage() {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const titleY = useTransform(scrollYProgress, [0, 1], [0, -80]);

  return (
    <>
      {/* HERO — layered parallax */}
      <section ref={heroRef} className="relative -mt-20 h-[110vh] overflow-hidden bg-foreground">
        <motion.div style={{ y, opacity }} className="absolute inset-0">
          <img
            src={heroImg.src}
            alt="Concrete viaduct under construction at dusk with cranes"
            className="h-full w-full object-cover opacity-80"
            width={1920}
            height={1280}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-foreground/40 via-foreground/20 to-background" />
        </motion.div>

        <motion.div
          style={{ y: titleY }}
          className="relative z-10 mx-auto flex h-full max-w-[1400px] flex-col justify-end px-6 md:px-10 pb-24 text-background"
        >
          <div className="flex items-center gap-3 mb-8">
            <span className="h-px w-12 bg-accent" />
            <span className="font-tag text-[11px] tracking-[0.32em] uppercase text-accent">
              Boddam Infra · Since 2009
            </span>
          </div>

          <h1 className="font-display text-[14vw] md:text-[9vw] leading-[0.88]">
            Engineering
            <br />
            the <span className="text-accent italic font-normal" style={{ fontFamily: "Outfit" }}>structures</span>
            <br />
            that move nations.
          </h1>

          <div className="mt-12 flex flex-col md:flex-row md:items-end md:justify-between gap-8">
            <p className="max-w-md text-background/70 font-tag font-light leading-relaxed">
              We design and deliver bridges, energy, water and transit
              infrastructure — built for performance measured in decades, not
              quarters.
            </p>

            <div className="flex items-center gap-4">
              <Link
                href="/projects"
                className="group inline-flex items-center gap-3 bg-background px-6 py-4 text-[12px] tracking-[0.22em] uppercase text-foreground hover:bg-accent hover:text-accent-foreground transition-colors"
              >
                View selected works
                <ArrowUpRight size={16} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
              <Link
                href="/contact"
                className="text-[12px] tracking-[0.22em] uppercase text-background/80 hover:text-accent transition-colors border-b border-background/30 pb-1"
              >
                Book a call →
              </Link>
            </div>
          </div>
        </motion.div>

        <div className="absolute bottom-6 right-6 z-10 text-[10px] tracking-[0.28em] uppercase text-background/50 hidden md:block">
          Scroll · Project N°01
        </div>
      </section>

      {/* MARQUEE STRIP */}
      <section className="border-y border-border bg-background py-5 overflow-hidden">
        <div className="flex marquee-track whitespace-nowrap gap-16 font-display text-2xl text-foreground/80">
          {Array.from({ length: 2 }).map((_, i) => (
            <div key={i} className="flex shrink-0 items-center gap-16">
              {["Bridges", "Energy", "Water", "Transit", "Smart Cities", "Ports", "Highways"].map((w) => (
                <span key={w} className="flex items-center gap-16">
                  {w}
                  <span className="text-accent">◆</span>
                </span>
              ))}
            </div>
          ))}
        </div>
      </section>

      {/* INTRO STATEMENT */}
      <section className="bg-background">
        <div className="mx-auto max-w-[1400px] px-6 md:px-10 py-32 md:py-48 grid grid-cols-1 md:grid-cols-12 gap-12">
          <div className="md:col-span-3">
            <p className="tag-eyebrow">— Practice</p>
            <p className="mt-4 font-tag text-sm text-muted-foreground tabular-nums">N° 01 · 04</p>
          </div>
          <Reveal className="md:col-span-9">
            <h2 className="font-display text-5xl md:text-7xl leading-[0.95]">
              A practice for clients who measure success
              <span className="text-accent italic font-normal" style={{ fontFamily: "Outfit" }}> in decades</span>,
              not quarters.
            </h2>
            <div className="mt-12 grid md:grid-cols-2 gap-12">
              <p className="text-muted-foreground leading-relaxed font-tag font-light text-lg">
                Boddam Infra is a 240-person engineering practice working at the
                intersection of civil, energy and transit infrastructure.
                We are commissioned by governments, sovereign funds and
                industrial groups when the brief calls for both technical
                certainty and architectural ambition.
              </p>
              <p className="text-muted-foreground leading-relaxed font-tag font-light text-lg">
                Sixteen years in. Forty-two completed programs. Three
                continents. A single conviction: infrastructure is the slowest,
                most consequential form of design — and it deserves the same
                care as the buildings that sit on top of it.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* CAPABILITIES — layered cards */}
      <section className="relative bg-foreground text-background overflow-hidden">
        <img src={steelImg.src} alt="" className="absolute inset-0 h-full w-full object-cover opacity-20" loading="lazy" />
        <div className="absolute inset-0 bg-gradient-to-b from-foreground via-foreground/95 to-foreground" />
        <div className="relative mx-auto max-w-[1400px] px-6 md:px-10 py-32">
          <div className="flex items-end justify-between mb-20">
            <div>
              <p className="tag-eyebrow">— Capabilities</p>
              <h2 className="mt-6 font-display text-5xl md:text-6xl text-background max-w-3xl">
                Three disciplines.<br />One engineering language.
              </h2>
            </div>
            <Link href="/services" className="hidden md:inline-flex items-center gap-2 text-[12px] tracking-[0.22em] uppercase text-background/70 hover:text-accent transition">
              All capabilities →
            </Link>
          </div>

          <div className="grid md:grid-cols-3 gap-px bg-background/10">
            {capabilities.map((c, i) => (
              <Reveal key={c.k} delay={i * 0.08}>
                <div className="group relative bg-foreground p-10 h-full min-h-[360px] flex flex-col justify-between hover:bg-background/5 transition-colors">
                  <div>
                    <div className="flex items-center justify-between">
                      <c.icon size={28} className="text-accent" strokeWidth={1.25} />
                      <span className="font-tag text-xs text-background/40 tabular-nums">{c.k}</span>
                    </div>
                    <h3 className="mt-12 font-display text-3xl text-background">{c.t}</h3>
                    <p className="mt-4 text-background/60 leading-relaxed">{c.d}</p>
                  </div>
                  <div className="mt-8 flex items-center gap-2 text-[11px] tracking-[0.24em] uppercase text-accent opacity-0 group-hover:opacity-100 transition">
                    Explore <ArrowUpRight size={14} />
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* SELECTED WORKS — staggered tall cards */}
      <section className="bg-background">
        <div className="mx-auto max-w-[1400px] px-6 md:px-10 py-32">
          <div className="flex items-end justify-between mb-16">
            <div>
              <p className="tag-eyebrow">— Selected works</p>
              <h2 className="mt-6 font-display text-5xl md:text-6xl">Recent commissions.</h2>
            </div>
            <Link href="/projects" className="hidden md:inline-flex items-center gap-2 text-[12px] tracking-[0.22em] uppercase text-foreground/70 hover:text-accent transition">
              Full index →
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-10">
            {works.map((w, i) => (
              <Reveal key={w.title} delay={i * 0.1} className={i === 1 ? "md:translate-y-16" : ""}>
                <Link href="/projects" className="group block">
                  <div className="aspect-[4/5] overflow-hidden bg-muted">
                    <img
                      src={w.img}
                      alt={w.title}
                      loading="lazy"
                      width={1600}
                      height={1200}
                      className="h-full w-full object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-105"
                    />
                  </div>
                  <div className="mt-5 flex items-start justify-between">
                    <div>
                      <p className="font-tag text-[11px] tracking-[0.24em] uppercase text-accent">{w.tag}</p>
                      <h3 className="mt-2 font-display text-xl">{w.title}</h3>
                      <p className="text-sm text-muted-foreground mt-1">{w.loc}</p>
                    </div>
                    <ArrowUpRight size={20} className="mt-1 text-foreground/40 transition group-hover:text-accent group-hover:-translate-y-0.5" />
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* STATS / NUMBERS */}
      <section className="bg-secondary">
        <div className="mx-auto max-w-[1400px] px-6 md:px-10 py-24 grid grid-cols-2 md:grid-cols-4 gap-10">
          {[
            { n: "16", l: "Years in practice" },
            { n: "42", l: "Programs delivered" },
            { n: "3.4B", l: "USD under management" },
            { n: "240", l: "Engineers & designers" },
          ].map((s, i) => (
            <Reveal key={s.l} delay={i * 0.06}>
              <div>
                <div className="font-display text-6xl md:text-7xl text-foreground">{s.n}</div>
                <p className="mt-3 font-tag text-[11px] tracking-[0.24em] uppercase text-muted-foreground">{s.l}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-background">
        <div className="mx-auto max-w-[1400px] px-6 md:px-10 py-32">
          <div className="grid md:grid-cols-12 gap-12 items-end">
            <div className="md:col-span-8">
              <p className="tag-eyebrow">— Begin a conversation</p>
              <h2 className="mt-6 font-display text-6xl md:text-8xl leading-[0.9]">
                Have a brief?<br />
                <span className="text-accent italic font-normal" style={{ fontFamily: "Outfit" }}>Bring it.</span>
              </h2>
            </div>
            <div className="md:col-span-4">
              <p className="text-muted-foreground font-tag font-light leading-relaxed mb-6">
                Most engagements begin with a 30-minute conversation. Pick a
                time and we will be ready with the right team.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-3 bg-foreground px-7 py-4 text-[12px] tracking-[0.22em] uppercase text-background hover:bg-accent hover:text-accent-foreground transition"
              >
                Book a call <ArrowUpRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
