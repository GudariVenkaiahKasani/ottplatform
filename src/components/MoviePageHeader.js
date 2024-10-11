import { Link } from "react-router-dom";
const MoviePageHeader = () => {
  return (
    <div className="flex flext-row justify-between bg-slate-600">
      <Link to="/">
        <div className="text-red-800 pl-4 text-4xl py-6">Movieflix</div>
      </Link>
      <div className=" flex flex-row gap-4 py-6">
        <span className="text-white pt-2">Ultimate TV shows && Movies</span>
        <span classname="text-white">
          <Link to="/">
            <button className="text-white bg-red-800 p-2">Join Now</button>
          </Link>
        </span>
        <span>
          <Link to="/signin">
            <button className="text-white bg-slate-500 p-2">Sign In</button>
          </Link>
        </span>
      </div>
    </div>
  );
};
export default MoviePageHeader;
