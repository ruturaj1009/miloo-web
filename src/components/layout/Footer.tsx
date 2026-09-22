'use client';

import React from 'react';
import Link from 'next/link';
import { Flame, ArrowRight, Smartphone } from 'lucide-react';

export default function Footer() {
  return (
    <footer
      style={{
        backgroundColor: '#0C0E14',
        borderTop: '1px solid rgba(255, 255, 255, 0.08)',
        paddingTop: '64px',
        paddingBottom: '44px',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Background Ambient Glows */}
      <div
        style={{
          position: 'absolute',
          top: '-80px',
          left: '5%',
          width: '450px',
          height: '300px',
          background: 'radial-gradient(circle, rgba(255, 68, 88, 0.07) 0%, transparent 70%)',
          pointerEvents: 'none',
        }}
      />
      <div
        style={{
          position: 'absolute',
          bottom: 0,
          right: '5%',
          width: '450px',
          height: '300px',
          background: 'radial-gradient(circle, rgba(124, 58, 237, 0.07) 0%, transparent 70%)',
          pointerEvents: 'none',
        }}
      />

      <style jsx global>{`
        .footer-nav-link {
          font-size: 0.88rem;
          color: var(--text-secondary);
          text-decoration: none;
          transition: transform 0.2s ease, color 0.2s ease;
          display: inline-block;
        }
        .footer-nav-link:hover {
          color: #FFFFFF !important;
          transform: translateX(3px);
        }
        .footer-social-btn {
          width: 36px;
          height: 36px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.05);
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--text-secondary);
          border: 1px solid rgba(255, 255, 255, 0.08);
          transition: transform 0.2s ease, background-color 0.2s ease, border-color 0.2s ease;
          text-decoration: none;
        }
        .footer-social-btn:hover {
          color: #FFFFFF !important;
          background: rgba(255, 255, 255, 0.12) !important;
          border-color: rgba(255, 255, 255, 0.25) !important;
          transform: translateY(-2px);
        }
        .footer-qr-card {
          background: linear-gradient(165deg, rgba(20, 24, 35, 0.85) 0%, rgba(11, 13, 19, 0.95) 100%);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 24px;
          padding: 22px 20px 20px;
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          position: relative;
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          box-shadow: 0 20px 45px -10px rgba(0, 0, 0, 0.65), 0 0 30px -10px rgba(255, 68, 88, 0.12), inset 0 1px 0 rgba(255, 255, 255, 0.12);
          transition: transform 0.3s ease;
        }
        .footer-qr-card:hover {
          transform: translateY(-3px);
        }
        @keyframes qrLaserSweep {
          0% { transform: translateY(0); opacity: 0; }
          15% { opacity: 0.9; }
          85% { opacity: 0.9; }
          100% { transform: translateY(148px); opacity: 0; }
        }
        .qr-scan-beam {
          position: absolute;
          top: 8px;
          left: 0;
          right: 0;
          height: 2px;
          background: linear-gradient(90deg, transparent 0%, #FF4458 35%, #00C9FF 65%, transparent 100%);
          box-shadow: 0 0 8px rgba(255, 68, 88, 0.8), 0 0 14px rgba(0, 201, 255, 0.5);
          animation: qrLaserSweep 3s ease-in-out infinite;
          pointer-events: none;
          will-change: transform, opacity;
        }
        .qr-corner {
          position: absolute;
          width: 12px;
          height: 12px;
          pointer-events: none;
          transition: transform 0.25s ease;
        }
        .qr-corner-tl {
          top: -3px;
          left: -3px;
          border-top: 2.5px solid #FF4458;
          border-left: 2.5px solid #FF4458;
          border-top-left-radius: 6px;
        }
        .qr-corner-tr {
          top: -3px;
          right: -3px;
          border-top: 2.5px solid #FF4458;
          border-right: 2.5px solid #FF4458;
          border-top-right-radius: 6px;
        }
        .qr-corner-bl {
          bottom: -3px;
          left: -3px;
          border-bottom: 2.5px solid #7C3AED;
          border-left: 2.5px solid #7C3AED;
          border-bottom-left-radius: 6px;
        }
        .qr-corner-br {
          bottom: -3px;
          right: -3px;
          border-bottom: 2.5px solid #7C3AED;
          border-right: 2.5px solid #7C3AED;
          border-bottom-right-radius: 6px;
        }
        .footer-qr-card:hover .qr-corner {
          transform: scale(1.15);
        }
        @media (max-width: 960px) {
          .footer-layout-grid {
            grid-template-columns: 1fr !important;
            gap: 44px !important;
          }
          .footer-qr-card {
            max-width: 320px;
            margin: 0 auto;
          }
        }
        @media (max-width: 640px) {
          .footer-links-grid {
            grid-template-columns: repeat(2, 1fr) !important;
            gap: 28px !important;
          }
          .footer-brand-tagline {
            display: none;
          }
        }
      `}</style>

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <div
          className="footer-layout-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: '272px 1fr',
            gap: '56px',
            alignItems: 'start',
          }}
        >
          {/* =========================================================
              LEFT COLUMN: ELEVATED SMART QR ACCESS CARD
              ========================================================= */}
          <div style={{ position: 'relative' }}>
            {/* Ambient Backlight Glow */}
            <div
              style={{
                position: 'absolute',
                top: '20px',
                left: '50%',
                transform: 'translateX(-50%)',
                width: '210px',
                height: '210px',
                background: 'radial-gradient(circle, rgba(255, 68, 88, 0.22) 0%, rgba(124, 58, 237, 0.12) 50%, transparent 70%)',
                filter: 'blur(28px)',
                pointerEvents: 'none',
                zIndex: 0,
              }}
            />

            <div className="footer-qr-card">
              {/* Optical Reticle Frame with Genuine High-Density Vector QR */}
              <div style={{ position: 'relative', padding: '5px', margin: '6px 0 14px' }}>
                <div className="qr-corner qr-corner-tl" />
                <div className="qr-corner qr-corner-tr" />
                <div className="qr-corner qr-corner-bl" />
                <div className="qr-corner qr-corner-br" />

                <div
                  style={{
                    width: '164px',
                    height: '164px',
                    backgroundColor: '#FFFFFF',
                    borderRadius: '18px',
                    padding: '10px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    position: 'relative',
                    boxShadow: '0 12px 28px rgba(0, 0, 0, 0.4)',
                    overflow: 'hidden',
                  }}
                >
                  {/* Detailed Vector QR Code */}
                  <svg
                    viewBox="0 0 35 35"
                    shapeRendering="crispEdges"
                    style={{ width: '100%', height: '100%', display: 'block' }}
                  >
                    <path fill="#ffffff" d="M0 0h35v35H0z" />
                    <path
                      stroke="#0D1017"
                      strokeWidth={1}
                      d="M1 1.5h7m4 0h2m1 0h1m4 0h1m1 0h2m1 0h1m1 0h7M1 2.5h1m5 0h1m2 0h1m2 0h1m3 0h2m2 0h1m3 0h1m1 0h1m5 0h1M1 3.5h1m1 0h3m1 0h1m1 0h1m1 0h7m1 0h4m1 0h2m1 0h1m1 0h3m1 0h1M1 4.5h1m1 0h3m1 0h1m1 0h1m3 0h3m2 0h1m3 0h1m1 0h1m2 0h1m1 0h3m1 0h1M1 5.5h1m1 0h3m1 0h1m2 0h1m1 0h1m1 0h1m1 0h1m1 0h2m1 0h1m1 0h3m1 0h1m1 0h3m1 0h1M1 6.5h1m5 0h1m6 0h1m1 0h2m1 0h1m2 0h1m1 0h1m2 0h1m5 0h1M1 7.5h7m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h7M12 8.5h1m2 0h3m2 0h2m1 0h1m1 0h1M4 9.5h2m1 0h2m1 0h2m1 0h1m1 0h2m1 0h1m2 0h1m3 0h1m4 0h2M1 10.5h1m3 0h2m2 0h1m1 0h1m1 0h7m1 0h4m1 0h1m1 0h3M1 11.5h1m1 0h2m2 0h2m2 0h3m2 0h1m1 0h4m1 0h4m1 0h1m3 0h2M2 12.5h1m2 0h2m1 0h1m8 0h1m3 0h4m1 0h4m1 0h2M1 13.5h4m2 0h1m1 0h1m1 0h1m1 0h1m4 0h1m1 0h1m1 0h1m2 0h1m1 0h4M1 14.5h1m2 0h1m1 0h1m1 0h1m2 0h2m1 0h1m2 0h2m2 0h2m1 0h1m1 0h1m1 0h3m1 0h1M1 15.5h1m1 0h2m1 0h2m2 0h2m1 0h1m1 0h3m3 0h1m3 0h1m2 0h1M2 16.5h4m6 0h3m4 0h2m3 0h1m1 0h1m1 0h1m1 0h1M2 17.5h1m1 0h1m2 0h4m1 0h3m1 0h2m1 0h3m4 0h2m1 0h3M1 18.5h1m3 0h1m3 0h2m1 0h2m2 0h1m3 0h2m1 0h1m1 0h1m1 0h4M2 19.5h1m1 0h2m1 0h2m1 0h1m3 0h1m2 0h2m2 0h4m1 0h2m2 0h4M3 20.5h2m1 0h1m2 0h3m1 0h1m3 0h4m3 0h2m1 0h7M2 21.5h1m2 0h3m1 0h1m2 0h2m1 0h1m1 0h4m4 0h2m1 0h1m1 0h1M1 22.5h2m2 0h2m1 0h1m1 0h2m1 0h2m2 0h1m1 0h1m1 0h1m4 0h4M1 23.5h1m1 0h6m1 0h2m1 0h2m2 0h1m2 0h1m1 0h1m2 0h1m1 0h2m2 0h1m1 0h1M1 24.5h1m1 0h1m2 0h1m2 0h1m1 0h1m3 0h1m1 0h2m2 0h1m6 0h1m2 0h1M1 25.5h3m3 0h2m1 0h2m2 0h1m1 0h2m1 0h1m1 0h1m3 0h6m1 0h2M9 26.5h1m2 0h3m1 0h1m1 0h4m3 0h1m3 0h4M1 27.5h7m1 0h2m6 0h1m3 0h5m1 0h1m1 0h1m1 0h1M1 28.5h1m5 0h1m6 0h1m2 0h1m6 0h2m3 0h4M1 29.5h1m1 0h3m1 0h1m1 0h1m1 0h6m1 0h1m1 0h3m1 0h7m1 0h1M1 30.5h1m1 0h3m1 0h1m1 0h1m9 0h1m2 0h1m1 0h1m1 0h1m1 0h1m1 0h3M1 31.5h1m1 0h3m1 0h1m3 0h1m2 0h2m1 0h3m9 0h1m1 0h3M1 32.5h1m5 0h1m3 0h2m5 0h1m2 0h2m8 0h3M1 33.5h7m2 0h1m2 0h1m3 0h1m2 0h1m1 0h1m2 0h1m1 0h1m1 0h3"
                    />
                  </svg>

                  {/* Central Flame Badge */}
                  <div
                    style={{
                      position: 'absolute',
                      width: '36px',
                      height: '36px',
                      borderRadius: '50%',
                      background: 'var(--gradient-brand)',
                      border: '3px solid #FFFFFF',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      boxShadow: '0 3px 12px rgba(255, 68, 88, 0.45)',
                    }}
                  >
                    <Flame size={18} color="#FFFFFF" strokeWidth={2.4} />
                  </div>

                  {/* Animated High-Tech Laser Sweep */}
                  <div className="qr-scan-beam" />
                </div>
              </div>

              {/* Scan Message & Platform Tag */}
              <div
                style={{
                  fontSize: '1.12rem',
                  fontWeight: 800,
                  color: '#FFFFFF',
                  letterSpacing: '-0.02em',
                  marginBottom: '4px',
                }}
              >
                Scan to Download
              </div>
              <div
                style={{
                  fontSize: '0.78rem',
                  color: 'var(--text-secondary)',
                  lineHeight: 1.35,
                  marginBottom: '12px',
                }}
              >
                Point camera to install mobile app
              </div>

              <div
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px',
                  fontSize: '0.74rem',
                  color: 'rgba(255, 255, 255, 0.85)',
                  background: 'rgba(255, 255, 255, 0.05)',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  padding: '4px 12px',
                  borderRadius: 'var(--radius-pill)',
                  fontWeight: 600,
                }}
              >
                <Smartphone size={13} color="#00C9FF" />
                <span>iOS &amp; Android App</span>
              </div>
            </div>
          </div>

          {/* =========================================================
              RIGHT COLUMN: ALL OTHER CONTENT
              ========================================================= */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              gap: '36px',
              padding: '4px 0',
            }}
          >
            {/* Top Row: Brand & Tagline + Social Media Icons */}
            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                alignItems: 'center',
                justifyContent: 'space-between',
                gap: '20px',
                borderBottom: '1px solid rgba(255, 255, 255, 0.07)',
                paddingBottom: '24px',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
                <Link
                  href="/"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '10px',
                    textDecoration: 'none',
                  }}
                >
                  <div
                    style={{
                      width: '36px',
                      height: '36px',
                      borderRadius: '11px',
                      background: 'var(--gradient-brand)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      boxShadow: '0 4px 14px rgba(255, 68, 88, 0.4)',
                    }}
                  >
                    <Flame size={20} color="#FFFFFF" strokeWidth={2.4} />
                  </div>
                  <span
                    style={{
                      fontFamily: 'Outfit, sans-serif',
                      fontSize: '1.65rem',
                      fontWeight: 800,
                      letterSpacing: '-0.03em',
                      background: 'var(--gradient-brand)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                    }}
                  >
                    miloo
                  </span>
                </Link>

                <span
                  className="footer-brand-tagline"
                  style={{
                    fontSize: '0.86rem',
                    color: 'var(--text-muted)',
                    borderLeft: '1px solid rgba(255, 255, 255, 0.12)',
                    paddingLeft: '14px',
                    maxWidth: '360px',
                    lineHeight: 1.4,
                  }}
                >
                  Dating engineered for authentic chemistry, fluid motion &amp; safe video dates.
                </span>
              </div>

              {/* Social Links */}
              <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Twitter / X"
                  className="footer-social-btn"
                >
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Instagram"
                  className="footer-social-btn"
                >
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                  </svg>
                </a>
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="GitHub"
                  className="footer-social-btn"
                >
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                    <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Middle: 4 Clean Navigation Columns */}
            <div
              className="footer-links-grid"
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(4, 1fr)',
                gap: '32px',
              }}
            >
              {/* Product */}
              <div>
                <h3
                  style={{
                    fontSize: '0.8rem',
                    textTransform: 'uppercase',
                    letterSpacing: '0.08em',
                    fontWeight: 800,
                    color: 'var(--text-muted)',
                    marginBottom: '16px',
                  }}
                >
                  Product
                </h3>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '10px' }}>
                  <li><Link href="/#discover" className="footer-nav-link">Discovery Deck</Link></li>
                  <li><Link href="/features" className="footer-nav-link">Core Features</Link></li>
                  <li><Link href="/stories" className="footer-nav-link">Success Stories</Link></li>
                  <li><Link href="/features#video-dates" className="footer-nav-link">Video Dates</Link></li>
                  <li><Link href="/features#chat" className="footer-nav-link">Instant Chat</Link></li>
                  <li>
                    <Link
                      href="/premium"
                      style={{
                        fontSize: '0.88rem',
                        color: '#00C9FF',
                        fontWeight: 700,
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '4px',
                        textDecoration: 'none',
                      }}
                    >
                      <span>Pricing &amp; Plans</span>
                      <ArrowRight size={12} />
                    </Link>
                  </li>
                </ul>
              </div>

              {/* Trust & Safety */}
              <div>
                <h3
                  style={{
                    fontSize: '0.8rem',
                    textTransform: 'uppercase',
                    letterSpacing: '0.08em',
                    fontWeight: 800,
                    color: 'var(--text-muted)',
                    marginBottom: '16px',
                  }}
                >
                  Trust &amp; Safety
                </h3>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '10px' }}>
                  <li><Link href="/safety" className="footer-nav-link">Safety Center</Link></li>
                  <li><Link href="/safety#verification" className="footer-nav-link">3D Selfie Check</Link></li>
                  <li><Link href="/safety#guidelines" className="footer-nav-link">Guidelines</Link></li>
                  <li><Link href="/safety#dating-tips" className="footer-nav-link">Dating Tips</Link></li>
                  <li><Link href="/safety#crisis" className="footer-nav-link">Crisis Helplines</Link></li>
                </ul>
              </div>

              {/* Company */}
              <div>
                <h3
                  style={{
                    fontSize: '0.8rem',
                    textTransform: 'uppercase',
                    letterSpacing: '0.08em',
                    fontWeight: 800,
                    color: 'var(--text-muted)',
                    marginBottom: '16px',
                  }}
                >
                  Company
                </h3>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '10px' }}>
                  <li><Link href="/about" className="footer-nav-link">About Miloo</Link></li>
                  <li><Link href="/stories" className="footer-nav-link">Member Stories</Link></li>
                  <li>
                    <Link
                      href="/careers"
                      className="footer-nav-link"
                      style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}
                    >
                      <span>Careers</span>
                      <span
                        style={{
                          fontSize: '0.68rem',
                          fontWeight: 700,
                          padding: '1px 6px',
                          borderRadius: '6px',
                          background: 'rgba(16, 185, 129, 0.15)',
                          color: '#10B981',
                          border: '1px solid rgba(16, 185, 129, 0.3)',
                        }}
                      >
                        Hiring
                      </span>
                    </Link>
                  </li>
                  <li><Link href="/press" className="footer-nav-link">Press Kit</Link></li>
                  <li><Link href="/contact" className="footer-nav-link">Support &amp; FAQ</Link></li>
                </ul>
              </div>

              {/* Legal & Privacy */}
              <div>
                <h3
                  style={{
                    fontSize: '0.8rem',
                    textTransform: 'uppercase',
                    letterSpacing: '0.08em',
                    fontWeight: 800,
                    color: 'var(--text-muted)',
                    marginBottom: '16px',
                  }}
                >
                  Legal
                </h3>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '10px' }}>
                  <li><Link href="/terms" className="footer-nav-link">Terms of Service</Link></li>
                  <li><Link href="/privacy" className="footer-nav-link">Privacy Policy</Link></li>
                  <li><Link href="/privacy#cookies" className="footer-nav-link">Cookie Settings</Link></li>
                  <li><Link href="/privacy#gdpr" className="footer-nav-link">Health Data</Link></li>
                </ul>
              </div>
            </div>

            {/* Bottom Bar: Copyright & Tokens note */}
            <div
              style={{
                borderTop: '1px solid rgba(255, 255, 255, 0.07)',
                paddingTop: '20px',
                display: 'flex',
                flexWrap: 'wrap',
                alignItems: 'center',
                justifyContent: 'space-between',
                gap: '16px',
                fontSize: '0.82rem',
                color: 'var(--text-muted)',
              }}
            >
              <div>
                © {new Date().getFullYear()} Miloo Inc. All rights reserved.
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap' }}>
                <span>
                  Crafted with <span style={{ color: 'var(--brand-primary)' }}>♥</span> for authentic connection
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
