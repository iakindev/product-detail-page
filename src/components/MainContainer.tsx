import React from 'react';

const MainContainer: React.FC = ({ children }) => (
  <div className="flex flex-wrap min-h-screen">{children}</div>
);

export default MainContainer;
