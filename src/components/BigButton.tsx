import React from 'react';

interface Props {
  className: string;
  onClick: () => void;
}

const BigButton: React.FC<Props> = ({ children, className, onClick }) => (
  <button
    className={`bg-purple-700 text-xl px-10 py-4 rounded-lg text-white font-semibold focus:outline-none mt-5 ${
      className || ''
    }`}
    onClick={onClick}
  >
    {children}
  </button>
);

export default BigButton;
