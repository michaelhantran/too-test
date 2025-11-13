import React from 'react';
import { Page } from '../types';

interface PageProps {
  onNavigate: (page: Page) => void;
}

const albums = [
  { title: "Neon Dreams", artist: "Tim Ve", year: "2024", image: "https://picsum.photos/seed/album1/500/500" },
  { title: "City Lights", artist: "Tim Ve", year: "2023", image: "https://picsum.photos/seed/album2/500/500" },
  { title: "Odyssey", artist: "Tim Ve", year: "2022", image: "https://picsum.photos/seed/album3/500/500" },
  { title: "Fragments", artist: "Tim Ve", year: "2021", image: "https://picsum.photos/seed/album4/500/500" },
  { title: "Echoes", artist: "Tim Ve", year: "2020", image: "https://picsum.photos/seed/album5/500/500" },
  { title: "Ascension", artist: "Tim Ve", year: "2019", image: "https://picsum.photos/seed/album6/500/500" },
];

const Music: React.FC<PageProps> = ({ onNavigate }) => {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-4xl font-bold text-white mb-8 border-l-4 border-brand-primary pl-4">Our Music</h1>
      <p className="text-lg text-brand-text-muted mb-12">Explore our discography. Click on any release to listen.</p>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
        {albums.map(album => (
          <div key={album.title} className="bg-brand-surface rounded-lg overflow-hidden group cursor-pointer transition-all duration-300 hover:shadow-2xl hover:shadow-brand-primary/20 hover:-translate-y-2">
            <img src={album.image} alt={album.title} className="w-full h-auto object-cover aspect-square" />
            <div className="p-4">
              <h3 className="font-bold text-white truncate group-hover:text-brand-primary transition-colors">{album.title}</h3>
              <p className="text-sm text-brand-text-muted">{album.artist} &bull; {album.year}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Music;
