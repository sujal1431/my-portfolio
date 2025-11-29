import { PortfolioItem, MediaType } from './types';

// Using picsum.photos for placeholders. 
// In a real app, these would be user uploaded URLs.
const SAMPLE_VIDEO = "https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4";
const SAMPLE_REEL = "https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4";

export const PORTFOLIO_ITEMS: PortfolioItem[] = [
  // --- POSTERS ---
  {
    id: 'p1',
    title: 'SONIC 2025 IT Seminar',
    category: MediaType.POSTER,
    thumbnailUrl: 'https://picsum.photos/id/20/800/1200',
    description: 'Official branding poster for the Annual IT Seminar SONIC 2025.',
    toolsUsed: ['Canva', 'Design Structuring']
  },
  {
    id: 'p2',
    title: 'Innovation Club Launch',
    category: MediaType.POSTER,
    thumbnailUrl: 'https://picsum.photos/id/24/800/1200',
    description: 'Inauguration creative driving student engagement for the Innovation Club.',
    toolsUsed: ['Canva', 'Visual Ideation']
  },
  {
    id: 'p3',
    title: 'Digital Cultural Theme',
    category: MediaType.POSTER,
    thumbnailUrl: 'https://picsum.photos/id/28/800/1200',
    description: 'Award-winning poster design (2nd Place) for the JCC Digital Cultural event.',
    toolsUsed: ['Canva', 'Live Design']
  },
  {
    id: 'p4',
    title: 'Login UI Design',
    category: MediaType.POSTER,
    thumbnailUrl: 'https://picsum.photos/id/30/800/1200',
    description: 'Clean and user-friendly Login UI concepts created during internship.',
    toolsUsed: ['Canva', 'UI Principles']
  },

  // --- VIDEOS ---
  {
    id: 'v1',
    title: 'Campus Promo Video',
    category: MediaType.VIDEO,
    thumbnailUrl: 'https://picsum.photos/id/40/1280/720',
    videoUrl: SAMPLE_VIDEO,
    description: 'Promotional video used for campus-wide branding and digital reach initiatives.',
    toolsUsed: ['Video Creatives', 'Cross-team Coord']
  },
  {
    id: 'v2',
    title: 'Vlog Creation Contest',
    category: MediaType.VIDEO,
    thumbnailUrl: 'https://picsum.photos/id/42/1280/720',
    videoUrl: SAMPLE_VIDEO,
    description: 'Award-winning content creation piece (2nd Place) showcasing storytelling skills.',
    toolsUsed: ['Vlog Editing', 'Storytelling']
  },
  {
    id: 'v3',
    title: 'Technical Event Campaign',
    category: MediaType.VIDEO,
    thumbnailUrl: 'https://picsum.photos/id/48/1280/720',
    videoUrl: SAMPLE_VIDEO,
    description: 'Campaign video driving audience growth for technical department events.',
    toolsUsed: ['Digital Marketing', 'Video Editing']
  },

  // --- REELS ---
  {
    id: 'r1',
    title: 'Trend-Based Event Reel',
    category: MediaType.REEL,
    thumbnailUrl: 'https://picsum.photos/id/55/400/711',
    videoUrl: SAMPLE_REEL,
    description: 'High-energy reel leveraging current trends to boost event attendance.',
    toolsUsed: ['Trend Awareness', 'Canva']
  },
  {
    id: 'r2',
    title: 'Cultural Digital Branding',
    category: MediaType.REEL,
    thumbnailUrl: 'https://picsum.photos/id/56/400/711',
    videoUrl: SAMPLE_REEL,
    description: 'Vertical short-form content for cultural programme participation.',
    toolsUsed: ['Social Media', 'Engagement']
  },
  {
    id: 'r3',
    title: 'Club Highlights',
    category: MediaType.REEL,
    thumbnailUrl: 'https://picsum.photos/id/60/400/711',
    videoUrl: SAMPLE_REEL,
    description: 'Recap reel for Innovation Club activities.',
    toolsUsed: ['Editing', 'Music Sync']
  }
];