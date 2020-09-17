import React, { useState } from 'react';
import { Menu } from './icons';
import { Drawer } from '@material-ui/core';
import ProfileMenu from './ProfileMenu';

const MobileMenu: React.FC = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Menu onClick={() => setOpen(true)} />
      <Drawer anchor="top" open={open} onClose={() => setOpen(false)}>
        <ProfileMenu />
      </Drawer>
    </>
  );
};

export default MobileMenu;
