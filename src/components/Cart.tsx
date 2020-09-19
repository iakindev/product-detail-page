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
        className="sm:hidden md:flex hover:text-gray-600 hover:bg-indigo-100 focus:outline-none items-center hidden h-full pl-2 pr-2 text-2xl text-gray-500 transition-colors duration-200 border rounded-md"
        onClick={handleClick}
      >
        <Basket className="text-indigo-700" />
        <span className="px-2 text-base">{count}</span>
      </button>

      <StyledMenu
        id="simple-menu"
        className="sm:hidden md:block hidden"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose} 
        // Anchor's connect
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }} 
        // Connects with anchor from
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
