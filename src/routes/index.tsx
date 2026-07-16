import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import {
  Menu,
  X,
  Search,
  ArrowRight,
  ArrowUp,
  ArrowUpRight,
  Play,
  ShieldCheck,
  Target,
  Award,
  Facebook,
  Instagram,
  Twitter,
  ChevronDown,
} from "lucide-react";
import logoColour from "@/assets/exten-makwela-logo-colour.svg.asset.json";
import logoWhite from "@/assets/exten-makwela-logo-white.svg.asset.json";
import heroImg from "@/assets/hero-therapist.jpg";
import drRobertsImg from "@/assets/dr-roberts.jpg";
import sessionImg from "@/assets/therapy-session.jpg";
import bookImg from "@/assets/book.jpg";
import blog1 from "@/assets/blog-1.jpg";
import blog2 from "@/assets/blog-2.jpg";
import blog3 from "@/assets/blog-3.jpg";
import credentialsImg from "@/assets/credentials.jpg";
import anxietySvg from "@/assets/anxiety.svg.asset.json";
import relationshipsSvg from "@/assets/relationships.svg.asset.json";
import eatingSvg from "@/assets/eating_disorders.svg.asset.json";
import depressionSvg from "@/assets/depression.svg.asset.json";
import traumaSvg from "@/assets/Trauma.svg.asset.json";
import childhoodSvg from "@/assets/childhood_abuse.svg.asset.json";
import video1 from "@/assets/exten-makwela-video1.mp4.asset.json";

export const Route = createFileRoute("/")({
  component: Index,
});

const NAV = [
  { label: "Home", hasMenu: true },
  { label: "About Us", hasMenu: false },
  { label: "Services", hasMenu: true },
  { label: "Therapists", hasMenu: true },
  { label: "Pages", hasMenu: true },
  { label: "Blog", hasMenu: false },
];

const EXPERTISE = [
  {
    key: "anxiety",
    title: "Anxiety",
    body: "Our Anxiety Service is committed to helping individuals manage and overcome anxiety disorders through comprehensive, evidence-based treatment.",
  },
  {
    key: "relationships",
    title: "Relationships",
    body: "We provide a supportive environment where clients can explore and address issues that impact their relationships, whether they are romantic, familial, or platonic.",
  },
  {
    key: "eating",
    title: "Eating Disorders",
    body: "Our Eating Disorders Service is dedicated to providing specialized care for individuals struggling with eating disorders such as anorexia nervosa, bulimia nervosa, binge-eating disorder, and other related conditions.",
  },
  {
    key: "depression",
    title: "Depression",
    body: "Our Depression Service is dedicated to providing compassionate and comprehensive care for individuals experiencing depression.",
  },
  {
    key: "trauma",
    title: "Trauma",
    body: "Our Trauma Service is dedicated to providing specialized care for individuals who have experienced traumatic events.",
  },
  {
    key: "childhood",
    title: "Childhood Abuse",
    body: "Our Childhood Abuse Service is dedicated to providing compassionate and specialized care for individuals who have experienced childhood abuse.",
  },
];

const TOOLS = [
  "Find clear direction and purpose in your life",
  "Boost your self-belief and self-worth",
  "Maintain your mental health and wellbeing",
  "Build resilience and lasting inner strength",
];

const PRICING = [
  {
    tag: "Initial Consultation",
    price: "R 4,926",
    body: "We will clarify your treatment goals and develop a plan that may include medicine, therapy, or a mix of both.",
  },
  {
    tag: "Long Session",
    price: "R 4,105",
    body: "A 60 minute supportive therapy session to discuss how you are feeling and manage your medicine, if necessary.",
  },
  {
    tag: "Short Session",
    price: "R 2,463",
    body: "A 20 minute supportive check-in to see how you're doing, and to review/adjust your own medicine if applicable.",
  },
];

const TESTIMONIALS = [
  {
    body: "Mental Care has an online platform that is easy to maneuver. Overall my experience has been great being that it is my first time going to therapy/tele therapy. I appreciate how safe and comfortable my therapist has makes me feel.",
    name: "Debbie S.",
  },
  {
    body: "The support I received completely changed how I manage stress and my overall wellbeing. I feel truly supported throughout every stage of the journey.",
    name: "Marcus L.",
  },
  {
    body: "Warm, professional and deeply insightful. I finally feel like I have the tools to move forward with clarity and confidence in my life.",
    name: "Anna K.",
  },
  {
    body: "A calm, safe, judgement-free space. The sessions have been transformative — I look forward to every single one.",
    name: "Priya M.",
  },
];

const POSTS = [
  {
    tag: "Increase Positivity",
    date: "January 13, 2026",
    title: "How to Think Positive",
    excerpt:
      "Positive thinking can improve your overall well-being. Spending time with loved ones, practicing gratitude, and reframing setbacks are simple daily habits that compound over time.",
    img: blog1,
  },
  {
    tag: "Depression",
    date: "January 12, 2026",
    title: "10 Ways to Support a Partner Who's Depressed",
    excerpt:
      "It's also important to understand that every person's experience with depression is unique so here are a few grounded ways to show up meaningfully for the people you love.",
    img: blog2,
  },
  {
    tag: "Social Anxiety",
    date: "January 11, 2026",
    title: "How Does Social Anxiety Affect the Brain?",
    excerpt:
      "Social anxiety changes how we process cues, threat and reward. Understanding the neuroscience is the first step toward reclaiming social confidence.",
    img: blog3,
  },
];

const CREDENTIALS = [
  "PgDip in Cognitive-Behavioural Therapy (Distinction)",
  "Interpersonal Psychotherapy - Adolescent Skills Training (IPT-AST)",
  "Acceptance-Action Coaching, Therapy and Training - registered member of AAACTT",
  "MSc Clinical Psychology and Mental Health (Distinction)",
  "BSc (Hons) in Psychology (First Class)",
];

function Logo({ dark = false }: { dark?: boolean }) {
  return (
    <a href="#top" className="flex items-center">
      <img
        src={dark ? logoWhite.url : logoColour.url}
        alt="Dr. Exten Makwela"
        className="h-10 w-auto"
      />
    </a>
  );
}

function PillButton({
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
    primary:
      "bg-primary text-secondary hover:bg-secondary hover:text-primary",
    dark:
      "bg-secondary text-white hover:bg-primary hover:text-secondary",
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

function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 bg-background/90 backdrop-blur-md border-b border-border/60">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 py-5 grid grid-cols-[auto_1fr_auto] items-center gap-6">
        <Logo />
        <nav className="hidden lg:flex items-center justify-center gap-8">
          {NAV.map((n) => (
            <a
              key={n.label}
              href="#"
              className="flex items-center gap-1 text-sm font-medium text-secondary hover:text-tertiary transition-colors"
            >
              {n.label}
              {n.hasMenu && <ChevronDown className="h-3.5 w-3.5" />}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-4">
          <button
            aria-label="Search"
            className="hidden sm:grid h-10 w-10 place-items-center rounded-full text-secondary hover:bg-alternate"
          >
            <Search className="h-5 w-5" />
          </button>
          <PillButton variant="dark" as="a" href="#contact">
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
            {NAV.map((n) => (
              <a key={n.label} href="#" className="py-2 text-secondary">
                {n.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="relative">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 pt-8 pb-16">
        <div className="relative overflow-hidden rounded-[2.5rem] min-h-[560px] lg:min-h-[680px]">
          <img
            src={heroImg}
            alt="Therapist"
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/10 via-transparent to-transparent" />
          <div className="relative z-10 p-6 md:p-12 flex items-start">
            <div className="bg-background rounded-[2rem] p-8 md:p-12 max-w-xl shadow-[0_20px_60px_-20px_rgba(25,13,57,0.25)]">
              <h1 className="text-[2.5rem] md:text-[3.5rem] leading-[1.05]">
                Psychological & Behavioural Therapies{" "}
                <span className="italic-serif">in the Heart of Pretoria</span>
              </h1>
              <p className="mt-6 text-base md:text-lg text-text max-w-md">
                Private psychotherapy and counselling for adults, adolescents and
                couples.
              </p>
              <div className="mt-8">
                <PillButton variant="primary" as="a" href="#contact">
                  Start Your Journey
                </PillButton>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Mission() {
  return (
    <section className="soft-bg">
      <div className="mx-auto max-w-5xl px-6 lg:px-10 py-24 md:py-32 text-center">
        <p className="eyebrow">Welcome to My Practice</p>
        <h2 className="mt-6 text-[2rem] md:text-[3.25rem] leading-[1.1]">
          I've made it my mission to empower people to{" "}
          <span className="italic-serif">change</span> their lives{" "}
          <span className="italic-serif">for the better</span>.
        </h2>
        <p className="mt-8 max-w-3xl mx-auto text-base md:text-lg text-text">
          Navigate stress, let go of high-functioning anxiety, and improve your
          performance and wellbeing through personalised 1-on-1 Coaching, CBT
          Therapy, and Corporate Wellness Programmes.
        </p>
        <div className="mt-10 flex justify-center">
          <PillButton variant="outline" as="a" href="#expertise">
            View Services
          </PillButton>
        </div>
      </div>
    </section>
  );
}

function MeetDoctor() {
  return (
    <section className="soft-bg">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 py-20 md:py-28 grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
        <div className="relative">
          <div className="overflow-hidden rounded-[2rem] aspect-[4/5] bg-alternate">
            <img
              src={drRobertsImg}
              alt="Dr. Makwela"
              className="h-full w-full object-cover"
              loading="lazy"
            />
          </div>
        </div>
        <div>
          <p className="eyebrow">Meet Dr. Makwela</p>
          <h2 className="mt-5 text-[2rem] md:text-[3rem]">
            Psychologist, Cognitive Behavioural Therapist and Executive Coach
          </h2>
          <p className="mt-6 text-text text-base md:text-lg max-w-lg">
            I am an HPCSA registered clinical & counselling psychologist based in
            Salvokop, Pretoria, South Africa, offering face-to-face and online sessions.
          </p>
          <div className="mt-8">
            <PillButton variant="outline" as="a" href="#">
              About Us
            </PillButton>
          </div>
        </div>
      </div>
    </section>
  );
}

function Tools() {
  const icons = [
    // life saver / laptop
    <svg viewBox="0 0 100 100" fill="none" stroke="#190d39" strokeWidth="2" strokeLinecap="round">
      <circle cx="50" cy="50" r="22" />
      <circle cx="50" cy="50" r="10" />
      <path d="M35 35 l-8 -8 M65 35 l8 -8 M35 65 l-8 8 M65 65 l8 8" />
    </svg>,
    // meditation
    <svg viewBox="0 0 100 100" fill="none" stroke="#190d39" strokeWidth="2" strokeLinecap="round">
      <circle cx="50" cy="30" r="8" />
      <path d="M35 45 h30 v15 c0 8 -7 15 -15 15 s-15 -7 -15 -15 z" />
      <path d="M25 55 l10 5 M75 55 l-10 5" />
      <path d="M30 18 l3 5 M70 18 l-3 5 M50 12 v6" />
    </svg>,
    // balloon
    <svg viewBox="0 0 100 100" fill="none" stroke="#190d39" strokeWidth="2" strokeLinecap="round">
      <ellipse cx="50" cy="35" rx="18" ry="22" />
      <path d="M42 55 l4 8 h8 l4 -8 M50 63 v20" />
      <path d="M78 45 c3 -2 6 0 6 3 M84 55 c3 0 5 3 3 5" />
    </svg>,
    // handshake
    <svg viewBox="0 0 100 100" fill="none" stroke="#190d39" strokeWidth="2" strokeLinecap="round">
      <path d="M20 55 l15 -12 l10 8 l10 -8 l15 12" />
      <path d="M25 60 l10 8 M75 60 l-10 8" />
      <path d="M40 40 l5 -5 M60 40 l-5 -5 M30 30 l4 4 M70 30 l-4 4" />
    </svg>,
  ];
  return (
    <section className="soft-bg">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 pb-24 md:pb-32">
        <p className="eyebrow text-center">I give people the tools they need to:</p>
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {TOOLS.map((t, i) => (
            <div
              key={t}
              className="group bg-background rounded-[1.75rem] p-8 shadow-[0_10px_40px_-20px_rgba(25,13,57,0.15)] hover:-translate-y-1 hover:shadow-[0_25px_60px_-20px_rgba(25,13,57,0.25)] transition-all duration-300"
            >
              <div className="h-28 w-28 mx-auto">{icons[i]}</div>
              <p
                className="mt-6 text-center text-secondary"
                style={{ fontFamily: "var(--font-serif)", fontSize: "1.35rem", lineHeight: 1.25 }}
              >
                {t}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Expertise() {
  const [active, setActive] = useState(0);
  const item = EXPERTISE[active];
  return (
    <section id="expertise" className="soft-bg">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 py-24 md:py-32">
        <h2 className="text-center text-[2.25rem] md:text-[3.5rem]">
          My areas <span className="italic-serif">of expertise</span>
        </h2>
        <div className="mt-12 flex flex-wrap justify-center gap-3">
          {EXPERTISE.map((e, i) => (
            <button
              key={e.key}
              onClick={() => setActive(i)}
              className={`rounded-full px-6 py-3 text-sm font-medium border transition-all duration-300 ${
                active === i
                  ? "bg-secondary text-white border-secondary"
                  : "bg-transparent text-secondary border-secondary/30 hover:border-secondary"
              }`}
            >
              {e.title}
            </button>
          ))}
        </div>
        <div className="mt-12 bg-alternate rounded-[2rem] p-8 md:p-14 grid md:grid-cols-[1fr_1.2fr] gap-10 items-center">
          <div className="aspect-square max-w-sm mx-auto w-full">
            <ExpertiseIllustration idx={active} />
          </div>
          <div>
            <h3 className="text-[2rem] md:text-[2.75rem]">{item.title}</h3>
            <p className="mt-5 text-text text-base md:text-lg max-w-lg">{item.body}</p>
            <div className="mt-8">
              <PillButton variant="primary" as="a" href="#">
                Read More
              </PillButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ExpertiseIllustration({ idx }: { idx: number }) {
  const images = [
    { src: anxietySvg.url, alt: "Anxiety" },
    { src: relationshipsSvg.url, alt: "Relationships" },
    { src: eatingSvg.url, alt: "Eating Disorders" },
    { src: depressionSvg.url, alt: "Depression" },
    { src: traumaSvg.url, alt: "Trauma" },
    { src: childhoodSvg.url, alt: "Childhood Abuse" },
  ];
  const img = images[idx];
  return (
    <img
      src={img.src}
      alt={img.alt}
      className="h-full w-full object-contain"
      loading="lazy"
    />
  );
}

function VideoBanner() {
  return (
    <section className="soft-bg">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 pb-24">
        <div className="relative overflow-hidden rounded-[2rem] aspect-[16/8]">
          <img
            src={sessionImg}
            alt="Therapy session"
            className="absolute inset-0 h-full w-full object-cover"
            loading="lazy"
          />
          <button
            aria-label="Play"
            className="absolute inset-0 grid place-items-center group"
          >
            <span className="grid h-24 w-24 place-items-center rounded-full bg-primary text-secondary shadow-2xl transition-transform group-hover:scale-110">
              <Play className="h-8 w-8 fill-current translate-x-0.5" />
            </span>
          </button>
        </div>
      </div>
    </section>
  );
}

function Credentials() {
  return (
    <section className="soft-bg">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 py-24 md:py-32 grid md:grid-cols-2 gap-16 items-center">
        <div>
          <p className="eyebrow">Professional Credentials</p>
          <h2 className="mt-5 text-[2.25rem] md:text-[3.25rem]">
            My Academic <span className="italic-serif">Qualifications</span>
          </h2>
          <ul className="mt-10 space-y-5">
            {CREDENTIALS.map((c) => (
              <li key={c} className="flex gap-4 text-text text-base md:text-lg">
                <span className="mt-2 h-1.5 w-1.5 rounded-full bg-secondary shrink-0" />
                <span>{c}</span>
              </li>
            ))}
          </ul>
          <div className="mt-10">
            <PillButton variant="outline" as="a" href="#">
              Learn More
            </PillButton>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-5">
          <div className="rounded-[1.75rem] overflow-hidden aspect-[3/4] mt-16">
            <img src={credentialsImg} alt="Credentials" className="h-full w-full object-cover" loading="lazy" />
          </div>
          <div className="rounded-[1.75rem] overflow-hidden aspect-[3/4]">
            <img src={sessionImg} alt="Session" className="h-full w-full object-cover" loading="lazy" />
          </div>
        </div>
      </div>
    </section>
  );
}

function Pricing() {
  return (
    <section className="soft-bg">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 py-24 md:py-32">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-[2.25rem] md:text-[3.5rem]">
            Pricing <span className="italic-serif">Plans</span>
          </h2>
          <p className="mt-6 text-text text-base md:text-lg">
            I offer both online therapy sessions and in-person sessions at my practice.
          </p>
        </div>
        <div className="mt-14 grid md:grid-cols-3 gap-6">
          {PRICING.map((p) => (
            <div
              key={p.tag}
              className="group bg-background rounded-[1.75rem] p-8 md:p-10 shadow-[0_10px_40px_-25px_rgba(25,13,57,0.15)] hover:shadow-[0_25px_60px_-20px_rgba(25,13,57,0.25)] hover:-translate-y-1 transition-all duration-300 flex flex-col"
            >
              <p className="eyebrow text-secondary/80">{p.tag}</p>
              <div className="mt-8 flex items-baseline gap-2 flex-wrap">
                <span
                  className="text-secondary"
                  style={{ fontFamily: "var(--font-serif)", fontSize: "3.25rem", lineHeight: 1 }}
                >
                  {p.price}
                </span>
                <span className="text-text text-sm">per hour</span>
              </div>
              <p className="mt-10 text-text text-[15px] flex-1">{p.body}</p>
              <div className="mt-10">
                <PillButton variant="outline" as="a" href="#contact">
                  Book a Session
                </PillButton>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Testimonials() {
  const [i, setI] = useState(1);
  const t = TESTIMONIALS[i];
  return (
    <section className="soft-bg">
      <div className="mx-auto max-w-5xl px-6 lg:px-10 py-24 md:py-32 text-center">
        <h2 className="text-[2.25rem] md:text-[3.5rem]">
          What my clients <span className="italic-serif">say</span>
        </h2>
        <p className="mt-5 text-text">
          Read why people trust my practice.{" "}
          <a href="#" className="text-secondary underline underline-offset-4">
            See all reviews
          </a>
        </p>
        <blockquote
          key={i}
          className="mt-16 text-secondary italic-serif text-[1.5rem] md:text-[2rem] leading-[1.3]"
        >
          {t.body}
        </blockquote>
        <div className="mt-10 flex items-center justify-center gap-3">
          <div className="h-12 w-12 rounded-full bg-alternate grid place-items-center">
            <svg viewBox="0 0 40 40" width="34" height="34">
              <circle cx="20" cy="15" r="7" fill="#190d39" />
              <path d="M6 36 q0 -12 14 -12 q14 0 14 12 z" fill="#190d39" />
            </svg>
          </div>
          <span className="text-secondary font-medium">{t.name}</span>
        </div>
        <div className="mt-10 flex justify-center gap-2">
          {TESTIMONIALS.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setI(idx)}
              aria-label={`Testimonial ${idx + 1}`}
              className={`h-2.5 w-2.5 rounded-full transition-all ${
                i === idx ? "bg-secondary" : "bg-secondary/25"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function BookPromo() {
  return (
    <section className="relative overflow-hidden">
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(120deg, #fcda98 0%, #f2ecd8 40%, #c7e4fe 100%)",
        }}
      />
      <div className="relative mx-auto max-w-7xl px-6 lg:px-10 py-24 md:py-32 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <p className="eyebrow" style={{ color: "#190d39" }}>
            Order My New Book
          </p>
          <h2 className="mt-5 text-[2.25rem] md:text-[3.5rem]">
            <span className="italic-serif">Healing the Trauma:</span> A Path to
            Healing in a Broken World
          </h2>
          <p className="mt-6 text-secondary/80 text-base md:text-lg max-w-lg">
            Adversity comes in many forms and can make us feel alone in our pain,
            even years after the fact. The best way to move past individual trauma
            is through connection and community — healing ourselves and one another.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <PillButton variant="dark" as="a" href="#">
              Order Now
            </PillButton>
            <PillButton variant="outline" as="a" href="#">
              All Books
            </PillButton>
          </div>
        </div>
        <div className="flex justify-center md:justify-end">
          <img
            src={bookImg}
            alt="Book"
            className="max-h-[560px] w-auto object-contain drop-shadow-2xl rotate-[-3deg]"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
}

function Blog() {
  return (
    <section className="soft-bg">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 py-24 md:py-32">
        <h2 className="text-center text-[2.25rem] md:text-[3.5rem]">
          Mindfulness <span className="italic-serif">Blog</span>
        </h2>
        <div className="mt-16 space-y-8">
          {POSTS.map((p) => (
            <article
              key={p.title}
              className="grid md:grid-cols-2 gap-0 rounded-[1.75rem] overflow-hidden bg-alternate hover:shadow-[0_25px_60px_-25px_rgba(25,13,57,0.2)] transition-all duration-300 group"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={p.img}
                  alt={p.title}
                  className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                />
              </div>
              <div className="p-8 md:p-12 flex flex-col justify-center">
                <div className="flex items-center gap-4 flex-wrap">
                  <span className="inline-block rounded-full border border-secondary px-4 py-1.5 text-[11px] font-semibold uppercase tracking-widest text-secondary">
                    {p.tag}
                  </span>
                  <span className="eyebrow">{p.date}</span>
                </div>
                <h3 className="mt-6 text-[1.75rem] md:text-[2.25rem]">{p.title}</h3>
                <p className="mt-6 text-text text-[15px]">{p.excerpt}</p>
                <a
                  href="#"
                  className="mt-8 inline-flex items-center gap-2 text-secondary font-medium w-fit group/link"
                >
                  <ArrowRight className="h-5 w-5 transition-transform group-hover/link:translate-x-1" />
                </a>
              </div>
            </article>
          ))}
        </div>
        <div className="mt-14 flex justify-center">
          <PillButton variant="primary" as="a" href="#">
            View More Posts
          </PillButton>
        </div>
      </div>
    </section>
  );
}

function Values() {
  const items = [
    {
      icon: ShieldCheck,
      title: "Confidential",
      body: "You will be provided with a safe, non-judgmental and private space for your concerns. At the same time you will be given accountability and support to reflect and develop.",
    },
    {
      icon: Target,
      title: "Results driven",
      body: "You will be encouraged to think about what your goals are for our work together. I will help bring out your best and achieve more. The focus is on our individualised plan to give you real results in as short a time as possible.",
    },
    {
      icon: Award,
      title: "Expert",
      body: "Over 20 years of experience in helping people make positive changes in their lives. Pretoria University educated clinical psychologist and executive coach.",
    },
  ];
  return (
    <section className="soft-bg">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 pb-24 md:pb-32 grid md:grid-cols-3 gap-12 md:gap-6 text-center relative">
        {items.map((it, idx) => (
          <div key={it.title} className="relative px-4">
            <div className="grid h-20 w-20 mx-auto place-items-center rounded-2xl">
              <it.icon className="h-14 w-14 text-secondary" strokeWidth={1.2} />
            </div>
            <h3 className="mt-6 text-[1.75rem] md:text-[2rem]">{it.title}</h3>
            <p className="mt-5 text-text text-[15px] max-w-sm mx-auto">{it.body}</p>
            {idx < items.length - 1 && (
              <svg
                viewBox="0 0 120 40"
                className="hidden md:block absolute top-8 -right-8 w-20 text-secondary/60"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
              >
                <path d="M5 20 q30 -30 60 0 t50 0" />
                <path d="M108 15 l10 5 l-10 8" />
              </svg>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

function ContactForm() {
  const [sent, setSent] = useState(false);
  return (
    <section id="contact" className="soft-bg">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 pb-24 md:pb-32">
        <div className="bg-alternate rounded-[2rem] p-8 md:p-16 grid md:grid-cols-2 gap-12 items-center">
          <div className="max-w-sm mx-auto">
            <svg viewBox="0 0 300 300" fill="none" stroke="#190d39" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M60 220 q0 -40 40 -50 v-30 q0 -20 20 -25 q25 -5 40 15 q15 20 5 45 l-5 15 q5 20 -10 30 z" fill="#190d39" />
              <rect x="140" y="140" width="65" height="45" rx="3" fill="#fafaf8" stroke="#190d39" />
              <circle cx="105" cy="115" r="8" fill="#fafaf8" />
              <path d="M220 60 v40 M220 100 l-20 20 M220 100 l20 20 M210 60 h20" stroke="#190d39" />
              <circle cx="220" cy="55" r="5" fill="#fcda98" />
              <path d="M40 260 h240" />
            </svg>
          </div>
          <div>
            <p className="eyebrow">Let's Get In Touch</p>
            <h2 className="mt-5 text-[2rem] md:text-[3rem]">
              Are you ready to <span className="italic-serif">embark on a journey?</span>
            </h2>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                setSent(true);
              }}
              className="mt-10 space-y-6"
            >
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label className="eyebrow block mb-2">Name</label>
                  <input
                    type="text"
                    required
                    className="w-full rounded-full border border-border bg-background px-6 py-3.5 text-secondary focus:outline-none focus:border-secondary transition-colors"
                  />
                </div>
                <div>
                  <label className="eyebrow block mb-2">E-mail</label>
                  <input
                    type="email"
                    required
                    className="w-full rounded-full border border-border bg-background px-6 py-3.5 text-secondary focus:outline-none focus:border-secondary transition-colors"
                  />
                </div>
              </div>
              <div>
                <label className="eyebrow block mb-2">Your Message</label>
                <textarea
                  rows={5}
                  className="w-full rounded-[1.5rem] border border-border bg-background px-6 py-4 text-secondary focus:outline-none focus:border-secondary transition-colors resize-none"
                />
              </div>
              <PillButton variant="primary" as="button" type="submit">
                {sent ? "Message Sent" : "Send Message"}
              </PillButton>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-secondary text-white/80">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 py-20 grid md:grid-cols-2 lg:grid-cols-4 gap-12">
        <div>
          <Logo dark />
          <p className="mt-6 text-white/70 max-w-xs text-[15px]">
            Start your path to psychological wellness with our carefully selected specialists.
          </p>
          <form
            onSubmit={(e) => e.preventDefault()}
            className="mt-8 relative max-w-sm"
          >
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
        <FooterCol
          title="Pages"
          items={["About Us", "Our Services", "Blog", "Contacts", "Shop", "Image Credits"]}
        />
        <FooterCol
          title="Services"
          items={[
            "Anxiety",
            "Relationships",
            "Eating Disorders",
            "Depression",
            "ADHD",
            "Childhood Abuse",
            "OCD",
            "Trauma",
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

function ScrollToTop() {
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
      className={`fixed bottom-6 right-6 z-50 grid h-12 w-12 place-items-center rounded-full bg-white border-2 border-primary shadow-lg transition-all duration-300 hover:bg-primary ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 pointer-events-none translate-y-4"
      }`}
      style={{ borderColor: "#fcda98" }}
    >
      <ArrowUp className="h-5 w-5" style={{ color: "#190d39" }} />
    </button>
  );
}

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <Mission />
        <MeetDoctor />
        <Tools />
        <Expertise />
        <VideoBanner />
        <Credentials />
        <Pricing />
        <Testimonials />
        <BookPromo />
        <Blog />
        <Values />
        <ContactForm />
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
}
