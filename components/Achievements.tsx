import React from 'react';
import { Trophy, Crown, Star } from 'lucide-react';

export const Achievements: React.FC = () => {
  const achievements = [
    {
      id: 1,
      title: "Student Content & Creative Lead",
      event: "SONIC 2025 IT Seminar",
      description: "Certified and awarded for leading branding initiatives, including posters, reels, and promo videos for the IT department's flagship event.",
      icon: <Crown className="text-yellow-400" size={32} />,
      borderColor: "border-yellow-500/30",
      glowColor: "group-hover:shadow-yellow-500/20"
    },
    {
      id: 2,
      title: "2nd Place - Live Poster Making",
      event: "JCC Digital Cultural Theme",
      description: "Recognized for speed and creativity in live digital design competition, creating impactful visuals under time constraints.",
      icon: <Trophy className="text-brand-accent" size={32} />,
      borderColor: "border-brand-accent/30",
      glowColor: "group-hover:shadow-brand-accent/20"
    },
    {
      id: 3,
      title: "2nd Place - Vlog Creation",
      event: "Content Creation Contest",
      description: "Awarded for exceptional storytelling, editing, and audience engagement strategies in video format.",
      icon: <Trophy className="text-blue-400" size={32} />,
      borderColor: "border-blue-500/30",
      glowColor: "group-hover:shadow-blue-500/20"
    },
    {
      id: 4,
      title: "2nd Place - Google Site Creation",
      event: "Web Design Competition",
      description: "Honored for structuring and designing a user-friendly, aesthetically pleasing website using Google Sites.",
      icon: <Trophy className="text-purple-400" size={32} />,
      borderColor: "border-purple-500/30",
      glowColor: "group-hover:shadow-purple-500/20"
    }
  ];

  return (
    <section className="py-20 px-4 bg-brand-dark relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-brand-accent/5 rounded-full blur-[100px]" />

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center p-3 rounded-full bg-yellow-400/10 mb-4 border border-yellow-400/20">
             <Star className="text-yellow-400 fill-yellow-400" size={20} />
          </div>
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
            Honors & <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-200 to-yellow-500">Awards</span>
          </h2>
          <p className="text-brand-muted max-w-2xl mx-auto text-lg">
            Recognized for excellence in creative design, digital storytelling, and leadership within the academic and technical community.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {achievements.map((item) => (
            <div 
              key={item.id}
              className={`p-8 rounded-2xl bg-white/5 border ${item.borderColor} backdrop-blur-sm hover:bg-white/10 transition-all duration-300 hover:-translate-y-1 group hover:shadow-2xl ${item.glowColor}`}
            >
              <div className="flex items-start gap-6">
                <div className="p-4 rounded-xl bg-black/50 border border-white/5 shadow-inner shrink-0 group-hover:scale-110 transition-transform duration-300">
                  {item.icon}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-1 group-hover:text-yellow-200 transition-colors">
                    {item.title}
                  </h3>
                  <div className="text-xs font-bold uppercase tracking-wider text-brand-muted mb-3 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-white/30"></span>
                    {item.event}
                  </div>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};