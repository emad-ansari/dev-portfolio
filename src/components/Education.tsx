import { motion } from "motion/react";

const ease = [0.22, 1, 0.36, 1] as const;

export function Education() {
  return (
    <section id="education" className="px-6 md:px-10 py-28 md:py-40 bg-surface">
      <div className="mx-auto max-w-[1400px]">
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground mb-6">
          ⌘ 05 — Education
        </p>
        <h2 className="font-display text-4xl md:text-6xl tracking-[-0.02em] mb-16 md:mb-20 max-w-3xl text-balance">
          Where I'm <span className="italic text-secondary">learning.</span>
        </h2>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease }}
          className="rounded-3xl border border-border bg-card p-8 md:p-12"
          style={{ boxShadow: "var(--shadow-card)" }}
        >
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
            <div className="md:col-span-7">
              <div className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground mb-3">
                Bachelor of Technology
              </div>
              <h3 className="font-display text-3xl md:text-5xl tracking-tight leading-tight">
                Galgotias University
              </h3>
              <p className="text-muted-foreground mt-3 text-base md:text-lg">
                Computer Science &amp; Engineering — Greater Noida, India
              </p>
            </div>
            <div className="md:col-span-5 md:text-right space-y-4">
              <div>
                <div className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground">CGPA</div>
                <div className="font-display text-5xl md:text-6xl">8.5<span className="text-muted-foreground text-2xl">/10</span></div>
              </div>
              <div className="font-mono text-xs text-muted-foreground">
                Sep 2022 — Present
              </div>
            </div>
          </div>

          <div className="mt-10 pt-8 border-t border-border grid grid-cols-2 md:grid-cols-4 gap-6 text-sm">
            {[
              ["DSA", "Java & C++"],
              ["DBMS", "SQL & NoSQL"],
              ["OS", "Concurrency"],
              ["Networks", "TCP/IP, HTTP"],
            ].map(([k, v]) => (
              <div key={k}>
                <div className="font-display text-xl">{k}</div>
                <div className="text-muted-foreground text-xs mt-1">{v}</div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
