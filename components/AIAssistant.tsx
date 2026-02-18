
import React, { useState, useRef, useEffect } from 'react';
import { getFoodRecommendation, ChatMessage } from '../services/geminiService.ts';

export const AIAssistant: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState('');
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: 'ai', text: "Namaste! 🙏 I'm your A1cafe Taste Buddy. I can recommend the perfect pizza, suggest a refreshing shake, or tell you about our special Thursday BOGO offer! What are you craving today?" }
  ]);
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  const suggestions = [
    "Show me the full menu 📖",
    "What's the BOGO offer? 🍕",
    "Suggest a spicy burger 🍔",
    "Best shakes? 🥤"
  ];

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTo({
        top: scrollRef.current.scrollHeight,
        behavior: 'smooth'
      });
    }
  }, [messages, isOpen, isLoading]);

  const handleSendMessage = async (text: string) => {
    if (!text.trim() || isLoading) return;

    const newMessages: ChatMessage[] = [...messages, { role: 'user', text }];
    setMessages(newMessages);
    setIsLoading(true);

    try {
      // Pass the previous messages as history (excluding the first welcome message if preferred)
      const aiResponse = await getFoodRecommendation(text, messages);
      setMessages(prev => [...prev, { role: 'ai', text: aiResponse }]);
    } catch (error) {
      setMessages(prev => [...prev, { role: 'ai', text: "Sorry, I'm a bit full right now. Can you try again? 😅" }]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!query.trim()) return;
    const text = query;
    setQuery('');
    handleSendMessage(text);
  };

  return (
    <div className="fixed bottom-6 right-6 z-[100]">
      {/* Chat Window */}
      {isOpen && (
        <div className="absolute bottom-24 right-0 w-[90vw] sm:w-[420px] h-[650px] bg-white rounded-[40px] shadow-2xl flex flex-col overflow-hidden border border-orange-100 animate-in fade-in slide-in-from-bottom-10 duration-500">
          <div className="bg-[#1a1a1a] p-6 flex justify-between items-center text-white">
            <div className="flex items-center space-x-3">
              <div className="relative">
                <div className="w-12 h-12 bg-orange-600 rounded-2xl flex items-center justify-center text-2xl shadow-lg shadow-orange-900/40">🤖</div>
                <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 border-2 border-[#1a1a1a] rounded-full"></div>
              </div>
              <div>
                <h4 className="font-bold text-lg">Taste Buddy AI</h4>
                <p className="text-[10px] text-orange-500 uppercase tracking-[0.2em] font-black">AI Concierge • Online</p>
              </div>
            </div>
            <button onClick={() => setIsOpen(false)} className="hover:bg-white/10 p-2 rounded-2xl transition-all">
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          <div ref={scrollRef} className="flex-1 overflow-y-auto p-6 space-y-6 bg-[#fafafa] no-scrollbar">
            {messages.map((m, idx) => (
              <div key={idx} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[85%] p-4 rounded-3xl text-sm leading-relaxed shadow-sm whitespace-pre-line ${
                  m.role === 'user' 
                    ? 'bg-orange-600 text-white rounded-tr-none' 
                    : 'bg-white text-gray-800 rounded-tl-none border border-orange-100'
                }`}>
                  {m.text}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-white p-4 rounded-3xl rounded-tl-none border border-orange-100 shadow-sm">
                  <div className="flex space-x-1.5">
                    <div className="w-2 h-2 bg-orange-300 rounded-full animate-bounce"></div>
                    <div className="w-2 h-2 bg-orange-500 rounded-full animate-bounce [animation-delay:-0.15s]"></div>
                    <div className="w-2 h-2 bg-orange-600 rounded-full animate-bounce [animation-delay:-0.3s]"></div>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Suggested Quick Replies */}
          <div className="px-6 py-4 bg-white border-t border-gray-100 flex overflow-x-auto space-x-2 no-scrollbar">
            {suggestions.map((s, i) => (
              <button
                key={i}
                onClick={() => handleSendMessage(s)}
                className="whitespace-nowrap bg-orange-50 text-orange-700 px-4 py-2 rounded-full text-xs font-bold border border-orange-100 hover:bg-orange-600 hover:text-white transition-all active:scale-95"
              >
                {s}
              </button>
            ))}
          </div>

          <form onSubmit={handleSubmit} className="p-4 bg-white border-t border-gray-100 flex items-center space-x-3">
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Ask for the menu, prices or deals..."
              className="flex-1 bg-gray-50 border border-gray-100 rounded-2xl px-5 py-4 text-sm focus:ring-2 focus:ring-orange-600 focus:bg-white outline-none transition-all"
            />
            <button 
              type="submit"
              disabled={isLoading || !query.trim()}
              className="bg-orange-600 text-white p-4 rounded-2xl hover:bg-orange-700 disabled:opacity-50 transition-all shadow-xl shadow-orange-200 active:scale-95 flex-shrink-0"
            >
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
              </svg>
            </button>
          </form>
        </div>
      )}

      {/* Main Floating Action Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`relative w-20 h-20 rounded-[28px] shadow-2xl flex items-center justify-center transition-all duration-500 group overflow-hidden ${
          isOpen ? 'bg-[#1a1a1a] rotate-90 scale-90' : 'bg-orange-600 hover:bg-orange-700 hover:scale-110 active:scale-95'
        }`}
      >
        <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
        {isOpen ? (
          <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        ) : (
          <div className="relative flex flex-col items-center">
            <span className="text-4xl">🤖</span>
            <span className="absolute -top-1 -right-1 flex h-4 w-4">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
              <span className="relative inline-flex rounded-full h-4 w-4 bg-green-500 border-2 border-orange-600"></span>
            </span>
          </div>
        )}
      </button>
    </div>
  );
};
