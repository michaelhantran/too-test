
import type { ReactNode } from 'react';

export interface ThumbnailCardData {
  title: string;
  href: string;
  icon: ReactNode;
}

export interface YoutubeVideo {
  id: number;
  title: string;
  thumbnailUrl: string;
  videoUrl: string;
}
