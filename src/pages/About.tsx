import { experiences } from '@/lib/data';
import { Download } from 'lucide-react';

export default function About() {
  return (
    <div className="max-w-7xl mx-auto px-6 lg:px-10 pt-16 pb-24">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div className="lg:col-span-7">
          <p className="text-xs uppercase tracking-[0.2em] text-[var(--color-muted)] mb-4">About me</p>
          <h1 className="text-5xl md:text-7xl font-semibold tracking-tighter leading-[0.95]">
            Designer with a <span className="italic font-light text-[var(--color-accent)]">developer's mind</span>.
          </h1>
          <div className="mt-10 space-y-6 text-lg text-[var(--color-muted)] leading-relaxed max-w-2xl">
            <p>
              I've spent the last eight years designing brands and shipping products for early-stage startups, studios, and cultural institutions across Europe and the US.
            </p>
            <p>
              My background sits at the intersection of editorial design, interface, and code — which means I tend to think about systems, type, and motion in equal measure.
            </p>
            <p>
              When I'm not at the desk, I'm probably collecting type specimens, riding bikes around Berlin, or arguing about the merits of monospaced fonts.
            </p>
          </div>

          <a
            href="#"
            className="mt-10 inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-[var(--color-accent)] text-black font-medium hover:opacity-90 transition"
          >
            Download CV <Download size={18} />
          </a>
        </div>

        <div className="lg:col-span-5">
          <div className="sticky top-24">
            <div className="aspect-[4/5] rounded-3xl overflow-hidden border border-[var(--color-border)]">
              <img
                src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=800&q=80"
                alt="Portrait"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="mt-4 flex items-center justify-between text-sm text-[var(--color-muted)]">
              <span>Berlin, Germany</span>
              <span>est. 2016</span>
            </div>
          </div>
        </div>
      </div>

      {/* EXPERIENCE */}
      <section className="mt-32">
        <div className="flex items-end justify-between mb-12">
          <h2 className="text-4xl md:text-5xl font-semibold tracking-tight">Experience.</h2>
          <p className="text-sm text-[var(--color-muted)]">2016 — Present</p>
        </div>

        <div className="divide-y divide-[var(--color-border)] border-y border-[var(--color-border)]">
          {experiences.map((e) => (
            <div key={e.role + e.company} className="py-8 grid grid-cols-1 md:grid-cols-12 gap-4 group hover:bg-white/[0.02] transition px-2">
              <div className="md:col-span-3 text-sm text-[var(--color-muted)]">{e.period}</div>
              <div className="md:col-span-4">
                <h3 className="text-2xl font-semibold tracking-tight">{e.role}</h3>
                <p className="text-[var(--color-muted)]">{e.company}</p>
              </div>
              <div className="md:col-span-5 text-[var(--color-muted)] leading-relaxed">{e.description}</div>
            </div>
          ))}
        </div>
      </section>

      {/* SKILLS */}
      <section className="mt-32">
        <h2 className="text-4xl md:text-5xl font-semibold tracking-tight mb-12">Toolbox.</h2>
        <div className="flex flex-wrap gap-3">
          {['Figma', 'Webflow', 'React', 'TypeScript', 'Framer', 'After Effects', 'Cinema 4D', 'Glyphs', 'Notion', 'Linear', 'Tailwind', 'Next.js'].map((s) => (
            <span key={s} className="px-5 py-2.5 rounded-full border border-[var(--color-border)] text-sm hover:border-[var(--color-accent)] hover:text-[var(--color-accent)] transition">
              {s}
            </span>
          ))}
        </div>
      </section>
    </div>
  );
}
