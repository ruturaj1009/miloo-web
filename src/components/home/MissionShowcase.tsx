'use client';

import React, { useState } from 'react';
import { Sparkles, Flame, ShieldCheck, Video } from 'lucide-react';

interface LifestyleCard {
  id: string;
  tag: string;
  imageUrl: string;
  alt: string;
  prompt: string;
  defaultLeft: string;
  defaultTop: string;
  defaultRotate: number;
  defaultZIndex: number;
  width: string;
  height: string;
}

const CARDS: LifestyleCard[] = [
  {
    id: 'coffee',
    tag: 'Sunday Matchas',
    imageUrl: '/images/lifestyle_matcha_cafe.jpg',
    alt: 'Smiling woman enjoying iced matcha latte at sunlit cafe',
    prompt: 'Cold brew & quiet Sunday mornings ☕',
    defaultLeft: '0px',
    defaultTop: '0px',
    defaultRotate: -2,
    defaultZIndex: 3,
    width: '280px',
    height: '420px',
  },
  {
    id: 'vinyl',
    tag: 'Vinyl Records',
    imageUrl: '/images/lifestyle_vinyl_music.jpg',
    alt: 'Creative music lover browsing vinyl records in indie shop',
    prompt: 'Obsessed with obscure jazz cafés 🎶',
    defaultLeft: '140px',
    defaultTop: '20px',
    defaultRotate: 1,
    defaultZIndex: 2,
    width: '265px',
    height: '400px',
  },
  {
    id: 'travel',
    tag: 'Sunset Hikes',
    imageUrl: '/images/lifestyle_sunset_hike.jpg',
    alt: 'Adventurer laughing on scenic alpine ridge at sunset',
    prompt: 'Next stop: mountain trails & road trips 🏔️',
    defaultLeft: '275px',
    defaultTop: '38px',
    defaultRotate: 3,
    defaultZIndex: 1,
    width: '250px',
    height: '380px',
  },
];

export default function MissionShowcase() {
  const [hoveredCardId, setHoveredCardId] = useState<string | null>(null);

  return (
    <section
      className="section"
      style={{
        paddingTop: '80px',
        paddingBottom: '90px',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Background ambient lighting */}
      <div
        style={{
          position: 'absolute',
          top: '30%',
          right: '5%',
          width: '500px',
          height: '500px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(124, 58, 237, 0.12) 0%, transparent 70%)',
          filter: 'blur(60px)',
          pointerEvents: 'none',
        }}
      />

      <div className="container">
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            alignItems: 'center',
            gap: '64px',
          }}
        >
          {/* Left Column: Creative Miloo Philosophy & Value Props (No button) */}
          <div style={{ maxWidth: '560px' }}>
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
                marginBottom: '24px',
              }}
            >
              <Sparkles size={14} />
              <span>THE MILOO PHILOSOPHY</span>
            </div>

            <h2
              style={{
                fontFamily: 'Outfit, sans-serif',
                fontSize: 'clamp(2.4rem, 4.6vw, 3.6rem)',
                fontWeight: 800,
                lineHeight: 1.15,
                letterSpacing: '-0.03em',
                color: '#FFFFFF',
                marginBottom: '24px',
              }}
            >
              Less mindless swiping. <br />
              <span className="text-gradient-brand">More genuine chemistry.</span>
            </h2>

            <p
              style={{
                fontSize: '1.15rem',
                lineHeight: 1.65,
                color: 'var(--text-secondary)',
                marginBottom: '32px',
                fontWeight: 400,
              }}
            >
              Most dating apps trap you in superficial chat purgatory. Miloo is engineered around shared passions, tactile motion, and safe in-app video dates — so you feel the real spark before exchanging phone numbers.
            </p>

            {/* 3 Core Value Pillars */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '14px' }}>
                <div
                  style={{
                    width: '32px',
                    height: '32px',
                    borderRadius: '10px',
                    backgroundColor: 'rgba(255, 68, 88, 0.15)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                    marginTop: '2px',
                  }}
                >
                  <Flame size={16} color="#FF4458" />
                </div>
                <div>
                  <div style={{ fontSize: '0.98rem', fontWeight: 700, color: '#FFFFFF' }}>
                    Shared Lifestyle Prompts
                  </div>
                  <div style={{ fontSize: '0.86rem', color: 'var(--text-secondary)', lineHeight: 1.4 }}>
                    Connect over Sunday matcha, vintage vinyl, and spontaneous travel stories that showcase who you really are.
                  </div>
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '14px' }}>
                <div
                  style={{
                    width: '32px',
                    height: '32px',
                    borderRadius: '10px',
                    backgroundColor: 'rgba(0, 201, 255, 0.15)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                    marginTop: '2px',
                  }}
                >
                  <Video size={16} color="#00C9FF" />
                </div>
                <div>
                  <div style={{ fontSize: '0.98rem', fontWeight: 700, color: '#FFFFFF' }}>
                    Safe Face-to-Face Video Dates
                  </div>
                  <div style={{ fontSize: '0.86rem', color: 'var(--text-secondary)', lineHeight: 1.4 }}>
                    Confirm their voice, smile, and vibe in a low-pressure 10-minute video date before meeting in person.
                  </div>
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '14px' }}>
                <div
                  style={{
                    width: '32px',
                    height: '32px',
                    borderRadius: '10px',
                    backgroundColor: 'rgba(16, 185, 129, 0.15)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                    marginTop: '2px',
                  }}
                >
                  <ShieldCheck size={16} color="#10B981" />
                </div>
                <div>
                  <div style={{ fontSize: '0.98rem', fontWeight: 700, color: '#FFFFFF' }}>
                    100% 3D Selfie Verified
                  </div>
                  <div style={{ fontSize: '0.86rem', color: 'var(--text-secondary)', lineHeight: 1.4 }}>
                    Zero tolerance for bots or outdated photos. Every active profile is verified with biometric liveness.
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: 3 Layered Lifestyle Cards with Interactive Hover Focus & Blur */}
          <div
            style={{
              position: 'relative',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              minHeight: '480px',
              padding: '20px 0',
            }}
            onMouseLeave={() => setHoveredCardId(null)}
          >
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                position: 'relative',
                width: '100%',
                maxWidth: '540px',
                height: '460px',
              }}
            >
              {CARDS.map((card) => {
                const isHovered = hoveredCardId === card.id;
                const isOtherHovered = hoveredCardId !== null && !isHovered;

                return (
                  <div
                    key={card.id}
                    onMouseEnter={() => setHoveredCardId(card.id)}
                    style={{
                      position: 'absolute',
                      left: card.defaultLeft,
                      top: card.defaultTop,
                      width: card.width,
                      height: card.height,
                      borderRadius: '28px',
                      overflow: 'hidden',
                      backgroundColor: '#161922',
                      cursor: 'pointer',
                      zIndex: isHovered ? 10 : card.defaultZIndex,
                      transform: isHovered
                        ? 'translateY(-14px) scale(1.05)'
                        : isOtherHovered
                        ? `rotate(${card.defaultRotate}deg) scale(0.96)`
                        : `rotate(${card.defaultRotate}deg)`,
                      filter: isOtherHovered ? 'blur(6px) grayscale(30%) brightness(0.65)' : 'none',
                      opacity: isOtherHovered ? 0.4 : 1,
                      boxShadow: isHovered
                        ? '0 32px 75px rgba(0, 0, 0, 0.9), 0 0 35px rgba(255, 68, 88, 0.4), 0 0 0 2px rgba(255, 255, 255, 0.3)'
                        : '0 20px 50px rgba(0, 0, 0, 0.7), 0 0 0 1px rgba(255, 255, 255, 0.1)',
                      transition: 'all 0.35s cubic-bezier(0.2, 0.8, 0.2, 1)',
                    }}
                  >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={card.imageUrl}
                      alt={card.alt}
                      style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        transition: 'transform 0.4s ease',
                        transform: isHovered ? 'scale(1.04)' : 'scale(1)',
                      }}
                    />

                    {/* Dark Gradient Overlay */}
                    <div
                      style={{
                        position: 'absolute',
                        inset: 0,
                        background: 'linear-gradient(to top, rgba(15, 17, 21, 0.85) 0%, rgba(15, 17, 21, 0.2) 40%, transparent 60%)',
                        pointerEvents: 'none',
                      }}
                    />

                    {/* Vertical Yellow Pill Tag */}
                    <div
                      style={{
                        position: 'absolute',
                        top: '20px',
                        right: '12px',
                        backgroundColor: '#FACC15',
                        color: '#0F1115',
                        borderRadius: '24px',
                        padding: '14px 10px',
                        fontWeight: 800,
                        fontSize: '0.85rem',
                        letterSpacing: '0.02em',
                        boxShadow: isHovered
                          ? '0 8px 24px rgba(250, 204, 21, 0.6)'
                          : '0 6px 18px rgba(250, 204, 21, 0.35)',
                        writingMode: 'vertical-rl',
                        textOrientation: 'mixed',
                        transform: 'rotate(180deg)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        pointerEvents: 'none',
                        transition: 'box-shadow 0.3s ease',
                      }}
                    >
                      {card.tag}
                    </div>

                    {/* Prompt Pill at Bottom */}
                    <div
                      style={{
                        position: 'absolute',
                        bottom: '16px',
                        left: '14px',
                        right: '14px',
                        background: 'rgba(22, 25, 34, 0.92)',
                        backdropFilter: 'blur(12px)',
                        border: isHovered
                          ? '1px solid rgba(255, 68, 88, 0.4)'
                          : '1px solid rgba(255, 255, 255, 0.15)',
                        padding: '8px 12px',
                        borderRadius: '16px',
                        fontSize: '0.78rem',
                        color: '#FFFFFF',
                        fontWeight: 600,
                        boxShadow: '0 4px 16px rgba(0,0,0,0.4)',
                        transition: 'border-color 0.3s ease',
                      }}
                    >
                      {card.prompt}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
