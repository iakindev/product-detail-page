import React from 'react';

const Navbar: React.FC = ({ children }) => (
  <nav className="flex h-10 mx-12 mt-8 items-center">{children}</nav>
);

export default Navbar;
