import { createContext, Dispatch, SetStateAction } from 'react';

export interface Product {
  id: string;
  name: string;
  selectedSize?: number;
  price: number;
  images: string[];
  seller: string;
  availableSizes: number[];
  discount?: { price: number; rate: number };
}

interface Props {
  cart: Product[];
  setCart: Dispatch<SetStateAction<Product[]>>;
}

const User = createContext<Partial<Props>>({});

export default User;
