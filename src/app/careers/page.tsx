'use client';

import React, { useState } from 'react';
import type { Metadata } from 'next';
import { Briefcase, MapPin, Sparkles, Send, CheckCircle2, ArrowRight } from 'lucide-react';

export default function CareersPage() {
  const [appliedRole, setAppliedRole] = useState<string | null>(null);
  const [submitted, setSubmitted] = useState(false);

  const jobs = [
    {
      id: 'rn-staff',
      title: 'Staff React Native & Motion Engineer',
      team: 'Mobile Engineering',
      location: 'Remote (Global) / San Francisco',
      type: 'Full-time',
      experience: '6+ years',
      desc: 'Lead the architecture of our flagship React Native app using Reanimated 4, Gesture Handler 2, and the New Architecture (TurboModules).',
    },
    {
      id: 'backend-webrtc',
      title: 'Senior WebRTC & Real-Time Architect',
      team: 'Platform & Infrastructure',
      location: 'Remote (US/EU timezones)',
      type: 'Full-time',
      experience: '5+ years',
      desc: 'Scale our low-latency Spring Boot STOMP signaling broker, TURN/STUN relay nodes, and peer-to-peer WebRTC video date infrastructure.',
    },
    {
      id: 'product-designer',
      title: 'Lead Product Designer (Dating UX & Motion)',
      team: 'Product Design',
      location: 'Tokyo / London / Remote',
      type: 'Full-time',
      experience: '5+ years',
      desc: 'Shape the next generation of mobile dating ergonomics, tactile haptic feedback systems, and high-contrast dark mode interfaces.',
    },
    {
      id: 'cv-engineer',
      title: 'AI Computer Vision Researcher (Biometrics)',
      team: 'Trust & Safety AI',
      location: 'Remote / New York',
      type: 'Full-time',
      experience: '4+ years',
      desc: 'Build on-device 3D liveness detection models, anti-catfish face matching algorithms, and real-time harmful media filters.',
    },
  ];

  const handleApply = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setAppliedRole(null);
    }, 2000);
  };

  return (
    <div style={{ paddingTop: 'calc(var(--nav-height) + 40px)', paddingBottom: '100px' }}>
      <div className="container">
        {/* Header */}
        <div className="section-header" style={{ maxWidth: '820px' }}>
          <div className="section-tag" style={{ background: 'rgba(16, 185, 129, 0.1)', borderColor: 'rgba(16, 185, 129, 0.3)', color: '#10B981' }}>
            <Sparkles size={16} />
            <span>We Are Hiring</span>
          </div>
          <h1 className="section-title">
            Help Us Build the <br />
            <span className="text-gradient-brand">Future of Human Chemistry</span>
          </h1>
          <p className="section-subtitle">
            Join an ambitious team of engineers, designers, and researchers building high-performance, real-time social products used by millions.
          </p>
        </div>

        {/* Benefits Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
            gap: '24px',
            marginBottom: '80px',
          }}
        >
          <div className="glass-card" style={{ padding: '28px' }}>
            <div style={{ fontSize: '1.5rem', marginBottom: '10px' }}>🌍</div>
            <h3 style={{ fontSize: '1.15rem', fontWeight: 700, color: '#FFFFFF', marginBottom: '8px' }}>Remote-First Culture</h3>
            <p style={{ fontSize: '0.88rem', color: 'var(--text-secondary)' }}>Work from anywhere in the world. Flexible hours and home office stipend provided.</p>
          </div>
          <div className="glass-card" style={{ padding: '28px' }}>
            <div style={{ fontSize: '1.5rem', marginBottom: '10px' }}>📈</div>
            <h3 style={{ fontSize: '1.15rem', fontWeight: 700, color: '#FFFFFF', marginBottom: '8px' }}>Top-Tier Equity & Pay</h3>
            <p style={{ fontSize: '0.88rem', color: 'var(--text-secondary)' }}>Competitive cash compensation alongside substantial founding equity grants.</p>
          </div>
          <div className="glass-card" style={{ padding: '28px' }}>
            <div style={{ fontSize: '1.5rem', marginBottom: '10px' }}>🧘</div>
            <h3 style={{ fontSize: '1.15rem', fontWeight: 700, color: '#FFFFFF', marginBottom: '8px' }}>Comprehensive Wellness</h3>
            <p style={{ fontSize: '0.88rem', color: 'var(--text-secondary)' }}>100% health, dental, vision coverage, unlimited PTO, and mental health stipends.</p>
          </div>
          <div className="glass-card" style={{ padding: '28px' }}>
            <div style={{ fontSize: '1.5rem', marginBottom: '10px' }}>✈️</div>
            <h3 style={{ fontSize: '1.15rem', fontWeight: 700, color: '#FFFFFF', marginBottom: '8px' }}>Global Team Retreats</h3>
            <p style={{ fontSize: '0.88rem', color: 'var(--text-secondary)' }}>Twice-annual company retreats in inspiring locations (Tokyo, Lisbon, Bali).</p>
          </div>
        </div>

        {/* Open Roles */}
        <div>
          <h2 style={{ fontSize: '1.8rem', fontWeight: 800, color: '#FFFFFF', marginBottom: '24px' }}>
            Open Positions ({jobs.length})
          </h2>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            {jobs.map((job) => (
              <div
                key={job.id}
                className="glass-card"
                style={{
                  padding: '32px',
                  display: 'flex',
                  flexWrap: 'wrap',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  gap: '24px',
                }}
              >
                <div style={{ maxWidth: '650px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '8px' }}>
                    <span style={{ fontSize: '0.78rem', fontWeight: 700, color: 'var(--brand-primary)', textTransform: 'uppercase' }}>
                      {job.team}
                    </span>
                    <span style={{ color: 'var(--glass-border)' }}>•</span>
                    <span style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>{job.type}</span>
                  </div>

                  <h3 style={{ fontSize: '1.3rem', fontWeight: 700, color: '#FFFFFF', marginBottom: '8px' }}>
                    {job.title}
                  </h3>
                  <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', marginBottom: '14px', lineHeight: 1.6 }}>
                    {job.desc}
                  </p>

                  <div style={{ display: 'flex', alignItems: 'center', gap: '16px', fontSize: '0.85rem', color: 'var(--text-muted)' }}>
                    <span style={{ display: 'inline-flex', alignItems: 'center', gap: '4px' }}>
                      <MapPin size={14} color="#00C9FF" /> {job.location}
                    </span>
                    <span style={{ display: 'inline-flex', alignItems: 'center', gap: '4px' }}>
                      <Briefcase size={14} /> {job.experience}
                    </span>
                  </div>
                </div>

                <button
                  onClick={() => setAppliedRole(job.title)}
                  className="btn-primary"
                  style={{ padding: '12px 24px', fontSize: '0.9rem' }}
                >
                  <span>Apply Now</span>
                  <ArrowRight size={16} />
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Quick Application Modal */}
        {appliedRole && (
          <div
            style={{
              position: 'fixed',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              backgroundColor: 'rgba(15, 17, 21, 0.9)',
              backdropFilter: 'blur(16px)',
              zIndex: 9999,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '20px',
            }}
          >
            <div className="glass-panel" style={{ width: '100%', maxWidth: '500px', padding: '36px', borderRadius: 'var(--radius-modal)' }}>
              {submitted ? (
                <div style={{ textAlign: 'center', padding: '30px 0' }}>
                  <CheckCircle2 size={50} color="#10B981" style={{ margin: '0 auto 16px auto' }} />
                  <h3 style={{ fontSize: '1.4rem', fontWeight: 800, color: '#FFFFFF' }}>Application Received!</h3>
                  <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', marginTop: '8px' }}>
                    Our talent team will review your application for {appliedRole} and get in touch within 48 hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleApply} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                  <h3 style={{ fontSize: '1.3rem', fontWeight: 800, color: '#FFFFFF' }}>Apply for {appliedRole}</h3>
                  <input
                    type="text"
                    required
                    placeholder="Full Name"
                    style={{ width: '100%', padding: '12px 16px', background: 'rgba(255, 255, 255, 0.06)', border: '1px solid var(--glass-border)', borderRadius: '12px', color: '#FFFFFF', outline: 'none' }}
                  />
                  <input
                    type="email"
                    required
                    placeholder="Work / Personal Email"
                    style={{ width: '100%', padding: '12px 16px', background: 'rgba(255, 255, 255, 0.06)', border: '1px solid var(--glass-border)', borderRadius: '12px', color: '#FFFFFF', outline: 'none' }}
                  />
                  <input
                    type="url"
                    required
                    placeholder="LinkedIn or GitHub Profile URL"
                    style={{ width: '100%', padding: '12px 16px', background: 'rgba(255, 255, 255, 0.06)', border: '1px solid var(--glass-border)', borderRadius: '12px', color: '#FFFFFF', outline: 'none' }}
                  />
                  <textarea
                    rows={3}
                    placeholder="Why are you excited about Miloo?"
                    style={{ width: '100%', padding: '12px 16px', background: 'rgba(255, 255, 255, 0.06)', border: '1px solid var(--glass-border)', borderRadius: '12px', color: '#FFFFFF', outline: 'none' }}
                  />

                  <div style={{ display: 'flex', gap: '12px', marginTop: '10px' }}>
                    <button type="button" onClick={() => setAppliedRole(null)} className="btn-secondary" style={{ flex: 1, padding: '12px' }}>
                      Cancel
                    </button>
                    <button type="submit" className="btn-primary" style={{ flex: 1, padding: '12px' }}>
                      <Send size={16} />
                      <span>Submit Application</span>
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
