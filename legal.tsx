import { Link } from '@tanstack/react-router'
import { ArrowLeft } from 'lucide-react'

import './legal.css'

export const LAST_UPDATED = '15 September 2026'

export const CLINIC = {
  name: 'Modern Psych Therapy',
  street: '#6, First Floor, 4th Main',
  area: 'MS Ramaiah City, JP Nagar 8th Phase',
  city: 'Bengaluru, Karnataka 560076, India',
  email: 'modernpsychtherapy@gmail.com',
  phones: ['+91 94831 61006', '+91 91136 40288'],
}

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="footer-brand">
        <strong>{CLINIC.name}</strong>
        <span>
          {CLINIC.street}, {CLINIC.area}, {CLINIC.city}
        </span>
        <span>
          <a href={`mailto:${CLINIC.email}`}>{CLINIC.email}</a>
          {' · '}
          <a href="tel:+919483161006">{CLINIC.phones[0]}</a>
        </span>
      </div>
      <nav className="footer-links" aria-label="Policies">
        <Link to="/terms">Terms &amp; Conditions</Link>
        <Link to="/refunds">Refunds &amp; Cancellations</Link>
        <Link to="/privacy">Privacy Policy</Link>
      </nav>
    </footer>
  )
}

export function LegalPage({
  eyebrow,
  title,
  intro,
  children,
}: {
  eyebrow: string
  title: string
  intro: string
  children: React.ReactNode
}) {
  return (
    <main className="site-shell">
      <nav className="topbar" aria-label="Primary navigation">
        <Link className="brand" to="/" aria-label="Modern Psych Therapy home">
          <img
            src="/logo-transparent.png"
            alt="Modern Psych Therapy logo"
            className="h-8 md:h-10 w-auto"
          />
          <span>Modern Psych Therapy</span>
        </Link>
        <div className="nav-links">
          <Link to="/">
            <ArrowLeft size={16} aria-hidden="true" /> Back to site
          </Link>
        </div>
      </nav>

      <article className="legal">
        <header className="legal-head">
          <p className="eyebrow">{eyebrow}</p>
          <h1>{title}</h1>
          <p className="legal-intro">{intro}</p>
          <p className="legal-updated">Last updated {LAST_UPDATED}</p>
        </header>
        {children}
      </article>

      <SiteFooter />
    </main>
  )
}
