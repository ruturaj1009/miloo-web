'use client';

import React, { useState, useRef, useEffect, useCallback } from 'react';
import { 
  Heart, 
  X, 
  Star, 
  RotateCcw, 
  Zap, 
  MapPin, 
  Briefcase, 
  GraduationCap, 
  ChevronDown, 
  ChevronUp,
  Sparkles,
  Info
} from 'lucide-react';
import { MOCK_DISCOVERY_PROFILES, DiscoveryProfile } from '@/data/mockProfiles';
import MatchCelebrationModal from './MatchCelebrationModal';
import VerifiedBadge from '@/components/common/VerifiedBadge';
import confetti from 'canvas-confetti';

export default function InteractiveDeck() {
  const [profiles, setProfiles] = useState<DiscoveryProfile[]>(MOCK_DISCOVERY_PROFILES);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [activePhotoIndex, setActivePhotoIndex] = useState(0);
  const [expandedBio, setExpandedBio] = useState(false);

  // Drag Gesture States
  const [isDragging, setIsDragging] = useState(false);
  const [dragOffset, setDragOffset] = useState({ x: 0, y: 0 });
  const startPos = useRef({ x: 0, y: 0 });
  const hasDraggedRef = useRef(false);
  const cardRef = useRef<HTMLDivElement>(null);

  // Match celebration state
  const [matchedPartner, setMatchedPartner] = useState<DiscoveryProfile | null>(null);
  const [showMatchModal, setShowMatchModal] = useState(false);

  // Profile Boost state
  const [boostActive, setBoostActive] = useState(false);
  const [showBoostToast, setShowBoostToast] = useState(false);
  const toastTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Exit animation state
  const [exitDirection, setExitDirection] = useState<'left' | 'right' | 'up' | null>(null);

  // Handle Profile Boost
  const handleBoost = useCallback(() => {
    setBoostActive(true);
    setShowBoostToast(true);

    // Festive purple & gold confetti sparks
    try {
      confetti({
        particleCount: 55,
        spread: 70,
        origin: { y: 0.72, x: 0.6 },
        colors: ['#A855F7', '#C084FC', '#E879F9', '#F59E0B', '#FFFFFF'],
        zIndex: 9999,
      });
    } catch {}

    // Auto-dismiss toast notification after 4.5s
    if (toastTimeoutRef.current) {
      clearTimeout(toastTimeoutRef.current);
    }
    toastTimeoutRef.current = setTimeout(() => {
      setShowBoostToast(false);
    }, 4500);
  }, []);

  // Cleanup boost toast timer on unmount
  useEffect(() => {
    return () => {
      if (toastTimeoutRef.current) {
        clearTimeout(toastTimeoutRef.current);
      }
    };
  }, []);

  const currentProfile = profiles[currentIndex % profiles.length];

  // Reset photo index when profile changes
  useEffect(() => {
    setActivePhotoIndex(0);
    setExpandedBio(false);
    setExitDirection(null);
  }, [currentIndex]);

  // Swipe Action Handler
  const handleDecision = useCallback((action: 'pass' | 'like' | 'superlike') => {
    if (exitDirection) return;

    if (action === 'pass') {
      setExitDirection('left');
    } else if (action === 'like') {
      setExitDirection('right');
      // All profiles celebrate mutual match upon liking
      setTimeout(() => {
        setMatchedPartner(currentProfile);
        setShowMatchModal(true);
      }, 350);
    } else if (action === 'superlike') {
      setExitDirection('up');
      setTimeout(() => {
        setMatchedPartner(currentProfile);
        setShowMatchModal(true);
      }, 350);
    }

    setTimeout(() => {
      setCurrentIndex((prev) => prev + 1);
      setDragOffset({ x: 0, y: 0 });
      setExitDirection(null);
    }, 380);
  }, [currentProfile, exitDirection]);

  // Window blur / pointerup fail-safe to guarantee cards never get stuck
  useEffect(() => {
    const handleGlobalPointerUp = () => {
      if (isDragging) {
        setIsDragging(false);
        const threshold = 50;
        if (dragOffset.x > threshold) {
          handleDecision('like');
        } else if (dragOffset.x < -threshold) {
          handleDecision('pass');
        } else if (dragOffset.y < -50) {
          handleDecision('superlike');
        } else {
          setDragOffset({ x: 0, y: 0 });
        }
      }
    };

    window.addEventListener('pointerup', handleGlobalPointerUp);
    window.addEventListener('pointercancel', handleGlobalPointerUp);
    window.addEventListener('blur', handleGlobalPointerUp);

    return () => {
      window.removeEventListener('pointerup', handleGlobalPointerUp);
      window.removeEventListener('pointercancel', handleGlobalPointerUp);
      window.removeEventListener('blur', handleGlobalPointerUp);
    };
  }, [isDragging, dragOffset, handleDecision]);

  // Rewind to previous profile
  const handleRewind = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prev) => prev - 1);
      setDragOffset({ x: 0, y: 0 });
      setExitDirection(null);
    }
  };

  // Modern Pointer Events Handlers with Capture & Clamping
  const handlePointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    if (exitDirection) return;
    if (e.button !== 0) return; // Only primary click / touch

    try {
      e.currentTarget.setPointerCapture(e.pointerId);
    } catch {}

    hasDraggedRef.current = false;
    setIsDragging(true);
    startPos.current = { x: e.clientX, y: e.clientY };
  };

  const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!isDragging || exitDirection) return;
    const rawDeltaX = e.clientX - startPos.current.x;
    const rawDeltaY = e.clientY - startPos.current.y;

    if (Math.hypot(rawDeltaX, rawDeltaY) > 5) {
      hasDraggedRef.current = true;
    }

    // Apply tactile rubber-band dampening so the card cannot be dragged off-screen
    const absX = Math.abs(rawDeltaX);
    let clampedX = rawDeltaX;
    if (absX > 60) {
      const sign = rawDeltaX > 0 ? 1 : -1;
      const extra = absX - 60;
      clampedX = sign * (60 + Math.min(70, extra * 0.35));
    }

    let clampedY = rawDeltaY;
    if (rawDeltaY < 0) {
      // Superlike upwards pull with resistance
      const extraY = Math.abs(rawDeltaY);
      clampedY = -Math.min(90, extraY * 0.55);
    } else {
      // Downwards pull heavy resistance
      clampedY = Math.min(30, rawDeltaY * 0.2);
    }

    setDragOffset({ x: clampedX, y: clampedY });
  };

  const handlePointerUp = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!isDragging) return;
    setIsDragging(false);

    try {
      e.currentTarget.releasePointerCapture(e.pointerId);
    } catch {}

    const threshold = 50;
    if (dragOffset.x > threshold) {
      handleDecision('like');
    } else if (dragOffset.x < -threshold) {
      handleDecision('pass');
    } else if (dragOffset.y < -50) {
      handleDecision('superlike');
    } else {
      // Smoothly spring back to center
      setDragOffset({ x: 0, y: 0 });
    }
  };

  const handlePointerCancel = (e: React.PointerEvent<HTMLDivElement>) => {
    setIsDragging(false);
    try {
      e.currentTarget.releasePointerCapture(e.pointerId);
    } catch {}
    setDragOffset({ x: 0, y: 0 });
  };

  // Photo Quadrant Tap Handler (SKILL.md: Left quadrant = prev photo, Right quadrant = next photo)
  const handleQuadrantClick = (e: React.MouseEvent<HTMLDivElement>) => {
    // If user dragged or card is exiting, never advance photo
    if (exitDirection || hasDraggedRef.current || Math.hypot(dragOffset.x, dragOffset.y) > 5) {
      hasDraggedRef.current = false;
      return;
    }
    const rect = e.currentTarget.getBoundingClientRect();
    const clickX = e.clientX - rect.left;
    const isRightSide = clickX > rect.width / 2;

    if (isRightSide) {
      if (activePhotoIndex < currentProfile.photos.length - 1) {
        setActivePhotoIndex((prev) => prev + 1);
      }
    } else {
      if (activePhotoIndex > 0) {
        setActivePhotoIndex((prev) => prev - 1);
      }
    }
  };

  // Rotation formula from SKILL.md: [-12deg, 0deg, 12deg]
  const rotationDeg = exitDirection === 'left' ? -16 :
                      exitDirection === 'right' ? 16 :
                      exitDirection === 'up' ? 0 :
                      Math.max(-12, Math.min(12, (dragOffset.x / 110) * 12));

  // Stamp Opacities scaled dynamically with 50px threshold
  const likeStampOpacity = exitDirection === 'right' ? 1 : Math.max(0, Math.min(1, dragOffset.x / 40));
  const nopeStampOpacity = exitDirection === 'left' ? 1 : Math.max(0, Math.min(1, -dragOffset.x / 40));
  const superlikeStampOpacity = exitDirection === 'up' ? 1 : Math.max(0, Math.min(1, -dragOffset.y / 40));

  const currentPhoto = currentProfile.photos[activePhotoIndex] || currentProfile.photos[0];

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        position: 'relative',
        userSelect: 'none',
        WebkitUserSelect: 'none',
      }}
    >
      {/* Boost Animation Styles */}
      <style>{`
        @keyframes boostToastSlideDown {
          from {
            opacity: 0;
            transform: translateY(-16px) scale(0.96);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }
        @keyframes boostProgressBar {
          from { width: 100%; }
          to { width: 0%; }
        }
        @keyframes boostGlowPulse {
          0%, 100% {
            box-shadow: 0 0 15px rgba(168, 85, 247, 0.4), inset 0 0 8px rgba(168, 85, 247, 0.25);
          }
          50% {
            box-shadow: 0 0 25px rgba(168, 85, 247, 0.85), inset 0 0 14px rgba(168, 85, 247, 0.5);
          }
        }
      `}</style>

      {/* Profile Boost Active Floating Toast */}
      {showBoostToast && (
        <div
          role="status"
          aria-live="polite"
          style={{
            position: 'absolute',
            top: '-12px',
            zIndex: 60,
            width: '100%',
            maxWidth: '380px',
            background: 'linear-gradient(135deg, rgba(28, 16, 48, 0.96), rgba(18, 20, 30, 0.98))',
            border: '1.5px solid rgba(168, 85, 247, 0.65)',
            boxShadow: '0 16px 40px rgba(168, 85, 247, 0.4), 0 0 25px rgba(168, 85, 247, 0.25)',
            backdropFilter: 'blur(20px)',
            WebkitBackdropFilter: 'blur(20px)',
            borderRadius: '16px',
            padding: '12px 14px',
            display: 'flex',
            alignItems: 'center',
            gap: '12px',
            animation: 'boostToastSlideDown 0.35s cubic-bezier(0.16, 1, 0.3, 1)',
            overflow: 'hidden',
          }}
        >
          {/* Glowing Icon */}
          <div
            style={{
              width: '36px',
              height: '36px',
              borderRadius: '50%',
              backgroundColor: 'rgba(168, 85, 247, 0.25)',
              border: '1.5px solid rgba(168, 85, 247, 0.6)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexShrink: 0,
              boxShadow: '0 0 15px rgba(168, 85, 247, 0.6)',
            }}
          >
            <Zap size={18} fill="#A855F7" color="#FFFFFF" />
          </div>

          {/* Copy Content */}
          <div style={{ flex: 1, minWidth: 0 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '2px' }}>
              <span style={{ fontSize: '0.88rem', fontWeight: 800, color: '#FFFFFF', letterSpacing: '-0.01em' }}>
                Profile Boost Activated!
              </span>
              <span
                style={{
                  fontSize: '0.68rem',
                  fontWeight: 700,
                  color: '#F3E8FF',
                  background: 'rgba(168, 85, 247, 0.35)',
                  padding: '1px 7px',
                  borderRadius: '10px',
                  border: '1px solid rgba(168, 85, 247, 0.5)',
                }}
              >
                10x Views
              </span>
            </div>
            <div style={{ fontSize: '0.74rem', color: 'rgba(255, 255, 255, 0.8)', lineHeight: 1.3 }}>
              Your profile is in the top rotation in your city for the next 30 minutes.
            </div>
          </div>

          {/* Dismiss Button */}
          <button
            onClick={() => setShowBoostToast(false)}
            aria-label="Dismiss Boost Alert"
            style={{
              width: '26px',
              height: '26px',
              borderRadius: '50%',
              backgroundColor: 'rgba(255, 255, 255, 0.08)',
              border: 'none',
              color: 'rgba(255, 255, 255, 0.7)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              flexShrink: 0,
              transition: 'background-color 0.2s',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.2)')}
            onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.08)')}
          >
            <X size={14} />
          </button>

          {/* Auto-dismiss progress bar line */}
          <div
            style={{
              position: 'absolute',
              bottom: 0,
              left: 0,
              height: '3px',
              background: 'linear-gradient(90deg, #A855F7, #EC4899)',
              animation: 'boostProgressBar 4.5s linear forwards',
            }}
          />
        </div>
      )}

      {/* Interactive Helper Banner */}
      <div
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '8px',
          background: 'rgba(255, 255, 255, 0.06)',
          border: '1px solid var(--glass-border)',
          borderRadius: 'var(--radius-pill)',
          padding: '6px 14px',
          fontSize: '0.82rem',
          color: 'var(--text-secondary)',
          marginBottom: '16px',
        }}
      >
        <Sparkles size={14} color="#FF5864" />
        <span>Live Interactive Simulator • Drag or tap action buttons below</span>
      </div>

      {/* Card Deck Container */}
      <div
        style={{
          width: '100%',
          maxWidth: '380px',
          height: '560px',
          position: 'relative',
          perspective: '1000px',
        }}
      >
        {/* Next Card Background Shadow (Depth Stack) */}
        <div
          style={{
            position: 'absolute',
            top: '12px',
            left: '12px',
            right: '12px',
            bottom: '-12px',
            borderRadius: 'var(--radius-card)',
            backgroundColor: '#1B202D',
            border: '1px solid rgba(255, 255, 255, 0.05)',
            transform: 'scale(0.96)',
            zIndex: 1,
            opacity: 0.7,
            boxShadow: '0 10px 30px rgba(0, 0, 0, 0.5)',
          }}
        />

        {/* Active Front Card */}
        <div
          ref={cardRef}
          onPointerDown={handlePointerDown}
          onPointerMove={handlePointerMove}
          onPointerUp={handlePointerUp}
          onPointerCancel={handlePointerCancel}
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            borderRadius: 'var(--radius-card)',
            overflow: 'hidden',
            backgroundColor: '#161922',
            zIndex: 2,
            cursor: isDragging ? 'grabbing' : 'grab',
            touchAction: 'none',
            boxShadow: boostActive
              ? '0 18px 45px rgba(0, 0, 0, 0.65), 0 0 35px rgba(168, 85, 247, 0.35)'
              : '0 18px 45px rgba(0, 0, 0, 0.65)',
            border: boostActive
              ? '1.5px solid rgba(168, 85, 247, 0.7)'
              : '1.5px solid rgba(255, 255, 255, 0.15)',
            transform: exitDirection === 'left' ? 'translateX(-400px) rotate(-18deg)' :
                       exitDirection === 'right' ? 'translateX(400px) rotate(18deg)' :
                       exitDirection === 'up' ? 'translateY(-450px) scale(0.9)' :
                       `translate3d(${dragOffset.x}px, ${dragOffset.y}px, 0) rotate(${rotationDeg}deg)`,
            transition: isDragging
              ? 'none'
              : exitDirection
              ? 'transform 0.38s cubic-bezier(0.2, 0.9, 0.25, 1)'
              : 'transform 0.52s cubic-bezier(0.16, 1, 0.3, 1)',
            willChange: 'transform',
          }}
        >
          {/* Card Media Background */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={currentPhoto.url}
            alt={currentProfile.name}
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              pointerEvents: 'none',
            }}
          />

          {/* Top Segmented Story Indicators (SKILL.md) */}
          <div
            style={{
              position: 'absolute',
              top: '12px',
              left: '12px',
              right: '12px',
              display: 'flex',
              gap: '6px',
              zIndex: 10,
            }}
          >
            {currentProfile.photos.map((_, idx) => (
              <div
                key={idx}
                style={{
                  flex: 1,
                  height: '4px',
                  borderRadius: '2px',
                  backgroundColor: idx <= activePhotoIndex ? '#FFFFFF' : 'rgba(255, 255, 255, 0.35)',
                  boxShadow: '0 1px 3px rgba(0,0,0,0.5)',
                  transition: 'background-color 0.2s ease',
                }}
              />
            ))}
          </div>

          {/* Active Boosted Badge on Card */}
          {boostActive && (
            <div
              style={{
                position: 'absolute',
                top: '24px',
                left: '12px',
                zIndex: 15,
                background: 'rgba(24, 15, 42, 0.9)',
                border: '1px solid rgba(168, 85, 247, 0.75)',
                backdropFilter: 'blur(10px)',
                padding: '4px 10px',
                borderRadius: 'var(--radius-pill)',
                display: 'flex',
                alignItems: 'center',
                gap: '6px',
                boxShadow: '0 4px 16px rgba(168, 85, 247, 0.5)',
                pointerEvents: 'none',
              }}
            >
              <Zap size={12} fill="#A855F7" color="#A855F7" />
              <span style={{ fontSize: '0.72rem', fontWeight: 800, color: '#FFFFFF', letterSpacing: '0.04em' }}>
                BOOSTED • 10X REACH
              </span>
            </div>
          )}

          {/* Left/Right Photo Tap Quadrants */}
          <div
            onClick={handleQuadrantClick}
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: '140px',
              zIndex: 5,
              display: 'flex',
            }}
          >
            <div style={{ flex: 1, height: '100%' }} title="Tap left to view previous photo" />
            <div style={{ flex: 1, height: '100%' }} title="Tap right to view next photo" />
          </div>

          {/* LIKE Stamp Overlay (Green Neon) */}
          <div
            style={{
              position: 'absolute',
              top: '40px',
              left: '24px',
              zIndex: 20,
              border: '3px solid #10B981',
              color: '#10B981',
              padding: '6px 16px',
              borderRadius: '12px',
              fontSize: '1.7rem',
              fontWeight: 900,
              letterSpacing: '0.1em',
              transform: 'rotate(-15deg)',
              opacity: likeStampOpacity,
              textShadow: '0 2px 10px rgba(16, 185, 129, 0.5)',
              boxShadow: '0 0 20px rgba(16, 185, 129, 0.4)',
              pointerEvents: 'none',
              transition: isDragging ? 'none' : 'opacity 0.2s ease',
            }}
          >
            LIKE
          </div>

          {/* NOPE Stamp Overlay (Vibrant Rose/Coral) */}
          <div
            style={{
              position: 'absolute',
              top: '40px',
              right: '24px',
              zIndex: 20,
              border: '3px solid #FF4458',
              color: '#FF4458',
              padding: '6px 16px',
              borderRadius: '12px',
              fontSize: '1.7rem',
              fontWeight: 900,
              letterSpacing: '0.1em',
              transform: 'rotate(15deg)',
              opacity: nopeStampOpacity,
              textShadow: '0 2px 10px rgba(255, 68, 88, 0.5)',
              boxShadow: '0 0 20px rgba(255, 68, 88, 0.4)',
              pointerEvents: 'none',
              transition: isDragging ? 'none' : 'opacity 0.2s ease',
            }}
          >
            NOPE
          </div>

          {/* SUPER LIKE Stamp Overlay (Cyan) */}
          <div
            style={{
              position: 'absolute',
              bottom: '160px',
              left: '50%',
              transform: 'translateX(-50%) rotate(0deg)',
              zIndex: 20,
              border: '3px solid #00C9FF',
              color: '#00C9FF',
              padding: '6px 18px',
              borderRadius: '12px',
              fontSize: '1.5rem',
              fontWeight: 900,
              letterSpacing: '0.1em',
              opacity: superlikeStampOpacity,
              textShadow: '0 2px 10px rgba(0, 201, 255, 0.5)',
              boxShadow: '0 0 20px rgba(0, 201, 255, 0.4)',
              pointerEvents: 'none',
              transition: isDragging ? 'none' : 'opacity 0.2s ease',
            }}
          >
            SUPER LIKE
          </div>

          {/* Gradient Overlay for bottom text legibility (SKILL.md) */}
          <div
            style={{
              position: 'absolute',
              bottom: 0,
              left: 0,
              right: 0,
              height: expandedBio ? '78%' : '52%',
              background: 'linear-gradient(to top, rgba(15, 17, 21, 0.98) 0%, rgba(15, 17, 21, 0.8) 55%, transparent 100%)',
              zIndex: 6,
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'flex-end',
              padding: '24px 20px',
              transition: 'height 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
            }}
          >
            {/* Header: Name, Age, Verified badge */}
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '4px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <h2 style={{ fontSize: '1.75rem', fontWeight: 800, color: '#FFFFFF' }}>
                  {currentProfile.name}
                </h2>
                <span style={{ fontSize: '1.6rem', fontWeight: 400, color: 'rgba(255, 255, 255, 0.85)' }}>
                  {currentProfile.age}
                </span>
                {currentProfile.isVerified && (
                  <VerifiedBadge size={22} />
                )}
              </div>

              {/* Bio expand/collapse toggle */}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setExpandedBio(!expandedBio);
                }}
                style={{
                  width: '32px',
                  height: '32px',
                  borderRadius: '50%',
                  background: 'rgba(255, 255, 255, 0.12)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#FFFFFF',
                }}
                aria-label="Expand bio"
              >
                {expandedBio ? <ChevronDown size={18} /> : <ChevronUp size={18} />}
              </button>
            </div>

            {/* Location & Job info */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px', fontSize: '0.85rem', color: 'var(--text-secondary)', marginBottom: '10px' }}>
              <span style={{ display: 'inline-flex', alignItems: 'center', gap: '4px' }}>
                <MapPin size={13} color="#FF5864" />
                {currentProfile.city} • {currentProfile.distanceKm} km away
              </span>
              <span style={{ display: 'inline-flex', alignItems: 'center', gap: '4px' }}>
                <Briefcase size={13} />
                {currentProfile.jobTitle}
              </span>
            </div>

            {/* Interest Badges Pills (SKILL.md) */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginBottom: expandedBio ? '14px' : '0' }}>
              {currentProfile.interestTags.slice(0, expandedBio ? 6 : 3).map((tag) => (
                <span
                  key={tag}
                  style={{
                    fontSize: '0.75rem',
                    fontWeight: 600,
                    padding: '4px 10px',
                    borderRadius: 'var(--radius-pill)',
                    background: 'rgba(255, 255, 255, 0.1)',
                    backdropFilter: 'blur(8px)',
                    color: '#FFFFFF',
                    border: '1px solid rgba(255, 255, 255, 0.15)',
                  }}
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Expanded Bio & Prompt Box (SKILL.md) */}
            {expandedBio && (
              <div style={{ marginTop: '12px', paddingTop: '12px', borderTop: '1px solid rgba(255, 255, 255, 0.1)' }}>
                <p style={{ fontSize: '0.88rem', color: '#E5E7EB', marginBottom: '12px' }}>
                  {currentProfile.bio}
                </p>
                {currentProfile.prompts[0] && (
                  <div
                    style={{
                      background: 'rgba(255, 255, 255, 0.05)',
                      border: '1px solid rgba(255, 255, 255, 0.12)',
                      borderRadius: '12px',
                      padding: '10px 12px',
                    }}
                  >
                    <span style={{ fontSize: '0.72rem', textTransform: 'uppercase', color: 'var(--accent-cyan)', fontWeight: 700 }}>
                      {currentProfile.prompts[0].question}
                    </span>
                    <p style={{ fontSize: '0.85rem', color: '#FFFFFF', fontWeight: 500, marginTop: '2px' }}>
                      &ldquo;{currentProfile.prompts[0].answer}&rdquo;
                    </p>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Floating Action Controls Dock (SKILL.md Section 2 - 56x56 dp touch targets) */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '16px',
          marginTop: '24px',
          zIndex: 10,
        }}
      >
        {/* Rewind Button */}
        <button
          onClick={handleRewind}
          title="Rewind swipe"
          aria-label="Rewind"
          style={{
            width: '48px',
            height: '48px',
            borderRadius: '50%',
            backgroundColor: 'rgba(22, 25, 34, 0.9)',
            border: '1.5px solid rgba(245, 158, 11, 0.4)',
            color: '#F59E0B',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: '0 4px 15px rgba(245, 158, 11, 0.2)',
            transition: 'transform var(--transition-fast), background-color var(--transition-fast)',
          }}
          onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.1)')}
          onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
        >
          <RotateCcw size={20} />
        </button>

        {/* Pass Button (Nope) */}
        <button
          onClick={() => handleDecision('pass')}
          title="Pass profile"
          aria-label="Pass"
          style={{
            width: '60px',
            height: '60px',
            borderRadius: '50%',
            backgroundColor: 'rgba(22, 25, 34, 0.9)',
            border: '2px solid #FF4458',
            color: '#FF4458',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: '0 4px 20px rgba(255, 68, 88, 0.35)',
            transition: 'transform var(--transition-fast), background-color var(--transition-fast)',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'scale(1.1)';
            e.currentTarget.style.backgroundColor = 'rgba(255, 68, 88, 0.15)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'scale(1)';
            e.currentTarget.style.backgroundColor = 'rgba(22, 25, 34, 0.9)';
          }}
        >
          <X size={28} strokeWidth={2.8} />
        </button>

        {/* Super Like Button */}
        <button
          onClick={() => handleDecision('superlike')}
          title="Super Like"
          aria-label="Super Like"
          style={{
            width: '50px',
            height: '50px',
            borderRadius: '50%',
            backgroundColor: 'rgba(22, 25, 34, 0.9)',
            border: '1.5px solid #00C9FF',
            color: '#00C9FF',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: '0 4px 18px rgba(0, 201, 255, 0.3)',
            transition: 'transform var(--transition-fast), background-color var(--transition-fast)',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'scale(1.1)';
            e.currentTarget.style.backgroundColor = 'rgba(0, 201, 255, 0.15)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'scale(1)';
            e.currentTarget.style.backgroundColor = 'rgba(22, 25, 34, 0.9)';
          }}
        >
          <Star size={24} fill="#00C9FF" />
        </button>

        {/* Like Button */}
        <button
          onClick={() => handleDecision('like')}
          title="Like profile"
          aria-label="Like"
          style={{
            width: '60px',
            height: '60px',
            borderRadius: '50%',
            backgroundColor: 'rgba(22, 25, 34, 0.9)',
            border: '2px solid #10B981',
            color: '#10B981',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: '0 4px 20px rgba(16, 185, 129, 0.35)',
            transition: 'transform var(--transition-fast), background-color var(--transition-fast)',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'scale(1.1)';
            e.currentTarget.style.backgroundColor = 'rgba(16, 185, 129, 0.15)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'scale(1)';
            e.currentTarget.style.backgroundColor = 'rgba(22, 25, 34, 0.9)';
          }}
        >
          <Heart size={28} fill="#10B981" />
        </button>

        {/* Boost Button */}
        <button
          onClick={handleBoost}
          title={boostActive ? "Miloo Profile Boost Active (30m)" : "Activate Profile Boost"}
          aria-label="Boost Profile"
          style={{
            width: '48px',
            height: '48px',
            borderRadius: '50%',
            backgroundColor: boostActive ? 'rgba(168, 85, 247, 0.25)' : 'rgba(22, 25, 34, 0.9)',
            border: boostActive ? '2px solid #A855F7' : '1.5px solid rgba(168, 85, 247, 0.4)',
            color: '#A855F7',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: boostActive
              ? '0 0 22px rgba(168, 85, 247, 0.75), inset 0 0 10px rgba(168, 85, 247, 0.4)'
              : '0 4px 15px rgba(168, 85, 247, 0.2)',
            transition: 'transform var(--transition-fast), background-color var(--transition-fast)',
            animation: boostActive ? 'boostGlowPulse 2s infinite ease-in-out' : 'none',
          }}
          onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.1)')}
          onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
        >
          <Zap size={20} fill={boostActive ? "#D946EF" : "#A855F7"} color={boostActive ? "#FFFFFF" : "#A855F7"} />
        </button>
      </div>

      {/* Reciprocal Match Modal */}
      {matchedPartner && (
        <MatchCelebrationModal
          partner={matchedPartner}
          isOpen={showMatchModal}
          onClose={() => setShowMatchModal(false)}
        />
      )}
    </div>
  );
}
