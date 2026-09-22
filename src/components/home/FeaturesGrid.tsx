'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { 
  Flame, 
  Video, 
  MessageCircleHeart, 
  ShieldCheck, 
  Check, 
  ArrowRight, 
  Sparkles,
  ChevronRight
} from 'lucide-react';
import { CORE_FEATURES } from '@/data/landingData';

export default function FeaturesGrid() {
  const [activeId, setActiveId] = useState<string>(CORE_FEATURES[0].id);

  const getIcon = (iconName: string, color: string) => {
    switch (iconName) {
      case 'Flame':
        return <Flame size={24} color={color} strokeWidth={2.4} />;
      case 'Video':
        return <Video size={24} color={color} strokeWidth={2.4} />;
      case 'MessageCircleHeart':
        return <MessageCircleHeart size={24} color={color} strokeWidth={2.4} />;
      case 'ShieldCheck':
        return <ShieldCheck size={24} color={color} strokeWidth={2.4} />;
      default:
        return <Flame size={24} color={color} strokeWidth={2.4} />;
    }
  };

  const getCardTheme = (id: string) => {
    switch (id) {
      case 'fluid-deck':
        return {
          color: '#FF4458',
          accent: '#FF5864',
          glow: 'rgba(255, 68, 88, 0.35)',
          bgGradient: 'linear-gradient(135deg, rgba(255, 68, 88, 0.12) 0%, rgba(22, 25, 34, 0.95) 75%)',
          number: '01',
          bgImage: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=600&q=70',
        };
      case 'webrtc-dates':
        return {
          color: '#00C9FF',
          accent: '#0072FF',
          glow: 'rgba(0, 201, 255, 0.35)',
          bgGradient: 'linear-gradient(135deg, rgba(0, 201, 255, 0.12) 0%, rgba(22, 25, 34, 0.95) 75%)',
          number: '02',
          bgImage: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=600&q=70',
        };
      case 'stomp-chat':
        return {
          color: '#10B981',
          accent: '#00E676',
          glow: 'rgba(16, 185, 129, 0.35)',
          bgGradient: 'linear-gradient(135deg, rgba(16, 185, 129, 0.12) 0%, rgba(22, 25, 34, 0.95) 75%)',
          number: '03',
          bgImage: 'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=600&q=70',
        };
      case 'trust-shield':
        return {
          color: '#A855F7',
          accent: '#7C3AED',
          glow: 'rgba(168, 85, 247, 0.35)',
          bgGradient: 'linear-gradient(135deg, rgba(168, 85, 247, 0.12) 0%, rgba(22, 25, 34, 0.95) 75%)',
          number: '04',
          bgImage: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&q=70',
        };
      default:
        return {
          color: '#FF4458',
          accent: '#FF5864',
          glow: 'rgba(255, 68, 88, 0.35)',
          bgGradient: 'linear-gradient(135deg, rgba(255, 68, 88, 0.12) 0%, rgba(22, 25, 34, 0.95) 75%)',
          number: '01',
          bgImage: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=600&q=70',
        };
    }
  };

  return (
    <section className="section" id="features">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag">
            <Sparkles size={14} />
            <span>Core Pillars</span>
          </div>
          <h2 className="section-title">
            Engineered for <span className="text-gradient-brand">Real Chemistry</span>
          </h2>
          <p className="section-subtitle">
            Hover over any pillar to explore how Miloo blends natural gestures, intimate video dates, instant messaging, and verified safety.
          </p>
        </div>

        {/* 4 Cards Partial Open Horizontal Accordion Container */}
        <div className="accordion-deck-container">
          {CORE_FEATURES.map((feature) => {
            const isExpanded = activeId === feature.id;
            const theme = getCardTheme(feature.id);

            return (
              <div
                key={feature.id}
                onMouseEnter={() => setActiveId(feature.id)}
                onClick={() => setActiveId(feature.id)}
                className={`accordion-pillar-card ${isExpanded ? 'is-expanded' : 'is-collapsed'}`}
                style={{
                  borderColor: isExpanded ? theme.color : 'var(--glass-border)',
                  boxShadow: isExpanded ? `0 18px 45px rgba(0, 0, 0, 0.65), 0 0 35px ${theme.glow}` : 'var(--shadow-sm)',
                }}
              >
                {/* Background Ambient Image Overlay */}
                <div
                  style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    backgroundImage: `url(${theme.bgImage})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    opacity: isExpanded ? 0.18 : 0.06,
                    filter: 'grayscale(50%)',
                    transition: 'opacity 0.4s ease',
                    zIndex: 0,
                    pointerEvents: 'none',
                  }}
                />
                <div
                  style={{
                    position: 'absolute',
                    inset: 0,
                    background: theme.bgGradient,
                    zIndex: 1,
                    pointerEvents: 'none',
                  }}
                />

                {/* Card Content Wrapper */}
                <div className="pillar-inner-content">
                  {/* Top Bar: Icon & Pillar Number */}
                  <div className="pillar-top-bar">
                    <div
                      style={{
                        width: '46px',
                        height: '46px',
                        borderRadius: '14px',
                        backgroundColor: 'rgba(15, 17, 21, 0.85)',
                        border: `1.5px solid ${isExpanded ? theme.color : 'rgba(255, 255, 255, 0.12)'}`,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        boxShadow: isExpanded ? `0 4px 18px ${theme.glow}` : 'none',
                        transition: 'all 0.35s ease',
                        flexShrink: 0,
                      }}
                    >
                      {getIcon(feature.icon, theme.color)}
                    </div>

                    <div
                      style={{
                        fontFamily: 'Outfit, sans-serif',
                        fontSize: '1.35rem',
                        fontWeight: 900,
                        color: isExpanded ? theme.color : 'var(--text-muted)',
                        letterSpacing: '-0.02em',
                        transition: 'color 0.3s ease',
                      }}
                    >
                      {theme.number}
                    </div>
                  </div>

                  {/* Collapsed State Title: Shows on narrow cards */}
                  <div className="collapsed-title-wrapper">
                    <div
                      style={{
                        fontFamily: 'Outfit, sans-serif',
                        fontSize: '1.2rem',
                        fontWeight: 800,
                        color: '#FFFFFF',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '6px',
                        lineHeight: 1.2,
                      }}
                    >
                      <span>{feature.title.split(' ')[0]} {feature.title.split(' ')[1]}</span>
                      <ChevronRight size={16} color={theme.color} />
                    </div>
                    <div style={{ fontSize: '0.74rem', textTransform: 'uppercase', color: 'var(--text-muted)', fontWeight: 700, marginTop: '4px' }}>
                      {feature.tag}
                    </div>
                  </div>

                  {/* Expanded Full Details: Smooth fade-in without any max-height reflow */}
                  <div className="expanded-details-wrapper">
                    <div style={{ marginBottom: '10px' }}>
                      <span
                        className="badge-pill"
                        style={{
                          backgroundColor: 'rgba(255, 255, 255, 0.08)',
                          borderColor: theme.color,
                          color: theme.color,
                          fontSize: '0.76rem',
                        }}
                      >
                        {feature.tag}
                      </span>
                    </div>

                    <h3
                      style={{
                        fontSize: 'clamp(1.4rem, 2vw, 1.75rem)',
                        fontWeight: 800,
                        color: '#FFFFFF',
                        lineHeight: 1.2,
                        marginBottom: '12px',
                      }}
                    >
                      {feature.title}
                    </h3>

                    <p
                      style={{
                        fontSize: '0.94rem',
                        color: 'var(--text-secondary)',
                        lineHeight: 1.6,
                        marginBottom: '20px',
                        maxWidth: '540px',
                      }}
                    >
                      {feature.description}
                    </p>

                    <ul
                      style={{
                        listStyle: 'none',
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '8px',
                        marginBottom: '22px',
                      }}
                    >
                      {feature.bullets.map((bullet, bIdx) => (
                        <li
                          key={bIdx}
                          style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '10px',
                            fontSize: '0.88rem',
                            color: '#FFFFFF',
                          }}
                        >
                          <div
                            style={{
                              width: '18px',
                              height: '18px',
                              borderRadius: '50%',
                              backgroundColor: 'rgba(16, 185, 129, 0.2)',
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                              flexShrink: 0,
                            }}
                          >
                            <Check size={12} color="#10B981" strokeWidth={3} />
                          </div>
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>

                    <Link
                      href={`/features#${feature.id}`}
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '8px',
                        fontSize: '0.9rem',
                        fontWeight: 700,
                        color: theme.color,
                        padding: '6px 0',
                      }}
                    >
                      <span>Explore Technical Architecture</span>
                      <ArrowRight size={16} />
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <style jsx>{`
        /* Desktop: Constant 520px height eliminates all layout shifts and screen shaking */
        .accordion-deck-container {
          display: flex;
          gap: 16px;
          height: 520px;
          width: 100%;
          align-items: stretch;
          contain: layout;
        }

        .accordion-pillar-card {
          position: relative;
          border-radius: var(--radius-card);
          overflow: hidden;
          background-color: #161922;
          border: 1.5px solid var(--glass-border);
          cursor: pointer;
          padding: 30px 26px;
          height: 100%;
          box-sizing: border-box;
          display: flex;
          flex-direction: column;
          transition: flex 0.48s cubic-bezier(0.22, 1, 0.36, 1),
                      border-color 0.3s ease,
                      box-shadow 0.3s ease;
          will-change: flex;
        }

        .pillar-inner-content {
          position: relative;
          z-index: 2;
          height: 100%;
          display: flex;
          flex-direction: column;
          justifyContent: space-between;
        }

        .pillar-top-bar {
          display: flex;
          align-items: center;
          justifyContent: space-between;
          margin-bottom: 20px;
        }

        @media (min-width: 869px) {
          .accordion-pillar-card.is-collapsed {
            flex: 1 1 0%;
          }

          .accordion-pillar-card.is-expanded {
            flex: 3.5 1 0%;
          }

          .accordion-pillar-card.is-collapsed .expanded-details-wrapper {
            opacity: 0;
            visibility: hidden;
            pointer-events: none;
            transform: translateY(6px);
            transition: opacity 0.2s ease, transform 0.2s ease, visibility 0.2s;
          }

          .accordion-pillar-card.is-expanded .expanded-details-wrapper {
            opacity: 1;
            visibility: visible;
            pointer-events: auto;
            transform: translateY(0);
            transition: opacity 0.35s ease 0.12s, transform 0.35s cubic-bezier(0.22, 1, 0.36, 1) 0.12s;
          }

          .accordion-pillar-card.is-collapsed .collapsed-title-wrapper {
            opacity: 1;
            visibility: visible;
            transition: opacity 0.25s ease;
          }

          .accordion-pillar-card.is-expanded .collapsed-title-wrapper {
            opacity: 0;
            visibility: hidden;
            pointer-events: none;
            position: absolute;
          }
        }

        /* Mobile Viewport: Clean stacked cards */
        @media (max-width: 868px) {
          .accordion-deck-container {
            flex-direction: column;
            height: auto;
            gap: 16px;
          }

          .accordion-pillar-card {
            flex: none !important;
            padding: 24px !important;
            height: auto !important;
          }

          .accordion-pillar-card.is-collapsed .expanded-details-wrapper {
            display: none;
          }

          .accordion-pillar-card.is-expanded .expanded-details-wrapper {
            display: block;
            margin-top: 14px;
          }

          .accordion-pillar-card.is-expanded .collapsed-title-wrapper {
            display: none;
          }
        }
      `}</style>
    </section>
  );
}
