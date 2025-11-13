import React from 'react';
import { Page } from '../types';

interface HomeProps {
  onNavigate: (page: Page) => void;
}

const mainThumbnails: { name: Page; image: string; }[] = [
  { name: 'Music', image: 'https://picsum.photos/seed/music/600/400' },
  { name: 'Education', image: 'https://picsum.photos/seed/education/600/400' },
  { name: 'Tools', image: 'https://picsum.photos/seed/tools/600/400' },
  { name: 'Products', image: 'https://picsum.photos/seed/products/600/400' },
];

const youtubeVideos = [
  { id: 1, title: "Making a Beat from Scratch", image: "https://picsum.photos/seed/yt1/400/225" },
  { id: 2, title: "Sound Design Masterclass", image: "https://picsum.photos/seed/yt2/400/225" },
  { id: 3, title: "Mixing Vocals: Pro Tips", image: "https://picsum.photos/seed/yt3/400/225" },
  { id: 4, title: "Studio Tour 2024", image: "https://picsum.photos/seed/yt4/400/225" },
];

const newsItems = [
  { id: 1, title: "New Sample Pack Released!", image: "https://picsum.photos/seed/news1/400/225", excerpt: "Our latest 'Future Bass Essentials' pack is now available." },
  { id: 2, title: "Collaboration with Artist X", image: "https://picsum.photos/seed/news2/400/225", excerpt: "We're excited to announce a new track with the amazing Artist X." },
  { id: 3, title: "Upcoming Workshop on Synthesis", image: "https://picsum.photos/seed/news3/400/225", excerpt: "Join our live online workshop next month to master synthesis." },
];

const Home: React.FC<HomeProps> = ({ onNavigate }) => {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Main Navigation Thumbnails */}
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
        {mainThumbnails.map((item) => (
          <div
            key={item.name}
            onClick={() => onNavigate(item.name)}
            className="relative h-64 rounded-lg overflow-hidden cursor-pointer group shadow-lg"
          >
            <img src={item.image} alt={item.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
            <div className="absolute inset-0 bg-black/60 group-hover:bg-black/40 transition-colors duration-300 flex items-center justify-center">
              <h2 className="text-3xl font-bold text-white tracking-wider">{item.name}</h2>
            </div>
          </div>
        ))}
      </section>

      {/* Latest Videos */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-white mb-8 border-l-4 border-brand-primary pl-4">Latest Videos on YouTube</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {youtubeVideos.map(video => (
            <a key={video.id} href="#" target="_blank" rel="noopener noreferrer" className="bg-brand-surface rounded-lg overflow-hidden group transition-all duration-300 hover:shadow-2xl hover:shadow-brand-primary/20 hover:-translate-y-2">
              <img src={video.image} alt={video.title} className="w-full h-auto object-cover" />
              <div className="p-4">
                <h3 className="font-semibold text-white group-hover:text-brand-primary transition-colors">{video.title}</h3>
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* Latest News */}
      <section>
        <h2 className="text-3xl font-bold text-white mb-8 border-l-4 border-brand-primary pl-4">Latest News & Information</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {newsItems.map(item => (
             <a key={item.id} href="#" className="bg-brand-surface rounded-lg overflow-hidden group transition-all duration-300 hover:shadow-2xl hover:shadow-brand-primary/20 hover:-translate-y-2">
              <img src={item.image} alt={item.title} className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-brand-primary transition-colors">{item.title}</h3>
                <p className="text-brand-text-muted">{item.excerpt}</p>
              </div>
            </a>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
