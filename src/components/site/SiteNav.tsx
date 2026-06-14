import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const links = [
  { to: "/", label: "Index" },
  { to: "/about", label: "Practice" },
  { to: "/services", label: "Capabilities" },
  { to: "/projects", label: "Works" },
  { to: "/contact", label: "Contact" },
] as const;

export function SiteNav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500",
        scrolled
          ? "bg-background/80 backdrop-blur-xl border-b border-border"
          : "bg-transparent"
      )}
    >
      <div className="mx-auto flex max-w-[1400px] items-center justify-between px-6 md:px-10 py-4">
        <Link to="/" className="group flex items-center gap-2.5">
          <span className="grid h-8 w-8 place-items-center bg-foreground text-background font-display text-sm">
            B
          </span>
          <div className="leading-none">
            <div className="font-display text-[15px] tracking-tight">BODDAM</div>
            <div className="text-[10px] tracking-[0.28em] text-muted-foreground uppercase">
              Infrastructure
            </div>
          </div>
        </Link>

        <nav className="hidden md:flex items-center gap-1">
          {links.map((l, i) => (
            <Link
              key={l.to}
              to={l.to}
              activeOptions={{ exact: l.to === "/" }}
              className="group relative px-4 py-2 text-[13px] tracking-wide text-foreground/70 hover:text-foreground transition-colors"
              activeProps={{ className: "text-foreground" }}
            >
              <span className="mr-2 text-[10px] text-muted-foreground tabular-nums">
                {String(i + 1).padStart(2, "0")}
              </span>
              {l.label}
              <span className="absolute inset-x-4 -bottom-0.5 h-px scale-x-0 bg-accent transition-transform duration-300 group-hover:scale-x-100 origin-left" />
            </Link>
          ))}
        </nav>

        <Link
          to="/contact"
          className="hidden md:inline-flex items-center gap-2 bg-foreground px-5 py-2.5 text-[12px] tracking-[0.18em] uppercase text-background hover:bg-accent hover:text-accent-foreground transition-colors"
        >
          Book a call
          <span aria-hidden>→</span>
        </Link>

        <button
          className="md:hidden p-2"
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-border bg-background">
          <div className="flex flex-col px-6 py-4">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                onClick={() => setOpen(false)}
                className="py-3 text-sm tracking-wide border-b border-border last:border-0"
              >
                {l.label}
              </Link>
            ))}
            <Link
              to="/contact"
              onClick={() => setOpen(false)}
              className="mt-4 inline-flex items-center justify-center bg-foreground px-5 py-3 text-[12px] tracking-[0.18em] uppercase text-background"
            >
              Book a call
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
