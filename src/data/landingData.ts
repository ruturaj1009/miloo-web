export interface StatItem {
  value: string;
  label: string;
  highlight?: string;
}

export interface FeatureItem {
  id: string;
  tag: string;
  title: string;
  description: string;
  badgeColor?: 'coral' | 'cyan' | 'emerald';
  icon: string;
  bullets: string[];
}

export interface AppPreviewTab {
  id: string;
  title: string;
  badge: string;
  description: string;
}

export interface PricingPlan {
  id: string;
  name: string;
  tagline: string;
  badge?: string;
  priceMonthly: number;
  priceAnnualMonthly: number;
  featured?: boolean;
  popular?: boolean;
  ctaText: string;
  features: {
    text: string;
    included: boolean;
  }[];
}

export interface Testimonial {
  id: string;
  names: string;
  location: string;
  duration: string;
  quote: string;
  storySnippet: string;
  photoUrl: string;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
  category: string;
}

export const LIVE_STATS: StatItem[] = [
  { value: '4.8★', label: 'App Store Rating', highlight: 'from 95K+ reviews' },
  { value: '12M+', label: 'Real Matches Made', highlight: 'worldwide in 2025' },
  { value: '99.4%', label: 'Selfie Verified', highlight: 'zero tolerance for bots' },
  { value: '100%', label: 'Safe Video Dates', highlight: 'no phone numbers shared' },
];

export const CORE_FEATURES: FeatureItem[] = [
  {
    id: 'fluid-deck',
    tag: 'Discovery',
    title: 'Intuitive Match Deck with Fluid Gestures',
    description: 'Designed for effortless browsing and instant photo exploration. Swipe profiles with natural fluid motion, photo stories, and instant visual feedback.',
    badgeColor: 'coral',
    icon: 'Flame',
    bullets: [
      'Segmented story indicators for multi-photo sets',
      'Tactile LIKE, NOPE, and SUPER LIKE responsive stamps',
      'Prompts and interest tag pills that spark genuine conversation',
    ],
  },
  {
    id: 'webrtc-dates',
    tag: 'Video Dates',
    title: 'Face-to-Face Video Dates',
    description: 'Check chemistry safely face-to-face before meeting in person. High-definition in-app video calling with selfie preview and easy one-tap controls.',
    badgeColor: 'cyan',
    icon: 'Video',
    bullets: [
      'Private HD video calling without sharing your phone number',
      'Interactive selfie camera preview to check your look',
      'Instant privacy blur & microphone safety controls',
    ],
  },
  {
    id: 'stomp-chat',
    tag: 'Real-Time Chat',
    title: 'Instant Messaging & Chemistry',
    description: 'Never miss a beat. Real-time typing bubbles, active online indicators, and instant read receipts keep your conversations fluid and engaging.',
    badgeColor: 'emerald',
    icon: 'MessageCircleHeart',
    bullets: [
      'Instant message delivery with zero lag or delay',
      'Live typing bubbles show when your match is replying',
      'Expressive conversation openers & quick reaction sends',
    ],
  },
  {
    id: 'trust-shield',
    tag: 'Safety & Trust',
    title: '3D AI Selfie Verification Shield',
    description: 'We believe real chemistry requires real humans. Our biometric selfie verification ensures 99.4% authenticated profiles, preventing catfishing and bot spam.',
    badgeColor: 'cyan',
    icon: 'ShieldCheck',
    bullets: [
      'Biometric 3D liveness match against uploaded photos',
      'Proactive anti-harassment detection and auto-flagging',
      'Zero-tolerance policy for fake accounts and impersonation',
    ],
  },
];

export const PRICING_PLANS: PricingPlan[] = [
  {
    id: 'free',
    name: 'Miloo Basic',
    tagline: 'Essential tools for discovering genuine matches nearby.',
    priceMonthly: 0,
    priceAnnualMonthly: 0,
    ctaText: 'Get Started Free',
    features: [
      { text: '50 Daily Discovery Likes', included: true },
      { text: 'Standard Location Discovery', included: true },
      { text: '1-on-1 Instant Messaging with Matches', included: true },
      { text: 'Basic Interest Badges & Prompts', included: true },
      { text: 'Rewind Last Swipe', included: false },
      { text: 'See Who Liked You', included: false },
      { text: 'Unlimited Likes & Superlikes', included: false },
      { text: 'HD Virtual Video Dates', included: false },
      { text: 'Incognito Browsing Mode', included: false },
    ],
  },
  {
    id: 'gold',
    name: 'Miloo Gold',
    tagline: 'Unlock full visibility and supercharge your matching rate.',
    badge: 'Most Popular',
    priceMonthly: 19.99,
    priceAnnualMonthly: 9.99,
    popular: true,
    featured: true,
    ctaText: 'Upgrade to Gold',
    features: [
      { text: 'Unlimited Discovery Likes', included: true },
      { text: 'See Everyone Who Liked You', included: true },
      { text: 'Unlimited Rewinds', included: true },
      { text: '5 Free Superlikes Every Week', included: true },
      { text: '1 Free Profile Boost per Month', included: true },
      { text: 'Read Receipts on All Messages', included: true },
      { text: 'HD Virtual Video Dates (30 min/day)', included: true },
      { text: 'Incognito Mode & Travel Passport', included: false },
      { text: 'VIP Priority Match Delivery', included: false },
    ],
  },
  {
    id: 'platinum',
    name: 'Miloo Platinum',
    tagline: 'The ultimate VIP experience for unmatched romance & privacy.',
    badge: 'VIP Elite',
    priceMonthly: 34.99,
    priceAnnualMonthly: 19.99,
    ctaText: 'Experience Platinum',
    features: [
      { text: 'Everything in Miloo Gold', included: true },
      { text: 'Priority Likes — seen first by potential matches', included: true },
      { text: 'Message Before Matching with Superlikes', included: true },
      { text: 'Unlimited HD Virtual Video Dates', included: true },
      { text: 'Global Travel Mode (Passport anywhere)', included: true },
      { text: 'Incognito Mode — browse completely private', included: true },
      { text: 'Advanced Personality & Lifestyle Filters', included: true },
      { text: 'Dedicated 24/7 VIP Concierge Support', included: true },
      { text: 'Exclusive VIP Gold Profile Badge', included: true },
    ],
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 't1',
    names: 'Maya & Julian',
    location: 'Brooklyn, New York',
    duration: 'Together 1.5 years',
    quote: 'Miloo’s prompt boxes were what made Julian stand out. We had a 2-hour video date through the app before our first coffee in Williamsburg!',
    storySnippet: 'Bonded over film photography and rare record hunting.',
    photoUrl: 'https://images.unsplash.com/photo-1522529599102-193c0d76b5b6?w=600&q=80',
  },
  {
    id: 't2',
    names: 'Kai & Sora',
    location: 'Shibuya, Tokyo',
    duration: 'Engaged after 10 months',
    quote: 'The selfie verification gave me peace of mind. When we matched and started voice calling, we knew right away that this was special.',
    storySnippet: 'Matched through mutual appreciation of jazz cafés and architecture.',
    photoUrl: 'https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?w=600&q=80',
  },
  {
    id: 't3',
    names: 'Daniel & Sarah',
    location: 'London, UK',
    duration: 'Together 2 years',
    quote: 'The swipe physics feel so fluid, and the app doesn’t feel like a spammy game. It’s elegant, high-contrast, and focused on real chemistry.',
    storySnippet: 'Met after Daniel sent an insightful answer to Sarah’s Sunday morning prompt.',
    photoUrl: 'https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?w=600&q=80',
  },
];

export const FAQS: FaqItem[] = [
  {
    id: 'f1',
    category: 'General',
    question: 'How does Miloo differ from Tinder and Bumble?',
    answer: 'While traditional apps encourage endless superficial swiping, Miloo is built around genuine chemistry and real human connection. We combine natural swipe discovery, rich personality prompts, verified photo profiles, instant messaging, and safe built-in video dates so you can gauge a true spark before meeting in person.',
  },
  {
    id: 'f2',
    category: 'Safety',
    question: 'How does Miloo verify user profiles?',
    answer: 'Every profile on Miloo undergoes biometric 3D selfie verification. The user follows brief head-movement prompts that are analyzed by our AI verification model to match the facial features in their uploaded photos. Only authenticated accounts receive the verified blue checkmark.',
  },
  {
    id: 'f3',
    category: 'Features',
    question: 'Can I do video calls without sharing my personal phone number?',
    answer: 'Yes! Miloo includes seamless audio and video calling built right into your match chat. Your phone number, personal email, and exact location remain 100% private and protected.',
  },
  {
    id: 'f4',
    category: 'Membership',
    question: 'Can I use Miloo for free?',
    answer: 'Absolutely. Miloo Basic is 100% free forever and includes 50 daily likes, location-based discovery, instant messaging, profile builder, and verified badge support. Upgrading to Gold or Platinum provides premium perks like unlimited rewinds, priority delivery, and who liked you visibility.',
  },
  {
    id: 'f5',
    category: 'Privacy',
    question: 'Does Miloo sell my personal data or location?',
    answer: 'Never. We do not sell your personal data, location traces, or chat history to third-party data brokers or advertisers. All video calls and chat messages are encrypted and private.',
  },
];
