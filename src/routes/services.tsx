import { createFileRoute, Link } from "@tanstack/react-router";
import { Reveal } from "@/components/site/Reveal";
import { ArrowUpRight, Building2, CircuitBoard, Droplets, Mountain, TramFront, Wind } from "lucide-react";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Capabilities — Boddam Infra" },
      { name: "description", content: "Civil & structural engineering, energy & grid, water, transit and geotechnical services for infrastructure programs of national consequence." },
      { property: "og:title", content: "Capabilities — Boddam Infra" },
      { property: "og:description", content: "Six engineering disciplines, delivered as one practice. From feasibility to handover." },
      { property: "og:url", content: "/services" },
    ],
    links: [{ rel: "canonical", href: "/services" }],
  }),
  component: ServicesPage,
});

const services = [
  { i: Building2, k: "01", t: "Civil & Structural", tag: "Bridges · Viaducts · Buildings",
    d: "Long-span bridges, complex viaducts, seismic retrofits and high-rise structural systems delivered from concept through construction supervision.",
    items: ["Cable-stay & extradosed bridges", "Pre-cast segmental viaducts", "Seismic isolation systems", "Forensic structural review"] },
  { i: CircuitBoard, k: "02", t: "Energy & Grid", tag: "Solar · Transmission · Storage",
    d: "Utility-scale renewables, grid interconnection, substation engineering and BESS integration for IPPs and sovereign utilities.",
    items: ["PV plants up to 1 GW", "400 kV transmission corridors", "GIS / AIS substations", "Battery storage integration"] },
  { i: Droplets, k: "03", t: "Water & Wastewater", tag: "Desalination · Treatment · Networks",
    d: "Coastal desalination, municipal treatment, conveyance and smart-network engineering — designed for the climate realities of the next century.",
    items: ["SWRO desalination plants", "Tertiary treatment & reuse", "Bulk water conveyance", "SCADA & leak detection"] },
  { i: TramFront, k: "04", t: "Transit & Mobility", tag: "Metros · Highways · Ports",
    d: "Metro systems, intercity expressways, freight corridors, ports and intermodal terminals delivered as integrated mobility programs.",
    items: ["Elevated & underground metro", "DBFOT highway packages", "Port master planning", "Multimodal terminals"] },
  { i: Mountain, k: "05", t: "Geotechnical", tag: "Ground · Foundations · Tunnels",
    d: "Site investigation, deep foundations, ground improvement and tunnel design — the discipline that decides whether infrastructure lasts.",
    items: ["TBM & NATM tunnels", "Marine pile design", "Slope stabilisation", "Liquefaction mitigation"] },
  { i: Wind, k: "06", t: "Climate & Resilience", tag: "Coastal · Flood · Carbon",
    d: "Resilience engineering for coastal, flood and seismic risk — and embodied-carbon strategy for low-emission infrastructure.",
    items: ["Coastal protection works", "Urban flood masterplans", "Embodied carbon audits", "Climate stress-testing"] },
];

const process = [
  { k: "01", t: "Brief & feasibility", d: "Six weeks. We model the program from first principles before quoting a fee." },
  { k: "02", t: "Concept & engineering", d: "Three to nine months of integrated design across civil, energy or transit disciplines." },
  { k: "03", t: "Detailed design", d: "Tender-grade documentation, BIM coordination and constructability review." },
  { k: "04", t: "Construction supervision", d: "Senior engineers resident on site through the full build-out and commissioning." },
];

function ServicesPage() {
  return (
    <>
      <section className="bg-background">
        <div className="mx-auto max-w-[1400px] px-6 md:px-10 py-24 md:py-32 grid grid-cols-1 md:grid-cols-12 gap-12">
          <div className="md:col-span-4">
            <p className="tag-eyebrow">— Capabilities</p>
            <p className="mt-4 font-tag text-sm text-muted-foreground tabular-nums">06 disciplines · One practice</p>
          </div>
          <div className="md:col-span-8">
            <h1 className="font-display text-6xl md:text-[8rem] leading-[0.88]">
              From brief
              <br />
              to <span className="text-accent italic font-normal" style={{ fontFamily: "Outfit" }}>handover</span>.
            </h1>
            <p className="mt-10 font-tag font-light text-xl text-muted-foreground max-w-2xl">
              We integrate civil, energy, water, transit, geotechnical and
              resilience engineering under one roof — so programs of national
              consequence get a single accountable team.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-secondary">
        <div className="mx-auto max-w-[1400px] px-6 md:px-10 py-24">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-border">
            {services.map((s, i) => (
              <Reveal key={s.k} delay={(i % 2) * 0.08}>
                <div className="group bg-background p-10 md:p-14 h-full flex flex-col">
                  <div className="flex items-center justify-between">
                    <s.i size={32} strokeWidth={1.2} className="text-foreground group-hover:text-accent transition" />
                    <span className="font-tag text-[11px] tracking-[0.24em] uppercase text-muted-foreground">N° {s.k}</span>
                  </div>
                  <p className="mt-10 font-tag text-[11px] tracking-[0.24em] uppercase text-accent">{s.tag}</p>
                  <h3 className="mt-3 font-display text-4xl">{s.t}</h3>
                  <p className="mt-4 text-muted-foreground leading-relaxed">{s.d}</p>
                  <ul className="mt-6 space-y-2">
                    {s.items.map((it) => (
                      <li key={it} className="flex items-center gap-3 text-sm">
                        <span className="h-px w-4 bg-accent" />
                        <span className="text-foreground/80">{it}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-foreground text-background">
        <div className="mx-auto max-w-[1400px] px-6 md:px-10 py-32">
          <div className="grid md:grid-cols-12 gap-12 mb-20">
            <div className="md:col-span-4">
              <p className="tag-eyebrow">— Engagement</p>
            </div>
            <div className="md:col-span-8">
              <h2 className="font-display text-5xl md:text-7xl text-background">How we work.</h2>
            </div>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {process.map((p, i) => (
              <Reveal key={p.k} delay={i * 0.08}>
                <div className="border-t border-background/30 pt-6 h-full">
                  <div className="font-display text-5xl text-accent">{p.k}</div>
                  <h3 className="mt-8 font-display text-2xl text-background">{p.t}</h3>
                  <p className="mt-3 text-background/60 leading-relaxed text-sm">{p.d}</p>
                </div>
              </Reveal>
            ))}
          </div>

          <div className="mt-20 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pt-10 border-t border-background/10">
            <p className="font-tag font-light text-xl text-background/80 max-w-xl">
              Have a brief that fits one of these capabilities? Start with a
              30-minute conversation.
            </p>
            <Link to="/contact" className="inline-flex items-center gap-3 bg-accent px-7 py-4 text-[12px] tracking-[0.22em] uppercase text-accent-foreground hover:bg-background hover:text-foreground transition">
              Book a call <ArrowUpRight size={16} />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
