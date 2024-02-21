'use client';

import React, { useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import Image from 'next/image';
import Ihome from '@/pages/ihome';
import About from '@/pages/about';
import Services from  '@/pages/services';
import Blog from '@/pages/blog';
import Gallery from '@/pages/gallery';
import Contact from '@/pages/contact';

const Header = () => {
  const [nav, setNav] = useState(false);
  const [activeComponent, setActiveComponent] = useState('ihome');

  const handleNav = () => {
    setNav(!nav);
  };

  // Array containing navigation items
  const navItems = [
    { id: 1, text: 'Inicio', component: 'ihome' },
    { id: 2, text: 'Acerca de', component: 'about' },
    { id: 3, text: 'Servicios', component: 'services' },
    { id: 4, text: 'Blog', component: 'blog' },
    { id: 5, text: 'Galeria', component: 'gallery' },
    { id: 6, text: 'Contacto', component: 'contact' },
  ];

  return (
    <>
      <div className='bg-darkgray flex justify-between items-center h-24 max-w-full mx-auto px-4 text-cyanforce'>
        
        <div className='flex justify-items-start col-span-1'>
        <Image src='/logo.png' alt='logo' width={64} height={64} className='w-16 h-16' />
        <h1 className='w-full text-3xl font-bold text-softmint mt-3'>Sōshiza</h1>
        
        </div>

        {/* Desktop Navigation */}
        <ul className='hidden md:flex'>
          {navItems.map(item => (
            <li key={item.id} className='p-4 hover:bg-teal-500 rounded-xl m-2 cursor-pointer duration-300 hover:text-black' onClick={() => setActiveComponent(item.component)}>
              {item.text}
            </li>
          ))}
        </ul>
        <div onClick={handleNav} className='block md:hidden z-50'>
          {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
        </div>
        <ul
          className={
            nav
              ? 'fixed md:hidden mt-16 right-0 top-0 w-[60%] h-full border-l border-l-gray-900 bg-darkgray ease-in-out duration-500 z-40'
              : 'ease-in-out w-[60%] duration-500 fixed top-0 bottom-0 right-[-100%] z-40'
          }
        >
          {navItems.map(item => (
            <li key={item.id} className='p-4 border-b rounded-xl hover:bg-teal-500 duration-300 hover:text-black cursor-pointer border-gray-600' onClick={() => setActiveComponent(item.component)}>
              {item.text}
            </li>
          ))}
        </ul>
      </div>
      <main>
        {activeComponent === 'ihome' && <Ihome />}
        {activeComponent === 'about' && <About />}
        {activeComponent === 'services' && <Services />}
        {activeComponent === 'blog' && <Blog />}
        {activeComponent === 'gallery' && <Gallery />}
        {activeComponent === 'contact' && <Contact />}
      </main>
    </>
  );
};

export default Header;