import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import { ArrowRight, ChevronDown, Calendar, Clock, Star } from "lucide-react";
import { Header, Footer, ScrollToTop, PillButton } from "@/components/site-chrome";
import anxietySvg from "@/assets/anxiety.svg.asset.json";
import relationshipsSvg from "@/assets/relationships.svg.asset.json";
import eatingSvg from "@/assets/eating_disorders.svg.asset.json";
import depressionSvg from "@/assets/depression.svg.asset.json";
import aboutHero from "@/assets/about-us-page-1.png.asset.json";
import aboutMid from "@/assets/about-us-page-2.png.asset.json";
import leratoImg from "@/assets/lerato-m.jpg.asset.json";
import thaboImg from "@/assets/thabo-k.jpg.asset.json";
import priyaImg from "@/assets/priya-s.jpg.asset.json";
import michaelImg from "@/assets/michael-n.jpg.asset.json";


export const Route = createFileRoute("/about-us")({
  head: () => ({
    meta: [
      { title: "About Us — Dr. Exten Makwela" },
      {
        name: "description",
        content:
          "Learn about our clinic, our professional team and the conditions we help our clients overcome.",
      },
      { property: "og:title", content: "About Us — Dr. Exten Makwela" },
      {
        property: "og:description",
        content:
          "Learn about our clinic, our professional team and the conditions we help our clients overcome.",
      },
    ],
  }),
  component: AboutUsPage,
});

/* ---------------- Date/Time pickers (mirrors /anxiety-therapy) ---------------- */

function PickerCol({
  values,
  selected,
  onSelect,
}: {
  values: (number | string)[];
  selected: number | string | null;
  onSelect: (v: any) => void;
}) {
  return (
    <div className="max-h-48 overflow-y-auto flex flex-col gap-1">
      {values.map((v) => (
        <button
          key={v}
          type="button"
          onClick={() => onSelect(v)}
          className={`rounded-md py-1.5 text-sm transition-colors ${
            selected === v
              ? "bg-primary text-secondary font-medium"
              : "text-secondary hover:bg-alternate"
          }`}
        >
          {typeof v === "number" ? String(v).padStart(2, "0") : v}
        </button>
      ))}
    </div>
  );
}

function DatePickerField() {
  const [open, setOpen] = useState(false);
  const [month, setMonth] = useState<number | null>(null);
  const [day, setDay] = useState<number | null>(null);
  const [year, setYear] = useState<number | null>(null);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function onDoc(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    }
    document.addEventListener("mousedown", onDoc);
    return () => document.removeEventListener("mousedown", onDoc);
  }, []);

  const label =
    month && day && year
      ? `${String(month).padStart(2, "0")} / ${String(day).padStart(2, "0")} / ${year}`
      : "Select Date";

  return (
    <div ref={ref} className="relative">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="w-full flex items-center justify-between rounded-full border border-border bg-background px-6 py-3.5 text-left text-secondary hover:border-secondary transition-colors"
      >
        <span className="inline-flex items-center gap-3">
          <Calendar className="h-4 w-4 text-tertiary" />
          <span className={label === "Select Date" ? "text-tertiary" : ""}>{label}</span>
        </span>
        <ChevronDown className="h-4 w-4 text-tertiary" />
      </button>
      {open && (
        <div className="absolute z-30 mt-2 w-full rounded-2xl border border-border bg-background shadow-[0_20px_60px_-20px_rgba(25,13,57,0.25)] p-3">
          <div className="grid grid-cols-3 gap-2 text-center">
            <p className="eyebrow py-1">Month</p>
            <p className="eyebrow py-1">Day</p>
            <p className="eyebrow py-1">Year</p>
            <PickerCol
              values={Array.from({ length: 12 }, (_, i) => i + 1)}
              selected={month}
              onSelect={setMonth}
            />
            <PickerCol
              values={Array.from({ length: 31 }, (_, i) => i + 1)}
              selected={day}
              onSelect={setDay}
            />
            <PickerCol values={[2026]} selected={year} onSelect={setYear} />
          </div>
        </div>
      )}
    </div>
  );
}

function TimePickerField({ placeholder = "Select" }: { placeholder?: string }) {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState<string | null>(null);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function onDoc(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    }
    document.addEventListener("mousedown", onDoc);
    return () => document.removeEventListener("mousedown", onDoc);
  }, []);

  const options = ["08", "09", "10", "11", "12", "Online"];

  return (
    <div ref={ref} className="relative">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="w-full flex items-center justify-between rounded-full border border-border bg-background px-6 py-3.5 text-left text-secondary hover:border-secondary transition-colors"
      >
        <span className="inline-flex items-center gap-3">
          <Clock className="h-4 w-4 text-tertiary" />
          <span className={value ? "" : "text-tertiary"}>{value ?? placeholder}</span>
        </span>
        <ChevronDown className="h-4 w-4 text-tertiary" />
      </button>
      {open && (
        <div className="absolute z-30 mt-2 w-full rounded-2xl border border-border bg-background shadow-[0_20px_60px_-20px_rgba(25,13,57,0.25)] p-2">
          {options.map((o) => (
            <button
              key={o}
              type="button"
              onClick={() => {
                setValue(o);
                setOpen(false);
              }}
              className={`w-full rounded-lg px-4 py-2 text-left text-sm transition-colors ${
                value === o
                  ? "bg-primary text-secondary font-medium"
                  : "text-secondary hover:bg-alternate"
              }`}
            >
              {o}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

/* ---------------- Data ---------------- */

const TEAM = [
  { name: "Mark Hoffman", role: "Neuropsychology" },
  { name: "Anne Middleton", role: "Clinical Psychology" },
  { name: "Whitney Pratt", role: "Child Psychiatry" },
  { name: "Jane Goodman", role: "Neuropsychology" },
];

const CONDITIONS = [
  { label: "Anxiety", to: "/anxiety-therapy" as const, icon: anxietySvg.url },
  { label: "Relationships", to: "/" as const, icon: relationshipsSvg.url },
  { label: "Eating Disorders", to: "/" as const, icon: eatingSvg.url },
  { label: "Depression", to: "/" as const, icon: depressionSvg.url },
];

const TESTIMONIALS = [
  {
    stars: 5,
    text: "This is an incredible practice with highly skilled providers who attend appointments on time and successfully balance efficiency with warm, empathetic care. Highly recommend!!",
    name: "Ella R.",
  },
  {
    stars: 5,
    text: "Without good mental health, it can be difficult to manage daily stressors and challenges, which can lead to negative consequences in all areas of life.",
    name: "John D.",
  },
  {
    stars: 5,
    text: "Mental Care has an online platform that is easy to maneuver. Overall my experience has been great being that it is my first time going to therapy/tele therapy. I appreciate how safe and comfortable my therapist has makes me feel.",
    name: "Debbie S.",
  },
  {
    stars: 5,
    text: "Extremely professional and responsive providers. You are here to help you improve your quality of life whether that is working with them or continuing therapy and alternative lifestyle changes outside of the practice.",
    name: "Harvey J.",
  },
];

/* ---------------- Page ---------------- */

function AboutUsPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main>
        {/* 1. Hero */}
        <section className="soft-bg">
          <div className="mx-auto max-w-7xl px-6 lg:px-10 py-16 md:py-24 grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <div className="overflow-hidden rounded-[2rem] aspect-[4/3] bg-alternate">
              <img
                src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=1400&q=80"
                alt="Therapy session"
                className="h-full w-full object-cover"
                loading="lazy"
              />
            </div>
            <div>
              <p className="eyebrow">About Us</p>
              <h1 className="mt-4 text-[2.5rem] md:text-[4rem] leading-[1.05]">
                Why We are the <span className="italic-serif">Best Clinic?</span>
              </h1>
              <p className="mt-6 text-text text-base md:text-lg leading-relaxed max-w-xl">
                World-class rehabilitation solutions and individualized recovery plans, from
                acute care to ongoing outpatient treatment and beyond.
              </p>
            </div>
          </div>
        </section>

        {/* 2. Mission / Community */}
        <section>
          <div className="mx-auto max-w-7xl px-6 lg:px-10 py-16 md:py-24 grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <div>
              <h2 className="text-[2rem] md:text-[3.25rem]">About Us</h2>
              <p className="mt-6 text-text text-base md:text-lg leading-relaxed max-w-xl">
                Community is everything at Corlears. It's who we are and how things get done.
                Everyone here is motivated by a deep commitment to making sure each child and
                family feels welcome and included. When everyone feels like they belong, we
                are stronger and smarter together. We're a community driven to make the world
                a better place — starting in our
              </p>
            </div>
            <div className="overflow-hidden rounded-[2rem] aspect-[4/3] bg-alternate">
              <img
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=1400&q=80"
                alt="Community group therapy"
                className="h-full w-full object-cover"
                loading="lazy"
              />
            </div>
          </div>
        </section>

        {/* 3. Team */}
        <section className="soft-bg">
          <div className="mx-auto max-w-7xl px-6 lg:px-10 py-16 md:py-24">
            <div className="text-center">
              <p className="eyebrow">Meet Our Team</p>
              <h2 className="mt-4 text-[2rem] md:text-[3.25rem]">
                Our <span className="italic-serif">Professional Team</span>
              </h2>
            </div>
            <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {TEAM.map((t) => (
                <div
                  key={t.name}
                  className="group bg-background rounded-[1.75rem] overflow-hidden shadow-[0_10px_40px_-25px_rgba(25,13,57,0.2)] hover:shadow-[0_25px_60px_-20px_rgba(25,13,57,0.25)] hover:-translate-y-1 transition-all duration-300"
                >
                  <div className="aspect-[4/5] bg-alternate grid place-items-center overflow-hidden">
                    <User className="h-24 w-24 text-tertiary/50" />
                  </div>
                  <div className="p-6">
                    <h3 className="text-[1.5rem] leading-tight">{t.name}</h3>
                    <p className="mt-1 text-tertiary text-sm">{t.role}</p>
                    <a
                      href="#"
                      className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-secondary group-hover:text-tertiary transition-colors"
                    >
                      Open Profile
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 4. Conditions */}
        <section>
          <div className="mx-auto max-w-7xl px-6 lg:px-10 py-16 md:py-24">
            <h2 className="text-[2rem] md:text-[3.25rem] max-w-4xl">
              We can help you with the{" "}
              <span className="italic-serif">following conditions:</span>
            </h2>
            <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {CONDITIONS.map((c) => (
                <div
                  key={c.label}
                  className="group bg-alternate rounded-[1.75rem] p-8 flex flex-col items-center text-center min-h-[340px] hover:shadow-[0_25px_60px_-20px_rgba(25,13,57,0.2)] transition-shadow"
                >
                  <h3 className="text-[1.5rem]">{c.label}</h3>
                  <div className="my-8 flex-1 grid place-items-center">
                    <div className="h-28 w-28 rounded-full bg-background/70 grid place-items-center p-3">
                      <img src={c.icon} alt={c.label} className="h-full w-full object-contain" />
                    </div>
                  </div>
                  <Link
                    to={c.to}
                    className="inline-flex items-center gap-2 text-sm font-medium text-secondary hover:text-tertiary transition-colors"
                  >
                    Read More
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              ))}
            </div>
            <div className="mt-12 flex justify-center">
              <PillButton variant="dark" as="a" href="#">
                View All Services
              </PillButton>
            </div>
          </div>
        </section>

        {/* 5. Testimonials */}
        <section className="soft-bg">
          <div className="mx-auto max-w-7xl px-6 lg:px-10 py-16 md:py-24">
            <h2 className="text-center text-[2rem] md:text-[3.25rem]">
              What our <span className="italic-serif">clients say</span>
            </h2>
            <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {TESTIMONIALS.map((t, i) => (
                <div
                  key={i}
                  className="bg-background rounded-[1.75rem] p-8 shadow-[0_10px_40px_-25px_rgba(25,13,57,0.2)] flex flex-col"
                >
                  <div className="flex justify-center gap-1">
                    {Array.from({ length: t.stars }).map((_, si) => (
                      <Star
                        key={si}
                        className="h-4 w-4 text-secondary"
                        fill="currentColor"
                      />
                    ))}
                  </div>
                  <p className="mt-6 text-center text-text text-sm leading-relaxed flex-1">
                    {t.text}
                  </p>
                  <div className="mt-6 flex items-center gap-3 justify-center">
                    <div className="h-9 w-9 rounded-full bg-alternate grid place-items-center">
                      <User className="h-5 w-5 text-tertiary" />
                    </div>
                    <span className="text-secondary font-medium text-sm">{t.name}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 6. Appointment form */}
        <section>
          <div className="mx-auto max-w-5xl px-6 lg:px-10 py-16 md:py-24">
            <div className="rounded-[2rem] bg-alternate p-8 md:p-14">
              <div className="text-center">
                <p className="eyebrow">Schedule Your Visit Online</p>
                <h2 className="mt-4 text-[2rem] md:text-[3rem] leading-tight">
                  Take the next step and schedule an appointment today
                </h2>
              </div>

              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  // eslint-disable-next-line no-console
                  console.log("Appointment submitted");
                }}
                className="mt-10 grid gap-5 md:grid-cols-2"
              >
                <div>
                  <label className="eyebrow block mb-2">Service</label>
                  <div className="relative">
                    <select
                      defaultValue=""
                      className="w-full appearance-none rounded-full border border-border bg-background px-6 py-3.5 pr-12 text-secondary focus:outline-none focus:border-secondary transition-colors"
                    >
                      <option value="" disabled>
                        Select Service
                      </option>
                      <option>Service A</option>
                      <option>Service B</option>
                      <option>Service C</option>
                    </select>
                    <ChevronDown className="pointer-events-none absolute right-5 top-1/2 -translate-y-1/2 h-4 w-4 text-tertiary" />
                  </div>
                </div>

                <div>
                  <label className="eyebrow block mb-2">Doctor</label>
                  <div className="relative">
                    <select
                      defaultValue=""
                      className="w-full appearance-none rounded-full border border-border bg-background px-6 py-3.5 pr-12 text-secondary focus:outline-none focus:border-secondary transition-colors"
                    >
                      <option value="" disabled>
                        Select Doctor
                      </option>
                      <option>Dr. Smith</option>
                      <option>Dr. Jones</option>
                      <option>Dr. Lee</option>
                    </select>
                    <ChevronDown className="pointer-events-none absolute right-5 top-1/2 -translate-y-1/2 h-4 w-4 text-tertiary" />
                  </div>
                </div>

                <div>
                  <label className="eyebrow block mb-2">Your Name *</label>
                  <input
                    type="text"
                    required
                    placeholder="Your Name"
                    className="w-full rounded-full border border-border bg-background px-6 py-3.5 text-secondary placeholder:text-tertiary focus:outline-none focus:border-secondary transition-colors"
                  />
                </div>

                <div>
                  <label className="eyebrow block mb-2">Your Phone</label>
                  <input
                    type="tel"
                    placeholder="Your Phone"
                    className="w-full rounded-full border border-border bg-background px-6 py-3.5 text-secondary placeholder:text-tertiary focus:outline-none focus:border-secondary transition-colors"
                  />
                </div>

                <div>
                  <label className="eyebrow block mb-2">Date</label>
                  <DatePickerField />
                </div>

                <div>
                  <label className="eyebrow block mb-2">Time</label>
                  <div className="grid grid-cols-2 gap-3">
                    <TimePickerField />
                    <TimePickerField />
                  </div>
                </div>

                <div className="md:col-span-2 mt-2">
                  <button
                    type="submit"
                    className="inline-flex items-center gap-2 rounded-full bg-primary text-secondary px-8 py-3.5 text-sm font-medium hover:bg-secondary hover:text-primary transition-colors group"
                  >
                    Book an Appointment
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </button>
                </div>
              </form>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <ScrollToTop />
    </div>
  );
}
