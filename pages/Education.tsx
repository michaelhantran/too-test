import React from 'react';
import { Page } from '../types';

interface PageProps {
  onNavigate: (page: Page) => void;
}

const courses = [
  { title: "Introduction to Music Theory", level: "Beginner", image: "https://picsum.photos/seed/course1/600/338", description: "Learn the fundamentals of music theory from scratch." },
  { title: "Advanced Synthesis with Serum", level: "Intermediate", image: "https://picsum.photos/seed/course2/600/338", description: "Dive deep into sound design with one of the most powerful synths." },
  { title: "Mixing and Mastering Essentials", level: "Intermediate", image: "https://picsum.photos/seed/course3/600/338", description: "Make your tracks sound professional and polished." },
  { title: "Arrangement and Composition", level: "Advanced", image: "https://picsum.photos/seed/course4/600/338", description: "Master the art of creating compelling song structures." },
];

const Education: React.FC<PageProps> = ({ onNavigate }) => {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-4xl font-bold text-white mb-8 border-l-4 border-brand-primary pl-4">Education</h1>
      <p className="text-lg text-brand-text-muted mb-12">Level up your production skills with our in-depth courses.</p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {courses.map(course => (
          <a key={course.title} href="#" className="bg-brand-surface rounded-lg overflow-hidden flex flex-col sm:flex-row group transition-all duration-300 hover:shadow-2xl hover:shadow-brand-primary/20 hover:scale-105">
            <img src={course.image} alt={course.title} className="w-full sm:w-1/3 h-48 sm:h-auto object-cover" />
            <div className="p-6 flex flex-col justify-center">
              <span className={`inline-block mb-2 text-xs font-semibold px-2 py-1 rounded ${course.level === 'Beginner' ? 'bg-green-500/20 text-green-300' : course.level === 'Intermediate' ? 'bg-yellow-500/20 text-yellow-300' : 'bg-red-500/20 text-red-300'}`}>{course.level}</span>
              <h3 className="text-xl font-bold text-white mb-2 group-hover:text-brand-primary transition-colors">{course.title}</h3>
              <p className="text-brand-text-muted text-sm">{course.description}</p>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Education;
