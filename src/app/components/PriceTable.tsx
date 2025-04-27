"use client";

import { useState, useEffect } from 'react';

export default function PriceTable() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className={`relative transition-all duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
      <div className="relative z-10 p-8 rounded-2xl overflow-hidden"
           style={{
             background: "linear-gradient(135deg, rgba(93, 9, 121, 0.7) 0%, rgba(156, 24, 170, 0.5) 100%)",
             backdropFilter: "blur(10px)"
           }}>
        
        {/* Background blurred lights */}
        <div className="absolute -top-10 -left-10 w-32 h-32 rounded-full bg-pink-500/30 blur-[60px] z-0"></div>
        <div className="absolute -bottom-10 -right-10 w-32 h-32 rounded-full bg-indigo-500/30 blur-[60px] z-0"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40 h-40 rounded-full bg-pink-500/10 blur-[80px] z-0"></div>
        
        {/* Header */}
        <div className="text-center mb-6 relative z-10">
          <p className="text-sm text-gray-200/70 mb-1">Suitable plans here</p>
          <h2 className="text-2xl font-bold text-white">Nice title for <span className="text-pink-400">Price Table</span></h2>
        </div>
        
        {/* Price */}
        <div className="text-center mb-4 relative z-10">
          <p className="text-4xl font-bold text-pink-400">$499.99</p>
          <p className="text-sm text-white/70">Business Plan</p>
        </div>
        
        {/* Feature bubbles */}
        <div className="relative z-10 flex flex-wrap justify-center gap-4 mt-8">
          <div className="bg-pink-600/30 backdrop-blur-md px-4 py-3 rounded-full text-sm text-white text-center w-32 h-32 flex items-center justify-center flex-col transform hover:scale-105 transition-transform">
            <p className="font-medium">Planned Service Agreements</p>
          </div>
          
          <div className="bg-indigo-600/30 backdrop-blur-md px-4 py-3 rounded-full text-sm text-white text-center w-32 h-32 flex items-center justify-center flex-col transform hover:scale-105 transition-transform">
            <p className="font-medium">Installation and Replacement</p>
          </div>
          
          <div className="bg-purple-600/30 backdrop-blur-md px-4 py-3 rounded-full text-sm text-white text-center w-32 h-32 flex items-center justify-center flex-col transform hover:scale-105 transition-transform">
            <p className="font-medium">FREE In-Home Estimate</p>
          </div>
          
          <div className="bg-cyan-600/30 backdrop-blur-md px-4 py-3 rounded-full text-sm text-white text-center w-32 h-32 flex items-center justify-center flex-col transform hover:scale-105 transition-transform">
            <p className="font-medium">Financing Available</p>
          </div>
        </div>
      </div>
    </div>
  );
} 