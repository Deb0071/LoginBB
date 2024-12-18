import React from 'react';

const Login = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500">
      <div className="w-full max-w-md bg-white rounded-lg shadow-2xl p-6">
        {/* Icon or Graphic */}
        <div className="flex justify-center">
          <img
            src="https://via.placeholder.com/80"
            alt="Logo"
            className="w-20 h-20 rounded-full shadow-md mb-4 animate-bounce"
          />
        </div>

        <h2 className="text-2xl font-bold text-center text-gray-800">Welcome Back!</h2>
        <p className="text-center text-gray-600 text-sm mb-6">
          Please login to your account
        </p>

        <form className="mt-4 space-y-4">
          {/* Email Field */}
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              id="email"
              placeholder="Enter your email"
              className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
              required
            />
          </div>

          {/* Password Field */}
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              type="password"
              id="password"
              placeholder="Enter your password"
              className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
              required
            />
          </div>

          {/* Submit Button */}
          <div>
            <button
              type="submit"
              className="w-full px-4 py-2 text-white bg-indigo-500 rounded-lg hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transform hover:scale-105 transition-transform"
            >
              Login
            </button>
          </div>
        </form>

        {/* Additional Links */}
        <div className="mt-4 text-center">
          <p className="text-sm text-gray-600">
            Don't have an account?{' '}
            <a href="#" className="text-indigo-500 hover:underline">
              Sign up
            </a>
          </p>
          <p className="text-sm text-gray-600 mt-2">
            Forgot your password?{' '}
            <a href="#" className="text-indigo-500 hover:underline">
              Reset it
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
