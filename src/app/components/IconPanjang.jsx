import React from 'react';

const IconPanjang = () => {
  return (
    <svg width={31} height={31} viewBox="0 0 31 31" fill="none" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
      <circle cx="15.5" cy="15.5" r="15.5" fill="white" />
      <rect x={5} y={5} width={20} height={20} fill="url(#pattern0)" />
      <defs>
        <pattern id="pattern0" patternContentUnits="objectBoundingBox" width={1} height={1}>
          <use xlinkHref="#image0_0_1" transform="scale(0.00195312)" />
        </pattern>
        <image
          id="image0_0_1"
          width={512}
          height={512}
          xlinkHref="data:image/png;base64,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"
        />
      </defs>
    </svg>
  );
};

export default IconPanjang;
