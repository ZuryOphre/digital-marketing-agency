'use client';

import React, { useState } from 'react';
import { FiMenu } from 'react-icons/fi';
import Link from 'next/link';
import Logo from '../Logo';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="text-black glass">
      <div className="container mx-auto flex items-center justify-between pt-2">
        <div className="flex items-center z-0">
          <Logo src="/logo.png" alt="Logo" width={90} height={90} className="flex-shrink-0 pt-0" />
          <h1 className="ml-2 text-xl font-bold hidden md:flex">Sōshiza</h1>
          <p className='ml-2 text-xs hidden md:flex'>Digital Marketing Agency </p>
        </div>
        <nav className="hidden md:flex space-x-4 pr-5">
          <Link href="#"><span className="cursor-pointer text-black hover:text-gray-500 py-2 pr-1">Home</span></Link>
          <Link href="#"><span className="cursor-pointer text-black hover:text-gray-500 py-2 pr-1">About</span></Link>
          <Link href="#"><span className="cursor-pointer text-black hover:text-gray-500 py-2 pr-1">Services</span></Link>
          <Link href="#"><span className="cursor-pointer text-black hover:text-gray-500 py-2 pr-1">Blog</span></Link>
          <Link href="#"><span className="cursor-pointer text-black hover:text-gray-500 py-2 pr-1">Gallery</span></Link>
          <Link href="#"><span className="cursor-pointer text-black hover:text-gray-500 py-2 pr-1">Contact</span></Link>
        </nav>
        <div className="md:hidden pr-3">
          {!isMenuOpen && (
            <button onClick={toggleMenu} className="text-black focus:outline-none">
              <FiMenu className="h-6 w-6" />
            </button>
          )}
          {isMenuOpen && (
            <div
              className="fixed inset-0 glass  flex items-center justify-end z-50" // Added solid color and adjusted z-index
            >
              <div className="h-full w-64 p-4 glass">
                <div className="flex items-center justify-between mb-8">
                  <h1 className="text-xl font-bold text-black pt-3">Sōshiza</h1>
                  <button onClick={toggleMenu} className="text-black focus:outline-none pt-3">
                    <FiMenu className="h-6 w-6" />
                  </button>
                </div>
                <ul>
                  <li><Link href="#"><span className="block py-2 cursor-pointer text-black  hover:text-gray-500">Home</span></Link></li>
                  <li><Link href="#"><span className="block py-2 cursor-pointer text-black  hover:text-gray-500">About</span></Link></li>
                  <li><Link href="#"><span className="block py-2 cursor-pointer text-black  hover:text-gray-500">Services</span></Link></li>
                  <li><Link href="#"><span className="block py-2 cursor-pointer text-black  hover:text-gray-500">Blog</span></Link></li>
                  <li><Link href="#"><span className="block py-2 cursor-pointer text-black  hover:text-gray-500">Gallery</span></Link></li>
                  <li><Link href="#"><span className="block py-2 cursor-pointer text-black  hover:text-gray-500">Contact</span></Link></li>
                </ul>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
