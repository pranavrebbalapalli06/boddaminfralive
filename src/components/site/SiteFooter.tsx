import Link from "next/link";

export function SiteFooter() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-foreground text-background">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10 py-20">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          <div className="md:col-span-5">
            <p className="font-tag text-[11px] tracking-[0.28em] uppercase text-accent">
              Boddam Infra · Est. 2009
            </p>
            <h2 className="mt-6 font-display text-5xl md:text-7xl text-background">
              Build what
              <br />
              outlasts us.
            </h2>
            <p className="mt-8 max-w-md text-background/60 leading-relaxed">
              An engineering practice shaping bridges, energy, water and
              transit infrastructure across three continents.
            </p>
          </div>

          <div className="md:col-span-3">
            <div className="font-tag text-[11px] tracking-[0.24em] uppercase text-background/40">
              Navigate
            </div>
            <ul className="mt-5 space-y-3 text-sm">
              <li><Link href="/about" className="hover:text-accent transition">About Us</Link></li>
              <li><Link href="/services" className="hover:text-accent transition">Services</Link></li>
              <li><Link href="/projects" className="hover:text-accent transition">Projects</Link></li>
              <li><Link href="/contact" className="hover:text-accent transition">Contact</Link></li>
            </ul>
          </div>

          <div className="md:col-span-4">
            <div className="font-tag text-[11px] tracking-[0.24em] uppercase text-background/40">
              Studio
            </div>
            <address className="mt-5 not-italic text-sm text-background/70 leading-relaxed">
              Plot 14, Hitec Industrial Park<br />
              Hyderabad 500081 · India<br />
              <a className="hover:text-accent" href="mailto:studio@boddam.infra">studio@boddam.infra</a><br />
              <a className="hover:text-accent" href="tel:+914012345678">+91 40 1234 5678</a>
            </address>
          </div>
        </div>

        <div className="mt-20 pt-6 border-t border-background/10 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 text-[11px] tracking-[0.18em] uppercase text-background/40">
          <div>© {year} Boddam Infrastructure Pvt. Ltd.</div>
          <div className="flex gap-6">
            <span>ISO 9001 · 14001 · 45001</span>
            <span>CIN U45200TG2009PTC</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
