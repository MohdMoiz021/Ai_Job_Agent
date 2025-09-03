'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Menu, X, Briefcase, User, Home, Search } from 'lucide-react';

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-2">
              <Briefcase className="h-8 w-8 text-blue-600" />
              <span className="text-xl font-bold text-gray-900">AI Job Agent</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="flex items-center space-x-2 text-gray-700 hover:text-blue-600 transition-colors">
              <Home className="h-5 w-5" />
              <span>Home</span>
            </Link>
            <Link href="/jobs" className="flex items-center space-x-2 text-gray-700 hover:text-blue-600 transition-colors">
              <Search className="h-5 w-5" />
              <span>Browse Jobs</span>
            </Link>
            <Link href="/upload-cv" className="flex items-center space-x-2 text-gray-700 hover:text-blue-600 transition-colors">
              <Briefcase className="h-5 w-5" />
              <span>Upload CV</span>
            </Link>
          </div>

          {/* Auth Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Link href="/login" className="text-gray-700 hover:text-blue-600 transition-colors">
              Sign In
            </Link>
            <Link href="/register" className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
              Get Started
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-blue-600 transition-colors"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
              <Link href="/" className="flex items-center space-x-2 text-gray-700 hover:text-blue-600 transition-colors px-3 py-2">
                <Home className="h-5 w-5" />
                <span>Home</span>
              </Link>
              <Link href="/jobs" className="flex items-center space-x-2 text-gray-700 hover:text-blue-600 transition-colors px-3 py-2">
                <Search className="h-5 w-5" />
                <span>Browse Jobs</span>
              </Link>
              <Link href="/upload-cv" className="flex items-center space-x-2 text-gray-700 hover:text-blue-600 transition-colors px-3 py-2">
                <Briefcase className="h-5 w-5" />
                <span>Upload CV</span>
              </Link>
              <div className="pt-4 space-y-2">
                <Link href="/login" className="block text-gray-700 hover:text-blue-600 transition-colors px-3 py-2">
                  Sign In
                </Link>
                <Link href="/register" className="block bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors mx-3">
                  Get Started
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
