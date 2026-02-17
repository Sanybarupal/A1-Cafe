
import React from 'react';
import { REVIEWS, CAFE_INFO } from '../constants';

export const Reviews: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid lg:grid-cols-3 gap-16 items-start">
        <div className="lg:sticky lg:top-32 space-y-8">
          <div className="space-y-4">
            <h2 className="text-orange-600 font-bold uppercase tracking-widest text-sm">Feedback</h2>
            <h3 className="text-4xl font-serif font-bold text-gray-900">What Our <br />Guests Say</h3>
          </div>
          
          <div className="bg-white p-8 rounded-[40px] shadow-xl border border-gray-100">
            <div className="text-5xl font-serif font-bold text-gray-900 mb-2">{CAFE_INFO.rating}</div>
            <div className="flex items-center space-x-1 text-orange-400 mb-4">
              {[1,2,3,4,5].map(i => (
                <svg key={i} className="w-6 h-6 fill-current" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <p className="text-gray-500 font-medium">Verified Google Reviews</p>
            <a 
              href="https://www.google.com/maps/place/A1cafe/@29.3524948,73.535492,17z/data=!4m8!3m7!1s0x3914090013b53f65:0xd9966113b1900f86!8m2!3d29.3524948!4d73.535492!9m1!1b1!16s%2Fg%2F11w56v5_t2"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center text-orange-600 font-bold hover:underline"
            >
              View All Reviews
              <svg className="w-5 h-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        </div>

        <div className="lg:col-span-2 grid gap-6">
          {REVIEWS.map((review) => (
            <div key={review.id} className="bg-white p-10 rounded-[40px] border border-gray-50 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex justify-between items-start mb-6">
                <div className="flex items-center space-x-4">
                  <div className="w-14 h-14 bg-orange-100 rounded-full flex items-center justify-center text-orange-600 font-bold text-xl uppercase">
                    {review.author[0]}
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 text-lg">{review.author}</h4>
                    <p className="text-sm text-gray-400">{review.date}</p>
                  </div>
                </div>
                <div className="flex text-orange-400">
                  {[...Array(review.rating)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </div>
              <p className="text-gray-600 text-lg italic leading-relaxed">
                "{review.text}"
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
