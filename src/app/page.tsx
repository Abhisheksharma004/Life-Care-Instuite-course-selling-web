"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#0f0014] relative overflow-hidden">
      {/* Decorative Gradient Orbs */}
      <div className="fixed w-[500px] h-[500px] rounded-full bg-gradient-to-r from-[#ff2c9c] to-[#9b4fb8] opacity-10 blur-[100px] -top-60 -left-60 z-0"></div>
      <div className="fixed w-[600px] h-[600px] rounded-full bg-gradient-to-r from-[#6f38c5] to-[#ff2c9c] opacity-10 blur-[120px] -bottom-80 -right-80 z-0"></div>
      
      {/* Header */}
      <header className="glass-effect text-white sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <div className="text-2xl font-bold gradient-text">Life Care Institute</div>
            
            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-8">
              <Link href="/" className="hover:text-pink-500 transition">Home</Link>
              <Link href="/courses" className="hover:text-pink-500 transition">Courses</Link>
              <Link href="/about" className="hover:text-pink-500 transition">About</Link>
              <Link href="/contact" className="hover:text-pink-500 transition">Contact</Link>
            </nav>
            
            {/* Desktop Auth Buttons */}
            <div className="hidden md:flex space-x-4">
              <Link href="/login" className="px-4 py-2 bg-pink-600 text-white rounded-md hover:bg-pink-700 transition">
                Login
              </Link>
              <Link href="/signup" className="px-4 py-2 border border-pink-500 text-pink-500 rounded-md hover:bg-pink-500 hover:text-white transition">
                Sign Up
              </Link>
            </div>
            
            {/* Mobile Menu Button */}
            <button 
              className="md:hidden text-white focus:outline-none"
              onClick={toggleMenu}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
          
          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden absolute top-16 left-0 right-0 glass-effect shadow-lg z-50 animate-fadeIn">
              <div className="flex flex-col p-4 space-y-3">
                <Link href="/" className="text-white hover:text-pink-500">Home</Link>
                <Link href="/courses" className="text-white hover:text-pink-500">Courses</Link>
                <Link href="/about" className="text-white hover:text-pink-500">About</Link>
                <Link href="/contact" className="text-white hover:text-pink-500">Contact</Link>
                <div className="flex flex-col space-y-2 pt-2 border-t border-gray-200">
                  <Link href="/login" className="bg-pink-600 text-white px-4 py-2 rounded-md text-center hover:bg-pink-700 transition-colors">
                    Login
                  </Link>
                  <Link href="/signup" className="bg-gradient-to-r from-pink-600 to-purple-600 text-white px-4 py-2 rounded-md text-center hover:opacity-90 transition-opacity">
                    Sign Up
                  </Link>
                </div>
              </div>
            </div>
          )}
        </div>
      </header>

      {/* Hero Section - Redesigned */}
      <section className="relative z-10 pt-16 pb-24 overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-br from-pink-500/20 to-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/3 right-1/4 w-72 h-72 bg-gradient-to-tr from-indigo-500/20 to-cyan-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDuration: "8s" }}></div>
        
        {/* Floating particles */}
        <div className="absolute inset-0 overflow-hidden">
          {/* These are decorative elements */}
          <div className="absolute top-[15%] left-[10%] w-2 h-2 bg-pink-500 rounded-full animate-float"></div>
          <div className="absolute top-[25%] right-[15%] w-3 h-3 bg-purple-500 rounded-full animate-float" style={{ animationDuration: "6s", animationDelay: "1s" }}></div>
          <div className="absolute bottom-[35%] left-[25%] w-2 h-2 bg-indigo-400 rounded-full animate-float" style={{ animationDuration: "7s", animationDelay: "0.5s" }}></div>
          <div className="absolute bottom-[20%] right-[35%] w-4 h-4 bg-pink-400 rounded-full animate-float" style={{ animationDuration: "5s", animationDelay: "1.5s" }}></div>
        </div>
        
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left column - Text content */}
            <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
              <div className="inline-block px-6 py-2 rounded-full bg-gradient-to-r from-pink-500/10 to-purple-500/10 backdrop-blur-sm border border-pink-500/20 mb-6">
                <span className="text-sm font-medium gradient-text">State Board Curriculum Specialists</span>
              </div>
              
              <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                <span className="gradient-text glow-text">Master</span> 
                <span className="text-white"> Your </span>
                <span className="gradient-text glow-text">State Board</span>
                <span className="text-white"> Subjects</span>
              </h1>
              
              <p className="text-xl mb-8 text-gray-200 leading-relaxed">
                Expert-led courses specifically designed for state board students in grades 9-12.
                Excel in Physics, Chemistry, Mathematics and all core subjects with our
                comprehensive learning platform aligned perfectly with your curriculum.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Link href="/courses" className="py-4 px-8 bg-gradient-to-r from-pink-600 to-purple-600 text-white rounded-lg font-medium transform hover:translate-y-[-2px] hover:shadow-xl transition-all">
                  Explore State Board Courses
                </Link>
                <Link href="/teacher/signup" className="py-4 px-8 glass-effect text-white border border-pink-500/50 rounded-lg font-medium hover:border-pink-500 transform hover:translate-y-[-2px] transition-all">
                  Become a Teacher
                </Link>
              </div>
              
              <div className="flex items-center space-x-6 text-sm text-gray-400">
                <div className="flex items-center">
                  <span className="text-pink-500 mr-2">✓</span>
                  <span>State Board Aligned</span>
                </div>
                <div className="flex items-center">
                  <span className="text-pink-500 mr-2">✓</span>
                  <span>Grades 9-12</span>
                </div>
                <div className="flex items-center">
                  <span className="text-pink-500 mr-2">✓</span>
                  <span>Expert Teachers</span>
                </div>
              </div>
            </div>
            
            {/* Right column - Visual elements */}
            <div className={`relative transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`} style={{ height: '480px' }}>
              <div className="absolute inset-0 flex items-center justify-center">
                {/* Central circle with backdrop blur */}
                <div className="relative w-80 h-80 rounded-full bg-gradient-to-br from-pink-500/30 to-purple-600/30 backdrop-blur-sm flex items-center justify-center border border-white/10">
                  {/* Inner glow */}
                  <div className="absolute inset-0 rounded-full bg-gradient-to-br from-pink-500/10 to-purple-600/10 blur-md"></div>
                  
                  {/* Content inside central circle */}
                  <div className="text-center p-8 z-10">
                    <div className="text-2xl font-bold gradient-text mb-2">Start Learning</div>
                    <div className="text-white/80 text-sm mb-4">Access anywhere, anytime</div>
                    <div className="inline-block py-2 px-4 bg-gradient-to-r from-pink-600/80 to-purple-600/80 rounded-lg text-white font-medium">
                      Join Today
                    </div>
                  </div>
                </div>
                
                {/* Orbiting features */}
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/4 w-24 h-24 rounded-full bg-indigo-600/20 backdrop-blur-md flex items-center justify-center text-center p-4 border border-white/10 animate-orbit" style={{animationDuration: "20s"}}>
                  <span className="text-white text-xs font-medium">State Board Grade 9-10</span>
                </div>
                
                <div className="absolute top-1/2 right-0 transform translate-x-1/4 -translate-y-1/2 w-24 h-24 rounded-full bg-pink-500/20 backdrop-blur-md flex items-center justify-center text-center p-4 border border-white/10 animate-orbit" style={{animationDuration: "25s", animationDelay: "1s"}}>
                  <span className="text-white text-xs font-medium">State Board Grade 11-12</span>
                </div>
                
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/4 w-24 h-24 rounded-full bg-purple-500/20 backdrop-blur-md flex items-center justify-center text-center p-4 border border-white/10 animate-orbit" style={{animationDuration: "30s", animationDelay: "2s"}}>
                  <span className="text-white text-xs font-medium">PCM Focus</span>
                </div>
                
                <div className="absolute top-1/2 left-0 transform -translate-x-1/4 -translate-y-1/2 w-24 h-24 rounded-full bg-cyan-500/20 backdrop-blur-md flex items-center justify-center text-center p-4 border border-white/10 animate-orbit" style={{animationDuration: "22s", animationDelay: "1.5s"}}>
                  <span className="text-white text-xs font-medium">All Subjects</span>
                </div>
              </div>
            </div>
          </div>
          
          {/* Stats row */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 max-w-4xl mx-auto">
            <div className="glass-card p-6 text-center transform transition hover:scale-105">
              <div className="text-3xl gradient-text font-bold mb-2">1000+</div>
              <div className="text-sm text-gray-400">Students</div>
            </div>
            <div className="glass-card p-6 text-center transform transition hover:scale-105">
              <div className="text-3xl gradient-text font-bold mb-2">50+</div>
              <div className="text-sm text-gray-400">Courses</div>
            </div>
            <div className="glass-card p-6 text-center transform transition hover:scale-105">
              <div className="text-3xl gradient-text font-bold mb-2">20+</div>
              <div className="text-sm text-gray-400">Expert Teachers</div>
            </div>
            <div className="glass-card p-6 text-center transform transition hover:scale-105">
              <div className="text-3xl gradient-text font-bold mb-2">95%</div>
              <div className="text-sm text-gray-400">Pass Rate</div>
            </div>
          </div>
        </div>
        
        {/* Bottom wave decoration */}
        <div className="absolute bottom-0 left-0 right-0 h-16 overflow-hidden">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none" className="absolute bottom-0 w-full h-full">
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C59.71,118.11,130.83,141.14,214.86,113.63,255.57,96,296.33,76.67,321.39,56.44Z" className="fill-[#0f0014]"></path>
          </svg>
        </div>
      </section>

      {/* About Life Care Institute Section */}
      <section className="py-20 relative z-10">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold gradient-text mb-6">About Life Care Institute</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Life Care Institute specializes in providing comprehensive educational resources
              for state board students in grades 9-12, focusing on core subjects to ensure
              academic excellence and exam success.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-10">
            <div className="glass-card p-8 text-center">
              <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-gradient-to-br from-pink-500/30 to-purple-500/30 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-pink-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="text-xl font-bold gradient-text mb-3">Board-Aligned Curriculum</h3>
              <p className="text-gray-300">
                Our courses strictly follow state board syllabus with comprehensive notes, examples, and practice questions.
              </p>
            </div>
            
            <div className="glass-card p-8 text-center">
              <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-gradient-to-br from-indigo-500/30 to-cyan-500/30 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold gradient-text mb-3">Experienced Teachers</h3>
              <p className="text-gray-300">
                Learn from state board experts with years of teaching experience who know exactly what students need to excel.
              </p>
            </div>
            
            <div className="glass-card p-8 text-center">
              <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-gradient-to-br from-purple-500/30 to-pink-500/30 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold gradient-text mb-3">Exam Preparation</h3>
              <p className="text-gray-300">
                Access previous years' papers, mock tests, and regular assessments to ensure you're fully prepared for board exams.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section renamed to Popular Courses */}
      <section className="py-20 relative z-10 border-t border-[#333333]">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-16 gradient-text">✨ Popular Courses</h2>
          
          <div className="grid md:grid-cols-3 gap-10 mb-16">
            {/* Course Card 1 */}
            <div className="glass-card overflow-hidden group animate-slideUp" style={{animationDelay: "0.1s"}}>
              <div className="relative">
                <div className="h-48 bg-gradient-to-r from-pink-500/30 to-purple-600/30 relative overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-4xl">🧪</span>
                  </div>
                </div>
                <div className="absolute top-3 right-3 bg-pink-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                  Most Popular
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs text-pink-500 font-medium">Grade 11-12</span>
                  <div className="flex items-center">
                    <span className="text-yellow-500 mr-1">★★★★★</span>
                    <span className="text-xs text-gray-400">(345)</span>
                  </div>
                </div>
                
                <h4 className="text-xl font-bold mb-2 gradient-text">Complete Physics</h4>
                <p className="text-sm text-gray-400 mb-4">Master mechanics, electromagnetism, optics and modern physics with practical examples and solved problems.</p>
                
                <div className="flex items-center justify-between">
                  <span className="text-xl font-bold gradient-text">₹2,999</span>
                  <button className="text-xs bg-gradient-to-r from-pink-600 to-purple-600 hover:opacity-90 text-white px-4 py-2 rounded-md transition-all">
                    Enroll Now
                  </button>
                </div>
              </div>
            </div>
            
            {/* Course Card 2 */}
            <div className="glass-card overflow-hidden group animate-slideUp" style={{animationDelay: "0.2s"}}>
              <div className="relative">
                <div className="h-48 bg-gradient-to-r from-indigo-500/30 to-cyan-500/30 relative overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-4xl">📝</span>
                  </div>
                </div>
                <div className="absolute top-3 right-3 bg-indigo-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                  New Batch
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs text-indigo-400 font-medium">Grade 9-10</span>
                  <div className="flex items-center">
                    <span className="text-yellow-500 mr-1">★★★★☆</span>
                    <span className="text-xs text-gray-400">(218)</span>
                  </div>
                </div>
                
                <h4 className="text-xl font-bold mb-2 gradient-text">All Subjects Bundle</h4>
                <p className="text-sm text-gray-400 mb-4">Comprehensive coverage of Mathematics, Science, Social Studies, English and other core subjects.</p>
                
                <div className="flex items-center justify-between">
                  <span className="text-xl font-bold gradient-text">₹3,499</span>
                  <button className="text-xs bg-gradient-to-r from-indigo-600 to-cyan-600 hover:opacity-90 text-white px-4 py-2 rounded-md transition-all">
                    Enroll Now
                  </button>
                </div>
              </div>
            </div>
            
            {/* Course Card 3 */}
            <div className="glass-card overflow-hidden group animate-slideUp" style={{animationDelay: "0.3s"}}>
              <div className="relative">
                <div className="h-48 bg-gradient-to-r from-purple-500/30 to-pink-500/30 relative overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-4xl">🧮</span>
                  </div>
                </div>
                <div className="absolute top-3 right-3 bg-purple-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                  High Demand
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs text-purple-400 font-medium">Grade 11-12</span>
                  <div className="flex items-center">
                    <span className="text-yellow-500 mr-1">★★★★★</span>
                    <span className="text-xs text-gray-400">(294)</span>
                  </div>
                </div>
                
                <h4 className="text-xl font-bold mb-2 gradient-text">Advanced Mathematics</h4>
                <p className="text-sm text-gray-400 mb-4">Conquer complex topics including calculus, algebra, trigonometry, and probability with step-by-step solutions.</p>
                
                <div className="flex items-center justify-between">
                  <span className="text-xl font-bold gradient-text">₹2,499</span>
                  <button className="text-xs bg-gradient-to-r from-purple-600 to-pink-600 hover:opacity-90 text-white px-4 py-2 rounded-md transition-all">
                    Enroll Now
                  </button>
                </div>
              </div>
            </div>
          </div>
          
          <div className="text-center">
            <Link href="/courses" className="inline-flex items-center py-3 px-8 rounded-lg bg-gradient-to-r from-pink-600 to-purple-600 text-white font-medium hover:opacity-90 transition-all">
              View All Courses
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Popular Teachers Section */}
      <section className="py-20 relative z-10 border-t border-[#333333]">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-16 gradient-text">👨‍🏫 Our Expert Teachers</h2>
          
          <div className="grid md:grid-cols-3 gap-10 mb-16">
            {/* Teacher Card 1 */}
            <div className="glass-card overflow-hidden group animate-slideUp" style={{animationDelay: "0.1s"}}>
              <div className="relative">
                <div className="h-48 bg-gradient-to-r from-pink-500/30 to-purple-600/30 relative overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-24 h-24 rounded-full bg-gradient-to-r from-pink-600 to-purple-600 flex items-center justify-center text-white text-4xl font-bold">
                      RS
                    </div>
                  </div>
                </div>
                <div className="absolute top-3 right-3 bg-pink-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                  Top Rated
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs text-pink-500 font-medium">Physics Expert</span>
                  <div className="flex items-center">
                    <span className="text-yellow-500 mr-1">★★★★★</span>
                    <span className="text-xs text-gray-400">(125)</span>
                  </div>
                </div>
                
                <h4 className="text-xl font-bold mb-2 gradient-text">Dr. Rajesh Sharma</h4>
                <p className="text-sm text-gray-400 mb-4">Ph.D in Physics with 15+ years of teaching experience. Specializes in making complex concepts easy to understand.</p>
                
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-400">12 Courses</span>
                  <button className="text-xs bg-gradient-to-r from-pink-600 to-purple-600 hover:opacity-90 text-white px-4 py-2 rounded-md transition-all">
                    View Profile
                  </button>
                </div>
              </div>
            </div>
            
            {/* Teacher Card 2 */}
            <div className="glass-card overflow-hidden group animate-slideUp" style={{animationDelay: "0.2s"}}>
              <div className="relative">
                <div className="h-48 bg-gradient-to-r from-indigo-500/30 to-cyan-500/30 relative overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-24 h-24 rounded-full bg-gradient-to-r from-indigo-600 to-cyan-600 flex items-center justify-center text-white text-4xl font-bold">
                      PD
                    </div>
                  </div>
                </div>
                <div className="absolute top-3 right-3 bg-indigo-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                  Featured
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs text-indigo-400 font-medium">Mathematics Expert</span>
                  <div className="flex items-center">
                    <span className="text-yellow-500 mr-1">★★★★★</span>
                    <span className="text-xs text-gray-400">(98)</span>
                  </div>
                </div>
                
                <h4 className="text-xl font-bold mb-2 gradient-text">Priya Desai</h4>
                <p className="text-sm text-gray-400 mb-4">M.Sc in Mathematics with expertise in teaching algebra, calculus and statistics for board exams.</p>
                
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-400">8 Courses</span>
                  <button className="text-xs bg-gradient-to-r from-indigo-600 to-cyan-600 hover:opacity-90 text-white px-4 py-2 rounded-md transition-all">
                    View Profile
                  </button>
                </div>
              </div>
            </div>
            
            {/* Teacher Card 3 */}
            <div className="glass-card overflow-hidden group animate-slideUp" style={{animationDelay: "0.3s"}}>
              <div className="relative">
                <div className="h-48 bg-gradient-to-r from-purple-500/30 to-pink-500/30 relative overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-24 h-24 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 flex items-center justify-center text-white text-4xl font-bold">
                      AK
                    </div>
                  </div>
                </div>
                <div className="absolute top-3 right-3 bg-purple-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                  New
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs text-purple-400 font-medium">Chemistry Expert</span>
                  <div className="flex items-center">
                    <span className="text-yellow-500 mr-1">★★★★☆</span>
                    <span className="text-xs text-gray-400">(76)</span>
                  </div>
                </div>
                
                <h4 className="text-xl font-bold mb-2 gradient-text">Amit Kumar</h4>
                <p className="text-sm text-gray-400 mb-4">Chemistry specialist with a knack for simplifying organic and inorganic concepts for state board students.</p>
                
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-400">5 Courses</span>
                  <button className="text-xs bg-gradient-to-r from-purple-600 to-pink-600 hover:opacity-90 text-white px-4 py-2 rounded-md transition-all">
                    View Profile
                  </button>
                </div>
              </div>
            </div>
          </div>
          
          <div className="text-center">
            <Link href="/teachers" className="inline-flex items-center py-3 px-8 rounded-lg bg-gradient-to-r from-pink-600 to-purple-600 text-white font-medium hover:opacity-90 transition-all">
              Meet All Teachers
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 relative z-10">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-16 gradient-text">How It Works</h2>
          
          <div className="grid md:grid-cols-4 gap-8">
            {/* Step 1 */}
            <div className="relative">
              <div className="glass-card p-8 text-center h-full">
                <div className="w-12 h-12 rounded-full bg-gradient-to-r from-pink-500 to-purple-600 flex items-center justify-center text-white font-bold text-xl mb-6 mx-auto">1</div>
                <h3 className="text-xl font-bold gradient-text mb-4">Choose Your Grade</h3>
                <p className="text-gray-300">Select your grade (9th, 10th, 11th, or 12th) and the subjects you need help with.</p>
              </div>
              {/* Arrow - visible only on desktop */}
              <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-pink-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </div>
            </div>
            
            {/* Step 2 */}
            <div className="relative">
              <div className="glass-card p-8 text-center h-full">
                <div className="w-12 h-12 rounded-full bg-gradient-to-r from-indigo-500 to-cyan-500 flex items-center justify-center text-white font-bold text-xl mb-6 mx-auto">2</div>
                <h3 className="text-xl font-bold gradient-text mb-4">Enroll in Courses</h3>
                <p className="text-gray-300">Choose individual subjects or save with our complete grade bundles for comprehensive coverage.</p>
              </div>
              {/* Arrow - visible only on desktop */}
              <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-pink-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </div>
            </div>
            
            {/* Step 3 */}
            <div className="relative">
              <div className="glass-card p-8 text-center h-full">
                <div className="w-12 h-12 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center text-white font-bold text-xl mb-6 mx-auto">3</div>
                <h3 className="text-xl font-bold gradient-text mb-4">Study & Practice</h3>
                <p className="text-gray-300">Access video lessons, notes, solved examples, and practice questions that follow state board curriculum.</p>
              </div>
              {/* Arrow - visible only on desktop */}
              <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-pink-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </div>
            </div>
            
            {/* Step 4 */}
            <div className="glass-card p-8 text-center h-full">
              <div className="w-12 h-12 rounded-full bg-gradient-to-r from-pink-600 to-purple-700 flex items-center justify-center text-white font-bold text-xl mb-6 mx-auto">4</div>
              <h3 className="text-xl font-bold gradient-text mb-4">Ace Your Exams</h3>
              <p className="text-gray-300">Take regular assessments and mock tests to ensure you're fully prepared for board examinations.</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* For Teachers Section */}
      <section className="py-20 relative z-10 border-t border-[#333333]">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold gradient-text mb-6">For Teachers</h2>
              <p className="text-xl text-gray-300 mb-8">
                Are you an experienced state board teacher? Join our platform to share your expertise with students and help them excel in their academic journey.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-r from-pink-500/20 to-purple-500/20 flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-pink-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold gradient-text mb-2">Create Board-specific Content</h3>
                    <p className="text-gray-300">Use our tools to create video lessons, notes, and assessments that align with state board curriculum.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-r from-pink-500/20 to-purple-500/20 flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-pink-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold gradient-text mb-2">Detailed Analytics</h3>
                    <p className="text-gray-300">Track student engagement, revenue, and course performance with our comprehensive analytics.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-r from-pink-500/20 to-purple-500/20 flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-pink-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold gradient-text mb-2">Fair Revenue Share</h3>
                    <p className="text-gray-300">Earn up to 70% of course sales with transparent revenue sharing and monthly payouts.</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-10">
                <Link href="/teacher/signup" className="inline-flex items-center py-3 px-8 rounded-lg bg-gradient-to-r from-pink-600 to-purple-600 text-white font-medium hover:opacity-90 transition-all">
                  Become an Instructor
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </Link>
              </div>
            </div>
            
            <div className="relative">
              <div className="glass-card overflow-hidden rounded-xl">
                <div className="p-8 relative z-10">
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold gradient-text mb-2">Teacher Success</h3>
                    <p className="text-gray-300">Join our community of successful teachers</p>
                  </div>
                  
                  <div className="space-y-6">
                    <div className="flex items-center p-4 rounded-lg bg-gradient-to-r from-pink-500/10 to-purple-600/10">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-r from-pink-500/30 to-purple-600/30 flex items-center justify-center text-white font-bold text-xl mr-4">
                        <span>R</span>
                      </div>
                      <div>
                        <h4 className="text-white font-medium">Rajesh Sharma</h4>
                        <div className="flex items-center">
                          <span className="text-yellow-500 mr-1">★★★★★</span>
                          <span className="text-xs text-gray-400">Physics Teacher</span>
                        </div>
                        <p className="text-sm text-gray-300 mt-1">"Teaching on this platform has allowed me to reach students across the state and help them excel in their board exams."</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center p-4 rounded-lg bg-gradient-to-r from-indigo-500/10 to-cyan-500/10">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-r from-indigo-500/30 to-cyan-500/30 flex items-center justify-center text-white font-bold text-xl mr-4">
                        <span>P</span>
                      </div>
                      <div>
                        <h4 className="text-white font-medium">Priya Desai</h4>
                        <div className="flex items-center">
                          <span className="text-yellow-500">★★★★★</span>
                          <span className="text-xs text-gray-400">Mathematics Teacher</span>
                        </div>
                        <p className="text-sm text-gray-300 mt-1">"The platform provides all the tools I need to create effective lessons that follow the state board curriculum."</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Background decorative elements */}
                <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-pink-500/10 to-purple-600/10 rounded-full blur-3xl"></div>
                <div className="absolute bottom-0 left-0 w-40 h-40 bg-gradient-to-br from-indigo-500/10 to-cyan-500/10 rounded-full blur-3xl"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features Section */}
      <section className="py-20 border-t border-[#333333] relative z-10">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-16 gradient-text">🎯 Key Features</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="glass-card p-6 text-center transform transition hover:scale-105">
              <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-gradient-to-r from-pink-500/20 to-purple-600/20 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-pink-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
              </div>
              <h3 className="font-bold mb-2 gradient-text">Role-based Dashboards</h3>
              <p className="text-[#AAAAAA]">Customized interfaces for students, teachers, and administrators</p>
            </div>
            
            <div className="glass-card p-6 text-center transform transition hover:scale-105">
              <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-gradient-to-r from-indigo-500/20 to-cyan-500/20 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="font-bold mb-2 gradient-text">Secure Stripe Payments</h3>
              <p className="text-[#AAAAAA]">Protected transactions with industry-leading security</p>
            </div>
            
            <div className="glass-card p-6 text-center transform transition hover:scale-105">
              <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-gradient-to-r from-red-500/20 to-yellow-500/20 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="font-bold mb-2 gradient-text">YouTube Video Learning</h3>
              <p className="text-[#AAAAAA]">Seamless integration with YouTube for efficient content delivery</p>
            </div>
            
            <div className="glass-card p-6 text-center transform transition hover:scale-105">
              <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-gradient-to-r from-purple-500/20 to-pink-500/20 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="font-bold mb-2 gradient-text">Responsive Design</h3>
              <p className="text-[#AAAAAA]">Perfect experience on desktops, tablets, and mobile devices</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 relative z-10 border-t border-[#333333]">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-16 gradient-text">Frequently Asked Questions</h2>
          
          <div className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto">
            <div className="glass-card p-6">
              <h3 className="text-xl font-bold gradient-text mb-3">How do I enroll in a state board course?</h3>
              <p className="text-gray-300">
                Browse our catalog by grade level (9th, 10th, 11th, or 12th), select the subject or bundle you're interested in, click "Enroll Now," and complete the checkout process. You'll gain immediate access to your selected course materials.
              </p>
            </div>
            
            <div className="glass-card p-6">
              <h3 className="text-xl font-bold gradient-text mb-3">Do your courses cover the entire state board syllabus?</h3>
              <p className="text-gray-300">
                Yes! Our courses cover 100% of the state board syllabus for each subject. We regularly update our content to stay aligned with any changes in the curriculum or exam pattern.
              </p>
            </div>
            
            <div className="glass-card p-6">
              <h3 className="text-xl font-bold gradient-text mb-3">How will these courses help me prepare for board exams?</h3>
              <p className="text-gray-300">
                Our courses include comprehensive notes, video explanations, solved examples, practice questions, and regular assessments that closely match the style and difficulty level of actual board exams.
              </p>
            </div>
            
            <div className="glass-card p-6">
              <h3 className="text-xl font-bold gradient-text mb-3">How do I become a teacher on the platform?</h3>
              <p className="text-gray-300">
                Click the "Become a Teacher" button, complete the application form, and our team will review your submission. Once approved, you can start creating and publishing your courses.
              </p>
            </div>
            
            <div className="glass-card p-6">
              <h3 className="text-xl font-bold gradient-text mb-3">Is there a refund policy?</h3>
              <p className="text-gray-300">
                Yes, we offer a 30-day money-back guarantee. If you're not satisfied with your course purchase, you can request a full refund within 30 days of enrollment.
              </p>
            </div>
            
            <div className="glass-card p-6">
              <h3 className="text-xl font-bold gradient-text mb-3">How do I get support if I have issues?</h3>
              <p className="text-gray-300">
                We offer 24/7 support through our help center. You can submit a ticket, email our support team, or use the live chat feature available on the platform.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section - Updated with testimonials */}
      <section className="py-20 relative z-10 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-pink-900 to-purple-900 opacity-90"></div>
        <div className="absolute inset-0 bg-[url('/noise.png')] mix-blend-overlay opacity-20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6 text-white glow-text">🔥 Prepare for Your Board Exams with Confidence!</h2>
              <p className="text-xl mb-8 text-white">
                Join thousands of students who have improved their grades and achieved success in their state board examinations with our comprehensive course materials.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Link href="/signup" className="py-4 px-8 bg-white text-purple-700 rounded-lg font-semibold hover:bg-gray-100 transform hover:translate-y-[-2px] transition-all text-center">
                  Get Started Free
                </Link>
                <Link href="/courses" className="py-4 px-8 glass-effect text-white border border-white/30 rounded-lg font-semibold hover:border-white/80 transform hover:translate-y-[-2px] transition-all text-center">
                  Browse Courses
                </Link>
              </div>
              
              <div className="flex items-center">
                <div className="flex -space-x-4">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-r from-pink-500 to-purple-600 border-2 border-white"></div>
                  <div className="w-10 h-10 rounded-full bg-gradient-to-r from-indigo-500 to-cyan-500 border-2 border-white"></div>
                  <div className="w-10 h-10 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 border-2 border-white"></div>
                  <div className="w-10 h-10 rounded-full bg-white text-purple-700 border-2 border-white flex items-center justify-center text-xs font-bold">+50</div>
                </div>
                <span className="ml-4 text-white">Joined in the last 24 hours</span>
              </div>
            </div>
            
            <div className="space-y-6">
              {/* Testimonial 1 */}
              <div className="glass-card p-6 backdrop-blur-md">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-pink-500/50 to-purple-600/50 mr-4"></div>
                  <div>
                    <h4 className="text-white font-medium">Rohan Patel</h4>
                    <div className="flex items-center">
                      <span className="text-yellow-500">★★★★★</span>
                      <span className="text-sm text-white/70 ml-2">Grade 12 Science Student</span>
                    </div>
                  </div>
                </div>
                <p className="text-white">
                  "Life Care Institute's PCM courses helped me secure 92% in my board exams! The teachers explain complex topics in such a simple way, and the practice questions are exactly like what appeared in the actual exam."
                </p>
              </div>
              
              {/* Testimonial 2 */}
              <div className="glass-card p-6 backdrop-blur-md">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-indigo-500/50 to-cyan-500/50 mr-4"></div>
                  <div>
                    <h4 className="text-white font-medium">Sneha Sharma</h4>
                    <div className="flex items-center">
                      <span className="text-yellow-500">★★★★★</span>
                      <span className="text-sm text-white/70 ml-2">Grade 10 Student</span>
                    </div>
                  </div>
                </div>
                <p className="text-white">
                  "I was struggling with Science and Math, but after enrolling in Life Care Institute's courses, everything became so much clearer. The step-by-step explanations and regular tests really helped me improve. I scored 88% in my finals!"
                </p>
              </div>
            </div>
          </div>
          
          <div className="text-center mt-16">
            <Link href="/signup" className="px-8 py-4 bg-gradient-to-r from-pink-600 to-purple-600 text-white rounded-lg text-lg font-medium hover:opacity-90 inline-block transition transform hover:scale-105">
              Start Your Learning Journey Today
            </Link>
            <p className="text-white/70 mt-4">No credit card required to sign up</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#0f0014] text-white py-20 border-t border-[#333333] relative z-10">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-10">
            <div>
              <h3 className="font-bold text-lg mb-6 gradient-text">Life Care Institute</h3>
              <p className="text-[#AAAAAA] mb-4">
                Specialized in state board education for grades 9-12, helping students achieve academic excellence through expert-led courses in Physics, Chemistry, Mathematics and more.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="w-10 h-10 rounded-full glass-effect flex items-center justify-center text-pink-500 hover:text-white hover:bg-pink-500/30 transition-all">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z" />
                  </svg>
                </a>
                <a href="#" className="w-10 h-10 rounded-full glass-effect flex items-center justify-center text-pink-500 hover:text-white hover:bg-pink-500/30 transition-all">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </a>
                <a href="#" className="w-10 h-10 rounded-full glass-effect flex items-center justify-center text-pink-500 hover:text-white hover:bg-pink-500/30 transition-all">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.052.974-3.127 1.195-.897-.957-2.132-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.63 5.108 1.523 6.574 3.949z" />
                  </svg>
                </a>
                <a href="#" className="w-10 h-10 rounded-full glass-effect flex items-center justify-center text-pink-500 hover:text-white hover:bg-pink-500/30 transition-all">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-6a2 2 0 00-2-2h-2a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </a>
              </div>
            </div>
            
            <div>
              <h3 className="font-bold text-lg mb-6 gradient-text">Quick Links</h3>
              <ul className="space-y-3">
                <li><Link href="/" className="text-[#AAAAAA] hover:text-pink-500 transition-colors">Home</Link></li>
                <li><Link href="/courses" className="text-[#AAAAAA] hover:text-pink-500 transition-colors">Browse Courses</Link></li>
                <li><Link href="/about" className="text-[#AAAAAA] hover:text-pink-500 transition-colors">About Us</Link></li>
                <li><Link href="/contact" className="text-[#AAAAAA] hover:text-pink-500 transition-colors">Contact</Link></li>
                <li><Link href="/blog" className="text-[#AAAAAA] hover:text-pink-500 transition-colors">Blog</Link></li>
                <li><Link href="/faqs" className="text-[#AAAAAA] hover:text-pink-500 transition-colors">FAQs</Link></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-bold text-lg mb-6 gradient-text">User Dashboards</h3>
              <ul className="space-y-3">
                <li><Link href="/student/dashboard" className="text-[#AAAAAA] hover:text-pink-500 transition-colors">Student Dashboard</Link></li>
                <li><Link href="/teacher/dashboard" className="text-[#AAAAAA] hover:text-pink-500 transition-colors">Teacher Dashboard</Link></li>
                <li><Link href="/admin/dashboard" className="text-[#AAAAAA] hover:text-pink-500 transition-colors">Admin Dashboard</Link></li>
                <li><Link href="/teacher/apply" className="text-[#AAAAAA] hover:text-pink-500 transition-colors">Become a Teacher</Link></li>
                <li><Link href="/affiliate" className="text-[#AAAAAA] hover:text-pink-500 transition-colors">Affiliate Program</Link></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-bold text-lg mb-6 gradient-text">Contact Us</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-pink-500 mr-3 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <span className="text-[#AAAAAA]">contact@lifecareinstitute.com</span>
                </li>
                <li className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-pink-500 mr-3 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                  <span className="text-[#AAAAAA]">+1 (555) 123-4567</span>
                </li>
                <li className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-pink-500 mr-3 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1 1 0 00-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span className="text-[#AAAAAA]">123 Education St, Learn City, CA 94043, USA</span>
                </li>
                <li className="pt-3">
                  <Link href="/contact" className="inline-flex items-center text-sm py-2 px-4 bg-gradient-to-r from-pink-500/10 to-purple-500/10 rounded-md border border-pink-500/20 text-pink-500 hover:bg-gradient-to-r hover:from-pink-500 hover:to-purple-500 hover:text-white transition-all">
                    Send us a message
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-[#333333] mt-16 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-[#777777] text-center md:text-left mb-4 md:mb-0">
              &copy; {new Date().getFullYear()} Life Care Institute. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <Link href="/privacy" className="text-[#777777] hover:text-pink-500 text-sm">Privacy Policy</Link>
              <Link href="/terms" className="text-[#777777] hover:text-pink-500 text-sm">Terms of Service</Link>
              <Link href="/cookies" className="text-[#777777] hover:text-pink-500 text-sm">Cookie Policy</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
