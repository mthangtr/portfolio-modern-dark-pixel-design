import React from 'react';

const techs = [
  "Java", "Spring Boot", "TypeScript", "React",
  "Next.js", "Node.js", "Express", "Vite",
  "PostgreSQL", "MySQL", "MongoDB", "Docker",
  "System Design", "UI/UX design",
];

const TechStack: React.FC = () => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {techs.map((tech) => (
        <div 
          key={tech}
          className="flex items-center justify-center p-3 border border-zinc-800 bg-surface/50 hover:bg-surface hover:border-zinc-600 transition-all duration-300 group cursor-default"
        >
          <span className="w-2 h-2 bg-zinc-600 mr-3 group-hover:bg-white transition-colors" />
          <span className="font-sans text-sm text-zinc-400 group-hover:text-white transition-colors">
            {tech}
          </span>
        </div>
      ))}
    </div>
  );
};

export default TechStack;