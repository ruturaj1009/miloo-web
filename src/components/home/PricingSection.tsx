'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Check, X, Sparkles, Crown, Zap, ArrowRight } from 'lucide-react';
import { PRICING_PLANS } from '@/data/landingData';

export default function PricingSection() {
  const [isAnnual, setIsAnnual] = useState(true);

  return (
    <section className="section" id="pricing">
      <div className="container">
        <div className="section-header">
          <div className="section-tag">
            <Crown size={16} />
            <span>Elevate Your Experience</span>
          </div>
          <h2 className="section-title">
            Simple, Transparent <span className="text-gradient-gold">Memberships</span>
          </h2>
          <p className="section-subtitle">
            Start completely free or unlock unlimited rewinds, priority delivery, and virtual video dating passes.
          </p>

          {/* Billing Switch */}
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '12px',
              marginTop: '28px',
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
                transition: 'all var(--transition-fast)',
              }}
            >
              Monthly Billing
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
                transition: 'all var(--transition-fast)',
              }}
            >
              <span>Annual Billing</span>
              <span
                style={{
                  fontSize: '0.72rem',
                  fontWeight: 800,
                  backgroundColor: '#10B981',
                  color: '#0F1115',
                  padding: '2px 8px',
                  borderRadius: '10px',
                }}
              >
                SAVE 50%
              </span>
            </button>
          </div>
        </div>

        {/* Pricing Cards Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '30px',
            alignItems: 'stretch',
          }}
        >
          {PRICING_PLANS.map((plan) => {
            const price = isAnnual ? plan.priceAnnualMonthly : plan.priceMonthly;
            const isFeatured = plan.featured;

            return (
              <div
                key={plan.id}
                className="glass-card"
                style={{
                  padding: '40px 32px',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  position: 'relative',
                  borderColor: isFeatured ? 'rgba(255, 68, 88, 0.45)' : 'var(--glass-border)',
                  boxShadow: isFeatured ? '0 15px 40px rgba(255, 68, 88, 0.2)' : 'var(--shadow-md)',
                  transform: isFeatured ? 'scale(1.02)' : 'none',
                }}
              >
                {/* Popular or VIP Badge */}
                {plan.badge && (
                  <div
                    style={{
                      position: 'absolute',
                      top: '-14px',
                      left: '50%',
                      transform: 'translateX(-50%)',
                      background: plan.id === 'gold' ? 'var(--gradient-brand)' : 'var(--gradient-gold)',
                      color: plan.id === 'gold' ? '#FFFFFF' : '#0F1115',
                      padding: '4px 18px',
                      borderRadius: 'var(--radius-pill)',
                      fontSize: '0.75rem',
                      fontWeight: 800,
                      letterSpacing: '0.05em',
                      textTransform: 'uppercase',
                      boxShadow: '0 4px 15px rgba(0, 0, 0, 0.4)',
                    }}
                  >
                    {plan.badge}
                  </div>
                )}

                <div>
                  <h3 style={{ fontSize: '1.6rem', fontWeight: 800, marginBottom: '6px', color: '#FFFFFF' }}>
                    {plan.name}
                  </h3>
                  <p style={{ fontSize: '0.88rem', color: 'var(--text-secondary)', marginBottom: '24px' }}>
                    {plan.tagline}
                  </p>

                  {/* Price */}
                  <div style={{ display: 'flex', alignItems: 'baseline', gap: '6px', marginBottom: '28px' }}>
                    <span style={{ fontSize: '1.8rem', fontWeight: 700, color: 'var(--text-secondary)' }}>$</span>
                    <span style={{ fontSize: '3.4rem', fontWeight: 900, color: '#FFFFFF', lineHeight: 1 }}>
                      {price}
                    </span>
                    <span style={{ fontSize: '0.92rem', color: 'var(--text-muted)' }}>
                      / month {isAnnual && price > 0 && '(billed annually)'}
                    </span>
                  </div>

                  {/* Feature Checklist */}
                  <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '14px', marginBottom: '36px' }}>
                    {plan.features.map((feat, idx) => (
                      <li
                        key={idx}
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: '12px',
                          fontSize: '0.9rem',
                          color: feat.included ? '#FFFFFF' : 'var(--text-muted)',
                        }}
                      >
                        {feat.included ? (
                          <div
                            style={{
                              width: '20px',
                              height: '20px',
                              borderRadius: '50%',
                              backgroundColor: 'rgba(16, 185, 129, 0.2)',
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                              flexShrink: 0,
                            }}
                          >
                            <Check size={13} color="#10B981" strokeWidth={3} />
                          </div>
                        ) : (
                          <div
                            style={{
                              width: '20px',
                              height: '20px',
                              borderRadius: '50%',
                              backgroundColor: 'rgba(255, 255, 255, 0.05)',
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                              flexShrink: 0,
                            }}
                          >
                            <X size={12} color="var(--text-muted)" />
                          </div>
                        )}
                        <span style={{ textDecoration: feat.included ? 'none' : 'line-through' }}>
                          {feat.text}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                <Link
                  href="/#download"
                  className={isFeatured ? 'btn-primary' : 'btn-secondary'}
                  style={{
                    padding: '14px',
                    fontSize: '0.95rem',
                    justifyContent: 'center',
                  }}
                >
                  <span>{plan.ctaText}</span>
                  <ArrowRight size={16} />
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
