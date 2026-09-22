import type { Metadata, Viewport } from 'next';
import { Outfit, Plus_Jakarta_Sans } from 'next/font/google';
import '@/styles/globals.css';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

const outfit = Outfit({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-outfit',
  weight: ['400', '500', '600', '700', '800', '900'],
});

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-plus-jakarta',
  weight: ['400', '500', '600', '700'],
});

export const viewport: Viewport = {
  themeColor: '#0F1115',
  width: 'device-width',
  initialScale: 1,
};

export const metadata: Metadata = {
  title: 'Miloo — Chemistry, Not Just Matches | Next-Gen Dating App',
  description:
    'Experience Miloo: the next-generation dating app engineered for real human connection, fluid swipe motion, verified authentic profiles, and in-app video dates.',
  keywords: [
    'Miloo',
    'dating app',
    'swiping app',
    'video dating',
    'verified dating',
    'matchmaking',
    'singles',
    'relationships',
    'real-time chat',
  ],
  authors: [{ name: 'Miloo Team' }],
  openGraph: {
    title: 'Miloo — Chemistry, Not Just Matches',
    description:
      'Fluid swipe motion, 3D biometric selfie verification, and private in-app video dating.',
    url: 'https://miloo.app',
    siteName: 'Miloo Dating App',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=1200&q=80',
        width: 1200,
        height: 630,
        alt: 'Miloo Dating App Preview',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Miloo — Chemistry, Not Just Matches',
    description: 'Next-gen dating with fluid swipe motion and private video dates.',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${outfit.variable} ${plusJakartaSans.variable}`}
      data-scroll-behavior="smooth"
    >
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}

