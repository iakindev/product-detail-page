import React from 'react';
import { Search } from './icons';
import MobileMenu from './MobileMenu';

const Navmenu: React.FC = ({ children }) => (
  <ul className="ml-auto list-none flex flex-wrap justify-between space-x-6 overflow-hidden h-full">
    {children}
    <li className="inline-block md:hidden w-auto">
      <button className="text-2xl h-full text-nav-gray text-black">
        <Search />
      </button>
    </li>
    <li className="inline-block md:hidden w-auto">
      <button className="text-2xl h-full text-nav-gray">
        <MobileMenu />
      </button>
    </li>
  </ul>
);

export default Navmenu;
