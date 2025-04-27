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
    <div className="min-h-screen flex flex-col bg-[#121212] relative overflow-hidden">
      {/* Decorative Gradient Orbs */}
      <div className="fixed w-[500px] h-[500px] rounded-full bg-gradient-to-r from-[#D2691E] to-[#8B4513] opacity-10 blur-[100px] -top-60 -left-60 z-0"></div>
      <div className="fixed w-[600px] h-[600px] rounded-full bg-gradient-to-r from-[#8B4513] to-[#D2691E] opacity-10 blur-[120px] -bottom-80 -right-80 z-0"></div>
      
      {/* Header */}
      <header className="glass-effect text-white sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <div className="text-2xl font-bold gradient-text">Life Care Institute</div>
            
            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-8">
              <Link href="/" className="hover:text-[#D2691E] transition">Home</Link>
              <Link href="/courses" className="hover:text-[#D2691E] transition">Courses</Link>
              <Link href="/about" className="hover:text-[#D2691E] transition">About</Link>
              <Link href="/contact" className="hover:text-[#D2691E] transition">Contact</Link>
            </nav>
            
            {/* Desktop Auth Buttons */}
            <div className="hidden md:flex space-x-4">
              <Link href="/login" className="px-4 py-2 bg-[#D2691E] text-white rounded-md hover:bg-[#8B4513] transition">
                Login
              </Link>
              <Link href="/signup" className="px-4 py-2 border border-[#D2691E] text-[#D2691E] rounded-md hover:bg-[#D2691E] hover:text-white transition">
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
                <Link href="/" className="text-white hover:text-[#D2691E]">Home</Link>
                <Link href="/courses" className="text-white hover:text-[#D2691E]">Courses</Link>
                <Link href="/about" className="text-white hover:text-[#D2691E]">About</Link>
                <Link href="/contact" className="text-white hover:text-[#D2691E]">Contact</Link>
                <div className="flex flex-col space-y-2 pt-2 border-t border-gray-200">
                  <Link href="/login" className="bg-[#D2691E] text-white px-4 py-2 rounded-md text-center hover:bg-[#8B4513] transition-colors">
                    Login
                  </Link>
                  <Link href="/signup" className="dark-gradient text-white px-4 py-2 rounded-md text-center hover:opacity-90 transition-opacity">
                    Sign Up
                  </Link>
                </div>
              </div>
            </div>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative z-10 py-20 border-b border-[#333333]">
        <div className="container mx-auto px-4">
          <div className={`max-w-3xl mx-auto text-center transition-all duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0 translate-y-10'}`}>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 gradient-text glow-text">🚀 Launch Your Dream Course Platform with Us!</h1>
            <p className="text-xl mb-10 text-white">
              Are you ready to build a powerful and modern <strong className="text-[#D2691E]">Course-Selling Website</strong> tailored for <strong className="text-[#D2691E]">students</strong>, <strong className="text-[#D2691E]">teachers</strong>, and <strong className="text-[#D2691E]">admins</strong>?
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link href="/signup" className="px-8 py-3 bg-[#D2691E] text-white rounded-md text-lg font-medium hover:bg-[#8B4513] transition transform hover:scale-105">
                Get Started Free
              </Link>
              <Link href="/courses" className="px-8 py-3 glass-effect text-[#D2691E] border border-[#D2691E] rounded-md text-lg font-medium hover:bg-[#D2691E] hover:text-white transition transform hover:scale-105">
                Browse Courses
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 relative z-10">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-16 gradient-text">✨ Our Platform Includes:</h2>
          
          <div className="grid md:grid-cols-3 gap-10">
            {/* Student Dashboard */}
            <div className="glass-card p-8 animate-slideUp" style={{animationDelay: "0.1s"}}>
              <h3 className="text-2xl font-bold mb-4 text-[#D2691E]">🎓 Student Dashboard</h3>
              <ul className="space-y-3 text-[#E0E0E0]">
                <li className="flex items-start">
                  <span className="text-[#D2691E] mr-2">✓</span>
                  Browse and view <strong>all available courses</strong>
                </li>
                <li className="flex items-start">
                  <span className="text-[#D2691E] mr-2">✓</span>
                  Access <strong>purchased courses</strong> with YouTube video integration
                </li>
                <li className="flex items-start">
                  <span className="text-[#D2691E] mr-2">✓</span>
                  Smooth, intuitive learning experience
                </li>
              </ul>
            </div>
            
            {/* Teacher Dashboard */}
            <div className="glass-card p-8 animate-slideUp" style={{animationDelay: "0.2s"}}>
              <h3 className="text-2xl font-bold mb-4 text-[#D2691E]">👩‍🏫 Teacher Dashboard</h3>
              <ul className="space-y-3 text-[#E0E0E0]">
                <li className="flex items-start">
                  <span className="text-[#D2691E] mr-2">✓</span>
                  <strong>Create and manage courses</strong> effortlessly
                </li>
                <li className="flex items-start">
                  <span className="text-[#D2691E] mr-2">✓</span>
                  <strong>Upload course videos using YouTube links</strong>
                </li>
                <li className="flex items-start">
                  <span className="text-[#D2691E] mr-2">✓</span>
                  Track enrolled students and manage content
                </li>
              </ul>
            </div>
            
            {/* Admin Dashboard */}
            <div className="glass-card p-8 animate-slideUp" style={{animationDelay: "0.3s"}}>
              <h3 className="text-2xl font-bold mb-4 text-[#D2691E]">👨‍💼 Admin Dashboard</h3>
              <ul className="space-y-3 text-[#E0E0E0]">
                <li className="flex items-start">
                  <span className="text-[#D2691E] mr-2">✓</span>
                  <strong>Full control</strong> over students, teachers, and courses
                </li>
                <li className="flex items-start">
                  <span className="text-[#D2691E] mr-2">✓</span>
                  <strong>Add and manage teachers</strong>, create accounts
                </li>
                <li className="flex items-start">
                  <span className="text-[#D2691E] mr-2">✓</span>
                  <strong>Edit or remove courses</strong>, monitor platform activity
                </li>
              </ul>
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
              <h3 className="font-bold mb-2 text-white">Role-based Dashboards</h3>
              <p className="text-[#AAAAAA]">Student, Teacher, Admin</p>
            </div>
            
            <div className="glass-card p-6 text-center transform transition hover:scale-105">
              <h3 className="font-bold mb-2 text-white">Secure Authentication</h3>
              <p className="text-[#AAAAAA]">Protected access & authorization</p>
            </div>
            
            <div className="glass-card p-6 text-center transform transition hover:scale-105">
              <h3 className="font-bold mb-2 text-white">YouTube Integration</h3>
              <p className="text-[#AAAAAA]">Fast streaming & space saving</p>
            </div>
            
            <div className="glass-card p-6 text-center transform transition hover:scale-105">
              <h3 className="font-bold mb-2 text-white">Admin Control Panel</h3>
              <p className="text-[#AAAAAA]">Complete platform management</p>
            </div>
            
            <div className="glass-card p-6 text-center transform transition hover:scale-105">
              <h3 className="font-bold mb-2 text-white">Responsive Design</h3>
              <p className="text-[#AAAAAA]">Works on all devices seamlessly</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative z-10 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-[#5C2E00] to-[#7B3F00] opacity-90"></div>
        <div className="absolute inset-0 bg-[url('/noise.png')] mix-blend-overlay opacity-20"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-3xl font-bold mb-6 text-white glow-text">🔥 Let's build the future of online learning together!</h2>
          <p className="text-xl mb-10 max-w-2xl mx-auto text-white">
            Whether you're starting a new educational platform or looking to upgrade your current system, we will bring your vision to life with modern technology.
          </p>
          <Link href="/signup" className="px-8 py-3 glass-effect text-white rounded-md text-lg font-medium hover:bg-[#333333] inline-block transition transform hover:scale-105">
            Get Started Now
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#121212] text-white py-10 border-t border-[#333333] relative z-10">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="font-bold text-lg mb-4 gradient-text">Life Care Institute</h3>
              <p className="text-[#AAAAAA]">
                Modern course platform for students, teachers and administrators.
              </p>
            </div>
            
            <div>
              <h3 className="font-bold text-lg mb-4 text-[#D2691E]">Links</h3>
              <ul className="space-y-2">
                <li><Link href="/" className="text-[#AAAAAA] hover:text-[#D2691E]">Home</Link></li>
                <li><Link href="/courses" className="text-[#AAAAAA] hover:text-[#D2691E]">Courses</Link></li>
                <li><Link href="/about" className="text-[#AAAAAA] hover:text-[#D2691E]">About Us</Link></li>
                <li><Link href="/contact" className="text-[#AAAAAA] hover:text-[#D2691E]">Contact</Link></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-bold text-lg mb-4 text-[#D2691E]">Dashboards</h3>
              <ul className="space-y-2">
                <li><Link href="/student" className="text-[#AAAAAA] hover:text-[#D2691E]">Student Portal</Link></li>
                <li><Link href="/teacher" className="text-[#AAAAAA] hover:text-[#D2691E]">Teacher Portal</Link></li>
                <li><Link href="/admin" className="text-[#AAAAAA] hover:text-[#D2691E]">Admin Portal</Link></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-bold text-lg mb-4 text-[#D2691E]">Contact</h3>
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
