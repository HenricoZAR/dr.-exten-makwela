import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import { ArrowRight, ChevronDown, ChevronUp, Calendar, Clock } from "lucide-react";
import { Header, Footer, ScrollToTop, SERVICES_DROPDOWN } from "@/components/site-chrome";
import heroImg from "@/assets/relationships-therapy.jpg.asset.json";
import couplesImg from "@/assets/couples-counselling.jpg.asset.json";
import individualImg from "@/assets/individual-insight.jpg.asset.json";
import familyImg from "@/assets/family-dynamics.jpg.asset.json";

export const Route = createFileRoute("/relationships")({
  head: () => ({
    meta: [
      { title: "Relationships Therapy — Dr. Exten Makwela" },
      {
        name: "description",
        content:
          "Relationship therapy with Dr. Exten Makwela. Helping individuals and couples navigate communication, trust and connection.",
      },
      { property: "og:title", content: "Relationships Therapy — Dr. Exten Makwela" },
      {
        property: "og:description",
        content:
          "Relationship therapy with Dr. Exten Makwela. Helping individuals and couples navigate communication, trust and connection.",
      },
    ],
  }),
  component: Relationships,
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
    title: "Couples Counselling",
    subtitle: "Rebuilding healthy trust and intimacy",
    image: couplesImg.url,
  },
  {
    title: "Individual Insight",
    subtitle: "Exploring your own attachment patterns",
    image: individualImg.url,
  },
  {
    title: "Family Dynamics",
    subtitle: "Navigating complex family ties",
    image: familyImg.url,
  },
];

const FAQS = [
  {
    q: "What types of relationship issues do you address?",
    a: "We address a wide range of emotional and practical concerns including communication difficulties, trust and infidelity issues, conflict resolution, intimacy problems, life transitions, co-parenting challenges and family dynamics.",
  },
  {
    q: "Do you see individuals or only couples?",
    a: "We see both individuals and couples. Individual therapy can be highly effective for specific relationship issues, as it helps you understand your own unique patterns and responses within your relationships.",
  },
  {
    q: "How long does relationship therapy usually take?",
    a: "The duration varies depending on the complexity of the issues. Some clients see meaningful progress in 8 to 12 sessions, while others may benefit from longer-term support. We regularly review your progress.",
  },
  {
    q: "What if my partner does not want to attend therapy?",
    a: "That is a common concern. Individual therapy can still be valuable for you. We will work on your communication skills, boundaries and personal responses, which can positively shift the dynamic.",
  },
  {
    q: "How do I know if relationship therapy is right for me?",
    a: "If you often feel stuck in repeating patterns, experience ongoing conflict or feel disconnected from your partner or family members, relationship therapy can provide clarity and practical tools for change.",
  },
];

function Sidebar() {
  return (
    <aside className="lg:sticky lg:top-28 self-start">
      <div className="rounded-[1.75rem] bg-alternate p-6 md:p-8">
        <h3 className="text-center text-[1.75rem] md:text-[2rem]">Our Services</h3>
        <ul className="mt-6 space-y-1">
          {SERVICES.map((s) => {
            const isActive = s === "Relationships";
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

function Relationships() {
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
              <h1 className="text-[2.5rem] md:text-[4rem] leading-[1.05]">Relationships Therapy</h1>
              <div className="mt-8 overflow-hidden rounded-[2rem] aspect-[16/9] bg-alternate">
                <img
                  src={heroImg.url}
                  alt="Relationships therapy session"
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>

            <section>
              <h2 className="text-[2rem] md:text-[3rem]">About Relationships Services</h2>
              <p className="mt-6 text-text text-base md:text-lg leading-relaxed">
                Our Relationships Service helps individuals and couples navigate the challenges
                that arise in romantic, family and platonic connections. We create a safe,
                non-judgmental space to explore communication breakdowns, trust issues and
                recurring patterns that cause ongoing emotional distress. Using evidence-based
                approaches, we guide clients toward healthier interactions, deeper understanding
                and lasting fulfilment in their personal and professional everyday lives.
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
