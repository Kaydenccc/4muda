import Image from "next/legacy/image";
import React from "react";

const CardProducDetail = ({ src, alt, setThumbnail }) => {
  return (
    <button
      onClick={() => setThumbnail(src)}
      className="hover:bg-transparent  w-[10.063rem] sm:w-auto sm:min-h-[10.063rem] md:min-h-[12.063rem] p-0"
    >
      <Image
        src={src}
        alt={alt}
        style={{
          aspectRatio: 4 / 3,
        }}
        layout="fill"
        className="!relative !w-full !h-full object-cover rounded-xl"
      />
    </button>
  );
};

export default CardProducDetail;
