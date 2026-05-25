import { useState } from 'react';
import { Send, Mail, MapPin, Clock } from 'lucide-react';

type FormState = {
  name: string;
  email: string;
  budget: string;
  message: string;
};

export default function Contact() {
  const [form, setForm] = useState<FormState>({ name: '', email: '', budget: '', message: '' });
  const [sent, setSent] = useState(false);

  const handleChange = (e: any) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 4000);
    setForm({ name: '', email: '', budget: '', message: '' });
  };

  return (
    <div className="max-w-7xl mx-auto px-6 lg:px-10 pt-16 pb-24">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
        <div className="lg:col-span-5">
          <p className="text-xs uppercase tracking-[0.2em] text-[var(--color-muted)] mb-4">Contact</p>
          <h1 className="text-5xl md:text-7xl font-semibold tracking-tighter leading-[0.95]">
            Tell me about<br />your <span className="italic font-light text-[var(--color-accent)]">project</span>.
          </h1>
          <p className="mt-6 text-[var(--color-muted)] leading-relaxed max-w-md">
            Whether you're shaping a new brand, redesigning a product, or just exploring an idea — I'd love to hear about it. Replies usually within 24 hours.
          </p>

          <div className="mt-12 space-y-5">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-[var(--color-card)] border border-[var(--color-border)] flex items-center justify-center">
                <Mail size={16} className="text-[var(--color-accent)]" />
              </div>
              <div>
                <p className="text-xs text-[var(--color-muted)] uppercase tracking-widest">Email</p>
                <a href="mailto:hello@mirakovac.com" className="text-lg hover:text-[var(--color-accent)] transition">hello@mirakovac.com</a>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-[var(--color-card)] border border-[var(--color-border)] flex items-center justify-center">
                <MapPin size={16} className="text-[var(--color-accent)]" />
              </div>
              <div>
                <p className="text-xs text-[var(--color-muted)] uppercase tracking-widest">Location</p>
                <p className="text-lg">Berlin, Germany</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-[var(--color-card)] border border-[var(--color-border)] flex items-center justify-center">
                <Clock size={16} className="text-[var(--color-accent)]" />
              </div>
              <div>
                <p className="text-xs text-[var(--color-muted)] uppercase tracking-widest">Hours</p>
                <p className="text-lg">Mon — Fri · 9:00 — 18:00 CET</p>
              </div>
            </div>
          </div>
        </div>

        <div className="lg:col-span-7">
          <form
            onSubmit={handleSubmit}
            className="bg-[var(--color-card)] border border-[var(--color-border)] rounded-3xl p-8 md:p-10 space-y-6"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Field label="Your name" name="name" value={form.name} onChange={handleChange} placeholder="Jane Doe" required />
              <Field label="Email" name="email" type="email" value={form.email} onChange={handleChange} placeholder="jane@studio.com" required />
            </div>

            <div>
              <label className="text-xs uppercase tracking-widest text-[var(--color-muted)] mb-3 block">Budget</label>
              <div className="flex flex-wrap gap-2">
                {['< 5K', '5 — 15K', '15 — 30K', '30K +'].map((b) => (
                  <button
                    key={b}
                    type="button"
                    onClick={() => setForm({ ...form, budget: b })}
                    className={`px-4 py-2 rounded-full text-sm border transition ${
                      form.budget === b
                        ? 'bg-[var(--color-accent)] text-black border-[var(--color-accent)]'
                        : 'border-[var(--color-border)] text-[var(--color-muted)] hover:text-[var(--color-ink)] hover:border-white/30'
                    }`}
                  >
                    {b}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label className="text-xs uppercase tracking-widest text-[var(--color-muted)] mb-3 block">Project details</label>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                rows={6}
                required
                placeholder="Tell me about your project, goals, timeline..."
                className="w-full bg-[var(--color-bg)] border border-[var(--color-border)] rounded-2xl px-5 py-4 text-[var(--color-ink)] placeholder:text-[var(--color-muted)] focus:outline-none focus:border-[var(--color-accent)] transition resize-none"
              />
            </div>

            <div className="flex items-center justify-between gap-4 flex-wrap">
              <p className="text-xs text-[var(--color-muted)]">By submitting you agree to be contacted about your project.</p>
              <button
                type="submit"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-[var(--color-ink)] text-[var(--color-bg)] font-medium hover:bg-[var(--color-accent)] transition"
              >
                {sent ? 'Sent ✓' : 'Send message'} <Send size={16} />
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

type FieldProps = {
  label: string;
  name: string;
  value: string;
  onChange: (e: any) => void;
  placeholder?: string;
  type?: string;
  required?: boolean;
};

function Field({ label, name, value, onChange, placeholder, type = 'text', required }: FieldProps) {
  return (
    <div>
      <label className="text-xs uppercase tracking-widest text-[var(--color-muted)] mb-3 block">{label}</label>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
        className="w-full bg-[var(--color-bg)] border border-[var(--color-border)] rounded-2xl px-5 py-3.5 text-[var(--color-ink)] placeholder:text-[var(--color-muted)] focus:outline-none focus:border-[var(--color-accent)] transition"
      />
    </div>
  );
}
