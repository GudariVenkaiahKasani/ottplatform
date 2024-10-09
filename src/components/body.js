import { useState } from "react";
import { useNavigate } from "react-router-dom";
import mockData from "../utilities/data/data1";

const Body = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const submitHandler = (e) => {
    e.preventDefault();

    const emailExists = mockData.dummyCredentials.some(
      (user) => user.mail === email
    );

    if (emailExists) {
      navigate("/movies");
    } else {
      setError("Email not found. Please enter a valid email.");
    }
  };

  return (
    <div className="flex flex-col justify-center items-center">
      <div className="font-extrabold text-5xl text-white w-1/3">
        Unlimited movies, TV shows and more
      </div>
      <div className="text-white text-2xl font-extrabold pt-4">
        Starts at ₹149. Cancel at any time.
      </div>
      <div className="text-white text-xl pt-5 font-extrabold">
        Ready to watch? Enter your email to create or restart your membership.
      </div>
      <div className="pt-5 flex gap-2 ">
        <form onSubmit={submitHandler}>
          <input
            type="email"
            id="email"
            name="email"
            required
            placeholder="Enter your email address"
            className="w-80 rounded-xl opacity-80 bg-black p-3 border-0 text-white outline-none"
            onChange={(e) => setEmail(e.target.value)}
          ></input>
          <button
            type="submit"
            className="bg-red-600 text-white text-extrabold rounded-xl p-3"
          >
            Get Started
          </button>
        </form>
      </div>
      {error && <div className="text-red-500 pt-4">{error}</div>}
    </div>
  );
};

export default Body;
