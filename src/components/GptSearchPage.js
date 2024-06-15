import React from "react";
import GptSearchBar from "./GptSearchBar";
import GptMoviesSuggestions from "./GptMoviesSuggestions";
import { BG_IMAGE } from "../utils/constants";

const GptSearchPage = () => {
  return (
    <div>
      <div className="fixed -z-20 opacity-85">
        <img src={BG_IMAGE} alt="logo" />
      </div>
      <GptSearchBar />
      <GptMoviesSuggestions />
    </div>
  );
};

export default GptSearchPage;
