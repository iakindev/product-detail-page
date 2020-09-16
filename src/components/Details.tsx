import React, { useState } from 'react';
import Price from './Price';
import AvailableSizes from './AvailableSizes';

interface Props {
  product: { productId: string; title: string; seller: string; availableSizes: number[] };
}

const Details: React.FC<Props> = ({ product }) => {
  const [size, setSize] = useState<number | undefined>();

  return (
    <div className="md:pl-16 flex flex-col">
      <h3 className="font-sans subpixel-antialiased text-5xl font-bold">{product.title}</h3>
      <h4 className="font-mono subpixel-antialiased text-xl font-normal">
        <div>
          <span className="text-gray-700">BY</span>
          <button
            className="text-indigo-700 outline-none ml-2"
            onClick={() => alert(`Clicked ${product.seller}`)}
          >
            {product.seller.toUpperCase()}
          </button>
        </div>
      </h4>
      <Price price={419.99} discount={{ rate: 33, price: 279.99 }} />
      <AvailableSizes sizes={product.availableSizes} state={{ size, setSize }} />
      <button
        className="bg-purple-700 text-xl px-10 py-4 rounded-lg text-white font-semibold focus:outline-none hover:bg-purple-600 mt-5"
        onClick={() => alert(JSON.stringify(product, null, 4))}
      >
        Add to Cart
      </button>
    </div>
  );
};

export default Details;
