import React, { useState } from "react";

function SignUp() {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const handleSubmitData = () => {
    setIsSubmitted(true);
    console.log(email, pass);
  };

  return isSubmitted ? (
    <div>Welcome TO Movieflix</div>
  ) : (
    <div className="bg-netflix-bg bg-cover bg-center w-screen h-screen flex justify-center items-center">
      <div className="container mx-auto px-4  ">
        <div className="flex flex-col md:flex-row justify-center items-center space-y-8 md:space-y-0 md:space-x-8">
          <div className="w-full max-w-md bg-black p-8 rounded-lg shadow-md opacity-70">
            <div className="text-xl text-white pr-6 py-6 pl-2"> Sign In</div>
            <form onSubmit={handleSubmitData}>
              <div className="mb-4">
                <label className="block  text-sm font-bold mb-2 text-white">
                  Enter Your Email
                </label>
                <input
                  type="eamil"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                  required
                  name="email"
                  placeholder="Enter Emamil"
                  className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
                />
              </div>
              <div className="mb-4">
                <label className="block  text-sm font-bold mb-2 text-white">
                  Enter your Password
                </label>
                <input
                  type="password"
                  value={pass}
                  onChange={(e) => {
                    setPass(e.target.value);
                  }}
                  name="password"
                  placeholder="password"
                  className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
                />
              </div>

              <button
                type="submit"
                className="w-full px-4 py-2 bg-red-600 text-white font-bold rounded hover:bg-blue-700 focus:outline-none"
              >
                SignIn
              </button>
            </form>
            <div className="pl-44 py-3 text-white">OR</div>
            <button
              type="submit"
              className="w-full px-4 py-2 bg-slate-600 text-white font-bold rounded hover:bg-blue-700 focus:outline-none"
            >
              Use a Signin Code
            </button>
            <div className="pl-32 py-2 text-white">forgot password?</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
