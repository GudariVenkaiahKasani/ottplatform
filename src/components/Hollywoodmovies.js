import { useState } from "react";
import mockData from "../utilities/data/data1";
import MoviePageCard from "./MoviePageCard";
const Hollywoodmovies = () => {
  const [pagenumber, setPageNumber] = useState(1);
  const [pageDispaly] = useState(5);
  const handlePreviousButton = () => {
    setPageNumber(pagenumber - 1);
  };
  const handleNextButton = () => {
    setPageNumber(pagenumber + 1);
  };
  let lastIndexNumber = pagenumber * pageDispaly;
  let firstIndexNumber = lastIndexNumber - pageDispaly;
  let Hollymovies = mockData.movies.slice(firstIndexNumber, lastIndexNumber);
  let lastpage = Math.ceil(mockData.movies.length / pageDispaly);

  return (
    <div className="flex flex-col gap-4 bg-black">
      <div>
        <p className="text-white text-4xl pt-10 pl-10">HollywoodMovies</p>
        <p className="text-white text-2xl pl-10 w-1/2 pt-5">
          Movies move us like nothing else can, whether they’re scary, funny,
          dramatic, romantic or anywhere in-between. So many titles, so much to
          experience.
        </p>
        <p className="text-3xl text-white pl-10 pt-7">Your Next Watch</p>
      </div>
      <div className="bg-black h-screen flex flex-col  items-center">
        <div className="flex flex-wrap gap-10">
          {Hollymovies.map((hollywoodmovie) => (
            <MoviePageCard
              key={hollywoodmovie.title}
              image={hollywoodmovie.image}
              title={hollywoodmovie.title}
            />
          ))}
        </div>
        <div>
          <div className="flex flex-row gap-80 m-6">
            {pagenumber > 1 && (
              <button
                className="text-white bg-red-700 p-2"
                onClick={handlePreviousButton}
                disabled={pagenumber === 1}
              >
                Previous
              </button>
            )}
            {pagenumber < lastpage && (
              <button
                className="text-white bg-red-700 px-5"
                onClick={handleNextButton}
                disabled={
                  pagenumber === Math.ceil(mockData.movies.length / pageDispaly)
                }
              >
                Next
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
export default Hollywoodmovies;
