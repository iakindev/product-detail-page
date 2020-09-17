import React, { useContext } from 'react';
import Navbar from './Navbar';
import Logo from './Logo';
import Navmenu from './Navmenu';
import NavItem from './NavItem';
import Searchbar from './Searchbar';
import Cart from './Cart';
import Profile from './Profile';
import CartContext from '../context/CartContext';

const Layout: React.FC = ({ children }) => {
  const { cart, setCart } = useContext(CartContext);

  return (
    <>
      <Navbar>
        <Logo />
        <Navmenu>
          <NavItem>Women</NavItem>
          <NavItem>Men</NavItem>
          <NavItem>Children</NavItem>
          <Searchbar />
          {/* In production, I would get count property initialy from API, 
    propably with seperate Auth component which would fetch User from API and
    store the User in Context API or Redux Store */}
          <CartContext.Provider value={{ cart, setCart }}>
            <Cart count={cart ? cart.length : 0} />
          </CartContext.Provider>
        </Navmenu>
        {/* I have manually added ml-6 here. Because initially this component was in Navmenu
but Navmenu has overflow-hidden css. So it was blocking this component's shadow. */}
        <Profile className="ml-6 hidden md:inline-block " />
      </Navbar>
      {children}
    </>
  );
};

export default Layout;
