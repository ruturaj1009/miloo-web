import React from 'react';
import type { Metadata } from 'next';
import { ShieldCheck, Lock, AlertTriangle, Eye, PhoneCall, CheckCircle, HeartHandshake } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Safety & Trust Center — Miloo Dating App',
  description:
    'Your safety is our foundational priority. Explore Miloo’s 3D selfie verification, anti-harassment safeguards, privacy controls, and dating tips.',
};

export default function SafetyPage() {
  const safetyTips = [
    {
      title: 'Always Have an In-App Video Date First',
      description: 'Before agreeing to an in-person meeting, initiate a 10-minute video date right inside Miloo. It confirms their identity, voice, and vibe without revealing your personal phone number.',
    },
    {
      title: 'Meet in a Public, Well-Lit Place',
      description: 'Choose a busy coffee shop, restaurant, or popular gallery for your initial dates. Avoid secluded locations or meeting at either person’s private residence.',
    },
    {
      title: 'Tell a Friend Your Plans',
      description: 'Share where you are going, who you are meeting, and when you expect to be back. Arrange a check-in call with a trusted friend.',
    },
    {
      title: 'Control Your Own Transportation',
      description: 'Always drive yourself or take public transit/rideshare so you have full freedom to leave at any moment you feel uncomfortable.',
    },
    {
      title: 'Protect Financial & Personal Information',
      description: 'Never send money, share bank details, home addresses, or social security information. Miloo staff will never ask for wire transfers or passwords.',
    },
  ];

  return (
    <div style={{ paddingTop: 'calc(var(--nav-height) + 40px)', paddingBottom: '100px' }}>
      <div className="container">
        {/* Header */}
        <div className="section-header" style={{ maxWidth: '820px' }}>
          <div className="section-tag" style={{ background: 'rgba(0, 201, 255, 0.1)', borderColor: 'rgba(0, 201, 255, 0.3)', color: '#00C9FF' }}>
            <ShieldCheck size={16} />
            <span>Safety & Trust Center</span>
          </div>
          <h1 className="section-title">
            Your Safety is Non-Negotiable. <br />
            <span className="text-gradient-superlike">Full Stop.</span>
          </h1>
          <p className="section-subtitle">
            From verified photo verification to proactive anti-harassment filters and private in-app video dating, we build safety directly into everything we do.
          </p>
        </div>

        {/* 3 Pillars of Safety */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '30px',
            marginBottom: '80px',
          }}
        >
          <div className="glass-card" style={{ padding: '36px' }}>
            <div style={{ width: '52px', height: '52px', borderRadius: '16px', background: 'rgba(16, 185, 129, 0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '20px' }}>
              <ShieldCheck size={28} color="#10B981" />
            </div>
            <h2 style={{ fontSize: '1.4rem', fontWeight: 800, color: '#FFFFFF', marginBottom: '12px' }}>
              3D Selfie Verification
            </h2>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.92rem', lineHeight: 1.6, marginBottom: '16px' }}>
              Every single user performs a quick, dynamic biometric selfie verification to prove they are the person in their photos. Profiles with the blue verified badge are 100% human-authenticated.
            </p>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#10B981', fontSize: '0.85rem', fontWeight: 600 }}>
              <CheckCircle size={16} />
              <span>99.4% authenticated member base</span>
            </div>
          </div>

          <div className="glass-card" style={{ padding: '36px' }}>
            <div style={{ width: '52px', height: '52px', borderRadius: '16px', background: 'rgba(255, 68, 88, 0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '20px' }}>
              <AlertTriangle size={28} color="#FF4458" />
            </div>
            <h2 style={{ fontSize: '1.4rem', fontWeight: 800, color: '#FFFFFF', marginBottom: '12px' }}>
              Proactive Anti-Harassment
            </h2>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.92rem', lineHeight: 1.6, marginBottom: '16px' }}>
              Our automated content safety filters screen out unrequested explicit photos, scams, hate speech, and spam links before they ever reach your inbox. Block and report any user with a single tap.
            </p>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#FF5864', fontSize: '0.85rem', fontWeight: 600 }}>
              <CheckCircle size={16} />
              <span>Instant auto-block & reporting</span>
            </div>
          </div>

          <div className="glass-card" style={{ padding: '36px' }}>
            <div style={{ width: '52px', height: '52px', borderRadius: '16px', background: 'rgba(0, 201, 255, 0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '20px' }}>
              <Lock size={28} color="#00C9FF" />
            </div>
            <h2 style={{ fontSize: '1.4rem', fontWeight: 800, color: '#FFFFFF', marginBottom: '12px' }}>
              Private In-App Video Dating
            </h2>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.92rem', lineHeight: 1.6, marginBottom: '16px' }}>
              High-definition video dates are completely encrypted. We never display your real phone number, email address, or GPS precision beyond city level.
            </p>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#00C9FF', fontSize: '0.85rem', fontWeight: 600 }}>
              <CheckCircle size={16} />
              <span>Zero third-party location tracking</span>
            </div>
          </div>
        </div>

        {/* Dating Safety Guide */}
        <div className="glass-panel" style={{ padding: '48px', borderRadius: 'var(--radius-card)', marginBottom: '80px' }} id="dating-tips">
          <h2 style={{ fontSize: '1.9rem', fontWeight: 800, color: '#FFFFFF', marginBottom: '12px' }}>
            Essential Safe Meetup Guidelines
          </h2>
          <p style={{ color: 'var(--text-secondary)', marginBottom: '36px', maxWidth: '700px' }}>
            Whether it&apos;s your first date or your tenth, staying safe and in control is paramount. Always follow these golden rules:
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '24px' }}>
            {safetyTips.map((tip, idx) => (
              <div key={idx} style={{ background: 'rgba(255, 255, 255, 0.04)', padding: '24px', borderRadius: 'var(--radius-md)', border: '1px solid var(--glass-border-subtle)' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px' }}>
                  <span style={{ width: '28px', height: '28px', borderRadius: '50%', background: 'var(--gradient-brand)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.85rem', fontWeight: 800, color: '#FFFFFF' }}>
                    {idx + 1}
                  </span>
                  <h3 style={{ fontSize: '1.05rem', fontWeight: 700, color: '#FFFFFF' }}>{tip.title}</h3>
                </div>
                <p style={{ fontSize: '0.88rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>{tip.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Crisis Support & Helplines */}
        <div
          className="glass-card"
          id="crisis"
          style={{
            padding: '36px',
            borderColor: 'rgba(239, 68, 68, 0.3)',
            background: 'linear-gradient(135deg, rgba(239, 68, 68, 0.08) 0%, rgba(22, 25, 34, 0.9) 100%)',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
            <PhoneCall size={24} color="#EF4444" />
            <h2 style={{ fontSize: '1.4rem', fontWeight: 800, color: '#FFFFFF' }}>
              Crisis Resources & Helplines
            </h2>
          </div>
          <p style={{ color: 'var(--text-secondary)', fontSize: '0.92rem', marginBottom: '20px' }}>
            If you ever feel in immediate danger, always call your local emergency services (911 in the US/Canada, 112 in the EU, 999 in the UK). For 24/7 confidential support:
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px', fontSize: '0.9rem' }}>
            <div style={{ background: 'rgba(0,0,0,0.4)', padding: '12px 18px', borderRadius: '12px', border: '1px solid var(--glass-border)' }}>
              <strong>National Sexual Assault Hotline:</strong> 1-800-656-4673 (RAINN)
            </div>
            <div style={{ background: 'rgba(0,0,0,0.4)', padding: '12px 18px', borderRadius: '12px', border: '1px solid var(--glass-border)' }}>
              <strong>National Domestic Violence Hotline:</strong> 1-800-799-7233 or text &ldquo;START&rdquo; to 88788
            </div>
            <div style={{ background: 'rgba(0,0,0,0.4)', padding: '12px 18px', borderRadius: '12px', border: '1px solid var(--glass-border)' }}>
              <strong>Crisis Text Line:</strong> Text &ldquo;HOME&rdquo; to 741741
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
