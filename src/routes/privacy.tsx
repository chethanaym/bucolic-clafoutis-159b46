import { createFileRoute } from '@tanstack/react-router'

import { CLINIC, LegalPage } from '../legal'

export const Route = createFileRoute('/privacy')({
  component: PrivacyPage,
  head: () => ({
    meta: [
      { title: 'Privacy Policy | Modern Psych Therapy' },
      {
        name: 'description',
        content:
          'What Modern Psych Therapy does with your information, how clinical records are kept, and who else is involved.',
      },
    ],
  }),
})

function PrivacyPage() {
  return (
    <LegalPage
      eyebrow="Legal"
      title="Privacy Policy"
      intro="What we collect, why we have it, and who else sees it. Written plainly, because you should not need a lawyer to understand what happens to your information."
    >
      <section>
        <h2>This website</h2>
        <p>
          This site does not use analytics, advertising or tracking cookies, and
          it does not ask you to create an account. Browsing it collects nothing
          about you personally. Like any web host, our hosting provider processes
          standard technical request data such as IP address and browser type for
          security and delivery.
        </p>
      </section>

      <section>
        <h2>When you get in touch</h2>
        <p>
          If you email, call or message us, we use your contact details and what
          you tell us solely to respond and to arrange appointments. We do not
          share them with anyone else and we do not use them for marketing.
        </p>
        <p>
          Email and WhatsApp are convenient but not perfectly secure. Please keep
          first messages brief and save the detail for the session itself.
        </p>
      </section>

      <section>
        <h2>Payments</h2>
        <p>
          Online payments are handled by <strong>Razorpay</strong>, a payment
          gateway regulated in India. Your card, UPI or bank details are entered
          on Razorpay's systems and are processed under their privacy policy. We
          never see or store your full payment details — we receive only a
          confirmation that a payment succeeded, the amount, and a reference we
          can use for a refund.
        </p>
      </section>

      <section>
        <h2>Clinical records</h2>
        <p>
          Information shared during consultation, therapy or assessment is held
          confidentially and separately from this website, in line with
          professional ethical standards and applicable law. It is not used for
          any purpose other than your care.
        </p>
        <p>
          Confidentiality is limited only where there is a serious risk of harm
          to you or another person, or where disclosure is required by law. These
          limits are explained at the start of the work, and wherever possible we
          will discuss any disclosure with you first.
        </p>
      </section>

      <section>
        <h2>Who else is involved</h2>
        <ul>
          <li>
            <strong>Razorpay</strong> — processes payments and refunds.
          </li>
          <li>
            <strong>Our hosting provider</strong> — serves this website and
            handles standard request logs.
          </li>
          <li>
            <strong>Google</strong> — if you use the directions link, you are
            taken to Google Maps, which operates under its own privacy policy.
          </li>
        </ul>
        <p>
          We do not sell your information, and we do not pass it to anyone for
          their own marketing.
        </p>
      </section>

      <section>
        <h2>How long we keep things</h2>
        <p>
          Enquiry emails and messages are kept only as long as they are useful
          for arranging and providing your care. Clinical records are retained
          for the period required by professional and legal obligations, then
          securely destroyed.
        </p>
      </section>

      <section>
        <h2>Your choices</h2>
        <p>
          You can ask what information we hold about you, ask for corrections, or
          ask us to delete enquiry correspondence. Write to{' '}
          <a href={`mailto:${CLINIC.email}`}>{CLINIC.email}</a>. Clinical records
          may need to be retained even after a request, where professional
          obligations require it; if that applies we will explain why.
        </p>
      </section>

      <section>
        <h2>Changes and contact</h2>
        <p>
          We may update this policy; the date at the top shows when it last
          changed. Questions are welcome.
        </p>
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
