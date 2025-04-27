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
                <span className="text-sm font-medium gradient-text">🚀 Next-Gen Learning Platform</span>
              </div>
              
              <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                <span className="gradient-text glow-text">Transform</span> 
                <span className="text-white"> Your </span>
                <span className="gradient-text glow-text">Education</span>
                <span className="text-white"> Journey</span>
              </h1>
              
              <p className="text-xl mb-8 text-gray-200 leading-relaxed">
                Build your powerful course-selling platform with specialized dashboards for <strong className="gradient-text">students</strong>, <strong className="gradient-text">teachers</strong>, and <strong className="gradient-text">administrators</strong>.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Link href="/signup" className="py-4 px-8 bg-gradient-to-r from-pink-600 to-purple-600 text-white rounded-lg font-medium transform hover:translate-y-[-2px] hover:shadow-xl transition-all">
                  Get Started Free 
                </Link>
                <Link href="/courses" className="py-4 px-8 glass-effect text-white border border-pink-500/50 rounded-lg font-medium hover:border-pink-500 transform hover:translate-y-[-2px] transition-all">
                  Explore Courses
                </Link>
              </div>
              
              <div className="flex items-center space-x-6 text-sm text-gray-400">
                <div className="flex items-center">
                  <span className="text-pink-500 mr-2">✓</span>
                  <span>Free Sign-up</span>
                </div>
                <div className="flex items-center">
                  <span className="text-pink-500 mr-2">✓</span>
                  <span>No Credit Card</span>
                </div>
                <div className="flex items-center">
                  <span className="text-pink-500 mr-2">✓</span>
                  <span>Cancel Anytime</span>
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
                    <div className="text-2xl font-bold gradient-text mb-2">Course Platform</div>
                    <div className="text-white/80 text-sm mb-4">All-in-one solution</div>
                    <div className="inline-block py-2 px-4 bg-gradient-to-r from-pink-600/80 to-purple-600/80 rounded-lg text-white font-medium">
                      Launch Today
                    </div>
                  </div>
                </div>
                
                {/* Orbiting features */}
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/4 w-24 h-24 rounded-full bg-indigo-600/20 backdrop-blur-md flex items-center justify-center text-center p-4 border border-white/10 animate-orbit" style={{animationDuration: "20s"}}>
                  <span className="text-white text-xs font-medium">Student Dashboard</span>
                </div>
                
                <div className="absolute top-1/2 right-0 transform translate-x-1/4 -translate-y-1/2 w-24 h-24 rounded-full bg-pink-500/20 backdrop-blur-md flex items-center justify-center text-center p-4 border border-white/10 animate-orbit" style={{animationDuration: "25s", animationDelay: "1s"}}>
                  <span className="text-white text-xs font-medium">Teacher Portal</span>
                </div>
                
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/4 w-24 h-24 rounded-full bg-purple-500/20 backdrop-blur-md flex items-center justify-center text-center p-4 border border-white/10 animate-orbit" style={{animationDuration: "30s", animationDelay: "2s"}}>
                  <span className="text-white text-xs font-medium">Admin Controls</span>
                </div>
                
                <div className="absolute top-1/2 left-0 transform -translate-x-1/4 -translate-y-1/2 w-24 h-24 rounded-full bg-cyan-500/20 backdrop-blur-md flex items-center justify-center text-center p-4 border border-white/10 animate-orbit" style={{animationDuration: "22s", animationDelay: "1.5s"}}>
                  <span className="text-white text-xs font-medium">Analytics</span>
                </div>
              </div>
            </div>
          </div>
          
          {/* Stats row */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 max-w-4xl mx-auto">
            <div className="glass-card p-6 text-center transform transition hover:scale-105">
              <div className="text-3xl gradient-text font-bold mb-2">10k+</div>
              <div className="text-sm text-gray-400">Students</div>
            </div>
            <div className="glass-card p-6 text-center transform transition hover:scale-105">
              <div className="text-3xl gradient-text font-bold mb-2">200+</div>
              <div className="text-sm text-gray-400">Courses</div>
            </div>
            <div className="glass-card p-6 text-center transform transition hover:scale-105">
              <div className="text-3xl gradient-text font-bold mb-2">50+</div>
              <div className="text-sm text-gray-400">Teachers</div>
            </div>
            <div className="glass-card p-6 text-center transform transition hover:scale-105">
              <div className="text-3xl gradient-text font-bold mb-2">99%</div>
              <div className="text-sm text-gray-400">Satisfaction</div>
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

      {/* Features Section */}
      <section className="py-20 relative z-10">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-16 gradient-text">✨ Our Platform Includes:</h2>
          
          <div className="grid md:grid-cols-3 gap-10 mb-20">
            {/* Student Dashboard */}
            <div className="glass-card p-8 animate-slideUp" style={{animationDelay: "0.1s"}}>
              <h3 className="text-2xl font-bold mb-4 gradient-text">🎓 Student Dashboard</h3>
              <ul className="space-y-3 text-[#E0E0E0]">
                <li className="flex items-start">
                  <span className="text-pink-500 mr-2">✓</span>
                  Browse and view <strong className="gradient-text font-medium">all available courses</strong>
                </li>
                <li className="flex items-start">
                  <span className="text-pink-500 mr-2">✓</span>
                  Access <strong className="gradient-text font-medium">purchased courses</strong> with YouTube video integration
                </li>
                <li className="flex items-start">
                  <span className="text-pink-500 mr-2">✓</span>
                  Smooth, intuitive learning experience
                </li>
              </ul>
            </div>
            
            {/* Teacher Dashboard */}
            <div className="glass-card p-8 animate-slideUp" style={{animationDelay: "0.2s"}}>
              <h3 className="text-2xl font-bold mb-4 gradient-text">👩‍🏫 Teacher Dashboard</h3>
              <ul className="space-y-3 text-[#E0E0E0]">
                <li className="flex items-start">
                  <span className="text-indigo-400 mr-2">✓</span>
                  <strong className="gradient-text font-medium">Create and manage courses</strong> effortlessly
                </li>
                <li className="flex items-start">
                  <span className="text-indigo-400 mr-2">✓</span>
                  <strong className="gradient-text font-medium">Upload course videos</strong> using YouTube links
                </li>
                <li className="flex items-start">
                  <span className="text-indigo-400 mr-2">✓</span>
                  Track enrolled students and manage content
                </li>
              </ul>
            </div>
            
            {/* Admin Dashboard */}
            <div className="glass-card p-8 animate-slideUp" style={{animationDelay: "0.3s"}}>
              <h3 className="text-2xl font-bold mb-4 gradient-text">👨‍💼 Admin Dashboard</h3>
              <ul className="space-y-3 text-[#E0E0E0]">
                <li className="flex items-start">
                  <span className="text-purple-400 mr-2">✓</span>
                  <strong className="gradient-text font-medium">Full control</strong> over students, teachers, and courses
                </li>
                <li className="flex items-start">
                  <span className="text-purple-400 mr-2">✓</span>
                  <strong className="gradient-text font-medium">Add and manage teachers</strong>, create accounts
                </li>
                <li className="flex items-start">
                  <span className="text-purple-400 mr-2">✓</span>
                  <strong className="gradient-text font-medium">Edit or remove courses</strong>, monitor platform activity
                </li>
              </ul>
            </div>
          </div>
          
          {/* Popular Courses Section */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-center mb-10 gradient-text">🔥 Popular Courses</h3>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Course Card 1 */}
              <div className="glass-card overflow-hidden group animate-slideUp" style={{animationDelay: "0.1s"}}>
                <div className="relative">
                  <div className="h-48 bg-gradient-to-r from-pink-500/30 to-purple-600/30 relative overflow-hidden">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-4xl">📱</span>
                    </div>
                  </div>
                  <div className="absolute top-3 right-3 bg-pink-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                    Best Seller
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs text-pink-500 font-medium">Advanced</span>
                    <div className="flex items-center">
                      <span className="text-yellow-500 mr-1">★★★★★</span>
                      <span className="text-xs text-gray-400">(1,245)</span>
                    </div>
                  </div>
                  
                  <h4 className="text-xl font-bold mb-2 gradient-text">Mobile App Development</h4>
                  <p className="text-sm text-gray-400 mb-4">Learn to create professional mobile applications for iOS and Android using React Native.</p>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-xl font-bold gradient-text">$89.99</span>
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
                      <span className="text-4xl">💻</span>
                    </div>
                  </div>
                  <div className="absolute top-3 right-3 bg-indigo-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                    New
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs text-indigo-400 font-medium">Intermediate</span>
                    <div className="flex items-center">
                      <span className="text-yellow-500 mr-1">★★★★☆</span>
                      <span className="text-xs text-gray-400">(748)</span>
                    </div>
                  </div>
                  
                  <h4 className="text-xl font-bold mb-2 gradient-text">Web Development Bootcamp</h4>
                  <p className="text-sm text-gray-400 mb-4">Complete web development course covering HTML, CSS, JavaScript, React, Node, and more.</p>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-xl font-bold gradient-text">$129.99</span>
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
                      <span className="text-4xl">🎨</span>
                    </div>
                  </div>
                  <div className="absolute top-3 right-3 bg-purple-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                    Popular
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs text-purple-400 font-medium">All Levels</span>
                    <div className="flex items-center">
                      <span className="text-yellow-500 mr-1">★★★★★</span>
                      <span className="text-xs text-gray-400">(954)</span>
                    </div>
                  </div>
                  
                  <h4 className="text-xl font-bold mb-2 gradient-text">UI/UX Design Masterclass</h4>
                  <p className="text-sm text-gray-400 mb-4">Master the principles of user interface and experience design with industry-standard tools.</p>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-xl font-bold gradient-text">$99.99</span>
                    <button className="text-xs bg-gradient-to-r from-purple-600 to-pink-600 hover:opacity-90 text-white px-4 py-2 rounded-md transition-all">
                      Enroll Now
                    </button>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="text-center mt-10">
              <Link href="/courses" className="inline-flex items-center text-pink-500 hover:text-pink-400 font-medium">
                View All Courses 
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features Section */}
      <section className="py-20 border-t border-[#333333] relative z-10">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-16 gradient-text">🎯 Key Features</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
            <div className="glass-card p-6 text-center transform transition hover:scale-105">
              <h3 className="font-bold mb-2 gradient-text">Role-based Dashboards</h3>
              <p className="text-[#AAAAAA]">Student, Teacher, Admin</p>
            </div>
            
            <div className="glass-card p-6 text-center transform transition hover:scale-105">
              <h3 className="font-bold mb-2 gradient-text">Secure Authentication</h3>
              <p className="text-[#AAAAAA]">Protected access & authorization</p>
            </div>
            
            <div className="glass-card p-6 text-center transform transition hover:scale-105">
              <h3 className="font-bold mb-2 gradient-text">YouTube Integration</h3>
              <p className="text-[#AAAAAA]">Fast streaming & space saving</p>
            </div>
            
            <div className="glass-card p-6 text-center transform transition hover:scale-105">
              <h3 className="font-bold mb-2 gradient-text">Admin Control Panel</h3>
              <p className="text-[#AAAAAA]">Complete platform management</p>
            </div>
            
            <div className="glass-card p-6 text-center transform transition hover:scale-105">
              <h3 className="font-bold mb-2 gradient-text">Responsive Design</h3>
              <p className="text-[#AAAAAA]">Works on all devices seamlessly</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative z-10 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-pink-900 to-purple-900 opacity-90"></div>
        <div className="absolute inset-0 bg-[url('/noise.png')] mix-blend-overlay opacity-20"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-3xl font-bold mb-6 text-white glow-text">🔥 Let's build the future of online learning together!</h2>
          <p className="text-xl mb-10 max-w-2xl mx-auto text-white">
            Whether you're starting a new educational platform or looking to upgrade your current system, we will bring your <span className="gradient-text font-medium">vision to life</span> with modern technology.
          </p>
          <Link href="/signup" className="px-8 py-3 glass-effect text-white rounded-md text-lg font-medium hover:bg-[#333333] inline-block transition transform hover:scale-105">
            Get Started Now
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#0f0014] text-white py-10 border-t border-[#333333] relative z-10">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="font-bold text-lg mb-4 gradient-text">Life Care Institute</h3>
              <p className="text-[#AAAAAA]">
                Modern course platform for students, teachers and administrators.
              </p>
            </div>
            
            <div>
              <h3 className="font-bold text-lg mb-4 gradient-text">Links</h3>
              <ul className="space-y-2">
                <li><Link href="/" className="text-[#AAAAAA] hover:text-pink-500">Home</Link></li>
                <li><Link href="/courses" className="text-[#AAAAAA] hover:text-pink-500">Courses</Link></li>
                <li><Link href="/about" className="text-[#AAAAAA] hover:text-pink-500">About Us</Link></li>
                <li><Link href="/contact" className="text-[#AAAAAA] hover:text-pink-500">Contact</Link></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-bold text-lg mb-4 gradient-text">Dashboards</h3>
              <ul className="space-y-2">
                <li><Link href="/student" className="text-[#AAAAAA] hover:text-pink-500">Student Portal</Link></li>
                <li><Link href="/teacher" className="text-[#AAAAAA] hover:text-pink-500">Teacher Portal</Link></li>
                <li><Link href="/admin" className="text-[#AAAAAA] hover:text-pink-500">Admin Portal</Link></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-bold text-lg mb-4 gradient-text">Contact</h3>
              <ul className="space-y-2 text-[#AAAAAA]">
                <li>contact@lciplatform.com</li>
                <li>+1 (555) 123-4567</li>
                <li>123 Education St, Learn City</li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-[#333333] mt-10 pt-6 text-center text-[#777777]">
            <p>&copy; {new Date().getFullYear()} Life Care Institute. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
