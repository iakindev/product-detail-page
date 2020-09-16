import React from 'react';

interface Props {
  price: number;
  discount?: { price: number; rate: number };
}

const Price: React.FC<Props> = ({ price, discount }) => (
  <>
    <div className="h-16 flex mt-2">
      {/* Initial price */}
      <div className="h-full bg-purple-100 inline-flex text-2xl font-sans subpixel-antialiased font-bold justify-center items-center rounded-lg text-purple-700 px-3">
        <span className={`${discount ? 'line-through' : ''}`}>{price} TL</span>
      </div>
      {discount && (
        <div className="h-full inline-flex text-2xl font-sans subpixel-antialiased font-bold justify-center items-center rounded-lg text-green-600 px-3">
          {discount.price} TL
        </div>
      )}
    </div>
    {
      <div className="h-12 flex items-center justify-center font-mono bg-blue-100 rounded-lg mt-2">
        Discount: -%33
      </div>
    }
  </>
);

export default Price;
