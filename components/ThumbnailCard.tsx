
import React from 'react';
import type { ThumbnailCardData } from '../types';

const ThumbnailCard: React.FC<ThumbnailCardData> = ({ title, href, icon }) => {
    return (
        <a
            href={href}
            className="group block aspect-square bg-gray-800/50 hover:bg-gray-800/80 rounded-lg p-4 sm:p-6 transition-all duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-2xl hover:shadow-cyan-500/10 border border-gray-700 hover:border-cyan-500"
        >
            <div className="flex flex-col items-center justify-center h-full text-center">
                <div className="mb-4 transition-transform duration-300 group-hover:scale-110">
                    {icon}
                </div>
                <h3 className="text-sm sm:text-base font-bold text-white transition-colors duration-300 group-hover:text-cyan-400">
                    {title}
                </h3>
            </div>
        </a>
    );
};

export default ThumbnailCard;
