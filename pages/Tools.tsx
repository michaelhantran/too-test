import React from 'react';
import { Page } from '../types';

interface PageProps {
  onNavigate: (page: Page) => void;
}

const tools = [
  { name: "EchoVerb", type: "Reverb Plugin", image: "https://picsum.photos/seed/tool1/500/300", description: "A creative reverb with a built-in delay matrix for unique spatial effects." },
  { name: "Grainular", type: "Granular Synth", image: "https://picsum.photos/seed/tool2/500/300", description: "Transform any sample into a lush texture or a rhythmic sequence." },
  { name: "SaturateX", type: "Saturation Plugin", image: "https://picsum.photos/seed/tool3/500/300", description: "Add warmth, grit, and character to your sounds with 8 saturation modes." },
  { name: "Sequencer Pro", type: "MIDI Sequencer", image: "https://picsum.photos/seed/tool4/500/300", description: "An advanced step sequencer with probability and parameter locks." },
];

const Tools: React.FC<PageProps> = ({ onNavigate }) => {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-4xl font-bold text-white mb-8 border-l-4 border-brand-primary pl-4">Creative Tools</h1>
      <p className="text-lg text-brand-text-muted mb-12">Our custom-built plugins and instruments to inspire your next track.</p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {tools.map(tool => (
          <div key={tool.name} className="bg-brand-surface rounded-lg overflow-hidden group transition-all duration-300 hover:shadow-2xl hover:shadow-brand-primary/20 hover:-translate-y-2">
            <img src={tool.image} alt={tool.name} className="w-full h-48 object-cover" />
            <div className="p-6">
              <h3 className="text-xl font-bold text-white mb-1">{tool.name}</h3>
              <p className="text-sm font-semibold text-brand-primary mb-3">{tool.type}</p>
              <p className="text-brand-text-muted text-sm">{tool.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tools;
