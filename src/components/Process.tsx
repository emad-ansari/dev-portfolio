import { motion } from "motion/react";

const steps = [
  {
    n: "01",
    t: "Discover",
    d: "Audit the brief, the audience and the platform constraints. Pick the smallest meaningful slice.",
  },
  {
    n: "02",
    t: "Prototype",
    d: "Build interactive React Native prototypes in days. Real gestures, real data, real device.",
  },
  {
    n: "03",
    t: "Ship",
    d: "Native-grade implementation, EAS pipelines, store submission, and the post-launch tail.",
  },
];

const ease = [0.22, 1, 0.36, 1] as const;

export function Process() {
  return (
    <section id="process" className="px-6 md:px-10 py-28 md:py-40">
      <div className="mx-auto max-w-[1400px]">
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground mb-6">
          ⌘ 04 — How we'll work
        </p>
        <h2 className="font-display text-4xl md:text-6xl tracking-[-0.02em] mb-16 md:mb-24 max-w-3xl text-balance">
          A simple process for <span className="italic text-secondary">serious</span> apps.
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-border rounded-2xl overflow-hidden border border-border">
          {steps.map((s, i) => (
            <motion.div
              key={s.n}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: i * 0.12, ease }}
              className="bg-background p-8 md:p-10 group hover:bg-surface-3 transition-colors duration-500"
            >
              <div className="flex items-center justify-between mb-12">
                <span className="font-mono text-xs text-muted-foreground">{s.n}</span>
                <span className="size-1.5 rounded-full bg-accent group-hover:bg-primary transition-colors" />
              </div>
              <h3 className="font-display text-3xl md:text-4xl mb-4">{s.t}</h3>
              <p className="text-muted-foreground text-pretty">{s.d}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
