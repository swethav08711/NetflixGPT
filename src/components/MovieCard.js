import React from "react";
import { IMD_URL_CDN } from "../utils/constants";

const MovieCard = ({ posterPath }) => {
  return (
    <div className="w-48">
      <img
        className="rounded-md"
        alt="Movie Card "
        src={IMD_URL_CDN + posterPath}
      />
    </div>
  );
};

export default MovieCard;
