import React from 'react';

const teamMembers = [
  { name: "Tim Ve", role: "Founder & Lead Producer", image: "https://picsum.photos/seed/team1/400/400" },
  { name: "Jane Doe", role: "Sound Designer & Developer", image: "https://picsum.photos/seed/team2/400/400" },
  { name: "John Smith", role: "Marketing & Community", image: "https://picsum.photos/seed/team3/400/400" },
];

const About: React.FC = () => {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-4xl font-bold text-white mb-8 border-l-4 border-brand-primary pl-4">About Tim Ve Studio</h1>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
        <div className="prose prose-invert prose-lg max-w-none text-brand-text-muted">
          <p>
            Tim Ve Studio was founded in 2018 with a simple mission: to create inspiring sounds, tools, and educational content for music producers of all levels. What started as a small project in a home studio has grown into a passionate community of creators and artists.
          </p>
          <p>
            We believe that great music comes from a combination of passion, knowledge, and the right tools. Our work is dedicated to providing all three. Whether you're just starting your journey or you're a seasoned professional, we're here to support your creative process.
          </p>
        </div>
        <div>
          <img src="https://picsum.photos/seed/studio/800/600" alt="Tim Ve Studio" className="rounded-lg shadow-2xl" />
        </div>
      </div>

      <h2 className="text-3xl font-bold text-white mb-10 text-center">Meet the Team</h2>
      <div className="flex justify-center flex-wrap gap-10">
        {teamMembers.map(member => (
          <div key={member.name} className="text-center">
            <img src={member.image} alt={member.name} className="w-48 h-48 rounded-full object-cover mx-auto mb-4 shadow-lg border-4 border-brand-surface" />
            <h3 className="text-xl font-bold text-white">{member.name}</h3>
            <p className="text-brand-primary">{member.role}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default About;
