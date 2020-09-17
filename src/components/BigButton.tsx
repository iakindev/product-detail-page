import React, { CSSProperties } from 'react';

interface Props {
  className?: string;
  onClick?: () => void;
  style?: CSSProperties;
  // These props exist because I couldn't change the background or color with tailwind,
  // unless I pass these and deactivate corresponding classes
  // I could do with style but... who wants to do that?!
  nobg?: boolean;
  nocolor?: boolean;
}

const BigButton: React.FC<Props> = ({ children, className, style, onClick, nobg, nocolor }) => (
  <button
    className={`text-xl px-10 py-4 rounded-lg text-white font-semibold focus:outline-none mt-5 ${
      !nobg ? 'bg-purple-700' : ''
    } ${!nocolor ? 'text-white' : ''} ${className}`}
    onClick={onClick}
    style={style}
  >
    {children}
  </button>
);

BigButton.defaultProps = {
  className: '',
};

export default BigButton;
