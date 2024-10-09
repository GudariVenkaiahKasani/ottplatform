const TrendingCard = ({ movie }) => {
  return (
    <div className="max-w-xs rounded overflow-hidden shadow-lg pt-8">
      <img
        className="w-60 h-60 rounded-lg cursor-pointer transition-transform transform hover:scale-105 "
        src={movie.image}
        alt={movie.title}
      />
    </div>
  );
};
export default TrendingCard;
