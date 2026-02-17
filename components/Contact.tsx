
import React from 'react';
import { CAFE_INFO } from '../constants';

export const Contact: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="bg-[#2c2c2c] rounded-[60px] overflow-hidden text-white">
        <div className="grid lg:grid-cols-2">
          <div className="p-12 md:p-20 space-y-12">
            <div className="space-y-4">
              <h2 className="text-orange-500 font-bold uppercase tracking-widest text-sm">Visit Us</h2>
              <h3 className="text-4xl md:text-5xl font-serif font-bold">Find A1cafe in Ramsinghpur</h3>
            </div>
            
            <div className="grid gap-10">
              <div className="flex items-start space-x-6">
                <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center shrink-0">
                  <span className="text-2xl text-orange-500">📍</span>
                </div>
                <div className="space-y-2">
                  <h4 className="font-bold text-xl">Our Address</h4>
                  <p className="text-gray-400 leading-relaxed text-lg">{CAFE_INFO.address}</p>
                </div>
              </div>

              <div className="flex items-start space-x-6">
                <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center shrink-0">
                  <span className="text-2xl text-orange-500">📞</span>
                </div>
                <div className="space-y-2">
                  <h4 className="font-bold text-xl">Call for Pickup</h4>
                  <p className="text-gray-400 leading-relaxed text-lg">{CAFE_INFO.phone}</p>
                </div>
              </div>

              <div className="flex items-start space-x-6">
                <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center shrink-0">
                  <span className="text-2xl text-orange-500">🕒</span>
                </div>
                <div className="space-y-2">
                  <h4 className="font-bold text-xl">Working Hours</h4>
                  <p className="text-gray-400 leading-relaxed text-lg">Everyday: {CAFE_INFO.hours}</p>
                </div>
              </div>
            </div>

            <div className="pt-8">
              <a 
                href="https://www.google.com/maps/dir//A1cafe,+Hayer+market,+Gharsana+-+Ramsinghpur+Rd,+Ramsinghpur,+Rajasthan+335703"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-orange-600 text-white px-10 py-5 rounded-[24px] text-lg font-bold hover:bg-orange-700 transition-all hover:scale-105"
              >
                Get Directions
              </a>
            </div>
          </div>
          
          <div className="h-[400px] lg:h-auto relative">
             <iframe 
               src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3460.1030386701833!2d73.535492!3d29.3524948!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3914090013b53f65%3A0xd9966113b1900f86!2sA1cafe!5e0!3m2!1sen!2sin!4v1715421234567!5m2!1sen!2sin" 
               width="100%" 
               height="100%" 
               style={{ border: 0 }} 
               allowFullScreen 
               loading="lazy" 
               referrerPolicy="no-referrer-when-downgrade"
               className="grayscale contrast-[1.2] opacity-80"
             ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};
