
import React from 'react';
import type { YoutubeVideo } from '../types';

const YoutubeCard: React.FC<Omit<YoutubeVideo, 'id'>> = ({ title, thumbnailUrl, videoUrl }) => {
    return (
        <a
            href={videoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group block bg-gray-800 rounded-lg overflow-hidden shadow-lg transition-all duration-300 ease-in-out transform hover:-translate-y-2 hover:shadow-2xl hover:shadow-red-500/20"
        >
            <div className="relative">
                <img
                    src={thumbnailUrl}
                    alt={title}
                    className="w-full h-auto object-cover aspect-video transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black bg-opacity-20 group-hover:bg-opacity-0 transition-opacity duration-300"></div>
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="bg-red-600 rounded-full p-4">
                        <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd"></path>
                        </svg>
                    </div>
                </div>
            </div>
            <div className="p-4">
                <h3 className="font-semibold text-white group-hover:text-red-400 transition-colors duration-300">
                    {title}
                </h3>
            </div>
        </a>
    );
};

export default YoutubeCard;
