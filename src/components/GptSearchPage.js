import React from "react";
import GptSearchBar from "./GptSearchBar";
import GptMoviesSuggestions from "./GptMoviesSuggestions";
import { BG_IMAGE } from "../utils/constants";

const GptSearchPage = () => {
  return (
    <div>
      <div className="fixed -z-20 opacity-85">
        <img className="h-screen object-cover w-screen" src={BG_IMAGE} alt="logo" />
      </div>
      <div className="md:pt-0 pt-[15%]">
        <GptSearchBar />

        <GptMoviesSuggestions />
      </div>
    </div>
  );
};

export default GptSearchPage;
