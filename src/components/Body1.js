import Slider from "react-slick";
import mockData from "../utilities/data/data1";
import TrendingCard from "./TrendingCard";
const Body1 = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  return (
    <div className="w-full px-20">
      <Slider {...settings}>
        {mockData.trendingNow.map((movie) => (
          <TrendingCard movie={movie} key={movie.id} />
        ))}
      </Slider>
    </div>
  );
};
export default Body1;
