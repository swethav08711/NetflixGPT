import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { API_CONSTANT } from "../utils/constants";
import { addTopRatedMovies } from "../utils/movieSlice";

const useTopRated = () => {
  const dispatch = useDispatch();
  const getTopRatedMovies = async () => {
    const response = await fetch(
      "https://api.themoviedb.org/3/movie/top_rated?page=3",
      API_CONSTANT
    );
    const data = await response.json();
    dispatch(addTopRatedMovies(data.results));
  };
  useEffect(() => {
    getTopRatedMovies();
  }, []);
};

export default useTopRated;
