import React from 'react';

interface Props {
  name: string;
}

const SellerInfo: React.FC<Props> = ({ name }) => (
  <div className="font-mono text-xl font-normal">
    <span className="text-gray-700">BY</span>
    <button className="ml-2 text-indigo-700 outline-none" onClick={() => alert(`Clicked ${name}`)}>
      {name.toUpperCase()}
    </button>
  </div>
);

export default SellerInfo;
