'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Flame, Menu, X, ArrowRight, ShieldCheck, Sparkles, Download } from 'lucide-react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Discover', href: '/#discover' },
    { name: 'Features', href: '/features' },
    { name: 'Safety', href: '/safety' },
    { name: 'Stories', href: '/stories' },
    { name: 'About', href: '/about' },
    { name: 'Careers', href: '/careers' },
  ];

  return (
    <>
      <header
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 1000,
          height: 'var(--nav-height)',
          transition: 'all 0.3s ease',
          backgroundColor: scrolled ? 'rgba(15, 17, 21, 0.88)' : 'transparent',
          backdropFilter: scrolled ? 'blur(16px)' : 'none',
          WebkitBackdropFilter: scrolled ? 'blur(16px)' : 'none',
          borderBottom: scrolled ? '1px solid var(--glass-border)' : '1px solid transparent',
        }}
      >
        <div
          className="container"
          style={{
            height: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          {/* Brand Logo */}
          <Link
            href="/"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
              textDecoration: 'none',
            }}
          >
            <div
              style={{
                width: '42px',
                height: '42px',
                borderRadius: '12px',
                background: 'var(--gradient-brand)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: '0 4px 18px rgba(255, 68, 88, 0.45)',
              }}
            >
              <Flame size={24} color="#FFFFFF" strokeWidth={2.5} />
            </div>
            <span
              style={{
                fontFamily: 'Outfit, sans-serif',
                fontSize: '1.65rem',
                fontWeight: 800,
                letterSpacing: '-0.03em',
                background: 'var(--gradient-brand)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              miloo
            </span>
          </Link>

          {/* Desktop Navigation Links */}
          <nav
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '32px',
            }}
            className="desktop-nav"
          >
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  style={{
                    fontSize: '0.95rem',
                    fontWeight: 500,
                    color: isActive ? '#FFFFFF' : 'var(--text-secondary)',
                    transition: 'color var(--transition-fast)',
                    position: 'relative',
                    padding: '6px 0',
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = '#FFFFFF')}
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.color = isActive ? '#FFFFFF' : 'var(--text-secondary)')
                  }
                >
                  {link.name}
                  {isActive && (
                    <span
                      style={{
                        position: 'absolute',
                        bottom: 0,
                        left: 0,
                        right: 0,
                        height: '2px',
                        borderRadius: '2px',
                        background: 'var(--gradient-brand)',
                      }}
                    />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Actions & Mobile Menu Toggle */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '16px',
            }}
          >
            {/* Mobile Hamburger Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="mobile-toggle"
              aria-label="Toggle Navigation Menu"
              style={{
                display: 'none',
                padding: '8px',
                color: 'var(--text-primary)',
              }}
            >
              {mobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div
          style={{
            position: 'fixed',
            top: 'var(--nav-height)',
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(15, 17, 21, 0.98)',
            backdropFilter: 'blur(20px)',
            zIndex: 999,
            display: 'flex',
            flexDirection: 'column',
            padding: '32px 24px',
            gap: '24px',
          }}
        >
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              style={{
                fontSize: '1.25rem',
                fontWeight: 600,
                color: pathname === link.href ? 'var(--brand-primary)' : 'var(--text-primary)',
                padding: '12px 0',
                borderBottom: '1px solid var(--glass-border-subtle)',
              }}
            >
              {link.name}
            </Link>
          ))}
          <Link
            href="/#download"
            onClick={() => setMobileMenuOpen(false)}
            className="btn-primary"
            style={{
              marginTop: '16px',
              padding: '16px',
              justifyContent: 'center',
            }}
          >
            <Download size={18} />
            <span>Download Miloo Free</span>
          </Link>
        </div>
      )}

      <style jsx global>{`
        @media (max-width: 868px) {
          .desktop-nav {
            display: none !important;
          }
          .mobile-toggle {
            display: flex !important;
          }
        }
      `}</style>
    </>
  );
}
