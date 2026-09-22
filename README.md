# Miloo — Next-Gen Dating App Web Platform

<div align="center">

![Miloo Banner](https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=1200&q=80)

### *Chemistry, Not Just Matches.*

A modern, high-performance web platform and landing experience for **Miloo** — the next-generation dating app engineered for authentic chemistry, fluid motion, verified profiles, and in-app video dates.

[![Next.js](https://img.shields.io/badge/Next.js-16.3.6_(Turbopack)-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19.2-blue?style=for-the-badge&logo=react)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-3178C6?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)
[![Status](https://img.shields.io/badge/Production-Ready-10B981?style=for-the-badge)](https://miloo.app)

</div>

---

## ✨ Features & Experience

- **Interactive Discovery Deck:** Interactive card deck with smooth swipe simulation, gesture hints, and an animated profile boost system with particle confetti.
- **Mission Showcase & Philosophy:** Creative philosophy section with interactive lifestyle cards featuring depth-of-field focus and blur effects on hover.
- **Interactive Phone Tour Viewer:** Live in-browser smartphone demo showcasing the real Miloo mobile UI, instant chat, and match feed.
- **Spotlight Love Stories & Dedicated Gallery:** Single authentic spotlight story on the homepage with an expansive gallery on `/stories`.
- **Smart QR Code Access Pass:** High-density vector QR code (Level H Reed-Solomon error correction) with an optical viewfinder reticle, dynamic laser sweep animation, and embedded Miloo flame core.
- **Dedicated Route Directory:** Full suite of production routes including Features, Stories, Pricing/Premium, Safety Center, Careers (with Hiring badge), Support, and Legal.
- **Production SEO & PWA:** Built-in dynamic XML Sitemap (`/sitemap.xml`), Robots configuration (`/robots.txt`), Web App Manifest (`/manifest.webmanifest`), and high-res vector favicon generator (`/icon`).

---

## 🛠️ Technology Stack

| Layer | Technology |
| :--- | :--- |
| **Framework** | [Next.js 16](https://nextjs.org) (App Router, Turbopack) |
| **Core** | [React 19](https://react.dev) + [TypeScript 5](https://www.typescriptlang.org) |
| **Styling** | Vanilla CSS Design System with CSS Tokens (Deep Obsidian `#0F1115`, Coral `#FF4458`, Electric Violet `#7C3AED`) |
| **Icons & VFX** | [Lucide React](https://lucide.dev), [Canvas Confetti](https://www.npmjs.com/package/canvas-confetti) |
| **QR Engine** | Authentic high-density SVG matrix with Level H recovery |

---

## 📁 Project Structure

```
web/
├── public/
│   └── images/                # AI-generated lifestyle & spotlight couple photography
├── src/
│   ├── app/                   # Next.js App Router (18 routes)
│   │   ├── about/             # Mission & team story
│   │   ├── careers/           # Open job positions & benefits
│   │   ├── contact/           # Customer support with FAQ accordion
│   │   ├── features/          # Deep dive into Core Features & Video Dates
│   │   ├── premium/           # Subscription tiers & boost passes
│   │   ├── press/             # Brand assets & press releases
│   │   ├── privacy/           # Privacy policy & GDPR/CCPA disclosures
│   │   ├── safety/            # Trust & safety center, 3D verification guide
│   │   ├── stories/           # Member love stories & milestone gallery
│   │   ├── support/           # Help center with categorized FAQ accordion
│   │   ├── terms/             # Terms of service
│   │   ├── icon.tsx           # Dynamic vector favicon / touch icon generator
│   │   ├── layout.tsx         # Root layout with OpenGraph, SEO & Fonts
│   │   ├── manifest.ts        # PWA Web App Manifest
│   │   ├── page.tsx           # Primary conversion landing page
│   │   ├── robots.ts          # Search engine crawler instructions
│   │   └── sitemap.ts         # Dynamic SEO sitemap generator
│   ├── components/
│   │   ├── home/              # Landing page modules (Hero, Showcase, Tour, FAQ, CTA)
│   │   └── layout/            # Universal Navbar & Glassmorphic Footer
│   └── styles/
│       └── globals.css        # Color tokens, typography, glassmorphic utilities
├── .env.example               # Environment variables template
├── .gitignore                 # Production-grade git ignore rules
├── next.config.ts             # Hardened security headers, image optimization & compression
├── package.json               # Dependencies & build scripts
└── tsconfig.json              # Strict TypeScript compiler options
```

---

## 🚀 Getting Started

### Prerequisites

- **Node.js**: `v18.18.0` or higher
- **npm**, **yarn**, or **pnpm**

### Installation

1. Navigate to the `web` directory:
   ```bash
   cd web
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Setup environment configuration:
   ```bash
   cp .env.example .env.local
   ```

4. Start the local development server:
   ```bash
   npm run dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 🧪 Production Build & Verification

To compile the optimized production bundle:

```bash
# Build production bundle with TypeScript check & static page generation
npm run build

# Run the production server locally
npm start
```

All 18 routes are prerendered as static HTML/JSON with fast load times and SEO optimization.

---

## 🌐 Deployment

The web app is optimized for seamless zero-config deployment on:
- **Vercel:** Import repository, set root directory to `web`, and deploy.
- **Node.js / Docker:** Standard Next.js standalone output.
- **AWS / Cloudflare / Netlify:** Supported via standard Next.js adapters.

---

## 📄 License

© 2026 Miloo Inc. All rights reserved.
Crafted with ♥ for authentic connection.
