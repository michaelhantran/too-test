import React from 'react';
import { Page } from '../types';

interface HeaderProps {
  onNavigate: (page: Page) => void;
  currentPage: Page;
}

const menuItems: (Page | 'Music')[] = ['Music', 'Education', 'Tools', 'Products', 'Support', 'About'];

const Header: React.FC<HeaderProps> = ({ onNavigate, currentPage }) => {
  return (
    <header className="bg-brand-bg/80 backdrop-blur-lg sticky top-0 z-50 shadow-lg shadow-black/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div 
            className="text-2xl font-bold text-white cursor-pointer transition-colors hover:text-brand-primary"
            onClick={() => onNavigate('Home')}
          >
            Tim Ve Studio
          </div>
          <nav className="hidden md:flex items-center space-x-8">
            {menuItems.map((item) => {
              if (item === 'Music') {
                return (
                  <a
                    key={item}
                    href="https://www.youtube.com/@TimVeMusic"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-lg font-medium transition-colors duration-300 text-brand-text-muted hover:text-white"
                  >
                    {item}
                  </a>
                );
              }
              return (
              <button
                key={item}
                onClick={() => onNavigate(item)}
                className={`text-lg font-medium transition-colors duration-300 ${
                  currentPage === item
                    ? 'text-brand-primary'
                    : 'text-brand-text-muted hover:text-white'
                }`}
              >
                {item}
              </button>
                <button onClick={() => onNavigate('TextToVideo')}>
  Text to Video
</button>
            )})}
          </nav>
          <div className="flex items-center">
            <button className="bg-brand-primary text-white font-semibold py-2 px-6 rounded-lg shadow-md hover:bg-brand-secondary transition-all duration-300 transform hover:scale-105">
              Login
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
