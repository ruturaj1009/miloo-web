import React from 'react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy & Data Security — Miloo Dating App',
  description:
    'Read how Miloo protects your personal information, facial biometric verification data, private in-app calls, and location privacy.',
};

export default function PrivacyPage() {
  return (
    <div style={{ paddingTop: 'calc(var(--nav-height) + 40px)', paddingBottom: '100px' }}>
      <div className="container" style={{ maxWidth: '840px' }}>
        <div style={{ marginBottom: '40px' }}>
          <div className="section-tag" style={{ background: 'rgba(0, 201, 255, 0.1)', borderColor: 'rgba(0, 201, 255, 0.3)', color: '#00C9FF' }}>
            <span>Data Security</span>
          </div>
          <h1 style={{ fontSize: '2.4rem', fontWeight: 800, color: '#FFFFFF', marginBottom: '10px' }}>
            Privacy Policy
          </h1>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>
            Effective Date: January 1, 2026 • GDPR & CCPA Compliant
          </p>
        </div>

        <div className="glass-card" style={{ padding: '48px', borderRadius: 'var(--radius-card)', color: 'var(--text-secondary)', lineHeight: 1.8, fontSize: '0.95rem' }}>
          <section style={{ marginBottom: '32px' }}>
            <h2 style={{ fontSize: '1.4rem', fontWeight: 700, color: '#FFFFFF', marginBottom: '12px' }}>
              1. Our Foundational Privacy Pledge
            </h2>
            <p>
              At Miloo, we believe true chemistry begins with trust. We do not sell your personal data, chat history, or precise geolocation traces to third-party data brokers, advertising networks, or surveillance firms. Our business model relies exclusively on premium subscriptions and optional profile boosts.
            </p>
          </section>

          <section style={{ marginBottom: '32px' }}>
            <h2 style={{ fontSize: '1.4rem', fontWeight: 700, color: '#FFFFFF', marginBottom: '12px' }}>
              2. Information We Collect
            </h2>
            <ul style={{ paddingLeft: '20px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <li><strong>Profile Information:</strong> First name, age, gender, dating preferences, biography, prompt answers, and lifestyle badges.</li>
              <li><strong>Media Content:</strong> Up to 6 profile photographs uploaded to our encrypted Cloudflare R2 storage buckets.</li>
              <li><strong>Location Data:</strong> Coarse city-level location (with your explicit OS permission) to compute proximity distance in the discovery deck. Precise coordinates are never displayed to other users.</li>
              <li><strong>Usage Analytics:</strong> Crash reports, swipe velocity metrics, and session duration to debug performance bottlenecks.</li>
            </ul>
          </section>

          <section style={{ marginBottom: '32px' }}>
            <h2 style={{ fontSize: '1.4rem', fontWeight: 700, color: '#FFFFFF', marginBottom: '12px' }}>
              3. Biometric Data Protection Notice
            </h2>
            <p>
              When you opt into Selfie Verification, our biometric system analyzes facial movement video frames to verify liveness and confirm identity against your profile photos.
            </p>
            <p style={{ marginTop: '8px' }}>
              <strong>Retention:</strong> Numerical mathematical facial vectors are processed in memory and deleted immediately after verification status is confirmed. We never sell, lease, or trade biometric identifiers.
            </p>
          </section>

          <section style={{ marginBottom: '32px' }}>
            <h2 style={{ fontSize: '1.4rem', fontWeight: 700, color: '#FFFFFF', marginBottom: '12px' }}>
              4. In-App Video Date Privacy
            </h2>
            <p>
              Miloo in-app video dates occur via end-to-end encrypted private channels. Audio and video feeds flow directly between participants’ devices without passing through recording servers. Miloo does not record, monitor, or store audio/video streams from your private dates.
            </p>
          </section>

          <section style={{ marginBottom: '32px' }}>
            <h2 style={{ fontSize: '1.4rem', fontWeight: 700, color: '#FFFFFF', marginBottom: '12px' }}>
              5. Your Rights (GDPR & CCPA/CPRA)
            </h2>
            <p>
              Regardless of your geographic location, you enjoy full data sovereignty:
            </p>
            <ul style={{ paddingLeft: '20px', display: 'flex', flexDirection: 'column', gap: '8px', marginTop: '8px' }}>
              <li><strong>Right of Access & Portability:</strong> Request an export of all profile data, match logs, and chat records in JSON format.</li>
              <li><strong>Right to Rectification:</strong> Edit or correct any inaccurate personal details in your Profile Builder.</li>
              <li><strong>Right to Erasure (The &ldquo;Right to be Forgotten&rdquo;):</strong> Delete your Miloo account instantly in app Settings. All associated media and database rows are purged within 30 days.</li>
            </ul>
          </section>

          <section>
            <h2 style={{ fontSize: '1.4rem', fontWeight: 700, color: '#FFFFFF', marginBottom: '12px' }}>
              6. Data Protection Officer
            </h2>
            <p>
              For privacy requests, GDPR inquiries, or data deletion confirmations, reach our Data Protection Officer at <a href="mailto:privacy@miloo.app" style={{ color: 'var(--brand-primary)' }}>privacy@miloo.app</a>.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
