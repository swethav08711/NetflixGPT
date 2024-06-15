import React, { useRef } from "react";
import lang from "../utils/languageConstant";
import { useDispatch, useSelector } from "react-redux";
import { model } from "../utils/geminiAi";
import { API_CONSTANT } from "../utils/constants";
import { addGptMovieResult } from "../utils/gptSearch";

const GptSearchBar = () => {
  const gptLanguage = useSelector((store) => store?.config?.language);
  const searchText = useRef(null);
  const dispatch = useDispatch();
  const handleGptSearchClick = async () => {
    // make an call to Gemini and get move results
    const gptQuery =
      "Act as a Movie Recommendation system and suggest some movies for the query : " +
      searchText.current.value +
      ". only give me names of 5 movies, comma seperated like the example result given ahead. Example Result: Gadar, Sholay, Don, Golmaal, Koi Mil Gaya";
    const result = await model.generateContent(gptQuery);
    const response = result?.response;
    const text = response?.text().trimEnd().split(",");
    // Fetch Movies
    const gptmoviedata = text?.map((ele) => fetchSearchMovie(ele));
    //  array of promises [promise,promise,promise,promise,promise]
    const tmdbResults = await Promise.all(gptmoviedata);
    console.log(tmdbResults);
    dispatch(
      addGptMovieResult({ movieNames: text, movieResults: tmdbResults })
    );
  };

  // Search Movie in TMDB
  const fetchSearchMovie = async (movieName) => {
    const res = await fetch(
      `https://api.themoviedb.org/3/search/movie?query=${movieName}&include_adult=false&language=${gptLanguage}&page=1`,
      API_CONSTANT
    );
    const data = await res.json();
    return data.results;
  };
  return (
    <div className=" pt-[7%] flex justify-center">
      <form
        className="w-full md:w-1/2  grid grid-cols-12 m-2"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          className="p-4 m-4 col-span-9 rounded-md"
          type="text"
          ref={searchText}
          placeholder={lang[gptLanguage].gptSearchPlaceholder}
        />
        <button
          className="px-4 m-4 col-span-3 py-2 bg-blue-400 text-white rounded-md"
          onClick={handleGptSearchClick}
        >
          {lang[gptLanguage].search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
