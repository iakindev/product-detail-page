import React, { CSSProperties } from 'react';

interface Props {
  className?: string;
  style?: CSSProperties;
  center?: boolean;
  nobg?: boolean;
  nomargin?: boolean;
  nopadding?: boolean;
}

const Container: React.FC<Props> = ({
  children,
  className,
  style,
  center,
  nobg,
  nomargin,
  nopadding,
}) => (
  <div
    className={`xl:container overflow-auto 
    ${!nopadding ? 'px-12 pt-8 pb-20' : ''}
    ${!nomargin ? 'xl:my-8 lg:my-8' : ''}
    ${!nobg ? 'bg-white lg:rounded-xl' : ''}
    ${center ? 'w-full md:mx-auto' : ''}
    ${className || ''}`}
    style={style}
  >
    {children}
  </div>
);

export default Container;
