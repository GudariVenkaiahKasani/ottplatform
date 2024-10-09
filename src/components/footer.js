import React from "react";

function footer() {
  return (
    <div className="bg-slate-500">
      <div className="pt-5 flex gap-2 justify-center items-center">
        <input
          type="email"
          id="email"
          name="email"
          required
          placeholder="Enter your email address"
          className="w-80 rounded-xl opacity-80 bg-black p-3 border-0 text-white outline-none"
        ></input>
        <button className="bg-red-600 text-white text-extrabold rounded-xl p-3">
          Get Started
        </button>
      </div>
      <div className="pl-32 text-xl py-5">Questions? Call 000-800-919-1694</div>
      <div className="flex justify-around pb-20">
        <div className="flex flex-col gap-4 ">
          <span className="underline cursor-pointer">FAQ</span>
          <span className="underline cursor-pointer">Investor Relations</span>
          <span className="underline cursor-pointer">Privacy</span>
          <span className="underline cursor-pointer">Speed Test</span>
        </div>
        <div className="flex flex-col gap-4">
          <span className="underline cursor-pointer">Help Center</span>
          <span className="underline cursor-pointer">Jobs</span>
          <span className="underline cursor-pointer">Cookie Preference</span>
          <span className="underline cursor-pointer">Legal Notice</span>
        </div>
        <div className="flex flex-col gap-4">
          <span className="underline cursor-pointer">Account</span>
          <span className="underline cursor-pointer">Ways To Watch</span>
          <span className="underline cursor-pointer">
            Corpatare Information
          </span>
          <span className="underline cursor-pointer">Only On Movieflix</span>
        </div>
        <div className="flex flex-col gap-4">
          <span className="underline cursor-pointer">Media Center</span>
          <span className="underline cursor-pointer">Terms To use</span>
          <span className="underline cursor-pointer">Contact US</span>
        </div>
      </div>
    </div>
  );
}

export default footer;
