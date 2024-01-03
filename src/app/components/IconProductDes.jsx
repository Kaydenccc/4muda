const IconProductDes = ({ meter, lantai, img, alt }) => {
  return (
    <p className="flex gap-4 items-center">
      <img src={img} alt={alt} />
      <span>
        {lantai ? (
          <>
            {lantai}
            <span className="ml-1">Lantai</span>
          </>
        ) : (
          <>
            {meter}m<sup>2</sup>
          </>
        )}
      </span>
    </p>
  );
};

export default IconProductDes;
