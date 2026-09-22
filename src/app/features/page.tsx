import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { 
  Flame, 
  Video, 
  MessageCircle, 
  Sparkles, 
  ShieldCheck, 
  Sliders, 
  Image as ImageIcon, 
  Globe, 
  EyeOff,
  ArrowRight,
  Zap,
  Check
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Features — Miloo Dating App',
  description:
    'Explore the core features of Miloo: fluid swipe gestures, private video dates, instant messaging, verified safety, and lifestyle filters.',
};

export default function FeaturesPage() {
  const featuresList = [
    {
      id: 'fluid-deck',
      icon: Flame,
      color: '#FF4458',
      title: 'Fluid Card Discovery Deck',
      subtitle: 'Natural Gestures & Photo Story Exploration',
      description:
        'A card deck designed for maximum satisfaction. Swipe cards with natural tilt and fluid motion. Tapping the left or right side of a photo immediately cycles through a user’s lifestyle photos with segmented story progress bars, while prompts spark genuine conversations.',
      tags: ['Fluid Swipe', 'Photo Stories', 'Tactile Stamps', 'Prompt Cards'],
    },
    {
      id: 'video-dates',
      icon: Video,
      color: '#00C9FF',
      title: 'Face-to-Face Video Dates',
      subtitle: 'Check Chemistry Safely from Home',
      description:
        'Bridge the gap between chat and in-person dates safely. Miloo includes private, high-definition in-app video dates without sharing your personal phone number or email. Features selfie camera preview, camera flip, and instant one-tap privacy controls.',
      tags: ['HD Video Dates', 'Selfie Preview', 'Private Calling', 'One-Tap Mute'],
    },
    {
      id: 'chat',
      icon: MessageCircle,
      color: '#10B981',
      title: 'Instant Messaging & Chemistry',
      subtitle: 'Real-Time Typing Bubbles & Instant Delivery',
      description:
        'Never stare at a frozen screen wondering if a message sent. Miloo provides instant message delivery with zero lag. Enjoy live typing bubbles that show when your match is active, read receipts, and fun icebreakers.',
      tags: ['Instant Delivery', 'Live Typing', 'Active Indicators', 'Read Receipts'],
    },
    {
      id: 'match-modal',
      icon: Sparkles,
      color: '#A855F7',
      title: 'Match Celebration Fireworks',
      subtitle: 'Dual-Avatar Mutual Spark Celebration',
      description:
        'When two people mutually like each other, Miloo celebrates the moment with animated fireworks. Overlapping dual avatars showcase both profiles side-by-side with instant icebreaker starters so you can say hello right away.',
      tags: ['Celebration Fireworks', 'Dual Avatars', 'Direct Icebreaker', 'Quick Send'],
    },
    {
      id: 'profile-builder',
      icon: ImageIcon,
      color: '#FF5864',
      title: '6-Slot Profile Showcase',
      subtitle: 'Drag-to-Reorder Photos & Personality Prompts',
      description:
        'Craft your best self effortlessly. A 6-slot photo showcase with easy drag-and-drop reordering, smart photo cropping, and interactive personality prompts that give your matches great reasons to say hello.',
      tags: ['Easy Photo Reorder', 'Smart Cropping', 'Interest Badges', 'Prompt Boxes'],
    },
    {
      id: 'smart-preferences',
      icon: Sliders,
      color: '#F59E0B',
      title: 'Smart Discovery Preferences',
      subtitle: 'Custom Distance Radius & Lifestyle Filters',
      description:
        'Take full control over who you meet. Customize your discovery radius, age brackets, verified-only profile filters, and shared lifestyle values so you only meet singles aligned with what you are looking for.',
      tags: ['Distance Radius', 'Age Bracket Filters', 'Lifestyle Values', 'Verified-Only'],
    },
    {
      id: 'incognito-mode',
      icon: EyeOff,
      color: '#6366F1',
      title: 'Miloo Incognito Mode',
      subtitle: 'Browse Privately. Only Visible to Profiles You Like',
      description:
        'Total discretion when you need it. Browse the deck in stealth mode without appearing in nearby search feeds. Only profiles that you explicitly like will ever know you exist.',
      tags: ['Ghost Browsing', 'Selective Visibility', 'VIP Security', 'Discreet Dating'],
    },
    {
      id: 'travel-passport',
      icon: Globe,
      color: '#38BDF8',
      title: 'Global Travel Passport',
      subtitle: 'Connect in Tokyo, Paris, or New York Before You Fly',
      description:
        'Traveling soon? Change your virtual location to any city in the world to connect with locals and plan dates before your flight lands.',
      tags: ['Global Cities', 'Pre-Trip Matches', 'Local Recommendations', 'Passport Pin'],
    },
  ];

  return (
    <div style={{ paddingTop: 'calc(var(--nav-height) + 40px)', paddingBottom: '100px' }}>
      <div className="container">
        {/* Header */}
        <div className="section-header" style={{ maxWidth: '820px' }}>
          <div className="section-tag">
            <Zap size={16} />
            <span>Product Highlights</span>
          </div>
          <h1 className="section-title">
            Designed for <br />
            <span className="text-gradient-brand">Real Chemistry</span>
          </h1>
          <p className="section-subtitle">
            Explore the innovative features that make Miloo the most engaging, safe, and modern dating app.
          </p>
        </div>

        {/* Feature Cards Grid */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '40px', marginBottom: '80px' }}>
          {featuresList.map((item, index) => {
            const Icon = item.icon;
            const isEven = index % 2 === 0;

            return (
              <div
                key={item.id}
                id={item.id}
                className="glass-card"
                style={{
                  padding: '40px',
                  borderRadius: 'var(--radius-card)',
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                  gap: '36px',
                  alignItems: 'center',
                }}
              >
                <div>
                  <div
                    style={{
                      width: '56px',
                      height: '56px',
                      borderRadius: '18px',
                      backgroundColor: 'rgba(255, 255, 255, 0.06)',
                      border: '1px solid var(--glass-border)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      marginBottom: '20px',
                    }}
                  >
                    <Icon size={28} color={item.color} />
                  </div>

                  <div style={{ fontSize: '0.82rem', fontWeight: 700, color: item.color, textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '4px' }}>
                    {item.subtitle}
                  </div>
                  <h2 style={{ fontSize: '1.75rem', fontWeight: 800, color: '#FFFFFF', marginBottom: '16px' }}>
                    {item.title}
                  </h2>
                  <p style={{ color: 'var(--text-secondary)', lineHeight: 1.7, fontSize: '0.98rem', marginBottom: '24px' }}>
                    {item.description}
                  </p>

                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                    {item.tags.map((tag, tIdx) => (
                      <span
                        key={tIdx}
                        style={{
                          fontSize: '0.78rem',
                          fontWeight: 600,
                          padding: '6px 14px',
                          borderRadius: 'var(--radius-pill)',
                          backgroundColor: 'rgba(255, 255, 255, 0.06)',
                          border: '1px solid var(--glass-border-subtle)',
                          color: '#FFFFFF',
                        }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div
                  style={{
                    backgroundColor: 'rgba(15, 17, 21, 0.8)',
                    borderRadius: '20px',
                    padding: '24px',
                    border: '1px solid var(--glass-border-subtle)',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '12px',
                  }}
                >
                  <div style={{ fontSize: '0.8rem', textTransform: 'uppercase', color: 'var(--text-muted)', fontWeight: 700 }}>
                    Architecture Highlights
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#10B981', fontSize: '0.88rem' }}>
                    <Check size={16} /> 60fps Native UI Thread Gesture Handler
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#10B981', fontSize: '0.88rem' }}>
                    <Check size={16} /> Spring dampening physics (15 damping, 120 stiffness)
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#10B981', fontSize: '0.88rem' }}>
                    <Check size={16} /> WCAG AA contrast gradients behind bios
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#10B981', fontSize: '0.88rem' }}>
                    <Check size={16} /> Low-memory photo caching via expo-image
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div style={{ textAlign: 'center' }}>
          <Link href="/#download" className="btn-primary" style={{ padding: '16px 36px', fontSize: '1.05rem' }}>
            <span>Experience All Features on Miloo App</span>
            <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </div>
  );
}
