import React from 'react';

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  align?: 'left' | 'center';
}

const SectionHeading: React.FC<SectionHeadingProps> = ({ title, subtitle, align = 'left' }) => {
  return (
    <div className={`mb-12 ${align === 'center' ? 'text-center' : 'text-left'}`}>
      <h2 className="font-pixel text-3xl md:text-4xl mb-3 relative inline-block">
        {title}
        <span className="absolute -bottom-2 left-0 w-full h-1 bg-[url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAABCAYAAAD5PA/NAAAADklEQVR42mN88P//fwAJ2AP0w4Xy8AAAAABJRU5ErkJggg==')] opacity-50"></span>
      </h2>
      {subtitle && (
        <p className="font-sans text-muted text-sm md:text-base mt-2 max-w-2xl mx-auto">
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default SectionHeading;