import React from 'react';

const Container: React.FC = ({ children }) => (
  <div className="min-h-screen">
    <div className="xl:container xl:mx-auto bg-white lg:rounded-xl xl:my-8 lg:my-8 overflow-auto px-12 py-8">
      {children}
    </div>
  </div>
);

export default Container;
