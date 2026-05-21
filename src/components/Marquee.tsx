const items = [
  "React Native",
  "Expo",
  "TypeScript",
  "Zustand",
  "NativeWind",
  "Reanimated",
  "Clerk Auth",
  "Drizzle ORM",
  "Sanity CMS",
  "PostgreSQL",
];

export function Marquee() {
  return (
    <section className="border-y border-border bg-surface py-6 overflow-hidden">
      <div className="flex animate-marquee whitespace-nowrap gap-12">
        {[...items, ...items, ...items].map((item, i) => (
          <div key={i} className="flex items-center gap-12 text-2xl md:text-3xl font-display text-secondary">
            <span>{item}</span>
            <span className="text-accent">✦</span>
          </div>
        ))}
      </div>
    </section>
  );
}
