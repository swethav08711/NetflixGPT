import React, { useState } from "react";
import Header from "./Header";

const Login = () => {
  const [isSignIn, setIsSignIn] = useState(true);
  const toggleSignInForm = () => {
    setIsSignIn(!isSignIn);
  };
  return (
    <>
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/fc164b4b-f085-44ee-bb7f-ec7df8539eff/d23a1608-7d90-4da1-93d6-bae2fe60a69b/IN-en-20230814-popsignuptwoweeks-perspective_alpha_website_large.jpg"
          alt="logo"
        />
      </div>

      <form className="absolute  w-3/12 bg-black mx-auto p-12 my-36 right-0 left-0 text-white bg-opacity-80">
        <h1 className="font-bold text-3xl py-4">
          {isSignIn ? " Sign In" : "Sign Up"}
        </h1>
        {!isSignIn && (
          <input
            type="text"
            placeholder="Full Name"
            className="p-4 my-4 w-full bg-black rounded-md bg-opacity-40 border border-gray-500"
          />
        )}
        <input
          type="text"
          placeholder="Email Address"
          className="p-4 my-4 w-full bg-black rounded-md bg-opacity-40 border border-gray-500"
        />

        <input
          type="password"
          placeholder="Password"
          className="p-4 my-4 w-full bg-black rounded-md bg-opacity-40 border border-gray-500"
        />
        <button className="p-4 my-6 bg-red-700 w-full rounded-md">
          {isSignIn ? " Sign In" : "Sign Up"}
        </button>
        <p className="text-md py-4 cursor-pointer" onClick={toggleSignInForm}>
          {isSignIn
            ? " New to Netflix? Sign Up now"
            : "Already registered Sign In now."}
        </p>
      </form>
    </>
  );
};

export default Login;