import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { ArrowRight, MapPin } from "lucide-react";
import { Header, Footer, ScrollToTop, PillButton } from "@/components/site-chrome";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Dr. Exten Makwela" },
      {
        name: "description",
        content:
          "Contact us easily online, by phone or by dropping in. Start your path to psychological wellness with our carefully selected specialists.",
      },
      { property: "og:title", content: "Contact — Dr. Exten Makwela" },
      {
        property: "og:description",
        content:
          "Contact us easily online, by phone or by dropping in. Start your path to psychological wellness with our carefully selected specialists.",
      },
    ],
  }),
  component: ContactPage,
});

function FloatingWidgets() {
  return (
    <div className="pointer-events-none fixed right-4 top-1/2 z-40 hidden -translate-y-1/2 flex-col gap-3 md:flex">
      <div className="pointer-events-auto grid h-16 w-16 place-items-center rounded-l-xl bg-[#f36f34] text-white shadow-lg">
        <div className="flex flex-col items-center text-[11px] font-medium">
          <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5 mb-0.5">
            <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.5" />
            <path d="M8 12h8M12 8v8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
          Skins
        </div>
      </div>
      <div className="pointer-events-auto grid h-16 w-16 place-items-center rounded-l-xl bg-[#22c55e] text-white shadow-lg">
        <div className="flex flex-col items-center text-[11px] font-medium">
          <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5 mb-0.5">
            <path
              d="M6 6h13l-1.5 8H8L6 4H3"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <circle cx="9" cy="19" r="1.4" fill="currentColor" />
            <circle cx="17" cy="19" r="1.4" fill="currentColor" />
          </svg>
          Buy Now
        </div>
      </div>
    </div>
  );
}

const LOCATIONS = [
  {
    name: "Apple Valley",
    address: ["14960 Florence Trail", "Apple Valley, MN 55124"],
    open: ["Monday-Sunday,", "9am-7pm EST"],
    img: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1200&q=80",
  },
  {
    name: "White Bear Lake",
    address: ["2401 East Buffalo St.", "White Bear Lake, MN 55110"],
    open: ["Monday-Sunday,", "9am-7pm EST"],
    img: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1200&q=80",
  },
];

function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) return;
    console.log("Contact form submitted:", form);
    setSent(true);
    setForm({ name: "", email: "", message: "" });
    setTimeout(() => setSent(false), 4000);
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <FloatingWidgets />

      {/* 1. Hero */}
      <section className="soft-bg">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 py-16 md:py-24">
          <div className="grid lg:grid-cols-2 gap-10 items-center rounded-[2rem] bg-alternate overflow-hidden">
            <div className="p-8 md:p-14 lg:p-16">
              <h1 className="text-[2.5rem] md:text-[3.75rem] leading-[1.05]">
                <span className="italic-serif font-medium">Contact us</span> easily
                online, by phone or by dropping In
              </h1>
              <p className="mt-6 text-[17px] text-text max-w-lg">
                Start your path to psychological wellness with our thoroughly
                selected specialists.
              </p>
              <div className="mt-10 flex flex-wrap items-center gap-8">
                <PillButton variant="primary" as="a" href="#ask">
                  Refer a Patient
                </PillButton>
                <div className="flex items-center gap-5">
                  <span className="h-10 w-px bg-border" />
                  <div>
                    <p className="eyebrow">Give us a call:</p>
                    <p className="mt-1 text-xl text-secondary font-medium">
                      + 0800 2336 7811
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="h-full min-h-[380px] lg:min-h-[520px] bg-[url('https://images.unsplash.com/photo-1541199249251-f713e6145474?auto=format&fit=crop&w=1200&q=80')] bg-cover bg-center" />
          </div>
        </div>
      </section>

      {/* 2. Contact Information + Map */}
      <section className="soft-bg">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 py-20 md:py-28 grid lg:grid-cols-2 gap-14 items-start">
          <div>
            <h2 className="text-[2.25rem] md:text-[3rem] leading-[1.05]">
              Contact <br />
              Information
            </h2>
            <p className="mt-6 text-[16px] text-text max-w-md">
              Learn more about our clinic and doctors and why they are trusted by
              so many families in our community.
            </p>
            <div className="mt-10 grid grid-cols-2 gap-8 max-w-md">
              <div>
                <p className="eyebrow">Address:</p>
                <p className="mt-3 text-secondary">
                  14960 Florence Trail
                  <br />
                  Apple Valley, MN
                  <br />
                  55124
                </p>
              </div>
              <div>
                <p className="eyebrow">Open:</p>
                <p className="mt-3 text-secondary">
                  Monday-Sunday,
                  <br />
                  9am-7pm EST
                </p>
              </div>
            </div>
          </div>
          <div className="relative rounded-[1.75rem] overflow-hidden shadow-[0_25px_60px_-25px_rgba(25,13,57,0.2)] bg-[#e9e9e9] aspect-[16/11]">
            <div
              className="absolute inset-0 bg-cover bg-center opacity-90"
              style={{
                backgroundImage:
                  "url('https://maps.googleapis.com/maps/api/staticmap?center=51.5033,-0.1195&zoom=15&size=1200x800&scale=2&style=feature:all|saturation:-100')",
              }}
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <MapPin className="h-10 w-10 text-secondary/70" />
            </div>
            <div className="absolute bottom-0 inset-x-0 bg-secondary/85 text-white text-center text-sm px-6 py-4">
              This is a placeholder map for demonstration purposes.
              <br />
              To display a real Google Map, use the Google Maps widget
            </div>
          </div>
        </div>
      </section>

      {/* 3. All Locations */}
      <section className="soft-bg">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 py-20 md:py-28">
          <h2 className="text-center text-[2.25rem] md:text-[3.5rem]">
            All Locations
          </h2>
          <div className="mt-14 grid md:grid-cols-2 gap-8">
            {LOCATIONS.map((loc) => (
              <div key={loc.name}>
                <div className="rounded-[1.75rem] overflow-hidden aspect-[4/3]">
                  <img
                    src={loc.img}
                    alt={loc.name}
                    className="h-full w-full object-cover"
                    loading="lazy"
                  />
                </div>
                <h3 className="mt-8 text-[2rem]">{loc.name}</h3>
                <div className="mt-6 grid grid-cols-2 gap-6 max-w-lg">
                  <div>
                    <p className="eyebrow">Address:</p>
                    <p className="mt-3 text-secondary">
                      {loc.address.map((l) => (
                        <span key={l}>
                          {l}
                          <br />
                        </span>
                      ))}
                    </p>
                  </div>
                  <div>
                    <p className="eyebrow">Open:</p>
                    <p className="mt-3 text-secondary">
                      {loc.open.map((l) => (
                        <span key={l}>
                          {l}
                          <br />
                        </span>
                      ))}
                    </p>
                  </div>
                </div>
                <a
                  href="#"
                  className="group mt-6 inline-flex items-center gap-2 text-secondary font-medium hover:text-tertiary transition-colors"
                >
                  Get Directions
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Ask a Question */}
      <section id="ask" className="soft-bg">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 py-20 md:py-28 grid lg:grid-cols-2 gap-14 items-center">
          <div className="rounded-[1.75rem] overflow-hidden aspect-[4/5]">
            <img
              src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=1000&q=80"
              alt="Contact us"
              className="h-full w-full object-cover"
              loading="lazy"
            />
          </div>
          <div>
            <h2 className="text-[2.25rem] md:text-[3.5rem] leading-[1.05]">
              Ask a Question
            </h2>
            <p className="mt-6 text-[16px] text-text max-w-md">
              If you have any questions, you can contact us. Please, fill out the
              form below.
            </p>
            <form onSubmit={submit} className="mt-10 space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label className="eyebrow block mb-2" htmlFor="c-name">
                    Name
                  </label>
                  <input
                    id="c-name"
                    type="text"
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="w-full rounded-full bg-background border border-border px-6 py-3.5 text-secondary focus:outline-none focus:border-secondary transition-colors"
                  />
                </div>
                <div>
                  <label className="eyebrow block mb-2" htmlFor="c-email">
                    E-mail
                  </label>
                  <input
                    id="c-email"
                    type="email"
                    required
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="w-full rounded-full bg-background border border-border px-6 py-3.5 text-secondary focus:outline-none focus:border-secondary transition-colors"
                  />
                </div>
              </div>
              <div>
                <label className="eyebrow block mb-2" htmlFor="c-msg">
                  Your Message
                </label>
                <textarea
                  id="c-msg"
                  required
                  rows={6}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="w-full rounded-[1.5rem] bg-background border border-border px-6 py-4 text-secondary focus:outline-none focus:border-secondary transition-colors resize-none"
                />
              </div>
              <div className="pt-2">
                <PillButton variant="primary" type="submit">
                  {sent ? "Message Sent" : "Send Message"}
                </PillButton>
              </div>
            </form>
          </div>
        </div>
      </section>

      <Footer />
      <ScrollToTop />
    </div>
  );
}
