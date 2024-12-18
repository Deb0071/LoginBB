import React from 'react';

const Header = () => {
  return (
    <header className="bg-gradient-to-r from-blue-500 to-purple-600 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <span className="text-2xl font-bold tracking-wide">BrandName</span>
          </div>
          
          {/* Navigation Links */}
          <nav className="hidden md:flex space-x-8">
            <a href="#home" className="text-white hover:underline">Home</a>
            <a href="#about" className="text-white hover:underline">About</a>
            <a href="#services" className="text-white hover:underline">Services</a>
            <a href="#contact" className="text-white hover:underline">Contact</a>
          </nav>

          {/* Call-to-Action Button */}
          <div className="hidden md:flex">
            <a
              href="#get-started"
              className="bg-white text-blue-600 px-4 py-2 rounded-lg shadow hover:bg-gray-200"
            >
              Get Started
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              className="text-white focus:outline-none focus:ring-2 focus:ring-white"
              aria-label="Toggle menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
