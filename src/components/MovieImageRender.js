const MovieImageRender = ({ movie, closeImage }) => {
  const handleWatchNow = () => {
    window.location.href = "https://www.youtube.com";
  };

  return (
    <div className="w-screen h-screen">
      <div className="w-[100%]">
        <img
          src={movie.imageUrl}
          alt="image.tilr"
          className="w-screen  h-[80vh] relative"
        ></img>
        <div className="absolute bottom-10 left-10 flex flex-col gap-1">
          <button
            className="text-white bg-red-700 p-2 rounded-full "
            onClick={handleWatchNow}
          >
            Watch Now
          </button>
          <p className="text-white text-3xl">{movie.title}</p>
          <p className="text-white text-xl">ReleaseYear:{movie.releaseYear}</p>
          <p className="text-white text-xl">Rating:{movie.rating}</p>
          <p className="text-white text-xl">Type:{movie.genre}</p>
          <button className="bg-red-700 text-white p-1" onClick={closeImage}>
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
export default MovieImageRender;
