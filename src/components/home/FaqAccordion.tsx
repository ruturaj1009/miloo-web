'use client';

import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';
import { FAQS } from '@/data/landingData';

export default function FaqAccordion() {
  const [openId, setOpenId] = useState<string | null>('f1');

  const toggle = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section className="section" id="faq">
      <div className="container">
        <div className="section-header">
          <div className="section-tag">
            <HelpCircle size={16} />
            <span>Got Questions?</span>
          </div>
          <h2 className="section-title">
            Frequently Asked <span className="text-gradient-brand">Questions</span>
          </h2>
          <p className="section-subtitle">
            Everything you need to know about Miloo, verification, safety guidelines, and premium features.
          </p>
        </div>

        <div style={{ maxWidth: '800px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '14px' }}>
          {FAQS.map((faq) => {
            const isOpen = openId === faq.id;
            return (
              <div
                key={faq.id}
                className="glass-card"
                style={{
                  borderRadius: 'var(--radius-md)',
                  overflow: 'hidden',
                  borderColor: isOpen ? 'var(--brand-primary)' : 'var(--glass-border)',
                  transition: 'border-color var(--transition-fast)',
                }}
              >
                <button
                  onClick={() => toggle(faq.id)}
                  style={{
                    width: '100%',
                    padding: '22px 24px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    textAlign: 'left',
                    color: '#FFFFFF',
                    fontWeight: 700,
                    fontSize: '1.05rem',
                    gap: '16px',
                  }}
                  aria-expanded={isOpen}
                >
                  <span>{faq.question}</span>
                  <div
                    style={{
                      transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                      transition: 'transform var(--transition-fast)',
                      color: isOpen ? 'var(--brand-primary)' : 'var(--text-muted)',
                      flexShrink: 0,
                    }}
                  >
                    <ChevronDown size={20} />
                  </div>
                </button>

                {isOpen && (
                  <div
                    style={{
                      padding: '0 24px 22px 24px',
                      color: 'var(--text-secondary)',
                      fontSize: '0.95rem',
                      lineHeight: 1.7,
                      borderTop: '1px solid var(--glass-border-subtle)',
                      paddingTop: '16px',
                    }}
                  >
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
