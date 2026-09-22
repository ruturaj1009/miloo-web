'use client';

import React from 'react';
import Link from 'next/link';
import { Sparkles, ShieldCheck, Heart, Users } from 'lucide-react';

export default function DownloadCta() {
  return (
    <section
      className="section"
      id="download"
      style={{
        paddingBottom: '120px',
        paddingTop: '40px',
      }}
    >
      <div className="container">
        <div
          className="glass-panel"
          style={{
            borderRadius: '36px',
            padding: '60px 48px',
            position: 'relative',
            overflow: 'hidden',
            border: '1px solid var(--glass-border-strong)',
            background: 'linear-gradient(135deg, rgba(27, 32, 45, 0.95) 0%, rgba(20, 22, 32, 0.98) 100%)',
            boxShadow: '0 30px 80px rgba(0, 0, 0, 0.7), 0 0 60px rgba(255, 68, 88, 0.18)',
          }}
        >
          {/* Ambient Glows */}
          <div
            style={{
              position: 'absolute',
              top: '-100px',
              right: '-100px',
              width: '400px',
              height: '400px',
              borderRadius: '50%',
              background: 'radial-gradient(circle, rgba(255, 68, 88, 0.25) 0%, transparent 70%)',
              filter: 'blur(60px)',
              pointerEvents: 'none',
            }}
          />
          <div
            style={{
              position: 'absolute',
              bottom: '-100px',
              left: '-100px',
              width: '400px',
              height: '400px',
              borderRadius: '50%',
              background: 'radial-gradient(circle, rgba(124, 58, 237, 0.25) 0%, transparent 70%)',
              filter: 'blur(60px)',
              pointerEvents: 'none',
            }}
          />

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              alignItems: 'center',
              gap: '56px',
              position: 'relative',
              zIndex: 1,
            }}
          >
            {/* Left Column: Heading, Value Prop, and Official Store Buttons */}
            <div>
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
                  marginBottom: '20px',
                }}
              >
                <Sparkles size={14} />
                <span>START YOUR JOURNEY TODAY</span>
              </div>

              <h2
                style={{
                  fontFamily: 'Outfit, sans-serif',
                  fontSize: 'clamp(2.4rem, 4.5vw, 3.4rem)',
                  fontWeight: 900,
                  letterSpacing: '-0.03em',
                  lineHeight: 1.1,
                  marginBottom: '20px',
                  color: '#FFFFFF',
                }}
              >
                Ready to find <br />
                <span className="text-gradient-brand">your person?</span>
              </h2>

              <p
                style={{
                  fontSize: '1.1rem',
                  color: 'var(--text-secondary)',
                  lineHeight: 1.6,
                  marginBottom: '36px',
                  maxWidth: '480px',
                }}
              >
                Join over 12 million singles discovering authentic chemistry, real-time messaging, and verified video dates. Available free on iOS and Android.
              </p>

              {/* Official Store Badges */}
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px', marginBottom: '28px' }}>
                {/* Apple App Store */}
                <a
                  href="https://apple.com/app-store"
                  target="_blank"
                  rel="noreferrer"
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '14px',
                    padding: '12px 24px',
                    borderRadius: '16px',
                    backgroundColor: '#0F1115',
                    border: '1px solid rgba(255, 255, 255, 0.18)',
                    color: '#FFFFFF',
                    boxShadow: '0 8px 24px rgba(0, 0, 0, 0.4)',
                    transition: 'all 0.2s ease',
                    textDecoration: 'none',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = '#FFFFFF';
                    e.currentTarget.style.transform = 'translateY(-2px)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.18)';
                    e.currentTarget.style.transform = 'translateY(0)';
                  }}
                >
                  {/* Official Apple Logo Vector */}
                  <svg width="26" height="26" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 6.37c.61-.75 1.04-1.8 0.92-2.85-.9.04-2 .6-2.65 1.35-.58.66-1.09 1.73-.95 2.75 1.01.08 2.07-.5 2.68-1.25Z" />
                  </svg>
                  <div style={{ textAlign: 'left' }}>
                    <div style={{ fontSize: '0.7rem', textTransform: 'uppercase', color: 'rgba(255, 255, 255, 0.6)', letterSpacing: '0.04em' }}>
                      Download on the
                    </div>
                    <div style={{ fontSize: '1.15rem', fontWeight: 800, lineHeight: 1.1 }}>
                      App Store
                    </div>
                  </div>
                </a>

                {/* Google Play Store (Authentic 4-color triangle) */}
                <a
                  href="https://play.google.com"
                  target="_blank"
                  rel="noreferrer"
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '14px',
                    padding: '12px 24px',
                    borderRadius: '16px',
                    backgroundColor: '#0F1115',
                    border: '1px solid rgba(255, 255, 255, 0.18)',
                    color: '#FFFFFF',
                    boxShadow: '0 8px 24px rgba(0, 0, 0, 0.4)',
                    transition: 'all 0.2s ease',
                    textDecoration: 'none',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = '#FFFFFF';
                    e.currentTarget.style.transform = 'translateY(-2px)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.18)';
                    e.currentTarget.style.transform = 'translateY(0)';
                  }}
                >
                  {/* Official Google Play 4-Color Vector Logo */}
                  <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M3.609 1.814L13.793 12 3.61 22.186A1.85 1.85 0 0 1 3 20.852V3.148c0-.528.224-1.02.609-1.334z"
                      fill="#00D2FF"
                    />
                    <path
                      d="M17.207 8.586l-3.414 3.414 3.414 3.414 3.864-2.208c1.106-.632 1.106-1.78 0-2.412L17.207 8.586z"
                      fill="#FFD200"
                    />
                    <path
                      d="M3.609 1.814l10.184 10.186 3.414-3.414L6.155.674c-.958-.548-2.02-.27-2.546.54l-.001.001-.001.001-.001.001.002-.003z"
                      fill="#00F076"
                    />
                    <path
                      d="M13.793 12L3.609 22.186c.527.81 1.588 1.088 2.546.541l11.052-6.313-3.414-3.414z"
                      fill="#FF3A44"
                    />
                  </svg>
                  <div style={{ textAlign: 'left' }}>
                    <div style={{ fontSize: '0.7rem', textTransform: 'uppercase', color: 'rgba(255, 255, 255, 0.6)', letterSpacing: '0.04em' }}>
                      Get it on
                    </div>
                    <div style={{ fontSize: '1.15rem', fontWeight: 800, lineHeight: 1.1 }}>
                      Google Play
                    </div>
                  </div>
                </a>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.85rem', color: 'var(--text-muted)' }}>
                <ShieldCheck size={16} color="#10B981" />
                <span>Zero bot guarantee • iOS 16+ &amp; Android 10+ compatible</span>
              </div>
            </div>

            {/* Right Column: Catchy Lifestyle Visual */}
            <div
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                position: 'relative',
              }}
            >
              <div
                style={{
                  position: 'relative',
                  width: '100%',
                  maxWidth: '460px',
                  height: '380px',
                  borderRadius: '28px',
                  overflow: 'hidden',
                  boxShadow: '0 25px 60px rgba(0, 0, 0, 0.75), 0 0 0 1px rgba(255, 255, 255, 0.12)',
                }}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/images/miloo_couple_download.jpg"
                  alt="Couple laughing together with Miloo app"
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    objectPosition: 'center 20%',
                  }}
                />

                {/* Gradient vignette */}
                <div
                  style={{
                    position: 'absolute',
                    inset: 0,
                    background: 'linear-gradient(to top, rgba(15, 17, 21, 0.75) 0%, transparent 60%)',
                    pointerEvents: 'none',
                  }}
                />

                {/* Floating "It's a Match!" Badge Overlay */}
                <div
                  style={{
                    position: 'absolute',
                    bottom: '20px',
                    left: '20px',
                    right: '20px',
                    background: 'rgba(22, 25, 34, 0.88)',
                    border: '1px solid rgba(255, 68, 88, 0.4)',
                    backdropFilter: 'blur(16px)',
                    WebkitBackdropFilter: 'blur(16px)',
                    padding: '12px 18px',
                    borderRadius: '20px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    boxShadow: '0 10px 30px rgba(0, 0, 0, 0.5)',
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                    <div
                      style={{
                        width: '38px',
                        height: '38px',
                        borderRadius: '50%',
                        background: 'var(--gradient-brand)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        boxShadow: '0 4px 12px rgba(255, 68, 88, 0.4)',
                      }}
                    >
                      <Heart size={18} fill="#FFFFFF" color="#FFFFFF" />
                    </div>
                    <div>
                      <div style={{ fontSize: '0.92rem', fontWeight: 800, color: '#FFFFFF' }}>
                        It&apos;s a Match! 🎉
                      </div>
                      <div style={{ fontSize: '0.74rem', color: '#10B981' }}>
                        Connected 2 mins ago
                      </div>
                    </div>
                  </div>

                  <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.78rem', color: '#FFFFFF', background: 'rgba(255, 255, 255, 0.1)', padding: '6px 12px', borderRadius: '12px' }}>
                    <Users size={14} color="#00C9FF" />
                    <span style={{ fontWeight: 700 }}>12M+ Sparks</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
