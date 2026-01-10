import React from 'react';

const techs = [
  { name: "Java", highlight: true },
  { name: "Spring Boot 3", highlight: true },
  { name: "TypeScript", highlight: false },
  { name: "Next.js", highlight: false },
  { name: "React", highlight: false },
  { name: "PostgreSQL", highlight: false },
  { name: "MongoDB", highlight: false },
  { name: "Redis", highlight: false },
  { name: "Docker", highlight: false },
  { name: "Spring Security", highlight: false },
  { name: "JPA/Hibernate", highlight: false },
  { name: "REST APIs", highlight: false },
];

const TechStack: React.FC = () => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {techs.map((tech) => (
        <div 
          key={tech.name}
          className={`flex items-center justify-center p-3 border ${tech.highlight ? 'border-green-400/50 bg-green-400/5' : 'border-zinc-800 bg-surface/50'} hover:bg-surface hover:border-zinc-600 transition-all duration-300 group cursor-default`}
        >
          <span className={`w-2 h-2 ${tech.highlight ? 'bg-green-400' : 'bg-zinc-600'} mr-3 group-hover:bg-white transition-colors`} />
          <span className={`font-sans text-sm ${tech.highlight ? 'text-green-400' : 'text-zinc-400'} group-hover:text-white transition-colors`}>
            {tech.name}
          </span>
        </div>
      ))}
    </div>
  );
};

export default TechStack;