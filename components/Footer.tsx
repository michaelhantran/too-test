
import React from 'react';

const FooterLink: React.FC<{ href: string; children: React.ReactNode }> = ({ href, children }) => (
    <li>
        <a href={href} className="text-gray-400 hover:text-cyan-400 transition-colors duration-300">
            {children}
        </a>
    </li>
);

const Footer: React.FC = () => {
    return (
        <footer id="about" className="bg-gray-900 border-t border-gray-800">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {/* About Section */}
                    <div className="md:col-span-2 lg:col-span-1">
                        <h3 className="text-xl font-bold text-white mb-4">Tim Ve Studio</h3>
                        <p className="text-gray-400">
                            Your hub for exploring the latest in AI-driven creativity, from music and art to educational resources and powerful tools.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
                        <ul className="space-y-2">
                            <FooterLink href="#music">Music</FooterLink>
                            <FooterLink href="#education">Education</FooterLink>
                            <FooterLink href="#tools">Tool Apps</FooterLink>
                            <FooterLink href="#products">Products</FooterLink>
                        </ul>
                    </div>

                    {/* Guide */}
                    <div>
                        <h4 className="text-lg font-semibold text-white mb-4">Guide</h4>
                        <ul className="space-y-2">
                            <FooterLink href="#support">Support</FooterLink>
                            <FooterLink href="#faq">FAQ</FooterLink>
                            <FooterLink href="#getting-started">Getting Started</FooterLink>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h4 className="text-lg font-semibold text-white mb-4">Contact</h4>
                        <ul className="space-y-2">
                            <FooterLink href="#contact-us">Contact Us</FooterLink>
                            <FooterLink href="#community">Community</FooterLink>
                            <FooterLink href="#socials">Social Media</FooterLink>
                        </ul>
                    </div>
                </div>
                <div className="mt-12 pt-8 border-t border-gray-800 text-center text-gray-500">
                    <p>&copy; {new Date().getFullYear()} Tim Ve Studio. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
