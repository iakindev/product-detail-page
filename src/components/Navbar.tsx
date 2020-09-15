import React from 'react';

const Navbar: React.FC = ({ children }) => (
  <nav className="flex h-12 mx-12 mt-8 items-center">{children}</nav>
);

export default Navbar;
