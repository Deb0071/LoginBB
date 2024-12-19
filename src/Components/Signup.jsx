import React from 'react';
import { Link } from 'react-router-dom';

const Signup = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-green-400 via-teal-500 to-blue-500">
      <div className="w-full max-w-md bg-white rounded-lg shadow-2xl p-6">
        
        <div className="flex justify-center">
          <img
            src="https://www.stylopay.com/img/main/logo-whiteVersion.svg"
            alt="Logo"
            className="w-20 h-20 rounded-full shadow-md mb-4 animate-bounce"
          />
        </div>

        <h2 className="text-2xl font-bold text-center text-gray-800">Create an Account</h2>
        <p className="text-center text-gray-600 text-sm mb-6">
          Sign up to get started
        </p>

        <form className="mt-4 space-y-4">
          
          <div>
            <label htmlFor="username" className="block text-sm font-medium text-gray-700">
              Username
            </label>
            <input
              type="text"
              id="username"
              placeholder="Enter your username"
              className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
              required
            />
          </div>

          
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              id="email"
              placeholder="Enter your email"
              className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
              required
            />
          </div>

         
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              type="password"
              id="password"
              placeholder="Enter your password"
              className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
              required
            />
          </div>

          
          <div>
            <button
              type="submit"
              className="w-full px-4 py-2 text-white bg-teal-500 rounded-lg hover:bg-teal-600 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2 transform hover:scale-105 transition-transform"
            >
              Sign Up
            </button>
          </div>
        </form>

        
        <div className="mt-4 text-center">
          <p className="text-sm text-gray-600">
            Already registered?{' '}
            <Link to="/login" className="text-teal-500 hover:underline">
              Login here
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signup;
