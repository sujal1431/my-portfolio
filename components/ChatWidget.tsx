import React, { useState, useRef, useEffect } from 'react';
import { MessageSquare, X, Send, Loader2, Sparkles } from 'lucide-react';
import { createPortfolioChat } from '../services/gemini';
import { ChatMessage } from '../types';
import { GenerateContentResponse } from "@google/genai";

export const ChatWidget: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: 'model', text: "Hi! I'm the AI assistant here. Ask me about the creator's skills in Canva, Video Editing, or project availability!", timestamp: Date.now() }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const chatSessionRef = useRef<any>(null); // Type 'any' to avoid strict types for the chat object in this context
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Initialize chat session once
    if (!chatSessionRef.current) {
      chatSessionRef.current = createPortfolioChat();
    }
  }, []);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isOpen]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMsg: ChatMessage = { role: 'user', text: input, timestamp: Date.now() };
    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setIsLoading(true);

    try {
      const result: GenerateContentResponse = await chatSessionRef.current.sendMessage({ message: userMsg.text });
      const responseText = result.text;
      
      const botMsg: ChatMessage = { 
        role: 'model', 
        text: responseText || "I'm having a bit of trouble thinking right now. Try again?", 
        timestamp: Date.now() 
      };
      setMessages(prev => [...prev, botMsg]);
    } catch (error) {
      console.error("Chat Error:", error);
      const errorMsg: ChatMessage = { 
        role: 'model', 
        text: "Sorry, I couldn't connect to the AI service. Please try again later.", 
        timestamp: Date.now() 
      };
      setMessages(prev => [...prev, errorMsg]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      {/* Chat Window */}
      {isOpen && (
        <div className="mb-4 w-[350px] md:w-[400px] h-[500px] bg-brand-gray border border-white/10 rounded-2xl shadow-2xl flex flex-col overflow-hidden animate-slide-up origin-bottom-right">
          
          {/* Header */}
          <div className="p-4 bg-brand-accent/10 border-b border-white/5 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-brand-accent flex items-center justify-center">
                <Sparkles size={16} className="text-white" />
              </div>
              <div>
                <h3 className="font-bold text-white text-sm">Creative Assistant</h3>
                <p className="text-xs text-brand-accent">Powered by Gemini</p>
              </div>
            </div>
            <button 
              onClick={() => setIsOpen(false)}
              className="p-1 hover:bg-white/10 rounded-full text-brand-muted hover:text-white transition-colors"
            >
              <X size={18} />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.map((msg, idx) => (
              <div 
                key={idx} 
                className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div 
                  className={`max-w-[80%] p-3 rounded-2xl text-sm ${
                    msg.role === 'user' 
                      ? 'bg-brand-accent text-white rounded-br-none' 
                      : 'bg-white/5 text-gray-200 border border-white/10 rounded-bl-none'
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-white/5 border border-white/10 p-3 rounded-2xl rounded-bl-none flex items-center gap-2">
                  <Loader2 size={16} className="animate-spin text-brand-accent" />
                  <span className="text-xs text-brand-muted">Thinking...</span>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="p-4 border-t border-white/5 bg-black/20 backdrop-blur-sm">
            <div className="flex gap-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Ask about my video editing..."
                className="flex-1 bg-black border border-white/10 rounded-full px-4 py-2 text-sm text-white focus:outline-none focus:border-brand-accent transition-colors"
              />
              <button 
                onClick={handleSend}
                disabled={isLoading || !input.trim()}
                className="p-2 bg-brand-accent hover:bg-brand-accentHover text-white rounded-full transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <Send size={18} />
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`p-4 rounded-full shadow-lg transition-all duration-300 ${
          isOpen 
            ? 'bg-brand-gray text-white rotate-90 border border-white/10' 
            : 'bg-brand-accent text-white hover:bg-brand-accentHover hover:scale-110'
        }`}
      >
        {isOpen ? <X size={24} /> : <MessageSquare size={24} />}
      </button>
    </div>
  );
};
