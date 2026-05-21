import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import fitness from "@/assets/app-fitness.jpg";
import finance from "@/assets/app-finance.jpg";
import meditation from "@/assets/app-meditation.jpg";

const projects = [
  {
    n: "01",
    title: "NexLiftr",
    tag: "Workout Tracker",
    year: "2025",
    blurb:
      "A cross-platform workout tracking app to plan, track, and analyze fitness activities in real time. Sanity CMS powers the exercise library, Clerk handles auth, and Reanimated drives the UI motion.",
    stack: ["React Native", "Expo", "Zustand", "NativeWind", "Sanity CMS", "Clerk"],
    image: fitness,
    link: "https://github.com/emad-ansari",
    accent: "oklch(0.36 0.03 240)",
  },
  {
    n: "02",
    title: "Grocify",
    tag: "Grocery Management",
    year: "2025",
    blurb:
      "A high-performance grocery management app to organize shopping lists and streamline planning. Drizzle ORM with Neon Postgres on the backend, Clerk auth, and smooth Reanimated transitions on the frontend.",
    stack: ["React Native", "Expo", "Drizzle ORM", "Neon PostgreSQL", "Clerk"],
    image: finance,
    link: "https://github.com/emad-ansari",
    accent: "oklch(0.55 0.025 240)",
  },
  {
    n: "03",
    title: "Notely",
    tag: "Notes & Productivity",
    year: "2024",
    blurb:
      "A minimal note-taking companion with offline-first sync, rich text blocks, and a focused writing mode. Built to explore gesture-driven navigation and persistent local state.",
    stack: ["React Native", "Expo Router", "TypeScript", "Zustand"],
    image: meditation,
    link: "https://github.com/emad-ansari",
    accent: "oklch(0.76 0.018 240)",
  },
];

const ease = [0.22, 1, 0.36, 1] as const;

export function Work() {
  return (
    <section id="work" className="px-6 md:px-10 py-28 md:py-40">
      <div className="mx-auto max-w-[1400px]">
        <div className="flex items-end justify-between mb-16 md:mb-24">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground mb-4">
              ⌘ 02 — Selected work
            </p>
            <h2 className="font-display text-5xl md:text-7xl tracking-[-0.02em] text-balance">
              Apps I've built with <span className="italic text-secondary">React Native.</span>
            </h2>
          </div>
          <span className="hidden md:block font-mono text-xs text-muted-foreground">
            2024 — 2025
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
          {projects.map((p, idx) => (
            <motion.article
              key={p.n}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.9, ease, delay: (idx % 2) * 0.1 }}
              className={`group ${idx % 2 === 1 ? "md:mt-16" : ""}`}
            >
              <div
                className="rounded-3xl border border-border bg-card p-4 md:p-5 transition-all duration-500 hover:-translate-y-1 hover:border-secondary/40"
                style={{ boxShadow: "var(--shadow-card)" }}
              >
                <div className="relative aspect-[4/5] rounded-2xl overflow-hidden bg-surface-2">
                  <div
                    aria-hidden
                    className="absolute inset-0 opacity-40 transition-opacity duration-700 group-hover:opacity-60"
                    style={{
                      background: `radial-gradient(60% 60% at 50% 0%, ${p.accent}, transparent 70%)`,
                    }}
                  />
                  <motion.img
                    src={p.image}
                    alt={`${p.title} — ${p.tag}`}
                    loading="lazy"
                    width={768}
                    height={1536}
                    className="absolute inset-0 size-full object-cover"
                    whileHover={{ scale: 1.04 }}
                    transition={{ duration: 1.2, ease }}
                  />
                  <div className="absolute top-4 left-4 font-mono text-[10px] text-background/90 bg-primary/80 backdrop-blur px-2.5 py-1 rounded-full">
                    {p.n} / {p.year}
                  </div>
                </div>

                <div className="px-2 pt-6 pb-2">
                  <div className="flex items-start justify-between gap-4 mb-3">
                    <div>
                      <h3 className="font-display text-3xl md:text-4xl tracking-tight leading-none">
                        {p.title}
                      </h3>
                      <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground mt-2">
                        {p.tag}
                      </p>
                    </div>
                    <a
                      href={p.link}
                      target="_blank"
                      rel="noreferrer"
                      className="grid place-items-center size-11 rounded-full bg-surface-2 text-foreground group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-500"
                      aria-label={`Open ${p.title} on GitHub`}
                    >
                      <ArrowUpRight className="size-5 transition-transform group-hover:rotate-45" />
                    </a>
                  </div>

                  <p className="text-sm text-muted-foreground text-pretty leading-relaxed">
                    {p.blurb}
                  </p>

                  <div className="flex flex-wrap gap-2 mt-5 pt-5 border-t border-border">
                    {p.stack.map((s) => (
                      <span
                        key={s}
                        className="text-[11px] font-mono px-2.5 py-1 rounded-full bg-surface-2 text-muted-foreground"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
