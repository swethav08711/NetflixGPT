import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { API_CONSTANT } from "../utils/constants";
import { addtrailerVideo } from "../utils/movieSlice";

const useMovieTrailer = (movieId) => {
  const dispatch = useDispatch(null);
  const trailerVideo = useSelector((store) => store?.movies?.trailerVideo);
  const fetchMovieVideo = async () => {
    const res = await fetch(
      `https://api.themoviedb.org/3/movie/${movieId}/videos`,
      API_CONSTANT
    );
    const data = await res.json();
    const resultData = data.results.filter((ele) => ele.type === "Trailer");
    const trailerData = resultData.length ? resultData[0] : data.results[0];
    dispatch(addtrailerVideo(trailerData));
  };
  useEffect(() => {
    !trailerVideo && fetchMovieVideo();
  }, []);
};

export default useMovieTrailer;
