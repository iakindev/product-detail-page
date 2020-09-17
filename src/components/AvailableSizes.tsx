import React, { Dispatch, SetStateAction } from 'react';

interface Props {
  sizes: number[];
  state: { size: number | undefined; setSize: Dispatch<SetStateAction<number | undefined>> };
}

// Probably bad idea to name a component with it's current content in some page.
// Might change
const AvailableSizes: React.FC<Props> = ({ sizes, state }) => (
  <div className="mt-5">
    <h4 className={`font-sans font-semibold mb-2`}>Available Sizes</h4>
    <div className={`flex flex-wrap justify-between`}>
      {sizes.map((size, i) => {
        return (
          <button
            className={`inline-block w-16 h-16 border 
            ${
              // If size equals to size that assigned to this element,
              // highlight with border-purple-700
              state.size === size ? 'border-purple-700' : 'border-gray-300'
            } rounded-lg focus:outline-none`}
            key={`${i}-${size}`}
            onClick={() => state.setSize(size)}
          >
            {size}
          </button>
        );
      })}
    </div>
  </div>
);

export default AvailableSizes;
