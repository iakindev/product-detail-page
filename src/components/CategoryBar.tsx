import React from 'react';

interface Props {
  trail: string[];
}

const CategoryBar: React.FC<Props> = ({ trail }) => (
  <div className="mt-8">
    {trail.map((category, i) => {
      return (
        <React.Fragment key={`category-${i}`}>
          <button
            className="text-lg tracking-wider font-bold font-mono inline text-gray-600 hover:text-gray-500"
            onClick={() => alert(`Clicked ${category}`)}
          >
            {category.toUpperCase()}
          </button>
          {i + 1 !== trail.length && (
            <span className="px-2" style={{ color: '#6E757F' }}>
              &gt;
            </span>
          )}
        </React.Fragment>
      );
    })}
  </div>
);

export default CategoryBar;
