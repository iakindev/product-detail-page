import React from 'react';

const Container: React.FC = ({ children }) => (
  <div className="min-h-screen">
    <div className="xl:container xl:mx-auto bg-white lg:rounded-xl xl:mt-8 lg:mt-8 overflow-auto px-12">
      {children}
    </div>
  </div>
);

export default Container;
