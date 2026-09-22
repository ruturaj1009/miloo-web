'use client';

import React, { useState, useEffect } from 'react';
import { 
  Flame, 
  Video, 
  MessageCircle, 
  Heart, 
  Sparkles, 
  Mic, 
  PhoneOff, 
  Camera, 
  Send,
  MapPin,
  X,
  Star,
  Check,
  RotateCcw,
  Zap,
  Plus,
  Smile,
  Phone,
  Play,
  Pause
} from 'lucide-react';
import VerifiedBadge from '@/components/common/VerifiedBadge';

type FeatureTab = 'discovery' | 'match' | 'chat' | 'video';

const TAB_ORDER: FeatureTab[] = ['discovery', 'match', 'chat', 'video'];
const AUTO_LOOP_DURATION_MS = 6000;

interface FeatureItem {
  id: FeatureTab;
  tabLabel: string;
  tag: string;
  title: string;
  subtitle: string;
  icon: React.ElementType;
  color: string;
  perks: string[];
}

export default function PhoneMockupViewer() {
  const [activeTab, setActiveTab] = useState<FeatureTab>('discovery');
  const [callTimer, setCallTimer] = useState(42);
  const [replayKey, setReplayKey] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Live video call timer simulation
  useEffect(() => {
    const timer = setInterval(() => {
      setCallTimer((prev) => (prev >= 59 ? 0 : prev + 1));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  // Auto-advance loop: Match Deck -> Mutual Sparks -> Instant Chat -> Video Dates -> Match Deck
  useEffect(() => {
    if (isPaused) return;

    const timer = setTimeout(() => {
      setActiveTab((prev) => {
        const currentIndex = TAB_ORDER.indexOf(prev);
        const nextIndex = (currentIndex + 1) % TAB_ORDER.length;
        return TAB_ORDER[nextIndex];
      });
      setReplayKey((k) => k + 1);
    }, AUTO_LOOP_DURATION_MS);

    return () => clearTimeout(timer);
  }, [activeTab, isPaused, replayKey]);

  const features: FeatureItem[] = [
    {
      id: 'discovery',
      tabLabel: 'Match Deck',
      tag: 'Natural Gestures',
      title: 'Intuitive Match Deck',
      subtitle: 'Swipe with natural motion, tap to browse photo stories, and connect over shared lifestyle passions.',
      icon: Flame,
      color: '#FF4458',
      perks: [
        'Tap photo quadrants to explore story moments',
        'Swipe right to like, swipe left to pass',
        'Prompts that reveal genuine personality',
      ],
    },
    {
      id: 'match',
      tabLabel: 'Mutual Sparks',
      tag: 'Mutual Chemistry',
      title: 'Mutual Spark Fireworks',
      subtitle: 'When you both like each other, celebration fireworks kick off the moment so you can say hello immediately.',
      icon: Heart,
      color: '#A855F7',
      perks: [
        'Instant notification when someone likes you back',
        'Dual avatar celebration screen with heartbeat pulse',
        'One-tap icebreaker questions to break the ice',
      ],
    },
    {
      id: 'chat',
      tabLabel: 'Instant Chat',
      tag: 'Instant Messaging',
      title: 'Live Chat & Icebreakers',
      subtitle: 'Keep conversations lively with instant message delivery, live typing bubbles, and playful openers.',
      icon: MessageCircle,
      color: '#10B981',
      perks: [
        'Live typing bubbles show when your match is active',
        'Zero-lag message delivery with read receipts',
        'Ready-to-use conversation starters & reactions',
      ],
    },
    {
      id: 'video',
      tabLabel: 'Video Dates',
      tag: 'Face-to-Face Chemistry',
      title: 'Virtual Video Dates',
      subtitle: 'Check real-world chemistry safely from your home before exchanging phone numbers or meeting in person.',
      icon: Video,
      color: '#00C9FF',
      perks: [
        '100% private without sharing your phone number',
        'Selfie camera preview to check your look',
        'One-tap mute, camera flip & end-call safety',
      ],
    },
  ];

  const handleTabChange = (id: FeatureTab) => {
    setActiveTab(id);
    setReplayKey((prev) => prev + 1);
  };

  const handleReplay = () => {
    setReplayKey((prev) => prev + 1);
  };

  const currentFeature = features.find((f) => f.id === activeTab) || features[0];

  return (
    <section className="section" id="screens">
      <div className="container">
        {/* Section Header */}
        <div className="section-header" style={{ maxWidth: '780px', marginBottom: '32px' }}>
          <div className="section-tag">
            <Sparkles size={14} />
            <span>Interactive App Tour</span>
          </div>
          <h2 className="section-title">
            See How Miloo <span className="text-gradient-brand">Brings You Together</span>
          </h2>
          <p className="section-subtitle">
            Click any button below to watch how Miloo makes finding sparks effortless, safe, and fun.
          </p>
        </div>

        {/* Top Button Pills Bar (Immediate Quick Access) */}
        <div className="top-pills-bar">
          {features.map((feature) => {
            const Icon = feature.icon;
            const isActive = activeTab === feature.id;

            return (
              <button
                key={feature.id}
                onClick={() => handleTabChange(feature.id)}
                className={`feature-pill-btn ${isActive ? 'is-active' : ''}`}
                style={{
                  borderColor: isActive ? feature.color : 'var(--glass-border)',
                  backgroundColor: isActive ? `${feature.color}22` : 'rgba(22, 25, 34, 0.65)',
                  color: isActive ? '#FFFFFF' : 'var(--text-secondary)',
                  boxShadow: isActive ? `0 4px 20px ${feature.color}44` : 'none',
                }}
              >
                <Icon size={17} color={isActive ? feature.color : 'var(--text-muted)'} strokeWidth={2.4} />
                <span style={{ fontWeight: isActive ? 700 : 500 }}>{feature.tabLabel}</span>
                {isActive && (
                  <span
                    key={`prog-${feature.id}-${replayKey}-${isPaused}`}
                    className={`pill-auto-bar ${isPaused ? 'is-paused' : ''}`}
                    style={{ backgroundColor: feature.color }}
                  />
                )}
              </button>
            );
          })}
        </div>

        {/* 2-Column Split: Features on Left, Mobile Preview on Right */}
        <div className="app-tour-grid">
          {/* Left Column: Interactive Feature Selection Cards */}
          <div className="features-list-column">
            {features.map((feature, idx) => {
              const Icon = feature.icon;
              const isActive = activeTab === feature.id;

              return (
                <div
                  key={feature.id}
                  onClick={() => handleTabChange(feature.id)}
                  className={`feature-select-card ${isActive ? 'is-active' : ''}`}
                  style={{
                    borderColor: isActive ? feature.color : 'var(--glass-border)',
                    backgroundColor: isActive ? 'rgba(27, 32, 45, 0.95)' : 'rgba(22, 25, 34, 0.45)',
                    boxShadow: isActive ? `0 16px 40px rgba(0, 0, 0, 0.6), 0 0 28px ${feature.color}33` : 'none',
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'flex-start', gap: '16px' }}>
                    {/* Feature Icon */}
                    <div
                      style={{
                        width: '46px',
                        height: '46px',
                        borderRadius: '14px',
                        backgroundColor: isActive ? feature.color : 'rgba(255, 255, 255, 0.06)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        boxShadow: isActive ? `0 6px 20px ${feature.color}66` : 'none',
                        transition: 'all 0.3s ease',
                        flexShrink: 0,
                      }}
                    >
                      <Icon size={22} color={isActive ? '#FFFFFF' : feature.color} strokeWidth={2.4} />
                    </div>

                    {/* Text Details */}
                    <div style={{ flex: 1 }}>
                      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '4px' }}>
                        <span style={{ fontSize: '0.74rem', textTransform: 'uppercase', letterSpacing: '0.06em', color: feature.color, fontWeight: 700 }}>
                          0{idx + 1} • {feature.tag}
                        </span>
                        {isActive && (
                          <div className="live-demo-badge" style={{ backgroundColor: `${feature.color}22`, color: feature.color, borderColor: `${feature.color}44` }}>
                            <span className="live-pulse-dot" style={{ backgroundColor: feature.color }} />
                            <span>Active View</span>
                          </div>
                        )}
                      </div>

                      <h3 style={{ fontSize: '1.24rem', fontWeight: 800, color: '#FFFFFF', marginBottom: '6px' }}>
                        {feature.title}
                      </h3>

                      <p style={{ fontSize: '0.88rem', color: 'var(--text-secondary)', lineHeight: 1.5, marginBottom: isActive ? '12px' : '0' }}>
                        {feature.subtitle}
                      </p>

                      {/* Expanded Perks when active */}
                      {isActive && (
                        <div style={{ marginTop: '10px', display: 'flex', flexDirection: 'column', gap: '8px', borderTop: '1px solid var(--glass-border-subtle)', paddingTop: '10px' }}>
                          {feature.perks.map((perk, pIdx) => (
                            <div key={pIdx} style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.82rem', color: '#E5E7EB' }}>
                              <Check size={14} color={feature.color} strokeWidth={3} />
                              <span>{perk}</span>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right Column: Phone Mockup with Anchored Buttons & Fluid GIF-like Preview */}
          <div className="phone-preview-column">
            {/* Ambient Back Glow */}
            <div
              className="phone-ambient-glow"
              style={{
                background: `radial-gradient(circle, ${currentFeature.color}35 0%, rgba(124, 58, 237, 0.12) 50%, transparent 70%)`,
              }}
            />

            {/* iPhone 16 Pro Frame */}
            <div 
              className="iphone-frame" 
              key={`${activeTab}-${replayKey}`}
              onMouseEnter={() => setIsPaused(true)}
              onMouseLeave={() => setIsPaused(false)}
            >
              {/* Separate Left Pinned Time (NEVER COMBINES WITH 5G!) */}
              <div className="phone-status-left">
                <span>9:41</span>
              </div>

              {/* Dynamic Island Centered */}
              <div className="dynamic-island">
                <div className="island-camera-dot" />
              </div>

              {/* Separate Right Pinned Icons (NEVER TOUCHES TIME!) */}
              <div className="phone-status-right">
                <span className="status-5g">5G</span>
                <div className="status-battery">
                  <div className="battery-level" />
                </div>
              </div>

              {/* ---------------- 1. DISCOVERY PREVIEW ---------------- */}
              {activeTab === 'discovery' && (
                <div className="screen-content discovery-screen">
                  {/* Underneath Card (Chloe) */}
                  <div className="deck-card card-underneath">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src="https://images.unsplash.com/photo-1517841905240-472988babdf9?w=450&auto=format&fit=crop&q=75"
                      alt="Chloe Profile"
                      loading="lazy"
                      className="card-full-img"
                    />
                    <div className="card-gradient-overlay" />
                    <div className="card-info-box">
                      <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                        <span style={{ fontSize: '1.35rem', fontWeight: 800, color: '#FFFFFF' }}>Chloe, 26</span>
                        <VerifiedBadge size={18} />
                      </div>
                      <div style={{ fontSize: '0.78rem', color: '#CBD5E1' }}>Wildlife Photographer • 4 km away</div>
                    </div>
                  </div>

                  {/* Swiping Front Card (Yuki) */}
                  <div className="deck-card card-front-animating">
                    {/* Photo 1: Portrait */}
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=450&auto=format&fit=crop&q=75"
                      alt="Yuki Profile"
                      loading="lazy"
                      className="card-full-img yuki-img-1"
                    />

                    {/* Story progress bar at top */}
                    <div className="card-story-progress">
                      <div className="story-step is-filled" />
                      <div className="story-step story-step-2" />
                      <div className="story-step" />
                    </div>

                    {/* Animated LIKE Stamp */}
                    <div className="stamp-like">LIKE</div>

                    <div className="card-gradient-overlay" />

                    {/* Card Profile Info */}
                    <div className="card-info-box">
                      <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '3px' }}>
                        <span style={{ fontSize: '1.45rem', fontWeight: 800, color: '#FFFFFF' }}>Yuki, 24</span>
                        <VerifiedBadge size={19} />
                      </div>
                      <div style={{ fontSize: '0.8rem', color: '#D1D5DB', marginBottom: '8px' }}>
                        <MapPin size={12} style={{ display: 'inline', marginRight: '3px' }} color="#FF5864" />
                        Shibuya, Tokyo • Art Director
                      </div>
                      <div style={{ display: 'flex', gap: '5px', flexWrap: 'wrap' }}>
                        <span className="badge-pill" style={{ fontSize: '0.68rem', padding: '2px 8px' }}>Vinyl Records</span>
                        <span className="badge-pill" style={{ fontSize: '0.68rem', padding: '2px 8px' }}>Film Photo</span>
                        <span className="badge-pill" style={{ fontSize: '0.68rem', padding: '2px 8px' }}>Matcha</span>
                      </div>
                    </div>
                  </div>

                  {/* FIXED BOTTOM ACTION BAR - 5 PERFECT CIRCULAR BUTTONS */}
                  <div className="fixed-bottom-bar discovery-buttons-dock">
                    <button className="dock-action-rewind" title="Rewind">
                      <RotateCcw size={18} />
                    </button>
                    <button className="dock-action-pass" title="Pass">
                      <X size={24} strokeWidth={2.8} />
                    </button>
                    <button className="dock-action-superlike" title="Super Like">
                      <Star size={18} fill="#00C9FF" />
                    </button>
                    <button className="dock-action-like pulsing-like-button" title="Like">
                      <Heart size={24} fill="#10B981" />
                    </button>
                    <button className="dock-action-boost" title="Boost">
                      <Zap size={18} fill="#A855F7" />
                    </button>
                  </div>
                </div>
              )}

              {/* ---------------- 2. VIDEO DATES PREVIEW ---------------- */}
              {activeTab === 'video' && (
                <div className="screen-content video-screen">
                  {/* Remote Caller Video */}
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=600&q=80"
                    alt="Elena Video Call"
                    className="video-feed-image"
                  />

                  {/* Gradient vignettes */}
                  <div className="video-vignette-top" />
                  <div className="video-vignette-bottom" />

                  {/* Top Call Info Header */}
                  <div className="video-call-header">
                    <div>
                      <div style={{ fontSize: '0.94rem', fontWeight: 800, color: '#FFFFFF', display: 'flex', alignItems: 'center', gap: '5px' }}>
                        <span>Elena, 25</span>
                        <VerifiedBadge size={15} />
                      </div>
                      <div style={{ fontSize: '0.72rem', color: '#10B981', display: 'flex', alignItems: 'center', gap: '5px' }}>
                        <span className="live-call-dot" />
                        <span>08:{callTimer < 10 ? `0${callTimer}` : callTimer} • Private Call</span>
                      </div>
                    </div>
                    {/* Live Equalizer */}
                    <div className="audio-equalizer">
                      <span className="eq-bar eq-1" />
                      <span className="eq-bar eq-2" />
                      <span className="eq-bar eq-3" />
                      <span className="eq-bar eq-4" />
                    </div>
                  </div>

                  {/* Draggable Selfie Camera Box (Top Right) */}
                  <div className="selfie-camera-preview">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=300&q=80"
                      alt="Your selfie preview"
                      style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    />
                    <div className="selfie-label">You</div>
                  </div>

                  {/* Floating Heart Reactions */}
                  <div className="floating-reaction-spray f1">❤️</div>
                  <div className="floating-reaction-spray f2">💖</div>
                  <div className="floating-reaction-spray f3">✨</div>
                  <div className="floating-reaction-spray f4">🔥</div>

                  {/* Subtitle Dialogue Pill */}
                  <div className="video-speech-bubble">
                    <span>Elena: &ldquo;Loved your travel photos! Coffee this Saturday?&rdquo;</span>
                  </div>

                  {/* FIXED BOTTOM VIDEO CONTROLS DOCK - CENTERED AS A FLOATING PILL */}
                  <div className="video-centered-dock">
                    <button className="dock-video-circle" title="Mute Microphone">
                      <Mic size={18} />
                    </button>
                    <button className="dock-video-circle" title="Flip Camera">
                      <Camera size={18} />
                    </button>
                    <button className="dock-video-circle heart-pulse-active" title="Send Reaction">
                      <Heart size={20} fill="#FF4458" color="#FF4458" />
                    </button>
                    <button className="dock-video-circle btn-end-call" title="End Call">
                      <PhoneOff size={18} />
                    </button>
                  </div>
                </div>
              )}

              {/* ---------------- 3. INSTANT CHAT PREVIEW ---------------- */}
              {activeTab === 'chat' && (
                <div className="screen-content chat-screen">
                  {/* Chat Header Bar */}
                  <div className="chat-top-header">
                    <div style={{ position: 'relative' }}>
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&q=80"
                        alt="Yuki Avatar"
                        style={{ width: '38px', height: '38px', borderRadius: '50%', objectFit: 'cover' }}
                      />
                      <span className="user-online-dot" />
                    </div>
                    <div style={{ flex: 1 }}>
                      <div style={{ fontSize: '0.92rem', fontWeight: 800, color: '#FFFFFF', display: 'flex', alignItems: 'center', gap: '5px' }}>
                        <span>Yuki</span>
                        <VerifiedBadge size={14} />
                      </div>
                      <div style={{ fontSize: '0.7rem', color: '#10B981' }}>Active Now</div>
                    </div>
                    <div className="chat-header-actions-group">
                      <button className="chat-header-action" title="Voice Call" aria-label="Voice Call">
                        <Phone size={15} strokeWidth={2.2} />
                      </button>
                      <button 
                        onClick={() => handleTabChange('video')} 
                        className="chat-header-action" 
                        title="Start Video Date" 
                        aria-label="Start Video Date"
                      >
                        <Video size={16} strokeWidth={2.2} />
                      </button>
                    </div>
                  </div>

                  {/* Chat Message Stream */}
                  <div className="chat-messages-container">
                    <div className="chat-msg partner-msg anim-msg-1">
                      Loved your vinyl prompt! Have you heard the new jazz album? 🎷
                      <span className="msg-meta">9:41 AM</span>
                    </div>

                    <div className="chat-typing-indicator anim-typing">
                      <span>Yuki is typing</span>
                      <div className="dots-bounce">
                        <span />
                        <span />
                        <span />
                      </div>
                    </div>

                    <div className="chat-msg partner-msg anim-msg-2">
                      Track 3 is so good! ✨
                      <span className="msg-meta">9:41 AM</span>
                    </div>

                    <div className="chat-msg user-msg anim-msg-3">
                      Track 3 is my favorite! Let&apos;s grab coffee ☕
                      <span className="msg-meta">9:42 AM • Read ✓✓</span>
                      <div className="heart-badge-attachment">❤️</div>
                    </div>
                  </div>

                  {/* FIXED BOTTOM CHAT INPUT BAR - CLEARS AFTER MESSAGE IS SENT */}
                  <div className="fixed-bottom-bar chat-input-dock">
                    <button className="input-plus-btn" title="Add attachment"><Plus size={18} /></button>
                    <div className="input-text-pill">
                      {/* Typed text disappears after message sends! */}
                      <div className="input-content-area">
                        <span className="input-typed-text">Track 3 is my favorite! Let&apos;s grab coffee ☕</span>
                        <span className="input-placeholder-text">Type a message...</span>
                      </div>
                      <Smile size={16} color="var(--text-muted)" />
                    </div>
                    <button className="input-send-btn" title="Send message">
                      <Send size={15} />
                    </button>
                  </div>
                </div>
              )}

              {/* ---------------- 4. MUTUAL MATCH PREVIEW ---------------- */}
              {activeTab === 'match' && (
                <div className="screen-content match-screen">
                  {/* Confetti Sparks */}
                  <div className="confetti-drop cd-1" />
                  <div className="confetti-drop cd-2" />
                  <div className="confetti-drop cd-3" />
                  <div className="confetti-drop cd-4" />
                  <div className="confetti-drop cd-5" />

                  <div className="match-content-center">
                    <div className="spark-sub-badge">
                      <Sparkles size={13} />
                      <span>MUTUAL CHEMISTRY</span>
                    </div>

                    <h3 className="match-hero-title">
                      It&apos;s a Match!
                    </h3>

                    {/* Dual Avatars with Heart Pulse */}
                    <div className="avatars-clash-box">
                      <div className="avatar-disc left-disc">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=300&q=80" alt="You" />
                      </div>

                      <div className="heart-clash-center">
                        <Heart size={16} color="#FFFFFF" fill="#FFFFFF" />
                      </div>

                      <div className="avatar-disc right-disc">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=300&q=80" alt="Yuki" />
                      </div>
                    </div>

                    <p style={{ fontSize: '0.86rem', color: '#D1D5DB', marginBottom: '8px' }}>
                      You and Yuki liked each other.
                    </p>

                    <div className="match-tag-pill">
                      <span>Shared: 🎶 Vinyl Records • 📸 Film Photo</span>
                    </div>
                  </div>

                  {/* FIXED BOTTOM ACTION BUTTONS */}
                  <div className="fixed-bottom-bar match-buttons-dock">
                    <button className="match-cta-primary">
                      <span>Send a Message</span>
                    </button>
                    <button className="match-cta-secondary">
                      <span>Keep Swiping</span>
                    </button>
                  </div>
                </div>
              )}

              {/* iPhone Home Indicator Bar (Fixed Bottom Center) */}
              <div className="iphone-home-bar" />
            </div>

            {/* Replay & Auto-Loop Control Bar below the phone */}
            <div className="phone-controls-bar">
              <button onClick={handleReplay} className="replay-btn" title="Replay current animation">
                <RotateCcw size={13} />
                <span>Replay</span>
              </button>
              <button 
                onClick={() => setIsPaused((prev) => !prev)} 
                className={`replay-btn auto-loop-btn ${!isPaused ? 'is-active' : ''}`}
                title={isPaused ? "Resume auto tour loop" : "Pause auto tour loop"}
              >
                {isPaused ? <Play size={13} /> : <Pause size={13} />}
                <span>{isPaused ? 'Resume Loop' : 'Auto-Looping'}</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        /* Top Quick-Access Buttons Bar */
        .top-pills-bar {
          display: flex;
          justifyContent: center;
          gap: 12px;
          flex-wrap: wrap;
          margin-bottom: 40px;
        }

        .feature-pill-btn {
          position: relative;
          overflow: hidden;
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 10px 20px;
          border-radius: 9999px;
          border: 1.5px solid var(--glass-border);
          font-size: 0.92rem;
          cursor: pointer;
          transition: transform 0.25s ease, background-color 0.25s ease, border-color 0.25s ease;
        }

        .feature-pill-btn:hover {
          transform: translateY(-2px);
          border-color: rgba(255, 255, 255, 0.25);
        }

        .pill-auto-bar {
          position: absolute;
          bottom: 0;
          left: 0;
          width: 100%;
          height: 2.5px;
          border-radius: 9999px;
          transform-origin: left;
          animation: pillProgressFill 6s linear forwards;
          will-change: transform;
        }

        .pill-auto-bar.is-paused {
          animation-play-state: paused;
        }

        @keyframes pillProgressFill {
          from { transform: scaleX(0); }
          to { transform: scaleX(1); }
        }

        /* 2-Column Split */
        .app-tour-grid {
          display: grid;
          grid-template-columns: 1.15fr 0.85fr;
          gap: 48px;
          align-items: center;
        }

        .features-list-column {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        .feature-select-card {
          padding: 22px 24px;
          border-radius: 20px;
          border: 1.5px solid var(--glass-border);
          cursor: pointer;
          position: relative;
          overflow: hidden;
          transition: transform 0.25s ease, border-color 0.25s ease, background-color 0.25s ease;
        }

        .feature-select-card:hover {
          transform: translateY(-2px);
          border-color: rgba(255, 255, 255, 0.25);
        }

        .live-demo-badge {
          display: flex;
          align-items: center;
          gap: 6px;
          font-size: 0.72rem;
          font-weight: 700;
          padding: 3px 10px;
          border-radius: 9999px;
          border: 1px solid transparent;
        }

        .live-pulse-dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          animation: dotPulse 1.4s infinite;
        }

        @keyframes dotPulse {
          0%, 100% { transform: scale(1); opacity: 1; }
          50% { transform: scale(1.6); opacity: 0.4; }
        }

        .phone-preview-column {
          display: flex;
          flex-direction: column;
          align-items: center;
          position: relative;
        }

        .phone-ambient-glow {
          position: absolute;
          width: 380px;
          height: 620px;
          filter: blur(60px);
          z-index: 0;
          pointer-events: none;
          transition: background 0.5s ease;
        }

        /* iPhone 16 Pro Frame */
        .iphone-frame {
          width: 100%;
          max-width: 340px;
          height: 670px;
          background-color: #0F1115;
          border-radius: 46px;
          border: 4px solid #2B3245;
          box-shadow: 0 25px 65px rgba(0, 0, 0, 0.9), 0 0 35px rgba(255, 68, 88, 0.2);
          position: relative;
          overflow: hidden;
          display: flex;
          flex-direction: column;
          z-index: 5;
        }

        /* Dynamic Island: Centered */
        .dynamic-island {
          position: absolute;
          top: 10px;
          left: 50%;
          transform: translateX(-50%);
          width: 88px;
          height: 24px;
          background-color: #000000;
          border-radius: 20px;
          z-index: 60;
          display: flex;
          align-items: center;
          justify-content: flex-end;
          padding-right: 10px;
        }

        .island-camera-dot {
          width: 9px;
          height: 9px;
          border-radius: 50%;
          background-color: #0a0a0a;
          border: 1px solid #1a1a1a;
        }

        /* Separate Left Pinned Time */
        .phone-status-left {
          position: absolute;
          top: 13px;
          left: 22px;
          font-family: -apple-system, BlinkMacSystemFont, 'SF Pro Text', sans-serif;
          font-size: 0.82rem;
          font-weight: 700;
          color: #FFFFFF;
          z-index: 50;
          pointer-events: none;
          line-height: 1;
        }

        /* Separate Right Pinned Icons */
        .phone-status-right {
          position: absolute;
          top: 13px;
          right: 22px;
          display: flex;
          align-items: center;
          gap: 6px;
          z-index: 50;
          pointer-events: none;
          line-height: 1;
        }

        .status-5g {
          font-family: -apple-system, BlinkMacSystemFont, 'SF Pro Text', sans-serif;
          font-size: 0.65rem;
          font-weight: 700;
          color: #FFFFFF;
          letter-spacing: 0.02em;
        }

        .status-battery {
          width: 19px;
          height: 10px;
          border: 1.5px solid #FFFFFF;
          border-radius: 3px;
          padding: 1px;
          display: flex;
          align-items: center;
          position: relative;
        }

        .status-battery::after {
          content: '';
          position: absolute;
          right: -3px;
          top: 2px;
          width: 1.5px;
          height: 3px;
          background-color: #FFFFFF;
          border-radius: 0 1px 1px 0;
        }

        .battery-level {
          width: 13px;
          height: 6px;
          background-color: #10B981;
          border-radius: 1px;
        }

        .iphone-home-bar {
          position: absolute;
          bottom: 7px;
          left: 50%;
          transform: translateX(-50%);
          width: 124px;
          height: 4.5px;
          background: rgba(255, 255, 255, 0.4);
          border-radius: 2.5px;
          z-index: 50;
          pointer-events: none;
        }

        .screen-content {
          width: 100%;
          height: 100%;
          position: relative;
          overflow: hidden;
        }

        /* Generic Fixed Bottom Bar inside Phone */
        .fixed-bottom-bar {
          position: absolute;
          left: 0;
          right: 0;
          z-index: 40;
        }

        /* ================= 1. DISCOVERY PREVIEW STYLES ================= */
        .discovery-screen {
          background-color: #0F1115;
        }

        .deck-card {
          position: absolute;
          top: 48px;
          left: 10px;
          right: 10px;
          bottom: 92px;
          border-radius: 24px;
          overflow: hidden;
          background-color: #161922;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5);
        }

        .card-underneath {
          transform: scale(0.94) translateY(12px);
          opacity: 0.6;
          animation: underneathPromote 5s infinite cubic-bezier(0.16, 1, 0.3, 1);
        }

        @keyframes underneathPromote {
          0%, 35% { transform: scale(0.94) translateY(12px); opacity: 0.6; }
          48%, 95% { transform: scale(1) translateY(0); opacity: 1; }
          100% { transform: scale(0.94) translateY(12px); opacity: 0.6; }
        }

        .card-front-animating {
          z-index: 10;
          animation: cardGlideSwipe 5s infinite cubic-bezier(0.2, 0.9, 0.3, 1);
        }

        @keyframes cardGlideSwipe {
          0%, 25% { transform: translate3d(0, 0, 0) rotate(0deg); opacity: 1; }
          38% { transform: translate3d(75px, -10px, 0) rotate(8deg); opacity: 1; }
          48% { transform: translate3d(360px, -25px, 0) rotate(20deg); opacity: 0; }
          52%, 94% { transform: translate3d(0, 20px, 0) scale(0.9); opacity: 0; }
          98%, 100% { transform: translate3d(0, 0, 0) scale(1); opacity: 1; }
        }

        .card-full-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .card-gradient-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(to top, rgba(15, 17, 21, 0.95) 0%, rgba(15, 17, 21, 0.4) 45%, transparent 70%);
        }

        .card-story-progress {
          position: absolute;
          top: 10px;
          left: 12px;
          right: 12px;
          display: flex;
          gap: 5px;
          z-index: 15;
        }

        .story-step {
          flex: 1;
          height: 3px;
          background-color: rgba(255, 255, 255, 0.35);
          border-radius: 2px;
        }

        .story-step.is-filled {
          background-color: #FFFFFF;
        }

        .story-step-2 {
          animation: step2Fill 5s infinite;
        }

        @keyframes step2Fill {
          0%, 15% { background-color: rgba(255, 255, 255, 0.35); }
          22%, 100% { background-color: #FFFFFF; }
        }

        .stamp-like {
          position: absolute;
          top: 30px;
          left: 16px;
          border: 3.5px solid #10B981;
          color: #10B981;
          padding: 3px 12px;
          border-radius: 8px;
          font-size: 1.4rem;
          font-weight: 900;
          letter-spacing: 0.08em;
          text-shadow: 0 2px 10px rgba(16, 185, 129, 0.7);
          box-shadow: 0 0 16px rgba(16, 185, 129, 0.45);
          z-index: 20;
          animation: stampFlare 5s infinite;
        }

        @keyframes stampFlare {
          0%, 25% { opacity: 0; transform: scale(0.8) rotate(-14deg); }
          34%, 44% { opacity: 1; transform: scale(1.1) rotate(-14deg); }
          48%, 100% { opacity: 0; transform: scale(1.2) rotate(-14deg); }
        }

        .card-info-box {
          position: absolute;
          bottom: 16px;
          left: 14px;
          right: 14px;
          z-index: 15;
        }

        /* Fixed Discovery Action Buttons Dock - 5 PERFECT CIRCLES */
        .discovery-buttons-dock {
          bottom: 22px;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 12px;
          padding: 8px 16px;
          background: linear-gradient(to top, rgba(15, 17, 21, 0.98) 0%, rgba(15, 17, 21, 0.7) 70%, transparent 100%);
        }

        .dock-action-rewind {
          width: 42px !important;
          height: 42px !important;
          min-width: 42px !important;
          min-height: 42px !important;
          max-width: 42px !important;
          max-height: 42px !important;
          border-radius: 50% !important;
          background-color: #161922 !important;
          border: 1.5px solid #F59E0B !important;
          color: #F59E0B !important;
          display: flex !important;
          align-items: center !important;
          justify-content: center !important;
          flex-shrink: 0 !important;
          padding: 0 !important;
          margin: 0 !important;
          cursor: pointer;
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.5);
          transition: transform 0.2s ease;
        }

        .dock-action-pass {
          width: 52px !important;
          height: 52px !important;
          min-width: 52px !important;
          min-height: 52px !important;
          max-width: 52px !important;
          max-height: 52px !important;
          border-radius: 50% !important;
          background-color: #161922 !important;
          border: 2px solid #FF4458 !important;
          color: #FF4458 !important;
          display: flex !important;
          align-items: center !important;
          justify-content: center !important;
          flex-shrink: 0 !important;
          padding: 0 !important;
          margin: 0 !important;
          cursor: pointer;
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.5);
          transition: transform 0.2s ease;
        }

        .dock-action-superlike {
          width: 44px !important;
          height: 44px !important;
          min-width: 44px !important;
          min-height: 44px !important;
          max-width: 44px !important;
          max-height: 44px !important;
          border-radius: 50% !important;
          background-color: #161922 !important;
          background: #161922 !important;
          border: 1.5px solid #00C9FF !important;
          color: #00C9FF !important;
          display: flex !important;
          align-items: center !important;
          justify-content: center !important;
          flex-shrink: 0 !important;
          padding: 0 !important;
          margin: 0 !important;
          cursor: pointer;
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.5) !important;
          transition: transform 0.2s ease;
        }

        .dock-action-like {
          width: 52px !important;
          height: 52px !important;
          min-width: 52px !important;
          min-height: 52px !important;
          max-width: 52px !important;
          max-height: 52px !important;
          border-radius: 50% !important;
          background-color: #161922 !important;
          border: 2px solid #10B981 !important;
          color: #10B981 !important;
          display: flex !important;
          align-items: center !important;
          justify-content: center !important;
          flex-shrink: 0 !important;
          padding: 0 !important;
          margin: 0 !important;
          cursor: pointer;
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.5);
          transition: transform 0.2s ease;
        }

        .pulsing-like-button {
          animation: likePulseGlow 5s infinite;
        }

        @keyframes likePulseGlow {
          32%, 42% { transform: scale(1.15); }
          0%, 28%, 46%, 100% { transform: scale(1); }
        }

        .dock-action-boost {
          width: 42px !important;
          height: 42px !important;
          min-width: 42px !important;
          min-height: 42px !important;
          max-width: 42px !important;
          max-height: 42px !important;
          border-radius: 50% !important;
          background-color: #161922 !important;
          border: 1.5px solid #A855F7 !important;
          color: #A855F7 !important;
          display: flex !important;
          align-items: center !important;
          justify-content: center !important;
          flex-shrink: 0 !important;
          padding: 0 !important;
          margin: 0 !important;
          cursor: pointer;
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.5);
          transition: transform 0.2s ease;
        }

        .dock-action-rewind:hover,
        .dock-action-pass:hover,
        .dock-action-superlike:hover,
        .dock-action-like:hover,
        .dock-action-boost:hover {
          transform: scale(1.1);
        }

        /* ================= 2. VIDEO DATES PREVIEW STYLES ================= */
        .video-screen {
          background-color: #000000;
        }

        .video-feed-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          animation: videoFeedBreathe 6s ease-in-out infinite alternate;
        }

        @keyframes videoFeedBreathe {
          0% { transform: scale(1.02); }
          100% { transform: scale(1.06) translateY(-6px); }
        }

        .video-vignette-top {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 120px;
          background: linear-gradient(to bottom, rgba(0, 0, 0, 0.8) 0%, transparent 100%);
          z-index: 5;
        }

        .video-vignette-bottom {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          height: 160px;
          background: linear-gradient(to top, rgba(0, 0, 0, 0.9) 0%, transparent 100%);
          z-index: 5;
        }

        .video-call-header {
          position: absolute;
          top: 48px;
          left: 14px;
          right: 14px;
          padding: 8px 14px;
          background: rgba(0, 0, 0, 0.65);
          backdrop-filter: blur(12px);
          border-radius: 9999px;
          display: flex;
          justifyContent: space-between;
          align-items: center;
          z-index: 20;
          border: 1px solid rgba(255, 255, 255, 0.12);
        }

        .live-call-dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background-color: #10B981;
          box-shadow: 0 0 6px #10B981;
        }

        .audio-equalizer {
          display: flex;
          align-items: center;
          gap: 3px;
        }

        .eq-bar {
          width: 3px;
          background-color: #00C9FF;
          border-radius: 2px;
          animation: eqJump 1.2s infinite ease-in-out;
        }

        .eq-1 { height: 10px; animation-delay: 0.1s; }
        .eq-2 { height: 16px; animation-delay: 0.3s; }
        .eq-3 { height: 12px; animation-delay: 0.2s; }
        .eq-4 { height: 8px; animation-delay: 0.4s; }

        @keyframes eqJump {
          0%, 100% { transform: scaleY(0.5); }
          50% { transform: scaleY(1.3); }
        }

        .selfie-camera-preview {
          position: absolute;
          top: 96px;
          right: 14px;
          width: 82px;
          height: 116px;
          border-radius: 16px;
          overflow: hidden;
          border: 2px solid rgba(255, 255, 255, 0.5);
          box-shadow: 0 8px 24px rgba(0, 0, 0, 0.8);
          z-index: 20;
        }

        .selfie-label {
          position: absolute;
          bottom: 4px;
          left: 6px;
          background: rgba(0, 0, 0, 0.6);
          padding: 1px 6px;
          border-radius: 4px;
          font-size: 0.6rem;
          color: #FFFFFF;
          font-weight: 700;
        }

        .floating-reaction-spray {
          position: absolute;
          font-size: 1.6rem;
          z-index: 25;
          pointer-events: none;
          animation: reactionSprayUp 4s infinite ease-out;
        }

        .f1 { left: 60%; bottom: 85px; animation-delay: 0.5s; }
        .f2 { left: 48%; bottom: 85px; animation-delay: 1.2s; font-size: 1.8rem; }
        .f3 { left: 68%; bottom: 85px; animation-delay: 1.8s; font-size: 1.4rem; }
        .f4 { left: 52%; bottom: 85px; animation-delay: 2.5s; }

        @keyframes reactionSprayUp {
          0% { transform: translateY(0) scale(0.5); opacity: 0; }
          20% { opacity: 1; transform: translateY(-30px) scale(1.2); }
          80% { transform: translateY(-220px) translateX(20px) scale(0.9); opacity: 0; }
          100% { opacity: 0; }
        }

        .video-speech-bubble {
          position: absolute;
          bottom: 86px;
          left: 14px;
          right: 14px;
          background: rgba(15, 17, 21, 0.88);
          backdrop-filter: blur(12px);
          border: 1px solid rgba(255, 255, 255, 0.12);
          padding: 8px 14px;
          border-radius: 12px;
          font-size: 0.76rem;
          color: #FFFFFF;
          z-index: 20;
          text-align: center;
        }

        /* Fixed Video Controls Dock - CENTERED IN THE PHONE */
        .video-centered-dock {
          position: absolute;
          bottom: 24px;
          left: 50%;
          transform: translateX(-50%);
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 14px;
          background: rgba(15, 17, 21, 0.88);
          backdrop-filter: blur(16px);
          padding: 8px 18px;
          border-radius: 9999px;
          border: 1px solid rgba(255, 255, 255, 0.15);
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.7);
          z-index: 40;
          width: max-content;
        }

        .dock-video-circle {
          width: 44px !important;
          height: 44px !important;
          min-width: 44px !important;
          min-height: 44px !important;
          max-width: 44px !important;
          max-height: 44px !important;
          padding: 0 !important;
          margin: 0 !important;
          border-radius: 50% !important;
          flex-shrink: 0 !important;
          background-color: rgba(22, 25, 34, 0.9) !important;
          border: 1.5px solid rgba(255, 255, 255, 0.15) !important;
          display: flex !important;
          align-items: center !important;
          justify-content: center !important;
          color: #FFFFFF !important;
          cursor: pointer;
          box-shadow: 0 6px 16px rgba(0, 0, 0, 0.6);
          transition: transform 0.2s ease;
        }

        .dock-video-circle:hover {
          transform: scale(1.08);
        }

        .heart-pulse-active {
          animation: heartButtonPulse 2.5s infinite;
        }

        @keyframes heartButtonPulse {
          0%, 100% { transform: scale(1); border-color: #FF4458 !important; background-color: rgba(255, 68, 88, 0.15) !important; }
          50% { transform: scale(1.12); background-color: rgba(255, 68, 88, 0.35) !important; border-color: #FF4458 !important; }
        }

        .btn-end-call {
          background-color: #EF4444 !important;
          border-color: #EF4444 !important;
        }

        /* ================= 3. INSTANT CHAT PREVIEW STYLES ================= */
        .chat-screen {
          background-color: #161922;
          display: flex;
          flex-direction: column;
        }

        .chat-top-header {
          position: absolute;
          top: 42px;
          left: 0;
          right: 0;
          padding: 8px 16px;
          border-bottom: 1px solid rgba(255, 255, 255, 0.08);
          background: rgba(22, 25, 34, 0.95);
          backdrop-filter: blur(12px);
          display: flex;
          align-items: center;
          gap: 10px;
          z-index: 20;
        }

        .user-online-dot {
          position: absolute;
          bottom: 0;
          right: 0;
          width: 9px;
          height: 9px;
          border-radius: 50%;
          background-color: #10B981;
          border: 1.5px solid #161922;
        }

        .chat-header-actions-group {
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .chat-header-action {
          width: 34px !important;
          height: 34px !important;
          min-width: 34px !important;
          min-height: 34px !important;
          padding: 0 !important;
          margin: 0 !important;
          border-radius: 50% !important;
          background: rgba(255, 255, 255, 0.09) !important;
          border: 1px solid rgba(255, 255, 255, 0.16) !important;
          display: flex !important;
          align-items: center !important;
          justify-content: center !important;
          color: #E2E8F0 !important;
          cursor: pointer;
          transition: transform 0.2s ease, background-color 0.2s ease, border-color 0.2s ease;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);
        }

        .chat-header-action:hover {
          background: rgba(255, 255, 255, 0.18) !important;
          border-color: rgba(255, 255, 255, 0.35) !important;
          color: #FFFFFF !important;
          transform: scale(1.08);
        }

        .chat-messages-container {
          position: absolute;
          top: 104px;
          bottom: 74px;
          left: 0;
          right: 0;
          padding: 14px;
          display: flex;
          flex-direction: column;
          gap: 10px;
          overflow: hidden;
        }

        .chat-msg {
          padding: 9px 13px;
          font-size: 0.8rem;
          line-height: 1.45;
          max-width: 82%;
          position: relative;
        }

        .msg-meta {
          display: block;
          font-size: 0.62rem;
          color: rgba(255, 255, 255, 0.6);
          margin-top: 3px;
          text-align: right;
        }

        .partner-msg {
          align-self: flex-start;
          background-color: #242A3C;
          color: #FFFFFF;
          border-radius: 16px 16px 16px 4px;
        }

        .user-msg {
          align-self: flex-end;
          background: var(--gradient-brand);
          color: #FFFFFF;
          border-radius: 16px 16px 4px 16px;
        }

        .anim-msg-1 {
          animation: popBubble1 5s infinite ease-out;
        }

        @keyframes popBubble1 {
          0%, 5% { opacity: 0; transform: translateY(8px); }
          10%, 100% { opacity: 1; transform: translateY(0); }
        }

        .anim-typing {
          animation: typingBubble 5s infinite;
        }

        @keyframes typingBubble {
          0%, 12% { opacity: 0; display: none; }
          16%, 32% { opacity: 1; display: flex; }
          36%, 100% { opacity: 0; display: none; }
        }

        .anim-msg-2 {
          animation: popBubble2 5s infinite ease-out;
        }

        @keyframes popBubble2 {
          0%, 34% { opacity: 0; transform: translateY(8px); }
          38%, 100% { opacity: 1; transform: translateY(0); }
        }

        .anim-msg-3 {
          animation: popBubble3 5s infinite ease-out;
        }

        @keyframes popBubble3 {
          0%, 52% { opacity: 0; transform: translateY(12px) scale(0.95); }
          56%, 100% { opacity: 1; transform: translateY(0) scale(1); }
        }

        .heart-badge-attachment {
          position: absolute;
          bottom: -8px;
          right: 4px;
          background: #242A3C;
          border: 1px solid rgba(255, 255, 255, 0.2);
          border-radius: 10px;
          padding: 1px 5px;
          font-size: 0.72rem;
          animation: reactionPop 5s infinite;
        }

        @keyframes reactionPop {
          0%, 65% { opacity: 0; transform: scale(0.5); }
          70%, 100% { opacity: 1; transform: scale(1); }
        }

        .chat-typing-indicator {
          align-self: flex-start;
          display: flex;
          align-items: center;
          gap: 6px;
          color: var(--text-muted);
          font-size: 0.72rem;
          padding-left: 4px;
        }

        .dots-bounce {
          display: flex;
          gap: 3px;
        }

        .dots-bounce span {
          width: 4px;
          height: 4px;
          border-radius: 50%;
          background-color: #10B981;
          animation: dotBounceAnim 1.2s infinite ease-in-out;
        }

        .dots-bounce span:nth-child(2) { animation-delay: 0.2s; }
        .dots-bounce span:nth-child(3) { animation-delay: 0.4s; }

        @keyframes dotBounceAnim {
          0%, 80%, 100% { transform: scale(0.6); opacity: 0.4; }
          40% { transform: scale(1.2); opacity: 1; }
        }

        /* Fixed Chat Input Bar */
        .chat-input-dock {
          bottom: 20px;
          padding: 8px 12px;
          border-top: 1px solid var(--glass-border);
          background: rgba(22, 25, 34, 0.96);
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .input-plus-btn {
          width: 32px;
          height: 32px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.08);
          border: none;
          color: #E2E8F0;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
        }

        .input-text-pill {
          flex: 1;
          background: rgba(255, 255, 255, 0.08);
          border-radius: 9999px;
          padding: 0 12px;
          height: 34px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          overflow: hidden;
        }

        .input-content-area {
          position: relative;
          flex: 1;
          height: 100%;
          display: flex;
          align-items: center;
          overflow: hidden;
        }

        /* Typed text types in from 34% - 52%, then disappears completely when message is sent at 55% */
        .input-typed-text {
          position: absolute;
          left: 0;
          font-size: 0.73rem;
          color: #FFFFFF;
          white-space: nowrap;
          animation: typedTextAnim 5s infinite ease-in-out;
        }

        @keyframes typedTextAnim {
          0%, 30% { opacity: 0; visibility: hidden; transform: translateY(4px); }
          34%, 52% { opacity: 1; visibility: visible; transform: translateY(0); }
          55%, 100% { opacity: 0; visibility: hidden; transform: translateY(-8px); }
        }

        /* Placeholder appears initially and returns when text is sent & cleared */
        .input-placeholder-text {
          position: absolute;
          left: 0;
          font-size: 0.73rem;
          color: rgba(255, 255, 255, 0.45);
          white-space: nowrap;
          animation: placeholderTextAnim 5s infinite ease-in-out;
        }

        @keyframes placeholderTextAnim {
          0%, 30% { opacity: 1; visibility: visible; }
          34%, 52% { opacity: 0; visibility: hidden; }
          55%, 100% { opacity: 1; visibility: visible; }
        }

        .input-send-btn {
          width: 34px;
          height: 34px;
          border-radius: 50%;
          background: var(--gradient-brand);
          display: flex;
          align-items: center;
          justify-content: center;
          color: #FFFFFF;
          border: none;
          cursor: pointer;
          animation: sendPulse 5s infinite;
        }

        @keyframes sendPulse {
          50%, 54% { transform: scale(0.9); }
          0%, 48%, 58%, 100% { transform: scale(1); }
        }

        /* ================= 4. MUTUAL MATCH PREVIEW STYLES ================= */
        .match-screen {
          background-color: #0F1115;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: flex-start;
          padding-top: 84px;
          text-align: center;
          position: relative;
          overflow: hidden;
        }

        .match-content-center {
          display: flex;
          flex-direction: column;
          align-items: center;
          width: 100%;
          margin-top: 0;
        }

        .spark-sub-badge {
          display: inline-flex;
          align-items: center;
          gap: 5px;
          font-size: 0.72rem;
          font-weight: 800;
          color: #FF5864;
          letter-spacing: 0.08em;
          margin-bottom: 6px;
        }

        .match-hero-title {
          font-family: 'Outfit', sans-serif;
          font-size: 2.1rem;
          font-weight: 900;
          background: var(--gradient-brand);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          margin-bottom: 20px;
          line-height: 1.1;
        }

        .avatars-clash-box {
          position: relative;
          width: 130px;
          height: 76px;
          margin: 0 auto 16px auto;
        }

        .avatar-disc {
          width: 76px;
          height: 76px;
          border-radius: 50%;
          overflow: hidden;
          position: absolute;
          top: 0;
        }

        .left-disc {
          left: 0;
          border: 2.5px solid #7C3AED;
          z-index: 1;
        }

        .right-disc {
          right: 0;
          border: 2.5px solid #FF4458;
          z-index: 2;
        }

        .avatar-disc img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }

        .heart-clash-center {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          z-index: 10;
          width: 34px;
          height: 34px;
          border-radius: 50%;
          background: var(--gradient-brand);
          display: flex;
          align-items: center;
          justify-content: center;
          border: 2.5px solid #0F1115;
          box-shadow: 0 0 16px rgba(255, 68, 88, 0.6);
          animation: heartBeat 1.4s infinite ease-in-out;
        }

        @keyframes heartBeat {
          0%, 100% {
            transform: translate(-50%, -50%) scale(1);
          }
          50% {
            transform: translate(-50%, -50%) scale(1.18);
          }
        }

        .match-tag-pill {
          font-size: 0.72rem;
          color: #D1D5DB;
          background: rgba(255, 255, 255, 0.08);
          padding: 4px 12px;
          border-radius: 9999px;
          margin-bottom: 20px;
        }

        /* Fixed Match Action Buttons Dock */
        .match-buttons-dock {
          bottom: 24px;
          padding: 0 20px;
          display: flex;
          flex-direction: column;
          gap: 10px;
        }

        .match-cta-primary {
          width: 100%;
          padding: 12px;
          border-radius: 9999px;
          background: var(--gradient-brand);
          color: #FFFFFF;
          font-size: 0.88rem;
          font-weight: 700;
          border: none;
          cursor: pointer;
          box-shadow: 0 4px 18px rgba(255, 68, 88, 0.4);
          transition: transform 0.2s ease;
        }

        .match-cta-primary:hover {
          transform: translateY(-1px);
        }

        .match-cta-secondary {
          width: 100%;
          padding: 10px;
          border-radius: 9999px;
          background: rgba(255, 255, 255, 0.08);
          border: 1px solid rgba(255, 255, 255, 0.15);
          color: #CBD5E1;
          font-size: 0.84rem;
          font-weight: 600;
          cursor: pointer;
          transition: transform 0.2s ease, background-color 0.2s ease, color 0.2s ease;
        }

        .match-cta-secondary:hover {
          background: rgba(255, 255, 255, 0.14);
          color: #FFFFFF;
        }

        .confetti-drop {
          position: absolute;
          width: 8px;
          height: 8px;
          border-radius: 2px;
          animation: confettiDropAnim 4s infinite ease-out;
        }

        .cd-1 { top: 12%; left: 22%; background: #FF4458; animation-delay: 0.1s; }
        .cd-2 { top: 18%; right: 24%; background: #00C9FF; animation-delay: 0.4s; }
        .cd-3 { top: 45%; left: 16%; background: #F59E0B; animation-delay: 0.8s; }
        .cd-4 { top: 50%; right: 18%; background: #10B981; animation-delay: 0.3s; }
        .cd-5 { top: 70%; left: 28%; background: #A855F7; animation-delay: 0.6s; }

        @keyframes confettiDropAnim {
          0% { transform: translateY(-20px) rotate(0deg); opacity: 0; }
          20% { opacity: 1; }
          100% { transform: translateY(140px) rotate(220deg); opacity: 0; }
        }

        /* Replay Control Bar */
        .phone-controls-bar {
          margin-top: 18px;
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .replay-btn {
          display: flex;
          align-items: center;
          gap: 6px;
          background: rgba(22, 25, 34, 0.8);
          border: 1px solid var(--glass-border);
          padding: 6px 14px;
          border-radius: 9999px;
          color: var(--text-secondary);
          font-size: 0.78rem;
          cursor: pointer;
          transition: transform 0.2s ease, color 0.2s ease, border-color 0.2s ease, background-color 0.2s ease;
        }

        .replay-btn:hover {
          color: #FFFFFF;
          border-color: rgba(255, 255, 255, 0.3);
          transform: translateY(-1px);
        }

        .auto-loop-btn.is-active {
          color: #10B981;
          border-color: rgba(16, 185, 129, 0.4);
          background: rgba(16, 185, 129, 0.12);
        }

        /* Responsive */
        @media (max-width: 960px) {
          .app-tour-grid {
            grid-template-columns: 1fr;
            gap: 40px;
          }
        }
      `}</style>
    </section>
  );
}
