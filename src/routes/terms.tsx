import { Link, createFileRoute } from '@tanstack/react-router'

import { CLINIC, LegalPage } from '../legal'

export const Route = createFileRoute('/terms')({
  component: TermsPage,
  head: () => ({
    meta: [
      { title: 'Terms & Conditions | Modern Psych Therapy' },
      {
        name: 'description',
        content:
          'The terms on which Modern Psych Therapy provides counselling, therapy and special needs support in Bengaluru.',
      },
    ],
  }),
})

function TermsPage() {
  return (
    <LegalPage
      eyebrow="Legal"
      title="Terms & Conditions"
      intro="These terms set out how we work together — what we offer, how sessions are booked and paid for, and what you can expect from us."
    >
      <section>
        <h2>Who we are</h2>
        <p>
          {CLINIC.name} is a mental health practice operated by Dr. Chetana Nath
          from its clinic at {CLINIC.street}, {CLINIC.area}, {CLINIC.city}. Dr.
          Nath holds a PhD in Psychology and an MA in Clinical Psychology, and is
          registered with the Rehabilitation Council of India as a rehabilitation
          psychology professional and as a special educator.
        </p>
        <p>
          By booking a session or making a payment, you agree to these terms.
        </p>
      </section>

      <section>
        <h2>What we provide</h2>
        <p>
          We offer individual counselling, psychotherapy, behavioural therapy,
          special education and remedial support, rehabilitation counselling, and
          psychological and educational assessment, for children, adolescents,
          adults and families.
        </p>
        <p>
          We do not promise any particular clinical outcome. Therapy and
          educational support depend on many things, including participation
          between sessions, and progress varies from person to person.
        </p>
      </section>

      <section>
        <h2>How sessions are delivered</h2>
        <p>
          Sessions run one hour and are by appointment. They
          take place either in person at the clinic address above, or online by
          secure video call, as agreed with you when the appointment is made.
          Initial consultations and assessment sessions may run longer.
        </p>
        <p>
          A session is delivered at the appointment time itself. There is nothing
          to ship and no physical goods are sold.
        </p>
      </section>

      <section>
        <h2>Fees and payment</h2>
        <p>
          Fees vary by service — consultation, ongoing therapy, assessment and
          school liaison are charged differently. The fee that applies to you is
          confirmed before your first session, so that nothing comes as a
          surprise.
        </p>
        <p>
          All fees are quoted and charged in Indian Rupees (INR). Online payments
          are processed by Razorpay; we never see or store your full card
          details. Where a session is paid for in advance, payment confirms the
          appointment.
        </p>
      </section>

      <section>
        <h2>Cancelling or rescheduling</h2>
        <p>
          Please give at least 24 hours' notice if you need to cancel or move an
          appointment, so that the slot can be offered to someone else. Full
          details, including when a payment is refundable, are in our{' '}
          <Link to="/refunds">Refunds &amp; Cancellations policy</Link>.
        </p>
      </section>

      <section>
        <h2>Your part</h2>
        <ul>
          <li>Give accurate information about yourself, or about the person you are seeking support for.</li>
          <li>Arrive on time; a late start does not extend the session.</li>
          <li>
            For online sessions, join from somewhere private with a workable
            connection.
          </li>
          <li>
            Tell us about any other treatment you are receiving where it is
            relevant to the work.
          </li>
        </ul>
      </section>

      <section>
        <h2>Confidentiality and its limits</h2>
        <p>
          What is discussed in session is confidential. The exceptions are narrow
          and set by professional ethics and law — chiefly a serious risk of harm
          to you or another person, or where disclosure is required by law.
          Wherever possible we will talk to you before any disclosure is made.
          For work with a child, what is shared with parents is agreed in advance
          with both the child and the parents.
        </p>
      </section>

      <section>
        <h2>This is not an emergency service</h2>
        <p>
          Appointments are scheduled in advance and messages are not monitored
          around the clock. If there is immediate danger or a crisis, contact
          local emergency services or a crisis line right away rather than
          waiting for a reply from us.
        </p>
      </section>

      <section>
        <h2>This website</h2>
        <p>
          Content on this site is general information about our services. It is
          not psychological or medical advice and does not create a
          practitioner–client relationship on its own. We may update these terms
          from time to time; the date at the top shows when they last changed.
        </p>
      </section>

      <section>
        <h2>Governing law</h2>
        <p>
          These terms are governed by the laws of India. Any dispute will be
          subject to the exclusive jurisdiction of the courts at Bengaluru,
          Karnataka.
        </p>
      </section>

      <section>
        <h2>Contact</h2>
        <p>
          {CLINIC.name}, {CLINIC.street}, {CLINIC.area}, {CLINIC.city}
          <br />
          <a href={`mailto:${CLINIC.email}`}>{CLINIC.email}</a>
          <br />
          <a href="tel:+919483161006">{CLINIC.phones[0]}</a> ·{' '}
          <a href="tel:+919113640288">{CLINIC.phones[1]}</a>
        </p>
      </section>
    </LegalPage>
  )
}
