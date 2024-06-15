import React from "react";
import { IMD_URL_CDN } from "../utils/constants";

const MovieCard = ({ posterPath }) => {
  if (!posterPath) return;
  return (
    <>
      <div className="md:w-48 w-36">
        <img
          className="rounded-md"
          alt="Movie Card "
          src={IMD_URL_CDN + posterPath}
        />
      </div>
    </>
  );
};

export default MovieCard;
