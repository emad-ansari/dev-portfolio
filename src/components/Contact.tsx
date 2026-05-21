import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";

const ease = [0.22, 1, 0.36, 1] as const;

export function Contact() {
	return (
		<section
			id="contact"
			className="px-6 md:px-10 pt-28 md:pt-40 pb-12 bg-primary text-primary-foreground relative overflow-hidden"
		>
			<div className="mx-auto max-w-[1400px]">
				<p className="font-mono text-xs uppercase tracking-[0.2em] text-primary-foreground/60 mb-8">
					⌘ 07 — Let's connect
				</p>

				<motion.h2
					initial={{ opacity: 0, y: 30 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 1, ease }}
					className="font-display text-[14vw] md:text-[9vw] leading-[0.95] tracking-[-0.03em] text-balance"
				>
					Open to
					<br />
					<span className="italic text-primary-foreground/70 text-center">
						New opportunity
					</span>
				</motion.h2>

				<div className="mt-16 grid grid-cols-1 md:grid-cols-12 gap-10 items-end">
					<div className="md:col-span-6">
						<a
							href="mailto:emadansari2323@gmail.com"
							className="group inline-flex items-center gap-4 text-2xl md:text-4xl font-display border-b border-primary-foreground/30 pb-2 hover:border-primary-foreground transition-colors break-all"
						>
							emadansari2323@gmail.com
							<ArrowUpRight className="size-7 transition-transform group-hover:rotate-45 shrink-0" />
						</a>
					</div>
					<div className="md:col-span-4 md:col-start-9 space-y-3 text-sm text-primary-foreground/70">
						<div className="flex justify-between border-b border-primary-foreground/20 pb-2">
							<span>Location</span>
							<span>Greater Noida</span>
						</div>

						<div className="flex justify-between border-b border-primary-foreground/20 pb-2">
							<span>Status</span>
							<span>Open to opportunities</span>
						</div>
					</div>
				</div>

				<footer className="mt-32 pt-8 border-t border-primary-foreground/20 flex flex-wrap items-center justify-between gap-4 text-xs font-mono text-primary-foreground/60">
					<span>© 2026 — Mohammad Emad. Built with care.</span>
					<div className="flex gap-6">
						<a
							href="https://github.com/emad-ansari"
							target="_blank"
							rel="noreferrer"
							className="hover:text-primary-foreground"
						>
							GitHub
						</a>
						<a
							href="https://leetcode.com/u/emad-ansari/"
							target="_blank"
							rel="noreferrer"
							className="hover:text-primary-foreground"
						>
							LeetCode
						</a>
						<a
							href="https://linkedin.com/in/mohammad-emad-ab4688304/"
							target="_blank"
							rel="noreferrer"
							className="hover:text-primary-foreground"
						>
							LinkedIn
						</a>
					</div>
				</footer>
			</div>
		</section>
	);
}
