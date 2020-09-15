import React from 'react';

/* I have manually added ml-6 here. Because initially this component was in Navmenu
but Navmenu has overflow-hidden css. So it was blocking this component's shadow. */
const Profile: React.FC = () => (
  <button className="h-12 w-12 rounded-md shadow-2xl ml-6 overflow-hidden hidden sm:hidden md:flex">
    <img src="https://via.placeholder.com/150" alt="profile" />
  </button>
);

export default Profile;
