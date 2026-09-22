'use client';

import React, { useState } from 'react';
import type { Metadata } from 'next';
import { Mail, MessageSquare, Clock, ShieldAlert, Send, CheckCircle2, HelpCircle } from 'lucide-react';
import FaqAccordion from '@/components/home/FaqAccordion';

export default function ContactPage() {
  const [category, setCategory] = useState('account');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
    }, 3000);
  };

  return (
    <div style={{ paddingTop: 'calc(var(--nav-height) + 40px)', paddingBottom: '100px' }}>
      <div className="container">
        {/* Header */}
        <div className="section-header" style={{ maxWidth: '820px' }}>
          <div className="section-tag">
            <Mail size={16} />
            <span>Support & Help Center</span>
          </div>
          <h1 className="section-title">
            How Can We <span className="text-gradient-brand">Help You?</span>
          </h1>
          <p className="section-subtitle">
            Whether you have a question about your account, want to report a safety concern, or have product feedback, our concierge team is here for you.
          </p>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '50px',
            alignItems: 'flex-start',
            marginBottom: '60px',
          }}
        >
          {/* Left Column: Contact Methods & Live Status */}
          <div>
            <div className="glass-card" style={{ padding: '36px', marginBottom: '24px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', color: '#10B981', fontSize: '0.88rem', fontWeight: 700, marginBottom: '16px' }}>
                <Clock size={18} />
                <span>Live Concierge Status: ONLINE</span>
              </div>
              <h2 style={{ fontSize: '1.4rem', fontWeight: 800, color: '#FFFFFF', marginBottom: '12px' }}>
                Average Response Time &lt; 1 Hour
              </h2>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.92rem', lineHeight: 1.6, marginBottom: '24px' }}>
                Our global trust & support team operates 24/7 across San Francisco, London, and Tokyo hubs to prioritize user safety and account inquiries.
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', fontSize: '0.9rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <div style={{ width: '36px', height: '36px', borderRadius: '50%', background: 'rgba(255, 68, 88, 0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <ShieldAlert size={18} color="#FF4458" />
                  </div>
                  <div>
                    <div style={{ fontWeight: 700, color: '#FFFFFF' }}>Safety & Urgent Reports</div>
                    <div style={{ color: 'var(--text-secondary)' }}>safety@miloo.app (Immediate Queue)</div>
                  </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <div style={{ width: '36px', height: '36px', borderRadius: '50%', background: 'rgba(0, 201, 255, 0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <HelpCircle size={18} color="#00C9FF" />
                  </div>
                  <div>
                    <div style={{ fontWeight: 700, color: '#FFFFFF' }}>General & Billing Inquiries</div>
                    <div style={{ color: 'var(--text-secondary)' }}>support@miloo.app</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Ticket Form */}
          <div className="glass-panel" style={{ padding: '40px', borderRadius: 'var(--radius-card)' }}>
            {submitted ? (
              <div style={{ textAlign: 'center', padding: '40px 0' }}>
                <CheckCircle2 size={56} color="#10B981" style={{ margin: '0 auto 16px auto' }} />
                <h3 style={{ fontSize: '1.5rem', fontWeight: 800, color: '#FFFFFF' }}>Ticket Submitted!</h3>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.92rem', marginTop: '8px' }}>
                  Ticket #ML-{Math.floor(100000 + Math.random() * 900000)} has been created. A support specialist will respond to your email shortly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                <h2 style={{ fontSize: '1.4rem', fontWeight: 800, color: '#FFFFFF' }}>
                  Submit a Support Request
                </h2>

                <div>
                  <label style={{ display: 'block', fontSize: '0.85rem', color: 'var(--text-secondary)', marginBottom: '8px' }}>
                    What can we help you with?
                  </label>
                  <select
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    style={{
                      width: '100%',
                      padding: '12px 16px',
                      background: 'rgba(255, 255, 255, 0.06)',
                      border: '1px solid var(--glass-border)',
                      borderRadius: '12px',
                      color: '#FFFFFF',
                      outline: 'none',
                    }}
                  >
                    <option value="account" style={{ background: '#161922' }}>Account & Verification Issues</option>
                    <option value="safety" style={{ background: '#161922' }}>Report a Profile or Safety Concern</option>
                    <option value="billing" style={{ background: '#161922' }}>Billing, Gold & Platinum Memberships</option>
                    <option value="bug" style={{ background: '#161922' }}>Report a Bug or Video Call Issue</option>
                    <option value="press" style={{ background: '#161922' }}>Partnerships & Media</option>
                  </select>
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.85rem', color: 'var(--text-secondary)', marginBottom: '8px' }}>
                    Your Name
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="First & Last Name"
                    style={{
                      width: '100%',
                      padding: '12px 16px',
                      background: 'rgba(255, 255, 255, 0.06)',
                      border: '1px solid var(--glass-border)',
                      borderRadius: '12px',
                      color: '#FFFFFF',
                      outline: 'none',
                    }}
                  />
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.85rem', color: 'var(--text-secondary)', marginBottom: '8px' }}>
                    Email Address
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="email@example.com"
                    style={{
                      width: '100%',
                      padding: '12px 16px',
                      background: 'rgba(255, 255, 255, 0.06)',
                      border: '1px solid var(--glass-border)',
                      borderRadius: '12px',
                      color: '#FFFFFF',
                      outline: 'none',
                    }}
                  />
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.85rem', color: 'var(--text-secondary)', marginBottom: '8px' }}>
                    Message Details
                  </label>
                  <textarea
                    required
                    rows={4}
                    placeholder="Please describe your question or issue in detail..."
                    style={{
                      width: '100%',
                      padding: '12px 16px',
                      background: 'rgba(255, 255, 255, 0.06)',
                      border: '1px solid var(--glass-border)',
                      borderRadius: '12px',
                      color: '#FFFFFF',
                      outline: 'none',
                    }}
                  />
                </div>

                <button type="submit" className="btn-primary" style={{ padding: '14px', justifyContent: 'center' }}>
                  <Send size={16} />
                  <span>Send Request</span>
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Support FAQs */}
        <div style={{ marginTop: '40px' }}>
          <FaqAccordion />
        </div>
      </div>
    </div>
  );
}
