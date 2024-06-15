import React from "react";
import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const GptMoviesSuggestions = () => {
  const { movieNames, movieResults } = useSelector((store) => store?.gpt);

  if (!movieNames) return;
  return (
    <div className=" bg-black text-white bg-opacity-90">
      <div>
        {movieNames.map((movie, index) => (
          <MovieList
            key={movie}
            title={movieNames[index]}
            movies={movieResults[index]}
          />
        ))}
      </div>
    </div>
  );
};

export default GptMoviesSuggestions;
