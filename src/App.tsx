import React, { useState } from 'react';
import MainContainer from './components/MainContainer';
import './style/custom.css';
import './style/tailwind.output.css';
import Product from './types/Product';
import ProductDetails from './screens/ProductDetails';
import { default as CartContext } from './context/CartContext';

const App: React.FC = () => {
  const [cart, setCart] = useState<Product[]>([]);

  return (
    <MainContainer>
      <CartContext.Provider value={{ cart, setCart }}>
        <ProductDetails />
      </CartContext.Provider>
    </MainContainer>
  );
};

export default App;
