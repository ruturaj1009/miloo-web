'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Crown, Sparkles, Check, X, ArrowRight, ShieldCheck, Heart } from 'lucide-react';
import { PRICING_PLANS } from '@/data/landingData';

export default function PremiumPage() {
  const [isAnnual, setIsAnnual] = useState(true);

  const perks = [
    { title: 'Unlimited Likes', basic: '50 / day', gold: 'Unlimited', plat: 'Unlimited' },
    { title: 'Rewind Last Swipe', basic: false, gold: true, plat: true },
    { title: 'See Who Liked You', basic: false, gold: true, plat: true },
    { title: 'Weekly Superlikes', basic: '0', gold: '5 / week', plat: '10 / week' },
    { title: 'Free Monthly Boost', basic: false, gold: '1 / month', plat: '2 / month' },
    { title: 'Virtual Video Dates', basic: '10 min demo', gold: '30 min / day', plat: 'Unlimited HD' },
    { title: 'Message Before Matching', basic: false, gold: false, plat: true },
    { title: 'Priority Profile Delivery', basic: false, gold: false, plat: true },
    { title: 'Incognito Stealth Browsing', basic: false, gold: false, plat: true },
    { title: 'Global Travel Passport', basic: false, gold: false, plat: true },
    { title: 'VIP Gold Member Badge', basic: false, gold: true, plat: true },
  ];

  return (
    <div style={{ paddingTop: 'calc(var(--nav-height) + 40px)', paddingBottom: '100px' }}>
      <div className="container">
        {/* Header */}
        <div className="section-header" style={{ maxWidth: '820px' }}>
          <div className="section-tag" style={{ background: 'rgba(245, 158, 11, 0.1)', borderColor: 'rgba(245, 158, 11, 0.3)', color: '#F59E0B' }}>
            <Crown size={16} />
            <span>Miloo Premium Tiers</span>
          </div>
          <h1 className="section-title">
            Supercharge Your <br />
            <span className="text-gradient-gold">Romance Potential</span>
          </h1>
          <p className="section-subtitle">
            Upgrade to Miloo Gold or Platinum to see who liked you, rewind accidental passes, and unlock priority matching.
          </p>

          {/* Billing Switch */}
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '12px',
              marginTop: '32px',
              padding: '6px',
              borderRadius: 'var(--radius-pill)',
              backgroundColor: 'rgba(255, 255, 255, 0.06)',
              border: '1px solid var(--glass-border)',
            }}
          >
            <button
              onClick={() => setIsAnnual(false)}
              style={{
                padding: '8px 20px',
                borderRadius: 'var(--radius-pill)',
                backgroundColor: !isAnnual ? 'rgba(255, 255, 255, 0.15)' : 'transparent',
                color: !isAnnual ? '#FFFFFF' : 'var(--text-secondary)',
                fontWeight: 600,
                fontSize: '0.9rem',
              }}
            >
              Monthly
            </button>
            <button
              onClick={() => setIsAnnual(true)}
              style={{
                padding: '8px 20px',
                borderRadius: 'var(--radius-pill)',
                backgroundColor: isAnnual ? 'var(--gradient-brand)' : 'transparent',
                color: '#FFFFFF',
                fontWeight: 600,
                fontSize: '0.9rem',
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
              }}
            >
              <span>Annual</span>
              <span style={{ fontSize: '0.72rem', fontWeight: 800, backgroundColor: '#10B981', color: '#0F1115', padding: '2px 8px', borderRadius: '10px' }}>
                50% OFF
              </span>
            </button>
          </div>
        </div>

        {/* Pricing Cards */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '30px',
            marginBottom: '80px',
          }}
        >
          {PRICING_PLANS.map((plan) => {
            const price = isAnnual ? plan.priceAnnualMonthly : plan.priceMonthly;
            return (
              <div
                key={plan.id}
                className="glass-card"
                style={{
                  padding: '36px 30px',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  borderRadius: 'var(--radius-card)',
                  borderColor: plan.popular ? 'var(--brand-primary)' : 'var(--glass-border)',
                }}
              >
                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
                    <h2 style={{ fontSize: '1.5rem', fontWeight: 800, color: '#FFFFFF' }}>{plan.name}</h2>
                    {plan.badge && (
                      <span className="badge-pill badge-coral" style={{ fontSize: '0.75rem' }}>
                        {plan.badge}
                      </span>
                    )}
                  </div>
                  <p style={{ fontSize: '0.88rem', color: 'var(--text-secondary)', marginBottom: '20px' }}>{plan.tagline}</p>

                  <div style={{ display: 'flex', alignItems: 'baseline', gap: '4px', marginBottom: '24px' }}>
                    <span style={{ fontSize: '1.6rem', fontWeight: 700, color: 'var(--text-muted)' }}>$</span>
                    <span style={{ fontSize: '3rem', fontWeight: 900, color: '#FFFFFF' }}>{price}</span>
                    <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>/ month</span>
                  </div>

                  <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '32px' }}>
                    {plan.features.slice(0, 5).map((f, i) => (
                      <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '0.88rem', color: f.included ? '#FFFFFF' : 'var(--text-muted)' }}>
                        {f.included ? <Check size={16} color="#10B981" /> : <X size={16} color="var(--text-muted)" />}
                        <span style={{ textDecoration: f.included ? 'none' : 'line-through' }}>{f.text}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <Link href="/#download" className={plan.popular ? 'btn-primary' : 'btn-secondary'} style={{ padding: '12px', fontSize: '0.92rem', justifyContent: 'center' }}>
                  <span>{plan.ctaText}</span>
                  <ArrowRight size={16} />
                </Link>
              </div>
            );
          })}
        </div>

        {/* Detailed Feature Comparison Table */}
        <div className="glass-panel" style={{ padding: '40px', borderRadius: 'var(--radius-card)', marginBottom: '80px', overflowX: 'auto' }}>
          <h2 style={{ fontSize: '1.6rem', fontWeight: 800, color: '#FFFFFF', marginBottom: '24px' }}>
            Comprehensive Feature Matrix
          </h2>

          <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', minWidth: '600px' }}>
            <thead>
              <tr style={{ borderBottom: '1px solid var(--glass-border)' }}>
                <th style={{ padding: '16px', color: 'var(--text-muted)', fontSize: '0.88rem', fontWeight: 700 }}>FEATURE</th>
                <th style={{ padding: '16px', color: '#FFFFFF', fontSize: '0.95rem', fontWeight: 800 }}>BASIC</th>
                <th style={{ padding: '16px', color: 'var(--brand-primary)', fontSize: '0.95rem', fontWeight: 800 }}>MILOO GOLD</th>
                <th style={{ padding: '16px', color: '#F59E0B', fontSize: '0.95rem', fontWeight: 800 }}>MILOO PLATINUM</th>
              </tr>
            </thead>
            <tbody>
              {perks.map((p, idx) => (
                <tr key={idx} style={{ borderBottom: '1px solid var(--glass-border-subtle)' }}>
                  <td style={{ padding: '16px', color: '#E5E7EB', fontSize: '0.9rem', fontWeight: 500 }}>{p.title}</td>
                  <td style={{ padding: '16px', color: 'var(--text-secondary)', fontSize: '0.88rem' }}>
                    {typeof p.basic === 'boolean' ? (p.basic ? <Check size={18} color="#10B981" /> : <X size={18} color="var(--text-muted)" />) : p.basic}
                  </td>
                  <td style={{ padding: '16px', color: '#FFFFFF', fontSize: '0.88rem', fontWeight: 600 }}>
                    {typeof p.gold === 'boolean' ? (p.gold ? <Check size={18} color="#10B981" /> : <X size={18} color="var(--text-muted)" />) : p.gold}
                  </td>
                  <td style={{ padding: '16px', color: '#FFFFFF', fontSize: '0.88rem', fontWeight: 700 }}>
                    {typeof p.plat === 'boolean' ? (p.plat ? <Check size={18} color="#10B981" /> : <X size={18} color="var(--text-muted)" />) : p.plat}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Guarantee Banner */}
        <div style={{ textAlign: 'center', maxWidth: '600px', margin: '0 auto' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', color: '#10B981', marginBottom: '10px', fontWeight: 600 }}>
            <ShieldCheck size={20} />
            <span>Cancel Anytime in App Store or Google Play</span>
          </div>
          <p style={{ fontSize: '0.88rem', color: 'var(--text-secondary)' }}>
            All subscriptions auto-renew at the selected interval until cancelled in your Apple App Store or Google Play account settings at least 24 hours prior to the cycle end.
          </p>
        </div>
      </div>
    </div>
  );
}
