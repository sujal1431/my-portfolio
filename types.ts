export enum MediaType {
  POSTER = 'Poster',
  VIDEO = 'Video',
  REEL = 'Reel'
}

export interface PortfolioItem {
  id: string;
  title: string;
  category: MediaType;
  thumbnailUrl: string;
  videoUrl?: string; // Optional, for videos/reels
  description: string;
  toolsUsed: string[];
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
  timestamp: number;
}
