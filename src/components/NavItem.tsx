import React from 'react';

const NavItem: React.FC = ({ children }) => (
  <li className="sm:hidden md:inline-block hidden">
    <button
      className="text-l sm:text-xl text-nav-gray hover:text-gray-700 focus:outline-none h-full font-sans font-bold transition-colors duration-200"
      onClick={() => alert(`Clicked ${children}`)}
    >
      {children}
    </button>
  </li>
);

export default NavItem;
