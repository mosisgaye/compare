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
     

<nav className="bg-white dark:bg-[#012737] fixed w-full z-20 top-0 start-0 border-b border-gray-200 dark:border-gray-600">
  <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
  <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
      <Image src="/images/comparetelecom.png" alt="Flowbite Logo" width={150} height={125}/>
  </a>
  <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
      <button type="button" className="text-white font-semibold bg-[#79CE25] hover:bg-[#79CE25] focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg text-sm px-4 py-2 text-center dark:bg-[#79CE25] dark:hover:bg-[#79CE25] dark:focus:ring-blue-800">Comparer les forfaits</button>
      <button data-collapse-toggle="navbar-sticky" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-sticky" aria-expanded="false">
        <span className="sr-only">Open main menu</span>
        <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
        </svg>
    </button>
  </div>
  <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
    <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 ">

      <li>
        <a href="/forfait" className="block py-2 px-3  hover:bg-[#79CE25] md:hover:bg-transparent md:hover:[#79CE25] md:p-0 md:dark:hover:text-[#79CE25] dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Forfait Mobile</a>
      </li>
      <li>
        <a href="/box" className="block py-2 px-3 hover:bg-[#79CE25] md:hover:bg-transparent md:hover:[#79CE25] md:p-0 md:dark:hover:text-[#79CE25] dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Box Internet</a>
      </li>
      <li>
        <a href="#" className="block py-2 px-3 hover:bg-[#79CE25] md:hover:bg-transparent md:hover:[#79CE25] md:p-0 md:dark:hover:text-[#79CE25] dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Blogue</a>
      </li>

      <li className="block py-2 px-3 ">
      
      </li>
    </ul>
    <Themeswitch />
  </div>
  </div>
</nav>

  );
};

export default Navbar;


