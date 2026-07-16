import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import { Link } from "@tanstack/react-router";
import { ArrowRight, ChevronDown, ChevronUp, Calendar, Clock } from "lucide-react";
import { Header, Footer, ScrollToTop, SERVICES_DROPDOWN } from "@/components/site-chrome";
import heroImg from "@/assets/depression-therapy.jpg.asset.json";
import cbtImg from "@/assets/behavioural-therapy.jpg.asset.json";
import activationImg from "@/assets/behavioural-activation.jpg.asset.json";
import mindfulnessImg from "@/assets/mindfulness-based-therapy.jpg.asset.json";

export const Route = createFileRoute("/depression")({
  head: () => ({
    meta: [
      { title: "Depression Therapy — Dr. Exten Makwela" },
      {
        name: "description",
        content:
          "Evidence-based depression therapy with Dr. Exten Makwela. Compassionate support to help you understand your depression and work toward lasting recovery.",
      },
      { property: "og:title", content: "Depression Therapy — Dr. Exten Makwela" },
      {
        property: "og:description",
        content:
          "Evidence-based depression therapy with Dr. Exten Makwela. Compassionate support to help you understand your depression and work toward lasting recovery.",
      },
    ],
  }),
  component: DepressionTherapy,
});

const SERVICES = [
  "Trauma",
  "Anxiety",
  "Relationships",
  "Eating Disorders",
  "Depression",
  "Childhood Abuse",
];

const SESSIONS = [
  {
    title: "Cognitive Behavioural Therapy",
    subtitle: "Changing negative thought patterns",
    image: cbtImg.url,
  },
  {
    title: "Behavioural Activation",
    subtitle: "Rebuilding motivation and energy",
    image: activationImg.url,
  },
  {
    title: "Mindfulness-Based Therapy",
    subtitle: "Developing present-moment awareness",
    image: mindfulnessImg.url,
  },
];

const FAQS = [
  {
    q: "What are the common signs of depression?",
    a: "Common signs include persistent sadness, loss of interest in activities, fatigue, changes in appetite or sleep, difficulty concentrating, feelings of worthlessness and thoughts of death or suicide. These symptoms must last at least two weeks.",
  },
  {
    q: "What causes depression?",
    a: "Depression results from a combination of genetic, biological, environmental and psychological factors. Trauma, stress, family history and life changes can all play significant roles in its development.",
  },
  {
    q: "What treatments are available for depression?",
    a: "Evidence-based treatments include Cognitive Behavioural Therapy (CBT), interpersonal therapy, behavioural activation and mindfulness-based approaches. Antidepressant medication may also be recommended in some cases.",
  },
  {
    q: "How long does depression treatment usually take?",
    a: "The duration varies. Many clients experience improvement within 8 to 12 sessions. Others with more persistent depression may benefit from longer-term therapy. We review progress regularly.",
  },
  {
    q: "When should I seek professional help for depression?",
    a: "Seek help when depressive symptoms interfere with your daily life, work performance or relationships. If you have thoughts of self-harm or suicide, seek immediate professional assistance.",
  },
];

function Sidebar() {
  return (
    <aside className="lg:sticky lg:top-28 self-start">
      <div className="rounded-[1.75rem] bg-alternate p-6 md:p-8">
        <h3 className="text-center text-[1.75rem] md:text-[2rem]">Our Services</h3>
        <ul className="mt-6 space-y-1">
          {SERVICES.map((s) => {
            const isActive = s === "Depression";
            const to = SERVICES_DROPDOWN.find((d) => d.label === s)?.to || "/";
            return (
              <li key={s}>
                <Link
                  to={to}
                  className={`group flex items-center justify-between rounded-xl px-3 py-3 text-[15px] transition-colors ${
                    isActive
                      ? "bg-background text-secondary font-semibold"
                      : "text-secondary hover:bg-background/60"
                  }`}
                >
                  <span>{s}</span>
                  <ArrowRight
                    className={`h-4 w-4 transition-transform ${
                      isActive ? "translate-x-0.5" : "group-hover:translate-x-0.5"
                    }`}
                  />
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </aside>
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

  const months = Array.from({ length: 12 }, (_, i) => i + 1);
  const days = Array.from({ length: 31 }, (_, i) => i + 1);
  const years = [2026];

  return (
    <div ref={ref} className="relative">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="w-full flex items-center justify-between rounded-full border border-border bg-background px-6 py-3.5 text-left text-secondary hover:border-secondary transition-colors"
      >
        <span className={label === "Select Date" ? "text-tertiary" : ""}>{label}</span>
        <Calendar className="h-4 w-4 text-tertiary" />
      </button>
      {open && (
        <div className="absolute z-30 mt-2 w-full rounded-2xl border border-border bg-background shadow-[0_20px_60px_-20px_rgba(25,13,57,0.25)] p-3">
          <div className="grid grid-cols-3 gap-2 text-center">
            <p className="eyebrow py-1">Month</p>
            <p className="eyebrow py-1">Day</p>
            <p className="eyebrow py-1">Year</p>
            <PickerCol values={months} selected={month} onSelect={setMonth} />
            <PickerCol values={days} selected={day} onSelect={setDay} />
            <PickerCol values={years} selected={year} onSelect={setYear} />
          </div>
        </div>
      )}
    </div>
  );
}

function PickerCol({
  values,
  selected,
  onSelect,
}: {
  values: number[];
  selected: number | null;
  onSelect: (v: number) => void;
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
          {String(v).padStart(2, "0")}
        </button>
      ))}
    </div>
  );
}

function TimePickerField() {
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
        <span className={value ? "" : "text-tertiary"}>{value ?? "Select Time"}</span>
        <Clock className="h-4 w-4 text-tertiary" />
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

function BookingCard() {
  return (
    <div className="rounded-[1.75rem] bg-alternate p-6 md:p-8">
      <h3 className="text-center text-[1.75rem] md:text-[2rem]">Book a Consultation:</h3>
      <form className="mt-6 space-y-3" onSubmit={(e) => e.preventDefault()}>
        <input
          type="text"
          placeholder="First Name"
          className="w-full rounded-full border border-border bg-background px-6 py-3.5 text-secondary placeholder:text-tertiary focus:outline-none focus:border-secondary transition-colors"
        />
        <input
          type="text"
          placeholder="Family Name"
          className="w-full rounded-full border border-border bg-background px-6 py-3.5 text-secondary placeholder:text-tertiary focus:outline-none focus:border-secondary transition-colors"
        />
        <input
          type="tel"
          placeholder="Your Phone"
          className="w-full rounded-full border border-border bg-background px-6 py-3.5 text-secondary placeholder:text-tertiary focus:outline-none focus:border-secondary transition-colors"
        />
        <DatePickerField />
        <TimePickerField />
        <button
          type="submit"
          className="w-full mt-2 rounded-full bg-primary text-secondary font-medium py-3.5 hover:bg-secondary hover:text-primary transition-colors"
        >
          Book Online
        </button>
      </form>
    </div>
  );
}

function FaqItem({
  q,
  a,
  defaultOpen = false,
}: {
  q: string;
  a: string;
  defaultOpen?: boolean;
}) {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <div className="border-b border-border py-6">
      <button
        onClick={() => setOpen((v) => !v)}
        className="w-full flex items-center justify-between gap-6 text-left"
      >
        <h4 className="text-[1.25rem] md:text-[1.5rem] text-secondary">{q}</h4>
        {open ? (
          <ChevronUp className="h-5 w-5 shrink-0 text-secondary" />
        ) : (
          <ChevronDown className="h-5 w-5 shrink-0 text-secondary" />
        )}
      </button>
      {open && <p className="mt-4 text-text text-base md:text-lg leading-relaxed">{a}</p>}
    </div>
  );
}

function DepressionTherapy() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="soft-bg">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 py-14 md:py-20 grid lg:grid-cols-[320px_1fr] gap-10 lg:gap-16 items-start">
          <div className="lg:sticky lg:top-24 self-start space-y-8 lg:max-h-[calc(100vh-7rem)] lg:overflow-y-auto lg:pr-2">
            <Sidebar />
            <BookingCard />
          </div>

          <div className="space-y-16">
            <div>
              <h1 className="text-[2.5rem] md:text-[4rem] leading-[1.05]">Depression Therapy</h1>
              <div className="mt-8 overflow-hidden rounded-[2rem] aspect-[16/9] bg-alternate">
                <img
                  src={heroImg.url}
                  alt="Depression therapy session"
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>

            <section>
              <h2 className="text-[2rem] md:text-[3rem]">About Depression Services</h2>
              <p className="mt-6 text-text text-base md:text-lg leading-relaxed">
                Our Depression Service provides compassionate, evidence-based care for individuals
                experiencing depression. We understand that depression affects every aspect of
                life, from energy and motivation to relationships and work performance. Our
                approach combines proven therapeutic techniques with personalised support to help
                you understand your depression, develop coping strategies and work toward lasting
                recovery.
              </p>
            </section>

            <section>
              <h2 className="text-[2rem] md:text-[3rem]">Frequently Asked Questions</h2>
              <div className="mt-8">
                {FAQS.map((f, i) => (
                  <FaqItem key={f.q} q={f.q} a={f.a} defaultOpen={i === 0} />
                ))}
              </div>
            </section>

            <section>
              <h2 className="text-[2rem] md:text-[3rem]">Sessions Offered</h2>
              <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {SESSIONS.map((s) => (
                  <div
                    key={s.title}
                    className="group bg-background rounded-[1.75rem] overflow-hidden shadow-[0_10px_40px_-25px_rgba(25,13,57,0.2)] hover:shadow-[0_25px_60px_-20px_rgba(25,13,57,0.25)] hover:-translate-y-1 transition-all duration-300 flex flex-col"
                  >
                    <div className="aspect-[7/7] overflow-hidden basis-[70%]">
                      <img
                        src={s.image}
                        alt={s.title}
                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                        loading="lazy"
                      />
                    </div>
                    <div className="p-6 basis-[30%]">
                      <h3 className="text-[1.5rem] md:text-[1.75rem] leading-tight">{s.title}</h3>
                      <p className="mt-1 text-tertiary text-sm">{s.subtitle}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </div>
        </div>
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
}
