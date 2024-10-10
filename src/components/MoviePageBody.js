import { useState, useEffect } from "react";
import mockData from "../utilities/data/data1";
import MoviePageCard from "./MoviePageCard";
//import Hollywoodmovies from "./Hollywoodmovies";
import MovieImageRender from "./MovieImageRender";
import { useNavigate } from "react-router-dom";

const MoviePageBody = () => {
  const [language, setLanguage] = useState("");
  const [genre, setGenre] = useState("");
  const [rating, setRating] = useState("");
  const [moviename, setMovieName] = useState("");
  const [filteredMovies, setFilteredMovies] = useState(mockData.indianMovies);
  const [isOpen, setIsOpen] = useState(false);
  const [movie, setMovie] = useState(null);
  const navigate = useNavigate();
  const [pagenumber, setPageNumber] = useState(1);
  const [pageDispaly] = useState(10);
  const handlePreviousButton = () => {
    setPageNumber(pagenumber - 1);
  };
  const handleNextButton = () => {
    setPageNumber(pagenumber + 1);
  };
  let lastIndexNumber = pagenumber * pageDispaly;
  let firstIndexNumber = lastIndexNumber - pageDispaly;
  let finalmovies = filteredMovies.slice(firstIndexNumber, lastIndexNumber);
  let lastpage = Math.ceil(filteredMovies.length / pageDispaly);

  const hollywoodMovieHandler = () => {
    navigate("/hollywoodmovies");
  };

  const handleCard = (result) => {
    setIsOpen(true);
    setMovie(result);
  };

  const closeImage = () => {
    setIsOpen(false);
    setMovie(null);
  };

  useEffect(() => {
    let updatedMovies = mockData.indianMovies;

    if (language) {
      updatedMovies = updatedMovies.filter(
        (movie) => movie.language === language
      );
    }

    if (genre) {
      updatedMovies = updatedMovies.filter((movie) => movie.genre === genre);
    }

    if (rating) {
      updatedMovies = updatedMovies.filter(
        (movie) => movie.rating >= Number(rating)
      );
    }

    if (moviename) {
      updatedMovies = mockData.indianMovies.filter((movie) =>
        movie.title.toLowerCase().includes(moviename.toLowerCase())
      );
    }

    setFilteredMovies(updatedMovies);
  }, [language, genre, rating, moviename]);

  return (
    <div className="bg-black pt-4 min-h-screen pl-20">
      {isOpen ? (
        <MovieImageRender movie={movie} closeImage={closeImage} />
      ) : (
        <div>
          <div className="flex flex-row justify-around mb-4">
            <select
              onChange={(e) => setLanguage(e.target.value)}
              className="bg-red-700 text-white p-5"
              defaultValue=""
            >
              <option value="">Choose Language</option>
              <option value="Hindi">Hindi</option>
              <option value="Telugu">Telugu</option>
              <option value="Tamil">Tamil</option>
              <option value="Malayalam">Malayalam</option>
              <option value="Kannada">Kannada</option>
            </select>

            <select
              onChange={(e) => setGenre(e.target.value)}
              className="bg-red-700 text-white p-5"
              defaultValue=""
            >
              <option value="">Choose Genre</option>
              <option value="Thriller">Thriller</option>
              <option value="Comedy">Comedy</option>
              <option value="Action">Action</option>
              <option value="Drama">Drama</option>
              <option value="Romance">Romance</option>
            </select>

            <select
              onChange={(e) => setRating(e.target.value)}
              className="bg-red-700 text-white p-5"
              defaultValue=""
            >
              <option value="">Select Rating</option>
              <option value="7">7+</option>
              <option value="8">8+</option>
              <option value="8.5">8.5+</option>
            </select>
            <button
              className="bg-red-700 text-white p-2"
              onClick={hollywoodMovieHandler}
            >
              Watch Hollywood Movies
            </button>

            <div>
              <form onSubmit={(e) => e.preventDefault()}>
                <input
                  type="text"
                  value={moviename}
                  onChange={(e) => setMovieName(e.target.value)}
                  placeholder="Search movies....."
                  className="py-3 px-3 rounded-lg"
                />
                <button
                  type="submit"
                  className="ml-2 p-2 bg-red-600 text-white"
                >
                  Search
                </button>
              </form>
            </div>
          </div>

          <div className="flex flex-wrap justify-center bg-black min-h-screen">
            <div className="bg-black h-screen flex flex-col  items-center">
              <div className="flex flex-wrap gap-10">
                {finalmovies.map((movie) => (
                  <div key={movie.title} onClick={() => handleCard(movie)}>
                    <MoviePageCard
                      key={movie.title}
                      image={movie.imageUrl}
                      title={movie.title}
                    />
                  </div>
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
                        pagenumber === Math.ceil(filteredMovies / pageDispaly)
                      }
                    >
                      Next
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MoviePageBody;
