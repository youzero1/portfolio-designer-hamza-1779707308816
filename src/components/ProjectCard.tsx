import type { Project } from '@/types';
import { ArrowUpRight } from 'lucide-react';

type ProjectCardProps = {
  project: Project;
  large?: boolean;
};

export default function ProjectCard({ project, large = false }: ProjectCardProps) {
  return (
    <a
      href="#"
      className="group block rounded-2xl overflow-hidden bg-[var(--color-card)] border border-[var(--color-border)] hover:border-white/20 transition"
    >
      <div className={`relative overflow-hidden ${large ? 'aspect-[16/10]' : 'aspect-[4/3]'}`}>
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute top-4 left-4 flex gap-2">
          {project.tags.slice(0, 2).map((t) => (
            <span key={t} className="text-xs px-2.5 py-1 rounded-full bg-black/60 backdrop-blur text-white border border-white/10">
              {t}
            </span>
          ))}
        </div>
        <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-[var(--color-accent)] text-black flex items-center justify-center opacity-0 group-hover:opacity-100 transition translate-y-1 group-hover:translate-y-0">
          <ArrowUpRight size={18} />
        </div>
      </div>
      <div className="p-6 flex items-end justify-between gap-4">
        <div>
          <p className="text-xs text-[var(--color-muted)] uppercase tracking-widest mb-2">
            {project.category} · {project.year}
          </p>
          <h3 className="text-xl md:text-2xl font-semibold tracking-tight">{project.title}</h3>
        </div>
        <span className="text-sm text-[var(--color-muted)]">{project.id}</span>
      </div>
    </a>
  );
}
