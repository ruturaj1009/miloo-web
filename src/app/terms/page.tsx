import React from 'react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms of Service — Miloo Dating App',
  description:
    'Review the terms of use, legal agreements, account eligibility, and community standards for the Miloo dating application.',
};

export default function TermsPage() {
  return (
    <div style={{ paddingTop: 'calc(var(--nav-height) + 40px)', paddingBottom: '100px' }}>
      <div className="container" style={{ maxWidth: '840px' }}>
        <div style={{ marginBottom: '40px' }}>
          <div className="section-tag">
            <span>Legal Agreement</span>
          </div>
          <h1 style={{ fontSize: '2.4rem', fontWeight: 800, color: '#FFFFFF', marginBottom: '10px' }}>
            Terms of Service
          </h1>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>
            Effective Date: January 1, 2026 • Last Updated: March 2026
          </p>
        </div>

        <div className="glass-card" style={{ padding: '48px', borderRadius: 'var(--radius-card)', color: 'var(--text-secondary)', lineHeight: 1.8, fontSize: '0.95rem' }}>
          <section style={{ marginBottom: '32px' }}>
            <h2 style={{ fontSize: '1.4rem', fontWeight: 700, color: '#FFFFFF', marginBottom: '12px' }}>
              1. Acceptance of Agreement
            </h2>
            <p>
              By creating an account, downloading, or browsing the Miloo mobile application or website (collectively, the &ldquo;Service&rdquo;), you agree to be bound by these Terms of Service, our Privacy Policy, and Community Guidelines. If you do not accept all terms, you must discontinue using the Service immediately.
            </p>
          </section>

          <section style={{ marginBottom: '32px' }}>
            <h2 style={{ fontSize: '1.4rem', fontWeight: 700, color: '#FFFFFF', marginBottom: '12px' }}>
              2. Eligibility Requirements
            </h2>
            <p>
              You must be at least 18 years old to create an account or use Miloo. By using the Service, you represent and warrant that you have never been convicted of a felony, sexual offense, or any crime involving violence, harassment, or financial fraud.
            </p>
          </section>

          <section style={{ marginBottom: '32px' }}>
            <h2 style={{ fontSize: '1.4rem', fontWeight: 700, color: '#FFFFFF', marginBottom: '12px' }}>
              3. Biometric Verification & Account Integrity
            </h2>
            <p>
              To foster safety and prevent impersonation, Miloo provides biometric 3D selfie verification. You agree to provide only accurate, truthful, and recent photographs of yourself. Misrepresenting your identity, using AI-generated deepfakes, or operating automated bot scrapers will result in immediate and permanent account termination.
            </p>
          </section>

          <section style={{ marginBottom: '32px' }}>
            <h2 style={{ fontSize: '1.4rem', fontWeight: 700, color: '#FFFFFF', marginBottom: '12px' }}>
              4. In-App Audio & Video Dating Conduct
            </h2>
            <p>
              Miloo provides built-in private audio and video calling. You agree not to broadcast nudity, sexually explicit acts, harassment, hate speech, or commercial solicitations during calls. Recording, screenshotting, or distributing another user’s video stream without express written consent is strictly prohibited and grounds for legal prosecution.
            </p>
          </section>

          <section style={{ marginBottom: '32px' }}>
            <h2 style={{ fontSize: '1.4rem', fontWeight: 700, color: '#FFFFFF', marginBottom: '12px' }}>
              5. Subscriptions, Auto-Renewal & Cancellations
            </h2>
            <p>
              Miloo offers optional paid subscriptions (&ldquo;Miloo Gold&rdquo; and &ldquo;Miloo Platinum&rdquo;). If you purchase a recurring subscription, payment will be charged to your Apple App Store or Google Play account. Subscriptions automatically renew unless auto-renew is turned off at least 24 hours prior to the end of the current billing cycle. You may manage or cancel your subscription at any time via your device account settings.
            </p>
          </section>

          <section style={{ marginBottom: '32px' }}>
            <h2 style={{ fontSize: '1.4rem', fontWeight: 700, color: '#FFFFFF', marginBottom: '12px' }}>
              6. Limitation of Liability
            </h2>
            <p>
              TO THE MAXIMUM EXTENT PERMITTED BY LAW, MILOO INC. SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, OR CONSEQUENTIAL DAMAGES ARISING OUT OF YOUR USE OF THE SERVICE, INCLUDING IN-PERSON MEETINGS WITH OTHER USERS. YOU ARE SOLELY RESPONSIBLE FOR YOUR INTERACTIONS AND EXERCISING COMMON SENSE SAFETY.
            </p>
          </section>

          <section>
            <h2 style={{ fontSize: '1.4rem', fontWeight: 700, color: '#FFFFFF', marginBottom: '12px' }}>
              7. Contact & Dispute Resolution
            </h2>
            <p>
              Any disputes arising under these Terms shall be resolved via binding individual arbitration under the laws of the State of California, without class actions. For legal notices, contact <a href="mailto:legal@miloo.app" style={{ color: 'var(--brand-primary)' }}>legal@miloo.app</a>.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
