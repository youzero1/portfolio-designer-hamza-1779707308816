import { Link } from 'react-router-dom';
import { ArrowUpRight, ArrowDown, Star } from 'lucide-react';
import ProjectCard from '@/components/ProjectCard';
import Marquee from '@/components/Marquee';
import Avatar from '@/components/Avatar';
import { projects, services, clients } from '@/lib/data';

const AVATAR_SRC =
  'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&q=80';

export default function Home() {
  return (
    <div>
      {/* HERO */}
      <section className="max-w-7xl mx-auto px-6 lg:px-10 pt-20 pb-24">
        <div className="flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-[var(--color-muted)] mb-10">
          <span className="w-8 h-px bg-[var(--color-muted)]" />
          Independent designer & developer
        </div>

        <h1 className="text-[12vw] md:text-[9vw] leading-[0.95] font-semibold tracking-tighter">
          Designing<br />
          <span className="inline-flex items-center gap-4">
            <span className="italic font-light text-[var(--color-muted)]">brands</span>
            <span className="hidden md:inline-flex w-32 h-20 rounded-full overflow-hidden align-middle">
              <img src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=400&q=80" alt="" className="w-full h-full object-cover" />
            </span>
            that<br />
          </span>
          feel<span className="text-[var(--color-accent)]">.</span> built<br />
          to <span className="italic font-light">work</span><span className="cursor-blink">_</span>
        </h1>

        <div className="mt-16 flex flex-col md:flex-row md:items-end md:justify-between gap-10">
          <div className="flex items-start gap-4 max-w-md">
            <Avatar src={AVATAR_SRC} alt="Mira Kovac" size="lg" status />
            <p className="text-[var(--color-muted)] leading-relaxed">
              I'm <span className="text-[var(--color-ink)]">Mira Kovac</span>, a multidisciplinary designer based in Berlin. I help startups and studios craft identities, products, and digital experiences with clarity and craft.
            </p>
          </div>

          <div className="flex items-center gap-4">
            <Link
              to="/work"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-[var(--color-ink)] text-[var(--color-bg)] font-medium hover:bg-[var(--color-accent)] transition"
            >
              View selected work <ArrowUpRight size={18} />
            </Link>
            <a href="#work" className="inline-flex items-center gap-2 text-sm text-[var(--color-muted)] hover:text-[var(--color-ink)] transition">
              Scroll <ArrowDown size={14} />
            </a>
          </div>
        </div>
      </section>

      {/* MARQUEE */}
      <Marquee items={clients} />

      {/* STATS */}
      <section className="max-w-7xl mx-auto px-6 lg:px-10 py-24">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { v: '8+', l: 'Years of practice' },
            { v: '60+', l: 'Projects shipped' },
            { v: '24', l: 'Happy clients' },
            { v: '12', l: 'Awards & features' },
          ].map((s) => (
            <div key={s.l} className="border-t border-[var(--color-border)] pt-6">
              <div className="text-5xl md:text-6xl font-semibold tracking-tight">{s.v}</div>
              <div className="text-sm text-[var(--color-muted)] mt-2">{s.l}</div>
            </div>
          ))}
        </div>
      </section>

      {/* SELECTED WORK */}
      <section id="work" className="max-w-7xl mx-auto px-6 lg:px-10 py-24">
        <div className="flex items-end justify-between mb-12">
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-[var(--color-muted)] mb-3">Selected work</p>
            <h2 className="text-4xl md:text-6xl font-semibold tracking-tight">Recent projects.</h2>
          </div>
          <Link to="/work" className="hidden md:inline-flex items-center gap-2 text-sm text-[var(--color-muted)] hover:text-[var(--color-ink)] transition">
            View all <ArrowUpRight size={16} />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.slice(0, 4).map((p, i) => (
            <ProjectCard key={p.id} project={p} large={i === 0 || i === 3} />
          ))}
        </div>
      </section>

      {/* SERVICES */}
      <section className="max-w-7xl mx-auto px-6 lg:px-10 py-24">
        <div className="flex items-end justify-between mb-12">
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-[var(--color-muted)] mb-3">What I do</p>
            <h2 className="text-4xl md:text-6xl font-semibold tracking-tight max-w-2xl">
              Services tailored to <span className="italic font-light text-[var(--color-accent)]">ambitious teams</span>.
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-[var(--color-border)] rounded-2xl overflow-hidden border border-[var(--color-border)]">
          {services.map((s) => (
            <div key={s.id} className="bg-[var(--color-bg)] p-10 hover:bg-[var(--color-card)] transition group">
              <div className="flex items-start justify-between mb-6">
                <span className="text-sm text-[var(--color-muted)]">{s.number}</span>
                <ArrowUpRight size={18} className="text-[var(--color-muted)] group-hover:text-[var(--color-accent)] transition" />
              </div>
              <h3 className="text-3xl font-semibold tracking-tight mb-3">{s.title}</h3>
              <p className="text-[var(--color-muted)] mb-6">{s.description}</p>
              <ul className="space-y-2">
                {s.bullets.map((b) => (
                  <li key={b} className="flex items-center gap-3 text-sm">
                    <span className="w-1 h-1 rounded-full bg-[var(--color-accent)]" />
                    {b}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* TESTIMONIAL */}
      <section className="max-w-7xl mx-auto px-6 lg:px-10 py-24">
        <div className="bg-[var(--color-card)] border border-[var(--color-border)] rounded-3xl p-10 md:p-16">
          <div className="flex items-center gap-1 mb-8">
            {[0, 1, 2, 3, 4].map((i) => (
              <Star key={i} size={16} fill="currentColor" className="text-[var(--color-accent)]" />
            ))}
          </div>
          <p className="text-2xl md:text-4xl leading-snug tracking-tight font-light max-w-4xl">
            "Working with Mira was the best design decision we made all year. The brand finally feels like <span className="italic">us</span> — clear, confident, and a little bit weird."
          </p>
          <div className="mt-10 flex items-center gap-4">
            <Avatar src={AVATAR_SRC} alt="Elena Park" size="sm" ring={false} />
            <div>
              <p className="font-medium">Elena Park</p>
              <p className="text-sm text-[var(--color-muted)]">CEO, Northwind Co.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
