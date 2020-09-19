import React from 'react';
import { Search } from './icons';
import MobileMenu from './MobileMenu';

const Navmenu: React.FC = ({ children }) => (
  <ul className="flex flex-wrap justify-between h-full ml-auto space-x-6 overflow-hidden list-none">
    {children}
    <li className="md:hidden inline-block w-auto">
      <button className="text-nav-gray h-full text-2xl text-black">
        <Search />
      </button>
    </li>
    <li className="md:hidden inline-block w-auto">
      <button className="text-nav-gray h-full text-2xl">
        <MobileMenu />
      </button>
    </li>
  </ul>
);

export default Navmenu;
