
import React from 'react';
import { CAFE_INFO } from '../constants';

export const Contact: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="bg-[#1a1a1a] rounded-[60px] overflow-hidden text-white shadow-2xl shadow-gray-400/20">
        <div className="grid lg:grid-cols-2">
          {/* Information Side */}
          <div className="p-10 md:p-20 space-y-12 bg-gradient-to-br from-[#222] to-[#111]">
            <div className="space-y-4">
              <div className="inline-flex items-center space-x-2 bg-orange-600/20 text-orange-500 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-[0.2em]">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-orange-500"></span>
                </span>
                <span>Visit Our Space</span>
              </div>
              <h3 className="text-4xl md:text-6xl font-serif font-bold leading-tight">
                We're in the Heart of <span className="text-orange-600">Ramsinghpur</span>
              </h3>
              <p className="text-gray-400 text-lg max-w-md font-light">
                Located conveniently in Hayer Market, we are your go-to spot for the best vibes and even better food.
              </p>
            </div>
            
            <div className="grid gap-8">
              <ContactItem 
                emoji="📍" 
                title="Our Location" 
                detail={CAFE_INFO.address} 
                subDetail="Hayer Market, Main Road"
              />
              <ContactItem 
                emoji="📞" 
                title="Direct Line" 
                detail={CAFE_INFO.phone} 
                subDetail="Call for takeaway or reservations"
              />
              <ContactItem 
                emoji="🕒" 
                title="Serving Hours" 
                detail={CAFE_INFO.hours} 
                subDetail="Open 7 days a week"
              />
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-6">
              <a 
                href="https://www.google.com/maps/dir//A1cafe,+Hayer+market,+Gharsana+-+Ramsinghpur+Rd,+Ramsinghpur,+Rajasthan+335703"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center space-x-3 bg-orange-600 text-white px-8 py-5 rounded-[28px] text-lg font-bold hover:bg-orange-700 transition-all hover:scale-105 active:scale-95 shadow-xl shadow-orange-900/20"
              >
                <span>Open in Maps</span>
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </a>
              <a 
                href={`tel:${CAFE_INFO.phone.replace(/\s+/g, '')}`}
                className="flex items-center justify-center space-x-3 bg-white/5 border border-white/10 text-white px-8 py-5 rounded-[28px] text-lg font-bold hover:bg-white/10 transition-all"
              >
                <span>Call Us Now</span>
              </a>
            </div>
          </div>
          
          {/* Interactive Map Side */}
          <div className="h-[500px] lg:h-auto relative group">
             <div className="absolute inset-0 bg-orange-600/10 pointer-events-none z-10 group-hover:bg-transparent transition-colors duration-500"></div>
             <iframe 
               src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3460.1030386701833!2d73.535492!3d29.3524948!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3914090013b53f65%3A0xd9966113b1900f86!2sA1cafe!5e0!3m2!1sen!2sin!4v1715421234567!5m2!1sen!2sin" 
               width="100%" 
               height="100%" 
               style={{ border: 0 }} 
               allowFullScreen 
               loading="lazy" 
               referrerPolicy="no-referrer-when-downgrade"
               className="grayscale contrast-[1.1] brightness-[0.8] hover:grayscale-0 hover:brightness-100 transition-all duration-700"
             ></iframe>
             
             {/* Map Overlay Label */}
             <div className="absolute top-8 right-8 bg-black/80 backdrop-blur-md p-4 rounded-2xl border border-white/10 z-20 hidden md:block">
                <p className="text-xs font-bold text-orange-500 uppercase tracking-widest mb-1">Landmark</p>
                <p className="text-sm font-medium">Near Hayer Market Square</p>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const ContactItem: React.FC<{ emoji: string; title: string; detail: string; subDetail: string }> = ({ emoji, title, detail, subDetail }) => (
  <div className="flex items-start space-x-6 group">
    <div className="w-14 h-14 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center shrink-0 group-hover:bg-orange-600/20 group-hover:border-orange-600/30 transition-all duration-300">
      <span className="text-2xl">{emoji}</span>
    </div>
    <div className="space-y-1">
      <h4 className="font-bold text-xl text-white group-hover:text-orange-500 transition-colors">{title}</h4>
      <p className="text-gray-300 font-medium">{detail}</p>
      <p className="text-xs text-gray-500 uppercase tracking-widest font-bold">{subDetail}</p>
    </div>
  </div>
);
