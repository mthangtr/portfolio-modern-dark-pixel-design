import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, Terminal, Cpu, Globe, ChevronDown } from 'lucide-react';
import PixelButton from './components/PixelButton';
import PixelCard from './components/PixelCard';
import SectionHeading from './components/SectionHeading';
import TechStack from './components/TechStack';
import { Project, BlogPost } from './types';

const App: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const projects: Project[] = [
    {
      id: '1',
      title: 'Neuromancer UI',
      description: 'A cyberpunk-inspired component library for React built with pure CSS and styled-components.',
      tags: ['React', 'TypeScript', 'Storybook'],
      imageUrl: 'https://picsum.photos/id/134/800/450',
      link: '#'
    },
    {
      id: '2',
      title: 'Echo Base',
      description: 'Real-time collaborative workspace for remote dev teams using WebSockets and CRDTs.',
      tags: ['Node.js', 'Socket.io', 'Redis'],
      imageUrl: 'https://picsum.photos/id/2/800/450',
      link: '#'
    },
    {
      id: '3',
      title: 'Void Linter',
      description: 'An AI-powered code analysis tool that detects logical fallacies in business logic.',
      tags: ['Python', 'FastAPI', 'OpenAI'],
      imageUrl: 'https://picsum.photos/id/60/800/450',
      link: '#'
    }
  ];

  const posts: BlogPost[] = [
    { id: '1', title: 'The End of Localhost: Developing in the Cloud', date: 'Oct 24, 2023', tags: ['DevOps', 'Cloud'], readTime: '5 min' },
    { id: '2', title: 'Why I Switched from Vim to Zed', date: 'Sep 12, 2023', tags: ['Productivity', 'Editors'], readTime: '3 min' },
    { id: '3', title: 'Understanding React Server Components', date: 'Aug 05, 2023', tags: ['React', 'Frontend'], readTime: '8 min' },
  ];

  const links = {
    github: "https://github.com/mthangtr",
    linkedin: "https://www.linkedin.com/in/truong-manh-thang-4a15372a9/",
    email: "mailto:mthangtr182@gmail.com"
  };

  return (
    <div className="min-h-screen bg-background text-text selection:bg-white selection:text-black overflow-x-hidden">
      
      {/* Navigation / Header */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-background/90 backdrop-blur-sm border-b border-zinc-900 py-4' : 'py-8 bg-transparent'}`}>
        <div className="container mx-auto px-6 flex justify-between items-center relative">
          
          {/* Left: Logo */}
          <div className="font-pixel text-xl tracking-tighter text-white z-10">
            mthangtr_
          </div>

          {/* Center: Links (Absolutely centered) */}
          <div className="absolute left-1/2 -translate-x-1/2 hidden md:flex gap-12 font-sans text-xs tracking-widest uppercase text-muted">
            <a href="#about" className="hover:text-white transition-colors">About</a>
            <a href="#projects" className="hover:text-white transition-colors">Projects</a>
            <a href="#blog" className="hover:text-white transition-colors">Blog</a>
          </div>

          {/* Right: Blinking Square */}
          <div className="z-10">
            <div className="w-3 h-3 bg-white animate-cursor-blink"></div>
          </div>

        </div>
      </nav>

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center relative pt-20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(255,255,255,0.03)_1px,_transparent_1px)] bg-[length:24px_24px] opacity-50 pointer-events-none"></div>
        
        <div className="container mx-auto px-6 grid md:grid-cols-2 gap-20 lg:gap-32 items-center">
          {/* Left: Text */}
          <div className="order-1 flex flex-col items-start text-left z-10">
            <div className="inline-flex items-center gap-2 border border-zinc-800 bg-zinc-900/50 px-3 py-1 mb-8 rounded-full">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
              <span className="font-mono text-xs text-zinc-400">Open for work</span>
            </div>
            
            <h1 className="font-pixel text-6xl md:text-8xl lg:text-9xl mb-8 leading-[1]">
              Hello, <br />
              I’m <span className="text-white">mthangtr</span>
            </h1>
            
            <p className="font-sans text-xl md:text-2xl text-muted mb-10 max-w-xl leading-relaxed">
              Indie Developer • Fullstack • BrSE
              <br/>
              <span className="text-base text-zinc-600 mt-3 block">
                Based in Vietnam. Shipping a new SaaS every month.
              </span>
            </p>
            
            <div className="flex flex-wrap gap-4">
              <PixelButton onClick={() => window.open(links.github, '_blank')} icon>
                View Github
              </PixelButton>
              <PixelButton variant="secondary" onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth'})}>
                Contact Me
              </PixelButton>
            </div>
          </div>

          {/* Right: Avatar */}
          <div className="order-2 flex justify-center md:justify-end">
             <div className="group relative w-80 h-80 md:w-96 md:h-96 lg:w-[32rem] lg:h-[32rem] cursor-pointer active:scale-95 hover:scale-105 transition-transform duration-300">
                {/* Pixel border decoration */}
                <div className="absolute inset-0 border-[6px] border-white opacity-20 rotate-3 transition-transform duration-300 group-hover:rotate-6"></div>
                <div className="absolute inset-0 border-[6px] border-zinc-800 -rotate-3 bg-surface transition-transform duration-300 group-hover:-rotate-6"></div>
                <img 
                  src="https://picsum.photos/id/64/800/800" 
                  alt="Avatar" 
                  className="absolute inset-0 w-full h-full object-cover grayscale contrast-125 brightness-90 p-2 image-dither"
                />
                <div className="absolute -bottom-8 -left-8 bg-background border-2 border-white p-4 font-pixel text-sm shadow-[6px_6px_0px_0px_rgba(255,255,255,1)]">
                  ASPIRING BrSE
                </div>
             </div>
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce text-zinc-600">
          <ChevronDown size={32} />
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-32 border-t border-zinc-900 bg-surface/20">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-12 gap-8 lg:gap-12">
            
            {/* Column 1: Title (Sidebar style) */}
            <div className="md:col-span-12 lg:col-span-3">
              <SectionHeading title="# About_Me" />
            </div>
            
            {/* Main Content Area (Spans remaining columns) */}
            <div className="md:col-span-12 lg:col-span-9 grid md:grid-cols-12 gap-12">
              
              {/* Middle Column: Bio & Tech */}
              <div className="md:col-span-8 flex flex-col gap-10">
                {/* Bio */}
                <div className="font-sans text-muted text-lg leading-loose space-y-6">
                  <p>
                    I'm <strong>Truong Manh Thang</strong>, a Software Engineering specializing in full-stack development graduated from FPT University.
                  </p>
                  <p>
                    I build products end-to-end — from backend architecture to UI development — and I enjoy shipping small, polished apps as an indie developer.
                  </p>
                  <p>
                   I’m currently pursuing the BrSE path while deepening my skills in system design, software architecture, and modern web technologies.
                  </p>
                </div>

                {/* Tech Stack */}
                <div>
                  <h3 className="font-pixel text-xl mb-6 flex items-center gap-2 text-white">
                    Tech Stack
                  </h3>
                  <TechStack />
                </div>
              </div>

              {/* Right Column: Stats (Vertical) */}
              <div className="md:col-span-4 space-y-12 md:border-l md:border-zinc-800 md:pl-8">
                <div>
                  <div className="font-pixel text-4xl md:text-5xl mb-2 text-white">N3</div>
                  <div className="text-[10px] md:text-xs text-zinc-500 uppercase tracking-widest font-bold">Japanese Level</div>
                </div>
                <div>
                  <div className="font-pixel text-4xl md:text-5xl mb-2 text-white">10+</div>
                  <div className="text-[10px] md:text-xs text-zinc-500 uppercase tracking-widest font-bold">Projects Shipped</div>
                </div>
                <div>
                  <div className="font-pixel text-4xl md:text-5xl mb-2 text-white">1k+</div>
                  <div className="text-[10px] md:text-xs text-zinc-500 uppercase tracking-widest font-bold">Commits</div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-24">
        <div className="container mx-auto px-6">
          <SectionHeading title="Selected_Works" align="left" />
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map(project => (
              <PixelCard key={project.id} project={project} />
            ))}
          </div>

          <div className="mt-16 text-center">
             <a href={links.github} target="_blank" rel="noreferrer" className="inline-flex items-center font-pixel text-sm border-b-2 border-zinc-800 pb-1 hover:border-white transition-colors">
               View All Repositories <Terminal className="ml-2 w-4 h-4" />
             </a>
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section id="blog" className="py-24 border-t border-zinc-900 bg-zinc-900/20">
        <div className="container mx-auto px-6 max-w-4xl">
          <SectionHeading title="Dev_Log" align="center" subtitle="Thoughts on software, design, and the indie life." />
          
          <div className="space-y-2 mt-12">
            {posts.map((post) => (
              <a key={post.id} href="#" className="group block">
                <div className="flex flex-col md:flex-row md:items-center justify-between p-6 border border-transparent border-b-zinc-800 hover:border-white/20 hover:bg-surface transition-all duration-300">
                  <div className="flex items-start gap-4">
                     <div className="mt-1.5 w-2 h-2 bg-zinc-700 group-hover:bg-white transition-colors shrink-0"></div>
                     <div>
                       <h3 className="font-sans font-bold text-xl text-white group-hover:text-gray-200 mb-2 decoration-dashed decoration-zinc-600 underline-offset-4 group-hover:underline">
                         {post.title}
                       </h3>
                       <div className="flex gap-3 text-xs font-mono uppercase text-zinc-500">
                         <span>{post.readTime} read</span>
                         <span>/</span>
                         <span>{post.tags.join(', ')}</span>
                       </div>
                     </div>
                  </div>
                  <div className="mt-4 md:mt-0 pl-6 md:pl-0 text-right">
                    <span className="font-pixel text-zinc-500 text-sm group-hover:text-zinc-300">{post.date}</span>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 pb-32">
        <div className="container mx-auto px-6 text-center">
          <SectionHeading title="Get_In_Touch" align="center" />
          
          <p className="font-sans text-muted mb-12 max-w-xl mx-auto">
            Currently available for freelance projects and open source collaborations. 
            If you have an idea, let's build it.
          </p>

          <div className="flex justify-center gap-8 mb-12">
             <a href={links.github} target="_blank" rel="noreferrer" className="group p-4 border border-zinc-800 hover:border-white hover:bg-white hover:text-black transition-all duration-300 pixel-corners">
               <Github className="w-6 h-6" />
             </a>
             <a href={links.linkedin} target="_blank" rel="noreferrer" className="group p-4 border border-zinc-800 hover:border-white hover:bg-white hover:text-black transition-all duration-300 pixel-corners">
               <Linkedin className="w-6 h-6" />
             </a>
             <a href={links.email} className="group p-4 border border-zinc-800 hover:border-white hover:bg-white hover:text-black transition-all duration-300 pixel-corners">
               <Mail className="w-6 h-6" />
             </a>
          </div>

          <PixelButton onClick={() => window.open(links.email)}>
            Send Message
          </PixelButton>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-zinc-900 bg-background flex flex-col items-center justify-center gap-6">
        {/* Crafted by text */}
        <div className="font-sans text-sm text-zinc-500 flex items-center gap-2">
          Crafted by mthangtr <span className="text-zinc-700">—</span> Indie Developer
        </div>
        
        {/* Pixel Heart Icon */}
        <div className="text-zinc-500 hover:text-white transition-colors duration-300 animate-pulse">
           <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
             <path d="M6 4H10V6H6V4ZM14 4H18V6H14V4ZM4 6H6V10H4V6ZM10 6H14V8H10V6ZM18 6H20V10H18V6ZM4 10H6V12H4V10ZM18 10H20V12H18V10ZM6 12H8V14H6V12ZM16 12H18V14H16V12ZM8 14H10V16H8V14ZM14 14H16V16H14V14ZM10 16H14V18H10V16Z" />
           </svg>
        </div>

        {/* Copyright */}
        <div className="font-pixel text-[10px] uppercase tracking-widest text-zinc-800">
           © {new Date().getFullYear()} All Rights Reserved
        </div>
      </footer>
      
    </div>
  );
};

export default App;