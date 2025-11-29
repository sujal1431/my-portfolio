import React, { useEffect } from 'react';
import { X, Play } from 'lucide-react';
import { PortfolioItem, MediaType } from '../types';

interface ModalProps {
  item: PortfolioItem | null;
  isOpen: boolean;
  onClose: () => void;
}

export const Modal: React.FC<ModalProps> = ({ item, isOpen, onClose }) => {
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleEsc);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleEsc);
    };
  }, [isOpen, onClose]);

  if (!isOpen || !item) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/90 backdrop-blur-md transition-opacity"
        onClick={onClose}
      />

      {/* Content Container */}
      <div className="relative z-10 w-full max-w-5xl bg-brand-gray rounded-2xl overflow-hidden shadow-2xl flex flex-col md:flex-row max-h-[90vh]">
        
        {/* Media Side */}
        <div className={`bg-black flex items-center justify-center ${item.category === MediaType.REEL ? 'md:w-1/3' : 'md:w-3/4'}`}>
          {item.category === MediaType.POSTER ? (
            <img 
              src={item.thumbnailUrl} 
              alt={item.title} 
              className="w-full h-full object-contain max-h-[60vh] md:max-h-full"
            />
          ) : (
             <div className="relative w-full h-full flex items-center justify-center bg-black aspect-video">
                {/* 
                  NOTE: In a real deployment, user's typically host videos on YouTube/Vimeo/Cloudinary.
                  Using a native video tag with a sample URL for demonstration.
                */}
                <video 
                    src={item.videoUrl} 
                    controls 
                    autoPlay 
                    className={`w-full max-h-[60vh] md:max-h-full ${item.category === MediaType.REEL ? 'object-cover aspect-[9/16]' : 'object-contain'}`}
                >
                    Your browser does not support the video tag.
                </video>
             </div>
          )}
        </div>

        {/* Info Side */}
        <div className={`p-8 overflow-y-auto flex flex-col ${item.category === MediaType.REEL ? 'md:w-2/3' : 'md:w-1/4'} border-l border-white/5`}>
            <button 
                onClick={onClose}
                className="absolute top-4 right-4 p-2 bg-black/50 hover:bg-white/20 rounded-full text-white transition-colors md:hidden"
            >
                <X size={20} />
            </button>
            
            <div className="hidden md:flex justify-end mb-4">
                 <button 
                    onClick={onClose}
                    className="p-2 hover:bg-white/10 rounded-full text-brand-muted hover:text-white transition-colors"
                >
                    <X size={24} />
                </button>
            </div>

            <div className="space-y-6">
                <div>
                    <span className="inline-block px-3 py-1 text-xs font-semibold text-brand-accent bg-brand-accent/10 rounded-full mb-3">
                        {item.category}
                    </span>
                    <h2 className="text-3xl font-display font-bold text-white mb-2">{item.title}</h2>
                    <p className="text-brand-muted leading-relaxed">{item.description}</p>
                </div>

                <div>
                    <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-3">Tools Used</h3>
                    <div className="flex flex-wrap gap-2">
                        {item.toolsUsed.map((tool) => (
                            <span key={tool} className="px-3 py-1.5 text-sm bg-white/5 border border-white/10 rounded-md text-gray-300">
                                {tool}
                            </span>
                        ))}
                    </div>
                </div>

                <div className="mt-auto pt-6">
                    <button className="w-full py-3 bg-white text-black font-bold rounded-lg hover:bg-gray-200 transition-colors">
                        Inquire About This Project
                    </button>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};
