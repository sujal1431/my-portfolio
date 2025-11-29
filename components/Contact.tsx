import React from 'react';
import { Mail, Linkedin, Phone, MapPin, Instagram } from 'lucide-react';

export const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-24 px-4 bg-brand-dark">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">Let's Work Together</h2>
        <p className="text-brand-muted mb-12 text-lg">
            I am currently seeking a <strong>Digital Marketing Internship</strong> to drive audience growth and brand reach.
            <br />
            Based in New Delhi, but open to relocation (Gurgaon).
        </p>

        <div className="flex flex-col md:flex-row gap-6 justify-center items-center flex-wrap">
            <a 
                href="mailto:devendra.sujal31@gmail.com"
                className="flex items-center gap-3 px-8 py-4 bg-white text-black rounded-full font-bold hover:bg-gray-200 transition-colors"
            >
                <Mail size={20} />
                Email Me
            </a>
            <a 
                href="https://www.linkedin.com/in/sujal-sai-ram"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 px-8 py-4 bg-[#0077b5] text-white rounded-full font-bold hover:bg-[#006399] transition-colors"
            >
                <Linkedin size={20} />
                LinkedIn
            </a>
            <a 
                href="https://www.instagram.com/sujal_.devendra"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 text-white rounded-full font-bold hover:opacity-90 transition-opacity shadow-lg shadow-pink-500/20"
            >
                <Instagram size={20} />
                @sujal_.devendra
            </a>
        </div>

        <div className="mt-12 flex flex-col items-center gap-4 text-brand-muted">
            <div className="flex items-center gap-2">
                <Phone size={16} />
                <span>+91-9818710013</span>
            </div>
            <div className="flex items-center gap-2">
                <MapPin size={16} />
                <span>Shakurpur, New Delhi-110034</span>
            </div>
        </div>

        <div className="mt-16 pt-16 border-t border-white/10">
            <p className="mt-8 text-sm text-brand-muted">
                © {new Date().getFullYear()} Sujal Sai Ram. All rights reserved.
            </p>
        </div>
      </div>
    </section>
  );
};