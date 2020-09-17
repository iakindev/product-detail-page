import { createContext, Dispatch, SetStateAction } from 'react';
import Product from '../types/Product';

interface Props {
  cart: Product[];
  setCart: Dispatch<SetStateAction<Product[]>>;
}

const User = createContext<Partial<Props>>({});

export default User;
