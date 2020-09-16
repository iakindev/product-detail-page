import React from 'react';
import Price from './Price';

interface Props {
  title: string;
  seller: string;
}

const Details: React.FC<Props> = ({ title, seller }) => (
  <div className="md:pl-16">
    <h3 className="font-sans subpixel-antialiased text-5xl font-bold">{title}</h3>
    <h4 className="font-mono subpixel-antialiased text-xl font-normal">
      <div>
        <span className="text-gray-700">BY</span>
        <button
          className="text-indigo-700 outline-none ml-2"
          onClick={() => alert(`Clicked ${seller}`)}
        >
          {seller.toUpperCase()}
        </button>
      </div>
    </h4>
    <Price price={419.99} discountedPrice={279.99} />
  </div>
);

export default Details;
