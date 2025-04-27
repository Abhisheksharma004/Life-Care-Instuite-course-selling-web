"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative z-10 py-28 border-b border-[#333333] overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute -top-20 -right-20 w-64 h-64 bg-[#D2691E] rounded-full opacity-5 blur-[80px]"></div>
      <div className="absolute -bottom-32 -left-20 w-80 h-80 bg-[#8B4513] rounded-full opacity-5 blur-[100px]"></div>
      
      <div className="container mx-auto px-4">
        <div className={`max-w-4xl mx-auto text-center transition-all duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0 translate-y-10'}`}>
          <span className="inline-block px-4 py-1 glass-effect rounded-full text-sm font-medium text-[#D2691E] mb-6 animate-pulse">
            Transform Your Learning Experience
          </span>
          
          <h1 className="text-4xl md:text-6xl font-bold mb-8 gradient-text glow-text leading-tight">
            Empower Your Education Journey With Us
          </h1>
          
          <p className="text-xl md:text-2xl mb-10 text-white/80 max-w-3xl mx-auto">
            Discover a <span className="text-[#D2691E] font-semibold">modern course platform</span> where students learn, teachers inspire, and admins efficiently manage the entire experience.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-5 mb-12">
            <Link href="/signup" 
                  className="px-8 py-4 bg-[#D2691E] text-white rounded-lg text-lg font-medium 
                           hover:bg-[#8B4513] transition transform hover:scale-105 
                           shadow-lg shadow-[#D2691E]/20">
              Get Started Free
            </Link>
            <Link href="/courses" 
                  className="px-8 py-4 glass-effect text-[#D2691E] border border-[#D2691E] 
                           rounded-lg text-lg font-medium hover:bg-[#D2691E] hover:text-white 
                           transition transform hover:scale-105">
              View Courses
            </Link>
          </div>
          
          <div className="flex justify-center items-center space-x-6 text-[#AAAAAA]">
            <div className="flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#D2691E] mr-2" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>Free Sign-up</span>
            </div>
            <div className="flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#D2691E] mr-2" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>Customizable</span>
            </div>
            <div className="flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#D2691E] mr-2" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>24/7 Support</span>
            </div>
          </div>
        </div>
      </div>
      
      {/* Wave decoration at bottom */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 100" className="w-full h-auto fill-[#121212]">
          <path fillOpacity="0.2" d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,42.7C1120,32,1280,32,1360,32L1440,32L1440,100L1360,100C1280,100,1120,100,960,100C800,100,640,100,480,100C320,100,160,100,80,100L0,100Z"></path>
        </svg>
      </div>
    </section>
  );
} 