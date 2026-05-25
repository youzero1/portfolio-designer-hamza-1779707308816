import { Link } from 'react-router-dom';
import { ArrowUpRight, Github, Linkedin, Twitter, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="border-t border-[var(--color-border)] mt-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-16">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-10">
          <div>
            <p className="text-[var(--color-muted)] text-sm uppercase tracking-widest mb-4">Have a project?</p>
            <h2 className="text-5xl md:text-7xl font-semibold tracking-tight">
              Let's build <br />
              <span className="italic font-light text-[var(--color-accent)]">something good.</span>
            </h2>
          </div>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-6 py-4 rounded-full bg-[var(--color-ink)] text-[var(--color-bg)] font-medium hover:bg-[var(--color-accent)] transition self-start md:self-auto"
          >
            Start a project <ArrowUpRight size={18} />
          </Link>
        </div>

        <div className="mt-20 pt-8 border-t border-[var(--color-border)] flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div className="flex items-center gap-2 text-sm text-[var(--color-muted)]">
            <span className="w-2 h-2 rounded-full bg-[var(--color-accent)] animate-pulse" />
            Available for new work — Q1 2025
          </div>

          <div className="flex items-center gap-5 text-[var(--color-muted)]">
            <a href="#" className="hover:text-[var(--color-ink)] transition" aria-label="GitHub"><Github size={18} /></a>
            <a href="#" className="hover:text-[var(--color-ink)] transition" aria-label="LinkedIn"><Linkedin size={18} /></a>
            <a href="#" className="hover:text-[var(--color-ink)] transition" aria-label="Twitter"><Twitter size={18} /></a>
            <a href="mailto:hello@mirakovac.com" className="hover:text-[var(--color-ink)] transition" aria-label="Email"><Mail size={18} /></a>
          </div>

          <p className="text-xs text-[var(--color-muted)]">© 2025 Mira Kovac — All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
