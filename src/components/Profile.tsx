import React, { useState } from 'react';
import { Menu, MenuProps } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import ProfileMenu from './ProfileMenu';

interface Props {
  className?: string;
  image: string;
}

const Profile: React.FC<Props> = ({ className, image }) => {
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
    },
  })((props: MenuProps) => <Menu id="simple-menu" {...props} />);

  return (
    <>
      <button
        className={`h-12 w-12 rounded-md shadow-2xl overflow-hidden focus:outline-none ${className}`}
        onClick={handleClick}
      >
        <img src={image} alt="profile" />
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
        <ProfileMenu />
      </StyledMenu>
    </>
  );
};

Profile.defaultProps = { className: '' };

export default Profile;
