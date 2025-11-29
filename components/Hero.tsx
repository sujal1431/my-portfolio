import React from 'react';
import { ArrowDown, MapPin } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-4">
      {/* Background Abstract Shapes */}
      <div className="absolute inset-0 z-0 opacity-20">
        <div className="absolute top-0 left-0 w-96 h-96 bg-brand-accent rounded-full blur-[120px] mix-blend-screen animate-pulse" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-600 rounded-full blur-[120px] mix-blend-screen" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto text-center space-y-8 animate-slide-up">
        <div className="flex flex-col items-center gap-3 mb-4">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-gray border border-white/10 backdrop-blur-sm text-sm font-medium text-brand-accent">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-accent opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-accent"></span>
            </span>
            Open to Digital Marketing Internships
          </div>
          <div className="flex items-center gap-1 text-brand-muted text-sm">
            <MapPin size={14} />
            <span>New Delhi, India (Relocation Available)</span>
          </div>
        </div>
        
        <h1 className="text-5xl md:text-7xl font-display font-bold leading-tight tracking-tight">
          Creative Branding & <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-accent to-blue-500">
            Digital Content Strategy
          </span>
        </h1>
        
        <p className="text-lg md:text-xl text-brand-muted max-w-2xl mx-auto">
          I am an MCA Student transforming campus events and brands through trend-driven Reels, high-visibility Canva posters, and strategic digital campaigns.
        </p>

        <div className="pt-8">
           <p className="text-white/80 font-medium tracking-wide animate-pulse">
              Scroll down to know about me and my content
           </p>
        </div>
      </div>

      <a 
        href="#about"
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-brand-muted hover:text-white transition-colors animate-bounce"
        aria-label="Scroll down"
      >
        <ArrowDown size={32} />
      </a>
    </section>
  );
};