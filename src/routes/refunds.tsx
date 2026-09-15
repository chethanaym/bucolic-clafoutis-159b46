import { createFileRoute } from '@tanstack/react-router'

import { CLINIC, LegalPage } from '../legal'

export const Route = createFileRoute('/refunds')({
  component: RefundsPage,
  head: () => ({
    meta: [
      { title: 'Refunds & Cancellations | Modern Psych Therapy' },
      {
        name: 'description',
        content:
          'How to cancel or reschedule an appointment with Modern Psych Therapy, and when a payment is refunded.',
      },
    ],
  }),
})

function RefundsPage() {
  return (
    <LegalPage
      eyebrow="Legal"
      title="Refunds & Cancellations"
      intro="Plans change, and we would rather you moved an appointment than missed it. Here is exactly how that works."
    >
      <section>
        <h2>Cancelling or rescheduling</h2>
        <p>
          Let us know at least <strong>24 hours</strong> before your appointment
          and you can move it to another time, or cancel it and have any payment
          refunded in full. There is no charge for doing this, and no limit on
          how often — we would always rather reschedule than have you sit out a
          session you needed.
        </p>
      </section>

      <section>
        <h2>Late cancellations and missed sessions</h2>
        <p>
          With less than 24 hours' notice, the session fee is not normally
          refunded, because the slot can rarely be offered to someone else at
          that point. The same applies if an appointment is missed without
          notice.
        </p>
        <p>
          If something genuinely unavoidable came up — illness, an emergency, a
          family crisis — tell us. These situations are handled
          case by case and with common sense, and a credit towards a future
          session is usually offered.
        </p>
      </section>

      <section>
        <h2>If we cancel</h2>
        <p>
          If we have to cancel or postpone your appointment for any reason, you
          choose: a new time at no extra cost, or a full refund of anything you
          have paid for that session.
        </p>
      </section>

      <section>
        <h2>Sessions already attended</h2>
        <p>
          Fees for sessions that have taken place are not refundable. If you are
          unhappy with the support you received, please tell us — we would much
          rather hear it and put it right than have you simply not come back.
        </p>
      </section>

      <section>
        <h2>Assessments</h2>
        <p>
          Assessment work is booked as a package that includes the sessions, the
          scoring and interpretation, and a written report. Once assessment
          sessions have begun, the fee is refundable only in proportion to the
          work not yet carried out. This is explained to you before an assessment
          is booked.
        </p>
      </section>

      <section>
        <h2>How to request a refund</h2>
        <p>
          Email <a href={`mailto:${CLINIC.email}`}>{CLINIC.email}</a>, or call or
          message either practice number, with the date of the appointment and
          the payment reference. You do not need to give a reason.
        </p>
      </section>

      <section>
        <h2>How refunds are paid</h2>
        <p>
          Approved refunds go back to the original payment method through
          Razorpay — we cannot refund to a different card or account. We start
          the refund within 2 working days of approving it, and it usually
          reaches you within 5 to 7 working days after that, depending on your
          bank or card issuer.
        </p>
        <p>
          Refunds are made in Indian Rupees for the amount paid. Any bank or
          currency-conversion charge levied by your own provider is outside our
          control.
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
