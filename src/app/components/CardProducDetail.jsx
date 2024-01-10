import Image from 'next/image';
import React from 'react';

const CardProducDetail = ({ src, alt }) => {
  return (
    <button className="hover:bg-transparent !relative w-[10.063rem] sm:w-auto sm:h-[10.063rem] md:h-[12.063rem] p-0">
      <Image src={src} alt={alt} fill className=" !w-full !h-full object-cover rounded-xl" />
    </button>
  );
};

export default CardProducDetail;
