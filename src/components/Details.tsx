import React, { useState } from 'react';
import Price from './Price';
import AvailableSizes from './AvailableSizes';
import BigButton from './BigButton';
import SellerInfo from './SellerInfo';

interface Props {
  product: { productId: string; title: string; seller: string; availableSizes: number[] };
}

const Details: React.FC<Props> = ({ product }) => {
  const [size, setSize] = useState<number | undefined>();

  return (
    <div className="md:pl-16 md:pr-16 flex flex-col">
      <h3 className="font-sans text-5xl font-bold">{product.title}</h3>
      <SellerInfo name="DOGO Store" />
      <Price price={419.99} discount={{ rate: 33, price: 279.99 }} />
      <AvailableSizes sizes={product.availableSizes} state={{ size, setSize }} />
      <BigButton
        className={`${!size ? 'opacity-50 cursor-not-allowed' : 'hover:bg-purple-600'}`}
        onClick={() => {
          if (size) {
            alert(JSON.stringify({ id: product.productId, seller: product.seller, size }, null, 4));
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
