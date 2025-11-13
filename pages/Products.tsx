import React from 'react';
import { Page } from '../types';

interface PageProps {
  onNavigate: (page: Page) => void;
}

const products = [
  { name: "Studio Logo Tee", price: "$29.99", image: "https://picsum.photos/seed/prod1/500/500" },
  { name: "Waveform Hoodie", price: "$59.99", image: "https://picsum.photos/seed/prod2/500/500" },
  { name: "Producer Snapback", price: "$24.99", image: "https://picsum.photos/seed/prod3/500/500" },
  { name: "Tim Ve Studio Mug", price: "$14.99", image: "https://picsum.photos/seed/prod4/500/500" },
  { name: "Synth Schematic Poster", price: "$19.99", image: "https://picsum.photos/seed/prod5/500/500" },
  { name: "Soundwave Beanie", price: "$22.99", image: "https://picsum.photos/seed/prod6/500/500" },
];

const Products: React.FC<PageProps> = ({ onNavigate }) => {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-4xl font-bold text-white mb-8 border-l-4 border-brand-primary pl-4">Merchandise</h1>
      <p className="text-lg text-brand-text-muted mb-12">Show your support with our official studio gear.</p>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {products.map(product => (
          <div key={product.name} className="bg-brand-surface rounded-lg overflow-hidden group cursor-pointer">
            <div className="relative">
              <img src={product.image} alt={product.name} className="w-full h-auto object-cover aspect-square" />
              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <button className="bg-brand-primary text-white font-semibold py-2 px-6 rounded-lg shadow-md hover:bg-brand-secondary transition-all transform hover:scale-105">
                  View
                </button>
              </div>
            </div>
            <div className="p-4 text-center">
              <h3 className="font-semibold text-white">{product.name}</h3>
              <p className="text-brand-text-muted">{product.price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
