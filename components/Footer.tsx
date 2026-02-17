
import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t border-gray-100 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-8 md:space-y-0">
          <div className="text-center md:text-left">
            <span className="text-3xl font-serif font-bold tracking-tight text-orange-600">
              A1<span className="text-[#2c2c2c]">cafe</span>
            </span>
            <p className="mt-4 text-gray-500 max-w-xs">
              Bringing premium cafe culture to Ramsinghpur with love and quality.
            </p>
          </div>
          
          <div className="flex space-x-8 text-sm font-bold text-gray-400 uppercase tracking-widest">
            <a href="#" className="hover:text-orange-600 transition-colors">Facebook</a>
            <a href="#" className="hover:text-orange-600 transition-colors">Instagram</a>
            <a href="#" className="hover:text-orange-600 transition-colors">WhatsApp</a>
          </div>
        </div>
        
        <div className="mt-16 pt-8 border-t border-gray-50 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 text-sm text-gray-400">
          <p>© 2024 A1cafe Ramsinghpur. All rights reserved.</p>
          <div className="flex space-x-6">
            <a href="#" className="hover:text-gray-600">Privacy Policy</a>
            <a href="#" className="hover:text-gray-600">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
