'use client';

import React from 'react';
import Link from 'next/link';
import { 
  Sparkles, 
  ArrowRight, 
  ShieldCheck, 
  Heart, 
  Smartphone, 
  Star, 
  CheckCircle2, 
  Zap, 
  Play 
} from 'lucide-react';
import InteractiveDeck from './InteractiveDeck';

export default function HeroSection() {
  return (
    <section
      style={{
        position: 'relative',
        paddingTop: 'calc(var(--nav-height) + 50px)',
        paddingBottom: '80px',
        overflow: 'hidden',
      }}
      id="discover"
    >
      {/* Background Ambient Glow Orbs */}
      <div
        style={{
          position: 'absolute',
          top: '10%',
          left: '5%',
          width: '500px',
          height: '500px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(255, 68, 88, 0.16) 0%, transparent 70%)',
          filter: 'blur(50px)',
          pointerEvents: 'none',
          zIndex: 0,
        }}
      />
      <div
        style={{
          position: 'absolute',
          top: '25%',
          right: '5%',
          width: '550px',
          height: '550px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(124, 58, 237, 0.16) 0%, transparent 70%)',
          filter: 'blur(60px)',
          pointerEvents: 'none',
          zIndex: 0,
        }}
      />

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
            alignItems: 'center',
            gap: '60px',
          }}
        >
          {/* Left Column: Value Proposition & Hero Copy */}
          <div style={{ maxWidth: '580px' }}>
            {/* Top pill badge */}
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                padding: '8px 18px',
                borderRadius: 'var(--radius-pill)',
                background: 'rgba(255, 68, 88, 0.12)',
                border: '1px solid rgba(255, 68, 88, 0.3)',
                color: '#FF5864',
                fontSize: '0.85rem',
                fontWeight: 700,
                letterSpacing: '0.04em',
                marginBottom: '24px',
              }}
            >
              <Sparkles size={16} />
              <span>THE NEW STANDARD IN DATING</span>
            </div>

            {/* Main Headline */}
            <h1
              style={{
                fontSize: 'clamp(2.8rem, 5.5vw, 4.2rem)',
                fontWeight: 900,
                lineHeight: 1.08,
                letterSpacing: '-0.03em',
                marginBottom: '24px',
              }}
            >
              Chemistry, Not Just{' '}
              <span className="text-gradient-brand">Matches.</span>
            </h1>

            {/* Hero Subtitle */}
            <p
              style={{
                fontSize: '1.2rem',
                lineHeight: 1.6,
                color: 'var(--text-secondary)',
                marginBottom: '36px',
              }}
            >
              Designed to cure swipe fatigue. Experience natural swipe motion, verified authentic profiles, instant messaging, and safe video dates before meeting in person.
            </p>

            {/* CTAs */}
            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '16px',
                marginBottom: '40px',
              }}
            >
              <Link href="#download" className="btn-primary" style={{ padding: '16px 32px' }}>
                <Smartphone size={20} />
                <span>Get Miloo for Free</span>
                <ArrowRight size={18} />
              </Link>

              <Link href="#screens" className="btn-secondary" style={{ padding: '16px 28px' }}>
                <Play size={18} />
                <span>Explore App Tour</span>
              </Link>
            </div>

            {/* Social Trust Proof Badges */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
              <div style={{ display: 'flex', marginLeft: '6px' }}>
                {[
                  'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&q=80',
                  'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&q=80',
                  'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&q=80',
                  'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&q=80',
                ].map((src, i) => (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    key={i}
                    src={src}
                    alt="Miloo user"
                    style={{
                      width: '38px',
                      height: '38px',
                      borderRadius: '50%',
                      border: '2px solid #0F1115',
                      marginLeft: '-10px',
                      objectFit: 'cover',
                    }}
                  />
                ))}
              </div>
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                  {[...Array(5)].map((_, i) => (
                    <span key={i} style={{ color: '#FFB800', fontSize: '1rem' }}>★</span>
                  ))}
                  <span style={{ fontWeight: 700, fontSize: '0.9rem', color: '#FFFFFF', marginLeft: '4px' }}>4.8 / 5.0</span>
                </div>
                <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>
                  Trusted by 2M+ singles looking for real sparks
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Hero Deck Interactive Component */}
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              position: 'relative',
            }}
          >
            {/* Background Glow */}
            <div
              style={{
                position: 'absolute',
                width: '420px',
                height: '520px',
                background: 'radial-gradient(circle, rgba(255, 68, 88, 0.22) 0%, rgba(124, 58, 237, 0.15) 50%, transparent 70%)',
                filter: 'blur(50px)',
                zIndex: 0,
                pointerEvents: 'none',
              }}
            />

            {/* The interactive Card Deck */}
            <InteractiveDeck />
          </div>
        </div>
      </div>
    </section>
  );
}
