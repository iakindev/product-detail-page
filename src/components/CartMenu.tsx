import React, { useContext } from 'react';
import HighlightContainer from './HighlightContainer';
import CartContext from '../context/CartContext';
import CartItem from './CartItem';
import BigButton from './BigButton';

const CartMenu: React.FC = () => {
  const { cart } = useContext(CartContext);

  return (
    <div className="py-1 focus:outline-none flex flex-col gap-4">
      <div className="text-2xl h-12">
        <span className="font-bold">Your Cart</span>
        <HighlightContainer className="ml-5 font-bold">{cart?.length}</HighlightContainer>
      </div>
      {cart?.map((item, i) => {
        return <CartItem product={item} />;
      })}
      {cart && cart?.length > 0 && (
        <div>
          <BigButton
            nobg
            nocolor
            className="mx-1 border-2 text-gray-500 border-gray-500 hover:bg-gray-200"
            onClick={() => alert(cart)}
          >
            View cart
          </BigButton>
          <BigButton className="mx-1 hover:bg-purple-600" onClick={() => alert(cart)}>
            Checkout
          </BigButton>
        </div>
      )}
    </div>
  );
};

export default CartMenu;
