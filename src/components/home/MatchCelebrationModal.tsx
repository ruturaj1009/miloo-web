'use client';

import React, { useEffect, useState } from 'react';
import confetti from 'canvas-confetti';
import { Heart, Send, Sparkles, X, MessageCircle } from 'lucide-react';
import { DiscoveryProfile } from '@/data/mockProfiles';

interface MatchModalProps {
  partner: DiscoveryProfile;
  isOpen: boolean;
  onClose: () => void;
}

export default function MatchCelebrationModal({ partner, isOpen, onClose }: MatchModalProps) {
  const [message, setMessage] = useState('');
  const [sent, setSent] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setSent(false);
      setMessage(`Hey ${partner.name}! Loved your prompt on vinyl records 🎶`);
      
      // Trigger festive multi-burst confetti
      try {
        const count = 200;
        const defaults = {
          origin: { y: 0.65 },
          zIndex: 9999,
        };

        const fire = (particleRatio: number, opts: confetti.Options) => {
          confetti({
            ...defaults,
            ...opts,
            particleCount: Math.floor(count * particleRatio),
          });
        };

        fire(0.25, {
          spread: 26,
          startVelocity: 55,
          colors: ['#FF4458', '#FF5864', '#FF7A00'],
        });
        fire(0.2, {
          spread: 60,
          colors: ['#7C3AED', '#6366F1', '#A855F7'],
        });
        fire(0.35, {
          spread: 100,
          decay: 0.91,
          scalar: 0.8,
          colors: ['#00C9FF', '#10B981', '#FFFFFF'],
        });
        fire(0.1, {
          spread: 120,
          startVelocity: 25,
          decay: 0.92,
          scalar: 1.2,
          colors: ['#FF4458', '#00C9FF'],
        });
      } catch (e) {
        // Fallback gracefully if canvas is unavailable
      }
    }
  }, [isOpen, partner]);

  if (!isOpen) return null;

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    if (!message.trim()) return;
    setSent(true);
    setTimeout(() => {
      onClose();
    }, 1200);
  };

  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(15, 17, 21, 0.92)',
        backdropFilter: 'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)',
        zIndex: 9999,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '20px',
      }}
    >
      <div
        className="glass-panel"
        style={{
          width: '100%',
          maxWidth: '480px',
          padding: '40px 32px',
          textAlign: 'center',
          position: 'relative',
          borderRadius: 'var(--radius-modal)',
          border: '1px solid var(--glass-border-strong)',
          boxShadow: '0 24px 60px rgba(0, 0, 0, 0.8), 0 0 50px rgba(255, 68, 88, 0.25)',
          animation: 'modalPop 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
        }}
      >
        {/* Close Icon */}
        <button
          onClick={onClose}
          aria-label="Close modal"
          style={{
            position: 'absolute',
            top: '20px',
            right: '20px',
            width: '36px',
            height: '36px',
            borderRadius: '50%',
            background: 'rgba(255, 255, 255, 0.08)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'var(--text-secondary)',
          }}
        >
          <X size={20} />
        </button>

        {/* Floating Heart Badge */}
        <div
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            padding: '6px 16px',
            borderRadius: 'var(--radius-pill)',
            background: 'rgba(255, 68, 88, 0.15)',
            border: '1px solid rgba(255, 68, 88, 0.3)',
            color: '#FF5864',
            fontSize: '0.85rem',
            fontWeight: 700,
            marginBottom: '16px',
          }}
        >
          <Sparkles size={16} />
          <span>MUTUAL CHEMISTRY</span>
        </div>

        <h2
          style={{
            fontFamily: 'Outfit, sans-serif',
            fontSize: 'clamp(2.2rem, 5vw, 2.8rem)',
            fontWeight: 900,
            letterSpacing: '-0.03em',
            marginBottom: '8px',
            background: 'var(--gradient-brand)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }}
        >
          It&apos;s a Match!
        </h2>
        <p style={{ color: 'var(--text-secondary)', fontSize: '0.98rem', marginBottom: '32px' }}>
          You and <strong style={{ color: '#FFFFFF' }}>{partner.name}</strong> liked each other
        </p>

        {/* Overlapping Dual Avatars (SCR-04 Figma Blueprint) */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            marginBottom: '36px',
            position: 'relative',
          }}
        >
          {/* User Avatar */}
          <div
            style={{
              width: '100px',
              height: '100px',
              borderRadius: '50%',
              overflow: 'hidden',
              border: '3px solid #7C3AED',
              boxShadow: '0 8px 24px rgba(124, 58, 237, 0.45)',
              marginRight: '-20px',
              zIndex: 1,
            }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=400&q=80"
              alt="You"
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          </div>

          {/* Central Heart Icon Overlay */}
          <div
            style={{
              position: 'absolute',
              zIndex: 3,
              width: '40px',
              height: '40px',
              borderRadius: '50%',
              background: 'var(--gradient-brand)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 4px 15px rgba(255, 68, 88, 0.6)',
              border: '2px solid var(--bg-primary)',
            }}
          >
            <Heart size={20} color="#FFFFFF" fill="#FFFFFF" />
          </div>

          {/* Partner Avatar */}
          <div
            style={{
              width: '100px',
              height: '100px',
              borderRadius: '50%',
              overflow: 'hidden',
              border: '3px solid #FF4458',
              boxShadow: '0 8px 24px rgba(255, 68, 88, 0.45)',
              marginLeft: '-20px',
              zIndex: 2,
            }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={partner.photos[0]?.url}
              alt={partner.name}
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          </div>
        </div>

        {/* Message Input or Success confirmation */}
        {sent ? (
          <div
            style={{
              padding: '16px',
              borderRadius: 'var(--radius-md)',
              background: 'rgba(16, 185, 129, 0.15)',
              border: '1px solid rgba(16, 185, 129, 0.3)',
              color: '#10B981',
              fontWeight: 600,
              fontSize: '1rem',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '8px',
            }}
          >
            <Sparkles size={18} />
            <span>Message sent to {partner.name}!</span>
          </div>
        ) : (
          <form onSubmit={handleSend} style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
            <div style={{ position: 'relative' }}>
              <input
                type="text"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder={`Say something nice to ${partner.name}...`}
                style={{
                  width: '100%',
                  padding: '14px 48px 14px 18px',
                  background: 'rgba(255, 255, 255, 0.06)',
                  border: '1px solid var(--glass-border-strong)',
                  borderRadius: 'var(--radius-pill)',
                  color: '#FFFFFF',
                  fontSize: '0.95rem',
                  outline: 'none',
                }}
              />
              <button
                type="submit"
                aria-label="Send message"
                style={{
                  position: 'absolute',
                  right: '8px',
                  top: '50%',
                  transform: 'translateY(-50%)',
                  width: '36px',
                  height: '36px',
                  borderRadius: '50%',
                  background: 'var(--gradient-brand)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#FFFFFF',
                }}
              >
                <Send size={16} />
              </button>
            </div>

            <div style={{ display: 'flex', gap: '12px', marginTop: '6px' }}>
              <button
                type="button"
                onClick={onClose}
                className="btn-secondary"
                style={{
                  flex: 1,
                  padding: '12px',
                  fontSize: '0.9rem',
                  borderRadius: 'var(--radius-pill)',
                }}
              >
                Keep Swiping
              </button>
              <button
                type="submit"
                className="btn-primary"
                style={{
                  flex: 1,
                  padding: '12px',
                  fontSize: '0.9rem',
                  borderRadius: 'var(--radius-pill)',
                }}
              >
                <MessageCircle size={16} />
                <span>Send Chat</span>
              </button>
            </div>
          </form>
        )}
      </div>

      <style jsx>{`
        @keyframes modalPop {
          0% {
            opacity: 0;
            transform: scale(0.85);
          }
          100% {
            opacity: 1;
            transform: scale(1);
          }
        }
      `}</style>
    </div>
  );
}
