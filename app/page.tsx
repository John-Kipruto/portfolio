import {
  ArrowDown,
  ArrowUpRight,
  CheckCircle2,
  Code2,
  Database,
  Layers3,
  Mail,
  MapPin,
  Server,
  Smartphone,
  Sparkles,
} from "lucide-react";
import Link from "next/link";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const skills = [
  "Next.js",
  "NestJS",
  "React Native",
  "TypeScript",
  "Tailwind CSS",
  "PostgreSQL",
  "Redis",
  "Docker",
  "AWS",
  "Prisma",
];

const projects = [
  {
    number: "01",
    tag: "SaaS Platform",
    title: "Orbit Commerce",
    description:
      "A multi-tenant commerce operating system with storefront analytics, inventory workflows, and role-based administration.",
    stack: ["Next.js", "NestJS", "PostgreSQL", "Redis"],
    metric: "42% faster workflows",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1600&q=85",
    imageAlt: "Analytics dashboard displayed on a computer monitor",
  },
  {
    number: "02",
    tag: "Mobile Product",
    title: "Pulse Mobile",
    description:
      "A cross-platform React Native app focused on realtime collaboration, push notifications, and offline-first reliability.",
    stack: ["React Native", "NestJS", "WebSockets", "Expo"],
    metric: "4.8 app rating",
    image:
      "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=1600&q=85",
    imageAlt: "Modern mobile phone displaying an application interface",
  },
  {
    number: "03",
    tag: "Developer Platform",
    title: "Atlas API",
    description:
      "A modular NestJS backend with observability, background jobs, versioned APIs, and infrastructure designed for scale.",
    stack: ["NestJS", "Docker", "AWS", "PostgreSQL"],
    metric: "99.98% uptime",
    image:
      "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1600&q=85",
    imageAlt: "Server infrastructure in a modern data center",
  },
];

const capabilities = [
  {
    icon: Server,
    eyebrow: "Backend systems",
    title: "Reliable APIs & architecture",
    text: "Typed APIs, auth, queues, caching, databases, observability, and deployment-ready services.",
  },
  {
    icon: Layers3,
    eyebrow: "Web products",
    title: "Fast product interfaces",
    text: "Responsive Next.js experiences with thoughtful UX, strong accessibility, and production-grade frontend systems.",
  },
  {
    icon: Smartphone,
    eyebrow: "Mobile experiences",
    title: "Native-feeling apps",
    text: "Cross-platform React Native products designed around real device constraints and smooth everyday interaction.",
  },
];

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="mb-5 flex items-center gap-3 text-xs font-semibold uppercase tracking-[.26em] text-sky-300/80">
      <span className="h-px w-8 bg-sky-300/40" />
      {children}
    </div>
  );
}

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#05070a] text-white selection:bg-sky-300 selection:text-black">
      <div className="grid-bg pointer-events-none absolute inset-x-0 top-0 h-[960px] opacity-70" />
      <div className="pointer-events-none absolute left-1/2 top-[-220px] h-[520px] w-[820px] -translate-x-1/2 rounded-full bg-sky-500/10 blur-[140px]" />

      <nav className="sticky top-0 z-50 border-b border-white/[.06] bg-[#05070a]/75 backdrop-blur-2xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
          <a href="#top" className="text-sm font-black tracking-tight">
            JOHN KIPRUTO<span className="text-sky-300">.</span>
          </a>

          <div className="hidden items-center gap-8 text-sm text-white/55 sm:flex">
            <a className="transition hover:text-white" href="#work">
              Work
            </a>
            <a className="transition hover:text-white" href="#about">
              About
            </a>
            <a className="transition hover:text-white" href="#contact">
              Contact
            </a>
          </div>

          <a
            href="#contact"
            className="rounded-full border border-white/15 bg-white/[.03] px-4 py-2 text-sm font-medium transition hover:border-sky-300/50 hover:bg-white/[.07]"
          >
            Let&apos;s talk
          </a>
        </div>
      </nav>

      <section
        id="top"
        className="relative mx-auto grid max-w-7xl gap-16 px-6 pb-24 pt-20 lg:grid-cols-[1.1fr_.9fr] lg:items-center lg:px-8 lg:pb-32 lg:pt-28"
      >
        <div className="relative z-10 max-w-4xl">
          <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[.05] px-3 py-1.5 text-xs text-white/70 shadow-2xl shadow-sky-950/20">
            <Sparkles size={13} className="text-sky-300" />
            Available for select product collaborations
          </div>

          <h1 className="max-w-5xl text-5xl font-black leading-[.96] tracking-[-0.06em] sm:text-7xl lg:text-[84px]">
            I build digital products that look sharp and{" "}
            <span className="bg-gradient-to-r from-white via-sky-200 to-sky-400 bg-clip-text text-transparent">
              scale cleanly.
            </span>
          </h1>

          <p className="mt-8 max-w-2xl text-lg leading-8 text-white/55 sm:text-xl">
            Full-stack engineer specializing in{" "}
            <strong className="font-semibold text-white">
              Next.js, NestJS, and React Native
            </strong>
            . I turn complex product ideas into fast, maintainable web and
            mobile experiences.
          </p>

          <div className="mt-10 flex flex-wrap gap-3">
            <a
              href="#work"
              className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-bold text-black transition hover:-translate-y-0.5 hover:bg-sky-100"
            >
              View selected work <ArrowUpRight size={16} />
            </a>
            <a
              href="mailto:johnkipruto157@gmail.com"
              className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[.02] px-5 py-3 text-sm font-semibold text-white transition hover:border-white/25 hover:bg-white/[.06]"
            >
              <Mail size={16} /> johnkipruto157@gmail.com
            </a>
          </div>

          <div className="mt-12 flex flex-wrap gap-x-7 gap-y-3 text-sm text-white/40">
            {["Web", "Mobile", "APIs", "Cloud"].map((item) => (
              <span key={item} className="inline-flex items-center gap-2">
                <CheckCircle2 size={14} className="text-sky-300/80" /> {item}
              </span>
            ))}
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-xl lg:mx-0 lg:max-w-none">
          <div className="absolute -inset-12 rounded-full bg-violet-500/10 blur-3xl" />
          <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[.05] p-3 shadow-2xl shadow-black/50 backdrop-blur-xl">
            <div className="overflow-hidden rounded-[1.4rem] border border-white/[.08] bg-[#0a0e14]">
              <div className="flex items-center justify-between border-b border-white/[.06] px-4 py-3">
                <div className="flex gap-1.5">
                  <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
                  <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
                  <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
                </div>
                <span className="text-[10px] uppercase tracking-[.24em] text-white/25">
                  product-system.tsx
                </span>
              </div>

              <div className="grid gap-3 p-4 sm:grid-cols-2">
                <div className="rounded-2xl border border-white/[.07] bg-white/[.03] p-5 sm:row-span-2">
                  <p className="text-xs uppercase tracking-[.2em] text-white/30">
                    Shipping
                  </p>
                  <p className="mt-2 text-3xl font-bold tracking-tight">
                    12 releases
                  </p>
                  <p className="mt-1 text-sm text-white/40">this quarter</p>
                  <div className="mt-10 flex h-28 items-end gap-2">
                    {[38, 52, 44, 70, 58, 84, 68, 92].map((height, index) => (
                      <div
                        key={`${height}-${index}`}
                        className="flex-1 rounded-t-md bg-gradient-to-t from-sky-500/20 to-sky-300/90"
                        style={{ height: `${height}%` }}
                      />
                    ))}
                  </div>
                </div>

                <div className="rounded-2xl border border-white/[.07] bg-gradient-to-br from-sky-400/10 to-transparent p-5">
                  <Code2 size={18} className="text-sky-300" />
                  <p className="mt-8 text-xs text-white/35">Frontend</p>
                  <p className="mt-1 font-semibold">Next.js + Tailwind</p>
                </div>

                <div className="rounded-2xl border border-white/[.07] bg-gradient-to-br from-violet-400/10 to-transparent p-5">
                  <Database size={18} className="text-violet-300" />
                  <p className="mt-8 text-xs text-white/35">Backend</p>
                  <p className="mt-1 font-semibold">NestJS + PostgreSQL</p>
                </div>
              </div>
            </div>
          </div>

          <div className="absolute -bottom-5 -left-4 hidden rounded-2xl border border-white/10 bg-[#0b0f15]/95 px-4 py-3 shadow-xl backdrop-blur-xl sm:block">
            <p className="text-[10px] uppercase tracking-[.2em] text-white/30">
              Focus
            </p>
            <p className="mt-1 text-sm font-semibold">Product engineering</p>
          </div>
        </div>

        <a
          href="#work"
          aria-label="Scroll to selected work"
          className="absolute bottom-8 left-6 hidden items-center gap-2 text-xs uppercase tracking-[.22em] text-white/30 transition hover:text-white/70 lg:flex"
        >
          Scroll <ArrowDown size={14} />
        </a>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-10 lg:px-8">
        <div className="grid gap-3 md:grid-cols-3">
          {capabilities.map(({ icon: Icon, eyebrow, title, text }) => (
            <article
              key={title}
              className="group rounded-3xl border border-white/[.07] bg-white/[.035] p-6 transition duration-300 hover:-translate-y-1 hover:border-white/[.13] hover:bg-white/[.055]"
            >
              <Icon className="mb-8 text-sky-300" size={21} />
              <p className="text-sm text-white/35">{eyebrow}</p>
              <h2 className="mt-1 text-lg font-semibold tracking-tight">
                {title}
              </h2>
              <p className="mt-3 text-sm leading-6 text-white/45">{text}</p>
            </article>
          ))}
        </div>
      </section>

      <section
        id="work"
        className="mx-auto max-w-7xl px-6 py-28 lg:px-8 lg:py-36"
      >
        <SectionLabel>Selected work</SectionLabel>

        <div className="mb-14 flex max-w-5xl flex-col gap-5 md:flex-row md:items-end md:justify-between">
          <h2 className="max-w-3xl text-4xl font-bold tracking-[-.04em] sm:text-6xl">
            Products built for real-world use.
          </h2>
          <p className="max-w-sm text-sm leading-6 text-white/45">
            A selection of product work spanning SaaS, mobile, platform
            engineering, and backend architecture.
          </p>
        </div>

        <div className="space-y-8">
          {projects.map((project, index) => (
            <article
              key={project.title}
              className="group overflow-hidden rounded-[2rem] border border-white/[.08] bg-white/[.035] transition duration-500 hover:border-white/[.14]"
            >
              <div className="grid lg:grid-cols-[1.05fr_.95fr]">
                <div
                  className={`relative min-h-[320px] overflow-hidden ${index % 2 === 1 ? "lg:order-2" : ""}`}
                >
                  <img
                    src={project.image}
                    alt={project.imageAlt}
                    loading="lazy"
                    className="absolute inset-0 h-full w-full object-cover opacity-75 grayscale-[20%] transition duration-700 group-hover:scale-[1.03] group-hover:opacity-90 group-hover:grayscale-0"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#05070a] via-transparent to-transparent lg:bg-gradient-to-r lg:from-transparent lg:to-[#05070a]/35" />
                  <div className="absolute left-5 top-5 rounded-full border border-white/15 bg-black/40 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[.2em] text-white/70 backdrop-blur-md">
                    Case study
                  </div>
                </div>

                <div
                  className={`flex min-h-[320px] flex-col justify-between p-7 sm:p-10 lg:p-12 ${index % 2 === 1 ? "lg:order-1" : ""}`}
                >
                  <div>
                    <div className="mb-6 flex items-center gap-3 text-xs font-semibold uppercase tracking-[.18em] text-white/35">
                      <span>{project.number}</span>
                      <span className="h-px w-8 bg-white/20" />
                      <span>{project.tag}</span>
                    </div>

                    <h3 className="text-3xl font-bold tracking-[-.035em] sm:text-5xl">
                      {project.title}
                    </h3>
                    <p className="mt-5 max-w-xl text-base leading-7 text-white/50">
                      {project.description}
                    </p>

                    <div className="mt-7 flex flex-wrap gap-2">
                      {project.stack.map((item) => (
                        <span
                          key={item}
                          className="rounded-full border border-white/[.09] bg-white/[.035] px-3 py-1.5 text-xs text-white/55"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="mt-10 flex items-end justify-between gap-6">
                    <div>
                      <p className="text-[10px] uppercase tracking-[.22em] text-white/30">
                        Impact
                      </p>
                      <p className="mt-2 text-2xl font-bold text-white/90">
                        {project.metric}
                      </p>
                    </div>
                    <span className="grid h-11 w-11 place-items-center rounded-full border border-white/10 bg-white/[.04] transition group-hover:rotate-45 group-hover:bg-white group-hover:text-black">
                      <a
                        href={"https://github.com/John-Kipruto"}
                        target="_blank"
                      >
                        <ArrowUpRight size={18} />
                      </a>
                    </span>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section
        id="about"
        className="border-y border-white/[.06] bg-white/[.02]"
      >
        <div className="mx-auto grid max-w-7xl gap-14 px-6 py-28 lg:grid-cols-[.72fr_1.28fr] lg:px-8 lg:py-36">
          <div>
            <SectionLabel>About</SectionLabel>
            <h2 className="text-4xl font-bold tracking-[-.04em] sm:text-6xl">
              Product thinking meets engineering depth.
            </h2>
          </div>

          <div className="lg:pt-8">
            <p className="max-w-3xl text-xl leading-9 text-white/65 sm:text-2xl">
              I build end-to-end digital products with a bias toward clear
              architecture, thoughtful UX, and systems that stay maintainable as
              teams and traffic grow.
            </p>
            <p className="mt-6 max-w-3xl leading-7 text-white/45">
              From shaping a frontend system in Next.js to designing NestJS
              services or shipping production React Native apps, I work across
              the stack while keeping product outcomes in focus.
            </p>

            <div className="mt-10 flex flex-wrap gap-2">
              {skills.map((skill) => (
                <span
                  key={skill}
                  className="rounded-xl border border-white/[.07] bg-white/[.045] px-3.5 py-2 text-sm text-white/65"
                >
                  {skill}
                </span>
              ))}
            </div>

            <div className="mt-12 flex flex-wrap items-center gap-x-8 gap-y-4 text-sm text-white/45">
              <span className="inline-flex items-center gap-2">
                <MapPin size={16} /> Nairobi, Kenya
              </span>
              <span className="inline-flex items-center gap-2">
                <Sparkles size={15} className="text-sky-300" /> Open to remote
                opportunities
              </span>
            </div>
          </div>
        </div>
      </section>

      <section
        id="contact"
        className="mx-auto max-w-7xl px-6 pb-10 pt-28 lg:px-8 lg:pt-36"
      >
        <div className="relative overflow-hidden rounded-[2.25rem] border border-white/10 bg-white/[.05] p-8 sm:p-12 lg:p-16">
          <div className="pointer-events-none absolute -right-16 -top-24 h-72 w-72 rounded-full bg-sky-400/15 blur-[90px]" />
          <div className="pointer-events-none absolute -bottom-24 left-1/3 h-72 w-72 rounded-full bg-violet-400/10 blur-[100px]" />

          <div className="relative">
            <SectionLabel>Contact</SectionLabel>
            <div className="grid gap-10 lg:grid-cols-[1fr_auto] lg:items-end">
              <div>
                <h2 className="max-w-4xl text-4xl font-black tracking-[-.045em] sm:text-6xl lg:text-7xl">
                  Have an ambitious product to build?
                </h2>
                <p className="mt-6 max-w-xl leading-7 text-white/50">
                  I&apos;m interested in high-leverage product engineering,
                  platform work, and teams that care about quality.
                </p>
              </div>

              <a
                href="mailto:johnkipruto157@gmail.com"
                className="inline-flex w-fit items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-bold text-black transition hover:-translate-y-0.5 hover:bg-sky-100"
              >
                Start a conversation <ArrowUpRight size={16} />
              </a>
            </div>
          </div>
        </div>

        <footer className="flex flex-col gap-5 py-10 text-sm text-white/35 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 JOHN KIPRUTO. Built with Next.js + Tailwind CSS.</p>
          <div className="flex gap-4">
            <a
              className="transition hover:text-white"
              href="#"
              aria-label="GitHub"
            >
              <FaGithub size={18} />
            </a>
            <a
              className="transition hover:text-white"
              href="#"
              aria-label="LinkedIn"
            >
              <FaLinkedin size={18} />
            </a>
            <a
              className="transition hover:text-white"
              href="mailto:johnkipruto157@gmail.com"
              aria-label="Email"
            >
              <Mail size={18} />
            </a>
          </div>
        </footer>
      </section>
    </main>
  );
}
