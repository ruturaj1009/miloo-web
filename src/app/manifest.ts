import type { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Miloo — Next-Gen Dating App',
    short_name: 'Miloo',
    description: 'Experience genuine chemistry, fluid swipe motion, verified profiles, and video dates.',
    start_url: '/',
    display: 'standalone',
    background_color: '#0F1115',
    theme_color: '#0F1115',
    icons: [
      {
        src: '/icon.png',
        sizes: 'any',
        type: 'image/png',
      },
    ],
  };
}
