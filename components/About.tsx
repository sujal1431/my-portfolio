import React from 'react';
import { Palette, Video, BarChart, Code } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-brand-gray border-y border-white/5 relative overflow-hidden">
        {/* Decorative Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px] opacity-20 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <h2 className="text-4xl md:text-5xl font-display font-bold">
              Merging Tech with <br />
              <span className="text-brand-accent">Creative Vision</span>
            </h2>
            <div className="space-y-6 text-brand-muted text-lg leading-relaxed">
              <p>
                I am a creative MCA student at JaganNath Community College with a proven track record in campus event branding and trend-driven digital content.
              </p>
              <p>
                My experience ranges from being a <strong>UI/UX & Creative Design Intern</strong> where I designed login UIs and branding materials, to leading creative campaigns for major events like the SONIC 2025 IT Seminar.
              </p>
              <p>
                I combine technical knowledge (React, MERN, SEO) with soft skills like critical thinking and team collaboration to drive audience growth and brand reach.
              </p>
            </div>
            
            <div className="pt-4">
               <a href="#contact" className="inline-flex items-center text-brand-accent font-semibold hover:text-white transition-colors border-b border-brand-accent hover:border-white pb-1">
                 Check out my full resume details below
               </a>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <SkillCard 
              icon={<Palette size={32} />} 
              title="Graphic Design" 
              desc="Canva, Logos, Posters, UI Visual Ideation" 
            />
            <SkillCard 
              icon={<Video size={32} />} 
              title="Video & Reels" 
              desc="Trend-based Reels, Promo Videos, Campaign Coordination" 
            />
            <SkillCard 
              icon={<BarChart size={32} />} 
              title="Digital Marketing" 
              desc="SEO Basics, Keyword Research, Engagement Tracking" 
            />
            <SkillCard 
              icon={<Code size={32} />} 
              title="Development" 
              desc="React.js, MERN Basics, HTML/CSS, MySQL" 
            />
          </div>
        </div>
      </div>
    </section>
  );
};

const SkillCard: React.FC<{ icon: React.ReactNode; title: string; desc: string }> = ({ icon, title, desc }) => (
  <div className="p-6 rounded-xl bg-black border border-white/10 hover:border-brand-accent/50 transition-colors group">
    <div className="w-12 h-12 rounded-lg bg-brand-accent/10 flex items-center justify-center text-brand-accent mb-4 group-hover:scale-110 transition-transform">
      {icon}
    </div>
    <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
    <p className="text-brand-muted text-sm">{desc}</p>
  </div>
);