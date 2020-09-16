import React from 'react';

const MainContainer: React.FC = ({ children }) => (
  <div className="min-h-screen flex flex-wrap">{children}</div>
);

export default MainContainer;
