type MarqueeProps = {
  items: string[];
};

export default function Marquee({ items }: MarqueeProps) {
  const doubled = [...items, ...items];
  return (
    <div className="overflow-hidden border-y border-[var(--color-border)] py-8 bg-[var(--color-bg)]">
      <div className="flex gap-12 animate-marquee whitespace-nowrap">
        {doubled.map((item, i) => (
          <div key={i} className="flex items-center gap-12 text-3xl md:text-5xl font-semibold tracking-tight">
            <span className="text-[var(--color-ink)]">{item}</span>
            <span className="text-[var(--color-accent)]">✦</span>
          </div>
        ))}
      </div>
    </div>
  );
}
