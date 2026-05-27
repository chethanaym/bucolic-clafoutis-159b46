import { createFileRoute } from '@tanstack/react-router'
import {
  ArrowRight,
  Brain,
  CalendarDays,
  CheckCircle2,
  HeartHandshake,
  MessageCircle,
  Puzzle,
  ShieldCheck,
  Sparkles,
  UsersRound,
} from 'lucide-react'

export const Route = createFileRoute('/')({
  component: HomePage,
})

const services = [
  {
    icon: Brain,
    title: 'Psychological health',
    text: 'Individual therapy, emotional regulation, stress support, anxiety care, and practical strategies for daily life.',
  },
  {
    icon: Puzzle,
    title: 'Special needs support',
    text: 'Neurodiversity-informed guidance for children, teens, adults, caregivers, educators, and support teams.',
  },
  {
    icon: UsersRound,
    title: 'Family guidance',
    text: 'Collaborative care planning, caregiver coaching, school transition help, and communication support.',
  },
]

const steps = [
  'A short intake conversation to understand needs and accessibility preferences.',
  'A matched support pathway with goals that feel realistic and measurable.',
  'Ongoing sessions, resources, and check-ins that adjust as needs change.',
]

function HomePage() {
  return (
    <main className="site-shell">
      <nav className="topbar" aria-label="Primary navigation">
        <a className="brand" href="#home" aria-label="Mindful Horizons home">
          <span className="brand-mark">
            <Sparkles size={18} aria-hidden="true" />
          </span>
          <span>Mindful Horizons</span>
        </a>
        <div className="nav-links">
          <a href="#services">Services</a>
          <a href="#approach">Approach</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      <section className="hero" id="home">
        <div className="hero-copy">
          <p className="eyebrow">Mental wellbeing and special needs care</p>
          <h1>Support that meets people where they are.</h1>
          <p className="hero-text">
            Mindful Horizons offers compassionate psychological health services
            and special needs support for individuals, families, schools, and
            care teams.
          </p>
          <div className="hero-actions">
            <a className="primary-action" href="#contact">
              Book a consultation
              <ArrowRight size={18} aria-hidden="true" />
            </a>
            <a className="secondary-action" href="#services">
              Explore services
            </a>
          </div>
        </div>

        <div className="hero-visual" aria-label="A welcoming therapy space">
          <img
            src="https://images.unsplash.com/photo-1544027993-37dbfe43562a?auto=format&fit=crop&w=1100&q=82"
            alt="Two people seated in a calm counselling conversation"
          />
          <div className="care-card">
            <ShieldCheck size={22} aria-hidden="true" />
            <span>Trauma-aware, inclusive, and person-centered</span>
          </div>
        </div>
      </section>

      <section className="trust-band" aria-label="Care principles">
        <div>
          <strong>Accessible care</strong>
          <span>Flexible communication, sensory-aware planning, and clear next steps.</span>
        </div>
        <div>
          <strong>Whole-person support</strong>
          <span>Emotional, behavioral, social, learning, and caregiver needs considered together.</span>
        </div>
      </section>

      <section className="section-grid" id="services">
        <div className="section-heading">
          <p className="eyebrow">How support can help</p>
          <h2>Care pathways for everyday resilience.</h2>
        </div>
        <div className="service-list">
          {services.map((service) => {
            const Icon = service.icon
            return (
              <article className="service-card" key={service.title}>
                <Icon size={28} aria-hidden="true" />
                <h3>{service.title}</h3>
                <p>{service.text}</p>
              </article>
            )
          })}
        </div>
      </section>

      <section className="approach" id="approach">
        <div className="approach-copy">
          <p className="eyebrow">Gentle structure</p>
          <h2>A steady process, not a one-size-fits-all plan.</h2>
          <p>
            Support begins with listening. Each plan is shaped around the
            person, their environment, cultural context, communication style,
            strengths, and immediate concerns.
          </p>
        </div>
        <ol className="step-list">
          {steps.map((step) => (
            <li key={step}>
              <CheckCircle2 size={22} aria-hidden="true" />
              <span>{step}</span>
            </li>
          ))}
        </ol>
      </section>

      <section className="contact-section" id="contact">
        <div>
          <p className="eyebrow">Start a conversation</p>
          <h2>Book a calm first call.</h2>
          <p>
            Share what kind of support is needed, ask about accessibility, or
            request guidance for a family member, student, or care team.
          </p>
        </div>
        <div className="contact-actions">
          <a href="mailto:hello@mindfulhorizons.example" className="contact-link">
            <MessageCircle size={20} aria-hidden="true" />
            hello@mindfulhorizons.example
          </a>
          <a href="tel:+15550172488" className="contact-link">
            <CalendarDays size={20} aria-hidden="true" />
            +1 (555) 017-2488
          </a>
          <div className="note">
            <HeartHandshake size={20} aria-hidden="true" />
            <span>
              If there is immediate danger or a crisis, contact local emergency
              services or a crisis line right away.
            </span>
          </div>
        </div>
      </section>
    </main>
  )
}
