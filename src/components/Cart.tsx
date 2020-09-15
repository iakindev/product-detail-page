import React from 'react';
import { Basket } from './icons';

interface Props {
  count: number;
}

const Cart: React.FC<Props> = ({ count }) => (
  <button className="h-full border rounded-md text-2xl items-center pl-2 pr-2 hidden sm:hidden md:flex text-gray-500 hover:text-gray-600">
    <Basket className="text-indigo-700" />
    <span className="text-base px-2 ">{count}</span>
  </button>
);

export default Cart;
