import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { Heart, Sparkles, ShieldCheck, Flame, Users, Compass, ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'About Miloo — Built for Chemistry, Not Just Matches',
  description:
    'Learn about Miloo’s mission to end superficial swipe fatigue and build a dating app focused on authentic human chemistry, safety, and real-time interaction.',
};

export default function AboutPage() {
  const team = [
    {
      name: 'Elena Rostova',
      role: 'Co-Founder & CEO',
      bio: 'Former product director at leading social platforms. Passionate about reforming modern dating culture.',
      photo: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&q=80',
    },
    {
      name: 'Kenji Sato',
      role: 'Co-Founder & CTO',
      bio: 'Pioneer in real-time communication systems. Architect of Miloo’s fluid gesture deck and private video dating.',
      photo: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&q=80',
    },
    {
      name: 'Amara Vance',
      role: 'Head of Trust & Safety',
      bio: 'Cybersecurity advocate specializing in AI biometric verification and community anti-harassment safeguards.',
      photo: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=600&q=80',
    },
  ];

  return (
    <div style={{ paddingTop: 'calc(var(--nav-height) + 40px)', paddingBottom: '100px' }}>
      <div className="container">
        {/* Hero Header */}
        <div className="section-header" style={{ maxWidth: '820px' }}>
          <div className="section-tag">
            <Heart size={16} fill="#FF5864" />
            <span>Our Mission & Story</span>
          </div>
          <h1 className="section-title">
            We’re Re-Engineering <br />
            <span className="text-gradient-brand">How People Fall in Love</span>
          </h1>
          <p className="section-subtitle">
            Dating apps were meant to bring people together. Somewhere along the way, they became superficial slot machines. Miloo was founded to change that.
          </p>
        </div>

        {/* Origin Story Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '40px',
            alignItems: 'center',
            marginBottom: '100px',
          }}
        >
          <div className="glass-card" style={{ padding: '40px', borderRadius: 'var(--radius-card)' }}>
            <h2 style={{ fontSize: '1.8rem', fontWeight: 800, marginBottom: '16px', color: '#FFFFFF' }}>
              The Problem with &ldquo;The Swipe&rdquo;
            </h2>
            <p style={{ color: 'var(--text-secondary)', lineHeight: 1.7, marginBottom: '16px' }}>
              Over 70% of singles report &ldquo;dating app burnout&rdquo; — endless swiping, ghosting after matching, catfishing, and superficial judgment based on a split second.
            </p>
            <p style={{ color: 'var(--text-secondary)', lineHeight: 1.7, marginBottom: '24px' }}>
              We realized that what was missing wasn&apos;t more profiles; it was <strong>authentic tactile chemistry</strong>. By combining fluid motion, meaningful prompts, zero-tolerance selfie verification, and safe in-app video dates, Miloo brings the real spark back.
            </p>

            <div style={{ display: 'flex', gap: '20px' }}>
              <div>
                <div style={{ fontSize: '2rem', fontWeight: 900, color: 'var(--brand-primary)' }}>78%</div>
                <div style={{ fontSize: '0.82rem', color: 'var(--text-muted)' }}>Lower ghosting rate</div>
              </div>
              <div style={{ width: '1px', backgroundColor: 'var(--glass-border)' }} />
              <div>
                <div style={{ fontSize: '2rem', fontWeight: 900, color: 'var(--accent-cyan)' }}>99.4%</div>
                <div style={{ fontSize: '0.82rem', color: 'var(--text-muted)' }}>Verified human profiles</div>
              </div>
              <div style={{ width: '1px', backgroundColor: 'var(--glass-border)' }} />
              <div>
                <div style={{ fontSize: '2rem', fontWeight: 900, color: 'var(--color-like)' }}>3.4x</div>
                <div style={{ fontSize: '0.82rem', color: 'var(--text-muted)' }}>Higher second date rate</div>
              </div>
            </div>
          </div>

          <div
            style={{
              position: 'relative',
              borderRadius: 'var(--radius-card)',
              overflow: 'hidden',
              height: '420px',
              border: '1px solid var(--glass-border)',
              boxShadow: 'var(--shadow-lg)',
            }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=800&q=80"
              alt="Miloo community meetup"
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
            <div
              style={{
                position: 'absolute',
                inset: 0,
                background: 'linear-gradient(to top, rgba(15, 17, 21, 0.9) 0%, transparent 60%)',
                display: 'flex',
                alignItems: 'flex-end',
                padding: '30px',
              }}
            >
              <div style={{ color: '#FFFFFF', fontSize: '1.1rem', fontWeight: 700 }}>
                &ldquo;Where digital introductions turn into lifelong human memories.&rdquo;
              </div>
            </div>
          </div>
        </div>

        {/* Core Principles */}
        <div style={{ marginBottom: '100px' }}>
          <div className="section-header">
            <h2 className="section-title">
              Our Core <span className="text-gradient-brand">Principles</span>
            </h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px' }}>
            <div className="glass-card" style={{ padding: '32px' }}>
              <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: 'rgba(255, 68, 88, 0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '18px' }}>
                <Flame size={24} color="#FF4458" />
              </div>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '10px', color: '#FFFFFF' }}>Intentional Swiping</h3>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                We limit daily swipes for basic members to encourage conscious browsing rather than mindless dopamine tapping.
              </p>
            </div>

            <div className="glass-card" style={{ padding: '32px' }}>
              <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: 'rgba(0, 201, 255, 0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '18px' }}>
                <ShieldCheck size={24} color="#00C9FF" />
              </div>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '10px', color: '#FFFFFF' }}>Zero-Bot Integrity</h3>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                Every single profile is verified using 3D AI biometric liveness checks. No catfish. No spam bots.
              </p>
            </div>

            <div className="glass-card" style={{ padding: '32px' }}>
              <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: 'rgba(16, 185, 129, 0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '18px' }}>
                <Compass size={24} color="#10B981" />
              </div>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '10px', color: '#FFFFFF' }}>Safety & Autonomy</h3>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                Video dates happen peer-to-peer inside the app without revealing phone numbers, home addresses, or social accounts.
              </p>
            </div>
          </div>
        </div>

        {/* Leadership Team */}
        <div>
          <div className="section-header">
            <h2 className="section-title">
              Meet the <span className="text-gradient-brand">Leadership</span>
            </h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '30px' }}>
            {team.map((member, idx) => (
              <div key={idx} className="glass-card" style={{ overflow: 'hidden', borderRadius: 'var(--radius-card)' }}>
                <div style={{ height: '280px', width: '100%', position: 'relative' }}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={member.photo} alt={member.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>
                <div style={{ padding: '24px' }}>
                  <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: '#FFFFFF', marginBottom: '4px' }}>{member.name}</h3>
                  <div style={{ fontSize: '0.85rem', color: 'var(--brand-primary)', fontWeight: 600, marginBottom: '10px' }}>{member.role}</div>
                  <p style={{ fontSize: '0.88rem', color: 'var(--text-secondary)', lineHeight: 1.5 }}>{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
