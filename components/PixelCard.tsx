import React from 'react';
import { Project } from '../types';
import { ExternalLink } from 'lucide-react';

interface PixelCardProps {
  project: Project;
}

const PixelCard: React.FC<PixelCardProps> = ({ project }) => {
  return (
    <a
      href={project.link}
      target="_blank"
      rel="noreferrer"
      className="group block relative bg-surface border border-border p-4 transition-all duration-300 hover:-translate-y-2 hover:shadow-[8px_8px_0px_0px_rgba(74,222,128,0.3)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white shimmer"
    >
      {/* Pixel Corners Effect via CSS clip-path in global styles or pseudo elements */}
      <div className="absolute inset-0 border-2 border-transparent group-hover:border-green-400/30 pointer-events-none transition-colors duration-300" />
      
      {/* Image Container */}
      <div className="relative aspect-video overflow-hidden bg-black mb-4 border border-border scanline-container">
        <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors z-10" />
        <img 
          src={project.imageUrl} 
          alt={project.title} 
          className="w-full h-full object-cover image-dither opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
        />
        {/* Hover overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20 flex items-end justify-center pb-4">
          <span className="font-pixel text-xs text-green-400 flex items-center gap-2">
            View Project <ExternalLink className="w-3 h-3" />
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-col gap-3">
        <div className="flex justify-between items-start">
          <h3 className="font-pixel text-xl text-white group-hover:text-green-400 transition-colors decoration-2 underline-offset-4">
            {project.title}
          </h3>
          <ExternalLink className="w-5 h-5 text-muted group-hover:text-green-400 transition-colors" />
        </div>
        
        <p className="font-sans text-sm text-muted leading-relaxed line-clamp-2">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2 mt-2">
          {project.tags.map((tag) => (
            <span 
              key={tag} 
              className="font-pixel text-[10px] uppercase border border-zinc-700 px-2 py-1 text-zinc-400 group-hover:border-green-400/50 group-hover:text-green-400/80 transition-colors"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </a>
  );
};

export default PixelCard;
