'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Sparkles, ShieldCheck, Heart, Users } from 'lucide-react';

export default function DownloadCta() {
  return (
    <section
      className="section"
      id="download"
      style={{
        paddingBottom: '100px',
        paddingTop: '30px',
      }}
    >
      <style jsx>{`
        .download-panel {
          border-radius: 36px;
          padding: 60px 48px;
          position: relative;
          overflow: hidden;
          border: 1px solid var(--glass-border-strong);
          background: linear-gradient(135deg, rgba(27, 32, 45, 0.95) 0%, rgba(20, 22, 32, 0.98) 100%);
          box-shadow: 0 30px 80px rgba(0, 0, 0, 0.7), 0 0 60px rgba(255, 68, 88, 0.18);
        }

        .download-grid {
          display: grid;
          grid-template-columns: 1.1fr 0.9fr;
          align-items: center;
          gap: 56px;
          position: relative;
          z-index: 1;
        }

        .download-store-row {
          display: flex;
          flex-wrap: wrap;
          gap: 16px;
          margin-bottom: 28px;
        }

        .download-store-btn {
          display: flex;
          align-items: center;
          gap: 14px;
          padding: 12px 24px;
          border-radius: 16px;
          background-color: #0F1115;
          border: 1px solid rgba(255, 255, 255, 0.18);
          color: #FFFFFF;
          box-shadow: 0 8px 24px rgba(0, 0, 0, 0.4);
          transition: transform 0.2s ease, border-color 0.2s ease;
          text-decoration: none;
        }

        .download-store-btn:hover {
          border-color: #FFFFFF;
          transform: translateY(-2px);
        }

        .download-image-card {
          position: relative;
          width: 100%;
          max-width: 460px;
          height: 380px;
          border-radius: 28px;
          overflow: hidden;
          box-shadow: 0 25px 60px rgba(0, 0, 0, 0.75), 0 0 0 1px rgba(255, 255, 255, 0.12);
        }

        .download-match-badge {
          position: absolute;
          bottom: 20px;
          left: 20px;
          right: 20px;
          background: rgba(22, 25, 34, 0.9);
          border: 1px solid rgba(255, 68, 88, 0.4);
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
          padding: 12px 18px;
          border-radius: 20px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5);
        }

        @media (max-width: 960px) {
          .download-grid {
            grid-template-columns: 1fr;
            gap: 40px;
          }
          .download-panel {
            padding: 44px 32px;
            border-radius: 28px;
          }
          .download-image-card {
            max-width: 100%;
            height: 320px;
          }
        }

        @media (max-width: 640px) {
          .download-panel {
            padding: 30px 18px;
            border-radius: 24px;
          }
          .download-store-row {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 10px;
            margin-bottom: 22px;
          }
          .download-store-btn {
            padding: 10px 12px;
            gap: 8px;
            justify-content: center;
            border-radius: 14px;
          }
          .download-store-btn svg {
            width: 22px;
            height: 22px;
            flex-shrink: 0;
          }
          .download-store-title {
            font-size: 0.96rem !important;
          }
          .download-store-sub {
            font-size: 0.62rem !important;
          }
          .download-image-card {
            height: 260px;
            border-radius: 22px;
          }
          .download-match-badge {
            bottom: 12px;
            left: 12px;
            right: 12px;
            padding: 10px 12px;
            border-radius: 16px;
          }
          .download-badge-sparks {
            display: none !important;
          }
        }

        @media (max-width: 380px) {
          .download-store-row {
            grid-template-columns: 1fr;
          }
          .download-store-btn {
            justify-content: flex-start;
            padding: 12px 16px;
          }
        }
      `}</style>

      <div className="container">
        <div className="download-panel">
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

          <div className="download-grid">
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
                  fontSize: 'clamp(2rem, 5vw, 3.4rem)',
                  fontWeight: 900,
                  letterSpacing: '-0.03em',
                  lineHeight: 1.12,
                  marginBottom: '18px',
                  color: '#FFFFFF',
                }}
              >
                Ready to find <br />
                <span className="text-gradient-brand">your person?</span>
              </h2>

              <p
                style={{
                  fontSize: 'clamp(0.95rem, 2.2vw, 1.1rem)',
                  color: 'var(--text-secondary)',
                  lineHeight: 1.6,
                  marginBottom: '32px',
                  maxWidth: '480px',
                }}
              >
                Join over 12 million singles discovering authentic chemistry, real-time messaging, and verified video dates. Available free on iOS and Android.
              </p>

              {/* Official Store Badges */}
              <div className="download-store-row">
                {/* Apple App Store */}
                <a
                  href="https://apple.com/app-store"
                  target="_blank"
                  rel="noreferrer"
                  className="download-store-btn"
                >
                  {/* Official Apple Logo Vector */}
                  <svg width="26" height="26" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 6.37c.61-.75 1.04-1.8 0.92-2.85-.9.04-2 .6-2.65 1.35-.58.66-1.09 1.73-.95 2.75 1.01.08 2.07-.5 2.68-1.25Z" />
                  </svg>
                  <div style={{ textAlign: 'left' }}>
                    <div
                      className="download-store-sub"
                      style={{ fontSize: '0.7rem', textTransform: 'uppercase', color: 'rgba(255, 255, 255, 0.65)', letterSpacing: '0.04em' }}
                    >
                      Download on the
                    </div>
                    <div
                      className="download-store-title"
                      style={{ fontSize: '1.15rem', fontWeight: 800, lineHeight: 1.1 }}
                    >
                      App Store
                    </div>
                  </div>
                </a>

                {/* Google Play Store (Authentic 4-color triangle) */}
                <a
                  href="https://play.google.com"
                  target="_blank"
                  rel="noreferrer"
                  className="download-store-btn"
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
                    <div
                      className="download-store-sub"
                      style={{ fontSize: '0.7rem', textTransform: 'uppercase', color: 'rgba(255, 255, 255, 0.65)', letterSpacing: '0.04em' }}
                    >
                      Get it on
                    </div>
                    <div
                      className="download-store-title"
                      style={{ fontSize: '1.15rem', fontWeight: 800, lineHeight: 1.1 }}
                    >
                      Google Play
                    </div>
                  </div>
                </a>
              </div>

              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  fontSize: '0.84rem',
                  color: 'var(--text-muted)',
                  flexWrap: 'wrap',
                }}
              >
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
              <div className="download-image-card">
                <Image
                  src="/images/miloo_couple_download.webp"
                  alt="Couple laughing together with Miloo app"
                  fill
                  sizes="(max-width: 640px) 100vw, 460px"
                  loading="lazy"
                  style={{
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
                <div className="download-match-badge">
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <div
                      style={{
                        width: '36px',
                        height: '36px',
                        borderRadius: '50%',
                        background: 'var(--gradient-brand)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        boxShadow: '0 4px 12px rgba(255, 68, 88, 0.4)',
                        flexShrink: 0,
                      }}
                    >
                      <Heart size={18} fill="#FFFFFF" color="#FFFFFF" />
                    </div>
                    <div>
                      <div style={{ fontSize: '0.92rem', fontWeight: 800, color: '#FFFFFF', lineHeight: 1.2 }}>
                        It&apos;s a Match! 🎉
                      </div>
                      <div style={{ fontSize: '0.74rem', color: '#10B981', lineHeight: 1.2, marginTop: '2px' }}>
                        Connected 2 mins ago
                      </div>
                    </div>
                  </div>

                  <div className="download-badge-sparks" style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.78rem', color: '#FFFFFF', background: 'rgba(255, 255, 255, 0.1)', padding: '6px 12px', borderRadius: '12px' }}>
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
