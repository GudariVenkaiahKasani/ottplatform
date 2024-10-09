import { useState, useEffect } from "react";
import mockData from "../utilities/data/data1";
import MoviePageCard from "./MoviePageCard";
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
    <div className="bg-black pt-4 min-h-screen">
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
            {filteredMovies.length > 0 ? (
              filteredMovies.map((result) => (
                <div key={result.title} onClick={() => handleCard(result)}>
                  <MoviePageCard
                    key={result.title}
                    image={result.imageUrl}
                    title={result.title}
                  />
                </div>
              ))
            ) : (
              <div className="flex justify-center items-center h-screen">
                <p className="text-white text-4xl">No movies found</p>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default MoviePageBody;
