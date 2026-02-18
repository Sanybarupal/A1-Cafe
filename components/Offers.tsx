
import React from 'react';

export const Offers: React.FC = () => {
  const isThursday = new Date().getDay() === 4;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-12 space-y-4">
        <h2 className="text-orange-600 font-bold uppercase tracking-widest text-sm">Exclusive Deals</h2>
        <h3 className="text-4xl md:text-5xl font-serif font-bold text-gray-900">Special Offers Just For You</h3>
      </div>

      <div className="grid lg:grid-cols-1 gap-8">
        <div className="relative overflow-hidden rounded-[40px] bg-gradient-to-br from-orange-600 to-orange-400 p-8 md:p-12 text-white shadow-2xl shadow-orange-200 group">
          {/* Background Pattern */}
          <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:scale-110 transition-transform duration-700">
            <svg className="w-64 h-64" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm4.59-12.42L10 14.17l-2.59-2.58L6 13l4 4 8-8z"/>
            </svg>
          </div>

          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="space-y-6 max-w-2xl text-center md:text-left">
              <div className="inline-block bg-white/20 backdrop-blur-md px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest border border-white/30">
                Weekly Celebration
              </div>
              <h4 className="text-5xl md:text-7xl font-serif font-bold leading-tight">
                THURSDAY <br />
                <span className="text-yellow-300">BOGO</span> FEAST
              </h4>
              <p className="text-xl md:text-2xl text-orange-50 font-medium">
                Buy <span className="underline decoration-yellow-300 decoration-2 underline-offset-4">One</span> Get <span className="underline decoration-yellow-300 decoration-2 underline-offset-4">One</span> FREE on all Medium & Large Pizzas!
              </p>
              <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                <div className="bg-white/10 px-6 py-3 rounded-2xl border border-white/20 flex items-center space-x-3">
                  <span className="text-2xl">🍕</span>
                  <span className="font-bold">Every Thursday</span>
                </div>
                <div className="bg-white/10 px-6 py-3 rounded-2xl border border-white/20 flex items-center space-x-3">
                  <span className="text-2xl">⏰</span>
                  <span className="font-bold">10 AM - 10:30 PM</span>
                </div>
              </div>
              
              {isThursday && (
                <div className="animate-pulse flex items-center space-x-2 text-yellow-300 font-black tracking-widest uppercase text-lg">
                  <div className="w-3 h-3 bg-yellow-300 rounded-full"></div>
                  <span>Offer Live Now!</span>
                </div>
              )}
            </div>

            <div className="flex-shrink-0">
               <div className="relative">
                  <div className="absolute inset-0 bg-yellow-400 rounded-full blur-3xl opacity-30 animate-pulse"></div>
                  <div className="relative w-48 h-48 md:w-64 md:h-64 bg-white rounded-full flex items-center justify-center p-2 shadow-2xl rotate-12 group-hover:rotate-0 transition-transform duration-500">
                    <div className="text-center text-orange-600">
                       <p className="text-6xl md:text-8xl font-black leading-none">1+1</p>
                       <p className="text-xl md:text-2xl font-serif italic font-bold">FREE</p>
                    </div>
                  </div>
               </div>
            </div>
          </div>
          
          <div className="mt-12 pt-8 border-t border-white/20 flex flex-col md:flex-row items-center justify-between gap-4">
             <p className="text-sm text-orange-100 italic">*Valid for Dine-in & Takeaway only. Terms & Conditions apply.</p>
             <a 
               href="tel:07357576969"
               className="bg-white text-orange-600 px-10 py-4 rounded-2xl text-lg font-bold hover:bg-yellow-300 hover:text-orange-700 transition-all shadow-xl"
             >
               Order Now
             </a>
          </div>
        </div>
      </div>
    </div>
  );
};
