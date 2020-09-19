import React from 'react';
import { Search } from './icons';

const Searchbar: React.FC = () => (
  <div
    className="md:flex items-center hidden h-full pl-2 pr-2 text-2xl border rounded-md"
    style={{ borderColor: '#E3E4E8' }}
  >
    <Search style={{ color: '#9EA1A8' }} />
    <input className="w-40 pl-1 text-lg outline-none" placeholder="Search" />
  </div>
);

export default Searchbar;
