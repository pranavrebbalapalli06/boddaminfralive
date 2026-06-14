import Link from "next/link";
import { Reveal } from "@/components/site/Reveal";
import { ArrowUpRight } from "lucide-react";
import bridgeImg from "@/assets/project-bridge.jpg";
import waterImg from "@/assets/project-water.jpg";
import solarImg from "@/assets/project-solar.jpg";
import heroImg from "@/assets/hero-infra.jpg";
import steelImg from "@/assets/texture-steel.jpg";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Selected Works — Boddam Infra",
  description: "A curated index of bridges, energy, water and transit programs engineered by Boddam Infra across India, South Asia and the Gulf.",
  openGraph: {
    title: "Selected Works — Boddam Infra",
    description: "Bridges, solar parks, desalination blocks and metro systems — the practice's recent portfolio.",
    url: "/projects",
    // We cannot use imported image objects directly in metadata.openGraph.images.
    // We need to pass the URL string. In Next.js, imported images have a .src string.
    images: [{ url: bridgeImg.src }],
  },
};

const projects = [
  { tag: "Bridge", year: "2024", title: "Kaveri Cable-Stay Crossing", loc: "Karnataka, IN", scope: "1.8 km cable-stay bridge with 320 m main span", img: bridgeImg.src, span: "wide" },
  { tag: "Water", year: "2023", title: "Coastal Desalination Block-04", loc: "Gujarat, IN", scope: "200 MLD SWRO desalination plant", img: waterImg.src, span: "tall" },
  { tag: "Energy", year: "2025", title: "Saurya 480 MW Solar Park", loc: "Rajasthan, IN", scope: "Utility-scale PV with 220 kV interconnection", img: solarImg.src, span: "wide" },
  { tag: "Transit", year: "2022", title: "NH-44 Elevated Viaduct Package-7", loc: "Telangana, IN", scope: "26 km segmental viaduct system", img: heroImg.src, span: "tall" },
  { tag: "Industrial", year: "2024", title: "Khor Fakkan Steel Terminal", loc: "Sharjah, AE", scope: "Deep-water steel handling terminal", img: steelImg.src, span: "wide" },
];

export default function ProjectsPage() {
  return (
    <>
      <section className="bg-background">
        <div className="mx-auto max-w-[1400px] px-6 md:px-10 py-24 md:py-32">
          <div className="grid md:grid-cols-12 gap-12">
            <div className="md:col-span-4">
              <p className="tag-eyebrow">— Selected works</p>
              <p className="mt-4 font-tag text-sm text-muted-foreground tabular-nums">42 completed · 11 in delivery</p>
            </div>
            <div className="md:col-span-8">
              <h1 className="font-display text-6xl md:text-[8.5rem] leading-[0.88]">
                The portfolio,
                <br />
                <span className="text-accent italic font-normal" style={{ fontFamily: "Outfit" }}>up close.</span>
              </h1>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-background pb-32">
        <div className="mx-auto max-w-[1400px] px-6 md:px-10 space-y-32">
          {projects.map((p, i) => (
            <Reveal key={p.title}>
              <article
                className={`grid grid-cols-1 md:grid-cols-12 gap-10 items-start ${i % 2 ? "md:[&>figure]:order-2" : ""}`}
              >
                <figure className="md:col-span-7 group relative overflow-hidden bg-muted">
                  <div className={p.span === "tall" ? "aspect-[4/5]" : "aspect-[16/10]"}>
                    <img
                      src={p.img}
                      alt={p.title}
                      loading="lazy"
                      width={1600}
                      height={1200}
                      className="h-full w-full object-cover transition-transform duration-[1600ms] ease-out group-hover:scale-105"
                    />
                  </div>
                  <div className="absolute top-4 left-4 bg-background/90 backdrop-blur px-3 py-1.5 text-[10px] tracking-[0.22em] uppercase">
                    N° {String(i + 1).padStart(2, "0")}
                  </div>
                </figure>

                <div className="md:col-span-5 md:sticky md:top-32">
                  <p className="font-tag text-[11px] tracking-[0.28em] uppercase text-accent">
                    {p.tag} · {p.year}
                  </p>
                  <h2 className="mt-4 font-display text-4xl md:text-5xl">{p.title}</h2>
                  <p className="mt-3 text-muted-foreground">{p.loc}</p>
                  <p className="mt-8 font-tag font-light text-lg leading-relaxed text-foreground/80">
                    {p.scope}.
                  </p>
                  <div className="mt-8 grid grid-cols-3 gap-6 border-t border-border pt-6">
                    <div>
                      <p className="font-tag text-[10px] tracking-[0.22em] uppercase text-muted-foreground">Discipline</p>
                      <p className="mt-1 font-display text-sm">{p.tag}</p>
                    </div>
                    <div>
                      <p className="font-tag text-[10px] tracking-[0.22em] uppercase text-muted-foreground">Year</p>
                      <p className="mt-1 font-display text-sm">{p.year}</p>
                    </div>
                    <div>
                      <p className="font-tag text-[10px] tracking-[0.22em] uppercase text-muted-foreground">Region</p>
                      <p className="mt-1 font-display text-sm">{p.loc.split(",")[1]?.trim()}</p>
                    </div>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="bg-secondary">
        <div className="mx-auto max-w-[1400px] px-6 md:px-10 py-24 flex flex-col md:flex-row items-start md:items-end justify-between gap-8">
          <h2 className="font-display text-4xl md:text-6xl max-w-2xl">
            Looking for a specific case study?
          </h2>
          <Link href="/contact" className="inline-flex items-center gap-3 bg-foreground px-7 py-4 text-[12px] tracking-[0.22em] uppercase text-background hover:bg-accent hover:text-accent-foreground transition">
            Request the index <ArrowUpRight size={16} />
          </Link>
        </div>
      </section>
    </>
  );
}
