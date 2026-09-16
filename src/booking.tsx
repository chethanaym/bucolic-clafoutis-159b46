import { useState } from 'react'
import { Link } from '@tanstack/react-router'
import {
  ArrowRight,
  IndianRupee,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
} from 'lucide-react'

import { CLINIC } from './legal'

const CALENDLY = 'https://calendly.com/chethanaym/30min'
export const SESSION_FEE = '₹1,500'

/**
 * Scrolls to a section by id. The plain `<a href="#id">` this replaces did
 * nothing: the router intercepts same-origin clicks, sets the hash and stops,
 * so the browser never performs its native jump.
 */
export function scrollToId(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
}

export function ScrollLink({
  to,
  className,
  children,
}: {
  to: string
  className?: string
  children: React.ReactNode
}) {
  return (
    <a
      href={`#${to}`}
      className={className}
      onClick={(e) => {
        e.preventDefault()
        scrollToId(to)
        history.replaceState(null, '', `#${to}`)
      }}
    >
      {children}
    </a>
  )
}

/**
 * Collects a name, email and a line of context, then hands off to Calendly with
 * those fields prefilled so nothing has to be typed twice.
 */
export function BookingPanel() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [about, setAbout] = useState('')

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    const params = new URLSearchParams()
    if (name.trim()) params.set('name', name.trim())
    if (email.trim()) params.set('email', email.trim())
    if (about.trim()) params.set('a1', about.trim())
    const query = params.toString()
    window.location.href = query ? `${CALENDLY}?${query}` : CALENDLY
  }

  return (
    <aside className="booking" id="book" aria-labelledby="booking-title">
      <div className="booking-head">
        <p className="eyebrow">Appointments</p>
        <h2 id="booking-title">Book a consultation</h2>
        <p className="booking-sub">
          A one-hour session, in person or online.
        </p>
      </div>

      <form className="booking-form" onSubmit={handleSubmit}>
        <label className="field">
          <span>Your name</span>
          <input
            type="text"
            name="name"
            autoComplete="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Who should we expect?"
          />
        </label>
        <label className="field">
          <span>Email</span>
          <input
            type="email"
            name="email"
            autoComplete="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="So we can send the confirmation"
          />
        </label>
        <label className="field">
          <span>
            What would you like support with? <em>optional</em>
          </span>
          <textarea
            name="about"
            rows={2}
            value={about}
            onChange={(e) => setAbout(e.target.value)}
            placeholder="A line or two is plenty"
          />
        </label>
        <button type="submit" className="primary-action booking-submit">
          See available times
          <ArrowRight size={18} aria-hidden="true" />
        </button>
        <p className="booking-hint">
          Opens our calendar with your details already filled in.
        </p>
      </form>

      <div className="booking-contact">
        <a href="tel:+919483161006" className="booking-line">
          <Phone size={17} aria-hidden="true" />
          <span>
            {CLINIC.phones[0]} <em>call or WhatsApp</em>
          </span>
        </a>
        <a href="tel:+919113640288" className="booking-line">
          <MessageCircle size={17} aria-hidden="true" />
          <span>
            {CLINIC.phones[1]} <em>call or WhatsApp</em>
          </span>
        </a>
        <a href={`mailto:${CLINIC.email}`} className="booking-line">
          <Mail size={17} aria-hidden="true" />
          <span>{CLINIC.email}</span>
        </a>
        <a
          href="https://www.google.com/maps/search/?api=1&query=Modern+Psych+Therapy+%236+4th+Main+MS+Ramaiah+City+JP+Nagar+8th+Phase+Bangalore+560076"
          target="_blank"
          rel="noopener noreferrer"
          className="booking-line"
        >
          <MapPin size={17} aria-hidden="true" />
          <span>
            {CLINIC.area} <em>get directions</em>
          </span>
        </a>
      </div>

      <div className="booking-payment">
        <IndianRupee size={17} aria-hidden="true" />
        <span>
          Sessions are {SESSION_FEE}.{' '}
          <Link to="/pay">Pay for a session</Link> once a time is agreed.
        </span>
      </div>
    </aside>
  )
}
