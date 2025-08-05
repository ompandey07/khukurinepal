import React from 'react';
import { User, Mountain } from 'lucide-react';

const Nav = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Left side - Logo */}
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-gradient-to-br from-amber-600 to-amber-800 rounded-lg flex items-center justify-center shadow-lg">
              <Mountain className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-amber-600 to-amber-800 bg-clip-text text-transparent">
              Khukuri Nepal
            </span>
          </div>

          {/* Center - Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-gray-700 hover:text-amber-600 transition-colors duration-200 font-medium">
              Collection
            </a>
            <a href="#" className="text-gray-700 hover:text-amber-600 transition-colors duration-200 font-medium">
              Heritage
            </a>
            <a href="#" className="text-gray-700 hover:text-amber-600 transition-colors duration-200 font-medium">
              Craftsmanship
            </a>
            <a href="#" className="text-gray-700 hover:text-amber-600 transition-colors duration-200 font-medium">
              About
            </a>
          </div>

          {/* Right side - User Icon */}
          <div className="flex items-center">
            <a 
              href="#" 
              className="w-10 h-10 bg-gray-100 hover:bg-gray-200 rounded-full flex items-center justify-center transition-all duration-200 hover:scale-105"
            >
              <User className="w-5 h-5 text-gray-600" />
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Nav;