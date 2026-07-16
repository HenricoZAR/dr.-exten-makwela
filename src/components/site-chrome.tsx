import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import {
  Menu,
  X,
  Search,
  ArrowRight,
  ArrowUp,
  ChevronDown,
  Facebook,
  Instagram,
  Twitter,
} from "lucide-react";
import logoColour from "@/assets/exten-makwela-logo-colour.svg.asset.json";
import logoWhite from "@/assets/exten-makwela-logo-white.svg.asset.json";

export const SERVICES_DROPDOWN: { label: string; to: string }[] = [
  { label: "Anxiety", to: "/anxiety-therapy" },
  { label: "Relationships", to: "/" },
  { label: "Eating Disorders", to: "/" },
  { label: "Depression", to: "/" },
  { label: "Trauma", to: "/" },
  { label: "Childhood Abuse", to: "/" },
];

const NAV: { label: string; hasMenu: boolean; to?: string; href?: string }[] = [
  { label: "Home", hasMenu: true, to: "/" },
  { label: "About Us", hasMenu: false, to: "/about-us" },
  { label: "Services", hasMenu: true },
  { label: "Contact", hasMenu: false, to: "/contact" },
  { label: "Blog", hasMenu: false, href: "/#mindfulness-blog" },
];

export function Logo({ dark = false }: { dark?: boolean }) {
  return (
    <Link to="/" className="flex items-center">
      <img
        src={dark ? logoWhite.url : logoColour.url}
        alt="Dr. Exten Makwela"
        className="h-10 w-auto"
      />
    </Link>
  );
}

export function PillButton({
  children,
  variant = "primary",
  as: As = "button",
  ...rest
}: {
  children: React.ReactNode;
  variant?: "primary" | "dark" | "outline" | "outline-light";
  as?: React.ElementType;
  [k: string]: any;
}) {
  const base =
    "group inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-medium transition-all duration-300";
  const styles: Record<string, string> = {
    primary: "bg-primary text-secondary hover:bg-secondary hover:text-primary",
    dark: "bg-secondary text-white hover:bg-primary hover:text-secondary",
    outline:
      "border border-secondary text-secondary hover:bg-secondary hover:text-white",
    "outline-light":
      "border border-white/40 text-white hover:bg-white hover:text-secondary",
  };
  return (
    <As className={`${base} ${styles[variant]}`} {...rest}>
      <span>{children}</span>
      <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
    </As>
  );
}

export function Header() {
  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 bg-background/90 backdrop-blur-md border-b border-border/60">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 py-5 grid grid-cols-[auto_1fr_auto] items-center gap-6">
        <Logo />
        <nav className="hidden lg:flex items-center justify-center gap-8">
          {NAV.map((n) => {
            if (n.label === "Services") {
              return (
                <div
                  key={n.label}
                  className="relative"
                  onMouseEnter={() => setServicesOpen(true)}
                  onMouseLeave={() => setServicesOpen(false)}
                >
                  <button className="flex items-center gap-1 text-sm font-medium text-secondary hover:text-tertiary transition-colors">
                    {n.label}
                    <ChevronDown className="h-3.5 w-3.5" />
                  </button>
                  {servicesOpen && (
                    <div className="absolute left-1/2 -translate-x-1/2 top-full pt-3 min-w-[220px]">
                      <div className="rounded-2xl bg-background border border-border shadow-[0_20px_60px_-20px_rgba(25,13,57,0.25)] py-3">
                        {SERVICES_DROPDOWN.map((s) => (
                          <Link
                            key={s.label}
                            to={s.to}
                            className="block px-5 py-2 text-sm text-secondary hover:bg-alternate transition-colors"
                          >
                            {s.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              );
            }
            return (
              n.href ? (
                <a
                  key={n.label}
                  href={n.href}
                  className="flex items-center gap-1 text-sm font-medium text-secondary hover:text-tertiary transition-colors"
                >
                  {n.label}
                  {n.hasMenu && <ChevronDown className="h-3.5 w-3.5" />}
                </a>
              ) : (
                <Link
                  key={n.label}
                  to={n.to || "/"}
                  className="flex items-center gap-1 text-sm font-medium text-secondary hover:text-tertiary transition-colors"
                >
                  {n.label}
                  {n.hasMenu && <ChevronDown className="h-3.5 w-3.5" />}
                </Link>
              )
            );
          })}
        </nav>
        <div className="flex items-center gap-4">
          <button
            aria-label="Search"
            className="hidden sm:grid h-10 w-10 place-items-center rounded-full text-secondary hover:bg-alternate"
          >
            <Search className="h-5 w-5" />
          </button>
          <PillButton variant="dark" as="a" href="/#contact">
            Get Started
          </PillButton>
          <button
            className="lg:hidden grid h-10 w-10 place-items-center rounded-full text-secondary"
            onClick={() => setOpen(!open)}
            aria-label="Menu"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>
      {open && (
        <div className="lg:hidden border-t border-border bg-background">
          <div className="px-6 py-4 flex flex-col gap-3">
            {NAV.map((n) =>
              n.label === "Services" ? (
                <div key={n.label} className="py-1">
                  <p className="py-2 text-secondary font-medium">Services</p>
                  <div className="pl-4 flex flex-col">
                    {SERVICES_DROPDOWN.map((s) => (
                      <Link
                        key={s.label}
                        to={s.to}
                        className="py-1.5 text-sm text-secondary/80"
                      >
                        {s.label}
                      </Link>
                    ))}
                  </div>
                </div>
              ) : n.href ? (
                <a key={n.label} href={n.href} className="py-2 text-secondary">
                  {n.label}
                </a>
              ) : (
                <Link key={n.label} to={n.to || "/"} className="py-2 text-secondary">
                  {n.label}
                </Link>
              )
            )}
          </div>
        </div>
      )}
    </header>
  );
}

function FooterCol({ title, items }: { title: string; items: string[] }) {
  return (
    <div>
      <h4 className="text-white text-2xl">{title}</h4>
      <ul className="mt-6 space-y-3">
        {items.map((i) => (
          <li key={i}>
            <a
              href="#"
              className="text-white/70 hover:text-primary transition-colors text-[15px] inline-flex items-center gap-1"
            >
              {i}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function Footer() {
  return (
    <footer className="bg-secondary text-white/80">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 py-20 grid md:grid-cols-2 lg:grid-cols-4 gap-12">
        <div>
          <Logo dark />
          <p className="mt-6 text-white/70 max-w-xs text-[15px]">
            Start your path to psychological wellness with our carefully selected specialists.
          </p>
          <form onSubmit={(e) => e.preventDefault()} className="mt-8 relative max-w-sm">
            <input
              type="email"
              required
              placeholder="Email*"
              className="w-full rounded-full bg-white/5 border border-white/15 pl-6 pr-14 py-3.5 text-white placeholder:text-white/50 focus:outline-none focus:border-white/40"
            />
            <button
              aria-label="Subscribe"
              className="absolute right-1.5 top-1.5 grid h-10 w-10 place-items-center rounded-full bg-white text-secondary hover:bg-primary transition-colors"
            >
              <ArrowRight className="h-4 w-4" />
            </button>
          </form>
        </div>
        <div>
          <h4 className="text-white text-2xl">Pages</h4>
          <ul className="mt-6 space-y-3">
            {[
              { label: "About Us", to: "/about-us" as const },
              { label: "Our Services", to: "/" as const },
              { label: "Blog", to: "/" as const },
              { label: "Contacts", to: "/" as const },
              { label: "Shop", to: "/" as const },
              { label: "Image Credits", to: "/" as const },
            ].map((i) => (
              <li key={i.label}>
                <Link
                  to={i.to}
                  className="text-white/70 hover:text-primary transition-colors text-[15px] inline-flex items-center gap-1"
                >
                  {i.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <FooterCol
          title="Services"
          items={[
            "Anxiety",
            "Relationships",
            "Eating Disorders",
            "Depression",
            "Trauma",
            "Childhood Abuse",
          ]}
        />
        <FooterCol
          title="Therapists"
          items={[
            "Mark Hoffman",
            "Anne Middleton",
            "Whitney Pratt",
            "Jane Goodman",
            "Martha Ruiz",
            "Kate Adams",
          ]}
        />
      </div>
      <div className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 py-6 flex flex-wrap items-center justify-between gap-4">
          <p className="text-white/60 text-sm">
            © {new Date().getFullYear()} Dr. Exten Makwela. All Rights Reserved.
          </p>
          <div className="flex items-center gap-3">
            {[Facebook, Instagram, Twitter].map((Icon, i) => (
              <a
                key={i}
                href="#"
                className="grid h-10 w-10 place-items-center rounded-full bg-white text-secondary hover:bg-primary transition-colors"
                aria-label="Social"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

export function ScrollToTop() {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400);
    window.addEventListener("scroll", onScroll);
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      aria-label="Scroll to top"
      className={`fixed bottom-6 right-6 z-50 grid h-12 w-12 place-items-center rounded-full bg-white border-2 shadow-lg transition-all duration-300 hover:bg-primary ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 pointer-events-none translate-y-4"
      }`}
      style={{ borderColor: "#fcda98" }}
    >
      <ArrowUp className="h-5 w-5" style={{ color: "#190d39" }} />
    </button>
  );
}
