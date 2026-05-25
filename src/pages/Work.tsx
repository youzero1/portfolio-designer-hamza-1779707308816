import { useState } from 'react';
import ProjectCard from '@/components/ProjectCard';
import { projects } from '@/lib/data';
import clsx from 'clsx';

const categories = ['All', 'Brand Identity', 'Product Design', 'Web Development', 'Interface Design', 'Editorial'];

export default function Work() {
  const [active, setActive] = useState('All');

  const filtered = active === 'All' ? projects : projects.filter((p) => p.category === active);

  return (
    <div className="max-w-7xl mx-auto px-6 lg:px-10 pt-16 pb-24">
      <div className="mb-16">
        <p className="text-xs uppercase tracking-[0.2em] text-[var(--color-muted)] mb-4">Archive — 2018 / 2024</p>
        <h1 className="text-5xl md:text-8xl font-semibold tracking-tighter">
          Selected <span className="italic font-light text-[var(--color-accent)]">work</span>.
        </h1>
        <p className="mt-6 max-w-xl text-[var(--color-muted)]">
          A small curated archive of projects across identity, product, and web. Each piece is the result of close collaboration with thoughtful clients.
        </p>
      </div>

      <div className="flex flex-wrap gap-2 mb-10">
        {categories.map((c) => (
          <button
            key={c}
            onClick={() => setActive(c)}
            className={clsx(
              'px-4 py-2 rounded-full text-sm transition border',
              active === c
                ? 'bg-[var(--color-ink)] text-[var(--color-bg)] border-[var(--color-ink)]'
                : 'border-[var(--color-border)] text-[var(--color-muted)] hover:text-[var(--color-ink)] hover:border-white/30'
            )}
          >
            {c}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filtered.map((p, i) => (
          <ProjectCard key={p.id} project={p} large={i % 5 === 0} />
        ))}
      </div>

      {filtered.length === 0 && (
        <p className="text-center text-[var(--color-muted)] py-20">No projects in this category yet.</p>
      )}
    </div>
  );
}
