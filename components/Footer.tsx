import React from 'react';
import { Page } from '../types';

interface FooterProps {
  onNavigate: (page: Page) => void;
}

const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const quickLinks: { name: Page | 'Music' }[] = [
    { name: 'Music' },
    { name: 'Education' },
    { name: 'Tools' },
    { name: 'Products' },
  ];

  return (
    <footer className="bg-black/50 text-brand-text-muted mt-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About Section */}
          <div>
            <h3 className="text-xl font-bold text-white mb-4">Tim Ve Studio</h3>
            <p className="text-sm">
              Creative hub for music production, innovative tools, and educational content. We are dedicated to empowering creators worldwide.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map(link => {
                if (link.name === 'Music') {
                  return (
                    <li key={link.name}>
                      <a href="https://www.youtube.com/@TimVeMusic" target="_blank" rel="noopener noreferrer" className="hover:text-brand-primary transition-colors duration-300 text-sm">
                        {link.name}
                      </a>
                    </li>
                  );
                }
                // FIX: Added an else block to ensure proper type narrowing for the `link.name` property.
                // This resolves the TypeScript error where `link.name` was not being correctly identified as type `Page`.
                else {
                  return (
                    <li key={link.name}>
                      <button onClick={() => onNavigate(link.name)} className="hover:text-brand-primary transition-colors duration-300 text-sm">{link.name}</button>
                    </li>
                  );
                }
              })}
            </ul>
          </div>
          
          {/* Guide */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Guide</h3>
            <ul className="space-y-2">
              <li><button onClick={() => onNavigate('Support')} className="hover:text-brand-primary transition-colors duration-300 text-sm">FAQ</button></li>
              <li><a href="#" className="hover:text-brand-primary transition-colors duration-300 text-sm">Terms of Service</a></li>
              <li><a href="#" className="hover:text-brand-primary transition-colors duration-300 text-sm">Privacy Policy</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Contact</h3>
            <p className="text-sm">contact@timvestudio.com</p>
            <div className="flex space-x-4 mt-4">
              <a href="#" aria-label="YouTube" className="text-brand-text-muted hover:text-brand-primary transition-colors">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M21.582,6.186c-0.23-0.86-0.908-1.538-1.768-1.768C18.254,4,12,4,12,4S5.746,4,4.186,4.418 c-0.86,0.23-1.538,0.908-1.768,1.768C2,7.746,2,12,2,12s0,4.254,0.418,5.814c0.23,0.86,0.908,1.538,1.768,1.768 C5.746,20,12,20,12,20s6.254,0,7.814-0.418c0.861-0.23,1.538-0.908,1.768-1.768C22,16.254,22,12,22,12S22,7.746,21.582,6.186z M10,15.464V8.536L16,12L10,15.464z"></path></svg>
              </a>
              <a href="#" aria-label="Twitter" className="text-brand-text-muted hover:text-brand-primary transition-colors">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M23.953,4.57c-0.885,0.39-1.83,0.65-2.825,0.77c1.017-0.61,1.79-1.57,2.16-2.72 c-0.95,0.56-2.005,0.97-3.127,1.18c-0.896-0.96-2.17-1.55-3.59-1.55c-2.71,0-4.9,2.2-4.9,4.9c0,0.38,0.04,0.76,0.12,1.12 C7.69,8.09,4.06,6.13,1.64,3.16C1.27,3.8,1.08,4.52,1.08,5.28c0,1.7,0.86,3.2,2.18,4.08c-0.8-0.03-1.55-0.24-2.22-0.61 v0.06c0,2.38,1.69,4.36,3.95,4.81c-0.41,0.11-0.85,0.17-1.29,0.17c-0.32,0-0.62-0.03-0.93-0.09c0.63,1.95,2.44,3.37,4.6,3.41 c-1.68,1.32-3.8,2.1-6.1,2.1c-0.4,0-0.78-0.02-1.17-0.07c2.18,1.4,4.76,2.22,7.55,2.22c9.05,0,14-7.5,14-14 c0-0.21,0-0.42-0.01-0.63C22.39,6.45,23.25,5.58,23.953,4.57z"></path></svg>
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-700 pt-6 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} Tim Ve Studio. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;