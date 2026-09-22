export interface ProfileMedia {
  id: string;
  url: string;
  order: number;
}

export interface PromptItem {
  id: string;
  question: string;
  answer: string;
}

export interface DiscoveryProfile {
  id: string;
  name: string;
  age: number;
  city: string;
  distanceKm: number;
  jobTitle: string;
  company: string;
  school?: string;
  bio: string;
  isVerified: boolean;
  interestTags: string[];
  photos: ProfileMedia[];
  prompts: PromptItem[];
}

export const MOCK_DISCOVERY_PROFILES: DiscoveryProfile[] = [
  {
    id: 'usr_001',
    name: 'Yuki',
    age: 24,
    city: 'Shibuya, Tokyo',
    distanceKm: 3,
    jobTitle: 'Senior Art Director',
    company: 'Monolith Studio',
    school: 'Tokyo Univ. of the Arts',
    bio: 'Art director by day, vinyl hunter by night. Obsessed with Shibuya jazz bars, film photography, and matcha lattes.',
    isVerified: true,
    interestTags: ['Travel', 'Photography', 'EDM', 'Matcha', 'Art Galleries', 'Vinyl Records'],
    photos: [
      {
        id: 'p1_1',
        url: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=450&auto=format&fit=crop&q=75',
        order: 0,
      },
      {
        id: 'p1_2',
        url: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=450&auto=format&fit=crop&q=75',
        order: 1,
      },
      {
        id: 'p1_3',
        url: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=450&auto=format&fit=crop&q=75',
        order: 2,
      },
    ],
    prompts: [
      {
        id: 'pr_1',
        question: 'A non-negotiable for me is...',
        answer: 'Appreciating quiet Sunday mornings with hot matcha and analog vinyl records.',
      },
      {
        id: 'pr_2',
        question: 'The best way to win me over is...',
        answer: 'Take me to a film photography exhibition or an obscure jazz café.',
      },
    ],
  },
  {
    id: 'usr_002',
    name: 'Elena',
    age: 25,
    city: 'Berlin',
    distanceKm: 5,
    jobTitle: 'UX Researcher',
    company: 'SoundCloud',
    school: 'Humboldt University',
    bio: 'Curating ambient soundscapes and hunting vintage Bauhaus furniture. Always down for spontaneous techno nights or quiet gallery strolls.',
    isVerified: true,
    interestTags: ['Design', 'Electronic Music', 'Architecture', 'Museums', 'Specialty Coffee', 'Biking'],
    photos: [
      {
        id: 'p2_1',
        url: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=450&auto=format&fit=crop&q=75',
        order: 0,
      },
      {
        id: 'p2_2',
        url: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=450&auto=format&fit=crop&q=75',
        order: 1,
      },
      {
        id: 'p2_3',
        url: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=450&auto=format&fit=crop&q=75',
        order: 2,
      },
    ],
    prompts: [
      {
        id: 'pr_2_1',
        question: 'Together, we could...',
        answer: 'Build a custom modular synth rack or get lost in vintage record stores.',
      },
    ],
  },
  {
    id: 'usr_003',
    name: 'Chloe',
    age: 26,
    city: 'Brooklyn, NY',
    distanceKm: 8,
    jobTitle: 'Independent Ceramicist',
    company: 'Studio Clay & Kiln',
    school: 'RISD',
    bio: 'Clay-covered hands, golden retriever energy, sourdough experiments, and road trips up the Hudson Valley with good coffee.',
    isVerified: true,
    interestTags: ['Ceramics', 'Hiking', 'Dogs', 'Baking', 'Indie Folk', 'Wine Tasting'],
    photos: [
      {
        id: 'p3_1',
        url: 'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=450&auto=format&fit=crop&q=75',
        order: 0,
      },
      {
        id: 'p3_2',
        url: 'https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?w=450&auto=format&fit=crop&q=75',
        order: 1,
      },
    ],
    prompts: [
      {
        id: 'pr_3_1',
        question: 'Dating me looks like...',
        answer: 'Wheel-throwing pottery lessons in my studio, followed by the best pizza in Brooklyn.',
      },
    ],
  },
  {
    id: 'usr_004',
    name: 'Marcus',
    age: 27,
    city: 'San Francisco, CA',
    distanceKm: 4,
    jobTitle: 'AI Robotics Researcher',
    company: 'DeepMotion',
    school: 'Stanford University',
    bio: 'Training humanoid robots during the week, bouldering and brewing pour-overs on weekends. Looking for a partner in adventure.',
    isVerified: true,
    interestTags: ['Rock Climbing', 'Robotics', 'Coffee', 'Sci-Fi', 'Trail Running', 'Chess'],
    photos: [
      {
        id: 'p4_1',
        url: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=450&auto=format&fit=crop&q=75',
        order: 0,
      },
      {
        id: 'p4_2',
        url: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=450&auto=format&fit=crop&q=75',
        order: 1,
      },
    ],
    prompts: [
      {
        id: 'pr_4_1',
        question: 'I geek out on...',
        answer: 'Optimizing robotic gait dynamics and finding the freshest single-origin Ethiopian beans.',
      },
    ],
  },
];
