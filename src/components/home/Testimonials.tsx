'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Sparkles, Heart } from 'lucide-react';

export default function Testimonials() {
  return (
    <section
      className="section"
      id="stories"
      style={{
        paddingTop: '90px',
        paddingBottom: '110px',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <div className="container">
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            alignItems: 'center',
            gap: '64px',
          }}
        >
          {/* Left Column: Miloo-Specific Love Story & Attribution */}
          <div style={{ maxWidth: '580px' }}>
            {/* Pill Tag */}
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                padding: '6px 16px',
                borderRadius: 'var(--radius-pill)',
                backgroundColor: 'rgba(255, 68, 88, 0.15)',
                border: '1px solid rgba(255, 68, 88, 0.3)',
                color: '#FF5864',
                fontSize: '0.82rem',
                fontWeight: 700,
                letterSpacing: '0.04em',
                marginBottom: '20px',
              }}
            >
              <Sparkles size={14} />
              <span>REAL MILOO SPARK STORY</span>
            </div>

            {/* Typographic quote glyph */}
            <div
              style={{
                fontFamily: 'Outfit, sans-serif',
                fontSize: '4.5rem',
                fontWeight: 900,
                lineHeight: 0.8,
                color: '#FF4458',
                marginBottom: '16px',
                opacity: 0.9,
              }}
            >
              &ldquo;
            </div>

            {/* Creative, Miloo-tailored Headline Quote */}
            <h2
              style={{
                fontFamily: 'Outfit, sans-serif',
                fontSize: 'clamp(2rem, 3.8vw, 3.1rem)',
                fontWeight: 800,
                lineHeight: 1.2,
                letterSpacing: '-0.025em',
                color: '#FFFFFF',
                marginBottom: '24px',
              }}
            >
              We were exhausted from dry one-word replies. On Miloo, our 10-minute video date turned into a four-hour conversation about vinyl and road trips.
            </h2>

            {/* Attribution */}
            <div style={{ marginBottom: '36px' }}>
              <div style={{ fontSize: '1.2rem', fontWeight: 800, color: '#FFFFFF' }}>
                Elena &amp; Mateo
              </div>
              <div style={{ fontSize: '0.92rem', color: 'var(--text-secondary)', display: 'flex', alignItems: 'center', gap: '8px', marginTop: '4px' }}>
                <span style={{ color: '#10B981', fontWeight: 700 }}>Matched on Miloo</span>
                <span>•</span>
                <span>Married in 2025</span>
              </div>
            </div>

            {/* Read more stories CTA button */}
            <div>
              <Link
                href="/stories"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '10px',
                  backgroundColor: '#1E222D',
                  color: '#FFFFFF',
                  padding: '16px 32px',
                  borderRadius: '16px',
                  fontSize: '1.05rem',
                  fontWeight: 700,
                  border: '1px solid rgba(255, 255, 255, 0.12)',
                  boxShadow: '0 10px 25px rgba(0, 0, 0, 0.4)',
                  transition: 'transform 0.25s ease, background-color 0.25s ease, border-color 0.25s ease',
                  textDecoration: 'none',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = '#282E3E';
                  e.currentTarget.style.transform = 'translateY(-2px)';
                  e.currentTarget.style.borderColor = 'rgba(255, 68, 88, 0.5)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = '#1E222D';
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.12)';
                }}
              >
                <span>Read more love stories</span>
                <ArrowRight size={18} />
              </Link>
            </div>
          </div>

          {/* Right Column: High-Impact Joyful Couple Portrait */}
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              position: 'relative',
            }}
          >
            {/* Background Ambient Glow */}
            <div
              style={{
                position: 'absolute',
                width: '380px',
                height: '380px',
                background: 'radial-gradient(circle, rgba(255, 68, 88, 0.18) 0%, transparent 70%)',
                filter: 'blur(50px)',
                pointerEvents: 'none',
              }}
            />

            <div
              style={{
                width: '100%',
                maxWidth: '520px',
                height: '460px',
                borderRadius: '28px',
                overflow: 'hidden',
                boxShadow: '0 25px 60px rgba(0, 0, 0, 0.75), 0 0 0 1px rgba(255, 255, 255, 0.1)',
                position: 'relative',
                backgroundColor: '#161922',
              }}
            >
              <Image
                src="/images/miloo_couple_spotlight.webp"
                alt="Elena and Mateo laughing together"
                fill
                sizes="(max-width: 768px) 100vw, 520px"
                loading="lazy"
                style={{
                  objectFit: 'cover',
                  objectPosition: 'center 20%',
                }}
              />

              {/* Gradient overlay for bottom legibility */}
              <div
                style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'linear-gradient(to top, rgba(15, 17, 21, 0.7) 0%, transparent 60%)',
                  pointerEvents: 'none',
                }}
              />

              {/* Floating Story Milestone Pill */}
              <div
                style={{
                  position: 'absolute',
                  bottom: '20px',
                  left: '20px',
                  background: 'rgba(22, 25, 34, 0.88)',
                  border: '1px solid rgba(255, 255, 255, 0.18)',
                  backdropFilter: 'blur(16px)',
                  WebkitBackdropFilter: 'blur(16px)',
                  padding: '8px 16px',
                  borderRadius: 'var(--radius-pill)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  boxShadow: '0 8px 24px rgba(0, 0, 0, 0.5)',
                }}
              >
                <Heart size={15} fill="#FF4458" color="#FF4458" />
                <span style={{ fontSize: '0.85rem', fontWeight: 700, color: '#FFFFFF' }}>
                  From In-App Video Date to “I Do”
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
