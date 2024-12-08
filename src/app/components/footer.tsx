'use client';  // Make this component a client component

import React from 'react';

const Footer = () => {
  return (
    <footer className="py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-screen-xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        
        {/* First Column - Address */}
        <div className="text-sm text-black">
          <p>400 University Drive Suite 200</p>
          <p>Coral Gables, FL 33134</p>
          <p>USA</p>
        </div>

        {/* Second Column - Links */}
        <div className="text-sm text-black">
          <h3 className="font-bold text-lg mb-4">Links</h3>
          <ul>
            <li><a href="#" className="hover:underline">Home</a></li>
            <li><a href="#" className="hover:underline">Shop</a></li>
            <li><a href="#" className="hover:underline">About Us</a></li>
            <li><a href="#" className="hover:underline">Contact</a></li>
          </ul>
        </div>

        {/* Third Column - Help */}
        <div className="text-sm text-black">
          <h3 className="font-bold text-lg mb-4">Help</h3>
          <ul>
            <li><a href="#" className="hover:underline">Payment Options</a></li>
            <li><a href="#" className="hover:underline">Returns</a></li>
            <li><a href="#" className="hover:underline">Privacy Policy</a></li>
          </ul>
        </div>

        {/* Fourth Column - Newsletter */}
        <div className="text-sm text-black">
          <h3 className="font-bold text-lg mb-4">Newsletter</h3>
          <div className="flex">
            <input
              type="email"
              placeholder="Enter your Email Address"
              className="px-4 py-2 rounded-l-lg border border-gray-300 w-full sm:w-auto"
            />
            <button className="bg-black text-white px-6 py-2 rounded-r-lg hover:bg-gray-800 transition duration-300">
              Subscribe
            </button>
          </div>
        </div>
      </div>

      {/* Horizontal Line */}
      <div className="border-t border-gray-300 my-8"></div>

      {/* Bottom Text */}
      <div className="text-center text-sm text-black">
        <p>2022 Meubel House. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
