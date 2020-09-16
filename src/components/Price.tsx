import React from 'react';

interface Props {
  price: number;
  discountedPrice?: number;
}

const Price: React.FC<Props> = ({ price, discountedPrice }) => (
  <div className="h-16 flex mt-2">
    {/* Initial price */}
    <div className="h-full bg-purple-100 inline-flex text-2xl font-sans subpixel-antialiased font-bold justify-center items-center rounded-lg text-purple-700 px-3">
      <span className={`${discountedPrice ? 'line-through' : ''}`}>{price} TL</span>
    </div>
    {discountedPrice && (
      <div className="h-full inline-flex text-2xl font-sans subpixel-antialiased font-bold justify-center items-center rounded-lg text-green-600 px-3">
        {discountedPrice} TL
      </div>
    )}
  </div>
);

export default Price;
