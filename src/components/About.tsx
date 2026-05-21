import { motion } from "motion/react";

const stats = [
  { k: "3", v: "Apps built end-to-end" },
  { k: "8.5", v: "CGPA · B.Tech CSE" },
  { k: "2x", v: "NPTEL topper" },
  { k: "2026", v: "Graduating year" },
];

const ease = [0.22, 1, 0.36, 1] as const;

export function About() {
  return (
    <section id="about" className="px-6 md:px-10 py-28 md:py-40 bg-surface">
      <div className="mx-auto max-w-[1400px] grid grid-cols-1 md:grid-cols-12 gap-12">
        <div className="md:col-span-5">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground mb-6">
            ⌘ 03 — About
          </p>
          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease }}
            className="font-display text-4xl md:text-6xl tracking-[-0.02em] leading-[1.02] text-balance"
          >
            A fresher who ships, not just <span className="italic text-secondary">studies.</span>
          </motion.h2>
        </div>

        <div className="md:col-span-6 md:col-start-7 space-y-6 text-muted-foreground text-base md:text-lg leading-relaxed">
          <p>
            I'm a final-year B.Tech Computer Science student at Galgotias University with
            hands-on experience building cross-platform mobile apps in React Native and Expo.
          </p>
          <p>
            I love the craft side of mobile — authentication flows, state management with
            Zustand, polished animations with Reanimated, and dynamic data with modern
            backends like Drizzle, Neon Postgres and Sanity CMS.
          </p>

          <div className="grid grid-cols-2 gap-6 pt-10">
            {stats.map((s, i) => (
              <motion.div
                key={s.k}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.08, ease }}
                className="border-t border-border pt-4"
              >
                <div className="font-display text-4xl md:text-5xl text-foreground">{s.k}</div>
                <div className="text-sm mt-1">{s.v}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
