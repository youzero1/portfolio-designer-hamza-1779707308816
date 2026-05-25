import { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import clsx from 'clsx';
import Avatar from '@/components/Avatar';

const links = [
  { to: '/', label: 'Home' },
  { to: '/work', label: 'Work' },
  { to: '/about', label: 'About' },
  { to: '/contact', label: 'Contact' },
];

const AVATAR_SRC =
  'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&q=80';

export default function Navbar() {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-[var(--color-bg)]/70 border-b border-[var(--color-border)]">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2.5 group">
          <Avatar src={AVATAR_SRC} alt="Mira Kovac" size="sm" className="w-8 h-8" status />
          <span className="font-semibold tracking-tight">Mira Kovac<span className="text-[var(--color-muted)]">©</span></span>
        </Link>

        <nav className="hidden md:flex items-center gap-1">
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              end={l.to === '/'}
              className={({ isActive }) =>
                clsx(
                  'px-4 py-2 text-sm rounded-full transition',
                  isActive
                    ? 'bg-[var(--color-ink)] text-[var(--color-bg)]'
                    : 'text-[var(--color-ink)]/80 hover:text-[var(--color-ink)] hover:bg-white/5'
                )
              }
            >
              {l.label}
            </NavLink>
          ))}
        </nav>

        <Link
          to="/contact"
          className="hidden md:inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[var(--color-accent)] text-black text-sm font-medium hover:opacity-90 transition"
        >
          Let's talk
        </Link>

        <button onClick={() => setOpen(!open)} className="md:hidden p-2" aria-label="Menu">
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-[var(--color-border)] bg-[var(--color-bg)]">
          <div className="px-6 py-4 flex flex-col gap-2">
            {links.map((l) => (
              <NavLink
                key={l.to}
                to={l.to}
                end={l.to === '/'}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  clsx(
                    'px-4 py-3 text-sm rounded-lg',
                    isActive ? 'bg-white/10 text-[var(--color-ink)]' : 'text-[var(--color-ink)]/80'
                  )
                }
              >
                {l.label}
              </NavLink>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
