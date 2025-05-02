"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => setIsMenuOpen((open) => !open);

  return (
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
            <Link href="/login" className="px-4 py-2 bg-pink-600 text-white rounded-md hover:bg-pink-700 transition">Login</Link>
            <Link href="/signup" className="px-4 py-2 border border-pink-500 text-pink-500 rounded-md hover:bg-pink-500 hover:text-white transition">Sign Up</Link>
          </div>
          {/* Mobile Menu Button */}
          <button className="md:hidden text-white focus:outline-none" onClick={toggleMenu} aria-label="Toggle menu">
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
                <Link href="/login" className="bg-pink-600 text-white px-4 py-2 rounded-md text-center hover:bg-pink-700 transition-colors">Login</Link>
                <Link href="/signup" className="bg-gradient-to-r from-pink-600 to-purple-600 text-white px-4 py-2 rounded-md text-center hover:opacity-90 transition-opacity">Sign Up</Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
