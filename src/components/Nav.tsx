import { motion } from "motion/react";

export function Nav() {
  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className="fixed top-0 left-0 right-0 z-50 px-6 md:px-10 pt-6"
    >
      <div className="mx-auto max-w-[1400px] flex items-center justify-between rounded-full border border-border/60 bg-background/70 backdrop-blur-xl px-5 py-3">
        <a href="#top" className="flex items-center gap-2">
          <div className="size-2 rounded-full bg-primary" />
          <span className="font-display text-lg leading-none">Studio<span className="text-secondary">.</span></span>
        </a>
        <nav className="hidden md:flex items-center gap-8 text-sm text-muted-foreground">
          <a href="#work" className="hover:text-foreground transition-colors">Work</a>
          <a href="#about" className="hover:text-foreground transition-colors">About</a>
          <a href="#process" className="hover:text-foreground transition-colors">Process</a>
          <a href="#contact" className="hover:text-foreground transition-colors">Contact</a>
        </nav>
        <a
          href="#contact"
          className="text-sm rounded-full bg-primary text-primary-foreground px-4 py-2 hover:bg-primary/90 transition-colors"
        >
          Let's talk
        </a>
      </div>
    </motion.header>
  );
}
