
import React from 'react';

export const Hero: React.FC = () => {
  return (
    <div className="relative min-h-[90vh] flex items-center pt-20 overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-orange-50 -z-10 rounded-l-[100px] hidden lg:block"></div>
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-orange-200 rounded-full blur-[100px] opacity-20"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="inline-flex items-center space-x-2 bg-orange-100 text-orange-700 px-4 py-2 rounded-full text-xs font-bold uppercase tracking-widest">
              <span>✨ Top Rated in Ramsinghpur</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-serif font-bold leading-tight text-gray-900">
              Good Food, <br />
              <span className="text-orange-600">Good Vibe,</span> <br />
              Good Time.
            </h1>
            
            <p className="text-lg text-gray-600 max-w-lg leading-relaxed">
              Experience the finest taste at A1cafe. From sizzling burgers to mouth-watering pizzas, we serve excellence in every bite.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <button 
                onClick={() => document.getElementById('menu')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-orange-600 text-white px-8 py-4 rounded-2xl text-lg font-bold hover:bg-orange-700 transition-all hover:scale-105 shadow-xl shadow-orange-200"
              >
                Explore Menu
              </button>
              <button 
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-white text-gray-900 border-2 border-gray-100 px-8 py-4 rounded-2xl text-lg font-bold hover:border-orange-200 transition-all"
              >
                Find Us
              </button>
            </div>

            <div className="flex items-center space-x-6 pt-4">
              <div className="flex -space-x-3">
                {[1,2,3,4].map(i => (
                  <img 
                    key={i}
                    src={`https://picsum.photos/seed/${i + 20}/64/64`}
                    alt="Happy customer"
                    className="w-12 h-12 rounded-full border-4 border-white object-cover"
                  />
                ))}
              </div>
              <div className="text-sm">
                <p className="font-bold text-gray-900">4.86+ Stars</p>
                <p className="text-gray-500">Based on 140+ Google reviews</p>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="relative z-10 rounded-[40px] overflow-hidden shadow-2xl shadow-orange-200 border-8 border-white">
              <img 
                src="https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&q=80&w=800" 
                alt="Delicious Burger" 
                className="w-full h-full object-cover aspect-square hover:scale-110 transition-transform duration-700"
              />
            </div>
            {/* Floating Card */}
            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-3xl shadow-xl z-20 hidden sm:block animate-bounce-slow">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-green-100 rounded-2xl flex items-center justify-center">
                  <span className="text-green-600 text-xl">🚚</span>
                </div>
                <div>
                  <p className="text-xs font-bold text-gray-400 uppercase tracking-tighter">Fast Service</p>
                  <p className="text-sm font-bold text-gray-900">Always On Time</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
