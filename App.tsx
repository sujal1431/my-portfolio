import React from 'react';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Achievements } from './components/Achievements';
import { PortfolioGrid } from './components/PortfolioGrid';
import { Contact } from './components/Contact';
import { ChatWidget } from './components/ChatWidget';

function App() {
  return (
    <div className="min-h-screen bg-brand-dark text-brand-text font-sans selection:bg-brand-accent selection:text-white">
      {/* Navigation - Minimalist Branding */}
      <nav className="absolute top-0 left-0 right-0 z-40 px-6 py-6 flex justify-between items-center max-w-7xl mx-auto">
        <div className="text-2xl font-display font-bold tracking-tighter">
          Sujal Sai <span className="text-brand-accent">Ram.</span>
        </div>
        {/* No nav links as requested for hero page style */}
      </nav>

      <main>
        <Hero />
        <About />
        <Achievements />
        <PortfolioGrid />
        <Contact />
      </main>

      <ChatWidget />
    </div>
  );
}

export default App;