
import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import ThumbnailCard from './components/ThumbnailCard';
import YoutubeCard from './components/YoutubeCard';
import type { ThumbnailCardData, YoutubeVideo } from './types';

const MusicIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2z" />
    </svg>
);
const EducationIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
    </svg>
);
const ToolsIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
);
const ProductsIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
    </svg>
);
const InfoIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
);

const App: React.FC = () => {
    const thumbnailData: ThumbnailCardData[] = [
        { title: "Music", href: "#music", icon: <MusicIcon className="w-16 h-16 text-cyan-400" /> },
        { title: "Education", href: "#education", icon: <EducationIcon className="w-16 h-16 text-cyan-400" /> },
        { title: "Tool Apps", href: "#tools", icon: <ToolsIcon className="w-16 h-16 text-cyan-400" /> },
        { title: "Products", href: "#products", icon: <ProductsIcon className="w-16 h-16 text-cyan-400" /> },
        { title: "Information", href: "#info", icon: <InfoIcon className="w-16 h-16 text-cyan-400" /> },
    ];

    const youtubeVideos: YoutubeVideo[] = [
        { id: 1, title: "AI Music Generation Tutorial", thumbnailUrl: "https://picsum.photos/seed/music/400/225", videoUrl: "https://www.youtube.com/" },
        { id: 2, title: "Deep Dive into Neural Networks", thumbnailUrl: "https://picsum.photos/seed/neural/400/225", videoUrl: "https://www.youtube.com/" },
        { id: 3, title: "Building an AI Tool from Scratch", thumbnailUrl: "https://picsum.photos/seed/tool/400/225", videoUrl: "https://www.youtube.com/" },
        { id: 4, title: "The Future of AI Products", thumbnailUrl: "https://picsum.photos/seed/product/400/225", videoUrl: "https://www.youtube.com/" },
        { id: 5, title: "Weekly AI News Roundup", thumbnailUrl: "https://picsum.photos/seed/news/400/225", videoUrl: "https://www.youtube.com/" },
        { id: 6, title: "AI Art: Midjourney vs Stable Diffusion", thumbnailUrl: "https://picsum.photos/seed/art/400/225", videoUrl: "https://www.youtube.com/" },
    ];

    return (
        <div className="flex flex-col min-h-screen bg-gray-900">
            <Header />

            <main className="flex-grow container mx-auto px-4 sm:px-6 lg:px-8">
                {/* Main Thumbnail Section */}
                <section id="main-content" className="py-16 sm:py-24">
                    <div className="text-center mb-12">
                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight">
                            Welcome to <span className="text-cyan-400">Tim Ve Studio</span>
                        </h1>
                        <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-400">
                            Explore the intersection of creativity and artificial intelligence.
                        </p>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6 lg:gap-8">
                        {thumbnailData.map((item) => (
                            <ThumbnailCard key={item.title} {...item} />
                        ))}
                    </div>
                </section>

                {/* Latest Videos Section */}
                <section id="videos" className="py-16 sm:py-24 border-t border-gray-800">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
                            Latest Videos on <span className="text-red-500">YouTube</span>
                        </h2>
                        <p className="mt-3 max-w-2xl mx-auto text-md text-gray-400">
                            Stay updated with our newest content.
                        </p>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                        {youtubeVideos.map((video) => (
                            <YoutubeCard key={video.id} {...video} />
                        ))}
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
};

export default App;
