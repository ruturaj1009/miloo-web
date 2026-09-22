import React from 'react';
import type { Metadata } from 'next';
import { Newspaper, Download, Flame, Mail, ExternalLink } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Press & Media Kit — Miloo Dating App',
  description:
    'Official news, downloadable brand assets, media guidelines, and executive bios for Miloo Dating App.',
};

export default function PressPage() {
  const news = [
    {
      date: 'January 14, 2026',
      outlet: 'TechCrunch',
      title: 'Miloo Surpasses 12 Million Connections with Anti-Burnout Dating Architecture',
      snippet: 'How Miloo’s focus on natural swipe cards and mandatory in-app video pre-dates is reversing the dating app fatigue trend.',
    },
    {
      date: 'November 28, 2025',
      outlet: 'Wired',
      title: 'The Death of the Catfish: Inside Miloo’s 3D Biometric Liveness Engine',
      snippet: 'A technical look at how AI facial geometry validation is eliminating fake dating profiles before they can match.',
    },
    {
      date: 'September 19, 2025',
      outlet: 'The Verge',
      title: 'Miloo Brings Zero-Lag STOMP Messaging and Draggable Video Calls to Mobile Dating',
      snippet: 'Hands-on review of Miloo’s responsive React Native design system and centralized moody color palette.',
    },
  ];

  return (
    <div style={{ paddingTop: 'calc(var(--nav-height) + 40px)', paddingBottom: '100px' }}>
      <div className="container">
        {/* Header */}
        <div className="section-header" style={{ maxWidth: '820px' }}>
          <div className="section-tag">
            <Newspaper size={16} />
            <span>Newsroom & Media Kit</span>
          </div>
          <h1 className="section-title">
            Miloo in the <span className="text-gradient-brand">Headlines</span>
          </h1>
          <p className="section-subtitle">
            Find the latest company updates, press releases, high-resolution logos, and executive photography for media coverage.
          </p>
        </div>

        {/* Fact Sheet */}
        <div className="glass-panel" style={{ padding: '40px', borderRadius: 'var(--radius-card)', marginBottom: '60px' }}>
          <h2 style={{ fontSize: '1.5rem', fontWeight: 800, color: '#FFFFFF', marginBottom: '20px' }}>
            Fast Company Facts
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '24px' }}>
            <div>
              <div style={{ fontSize: '0.82rem', color: 'var(--text-muted)', textTransform: 'uppercase' }}>Founded</div>
              <div style={{ fontSize: '1.3rem', fontWeight: 700, color: '#FFFFFF' }}>2024</div>
            </div>
            <div>
              <div style={{ fontSize: '0.82rem', color: 'var(--text-muted)', textTransform: 'uppercase' }}>Headquarters</div>
              <div style={{ fontSize: '1.3rem', fontWeight: 700, color: '#FFFFFF' }}>San Francisco & Tokyo</div>
            </div>
            <div>
              <div style={{ fontSize: '0.82rem', color: 'var(--text-muted)', textTransform: 'uppercase' }}>Active Members</div>
              <div style={{ fontSize: '1.3rem', fontWeight: 700, color: '#FFFFFF' }}>12,000,000+</div>
            </div>
            <div>
              <div style={{ fontSize: '0.82rem', color: 'var(--text-muted)', textTransform: 'uppercase' }}>App Rating</div>
              <div style={{ fontSize: '1.3rem', fontWeight: 700, color: '#FFFFFF' }}>4.8 ★ (95K Reviews)</div>
            </div>
          </div>
        </div>

        {/* Recent Coverage */}
        <div style={{ marginBottom: '60px' }}>
          <h2 style={{ fontSize: '1.8rem', fontWeight: 800, color: '#FFFFFF', marginBottom: '24px' }}>
            Press Releases & In the News
          </h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            {news.map((item, idx) => (
              <div key={idx} className="glass-card" style={{ padding: '28px', display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center', gap: '20px' }}>
                <div style={{ maxWidth: '700px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '0.82rem', color: 'var(--brand-primary)', fontWeight: 700, marginBottom: '6px' }}>
                    <span>{item.outlet}</span>
                    <span style={{ color: 'var(--text-muted)' }}>•</span>
                    <span style={{ color: 'var(--text-muted)', fontWeight: 400 }}>{item.date}</span>
                  </div>
                  <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#FFFFFF', marginBottom: '8px' }}>
                    {item.title}
                  </h3>
                  <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
                    {item.snippet}
                  </p>
                </div>
                <div style={{ color: 'var(--text-muted)' }}>
                  <ExternalLink size={20} />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Media Assets Download */}
        <div className="glass-card" style={{ padding: '40px', borderRadius: 'var(--radius-card)', marginBottom: '60px' }}>
          <h2 style={{ fontSize: '1.6rem', fontWeight: 800, color: '#FFFFFF', marginBottom: '10px' }}>
            Brand Assets & Guidelines
          </h2>
          <p style={{ color: 'var(--text-secondary)', fontSize: '0.92rem', marginBottom: '32px' }}>
            Download the official Miloo logomark, typography specs, and device mockups for press use.
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '24px' }}>
            <div style={{ background: 'rgba(255, 255, 255, 0.04)', padding: '24px', borderRadius: '16px', border: '1px solid var(--glass-border)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '12px' }}>
                <div style={{ width: '40px', height: '40px', borderRadius: '10px', background: 'var(--gradient-brand)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <Flame size={22} color="#FFFFFF" />
                </div>
                <div>
                  <div style={{ fontSize: '1rem', fontWeight: 700, color: '#FFFFFF' }}>Vector Logos (SVG/PNG)</div>
                  <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Dark & light variations</div>
                </div>
              </div>
              <button className="btn-secondary" style={{ width: '100%', padding: '10px', fontSize: '0.85rem', justifyContent: 'center' }}>
                <Download size={15} />
                <span>Download Logos (.ZIP)</span>
              </button>
            </div>

            <div style={{ background: 'rgba(255, 255, 255, 0.04)', padding: '24px', borderRadius: '16px', border: '1px solid var(--glass-border)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '12px' }}>
                <div style={{ width: '40px', height: '40px', borderRadius: '10px', background: 'var(--gradient-superlike)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <Flame size={22} color="#0F1115" />
                </div>
                <div>
                  <div style={{ fontSize: '1rem', fontWeight: 700, color: '#FFFFFF' }}>App Mockups (Hi-Res)</div>
                  <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>iPhone 16 Pro renders</div>
                </div>
              </div>
              <button className="btn-secondary" style={{ width: '100%', padding: '10px', fontSize: '0.85rem', justifyContent: 'center' }}>
                <Download size={15} />
                <span>Download Screenshots (.ZIP)</span>
              </button>
            </div>
          </div>
        </div>

        {/* Media Inquiries Contact */}
        <div style={{ textAlign: 'center' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', color: 'var(--text-secondary)', fontSize: '0.95rem' }}>
            <Mail size={18} color="var(--brand-primary)" />
            <span>Journalist inquiries: </span>
            <a href="mailto:press@miloo.app" style={{ color: '#FFFFFF', fontWeight: 700, textDecoration: 'underline' }}>
              press@miloo.app
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
