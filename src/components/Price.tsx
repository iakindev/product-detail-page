import React from 'react';
import HighlightContainer from './HighlightContainer';

interface Props {
  price: number;
  discount?: { price: number; rate: number };
}

const Price: React.FC<Props> = ({ price, discount }) => (
  <>
    <div className="h-16 flex mt-2 text-2xl font-sans font-bold">
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
    <div className="h-12 rounded-lg mt-2">
      <HighlightContainer nobg nocolor className="font-mono bg-blue-100 w-full font-semibold">
        Discount: -%{discount?.rate}
      </HighlightContainer>
    </div>
  </>
);

export default Price;
