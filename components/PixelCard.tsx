import React from 'react';
import { Project } from '../types';
import { ExternalLink } from 'lucide-react';

interface PixelCardProps {
  project: Project;
}

const PixelCard: React.FC<PixelCardProps> = ({ project }) => {
  return (
    <div className="group relative bg-surface border border-border p-4 transition-all duration-300 hover:-translate-y-1 hover:shadow-[8px_8px_0px_0px_rgba(40,40,40,1)]">
      {/* Pixel Corners Effect via CSS clip-path in global styles or pseudo elements */}
      <div className="absolute inset-0 border-2 border-transparent group-hover:border-white/20 pointer-events-none transition-colors duration-300" />
      
      {/* Image Container */}
      <div className="relative aspect-video overflow-hidden bg-black mb-4 border border-border scanline-container">
        <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors z-10" />
        <img 
          src={project.imageUrl} 
          alt={project.title} 
          className="w-full h-full object-cover image-dither opacity-80 group-hover:opacity-100 transition-opacity duration-500"
        />
      </div>

      {/* Content */}
      <div className="flex flex-col gap-3">
        <div className="flex justify-between items-start">
          <h3 className="font-pixel text-xl text-white group-hover:underline decoration-2 underline-offset-4">
            {project.title}
          </h3>
          <ExternalLink className="w-5 h-5 text-muted group-hover:text-white transition-colors" />
        </div>
        
        <p className="font-sans text-sm text-muted leading-relaxed line-clamp-2">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2 mt-2">
          {project.tags.map((tag) => (
            <span 
              key={tag} 
              className="font-pixel text-[10px] uppercase border border-zinc-700 px-2 py-1 text-zinc-400 group-hover:border-zinc-500 group-hover:text-zinc-200 transition-colors"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PixelCard;