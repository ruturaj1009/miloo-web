'use client';

import React from 'react';
import Link from 'next/link';
import { Heart, Sparkles, Quote, MapPin, Calendar, ArrowRight, ShieldCheck } from 'lucide-react';

interface Story {
  id: string;
  names: string;
  milestone: string;
  location: string;
  year: string;
  quote: string;
  fullStory: string;
  photoUrl: string;
  tags: string[];
}

const STORIES: Story[] = [
  {
    id: 'elena-mateo',
    names: 'Elena & Mateo',
    milestone: 'Married in 2025',
    location: 'Austin, TX',
    year: '2025',
    quote: 'We were exhausted from dry one-word replies. On Miloo, our 10-minute video date turned into a four-hour conversation about vinyl and road trips.',
    fullStory: 'After matching on Miloo and laughing over Mateo’s prompt about 90s vinyl, Elena initiated a quick video date. What was meant to be 10 minutes turned into four hours of genuine laughter. Two years later, they celebrated their marriage surrounded by friends.',
    photoUrl: '/images/miloo_couple_spotlight.jpg',
    tags: ['Vinyl Records', 'Specialty Coffee', 'Video Dates'],
  },
  {
    id: 'maya-julian',
    names: 'Maya & Julian',
    milestone: 'Together 1.5 Years',
    location: 'Brooklyn, New York',
    year: '2024',
    quote: 'Miloo’s prompt boxes were what made Julian stand out. We had a 2-hour video date through the app before our first coffee in Williamsburg!',
    fullStory: 'Julian replied to Maya’s prompt on analog record shops. Their mutual love for mid-century jazz and vintage 35mm cameras turned a casual match into an inseparable partnership.',
    photoUrl: 'https://images.unsplash.com/photo-1522529599102-193c0d76b5b6?w=800&q=80',
    tags: ['Vinyl Records', 'Photography', 'Art'],
  },
  {
    id: 'kai-sora',
    names: 'Kai & Sora',
    milestone: 'Engaged in 2025',
    location: 'Shibuya, Tokyo',
    year: '2025',
    quote: 'The selfie verification gave me peace of mind. When we matched and started voice calling, we knew right away that this was special.',
    fullStory: 'Navigating dating in a fast-paced metropolis felt daunting until Kai and Sora matched over modern architecture and kissaten culture. They celebrated their engagement overlooking Mt. Fuji.',
    photoUrl: 'https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?w=800&q=80',
    tags: ['Architecture', 'Matcha', 'Jazz'],
  },
  {
    id: 'elena-liam',
    names: 'Elena & Liam',
    milestone: 'Together 2 Years',
    location: 'Berlin, Germany',
    year: '2024',
    quote: 'We both loved ambient soundscapes and cycling along the Spree. Having a zero-pressure video call made our first real date feel like meeting an old friend.',
    fullStory: 'Elena was cautious with online dating until Miloo’s verified badges and private calling features gave her confidence. Today, they share a sunlit apartment in Kreuzberg.',
    photoUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=800&q=80',
    tags: ['Biking', 'Electronic Music', 'Design'],
  },
  {
    id: 'priya-dev',
    names: 'Priya & Dev',
    milestone: 'Married in 2024',
    location: 'London, UK',
    year: '2024',
    quote: 'Neither of us believed in dating apps anymore until Miloo. The tactile swiping and genuine lifestyle tags made all the difference.',
    fullStory: 'Priya and Dev matched over artisanal sourdough baking and indie bookstore recommendations. After a month of evening video calls, their first date in Covent Garden confirmed everything.',
    photoUrl: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=800&q=80',
    tags: ['Foodie', 'Literature', 'Travel'],
  },
];

export default function StoriesPage() {
  return (
    <div style={{ paddingTop: 'calc(var(--nav-height) + 40px)', paddingBottom: '120px' }}>
      <div className="container">
        {/* Page Header */}
        <div className="section-header" style={{ maxWidth: '820px', marginBottom: '60px' }}>
          <div className="section-tag">
            <Heart size={15} fill="#FF5864" color="#FF5864" />
            <span>Miloo Love Stories</span>
          </div>
          <h1 className="section-title">
            Real People. <span className="text-gradient-brand">Real Lifelong Chemistry.</span>
          </h1>
          <p className="section-subtitle">
            From spontaneous video dates to wedding vows — explore how authentic couples discovered their match on Miloo.
          </p>
        </div>

        {/* Featured Spotlight: Leslie & Thomas */}
        <div
          className="glass-card"
          style={{
            padding: '48px',
            borderRadius: '32px',
            marginBottom: '70px',
            border: '1px solid rgba(255, 68, 88, 0.25)',
            background: 'linear-gradient(135deg, rgba(28, 32, 45, 0.9) 0%, rgba(20, 22, 32, 0.95) 100%)',
          }}
        >
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: '48px',
              alignItems: 'center',
            }}
          >
            <div>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', color: '#FF5864', fontWeight: 700, fontSize: '0.85rem', marginBottom: '16px' }}>
                <Sparkles size={16} />
                <span>FEATURED SPOTLIGHT STORY</span>
              </div>
              <div style={{ fontSize: '3rem', fontWeight: 900, lineHeight: 0.8, color: '#FFFFFF', marginBottom: '12px' }}>
                &ldquo;
              </div>
              <h2
                style={{
                  fontFamily: 'Outfit, sans-serif',
                  fontSize: 'clamp(1.8rem, 3.5vw, 2.5rem)',
                  fontWeight: 800,
                  lineHeight: 1.2,
                  color: '#FFFFFF',
                  marginBottom: '20px',
                }}
              >
                {STORIES[0].quote}
              </h2>
              <p style={{ color: 'var(--text-secondary)', fontSize: '1.05rem', lineHeight: 1.7, marginBottom: '28px' }}>
                {STORIES[0].fullStory}
              </p>
              <div style={{ display: 'flex', alignItems: 'center', gap: '16px', borderTop: '1px solid var(--glass-border-subtle)', paddingTop: '20px' }}>
                <div>
                  <div style={{ fontSize: '1.2rem', fontWeight: 800, color: '#FFFFFF' }}>{STORIES[0].names}</div>
                  <div style={{ fontSize: '0.88rem', color: 'var(--text-secondary)', display: 'flex', alignItems: 'center', gap: '8px', marginTop: '2px' }}>
                    <MapPin size={14} color="#00C9FF" />
                    <span>{STORIES[0].location}</span>
                    <span>•</span>
                    <span style={{ color: '#10B981', fontWeight: 600 }}>{STORIES[0].milestone}</span>
                  </div>
                </div>
              </div>
            </div>

            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <div
                style={{
                  width: '100%',
                  maxWidth: '460px',
                  height: '420px',
                  borderRadius: '24px',
                  overflow: 'hidden',
                  boxShadow: '0 20px 50px rgba(0, 0, 0, 0.6)',
                }}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={STORIES[0].photoUrl}
                  alt={STORIES[0].names}
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Stories Grid */}
        <div style={{ marginBottom: '80px' }}>
          <h2 style={{ fontSize: '1.8rem', fontWeight: 800, color: '#FFFFFF', marginBottom: '32px' }}>
            More Couple Stories
          </h2>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: '32px',
            }}
          >
            {STORIES.slice(1).map((story) => (
              <div
                key={story.id}
                className="glass-card"
                style={{
                  borderRadius: '24px',
                  overflow: 'hidden',
                  display: 'flex',
                  flexDirection: 'column',
                  transition: 'transform 0.3s ease, border-color 0.3s ease',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-6px)';
                  e.currentTarget.style.borderColor = 'rgba(255, 68, 88, 0.4)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.borderColor = 'var(--glass-border)';
                }}
              >
                {/* Photo Header */}
                <div style={{ height: '240px', width: '100%', position: 'relative' }}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={story.photoUrl}
                    alt={story.names}
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                  <div
                    style={{
                      position: 'absolute',
                      bottom: '14px',
                      left: '14px',
                      background: 'rgba(15, 17, 21, 0.85)',
                      backdropFilter: 'blur(10px)',
                      padding: '4px 12px',
                      borderRadius: 'var(--radius-pill)',
                      fontSize: '0.8rem',
                      color: '#10B981',
                      fontWeight: 700,
                    }}
                  >
                    {story.milestone}
                  </div>
                </div>

                {/* Body */}
                <div style={{ padding: '28px 24px', flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                  <div>
                    <Quote size={20} color="#FF5864" style={{ marginBottom: '10px', opacity: 0.8 }} />
                    <p style={{ fontSize: '0.98rem', color: '#FFFFFF', fontStyle: 'italic', lineHeight: 1.6, marginBottom: '16px' }}>
                      &ldquo;{story.quote}&rdquo;
                    </p>
                    <p style={{ fontSize: '0.88rem', color: 'var(--text-secondary)', lineHeight: 1.6, marginBottom: '20px' }}>
                      {story.fullStory}
                    </p>
                  </div>

                  <div>
                    {/* Tags */}
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '16px' }}>
                      {story.tags.map((t) => (
                        <span
                          key={t}
                          style={{
                            fontSize: '0.72rem',
                            fontWeight: 600,
                            padding: '3px 8px',
                            borderRadius: '10px',
                            background: 'rgba(255, 255, 255, 0.06)',
                            color: 'var(--text-secondary)',
                          }}
                        >
                          #{t}
                        </span>
                      ))}
                    </div>

                    <div style={{ borderTop: '1px solid var(--glass-border-subtle)', paddingTop: '14px' }}>
                      <div style={{ fontSize: '1.05rem', fontWeight: 800, color: '#FFFFFF' }}>{story.names}</div>
                      <div style={{ fontSize: '0.82rem', color: 'var(--text-muted)' }}>{story.location}</div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Callout: Submit Your Story */}
        <div
          className="glass-panel"
          style={{
            padding: '48px 36px',
            borderRadius: '28px',
            textAlign: 'center',
            maxWidth: '740px',
            margin: '0 auto',
            border: '1px solid var(--glass-border-strong)',
            background: 'radial-gradient(ellipse at center, rgba(255, 68, 88, 0.12) 0%, rgba(15, 17, 21, 0.9) 70%)',
          }}
        >
          <div
            style={{
              width: '54px',
              height: '54px',
              borderRadius: '50%',
              backgroundColor: 'rgba(255, 68, 88, 0.15)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              margin: '0 auto 16px auto',
              color: '#FF5864',
            }}
          >
            <Heart size={26} fill="#FF5864" />
          </div>
          <h2 style={{ fontSize: '1.8rem', fontWeight: 800, color: '#FFFFFF', marginBottom: '12px' }}>
            Did you meet your person on Miloo?
          </h2>
          <p style={{ color: 'var(--text-secondary)', fontSize: '1rem', lineHeight: 1.6, marginBottom: '28px', maxWidth: '520px', margin: '0 auto 28px auto' }}>
            We would love to celebrate your story and send you an exclusive Miloo wedding or anniversary gift package.
          </p>
          <Link
            href="/contact"
            className="btn-primary"
            style={{ display: 'inline-flex', padding: '14px 28px', borderRadius: '16px' }}
          >
            <span>Share Your Miloo Story</span>
            <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </div>
  );
}
