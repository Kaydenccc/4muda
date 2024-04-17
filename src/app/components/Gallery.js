export function DefaultGallery() {
  const data = [
    {
      imageLink: "/prestasi/4.jpeg",
    },
    {
      imageLink: "/prestasi/1.jpeg",
    },
    {
      imageLink: "/prestasi/3.jpeg",
    },
    {
      imageLink: "/prestasi/2.jpeg",
    },
    {
      imageLink: "/prestasi/5.jpeg",
    },
    {
      imageLink: "/prestasi/6.jpeg",
    },
  ];

  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
      {data.map(({ imageLink }, index) => (
        <div key={index}>
          <img
            className="h-40 w-full max-w-full rounded-lg object-cover object-center"
            src={imageLink}
            alt="gallery-photo"
          />
        </div>
      ))}
    </div>
  );
}
