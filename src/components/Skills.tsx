import { motion } from "motion/react";

const groups = [
  { t: "Languages", items: ["JavaScript", "TypeScript"] },
  { t: "Frontend & Mobile", items: ["React Native (CLI)", "Expo", "Expo Router", "NativeWind", "Reanimated"] },
  { t: "Backend", items: ["Node.js", "Express.js", "REST APIs"] },
  { t: "State Management", items: ["Zustand", "Redux"] },
  { t: "Databases & ORMs", items: ["MongoDB", "MySQL", "PostgreSQL", "Drizzle ORM", "Sanity.io"] },
  { t: "Tools", items: ["Git", "GitHub", "Postman", "VS Code", "Clerk"] },
];

const ease = [0.22, 1, 0.36, 1] as const;

export function Skills() {
  return (
    <section id="skills" className="px-6 md:px-10 py-28 md:py-40">
      <div className="mx-auto max-w-[1400px]">
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground mb-6">
          ⌘ 04 — Skills
        </p>
        <h2 className="font-display text-4xl md:text-6xl tracking-[-0.02em] mb-16 md:mb-20 max-w-3xl text-balance">
          The toolkit I <span className="italic text-secondary">reach for.</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {groups.map((g, i) => (
            <motion.div
              key={g.t}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.7, delay: i * 0.06, ease }}
              className="rounded-2xl border border-border bg-card p-7"
              style={{ boxShadow: "var(--shadow-soft)" }}
            >
              <div className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground mb-5">
                {g.t}
              </div>
              <div className="flex flex-wrap gap-2">
                {g.items.map((it) => (
                  <span
                    key={it}
                    className="text-sm px-3 py-1.5 rounded-full bg-surface-2 text-foreground/90 border border-border"
                  >
                    {it}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
