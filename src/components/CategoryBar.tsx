import React from 'react';

interface Props {
  trail: string[];
}

const CategoryBar: React.FC<Props> = ({ trail }) => (
  <h3 className="font-bold font-sans subpixel-antialiased" style={{ color: '#6E757F' }}>
    {trail.map((category, i) => `${category.toUpperCase()} ${i + 1 < trail.length ? ' > ' : ''}`)}
  </h3>
);

export default CategoryBar;
