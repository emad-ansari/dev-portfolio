import { motion } from "motion/react";
import { Award, Trophy, Cloud } from "lucide-react";

const items = [
  {
    icon: Trophy,
    title: "NPTEL Topper — Compiler Design",
    org: "NPTEL · IIT",
    date: "Jan — Apr 2025",
    desc: "Ranked among top scorers in the national NPTEL certification for Compiler Design.",
  },
  {
    icon: Award,
    title: "NPTEL Topper — Software Engineering",
    org: "NPTEL · IIT",
    date: "Jul — Oct 2024",
    desc: "Achieved topper status in the NPTEL Software Engineering course.",
  },
  {
    icon: Cloud,
    title: "AWS Cloud Virtual Internship",
    org: "AWS Academy",
    date: "Oct — Dec 2025",
    desc: "Hands-on cloud fundamentals, compute, storage, and deployment workflows on AWS.",
  },
];

const ease = [0.22, 1, 0.36, 1] as const;

export function Achievements() {
  return (
    <section id="achievements" className="px-6 md:px-10 py-28 md:py-40">
      <div className="mx-auto max-w-[1400px]">
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground mb-6">
          ⌘ 06 — Achievements
        </p>
        <h2 className="font-display text-4xl md:text-6xl tracking-[-0.02em] mb-16 md:mb-20 max-w-3xl text-balance">
          Certifications &amp; <span className="italic text-secondary">milestones.</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {items.map((it, i) => {
            const Icon = it.icon;
            return (
              <motion.div
                key={it.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.8, delay: i * 0.1, ease }}
                className="rounded-2xl border border-border bg-card p-8 flex flex-col gap-6 hover:-translate-y-1 transition-transform duration-500"
                style={{ boxShadow: "var(--shadow-soft)" }}
              >
                <div className="grid place-items-center size-12 rounded-xl bg-primary text-primary-foreground">
                  <Icon className="size-5" />
                </div>
                <div className="space-y-2 flex-1">
                  <h3 className="font-display text-2xl leading-tight">{it.title}</h3>
                  <div className="font-mono text-[11px] uppercase tracking-[0.15em] text-muted-foreground">
                    {it.org} · {it.date}
                  </div>
                  <p className="text-sm text-muted-foreground text-pretty leading-relaxed pt-2">
                    {it.desc}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
