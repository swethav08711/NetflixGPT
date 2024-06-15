import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ movies, title }) => {
  if (!movies) return;
  return (
    <div className="py-5">
      <h1 className=" px-14  py-4 lg:text-2xl md:text-xl uppercase text-lg">
        {title}
      </h1>
      <div className="flex overflow-x-scroll ">
        <div className="flex gap-5  pl-14 ">
          {movies?.map((ele) => (
            <MovieCard key={ele.id} posterPath={ele.poster_path} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
