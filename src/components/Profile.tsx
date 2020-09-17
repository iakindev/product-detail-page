import React from 'react';

interface Props {
  className?: string;
}

const Profile: React.FC<Props> = ({ className }) => (
  <button className={`h-12 w-12 rounded-md shadow-2xl overflow-hidden ${className}`}>
    <img src="https://via.placeholder.com/150" alt="profile" />
  </button>
);

Profile.defaultProps = { className: '' };

export default Profile;
