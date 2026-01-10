import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, Terminal, ChevronDown, MapPin, Briefcase, GraduationCap, Code2, Phone } from 'lucide-react';
import PixelButton from './components/PixelButton';
import PixelCard from './components/PixelCard';
import SectionHeading from './components/SectionHeading';
import TechStack from './components/TechStack';
import { Project, BlogPost } from './types';

const App: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [typedText, setTypedText] = useState('');
  const fullText = 'Entrepreneur • Indie Maker • Full-stack Developer';

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index < fullText.length) {
        setTypedText(fullText.slice(0, index + 1));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 80);
    return () => clearInterval(timer);
  }, []);

  const projects: Project[] = [
    {
      id: '1',
      title: 'FlashQuizes',
      description: 'Production-ready Japanese vocab SaaS with AI flashcards (Gemini/GPT-4), spaced repetition algorithms, Redis caching, and secure payments via SePay/VietQR.',
      tags: ['Next.js 15', 'MongoDB', 'Redis', 'AI'],
      imageUrl: '/img/flashquizes.png',
      link: 'https://github.com/mthangtr/flashquizes'
    },
    {
      id: '2',
      title: 'Training Management System',
      description: 'Capstone project: Full-stack TMS with WebSocket real-time notifications, 40+ PostgreSQL tables, RBAC for 8 user roles, async processing.',
      tags: ['Spring Boot 3', 'Java 21', 'PostgreSQL', 'WebSocket'],
      imageUrl: '/img/tms.png',
      link: 'https://github.com/SEP490-FA25-G25'
    },
    {
      id: '3',
      title: 'Mini-Drive Storage',
      description: 'Secure cloud storage solution with recursive folder management, multi-file uploads, and async ZIP generation for optimal download experience.',
      tags: ['Spring Boot', 'React', 'Cloud Storage'],
      imageUrl: '/img/mini-drive.png',
      link: 'https://github.com/mthangtr/mini-drive-storage'
    },
  ];

  const posts: BlogPost[] = [
    { id: '1', title: 'The End of Localhost: Developing in the Cloud', date: 'Oct 24, 2023', tags: ['DevOps', 'Cloud'], readTime: '5 min' },
    { id: '2', title: 'Why I Switched from Vim to Zed', date: 'Sep 12, 2023', tags: ['Productivity', 'Editors'], readTime: '3 min' },
    { id: '3', title: 'Understanding React Server Components', date: 'Aug 05, 2023', tags: ['React', 'Frontend'], readTime: '8 min' },
  ];

  const links = {
    github: "https://github.com/mthangtr",
    linkedin: "https://www.linkedin.com/in/mthangtr/",
    email: "mailto:mthangtr@gmail.com",
    phone: "+84 943 902 004",
    website: "https://mthangtr.me"
  };

  return (
    <div className="min-h-screen bg-background text-text selection:bg-white selection:text-black overflow-x-hidden">
      {/* CRT Overlay Effect */}
      <div className="crt-overlay"></div>
      
      {/* Matrix Background */}
      <div className="matrix-bg"></div>
      
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
            <a href="#experience" className="hover:text-white transition-colors">Experience</a>
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
            
            <h1 className="font-pixel text-6xl md:text-8xl lg:text-9xl mb-4 leading-[1]">
              Hello, <br />
              I'm <span className="glitch neon-text" data-text="mthangtr">mthangtr</span>
            </h1>
            
            <div className="font-mono text-lg md:text-xl text-green-400 mb-8 h-8 flex items-center">
              <span className="text-zinc-500 mr-2">&gt;</span>
              <span>{typedText}</span>
              <span className="w-3 h-5 bg-green-400 ml-1 animate-cursor-blink"></span>
            </div>
            
            <p className="font-sans text-lg md:text-xl text-muted mb-6 max-w-xl leading-relaxed">
              <span className="text-white font-medium">Entrepreneur</span> building scalable SaaS products. 
              Shipping one project every month as an <span className="text-white font-medium">indie maker</span>. 
              Tech stack: <span className="text-white font-medium">Java/Spring Boot</span> & <span className="text-white font-medium">Next.js</span>.
            </p>
            
            <div className="flex items-center gap-4 text-sm text-zinc-500 mb-10">
              <span className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                Hanoi, Vietnam
              </span>
              <span className="text-zinc-700">•</span>
              <span className="flex items-center gap-2">
                <GraduationCap className="w-4 h-4" />
                FPT University
              </span>
            </div>
            
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
          <div className="order-2 flex justify-center md:justify-end relative">
             <div className="relative w-72 h-72 md:w-96 md:h-96 lg:w-[32rem] lg:h-[32rem] float-animation">
                {/* Decorative grid behind */}
                <div className="absolute -top-4 -left-4 w-full h-full border border-white/20 opacity-50"></div>
                <div className="absolute -bottom-4 -right-4 w-full h-full border border-white/20 opacity-50"></div>
                
                {/* Image Container */}
                <div className="w-full h-full bg-surface border-2 border-white overflow-hidden relative pixel-border-animated">
                    <div className="absolute top-0 left-0 w-full h-full bg-[linear-gradient(to_bottom,transparent_50%,rgba(0,0,0,0.5)_51%)] bg-[length:100%_4px] pointer-events-none z-10"></div>
                    <img 
                        src="/img/main-avatar.png" 
                        alt="Avatar" 
                        className="w-full h-full object-cover grayscale contrast-125"
                    />
                    {/* Dither overlay */}
                    <div className="absolute inset-0 bg-[radial-gradient(#333_1px,transparent_1px)] bg-[length:4px_4px] opacity-20 pointer-events-none"></div>
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
                {/* Terminal-style Bio */}
                <div className="bg-zinc-900/80 border border-zinc-800 p-6 shimmer">
                  <div className="flex items-center gap-2 mb-4 pb-4 border-b border-zinc-800">
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                    <span className="ml-4 font-mono text-xs text-zinc-500">about.sh</span>
                  </div>
                  <div className="font-mono text-sm text-muted space-y-3">
                    <p className="text-green-400">$ whoami</p>
                    <p className="pl-4 text-white">Truong Manh Thang (mthangtr)</p>
                    <p className="text-green-400 mt-4">$ cat summary.txt</p>
                    <p className="pl-4 leading-relaxed">
                      Backend-focused Full-stack Developer with a passion for building scalable SaaS solutions. 
                      Beyond mastering the <span className="text-cyan-400">Java/Spring Boot</span> ecosystem, 
                      I leverage <span className="text-cyan-400">Next.js</span> and <span className="text-cyan-400">TypeScript</span> to 
                      transform ideas into production-ready products.
                    </p>
                    <p className="text-green-400 mt-4">$ echo $FOCUS</p>
                    <p className="pl-4">
                      Clean architecture • High performance • BrSE path
                    </p>
                    <p className="text-green-400 mt-4">$ cat languages.txt</p>
                    <p className="pl-4">
                      🇻🇳 Vietnamese (Native) | 🇺🇸 English (IELTS 6.5) | 🇯🇵 Japanese (JLPT N3)
                    </p>
                  </div>
                </div>

                {/* Tech Stack */}
                <div>
                  <h3 className="font-pixel text-xl mb-6 flex items-center gap-2 text-white">
                    <Code2 className="w-5 h-5 text-green-400" />
                    Tech Stack
                  </h3>
                  <TechStack />
                </div>
              </div>

              {/* Right Column: Stats (Vertical) */}
              <div className="md:col-span-4 space-y-12 md:border-l md:border-zinc-800 md:pl-8">
                <div className="group">
                  <div className="font-pixel text-4xl md:text-5xl mb-2 text-white group-hover:text-green-400 transition-colors">N3</div>
                  <div className="text-[10px] md:text-xs text-zinc-500 uppercase tracking-widest font-bold">Japanese Level</div>
                </div>
                <div className="group">
                  <div className="font-pixel text-4xl md:text-5xl mb-2 text-white group-hover:text-green-400 transition-colors">3.2</div>
                  <div className="text-[10px] md:text-xs text-zinc-500 uppercase tracking-widest font-bold">GPA / 4.0</div>
                </div>
                <div className="group">
                  <div className="font-pixel text-4xl md:text-5xl mb-2 text-white group-hover:text-green-400 transition-colors">10+</div>
                  <div className="text-[10px] md:text-xs text-zinc-500 uppercase tracking-widest font-bold">Projects Shipped</div>
                </div>
                <div className="group">
                  <div className="font-pixel text-4xl md:text-5xl mb-2 text-white group-hover:text-green-400 transition-colors">1k+</div>
                  <div className="text-[10px] md:text-xs text-zinc-500 uppercase tracking-widest font-bold">Commits</div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-24 border-t border-zinc-900">
        <div className="container mx-auto px-6">
          <SectionHeading title="Experience_" align="left" />
          
          <div className="grid lg:grid-cols-2 gap-8 mt-12">
            {/* Work Experience */}
            <div className="bg-surface border border-zinc-800 p-8 hover:border-zinc-600 transition-colors shimmer">
              <div className="flex items-start justify-between mb-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-zinc-800 border border-zinc-700 flex items-center justify-center">
                    <Briefcase className="w-6 h-6 text-green-400" />
                  </div>
                  <div>
                    <h3 className="font-pixel text-xl text-white">FPT Software</h3>
                    <p className="text-sm text-zinc-500">Fresher Developer</p>
                  </div>
                </div>
                <span className="font-mono text-xs text-zinc-500 border border-zinc-700 px-2 py-1">05/2025 - 01/2026</span>
              </div>
              <ul className="space-y-3 text-sm text-muted">
                <li className="flex items-start gap-2">
                  <span className="text-green-400 mt-1">▸</span>
                  Completed intensive training in enterprise-level software development, focusing on Java Advanced and Software Testing
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-400 mt-1">▸</span>
                  Quickly adapted to Agile/Scrum workflows, actively participating in daily stand-ups and sprint planning
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-400 mt-1">▸</span>
                  Collaborated with team members with real projects and code reviews
                </li>
              </ul>
            </div>

            {/* Education */}
            <div className="bg-surface border border-zinc-800 p-8 hover:border-zinc-600 transition-colors shimmer">
              <div className="flex items-start justify-between mb-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-zinc-800 border border-zinc-700 flex items-center justify-center">
                    <GraduationCap className="w-6 h-6 text-cyan-400" />
                  </div>
                  <div>
                    <h3 className="font-pixel text-xl text-white">FPT University</h3>
                    <p className="text-sm text-zinc-500">Bachelor of Software Engineering</p>
                  </div>
                </div>
                <span className="font-mono text-xs text-zinc-500 border border-zinc-700 px-2 py-1">Graduated 2026</span>
              </div>
              <ul className="space-y-3 text-sm text-muted">
                <li className="flex items-start gap-2">
                  <span className="text-cyan-400 mt-1">▸</span>
                  Specialized Program: <strong className="text-white">BrSE JS</strong> (Bridge Software Engineer - Japanese Market focused)
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-cyan-400 mt-1">▸</span>
                  GPA: <strong className="text-white">3.2/4.0</strong>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-cyan-400 mt-1">▸</span>
                  Languages: English <strong className="text-white">IELTS 6.5</strong> | Japanese <strong className="text-white">JLPT N3</strong>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-24 border-t border-zinc-900 bg-surface/20">
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

      {/* Contact Section */}
      <section id="contact" className="py-24 pb-32 border-t border-zinc-900 bg-surface/20">
        <div className="container mx-auto px-6 text-center">
          <SectionHeading title="Get_In_Touch" align="center" />
          
          <p className="font-sans text-muted mb-8 max-w-xl mx-auto">
            Currently available for freelance projects and open source collaborations. 
            If you have an idea, let's build it.
          </p>

          {/* Contact Info */}
          <div className="flex flex-wrap justify-center gap-6 mb-12 text-sm text-zinc-400">
            <a href={links.email} className="flex items-center gap-2 hover:text-white transition-colors">
              <Mail className="w-4 h-4" />
              mthangtr@gmail.com
            </a>
            <span className="text-zinc-700">|</span>
            <a href={`tel:${links.phone}`} className="flex items-center gap-2 hover:text-white transition-colors">
              <Phone className="w-4 h-4" />
              +84 943 902 004
            </a>
            <span className="text-zinc-700">|</span>
            <span className="flex items-center gap-2">
              <MapPin className="w-4 h-4" />
              Hanoi, Vietnam
            </span>
          </div>

          <div className="flex justify-center gap-8 mb-12">
             <a href={links.github} target="_blank" rel="noreferrer" className="group p-4 border border-zinc-800 hover:border-green-400 hover:bg-green-400 hover:text-black transition-all duration-300 pixel-corners">
               <Github className="w-6 h-6" />
             </a>
             <a href={links.linkedin} target="_blank" rel="noreferrer" className="group p-4 border border-zinc-800 hover:border-cyan-400 hover:bg-cyan-400 hover:text-black transition-all duration-300 pixel-corners">
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
          Crafted by mthangtr <span className="text-zinc-700">—</span> Entrepreneur & Indie Maker
        </div>
        
        {/* Pixel Heart Icon */}
        <div className="text-zinc-500 hover:text-green-400 transition-colors duration-300 animate-pulse">
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
