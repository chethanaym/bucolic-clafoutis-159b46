import { useEffect, useRef } from 'react'
import { Link, createFileRoute } from '@tanstack/react-router'
import { CalendarDays, ShieldCheck } from 'lucide-react'

import { CLINIC, LegalPage } from '../legal'

const RAZORPAY_BUTTON_ID = 'pl_Tck5r4ojl18Ygu'

export const Route = createFileRoute('/pay')({
  component: PayPage,
  head: () => ({
    meta: [
      { title: 'Pay for a session | Modern Psych Therapy' },
      {
        name: 'description',
        content:
          'Pay for a counselling or therapy session at Modern Psych Therapy securely by UPI, card or netbanking.',
      },
    ],
  }),
})

/**
 * Razorpay ships its payment button as a <script> that injects itself into the
 * surrounding <form>. React will not execute a <script> written in JSX, so the
 * element has to be created and appended by hand once the form is mounted.
 * The guard stops a second button appearing when the effect runs twice.
 */
function RazorpayButton() {
  const formRef = useRef<HTMLFormElement>(null)

  useEffect(() => {
    const form = formRef.current
    if (!form || form.dataset.buttonLoaded === 'true') return
    form.dataset.buttonLoaded = 'true'

    const script = document.createElement('script')
    script.src = 'https://checkout.razorpay.com/v1/payment-button.js'
    script.async = true
    script.setAttribute('data-payment_button_id', RAZORPAY_BUTTON_ID)
    form.appendChild(script)
  }, [])

  return <form ref={formRef} className="pay-button" />
}

function PayPage() {
  return (
    <LegalPage
      eyebrow="Payments"
      title="Pay for a session"
      intro="Pay securely by UPI, card, netbanking or wallet. Payments are handled by Razorpay — we never see your card or bank details."
    >
      <section>
        <p>
          Please pay the fee agreed for your session. If you are not sure what
          applies to you, ask before paying and we will confirm it — we would
          rather you paid the right amount than guessed.
        </p>
        <RazorpayButton />
        <noscript>
          <p>
            The payment button needs JavaScript. If it does not appear, email{' '}
            <a href={`mailto:${CLINIC.email}`}>{CLINIC.email}</a> and we will
            send you a payment link instead.
          </p>
        </noscript>
      </section>

      <section className="pay-notes">
        <div className="pay-note">
          <CalendarDays size={20} aria-hidden="true" />
          <div>
            <h3>Paying does not book the time</h3>
            <p>
              Your appointment is arranged with us directly. If you have not
              settled a time yet, <Link to="/">get in touch</Link> and we will
              find one that works.
            </p>
          </div>
        </div>
        <div className="pay-note">
          <ShieldCheck size={20} aria-hidden="true" />
          <div>
            <h3>If plans change</h3>
            <p>
              Cancel or move an appointment with at least 24 hours' notice and
              any payment is refunded in full. The details are in our{' '}
              <Link to="/refunds">Refunds &amp; Cancellations policy</Link>.
            </p>
          </div>
        </div>
      </section>

      <section>
        <h2>Questions about a payment</h2>
        <p>
          Email <a href={`mailto:${CLINIC.email}`}>{CLINIC.email}</a>, or call or
          message <a href="tel:+919483161006">{CLINIC.phones[0]}</a> or{' '}
          <a href="tel:+919113640288">{CLINIC.phones[1]}</a>. Quote the payment
          reference from your receipt and we will sort it out.
        </p>
      </section>
    </LegalPage>
  )
}
