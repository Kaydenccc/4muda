const IconProductDes = ({ meter, lantai, img, alt }) => {
  return (
    <div className="flex gap-4 items-center">
      <img src={img} alt={alt} />
      <span className="text-sm">
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
    </div>
  );
};

export default IconProductDes;
