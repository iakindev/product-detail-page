import React from 'react';

interface Props {
  title: string;
  seller: string;
}
const Details: React.FC<Props> = ({ title, seller }) => (
  <div className="md:pl-16">
    <h3 className="font-sans subpixel-antialiased text-5xl font-bold">{title}</h3>
    <h4 className="font-mono subpixel-antialiased text-xl font-normal">
      <span className="text-gray-700">BY</span>{' '}
      <span className="text-indigo-700">{seller.toUpperCase()}</span>
    </h4>
  </div>
);

export default Details;
