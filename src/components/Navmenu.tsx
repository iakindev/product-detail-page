import React from 'react';
import { Menu } from './icons';

const Navmenu: React.FC = ({ children }) => (
  <ul className="ml-auto list-none flex flex-wrap justify-between space-x-6 overflow-hidden">
    {children}
    <li className="inline-block md:hidden w-auto">
      <button className="text-2xl h-full text-nav-gray">
        <Menu />
      </button>
    </li>
  </ul>
);

export default Navmenu;
