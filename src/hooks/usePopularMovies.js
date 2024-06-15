import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { API_CONSTANT } from "../utils/constants";
import { addPopularMovies } from "../utils/movieSlice";

const usePopularMovies = () => {
  const dispatch = useDispatch();
  const getpopularMovies = async () => {
    const response = await fetch(
      "https://api.themoviedb.org/3/movie/popular?page=2",
      API_CONSTANT
    );
    const data = await response.json();
    dispatch(addPopularMovies(data.results));
  };
  useEffect(() => {
    getpopularMovies();
  }, []);
};

export default usePopularMovies;
