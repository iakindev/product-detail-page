import React from 'react';

const NavItem: React.FC = ({ children }) => (
  <li className="hidden sm:hidden md:inline-block">
    <button
      className="text-l sm:text-xl font-bold font-sans subpixel-antialiased h-full text-nav-gray"
      onClick={() => alert(`Clicked ${children}`)}
    >
      {children}
    </button>
  </li>
);

export default NavItem;
