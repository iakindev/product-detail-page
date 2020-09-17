import React from 'react';

interface Props {
  className?: string;
  nobg?: boolean;
  nocolor?: boolean;
}

const HighlightContainer: React.FC<Props> = ({ className, nobg, nocolor, children }) => (
  <div
    className={`h-full inline-flex justify-center items-center rounded-lg px-3 ${className}
    ${!nobg ? 'bg-purple-100' : ''}
    ${!nocolor ? 'text-purple-700' : ''}`}
  >
    {children}
  </div>
);

HighlightContainer.defaultProps = {
  className: '',
};

export default HighlightContainer;
