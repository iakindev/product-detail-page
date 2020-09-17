import React, { useState, useContext } from 'react';
import Price from './Price';
import AvailableSizes from './AvailableSizes';
import BigButton from './BigButton';
import SellerInfo from './SellerInfo';
import CartContext from '../context/CartContext';
import Product from '../types/Product';

interface Props {
  product: Product;
}

const Details: React.FC<Props> = ({ product }) => {
  const { cart, setCart } = useContext(CartContext);
  const [size, setSize] = useState<number | undefined>();

  return (
    <div className="md:pl-16 md:pr-16 flex flex-col">
      <h3 className="font-sans text-5xl font-bold">{product.name}</h3>
      <SellerInfo name="DOGO Store" />
      <Price price={product.price} discount={product.discount} />
      <AvailableSizes sizes={product.availableSizes} state={{ size, setSize }} />
      <BigButton
        className={`${!size ? 'opacity-50 cursor-not-allowed' : 'hover:bg-purple-600'}`}
        onClick={() => {
          if (size) {
            // In real world app we would send this data to API with useEffect hook
            if (cart) setCart?.([...cart, { ...product, selectedSize: size }]);
          } else {
            alert('Please select a size to continue');
          }
        }}
      >
        Add to Cart
      </BigButton>
    </div>
  );
};

export default Details;
