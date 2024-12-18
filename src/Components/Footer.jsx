import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Brand and Description */}
          <div className="text-center md:text-left">
            <h2 className="text-2xl font-bold">BrandName</h2>
            <p className="text-sm mt-2 text-gray-200">Crafting excellence since 2023</p>
          </div>

          {/* Navigation Links */}
          <div className="mt-4 md:mt-0 flex space-x-6">
            <a href="#about" className="text-gray-200 hover:text-white">About</a>
            <a href="#services" className="text-gray-200 hover:text-white">Services</a>
            <a href="#contact" className="text-gray-200 hover:text-white">Contact</a>
            <a href="#privacy" className="text-gray-200 hover:text-white">Privacy</a>
          </div>
        </div>

        {/* Social Media Links */}
        <div className="mt-6 flex justify-center md:justify-end space-x-4">
          <a href="#" className="text-gray-200 hover:text-white" aria-label="Facebook">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M22.675 0h-21.35C.595 0 0 .6 0 1.337v21.326C0 23.4.596 24 1.325 24H12.82v-9.284H9.692v-3.622h3.127V8.413c0-3.1 1.894-4.788 4.659-4.788 1.325 0 2.462.1 2.794.145v3.24l-1.917.001c-1.504 0-1.795.713-1.795 1.76v2.31h3.587l-.467 3.622h-3.12V24h6.116c.729 0 1.325-.6 1.325-1.337V1.337C24 .599 23.404 0 22.675 0z" />
            </svg>
          </a>
          <a href="#" className="text-gray-200 hover:text-white" aria-label="Twitter">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M24 4.557a9.843 9.843 0 0 1-2.827.775 4.936 4.936 0 0 0 2.165-2.725 9.91 9.91 0 0 1-3.127 1.195 4.92 4.92 0 0 0-8.379 4.482 13.95 13.95 0 0 1-10.13-5.14 4.822 4.822 0 0 0-.665 2.475c0 1.708.87 3.213 2.19 4.095a4.935 4.935 0 0 1-2.23-.616v.063a4.923 4.923 0 0 0 3.95 4.83 4.997 4.997 0 0 1-2.224.084 4.936 4.936 0 0 0 4.604 3.417 9.868 9.868 0 0 1-6.102 2.102c-.394 0-.779-.023-1.161-.067a13.94 13.94 0 0 0 7.548 2.212c9.057 0 14.01-7.505 14.01-14.01 0-.213-.005-.425-.014-.636A10.012 10.012 0 0 0 24 4.557z" />
            </svg>
          </a>
          <a href="#" className="text-gray-200 hover:text-white" aria-label="LinkedIn">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M20.452 20.452h-3.554v-5.743c0-1.368-.026-3.129-1.907-3.129-1.906 0-2.197 1.49-2.197 3.028v5.844h-3.553V9h3.416v1.561h.048c.476-.9 1.635-1.847 3.367-1.847 3.598 0 4.26 2.366 4.26 5.448v6.29zM5.337 7.433a2.071 2.071 0 1 1 0-4.143 2.072 2.072 0 0 1 0 4.143zm-1.777 13.02h3.556V9h-3.556v11.454zM22.224 0H1.771C.793 0 0 .774 0 1.729v20.542C0 23.226.793 24 1.771 24h20.451C23.207 24 24 23.226 24 22.271V1.729C24 .774 23.207 0 22.224 0z" />
            </svg>
          </a>
        </div>

        {/* Footer Bottom Text */}
        <div className="mt-6 text-center text-gray-200 text-sm">
          &copy; 2024 BrandName. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
