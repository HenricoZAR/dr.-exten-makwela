import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { ArrowRight } from "lucide-react";
import { Header, Footer, ScrollToTop, PillButton } from "@/components/site-chrome";
import contactTop from "@/assets/contact-page-top.jpg.asset.json";
import contactBottom from "@/assets/contact-page-bottom.jpg.asset.json";

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

const LOCATIONS = [
  {
    name: "Polokwane",
    address: ["Seshego-B, Polokwane, 0742"],
    open: ["Monday – Friday,", "8am – 6pm SAST"],
    mapEmbed:
      "https://www.google.com/maps?q=Seshego-B,+Polokwane,+0742&output=embed",
    directions: "https://maps.app.goo.gl/15Lc4j3MNB6npPvB9",
  },
  {
    name: "Midrand",
    address: ["563 Old Pretoria Rd,", "Halfway House, Midrand, 1685"],
    open: ["Monday – Friday,", "8am – 6pm SAST"],
    mapEmbed:
      "https://www.google.com/maps?q=563+Old+Pretoria+Rd,+Halfway+House,+Midrand,+1685&output=embed",
    directions: "https://maps.app.goo.gl/rrDUtwGqiuKRjKAH7",
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

      {/* 1. Hero */}
      <section className="soft-bg">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 py-16 md:py-24">
          <div className="grid lg:grid-cols-2 gap-10 items-center rounded-[2rem] bg-alternate overflow-hidden">
            <div className="p-8 md:p-14 lg:p-16">
              <h1 className="text-[2.5rem] md:text-[3.75rem] leading-[1.05]">
                <span className="italic-serif font-medium">Contact us</span> easily
                online, by phone or by dropping in
              </h1>
              <p className="mt-6 text-[17px] text-text max-w-lg">
                Start your path to psychological wellness with our carefully
                selected specialists.
              </p>
              <div className="mt-10 flex flex-wrap items-center gap-8">
                <PillButton variant="primary" as="a" href="#ask">
                  Call Us Today
                </PillButton>
                <div className="flex items-center gap-5">
                  <span className="h-10 w-px bg-border" />
                  <div>
                    <p className="eyebrow">Give us a call:</p>
                    <p className="mt-1 text-xl text-secondary font-medium">
                      +27 (0)11 781 3495
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="h-full min-h-[380px] lg:min-h-[520px] bg-cover bg-center"
              style={{ backgroundImage: `url('${contactTop.url}')` }}
            />
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
              Learn more about our practice and why we are trusted by so many
              individuals and families in our community.
            </p>
            <div className="mt-10 grid grid-cols-2 gap-8 max-w-md">
              <div>
                <p className="eyebrow">Address:</p>
                <p className="mt-3 text-secondary">
                  Isibalo House, Koch Street
                  <br />
                  Salvokop, Pretoria, 0002
                </p>
              </div>
              <div>
                <p className="eyebrow">Open:</p>
                <p className="mt-3 text-secondary">
                  Monday – Friday,
                  <br />
                  8am – 6pm SAST
                </p>
              </div>
            </div>
          </div>
          <div className="relative rounded-[1.75rem] overflow-hidden shadow-[0_25px_60px_-25px_rgba(25,13,57,0.2)] aspect-[16/11]">
            <iframe
              title="Isibalo House, Salvokop, Pretoria"
              src="https://www.google.com/maps?q=Isibalo+House,+Koch+Street,+Salvokop,+Pretoria,+0002&output=embed"
              className="absolute inset-0 h-full w-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
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
                  <iframe
                    title={loc.name}
                    src={loc.mapEmbed}
                    className="h-full w-full border-0"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
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
                  href={loc.directions}
                  target="_blank"
                  rel="noopener noreferrer"
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
              src={contactBottom.url}
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
