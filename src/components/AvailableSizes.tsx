import React, { Dispatch, SetStateAction } from 'react';

interface Props {
  sizes: number[];
  state: { size: number | undefined; setSize: Dispatch<SetStateAction<number | undefined>> };
}
const AvailableSizes: React.FC<Props> = ({ sizes, state }) => (
  <div className="mt-5">
    <h4 className={`font-sans subpixel-antialiased font-semibold mb-2`}>Available Sizes</h4>
    <div className={`grid grid-cols-${sizes.length}`}>
      {sizes.map((size, i) => {
        return (
          <button
            className={`inline-block w-16 h-16 border 
            ${
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
