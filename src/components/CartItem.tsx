import React from 'react';
import HighlightContainer from './HighlightContainer';
import Product from '../types/Product';

interface Props {
  product: Product;
}

const CartItem: React.FC<Props> = ({ product }) => (
  <div className="h-24 flex">
    {/* Image container */}
    <div className="h-full w-24 flex items-center justify-center shadow-2xl rounded-2lg overflow-hidden bg-white">
      <img className="h-full object-contain" src={product.images[0]} alt={product.name} />
    </div>
    {/* Product details */}
    <div className="flex flex-col ml-4 flex-1">
      <div className="text-xl font-bold">{product.name}</div>
      <div className="flex h-12 items-center justify-between w-full">
        <div className="font-bold text-gray-500 p-2">Size: {product.selectedSize}</div>
        <HighlightContainer className="font-bold">
          {/* Show discounted price if there is a discount */}
          {product.discount?.price || product.price} TL
        </HighlightContainer>
      </div>
    </div>
  </div>
);

export default CartItem;
