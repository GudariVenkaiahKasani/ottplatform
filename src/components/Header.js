import Body from "./body.js";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="bg-netflix-bg bg-cover bg-center h-[90vh] w-full inset-0 bg-black opacity-90">
      <div className="justify-between flex ">
        <div className="font-black text-red-700  text-5xl p-7">MOVIEFLIX</div>
        <div className="pr-40 py-7">
          <button className="bg-red-600 px-2 py-1 rounded-lg text-white">
            <Link to="signin">SignIn</Link>
          </button>
        </div>
      </div>
      <div className="py-60">
        <Body />
      </div>
    </div>
  );
};
export default Header;
