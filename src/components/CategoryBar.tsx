import React from 'react';

interface Props {
  trail: string[];
}

const CategoryBar: React.FC<Props> = ({ trail }) => (
  <>
    {trail.map((category, i) => {
      return (
        <>
          <button
            className="font-bold font-sans subpixel-antialiased inline text-gray-600 hover:text-gray-500"
            onClick={() => alert(`Clicked ${category}`)}
          >
            {category.toUpperCase()}
          </button>
          {i + 1 !== trail.length && (
            <span className="px-2" style={{ color: '#6E757F' }}>
              &gt;
            </span>
          )}
        </>
      );
    })}
  </>
);

export default CategoryBar;
