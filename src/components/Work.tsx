import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import fitness from "@/assets/app-fitness.jpg";
import finance from "@/assets/app-finance.jpg";
import meditation from "@/assets/app-meditation.jpg";
import travel from "@/assets/app-travel.jpg";

const projects = [
  {
    n: "01",
    title: "Pulse",
    tag: "Health & Fitness",
    year: "2025",
    blurb: "A training companion built with Reanimated 3 and Skia — 120fps charts on mid-tier Android.",
    image: fitness,
    accent: "oklch(0.36 0.03 240)",
  },
  {
    n: "02",
    title: "Vaultline",
    tag: "Fintech",
    year: "2025",
    blurb: "Native-feeling banking flows. Biometric auth, instant transfers, zero jank on cold start.",
    image: finance,
    accent: "oklch(0.55 0.025 240)",
  },
  {
    n: "03",
    title: "Stillwave",
    tag: "Wellness",
    year: "2024",
    blurb: "Breathwork sessions with audio-reactive visuals. Expo Modules + custom CoreAudio bridge.",
    image: meditation,
    accent: "oklch(0.76 0.018 240)",
  },
  {
    n: "04",
    title: "Wayfare",
    tag: "Travel",
    year: "2024",
    blurb: "Offline-first itinerary planner. Watermelon DB, MapLibre, deep linking across 14 surfaces.",
    image: travel,
    accent: "oklch(0.5 0.02 240)",
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
              Apps shipped to <span className="italic text-secondary">millions.</span>
            </h2>
          </div>
          <span className="hidden md:block font-mono text-xs text-muted-foreground">
            2024 — 2025
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-24 md:gap-y-32">
          {projects.map((p, idx) => (
            <motion.article
              key={p.n}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.9, ease, delay: (idx % 2) * 0.1 }}
              className={`group ${idx % 2 === 1 ? "md:mt-24" : ""}`}
            >
              <div
                className="relative aspect-[4/5] rounded-2xl overflow-hidden bg-surface-2"
                style={{
                  boxShadow: "var(--shadow-card)",
                }}
              >
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
                <div className="absolute top-5 left-5 font-mono text-xs text-background/80 bg-primary/70 backdrop-blur px-2.5 py-1 rounded-full">
                  {p.n} / {p.year}
                </div>
                <a
                  href="#"
                  className="absolute bottom-5 right-5 grid place-items-center size-11 rounded-full bg-background text-foreground opacity-0 translate-y-2 transition-all duration-500 group-hover:opacity-100 group-hover:translate-y-0"
                  aria-label={`Open ${p.title}`}
                >
                  <ArrowUpRight className="size-5" />
                </a>
              </div>

              <div className="mt-6 flex items-start justify-between gap-6">
                <div>
                  <h3 className="font-display text-3xl md:text-4xl tracking-tight">{p.title}</h3>
                  <p className="font-mono text-xs uppercase tracking-[0.18em] text-muted-foreground mt-2">
                    {p.tag}
                  </p>
                </div>
                <p className="max-w-xs text-sm text-muted-foreground text-pretty">
                  {p.blurb}
                </p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
