import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { API_CONSTANT } from "../utils/constants";
import { addTopRatedMovies } from "../utils/movieSlice";

const useTopRated = () => {
  const dispatch = useDispatch();
  const topRatedMovies = useSelector((store) => store?.movies?.topRatedMovies);
  const getTopRatedMovies = async () => {
    const response = await fetch(
      "https://api.themoviedb.org/3/movie/top_rated?page=3",
      API_CONSTANT
    );
    const data = await response.json();
    dispatch(addTopRatedMovies(data.results));
  };
  useEffect(() => {
    !topRatedMovies && getTopRatedMovies();
  }, []);
};

export default useTopRated;
