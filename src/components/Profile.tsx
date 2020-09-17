import React from 'react';

interface Props {
  className?: string;
  image: string;
}

const Profile: React.FC<Props> = ({ className, image }) => (
  <button
    className={`h-12 w-12 rounded-md shadow-2xl overflow-hidden focus:outline-none ${className}`}
  >
    <img src={image} alt="profile" />
  </button>
);

Profile.defaultProps = { className: '' };

export default Profile;
