import React, { useState } from 'react';
import { Basket } from './icons';
import { Menu, MenuProps } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import CartMenu from './CartMenu';

interface Props {
  count: number;
}

const Cart: React.FC<Props> = ({ count }) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const StyledMenu = withStyles({
    paper: {
      borderRadius: '1em',
      marginTop: '3px',
      paddingLeft: '1.25rem', // pl-5
      paddingRight: '1.25rem', // pr-5
    },
  })((props: MenuProps) => <Menu id="simple-menu" {...props} />);

  return (
    <>
      <button
        className="h-full border rounded-md text-2xl items-center pl-2 pr-2 hidden sm:hidden md:flex 
        text-gray-500 hover:text-gray-600 hover:bg-indigo-100 transition-colors duration-200 focus:outline-none"
        onClick={handleClick}
      >
        <Basket className="text-indigo-700" />
        <span className="text-base px-2">{count}</span>
      </button>

      <StyledMenu
        id="simple-menu"
        className="hidden sm:hidden md:block"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
        // Anchor's connection point
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
        // Connects with anchor from top right
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
      >
        <CartMenu />
      </StyledMenu>
    </>
  );
};

export default Cart;
