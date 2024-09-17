import { Typography } from "@material-tailwind/react";

export function ImgWithCaption({ src, deskripsi }) {
  return (
    <figure className="w-fit">
      <img
        className=" h-96 rounded-lg object-cover object-center "
        style={{
          aspectRatio: 4 / 3,
        }}
        src={src}
        alt="nature image"
      />
      <Typography
        as="figcaption"
        variant="small"
        className="mt-2 text-center font-normal"
      >
        {deskripsi}
      </Typography>
    </figure>
  );
}
