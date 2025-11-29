import React, { useState } from 'react';
import { Play, Image as ImageIcon, Film, ArrowRight, Instagram } from 'lucide-react';
import { PORTFOLIO_ITEMS } from '../constants';
import { MediaType, PortfolioItem } from '../types';
import { Modal } from './Modal';

export const PortfolioGrid: React.FC = () => {
  const [selectedItem, setSelectedItem] = useState<PortfolioItem | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const posters = PORTFOLIO_ITEMS.filter(item => item.category === MediaType.POSTER);
  const videos = PORTFOLIO_ITEMS.filter(item => item.category === MediaType.VIDEO);
  const reels = PORTFOLIO_ITEMS.filter(item => item.category === MediaType.REEL);

  const handleItemClick = (item: PortfolioItem) => {
    setSelectedItem(item);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setTimeout(() => setSelectedItem(null), 300);
  };

  return (
    <div id="portfolio" className="bg-brand-dark">
      {/* Posters Section */}
      <PortfolioSection 
        title="Canva Posters & Graphics"
        description="Visual identity, event flyers, and social media posts designed to capture attention."
        items={posters}
        type={MediaType.POSTER}
        onItemClick={handleItemClick}
        bgColor="bg-brand-gray/30"
      />

      {/* Videos Section */}
      <PortfolioSection 
        title="Video Productions"
        description="Long-form content, vlogs, and cinematic edits produced with Premiere Pro and DaVinci Resolve."
        items={videos}
        type={MediaType.VIDEO}
        onItemClick={handleItemClick}
        bgColor="bg-black"
      />

      {/* Reels Section */}
      <PortfolioSection 
        title="Reels & Short Form"
        description="Engaging, vertical video content optimized for TikTok, Instagram Reels, and Shorts."
        items={reels}
        type={MediaType.REEL}
        onItemClick={handleItemClick}
        bgColor="bg-brand-gray/30"
        actionElement={
          <a 
            href="https://www.instagram.com/sujal_.devendra" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-pink-500/30 text-pink-400 hover:text-pink-300 transition-colors text-sm font-semibold"
          >
            <Instagram size={16} />
            <span>@sujal_.devendra</span>
          </a>
        }
      />

      <Modal item={selectedItem} isOpen={isModalOpen} onClose={closeModal} />
    </div>
  );
};

interface PortfolioSectionProps {
  title: string;
  description: string;
  items: PortfolioItem[];
  type: MediaType;
  onItemClick: (item: PortfolioItem) => void;
  bgColor: string;
  actionElement?: React.ReactNode;
}

const PortfolioSection: React.FC<PortfolioSectionProps> = ({ title, description, items, type, onItemClick, bgColor, actionElement }) => {
  // Determine grid layout based on type
  const gridClasses = type === MediaType.REEL 
    ? "grid-cols-2 md:grid-cols-4 gap-4" // Reels: more columns, vertical
    : type === MediaType.POSTER
    ? "grid-cols-2 md:grid-cols-4 gap-6" // Posters: vertical columns
    : "grid-cols-1 md:grid-cols-2 gap-8"; // Videos: larger landscape columns

  const aspectRatioClass = type === MediaType.REEL 
    ? "aspect-[9/16]" 
    : type === MediaType.POSTER
    ? "aspect-[2/3]"
    : "aspect-video";

  return (
    <section className={`py-20 px-4 ${bgColor} border-t border-white/5`}>
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <div>
            <div className="flex items-center gap-2 text-brand-accent mb-2">
              {type === MediaType.POSTER && <ImageIcon size={20} />}
              {type === MediaType.VIDEO && <Film size={20} />}
              {type === MediaType.REEL && <Play size={20} />}
              <span className="text-sm font-bold uppercase tracking-wider">{type}</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-white">{title}</h2>
            <p className="text-brand-muted mt-2 max-w-2xl">{description}</p>
          </div>
          <div className="hidden md:block">
            {actionElement}
          </div>
          {/* Mobile view action element */}
          <div className="md:hidden">
             {actionElement}
          </div>
        </div>

        <div className={`grid ${gridClasses}`}>
          {items.map((item) => (
            <div 
              key={item.id}
              onClick={() => onItemClick(item)}
              className={`group relative rounded-xl overflow-hidden cursor-pointer bg-brand-gray border border-white/5 transition-all hover:border-brand-accent/50 hover:shadow-2xl hover:shadow-brand-accent/10 ${aspectRatioClass}`}
            >
              <img 
                src={item.thumbnailUrl} 
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4 md:p-6">
                <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="text-lg font-bold text-white leading-tight mb-1">{item.title}</h3>
                  <p className="text-xs text-brand-muted line-clamp-1 mb-2">{item.toolsUsed.join(', ')}</p>
                  
                  <div className="flex items-center gap-2 text-xs font-semibold text-brand-accent">
                    <span>View Project</span>
                    <ArrowRight size={14} />
                  </div>
                </div>
              </div>

              {/* Icon Overlay for Video Types */}
              {(type === MediaType.VIDEO || type === MediaType.REEL) && (
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 scale-75 group-hover:scale-100">
                  <Play size={20} fill="white" className="text-white ml-1" />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};