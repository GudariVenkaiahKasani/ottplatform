const MoviePageCard = ({ image, title }) => {
  return (
    <div className="flex flex-col items-center p-4">
      <div className="w-48 h-72 rounded-lg overflow-hidden shadow-lg transition-transform transform hover:scale-105 cursor-pointer">
        <img src={image} alt={title + " image"} className="w-[100%] h-[100%]" />
      </div>
      <h3 className="text-white text-lg font-semibold mt-2">{title}</h3>
    </div>
  );
};
export default MoviePageCard;
