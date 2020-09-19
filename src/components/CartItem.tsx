import React from 'react';
import HighlightContainer from './HighlightContainer';
import Product from '../types/Product';

interface Props {
  product: Product;
}

const CartItem: React.FC<Props> = ({ product }) => (
  <div className="flex h-24">
    {/* Image container */}
    <div className="rounded-2lg flex items-center justify-center w-24 h-full overflow-hidden bg-white shadow-2xl">
      <img className="object-contain h-full" src={product.images[0]} alt={product.name} />
    </div>
    {/* Product details */}
    <div className="flex flex-col flex-1 ml-4">
      <div className="text-xl font-bold">{product.name}</div>
      <div className="flex items-center justify-between w-full h-12">
        <div className="p-2 font-bold text-gray-500">Size: {product.selectedSize}</div>
        <HighlightContainer className="font-bold">
          {/* Show discounted price if there is a discount */}
          {product.discount?.price || product.price} TL
        </HighlightContainer>
      </div>
    </div>
  </div>
);

export default CartItem;
