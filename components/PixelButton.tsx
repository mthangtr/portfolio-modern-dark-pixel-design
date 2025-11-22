import React from 'react';
import { ArrowRight } from 'lucide-react';

interface PixelButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: 'primary' | 'secondary';
  className?: string;
  icon?: boolean;
}

const PixelButton: React.FC<PixelButtonProps> = ({ 
  children, 
  onClick, 
  variant = 'primary',
  className = '',
  icon = false
}) => {
  const baseStyles = "relative inline-flex items-center justify-center px-6 py-3 font-pixel text-sm tracking-wide uppercase transition-all duration-200 active:translate-y-1";
  
  const variants = {
    primary: "bg-white text-black hover:bg-gray-200 border-2 border-white pixel-corners shadow-[4px_4px_0px_0px_rgba(50,50,50,1)] hover:shadow-[2px_2px_0px_0px_rgba(50,50,50,1)]",
    secondary: "bg-transparent text-white border-2 border-white pixel-corners hover:bg-white hover:text-black shadow-[4px_4px_0px_0px_rgba(255,255,255,0.3)] hover:shadow-[2px_2px_0px_0px_rgba(255,255,255,0.3)]"
  };

  return (
    <button 
      onClick={onClick} 
      className={`${baseStyles} ${variants[variant]} ${className}`}
    >
      {children}
      {icon && <ArrowRight className="ml-2 w-4 h-4" />}
    </button>
  );
};

export default PixelButton;