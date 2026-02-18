
import React, { useState } from 'react';
import { MENU_ITEMS } from '../constants.tsx';
import { MenuItem } from '../types.ts';

export const Menu: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const categories = [
    'All', 
    'Beverages', 
    'Burgers & Sandwiches', 
    'Pizzas', 
    'Pasta & Chinese', 
    'Snacks & Sides', 
    'Desserts'
  ];

  const filteredItems = activeCategory === 'All' 
    ? MENU_ITEMS 
    : MENU_ITEMS.filter(item => item.category === activeCategory);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16 space-y-4">
        <h2 className="text-orange-600 font-bold uppercase tracking-widest text-sm">Delicious Selections</h2>
        <h3 className="text-4xl md:text-5xl font-serif font-bold text-gray-900">Our Signature Menu</h3>
      </div>

      <div className="flex overflow-x-auto pb-8 mb-12 scrollbar-hide space-x-4 justify-start lg:justify-center no-scrollbar">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-8 py-3 rounded-2xl text-sm font-bold whitespace-nowrap transition-all duration-300 ${
              activeCategory === cat 
                ? 'bg-orange-600 text-white shadow-lg shadow-orange-200 scale-105' 
                : 'bg-white text-gray-600 border border-gray-100 hover:bg-orange-50'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredItems.map((item) => (
          <MenuItemCard key={item.id} item={item} />
        ))}
      </div>
      
      <div className="mt-16 bg-orange-50 p-8 rounded-[40px] text-center">
        <p className="text-orange-800 font-bold text-lg italic">"Quality is Our Recipe"</p>
        <p className="text-orange-600 text-sm mt-2">Orders take 20-25 minutes • Last Order at 10:30 PM</p>
      </div>
    </div>
  );
};

const MenuItemCard: React.FC<{ item: MenuItem }> = ({ item }) => {
  return (
    <div className="group bg-white rounded-[32px] overflow-hidden border border-gray-50 transition-all hover:shadow-2xl hover:shadow-orange-100">
      <div className="relative h-64 overflow-hidden">
        <img 
          src={item.image} 
          alt={item.name} 
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        {item.popular && (
          <div className="absolute top-4 left-4 bg-orange-600 text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg">
            Popular Choice
          </div>
        )}
        <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm text-gray-900 px-3 py-1 rounded-full text-sm font-black shadow-lg">
          {item.price}
        </div>
      </div>
      
      <div className="p-8 space-y-3">
        <div className="flex justify-between items-start">
          <h4 className="text-xl font-bold text-gray-900 group-hover:text-orange-600 transition-colors">
            {item.name}
          </h4>
        </div>
        <p className="text-gray-500 text-sm leading-relaxed min-h-[40px]">
          {item.description}
        </p>
        <div className="pt-4 flex items-center justify-between">
           <span className="text-xs font-bold text-orange-600/50 uppercase tracking-widest">{item.category}</span>
           <div className="flex flex-col space-y-2">
             <button className="bg-orange-50 text-orange-600 p-2 rounded-xl hover:bg-orange-600 hover:text-white transition-all">
               <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
               </svg>
             </button>
             <button className="bg-orange-50 text-orange-600 p-2 rounded-xl hover:bg-orange-600 hover:text-white transition-all" title="Add to Cart">
               <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
               </svg>
             </button>
           </div>
        </div>
      </div>
    </div>
  );
};
