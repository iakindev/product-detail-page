import React from 'react';
import HighlightContainer from './HighlightContainer';

interface Props {
  price: number;
  discount?: { price: number; rate: number };
}

const Price: React.FC<Props> = ({ price, discount }) => (
  <>
    <div className="flex h-16 mt-2 font-sans text-2xl font-bold">
      {/* Initial price */}
      <HighlightContainer className={`${discount ? 'line-through' : ''}`}>
        {price} TL
      </HighlightContainer>
      {discount && (
        // Discounted price
        <HighlightContainer className="text-green-600" nobg nocolor>
          {discount.price} TL
        </HighlightContainer>
      )}
    </div>
    {/* Discount Rate */}
    {discount && (
      <div className="h-12 mt-2 rounded-lg">
        <HighlightContainer nobg nocolor className="w-full font-mono font-semibold bg-blue-100">
          Discount: -%{discount?.rate}
        </HighlightContainer>
      </div>
    )}
  </>
);

export default Price;
