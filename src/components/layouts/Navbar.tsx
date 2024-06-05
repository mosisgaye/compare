'use client'


import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { Menu } from 'lucide-react';
import Themeswitch from '@/components/ui/Themeswitch';
import '@/app/globals.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full z-20 top-0 start-0 bg-white text-white dark:bg-[#012737] dark:text-white ph_sticky">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Link href="/" className="flex items-center space-x-3">
          <Image src="/images/comparetelecom.png" alt="logo" width={150} height={75} />
        </Link>
        
        <div className="flex items-center md:order-2 space-x-3 md:space-x-0">
          <button type="button" className="btn_basic btn_primary hidden md:flex">
            0145243524
          </button>
          <button
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-sticky"
            aria-expanded="false"
            onClick={() => setIsOpen(!isOpen)}
          >
            <Menu className="text-green-500" />
            <span className="sr-only">Open main menu</span>
          </button>
        </div>

        <div className={`w-full md:flex md:w-auto md:order-1 ${isOpen ? 'block' : 'hidden'}`} id="navbar-sticky">
          <ul className="flex flex-col p-4 md:p-0 mt-4 border rounded-lg md:flex-row md:space-x-8 md:mt-0 md:border-0">
            <li className="menu-item">
              <Link href='/forfait' className='hover:text-green-500 dark:text-white'>
                Forfait Mobile
              </Link>
            </li>
            <li className="menu-item">
              <Link href='/box' className='hover:text-green-500 dark:text-white'>
                Box Internet
              </Link>
            </li>
            <li className="menu-item">
              <Link href='/forfait?category=orange' className='hover:text-green-500 dark:text-white'>
                Blogue
              </Link>
            </li>
            <li className="menu-item text-black dark:text-white">
              <Themeswitch />
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

