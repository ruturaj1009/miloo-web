import React from 'react';
import { LIVE_STATS } from '@/data/landingData';

export default function LiveStats() {
  return (
    <section
      style={{
        paddingTop: '20px',
        paddingBottom: '60px',
        position: 'relative',
        zIndex: 1,
      }}
    >
      <div className="container">
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
            gap: '20px',
          }}
        >
          {LIVE_STATS.map((stat, idx) => (
            <div
              key={idx}
              className="glass-card"
              style={{
                padding: '28px 24px',
                textAlign: 'center',
                position: 'relative',
                overflow: 'hidden',
              }}
            >
              <div
                style={{
                  fontFamily: 'Outfit, sans-serif',
                  fontSize: 'clamp(2.4rem, 4vw, 3rem)',
                  fontWeight: 900,
                  letterSpacing: '-0.02em',
                  marginBottom: '6px',
                  background: idx % 2 === 0 ? 'var(--gradient-brand)' : 'var(--gradient-superlike)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}
              >
                {stat.value}
              </div>
              <div style={{ fontSize: '1rem', fontWeight: 700, color: '#FFFFFF', marginBottom: '4px' }}>
                {stat.label}
              </div>
              {stat.highlight && (
                <div style={{ fontSize: '0.82rem', color: 'var(--text-secondary)' }}>
                  {stat.highlight}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
