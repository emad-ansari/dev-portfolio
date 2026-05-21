import { motion } from "motion/react";
import { ArrowDownRight } from "lucide-react";

const ease = [0.22, 1, 0.36, 1] as const;

export function Hero() {
  return (
    <section id="top" className="relative min-h-screen pt-32 pb-20 px-6 md:px-10 overflow-hidden">
      <div
        aria-hidden
        className="absolute inset-0 -z-10"
        style={{ background: "var(--gradient-mesh)" }}
      />

      <div className="mx-auto max-w-[1400px]">
        {/* Meta row */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease }}
          className="flex items-center justify-between text-xs font-mono uppercase tracking-[0.2em] text-muted-foreground mb-16"
        >
          <span className="flex items-center gap-2">
            <span className="relative flex size-1.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary/60" />
              <span className="relative inline-flex size-1.5 rounded-full bg-primary" />
            </span>
            Available — Q3 2026
          </span>
          <span className="hidden md:inline">Mobile / React Native / Product</span>
          <span>(01) Index</span>
        </motion.div>

        {/* Display headline */}
        <h1 className="font-display text-balance text-[15vw] md:text-[10.5vw] leading-[0.92] tracking-[-0.03em]">
          {["Crafting", "mobile", "experiences"].map((word, i) => (
            <motion.span
              key={word}
              initial={{ y: "110%", opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.9, delay: 0.1 + i * 0.08, ease }}
              className="inline-block mr-[0.2em] overflow-hidden align-bottom"
              style={{ display: "inline-block" }}
            >
              {word}
            </motion.span>
          ))}
          <motion.span
            initial={{ y: "110%", opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.9, delay: 0.34, ease }}
            className="inline-block text-secondary italic"
          >
            that feel inevitable.
          </motion.span>
        </h1>

        {/* Sub row */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-12 gap-10 items-end">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5, ease }}
            className="md:col-span-5 md:col-start-1 text-base md:text-lg text-muted-foreground max-w-md text-pretty"
          >
            I'm a senior React Native engineer building precise, performant
            iOS &amp; Android products for ambitious teams worldwide.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.6, ease }}
            className="md:col-span-4 md:col-start-9 flex md:justify-end"
          >
            <a
              href="#work"
              className="group inline-flex items-center gap-3 rounded-full bg-primary text-primary-foreground pl-6 pr-2 py-2 text-sm"
            >
              View selected work
              <span className="grid place-items-center size-9 rounded-full bg-primary-foreground text-primary transition-transform group-hover:rotate-45">
                <ArrowDownRight className="size-4" />
              </span>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
